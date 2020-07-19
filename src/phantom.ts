import { XDOMFunction, PhantomDOM, PhantomElement } from "./types/phantomDOM";
import phantomExorciser from "./phantomExorciser";

function PHANTOM(phantomStore: any, XDOM: XDOMFunction) {
  let phantomDOM: PhantomDOM = {
    test: {
      tagName: "div",
      attributes: { id: "PHANTOM" },
      children: [],
      innerHTML: "",
      dataset: {},
    },
  };

  function launchDOM() {
    const body = document.body;
    if (!document.querySelector("#PHANTOM")) {
      const PHANTOM = document.createElement("div");
      PHANTOM.id = "PHANTOM";
      body?.appendChild(PHANTOM);
    }
    try {
      const DOM = renderPhantomElement();
      swapElement(DOM, document.querySelector("#PHANTOM"));
      return DOM;
    } catch (errorNode) {
      throw new DOMException(
        `🚫Potentially dangerous node, <${errorNode}>. Phantom has destroyed it. If you think this is a mistake, please raise an issue at: https://github.com/sidiousvic/phantom/issues`
      );
    }
  }

  function coalescePhantomDOM() {
    return `
    <div id="PHANTOM">
      ${XDOM()}
    </div> 
    `;
  }

  function renderPhantomElement(
    phantomElement = transmuteHTMLtoPhantomElement(coalescePhantomDOM())
  ) {
    const { tagName, attributes, innerHTML, children } = phantomElement;
    let phantomElementChildren: PhantomElement[] = [];

    if (children && children.length) {
      (phantomElementChildren as unknown) = Array.prototype.map.call(
        children,
        (child) => {
          renderPhantomElement(child);
        }
      );
    }

    let DOMElement;

    /* 
    DOM diffing ahead. ↓↓↓
    We look at the current phantomDOM, and for every phantomDOMNode, if
    * the id of the phantomDOMNode and current phantomElement match, and
    * the nodes' dataset (data-phantom) are different (their data has changed),
    we swap the nodes.
    */
    Object.values(phantomDOM).map((phantomDOMNode: any) => {
      if (
        phantomDOMNode.attributes.id === phantomElement.attributes.id &&
        JSON.stringify(phantomDOMNode.dataset) !==
          JSON.stringify(phantomElement.dataset)
      ) {
        let newNode = document.createElement(tagName);
        for (const [k, v] of Object.entries(attributes)) {
          newNode.setAttribute(k, v as string);
        }
        /* 
    Node replacement and sanitization. ↓↓↓
    We swap the obsolete DOMElement's innerHTML with the updated version.
    The updated innerHTML is sanitized before this swap.
    * if safe, we return the updated DOMElement.
    * if dangerous, log an error and abort rendering
    */
        try {
          newNode.innerHTML = phantomExorciser(innerHTML);
          let targetNode = document.getElementById(attributes.id);
          swapElement(newNode, targetNode);
          DOMElement = newNode;
        } catch (dangerousNodeError) {
          throw new Error(dangerousNodeError);
        }
      }
    });

    phantomDOM[attributes.id] = phantomElement;
    DOMElement = document.createElement(tagName);

    for (const [k, v] of Object.entries(attributes)) {
      DOMElement.setAttribute(k, v as string);
    }

    /* 
    HTML replacement and sanitization. ↓↓↓
    We swap the obsolete DOMElement's innerHTML with the updated version.
    The updated innerHTML is sanitized before this swap.
    * if safe, we return the updated DOMElement.
    * if dangerous, log an error and abort rendering
    */
    try {
      DOMElement.innerHTML = phantomExorciser(innerHTML);
      return DOMElement;
    } catch (dangerousNodeError) {
      throw new Error(dangerousNodeError);
    }
  }

  function transmuteHTMLtoPhantomElement(html: string) {
    if (typeof html !== "string") html = (html as HTMLElement).outerHTML;
    // TODO: find a better solution to mapped elements ↓↓↓
    html = html.replace(/>,/g, ">"); // ← remove commas from mapped element arrays
    let doc = new DOMParser().parseFromString(html, "text/html");
    const $el = doc.body.firstChild;
    const {
      tagName,
      children,
      id,
      dataset,
      classList,
      innerHTML,
      outerHTML,
    } = $el as HTMLElement;

    let phantomElementChildren: PhantomElement[] = [];

    if (children && children.length) {
      (phantomElementChildren as unknown) = Array.prototype.map.call(
        children,
        (child) => {
          return transmuteHTMLtoPhantomElement(child);
        }
      );
    }
    return {
      tagName,
      attributes: {
        id,
        class: classList,
      },
      dataset,
      children: phantomElementChildren,
      innerHTML,
      outerHTML,
    };
  }

  function swapElement(
    swapIn: Text | HTMLElement,
    swapOut: ChildNode | null | undefined
  ) {
    swapOut?.replaceWith(swapIn);
    return swapIn;
  }

  phantomStore.subscribe(() => {
    renderPhantomElement();
  });

  return {
    fire: phantomStore.fire,
    data: phantomStore.data,
    appear: launchDOM,
  };
}

export default PHANTOM;
