function PHANTOM(reduxStore: any, XDOM: XDOMFunction) {
  function LAUNCHDOM() {
    const body = document.body;
    if (!document.querySelector("#PHANTOM")) {
      const PHANTOM = document.createElement("div");
      PHANTOM.id = "PHANTOM";
      body?.appendChild(PHANTOM);
    }
    document.getElementById("X")?.firstChild;
    const DOM = RENDER();
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

  function TRANSMUTEXMLTOPSEUDOEL(xml: string) {
    if (typeof xml !== "string") xml = (xml as HTMLElement).outerHTML;
    let doc = new DOMParser().parseFromString(xml, "text/html");
    const $el = doc.body.firstChild;
    const { tagName, children, id, classList, innerHTML } = $el as HTMLElement;
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
      $children,
      innerHTML,
    };
  }

  function RENDERPSEUDOELEMENT({ tagName, attributes, innerHTML }: PseudoNode) {
    const ELEMENT = document.createElement(tagName);

    for (const [k, v] of Object.entries(attributes)) {
      ELEMENT.setAttribute(k, v as string);
    }

    ELEMENT.innerHTML = innerHTML;

    return ELEMENT;
  }

  function RENDER() {
    const element = TRANSMUTEXMLTOPSEUDOEL(COALESCEXDOM());
    if (typeof element === "string") {
      return document.createTextNode(element);
    }
    return RENDERPSEUDOELEMENT(element);
  }

  function SWAPNODE(
    pseudoNode: Text | HTMLElement,
    targetNode: ChildNode | null | undefined
  ) {
    targetNode?.replaceWith(pseudoNode);
    return pseudoNode;
  }

  reduxStore.subscribe(() => {
    SWAPNODE(LAUNCHDOM(), document.getElementById("X")?.firstChild);
  });

  return {
    fire: reduxStore.dispatch,
    data: reduxStore.getState,
    launch: LAUNCHDOM,
  };
}

export default PHANTOM;
