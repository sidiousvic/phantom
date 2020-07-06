module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./phantom.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./phantom.ts":
/*!********************!*\
  !*** ./phantom.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanitizer_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanitizer/sanitizer */ "./sanitizer/sanitizer.ts");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function PHANTOM(reduxStore, XDOM) {
    var pseudoDOM = {
        test: {
            tagName: "div",
            attributes: { id: "PHANTOM" },
            children: [],
            innerHTML: "",
            dataset: {},
        },
    };
    function launchDOM() {
        var body = document.body;
        if (!document.querySelector("#PHANTOM")) {
            var PHANTOM_1 = document.createElement("div");
            PHANTOM_1.id = "PHANTOM";
            body === null || body === void 0 ? void 0 : body.appendChild(PHANTOM_1);
        }
        var DOM = renderPseudoElement();
        swapElement(DOM, document.querySelector("#PHANTOM"));
        return DOM;
    }
    function coalescePhantomDOM() {
        return "\n    <div id=\"PHANTOM\">\n      " + XDOM() + "\n    </div>\n    ";
    }
    function renderPseudoElement(pseudoElement) {
        var e_1, _a;
        if (pseudoElement === void 0) { pseudoElement = transmuteHTMLtoPseudoElement(coalescePhantomDOM()); }
        var tagName = pseudoElement.tagName, attributes = pseudoElement.attributes, innerHTML = pseudoElement.innerHTML, children = pseudoElement.children;
        var $children = [];
        if (children && children.length) {
            $children = Array.prototype.map.call(children, function (child) {
                renderPseudoElement(child);
            });
        }
        var DOMElement;
        // DOM diffing ahead. ↓↓↓
        // We look at the current pseudoDOM, and for every pseudoDOMNode, if
        // * the id of the pseudoDOMNode and current pseudoElement match, and
        // * the nodes' dataset (data-phantom) are different (their data has changed),
        // we swap the nodes.
        Object.values(pseudoDOM).map(function (pseudoDOMNode) {
            var e_2, _a;
            if (pseudoDOMNode.attributes.id === pseudoElement.attributes.id &&
                JSON.stringify(pseudoDOMNode.dataset) !==
                    JSON.stringify(pseudoElement.dataset)) {
                var newNode = document.createElement(tagName);
                try {
                    for (var _b = __values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                        newNode.setAttribute(k, v);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                newNode.innerHTML = Object(_sanitizer_sanitizer__WEBPACK_IMPORTED_MODULE_0__["default"])(innerHTML);
                var targetNode = document.getElementById(attributes.id);
                swapElement(newNode, targetNode);
                DOMElement = newNode;
            }
        });
        pseudoDOM[attributes.id] = pseudoElement;
        DOMElement = document.createElement(tagName);
        try {
            for (var _b = __values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                DOMElement.setAttribute(k, v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        DOMElement.innerHTML = Object(_sanitizer_sanitizer__WEBPACK_IMPORTED_MODULE_0__["default"])(innerHTML);
        return DOMElement;
    }
    function transmuteHTMLtoPseudoElement(html) {
        if (typeof html !== "string")
            html = html.outerHTML;
        // TODO: find a better solution to mapped elements ↓↓↓
        html = html.replace(/>,/g, ">"); // ← remove commas from mapped element arrays
        var doc = new DOMParser().parseFromString(html, "text/html");
        var $el = doc.body.firstChild;
        var _a = $el, tagName = _a.tagName, children = _a.children, id = _a.id, dataset = _a.dataset, classList = _a.classList, innerHTML = _a.innerHTML, outerHTML = _a.outerHTML;
        var $children = [];
        if (children && children.length) {
            $children = Array.prototype.map.call(children, function (child) {
                return transmuteHTMLtoPseudoElement(child);
            });
        }
        return {
            tagName: tagName,
            attributes: {
                id: id,
                class: classList,
            },
            dataset: dataset,
            children: $children,
            innerHTML: innerHTML,
            outerHTML: outerHTML,
        };
    }
    function swapElement(swapIn, swapOut) {
        swapOut === null || swapOut === void 0 ? void 0 : swapOut.replaceWith(swapIn);
        return swapIn;
    }
    reduxStore.subscribe(function () {
        renderPseudoElement();
    });
    return {
        fire: reduxStore.dispatch,
        data: reduxStore.getState,
        launch: launchDOM,
    };
}
/* harmony default export */ __webpack_exports__["default"] = (PHANTOM);


/***/ }),

/***/ "./sanitizer/allowed.ts":
/*!******************************!*\
  !*** ./sanitizer/allowed.ts ***!
  \******************************/
/*! exports provided: allowedTags, allowedCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedTags", function() { return allowedTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedCSS", function() { return allowedCSS; });
// phantom official tag, attr, css allowLists
function unconstrained(attribute) {
    return attribute;
}
var allowedAttributes = {
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
var allowedTags = {
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
var allowedCSS = [
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


/***/ }),

/***/ "./sanitizer/sanitizer.ts":
/*!********************************!*\
  !*** ./sanitizer/sanitizer.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sanitize; });
/* harmony import */ var _allowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowed */ "./sanitizer/allowed.ts");
/*
 * This is an adaptation of Alok Menghrajani's HTML sanitizer, by sidiousvic.
 https://www.quaxio.com/html_white_listed_sanitizer/
 * Takes a potentiallyDangerousHTML string, returns a sanitized node.
 */

function sanitizeNode(node) {
    var _a;
    var doc = document.implementation.createHTMLDocument();
    var nodeName = node.nodeName.toLowerCase();
    if (nodeName == "#text") {
        return node; // let text nodes be
    }
    if (nodeName == "#comment") {
        return doc.createTextNode(""); // let comments die
    }
    // throw error in case of disallowed nodes
    if (!_allowed__WEBPACK_IMPORTED_MODULE_0__["allowedTags"].hasOwnProperty(nodeName)) {
        console.error("\uD83D\uDEABPotentially dangerous node, <" + nodeName + ">. Phantom has destroyed it. If you think this is a mistake, please raise an issue at: https://github.com/sidiousvic/phantom/issues\n      "); // ain't dealing with this node
        var errorElement = doc.createElement("div");
        errorElement.innerText =
            "⚠️ Potentially dangerous node. Check the console for error messages.";
        return errorElement;
    }
    var sanitizedNode = doc.createElement(nodeName);
    // re-inject allowed attributes
    for (var nodeAttributes = 0; nodeAttributes < node.attributes.length; nodeAttributes++) {
        var attributeName = (_a = node.attributes.item(nodeAttributes)) === null || _a === void 0 ? void 0 : _a.name;
        if (_allowed__WEBPACK_IMPORTED_MODULE_0__["allowedTags"][nodeName].hasOwnProperty(attributeName)) {
            var sanitizer = _allowed__WEBPACK_IMPORTED_MODULE_0__["allowedTags"][nodeName][attributeName];
            sanitizedNode.setAttribute(attributeName, sanitizer(node.getAttribute(attributeName)));
        }
    }
    // re-inject allowed css
    for (var css in _allowed__WEBPACK_IMPORTED_MODULE_0__["allowedCSS"]) {
        sanitizedNode.style[_allowed__WEBPACK_IMPORTED_MODULE_0__["allowedCSS"][css]] = node.style[_allowed__WEBPACK_IMPORTED_MODULE_0__["allowedCSS"][css]];
    }
    // recursively sanitize childNodes
    while (node.childNodes.length > 0) {
        var child = node.removeChild(node.childNodes[0]);
        sanitizedNode.appendChild(sanitizeNode(child));
    }
    return sanitizedNode;
}
function sanitize(potentiallyDangerousHTML) {
    var doc = document.implementation.createHTMLDocument();
    var div = doc.createElement("div");
    div.innerHTML = potentiallyDangerousHTML;
    return sanitizeNode(div).innerHTML;
}


/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9waGFudG9tLnRzIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9zYW5pdGl6ZXIvYWxsb3dlZC50cyIsIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tLy4vc2FuaXRpemVyL3Nhbml0aXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY2QztBQUU3QyxTQUFTLE9BQU8sQ0FBQyxVQUFlLEVBQUUsSUFBa0I7SUFDbEQsSUFBSSxTQUFTLEdBQWM7UUFDekIsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsRUFBRSxFQUFF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QUUsYUFBYTtJQUN0QixPQUFPLEVBQUUsYUFBYTtJQUN0QixJQUFJLEVBQUUsYUFBYTtJQUNuQixLQUFLLEVBQUUsYUFBYTtJQUNwQixLQUFLLEVBQUUsYUFBYTtJQUNwQixLQUFLLEVBQUUsYUFBYTtJQUNwQixJQUFJLEVBQUUsYUFBYTtJQUNuQixPQUFPLEVBQUUsYUFBYTtJQUN0QixPQUFPLEVBQUUsYUFBYTtJQUN0QixlQUFlLEVBQUUsYUFBYTtJQUM5QixNQUFNLEVBQUUsYUFBYTtJQUNyQixRQUFRLEVBQUUsYUFBYTtJQUN2QixHQUFHLEVBQUUsYUFBYTtJQUNsQixRQUFRLEVBQUUsYUFBYTtJQUN2QixTQUFTLEVBQUUsYUFBYTtJQUN4QixRQUFRLEVBQUUsYUFBYTtJQUN2QixPQUFPLEVBQUUsYUFBYTtJQUN0QixHQUFHLEVBQUUsYUFBYTtJQUNsQixLQUFLLEVBQUUsYUFBYTtJQUNwQixPQUFPLEVBQUUsYUFBYTtJQUN0QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsYUFBYTtJQUNuQixJQUFJLEVBQUUsYUFBYTtJQUNuQixRQUFRLEVBQUUsYUFBYTtJQUN2QixNQUFNLEVBQUUsYUFBYTtJQUNyQixLQUFLLEVBQUUsYUFBYTtJQUNwQixFQUFFLEVBQUUsYUFBYTtJQUNqQixPQUFPLEVBQUUsYUFBYTtJQUN0QixLQUFLLEVBQUUsYUFBYTtJQUNwQixJQUFJLEVBQUUsYUFBYTtJQUNuQixJQUFJLEVBQUUsYUFBYTtJQUNuQixRQUFRLEVBQUUsYUFBYTtJQUN2QixHQUFHLEVBQUUsYUFBYTtJQUNsQixHQUFHLEVBQUUsYUFBYTtJQUNsQixTQUFTLEVBQUUsYUFBYTtJQUN4QixLQUFLLEVBQUUsYUFBYTtJQUNwQixNQUFNLEVBQUUsYUFBYTtJQUNyQixHQUFHLEVBQUUsYUFBYTtJQUNsQixRQUFRLEVBQUUsYUFBYTtJQUN2QixJQUFJLEVBQUUsYUFBYTtJQUNuQixNQUFNLEVBQUUsYUFBYTtJQUNyQixPQUFPLEVBQUUsYUFBYTtJQUN0QixVQUFVLEVBQUUsYUFBYTtJQUN6QixNQUFN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QUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZELElBQU0sU0FBUyxHQUFHLG9EQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsYUFBYSxDQUFDLFlBQVksQ0FDeEIsYUFBYSxFQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFXLENBQ3RELENBQUM7U0FDSDtLQUNGO0lBRUQsd0JBQXdCO0lBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUksbURBQVUsRUFBRTtRQUMxQixhQUFhLENBQUMsS0FBSyxDQUFDLG1EQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1EQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUVELGtDQUFrQztJQUNsQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFvQixDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFFYyxTQUFTLFFBQVEsQ0FBQyx3QkFBZ0M7SUFDL0QsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBRXpELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsR0FBRyxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztJQUV6QyxPQUFRLFlBQVksQ0FBQyxHQUFHLENBQWlCLENBQUMsU0FBUyxDQUFDO0FBQ3RELENBQUMiLCJmaWxlIjoicGhhbnRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGhhbnRvbS50c1wiKTtcbiIsImltcG9ydCBzYW5pdGl6ZSBmcm9tIFwiLi9zYW5pdGl6ZXIvc2FuaXRpemVyXCI7XG5cbmZ1bmN0aW9uIFBIQU5UT00ocmVkdXhTdG9yZTogYW55LCBYRE9NOiBYRE9NRnVuY3Rpb24pIHtcbiAgbGV0IHBzZXVkb0RPTTogcHNldWRvRE9NID0ge1xuICAgIHRlc3Q6IHtcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGlkOiBcIlBIQU5UT01cIiB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgaW5uZXJIVE1MOiBcIlwiLFxuICAgICAgZGF0YXNldDoge30sXG4gICAgfSxcbiAgfTtcblxuICBmdW5jdGlvbiBsYXVuY2hET00oKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1BIQU5UT01cIikpIHtcbiAgICAgIGNvbnN0IFBIQU5UT00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgUEhBTlRPTS5pZCA9IFwiUEhBTlRPTVwiO1xuICAgICAgYm9keT8uYXBwZW5kQ2hpbGQoUEhBTlRPTSk7XG4gICAgfVxuICAgIGNvbnN0IERPTSA9IHJlbmRlclBzZXVkb0VsZW1lbnQoKTtcbiAgICBzd2FwRWxlbWVudChET00sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUEhBTlRPTVwiKSk7XG4gICAgcmV0dXJuIERPTTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvYWxlc2NlUGhhbnRvbURPTSgpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJQSEFOVE9NXCI+XG4gICAgICAke1hET00oKX1cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUHNldWRvRWxlbWVudChcbiAgICBwc2V1ZG9FbGVtZW50ID0gdHJhbnNtdXRlSFRNTHRvUHNldWRvRWxlbWVudChjb2FsZXNjZVBoYW50b21ET00oKSlcbiAgKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lLCBhdHRyaWJ1dGVzLCBpbm5lckhUTUwsIGNoaWxkcmVuIH0gPSBwc2V1ZG9FbGVtZW50O1xuICAgIGxldCAkY2hpbGRyZW46IFBzZXVkb0VsZW1lbnRbXSA9IFtdO1xuXG4gICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgKCRjaGlsZHJlbiBhcyB1bmtub3duKSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIHJlbmRlclBzZXVkb0VsZW1lbnQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IERPTUVsZW1lbnQ7XG5cbiAgICAvLyBET00gZGlmZmluZyBhaGVhZC4g4oaT4oaT4oaTXG4gICAgLy8gV2UgbG9vayBhdCB0aGUgY3VycmVudCBwc2V1ZG9ET00sIGFuZCBmb3IgZXZlcnkgcHNldWRvRE9NTm9kZSwgaWZcbiAgICAvLyAqIHRoZSBpZCBvZiB0aGUgcHNldWRvRE9NTm9kZSBhbmQgY3VycmVudCBwc2V1ZG9FbGVtZW50IG1hdGNoLCBhbmRcbiAgICAvLyAqIHRoZSBub2RlcycgZGF0YXNldCAoZGF0YS1waGFudG9tKSBhcmUgZGlmZmVyZW50ICh0aGVpciBkYXRhIGhhcyBjaGFuZ2VkKSxcbiAgICAvLyB3ZSBzd2FwIHRoZSBub2Rlcy5cbiAgICBPYmplY3QudmFsdWVzKHBzZXVkb0RPTSkubWFwKChwc2V1ZG9ET01Ob2RlOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcHNldWRvRE9NTm9kZS5hdHRyaWJ1dGVzLmlkID09PSBwc2V1ZG9FbGVtZW50LmF0dHJpYnV0ZXMuaWQgJiZcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocHNldWRvRE9NTm9kZS5kYXRhc2V0KSAhPT1cbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShwc2V1ZG9FbGVtZW50LmRhdGFzZXQpXG4gICAgICApIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICAgIG5ld05vZGUuc2V0QXR0cmlidXRlKGssIHYgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdOb2RlLmlubmVySFRNTCA9IHNhbml0aXplKGlubmVySFRNTCk7XG5cbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVzLmlkKTtcbiAgICAgICAgc3dhcEVsZW1lbnQobmV3Tm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgICAgIERPTUVsZW1lbnQgPSBuZXdOb2RlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHNldWRvRE9NW2F0dHJpYnV0ZXMuaWRdID0gcHNldWRvRWxlbWVudDtcbiAgICBET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICBET01FbGVtZW50LnNldEF0dHJpYnV0ZShrLCB2IGFzIHN0cmluZyk7XG4gICAgfVxuXG4gICAgRE9NRWxlbWVudC5pbm5lckhUTUwgPSBzYW5pdGl6ZShpbm5lckhUTUwpO1xuICAgIHJldHVybiBET01FbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNtdXRlSFRNTHRvUHNldWRvRWxlbWVudChodG1sOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGh0bWwgIT09IFwic3RyaW5nXCIpIGh0bWwgPSAoaHRtbCBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MO1xuICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgc29sdXRpb24gdG8gbWFwcGVkIGVsZW1lbnRzIOKGk+KGk+KGk1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLz4sL2csIFwiPlwiKTsgLy8g4oaQIHJlbW92ZSBjb21tYXMgZnJvbSBtYXBwZWQgZWxlbWVudCBhcnJheXNcbiAgICBsZXQgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgICBjb25zdCAkZWwgPSBkb2MuYm9keS5maXJzdENoaWxkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgZGF0YXNldCxcbiAgICAgIGNsYXNzTGlzdCxcbiAgICAgIGlubmVySFRNTCxcbiAgICAgIG91dGVySFRNTCxcbiAgICB9ID0gJGVsIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgbGV0ICRjaGlsZHJlbjogUHNldWRvRWxlbWVudFtdID0gW107XG5cbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAoJGNoaWxkcmVuIGFzIHVua25vd24pID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbXV0ZUhUTUx0b1BzZXVkb0VsZW1lbnQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZCxcbiAgICAgICAgY2xhc3M6IGNsYXNzTGlzdCxcbiAgICAgIH0sXG4gICAgICBkYXRhc2V0LFxuICAgICAgY2hpbGRyZW46ICRjaGlsZHJlbixcbiAgICAgIGlubmVySFRNTCxcbiAgICAgIG91dGVySFRNTCxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc3dhcEVsZW1lbnQoXG4gICAgc3dhcEluOiBUZXh0IHwgSFRNTEVsZW1lbnQsXG4gICAgc3dhcE91dDogQ2hpbGROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzd2FwT3V0Py5yZXBsYWNlV2l0aChzd2FwSW4pO1xuICAgIHJldHVybiBzd2FwSW47XG4gIH1cblxuICByZWR1eFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgcmVuZGVyUHNldWRvRWxlbWVudCgpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGZpcmU6IHJlZHV4U3RvcmUuZGlzcGF0Y2gsXG4gICAgZGF0YTogcmVkdXhTdG9yZS5nZXRTdGF0ZSxcbiAgICBsYXVuY2g6IGxhdW5jaERPTSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUEhBTlRPTTtcbiIsIi8vIHBoYW50b20gb2ZmaWNpYWwgdGFnLCBhdHRyLCBjc3MgYWxsb3dMaXN0c1xuXG5mdW5jdGlvbiB1bmNvbnN0cmFpbmVkKGF0dHJpYnV0ZTogc3RyaW5nIHwgbnVsbCkge1xuICByZXR1cm4gYXR0cmlidXRlO1xufVxuXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IHtcbiAgYWJicjogdW5jb25zdHJhaW5lZCxcbiAgYWNjZXB0OiB1bmNvbnN0cmFpbmVkLFxuICBcImFjY2VwdC1jaGFyc2V0XCI6IHVuY29uc3RyYWluZWQsXG4gIGFjY2Vzc2tleTogdW5jb25zdHJhaW5lZCxcbiAgYWN0aW9uOiB1bmNvbnN0cmFpbmVkLFxuICBhbGlnbjogdW5jb25zdHJhaW5lZCxcbiAgYWx0OiB1bmNvbnN0cmFpbmVkLFxuICBhdXRvY29tcGxldGU6IHVuY29uc3RyYWluZWQsXG4gIGF1dG9zYXZlOiB1bmNvbnN0cmFpbmVkLFxuICBheGlzOiB1bmNvbnN0cmFpbmVkLFxuICBiZ2NvbG9yOiB1bmNvbnN0cmFpbmVkLFxuICBib3JkZXI6IHVuY29uc3RyYWluZWQsXG4gIGNlbGxwYWRkaW5nOiB1bmNvbnN0cmFpbmVkLFxuICBjZWxsc3BhY2luZzogdW5jb25zdHJhaW5lZCxcbiAgY2hhbGxlbmdlOiB1bmNvbnN0cmFpbmVkLFxuICBjaGFyOiB1bmNvbnN0cmFpbmVkLFxuICBjaGFyb2ZmOiB1bmNvbnN0cmFpbmVkLFxuICBjaGFyc2V0OiB1bmNvbnN0cmFpbmVkLFxuICBjaGVja2VkOiB1bmNvbnN0cmFpbmVkLFxuICBjaXRlOiB1bmNvbnN0cmFpbmVkLFxuICBjbGFzczogdW5jb25zdHJhaW5lZCxcbiAgY2xlYXI6IHVuY29uc3RyYWluZWQsXG4gIGNvbG9yOiB1bmNvbnN0cmFpbmVkLFxuICBjb2xzOiB1bmNvbnN0cmFpbmVkLFxuICBjb2xzcGFuOiB1bmNvbnN0cmFpbmVkLFxuICBjb21wYWN0OiB1bmNvbnN0cmFpbmVkLFxuICBjb250ZW50ZWRpdGFibGU6IHVuY29uc3RyYWluZWQsXG4gIGNvb3JkczogdW5jb25zdHJhaW5lZCxcbiAgZGF0ZXRpbWU6IHVuY29uc3RyYWluZWQsXG4gIGRpcjogdW5jb25zdHJhaW5lZCxcbiAgZGlzYWJsZWQ6IHVuY29uc3RyYWluZWQsXG4gIGRyYWdnYWJsZTogdW5jb25zdHJhaW5lZCxcbiAgZHJvcHpvbmU6IHVuY29uc3RyYWluZWQsXG4gIGVuY3R5cGU6IHVuY29uc3RyYWluZWQsXG4gIGZvcjogdW5jb25zdHJhaW5lZCxcbiAgZnJhbWU6IHVuY29uc3RyYWluZWQsXG4gIGhlYWRlcnM6IHVuY29uc3RyYWluZWQsXG4gIGhlaWdodDogdW5jb25zdHJhaW5lZCxcbiAgaGlnaDogdW5jb25zdHJhaW5lZCxcbiAgaHJlZjogdW5jb25zdHJhaW5lZCxcbiAgaHJlZmxhbmc6IHVuY29uc3RyYWluZWQsXG4gIGhzcGFjZTogdW5jb25zdHJhaW5lZCxcbiAgaXNtYXA6IHVuY29uc3RyYWluZWQsXG4gIGlkOiB1bmNvbnN0cmFpbmVkLFxuICBrZXl0eXBlOiB1bmNvbnN0cmFpbmVkLFxuICBsYWJlbDogdW5jb25zdHJhaW5lZCxcbiAgbGFuZzogdW5jb25zdHJhaW5lZCxcbiAgbGlzdDogdW5jb25zdHJhaW5lZCxcbiAgbG9uZ2Rlc2M6IHVuY29uc3RyYWluZWQsXG4gIGxvdzogdW5jb25zdHJhaW5lZCxcbiAgbWF4OiB1bmNvbnN0cmFpbmVkLFxuICBtYXhsZW5ndGg6IHVuY29uc3RyYWluZWQsXG4gIG1lZGlhOiB1bmNvbnN0cmFpbmVkLFxuICBtZXRob2Q6IHVuY29uc3RyYWluZWQsXG4gIG1pbjogdW5jb25zdHJhaW5lZCxcbiAgbXVsdGlwbGU6IHVuY29uc3RyYWluZWQsXG4gIG5hbWU6IHVuY29uc3RyYWluZWQsXG4gIG5vaHJlZjogdW5jb25zdHJhaW5lZCxcbiAgbm9zaGFkZTogdW5jb25zdHJhaW5lZCxcbiAgbm92YWxpZGF0ZTogdW5jb25zdHJhaW5lZCxcbiAgbm93cmFwOiB1bmNvbnN0cmFpbmVkLFxuICBvcGVuOiB1bmNvbnN0cmFpbmVkLFxuICBvcHRpbXVtOiB1bmNvbnN0cmFpbmVkLFxuICBwYXR0ZXJuOiB1bmNvbnN0cmFpbmVkLFxuICBwbGFjZWhvbGRlcjogdW5jb25zdHJhaW5lZCxcbiAgcHJvbXB0OiB1bmNvbnN0cmFpbmVkLFxuICBwdWJkYXRlOiB1bmNvbnN0cmFpbmVkLFxuICByYWRpb2dyb3VwOiB1bmNvbnN0cmFpbmVkLFxuICByZWFkb25seTogdW5jb25zdHJhaW5lZCxcbiAgcmVsOiB1bmNvbnN0cmFpbmVkLFxuICByZXF1aXJlZDogdW5jb25zdHJhaW5lZCxcbiAgcmV2OiB1bmNvbnN0cmFpbmVkLFxuICByZXZlcnNlZDogdW5jb25zdHJhaW5lZCxcbiAgcm93czogdW5jb25zdHJhaW5lZCxcbiAgcm93c3BhbjogdW5jb25zdHJhaW5lZCxcbiAgcnVsZXM6IHVuY29uc3RyYWluZWQsXG4gIHNjb3BlOiB1bmNvbnN0cmFpbmVkLFxuICBzZWxlY3RlZDogdW5jb25zdHJhaW5lZCxcbiAgc2hhcGU6IHVuY29uc3RyYWluZWQsXG4gIHNpemU6IHVuY29uc3RyYWluZWQsXG4gIHNwYW46IHVuY29uc3RyYWluZWQsXG4gIHNwZWxsY2hlY2s6IHVuY29uc3RyYWluZWQsXG4gIHNyYzogdW5jb25zdHJhaW5lZCxcbiAgc3RhcnQ6IHVuY29uc3RyYWluZWQsXG4gIHN0ZXA6IHVuY29uc3RyYWluZWQsXG4gIHN0eWxlOiB1bmNvbnN0cmFpbmVkLFxuICBzdW1tYXJ5OiB1bmNvbnN0cmFpbmVkLFxuICB0YWJpbmRleDogdW5jb25zdHJhaW5lZCxcbiAgdGFyZ2V0OiB1bmNvbnN0cmFpbmVkLFxuICB0aXRsZTogdW5jb25zdHJhaW5lZCxcbiAgdHlwZTogdW5jb25zdHJhaW5lZCxcbiAgdXNlbWFwOiB1bmNvbnN0cmFpbmVkLFxuICB2YWxpZ246IHVuY29uc3RyYWluZWQsXG4gIHZhbHVlOiB1bmNvbnN0cmFpbmVkLFxuICB2c3BhY2U6IHVuY29uc3RyYWluZWQsXG4gIHdpZHRoOiB1bmNvbnN0cmFpbmVkLFxuICB3cmFwOiB1bmNvbnN0cmFpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IGFsbG93ZWRUYWdzOiBBbGxvd2VkVGFncyA9IHtcbiAgYTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGFiYnI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBhY3JvbnltOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYWRkcmVzczogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGFyZWE6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBhcnRpY2xlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYXNpZGU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBiOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYmRpOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYmlnOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYmxvY2txdW90ZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYnV0dG9uOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgY2FwdGlvbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNlbnRlcjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNpdGU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBjb2RlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgY29sOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgY29sZ3JvdXA6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkYXRhOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGF0YWxpc3Q6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkZDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGRlbDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGRldGFpbHM6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkZm46IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkaXI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkaXY6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkbDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGR0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZW06IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBmaWVsZHNldDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGZpZ2NhcHRpb246IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBmaWd1cmU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBmb250OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZm9vdGVyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZm9ybTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGgxOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaDI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoMzogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGg0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaDU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoNjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGhlYWRlcjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGhyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGltZzogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGlucHV0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaW5zOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAga2JkOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAga2V5Z2VuOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbGFiZWw6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBsZWdlbmQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBsaTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG1haW46IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBtYXA6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBtYXJrOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbWVudTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG1lbnVpdGVtOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbWV0ZXI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBuYXY6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBvbDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG9wdGdyb3VwOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgb3B0aW9uOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgb3V0cHV0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgcDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHByZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHByb2dyZXNzOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgcTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHJwOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgcnQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBydWJ5OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgczogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHNhbXA6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBzZWN0aW9uOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc2VsZWN0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc21hbGw6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBzcGFuOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc3RyaWtlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc3Ryb25nOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc3ViOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc3VtbWFyeTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN1cDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRhYmxlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdGJvZHk6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0ZDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRleHRhcmVhOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdGZvb3Q6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0aDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRoZWFkOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdGltZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdHQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB1OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdWw6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB2YXI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB3YnI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxufTtcblxuZXhwb3J0IGNvbnN0IGFsbG93ZWRDU1M6IEFsbG93ZWRDU1MgPSBbXG4gIFwiYmFja2dyb3VuZFwiLFxuICBcImJhY2tncm91bmQtYXR0YWNobWVudFwiLFxuICBcImJhY2tncm91bmQtY2xpcFwiLFxuICBcImJhY2tncm91bmQtY29sb3JcIixcbiAgXCJiYWNrZ3JvdW5kLWltYWdlXCIsXG4gIFwiYmFja2dyb3VuZC1vcmlnaW5cIixcbiAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXG4gIFwiYmFja2dyb3VuZC1yZXBlYXRcIixcbiAgXCJiYWNrZ3JvdW5kLXNpemVcIixcbiAgXCJib3JkZXJcIixcbiAgXCJib3JkZXItYm90dG9tXCIsXG4gIFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFxuICBcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIixcbiAgXCJib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiLFxuICBcImJvcmRlci1ib3R0b20tc3R5bGVcIixcbiAgXCJib3JkZXItYm90dG9tLXdpZHRoXCIsXG4gIFwiYm9yZGVyLWNvbGxhcHNlXCIsXG4gIFwiYm9yZGVyLWNvbG9yXCIsXG4gIFwiYm9yZGVyLWltYWdlXCIsXG4gIFwiYm9yZGVyLWltYWdlLW91dHNldFwiLFxuICBcImJvcmRlci1pbWFnZS1yZXBlYXRcIixcbiAgXCJib3JkZXItaW1hZ2Utc2xpY2VcIixcbiAgXCJib3JkZXItaW1hZ2Utc291cmNlXCIsXG4gIFwiYm9yZGVyLWltYWdlLXdpZHRoXCIsXG4gIFwiYm9yZGVyLWxlZnRcIixcbiAgXCJib3JkZXItbGVmdC1jb2xvclwiLFxuICBcImJvcmRlci1sZWZ0LXN0eWxlXCIsXG4gIFwiYm9yZGVyLWxlZnQtd2lkdGhcIixcbiAgXCJib3JkZXItcmFkaXVzXCIsXG4gIFwiYm9yZGVyLXJpZ2h0XCIsXG4gIFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCIsXG4gIFwiYm9yZGVyLXJpZ2h0LXN0eWxlXCIsXG4gIFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCIsXG4gIFwiYm9yZGVyLXNwYWNpbmdcIixcbiAgXCJib3JkZXItc3R5bGVcIixcbiAgXCJib3JkZXItdG9wXCIsXG4gIFwiYm9yZGVyLXRvcC1jb2xvclwiLFxuICBcImJvcmRlci10b3AtbGVmdC1yYWRpdXNcIixcbiAgXCJib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiLFxuICBcImJvcmRlci10b3Atc3R5bGVcIixcbiAgXCJib3JkZXItdG9wLXdpZHRoXCIsXG4gIFwiYm9yZGVyLXdpZHRoXCIsXG4gIFwiYm90dG9tXCIsXG4gIFwiY2FwdGlvbi1zaWRlXCIsXG4gIFwiY2xlYXJcIixcbiAgXCJjbGlwXCIsXG4gIFwiY29sb3JcIixcbiAgXCJjb250ZW50XCIsXG4gIFwiY291bnRlci1pbmNyZW1lbnRcIixcbiAgXCJjb3VudGVyLXJlc2V0XCIsXG4gIFwiY3Vyc29yXCIsXG4gIFwiZGlyZWN0aW9uXCIsXG4gIFwiZGlzcGxheVwiLFxuICBcImVtcHR5LWNlbGxzXCIsXG4gIFwiZmxvYXRcIixcbiAgXCJmb250XCIsXG4gIFwiZm9udC1mYW1pbHlcIixcbiAgXCJmb250LWZlYXR1cmUtc2V0dGluZ3NcIixcbiAgXCJmb250LWtlcm5pbmdcIixcbiAgXCJmb250LWxhbmd1YWdlLW92ZXJyaWRlXCIsXG4gIFwiZm9udC1zaXplXCIsXG4gIFwiZm9udC1zaXplLWFkanVzdFwiLFxuICBcImZvbnQtc3RyZXRjaFwiLFxuICBcImZvbnQtc3R5bGVcIixcbiAgXCJmb250LXN5bnRoZXNpc1wiLFxuICBcImZvbnQtdmFyaWFudFwiLFxuICBcImZvbnQtdmFyaWFudC1hbHRlcm5hdGVzXCIsXG4gIFwiZm9udC12YXJpYW50LWNhcHNcIixcbiAgXCJmb250LXZhcmlhbnQtZWFzdC1hc2lhblwiLFxuICBcImZvbnQtdmFyaWFudC1saWdhdHVyZXNcIixcbiAgXCJmb250LXZhcmlhbnQtbnVtZXJpY1wiLFxuICBcImZvbnQtdmFyaWFudC1wb3NpdGlvblwiLFxuICBcImZvbnQtd2VpZ2h0XCIsXG4gIFwiaGVpZ2h0XCIsXG4gIFwibGVmdFwiLFxuICBcImxldHRlci1zcGFjaW5nXCIsXG4gIFwibGluZS1oZWlnaHRcIixcbiAgXCJsaXN0LXN0eWxlXCIsXG4gIFwibGlzdC1zdHlsZS1pbWFnZVwiLFxuICBcImxpc3Qtc3R5bGUtcG9zaXRpb25cIixcbiAgXCJsaXN0LXN0eWxlLXR5cGVcIixcbiAgXCJtYXJnaW5cIixcbiAgXCJtYXJnaW4tYm90dG9tXCIsXG4gIFwibWFyZ2luLWxlZnRcIixcbiAgXCJtYXJnaW4tcmlnaHRcIixcbiAgXCJtYXJnaW4tdG9wXCIsXG4gIFwibWF4LWhlaWdodFwiLFxuICBcIm1heC13aWR0aFwiLFxuICBcIm1pbi1oZWlnaHRcIixcbiAgXCJtaW4td2lkdGhcIixcbiAgXCJvcGFjaXR5XCIsXG4gIFwib3JwaGFuc1wiLFxuICBcIm91dGxpbmVcIixcbiAgXCJvdXRsaW5lLWNvbG9yXCIsXG4gIFwib3V0bGluZS1vZmZzZXRcIixcbiAgXCJvdXRsaW5lLXN0eWxlXCIsXG4gIFwib3V0bGluZS13aWR0aFwiLFxuICBcIm92ZXJmbG93XCIsXG4gIFwib3ZlcmZsb3ctd3JhcFwiLFxuICBcIm92ZXJmbG93LXhcIixcbiAgXCJvdmVyZmxvdy15XCIsXG4gIFwicGFkZGluZ1wiLFxuICBcInBhZGRpbmctYm90dG9tXCIsXG4gIFwicGFkZGluZy1sZWZ0XCIsXG4gIFwicGFkZGluZy1yaWdodFwiLFxuICBcInBhZGRpbmctdG9wXCIsXG4gIFwicGFnZS1icmVhay1hZnRlclwiLFxuICBcInBhZ2UtYnJlYWstYmVmb3JlXCIsXG4gIFwicGFnZS1icmVhay1pbnNpZGVcIixcbiAgXCJxdW90ZXNcIixcbiAgXCJyaWdodFwiLFxuICBcInRhYmxlLWxheW91dFwiLFxuICBcInRleHQtYWxpZ25cIixcbiAgXCJ0ZXh0LWRlY29yYXRpb25cIixcbiAgXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIixcbiAgXCJ0ZXh0LWRlY29yYXRpb24tbGluZVwiLFxuICBcInRleHQtZGVjb3JhdGlvbi1za2lwXCIsXG4gIFwidGV4dC1kZWNvcmF0aW9uLXN0eWxlXCIsXG4gIFwidGV4dC1pbmRlbnRcIixcbiAgXCJ0ZXh0LXRyYW5zZm9ybVwiLFxuICBcInRvcFwiLFxuICBcInVuaWNvZGUtYmlkaVwiLFxuICBcInZlcnRpY2FsLWFsaWduXCIsXG4gIFwidmlzaWJpbGl0eVwiLFxuICBcIndoaXRlLXNwYWNlXCIsXG4gIFwid2lkb3dzXCIsXG4gIFwid2lkdGhcIixcbiAgXCJ3b3JkLXNwYWNpbmdcIixcbiAgXCJ6LWluZGV4XCIsXG5dO1xuIiwiLypcbiAqIFRoaXMgaXMgYW4gYWRhcHRhdGlvbiBvZiBBbG9rIE1lbmdocmFqYW5pJ3MgSFRNTCBzYW5pdGl6ZXIsIGJ5IHNpZGlvdXN2aWMuXG4gaHR0cHM6Ly93d3cucXVheGlvLmNvbS9odG1sX3doaXRlX2xpc3RlZF9zYW5pdGl6ZXIvXG4gKiBUYWtlcyBhIHBvdGVudGlhbGx5RGFuZ2Vyb3VzSFRNTCBzdHJpbmcsIHJldHVybnMgYSBzYW5pdGl6ZWQgbm9kZS5cbiAqL1xuXG5pbXBvcnQgeyBhbGxvd2VkVGFncywgYWxsb3dlZENTUyB9IGZyb20gXCIuL2FsbG93ZWRcIjtcblxuZnVuY3Rpb24gc2FuaXRpemVOb2RlKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgpO1xuXG4gIGNvbnN0IG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBpZiAobm9kZU5hbWUgPT0gXCIjdGV4dFwiKSB7XG4gICAgcmV0dXJuIG5vZGU7IC8vIGxldCB0ZXh0IG5vZGVzIGJlXG4gIH1cbiAgaWYgKG5vZGVOYW1lID09IFwiI2NvbW1lbnRcIikge1xuICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUoXCJcIik7IC8vIGxldCBjb21tZW50cyBkaWVcbiAgfVxuXG4gIC8vIHRocm93IGVycm9yIGluIGNhc2Ugb2YgZGlzYWxsb3dlZCBub2Rlc1xuICBpZiAoIWFsbG93ZWRUYWdzLmhhc093blByb3BlcnR5KG5vZGVOYW1lKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBg8J+aq1BvdGVudGlhbGx5IGRhbmdlcm91cyBub2RlLCA8JHtub2RlTmFtZX0+LiBQaGFudG9tIGhhcyBkZXN0cm95ZWQgaXQuIElmIHlvdSB0aGluayB0aGlzIGlzIGEgbWlzdGFrZSwgcGxlYXNlIHJhaXNlIGFuIGlzc3VlIGF0OiBodHRwczovL2dpdGh1Yi5jb20vc2lkaW91c3ZpYy9waGFudG9tL2lzc3Vlc1xuICAgICAgYFxuICAgICk7IC8vIGFpbid0IGRlYWxpbmcgd2l0aCB0aGlzIG5vZGVcbiAgICBsZXQgZXJyb3JFbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXJyb3JFbGVtZW50LmlubmVyVGV4dCA9XG4gICAgICBcIuKaoO+4jyBQb3RlbnRpYWxseSBkYW5nZXJvdXMgbm9kZS4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIGVycm9yIG1lc3NhZ2VzLlwiO1xuICAgIHJldHVybiBlcnJvckVsZW1lbnQ7XG4gIH1cblxuICB2YXIgc2FuaXRpemVkTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcblxuICAvLyByZS1pbmplY3QgYWxsb3dlZCBhdHRyaWJ1dGVzXG4gIGZvciAoXG4gICAgbGV0IG5vZGVBdHRyaWJ1dGVzID0gMDtcbiAgICBub2RlQXR0cmlidXRlcyA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7XG4gICAgbm9kZUF0dHJpYnV0ZXMrK1xuICApIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0obm9kZUF0dHJpYnV0ZXMpPy5uYW1lIGFzIHN0cmluZztcbiAgICBpZiAoYWxsb3dlZFRhZ3Nbbm9kZU5hbWVdLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZXIgPSBhbGxvd2VkVGFnc1tub2RlTmFtZV1bYXR0cmlidXRlTmFtZV07XG4gICAgICBzYW5pdGl6ZWROb2RlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgc2FuaXRpemVyKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSBhcyBzdHJpbmdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmUtaW5qZWN0IGFsbG93ZWQgY3NzXG4gIGZvciAobGV0IGNzcyBpbiBhbGxvd2VkQ1NTKSB7XG4gICAgc2FuaXRpemVkTm9kZS5zdHlsZVthbGxvd2VkQ1NTW2Nzc11dID0gbm9kZS5zdHlsZVthbGxvd2VkQ1NTW2Nzc11dO1xuICB9XG5cbiAgLy8gcmVjdXJzaXZlbHkgc2FuaXRpemUgY2hpbGROb2Rlc1xuICB3aGlsZSAobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgY2hpbGQgPSBub2RlLnJlbW92ZUNoaWxkKG5vZGUuY2hpbGROb2Rlc1swXSk7XG4gICAgc2FuaXRpemVkTm9kZS5hcHBlbmRDaGlsZChzYW5pdGl6ZU5vZGUoY2hpbGQgYXMgSFRNTEVsZW1lbnQpKTtcbiAgfVxuICByZXR1cm4gc2FuaXRpemVkTm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2FuaXRpemUocG90ZW50aWFsbHlEYW5nZXJvdXNIVE1MOiBzdHJpbmcpIHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCk7XG5cbiAgdmFyIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuaW5uZXJIVE1MID0gcG90ZW50aWFsbHlEYW5nZXJvdXNIVE1MO1xuXG4gIHJldHVybiAoc2FuaXRpemVOb2RlKGRpdikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=