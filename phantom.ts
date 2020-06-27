function PHANTOM(reduxStore: any, XDOM: XDOMFunction) {
  let pseudoDOM: pseudoDOM = {
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
    const DOM = renderPseudoElement();
    swapElement(DOM, document.querySelector("#PHANTOM"));
    return DOM;
  }

  function coalescePhantomDOM() {
    return `
    <div id="PHANTOM">
      ${XDOM()}
    </div>
    `;
  }

  function renderPseudoElement(
    pseudoElement = transmuteXMLtoPseudoElement(coalescePhantomDOM())
  ) {
    const { tagName, attributes, innerHTML, children } = pseudoElement;
    let $children: PseudoElement[] = [];

    if (children && children.length) {
      ($children as unknown) = Array.prototype.map.call(children, (child) => {
        renderPseudoElement(child);
      });
    }

    let DOMElement;

    // dom diffing
    Object.values(pseudoDOM).map((pseudoDOMNode: any) => {
      if (
        pseudoDOMNode.attributes.id === pseudoElement.attributes.id &&
        JSON.stringify(pseudoDOMNode.dataset) !==
          JSON.stringify(pseudoElement.dataset)
      ) {
        let newNode = document.createElement(tagName);
        for (const [k, v] of Object.entries(attributes)) {
          newNode.setAttribute(k, v as string);
        }
        newNode.innerHTML = innerHTML;

        let targetNode = document.getElementById(attributes.id);
        swapElement(newNode, targetNode);
        DOMElement = newNode;
      }
    });

    pseudoDOM[attributes.id] = pseudoElement;
    DOMElement = document.createElement(tagName);

    for (const [k, v] of Object.entries(attributes)) {
      DOMElement.setAttribute(k, v as string);
    }

    DOMElement.innerHTML = innerHTML;
    return DOMElement;
  }

  function transmuteXMLtoPseudoElement(xml: string) {
    if (typeof xml !== "string") xml = (xml as HTMLElement).outerHTML;
    // TODO: find a better solution to mapped elements ↓↓↓
    xml = xml.replace(/>,/g, ">"); // remove commas from mapped element arrays
    let doc = new DOMParser().parseFromString(xml, "text/html");
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

    let $children: PseudoElement[] = [];

    if (children && children.length) {
      ($children as unknown) = Array.prototype.map.call(children, (child) => {
        return transmuteXMLtoPseudoElement(child);
      });
    }
    return {
      tagName,
      attributes: {
        id,
        class: classList,
      },
      dataset,
      children: $children,
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

  reduxStore.subscribe(() => {
    renderPseudoElement();
  });

  return {
    fire: reduxStore.dispatch,
    data: reduxStore.getState,
    launch: launchDOM,
  };
}

export default PHANTOM;
