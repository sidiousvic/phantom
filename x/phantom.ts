"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

/*
phantomExorciser tag, attrribute, and CSS allowlists
*/
function unconstrained(attribute) {
  return attribute;
}

const allowedAttributes = {
  abbr: unconstrained,
  accept: unconstrained,
  "accept-charset": unconstrained,
  accesskey: unconstrained,
  action: unconstrained,
  align: unconstrained,
  alt: unconstrained,
  autocomplete: unconstrained,
  autosave: unconstrained,
  axis: unconstrained,
  bgcolor: unconstrained,
  border: unconstrained,
  cellpadding: unconstrained,
  cellspacing: unconstrained,
  challenge: unconstrained,
  char: unconstrained,
  charoff: unconstrained,
  charset: unconstrained,
  checked: unconstrained,
  cite: unconstrained,
  class: unconstrained,
  clear: unconstrained,
  color: unconstrained,
  cols: unconstrained,
  colspan: unconstrained,
  compact: unconstrained,
  contenteditable: unconstrained,
  coords: unconstrained,
  datetime: unconstrained,
  dir: unconstrained,
  disabled: unconstrained,
  draggable: unconstrained,
  dropzone: unconstrained,
  enctype: unconstrained,
  for: unconstrained,
  frame: unconstrained,
  headers: unconstrained,
  height: unconstrained,
  high: unconstrained,
  href: unconstrained,
  hreflang: unconstrained,
  hspace: unconstrained,
  ismap: unconstrained,
  id: unconstrained,
  keytype: unconstrained,
  label: unconstrained,
  lang: unconstrained,
  list: unconstrained,
  longdesc: unconstrained,
  low: unconstrained,
  max: unconstrained,
  maxlength: unconstrained,
  media: unconstrained,
  method: unconstrained,
  min: unconstrained,
  multiple: unconstrained,
  name: unconstrained,
  nohref: unconstrained,
  noshade: unconstrained,
  novalidate: unconstrained,
  nowrap: unconstrained,
  open: unconstrained,
  optimum: unconstrained,
  pattern: unconstrained,
  placeholder: unconstrained,
  prompt: unconstrained,
  pubdate: unconstrained,
  radiogroup: unconstrained,
  readonly: unconstrained,
  rel: unconstrained,
  required: unconstrained,
  rev: unconstrained,
  reversed: unconstrained,
  rows: unconstrained,
  rowspan: unconstrained,
  rules: unconstrained,
  scope: unconstrained,
  selected: unconstrained,
  shape: unconstrained,
  size: unconstrained,
  span: unconstrained,
  spellcheck: unconstrained,
  src: unconstrained,
  start: unconstrained,
  step: unconstrained,
  style: unconstrained,
  summary: unconstrained,
  tabindex: unconstrained,
  target: unconstrained,
  title: unconstrained,
  type: unconstrained,
  usemap: unconstrained,
  valign: unconstrained,
  value: unconstrained,
  vspace: unconstrained,
  width: unconstrained,
  wrap: unconstrained,
};
const allowedTags = {
  a: allowedAttributes,
  abbr: allowedAttributes,
  acronym: allowedAttributes,
  address: allowedAttributes,
  area: allowedAttributes,
  article: allowedAttributes,
  aside: allowedAttributes,
  b: allowedAttributes,
  bdi: allowedAttributes,
  big: allowedAttributes,
  blockquote: allowedAttributes,
  br: allowedAttributes,
  button: allowedAttributes,
  caption: allowedAttributes,
  center: allowedAttributes,
  cite: allowedAttributes,
  code: allowedAttributes,
  col: allowedAttributes,
  colgroup: allowedAttributes,
  data: allowedAttributes,
  datalist: allowedAttributes,
  dd: allowedAttributes,
  del: allowedAttributes,
  details: allowedAttributes,
  dfn: allowedAttributes,
  dir: allowedAttributes,
  div: allowedAttributes,
  dl: allowedAttributes,
  dt: allowedAttributes,
  em: allowedAttributes,
  fieldset: allowedAttributes,
  figcaption: allowedAttributes,
  figure: allowedAttributes,
  font: allowedAttributes,
  footer: allowedAttributes,
  form: allowedAttributes,
  h1: allowedAttributes,
  h2: allowedAttributes,
  h3: allowedAttributes,
  h4: allowedAttributes,
  h5: allowedAttributes,
  h6: allowedAttributes,
  header: allowedAttributes,
  hr: allowedAttributes,
  i: allowedAttributes,
  img: allowedAttributes,
  input: allowedAttributes,
  ins: allowedAttributes,
  kbd: allowedAttributes,
  keygen: allowedAttributes,
  label: allowedAttributes,
  legend: allowedAttributes,
  li: allowedAttributes,
  main: allowedAttributes,
  map: allowedAttributes,
  mark: allowedAttributes,
  menu: allowedAttributes,
  menuitem: allowedAttributes,
  meter: allowedAttributes,
  nav: allowedAttributes,
  ol: allowedAttributes,
  optgroup: allowedAttributes,
  option: allowedAttributes,
  output: allowedAttributes,
  p: allowedAttributes,
  pre: allowedAttributes,
  progress: allowedAttributes,
  q: allowedAttributes,
  rp: allowedAttributes,
  rt: allowedAttributes,
  ruby: allowedAttributes,
  s: allowedAttributes,
  samp: allowedAttributes,
  section: allowedAttributes,
  select: allowedAttributes,
  small: allowedAttributes,
  span: allowedAttributes,
  strike: allowedAttributes,
  strong: allowedAttributes,
  sub: allowedAttributes,
  summary: allowedAttributes,
  sup: allowedAttributes,
  table: allowedAttributes,
  tbody: allowedAttributes,
  td: allowedAttributes,
  textarea: allowedAttributes,
  tfoot: allowedAttributes,
  th: allowedAttributes,
  thead: allowedAttributes,
  time: allowedAttributes,
  tr: allowedAttributes,
  tt: allowedAttributes,
  u: allowedAttributes,
  ul: allowedAttributes,
  var: allowedAttributes,
  wbr: allowedAttributes,
};
const allowedCSS = [
  "background",
  "background-attachment",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "caption-side",
  "clear",
  "clip",
  "color",
  "content",
  "counter-increment",
  "counter-reset",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "float",
  "font",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-weight",
  "height",
  "left",
  "letter-spacing",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "max-height",
  "max-width",
  "min-height",
  "min-width",
  "opacity",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "quotes",
  "right",
  "table-layout",
  "text-align",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-style",
  "text-indent",
  "text-transform",
  "top",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "white-space",
  "widows",
  "width",
  "word-spacing",
  "z-index",
];

function exorciseNode(node) {
  const doc = document.implementation.createHTMLDocument();
  const nodeName = node.nodeName.toLowerCase();

  if (nodeName == "#text") {
    return node; // let text nodes be
  }

  if (nodeName == "#comment") {
    return doc.createTextNode(""); // let comments die
  } // throw error in case of disallowed nodes

  if (!allowedTags.hasOwnProperty(nodeName)) {
    // ain't dealing with this node
    throw new Error(nodeName);
  }

  const exorcisedNode = doc.createElement(nodeName); // re-inject allowed attributes

  for (
    let nodeAttributes = 0;
    nodeAttributes < node.attributes.length;
    nodeAttributes++
  ) {
    var _node$attributes$item;

    const attributeName =
      (_node$attributes$item = node.attributes.item(nodeAttributes)) === null ||
      _node$attributes$item === void 0
        ? void 0
        : _node$attributes$item.name;

    if (allowedTags[nodeName].hasOwnProperty(attributeName)) {
      const sanitizer = allowedTags[nodeName][attributeName];
      exorcisedNode.setAttribute(
        attributeName,
        sanitizer(node.getAttribute(attributeName))
      );
    }
  } // re-inject allowed css

  for (let css in allowedCSS) {
    exorcisedNode.style[Number(allowedCSS[css])] =
      node.style[Number(allowedCSS[css])];
  } // recursively sanitize childNodes

  while (node.childNodes.length > 0) {
    const child = node.removeChild(node.childNodes[0]);
    exorcisedNode.appendChild(exorciseNode(child));
  }

  return exorcisedNode;
}

/*
 * This is an adaptation of Alok Menghrajani's HTML sanitizer by sidiousvic.
 
 https://www.quaxio.com/html_white_listed_sanitizer/

 * Takes a potentiallyDangerousHTML string, returns a sanitized (exorcised) node.
 */
function phantomExorciser(potentiallyDangerousHTML) {
  const doc = document.implementation.createHTMLDocument();
  const div = doc.createElement("div");
  div.innerHTML = potentiallyDangerousHTML;
  return exorciseNode(div).innerHTML;
}

const PHANTOM = (phantomComponent, phantomStore) => {
  let phantomDOM = {
    test: {
      tagName: "div",
      attributes: {
        id: "PHANTOM",
      },
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
      body === null || body === void 0 ? void 0 : body.appendChild(PHANTOM);
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
      ${phantomComponent()}
    </div> 
    `;
  }

  function renderPhantomElement(
    phantomElement = transmuteHTMLtoPhantomElement(coalescePhantomDOM())
  ) {
    const { tagName, attributes, innerHTML, children } = phantomElement;
    let phantomElementChildren = [];

    if (children && children.length) {
      phantomElementChildren = Array.prototype.map.call(children, (child) => {
        renderPhantomElement(child);
      });
    }

    let DOMElement;
    /*
    DOM diffing ahead. ↓↓↓
    We look at the current phantomDOM, and for every phantomDOMNode, if
    * the id of the phantomDOMNode and current phantomElement match, and
    * the nodes' dataset (data-phantom) are different (their data has changed),
    we swap the nodes.
    */

    Object.values(phantomDOM).map((phantomDOMNode) => {
      if (
        phantomDOMNode.attributes.id === phantomElement.attributes.id &&
        JSON.stringify(phantomDOMNode.dataset) !==
          JSON.stringify(phantomElement.dataset)
      ) {
        let newNode = document.createElement(tagName);

        for (const [k, v] of Object.entries(attributes)) {
          newNode.setAttribute(k, v);
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
      DOMElement.setAttribute(k, v);
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

  function transmuteHTMLtoPhantomElement(html) {
    if (typeof html !== "string") html = html.outerHTML; // TODO: find a better solution to mapped elements ↓↓↓

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
    } = $el;
    let phantomElementChildren = [];

    if (children && children.length) {
      phantomElementChildren = Array.prototype.map.call(children, (child) => {
        return transmuteHTMLtoPhantomElement(child);
      });
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

  function swapElement(swapIn, swapOut) {
    swapOut === null || swapOut === void 0
      ? void 0
      : swapOut.replaceWith(swapIn);
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
};

function createPhantomStore(reducer) {
  let state = reducer(undefined, {});
  const subscriptions = [];
  return {
    data: () => state,
    fire: (action) => {
      state = reducer(state, action);
      subscriptions.forEach((subscription) => subscription());
    },
    subscribe: (subscription) => {
      subscriptions.push(subscription);
    },
  };
}

exports.createPhantomStore = createPhantomStore;
exports.default = PHANTOM;
