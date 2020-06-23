type PseudoNode = {
  tagName: string;
  attributes: { id: string; class: string | DOMTokenList };
  $children: PseudoNode[];
  innerHTML: string;
};

type XDOMFunction = {
  (): [string, any];
};

function PHANTOM(reduxStore: any, XDOM: XDOMFunction) {
  let phantomDOM: any = { test: { attributes: { id: 0 }, dataset: {} } };

  function LAUNCHDOM() {
    const body = document.body;
    if (!document.querySelector("#PHANTOM")) {
      const PHANTOM = document.createElement("div");
      PHANTOM.id = "PHANTOM";
      body?.appendChild(PHANTOM);
    }
    const DOM = RENDERPSEUDOELEMENT();
    SWAPNODE(DOM, document.querySelector("#PHANTOM"));
    return DOM;
  }

  function COALESCEXDOM() {
    return `
    <div id="PHANTOM">
    ${XDOM()}
    </div>
    `;
  }

  function RENDERPSEUDOELEMENT(
    pseudoElement = TRANSMUTEXMLTOPSEUDOEL(COALESCEXDOM())
  ) {
    const {
      tagName,
      attributes,
      innerHTML,
      children /*dataset*/,
    } = pseudoElement;

    let $children: PseudoNode[] = [];

    if (children && children.length) {
      ($children as unknown) = Array.prototype.map.call(children, (child) => {
        RENDERPSEUDOELEMENT(child);
      });
    }

    let DOMElement;

    // dom diffing
    Object.values(phantomDOM).map((phantomNode: any) => {
      if (
        phantomNode.attributes.id === pseudoElement.attributes.id &&
        JSON.stringify(phantomNode.dataset) !==
          JSON.stringify(pseudoElement.dataset)
      ) {
        let newNode = document.createElement(tagName);
        for (const [k, v] of Object.entries(attributes)) {
          newNode.setAttribute(k, v as string);
        }
        newNode.innerHTML = innerHTML;
        let targetNode = document.querySelector(`#${attributes.id}`);
        SWAPNODE(newNode, targetNode);
        DOMElement = newNode;
      }
    });

    phantomDOM[attributes.id] = pseudoElement;
    DOMElement = document.createElement(tagName);

    for (const [k, v] of Object.entries(attributes)) {
      DOMElement.setAttribute(k, v as string);
    }

    DOMElement.innerHTML = innerHTML;
    return DOMElement;
  }

  function TRANSMUTEXMLTOPSEUDOEL(xml: string) {
    if (typeof xml !== "string") xml = (xml as HTMLElement).outerHTML;
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

    let $children: PseudoNode[] = [];

    if (children && children.length) {
      ($children as unknown) = Array.prototype.map.call(children, (child) => {
        return TRANSMUTEXMLTOPSEUDOEL(child);
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

  function SWAPNODE(
    pseudoNode: Text | HTMLElement,
    targetNode: ChildNode | null | undefined
  ) {
    targetNode?.replaceWith(pseudoNode);
    return pseudoNode;
  }

  reduxStore.subscribe(() => {
    RENDERPSEUDOELEMENT();
  });

  return {
    fire: reduxStore.dispatch,
    data: reduxStore.getState,
    launch: LAUNCHDOM,
  };
}

export default PHANTOM;
