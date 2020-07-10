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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/phantom.ts");
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sanitizeHTML; });
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
        // ain't dealing with this node
        throw new Error(nodeName);
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
function sanitizeHTML(potentiallyDangerousHTML) {
    var doc = document.implementation.createHTMLDocument();
    var div = doc.createElement("div");
    div.innerHTML = potentiallyDangerousHTML;
    return sanitizeNode(div).innerHTML;
}


/***/ }),

/***/ "./src/phantom.ts":
/*!************************!*\
  !*** ./src/phantom.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanitizer_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sanitizer/sanitizer */ "./sanitizer/sanitizer.ts");
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
        try {
            var DOM = renderPseudoElement();
            swapElement(DOM, document.querySelector("#PHANTOM"));
            return DOM;
        }
        catch (errorNode) {
            throw new DOMException("\uD83D\uDEABPotentially dangerous node, <" + errorNode + ">. Phantom has destroyed it. If you think this is a mistake, please raise an issue at: https://github.com/sidiousvic/phantom/issues");
        }
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
        /*
        DOM diffing ahead. ↓↓↓
        We look at the current pseudoDOM, and for every pseudoDOMNode, if
        * the id of the pseudoDOMNode and current pseudoElement match, and
        * the nodes' dataset (data-phantom) are different (their data has changed),
        we swap the nodes.
        */
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
                /*
            Node replacement and sanitization. ↓↓↓
            We swap the obsolete DOMElement's innerHTML with the updated version.
            The updated innerHTML is sanitized before this swap.
            * if safe, we return the updated DOMElement.
            * if dangerous, log an error and abort rendering
            */
                try {
                    newNode.innerHTML = Object(_sanitizer_sanitizer__WEBPACK_IMPORTED_MODULE_0__["default"])(innerHTML);
                    var targetNode = document.getElementById(attributes.id);
                    swapElement(newNode, targetNode);
                    DOMElement = newNode;
                }
                catch (dangerousNodeError) {
                    throw new Error(dangerousNodeError);
                }
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
        /*
        HTML replacement and sanitization. ↓↓↓
        We swap the obsolete DOMElement's innerHTML with the updated version.
        The updated innerHTML is sanitized before this swap.
        * if safe, we return the updated DOMElement.
        * if dangerous, log an error and abort rendering
        */
        try {
            DOMElement.innerHTML = Object(_sanitizer_sanitizer__WEBPACK_IMPORTED_MODULE_0__["default"])(innerHTML);
            return DOMElement;
        }
        catch (dangerousNodeError) {
            throw new Error(dangerousNodeError);
        }
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


/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9zYW5pdGl6ZXIvYWxsb3dlZC50cyIsIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tLy4vc2FuaXRpemVyL3Nhbml0aXplci50cyIsIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tLy4vc3JjL3BoYW50b20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUEsNkNBQTZDO0FBRTdDLFNBQVMsYUFBYSxDQUFDLFNBQXdCO0lBQzdDLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxhQUFhO0lBQ25CLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLGdCQUFnQixFQUFFLGFBQWE7SUFDL0IsU0FBUyxFQUFFLGFBQWE7SUFDeEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsUUFBUSxFQUFFLGFBQWE7SUFDdkIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsU0FBUyxFQUFFLGFBQWE7SUFDeEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsZUFBZSxFQUFFLGFBQWE7SUFDOUIsTUFBTSxFQUFFLGFBQWE7SUFDckIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsU0FBUyxFQUFFLGFBQWE7SUFDeEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsTUFBTSxFQUFFLGFBQWE7SUFDckIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsRUFBRSxFQUFFLGFBQWE7SUFDakIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsU0FBUyxFQUFFLGFBQWE7SUFDeEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsTUFBTSxFQUFFLGFBQWE7SUFDckIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsVUFBVSxFQUFFLGFBQWE7SUFDekIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsTUFBTSxFQUFFLGFBQWE7SUFDckIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsVUFBVSxFQUFFLGFBQWE7SUFDekIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsUUFBUSxF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QUFNLEVBQUUsU0FBUztLQUNsQixDQUFDO0FBQ0osQ0FBQztBQUVjLHNFQUFPLEVBQUMiLCJmaWxlIjoicGhhbnRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BoYW50b20udHNcIik7XG4iLCIvLyBwaGFudG9tIG9mZmljaWFsIHRhZywgYXR0ciwgY3NzIGFsbG93TGlzdHNcblxuZnVuY3Rpb24gdW5jb25zdHJhaW5lZChhdHRyaWJ1dGU6IHN0cmluZyB8IG51bGwpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSB7XG4gIGFiYnI6IHVuY29uc3RyYWluZWQsXG4gIGFjY2VwdDogdW5jb25zdHJhaW5lZCxcbiAgXCJhY2NlcHQtY2hhcnNldFwiOiB1bmNvbnN0cmFpbmVkLFxuICBhY2Nlc3NrZXk6IHVuY29uc3RyYWluZWQsXG4gIGFjdGlvbjogdW5jb25zdHJhaW5lZCxcbiAgYWxpZ246IHVuY29uc3RyYWluZWQsXG4gIGFsdDogdW5jb25zdHJhaW5lZCxcbiAgYXV0b2NvbXBsZXRlOiB1bmNvbnN0cmFpbmVkLFxuICBhdXRvc2F2ZTogdW5jb25zdHJhaW5lZCxcbiAgYXhpczogdW5jb25zdHJhaW5lZCxcbiAgYmdjb2xvcjogdW5jb25zdHJhaW5lZCxcbiAgYm9yZGVyOiB1bmNvbnN0cmFpbmVkLFxuICBjZWxscGFkZGluZzogdW5jb25zdHJhaW5lZCxcbiAgY2VsbHNwYWNpbmc6IHVuY29uc3RyYWluZWQsXG4gIGNoYWxsZW5nZTogdW5jb25zdHJhaW5lZCxcbiAgY2hhcjogdW5jb25zdHJhaW5lZCxcbiAgY2hhcm9mZjogdW5jb25zdHJhaW5lZCxcbiAgY2hhcnNldDogdW5jb25zdHJhaW5lZCxcbiAgY2hlY2tlZDogdW5jb25zdHJhaW5lZCxcbiAgY2l0ZTogdW5jb25zdHJhaW5lZCxcbiAgY2xhc3M6IHVuY29uc3RyYWluZWQsXG4gIGNsZWFyOiB1bmNvbnN0cmFpbmVkLFxuICBjb2xvcjogdW5jb25zdHJhaW5lZCxcbiAgY29sczogdW5jb25zdHJhaW5lZCxcbiAgY29sc3BhbjogdW5jb25zdHJhaW5lZCxcbiAgY29tcGFjdDogdW5jb25zdHJhaW5lZCxcbiAgY29udGVudGVkaXRhYmxlOiB1bmNvbnN0cmFpbmVkLFxuICBjb29yZHM6IHVuY29uc3RyYWluZWQsXG4gIGRhdGV0aW1lOiB1bmNvbnN0cmFpbmVkLFxuICBkaXI6IHVuY29uc3RyYWluZWQsXG4gIGRpc2FibGVkOiB1bmNvbnN0cmFpbmVkLFxuICBkcmFnZ2FibGU6IHVuY29uc3RyYWluZWQsXG4gIGRyb3B6b25lOiB1bmNvbnN0cmFpbmVkLFxuICBlbmN0eXBlOiB1bmNvbnN0cmFpbmVkLFxuICBmb3I6IHVuY29uc3RyYWluZWQsXG4gIGZyYW1lOiB1bmNvbnN0cmFpbmVkLFxuICBoZWFkZXJzOiB1bmNvbnN0cmFpbmVkLFxuICBoZWlnaHQ6IHVuY29uc3RyYWluZWQsXG4gIGhpZ2g6IHVuY29uc3RyYWluZWQsXG4gIGhyZWY6IHVuY29uc3RyYWluZWQsXG4gIGhyZWZsYW5nOiB1bmNvbnN0cmFpbmVkLFxuICBoc3BhY2U6IHVuY29uc3RyYWluZWQsXG4gIGlzbWFwOiB1bmNvbnN0cmFpbmVkLFxuICBpZDogdW5jb25zdHJhaW5lZCxcbiAga2V5dHlwZTogdW5jb25zdHJhaW5lZCxcbiAgbGFiZWw6IHVuY29uc3RyYWluZWQsXG4gIGxhbmc6IHVuY29uc3RyYWluZWQsXG4gIGxpc3Q6IHVuY29uc3RyYWluZWQsXG4gIGxvbmdkZXNjOiB1bmNvbnN0cmFpbmVkLFxuICBsb3c6IHVuY29uc3RyYWluZWQsXG4gIG1heDogdW5jb25zdHJhaW5lZCxcbiAgbWF4bGVuZ3RoOiB1bmNvbnN0cmFpbmVkLFxuICBtZWRpYTogdW5jb25zdHJhaW5lZCxcbiAgbWV0aG9kOiB1bmNvbnN0cmFpbmVkLFxuICBtaW46IHVuY29uc3RyYWluZWQsXG4gIG11bHRpcGxlOiB1bmNvbnN0cmFpbmVkLFxuICBuYW1lOiB1bmNvbnN0cmFpbmVkLFxuICBub2hyZWY6IHVuY29uc3RyYWluZWQsXG4gIG5vc2hhZGU6IHVuY29uc3RyYWluZWQsXG4gIG5vdmFsaWRhdGU6IHVuY29uc3RyYWluZWQsXG4gIG5vd3JhcDogdW5jb25zdHJhaW5lZCxcbiAgb3BlbjogdW5jb25zdHJhaW5lZCxcbiAgb3B0aW11bTogdW5jb25zdHJhaW5lZCxcbiAgcGF0dGVybjogdW5jb25zdHJhaW5lZCxcbiAgcGxhY2Vob2xkZXI6IHVuY29uc3RyYWluZWQsXG4gIHByb21wdDogdW5jb25zdHJhaW5lZCxcbiAgcHViZGF0ZTogdW5jb25zdHJhaW5lZCxcbiAgcmFkaW9ncm91cDogdW5jb25zdHJhaW5lZCxcbiAgcmVhZG9ubHk6IHVuY29uc3RyYWluZWQsXG4gIHJlbDogdW5jb25zdHJhaW5lZCxcbiAgcmVxdWlyZWQ6IHVuY29uc3RyYWluZWQsXG4gIHJldjogdW5jb25zdHJhaW5lZCxcbiAgcmV2ZXJzZWQ6IHVuY29uc3RyYWluZWQsXG4gIHJvd3M6IHVuY29uc3RyYWluZWQsXG4gIHJvd3NwYW46IHVuY29uc3RyYWluZWQsXG4gIHJ1bGVzOiB1bmNvbnN0cmFpbmVkLFxuICBzY29wZTogdW5jb25zdHJhaW5lZCxcbiAgc2VsZWN0ZWQ6IHVuY29uc3RyYWluZWQsXG4gIHNoYXBlOiB1bmNvbnN0cmFpbmVkLFxuICBzaXplOiB1bmNvbnN0cmFpbmVkLFxuICBzcGFuOiB1bmNvbnN0cmFpbmVkLFxuICBzcGVsbGNoZWNrOiB1bmNvbnN0cmFpbmVkLFxuICBzcmM6IHVuY29uc3RyYWluZWQsXG4gIHN0YXJ0OiB1bmNvbnN0cmFpbmVkLFxuICBzdGVwOiB1bmNvbnN0cmFpbmVkLFxuICBzdHlsZTogdW5jb25zdHJhaW5lZCxcbiAgc3VtbWFyeTogdW5jb25zdHJhaW5lZCxcbiAgdGFiaW5kZXg6IHVuY29uc3RyYWluZWQsXG4gIHRhcmdldDogdW5jb25zdHJhaW5lZCxcbiAgdGl0bGU6IHVuY29uc3RyYWluZWQsXG4gIHR5cGU6IHVuY29uc3RyYWluZWQsXG4gIHVzZW1hcDogdW5jb25zdHJhaW5lZCxcbiAgdmFsaWduOiB1bmNvbnN0cmFpbmVkLFxuICB2YWx1ZTogdW5jb25zdHJhaW5lZCxcbiAgdnNwYWNlOiB1bmNvbnN0cmFpbmVkLFxuICB3aWR0aDogdW5jb25zdHJhaW5lZCxcbiAgd3JhcDogdW5jb25zdHJhaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCBhbGxvd2VkVGFnczogQWxsb3dlZFRhZ3MgPSB7XG4gIGE6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBhYmJyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYWNyb255bTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGFkZHJlc3M6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBhcmVhOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYXJ0aWNsZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGFzaWRlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJkaTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJpZzogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJsb2NrcXVvdGU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBicjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJ1dHRvbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNhcHRpb246IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBjZW50ZXI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBjaXRlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgY29kZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNvbDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNvbGdyb3VwOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGF0YTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGRhdGFsaXN0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkZWw6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkZXRhaWxzOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGZuOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGlyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGl2OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGw6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkdDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGVtOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZmllbGRzZXQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBmaWdjYXB0aW9uOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZmlndXJlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZm9udDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGZvb3RlcjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGZvcm06IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoMTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGgyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaDM6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoNDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGg1OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaDY6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoZWFkZXI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBocjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGk6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBpbWc6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBpbnB1dDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGluczogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGtiZDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGtleWdlbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGxhYmVsOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbGVnZW5kOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbGk6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBtYWluOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbWFwOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbWFyazogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG1lbnU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBtZW51aXRlbTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG1ldGVyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbmF2OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgb2w6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBvcHRncm91cDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG9wdGlvbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG91dHB1dDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHA6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBwcmU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBwcm9ncmVzczogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHE6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBycDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHJ0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgcnVieTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHM6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBzYW1wOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc2VjdGlvbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHNlbGVjdDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHNtYWxsOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc3BhbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN0cmlrZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN0cm9uZzogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN1YjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN1bW1hcnk6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBzdXA6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0YWJsZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRib2R5OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdGQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0ZXh0YXJlYTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRmb290OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdGg6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0aGVhZDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRpbWU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0cjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHR0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHVsOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdmFyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgd2JyOiBhbGxvd2VkQXR0cmlidXRlcyxcbn07XG5cbmV4cG9ydCBjb25zdCBhbGxvd2VkQ1NTOiBBbGxvd2VkQ1NTID0gW1xuICBcImJhY2tncm91bmRcIixcbiAgXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIixcbiAgXCJiYWNrZ3JvdW5kLWNsaXBcIixcbiAgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXG4gIFwiYmFja2dyb3VuZC1pbWFnZVwiLFxuICBcImJhY2tncm91bmQtb3JpZ2luXCIsXG4gIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFxuICBcImJhY2tncm91bmQtcmVwZWF0XCIsXG4gIFwiYmFja2dyb3VuZC1zaXplXCIsXG4gIFwiYm9yZGVyXCIsXG4gIFwiYm9yZGVyLWJvdHRvbVwiLFxuICBcImJvcmRlci1ib3R0b20tY29sb3JcIixcbiAgXCJib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCIsXG4gIFwiYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIixcbiAgXCJib3JkZXItYm90dG9tLXN0eWxlXCIsXG4gIFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFxuICBcImJvcmRlci1jb2xsYXBzZVwiLFxuICBcImJvcmRlci1jb2xvclwiLFxuICBcImJvcmRlci1pbWFnZVwiLFxuICBcImJvcmRlci1pbWFnZS1vdXRzZXRcIixcbiAgXCJib3JkZXItaW1hZ2UtcmVwZWF0XCIsXG4gIFwiYm9yZGVyLWltYWdlLXNsaWNlXCIsXG4gIFwiYm9yZGVyLWltYWdlLXNvdXJjZVwiLFxuICBcImJvcmRlci1pbWFnZS13aWR0aFwiLFxuICBcImJvcmRlci1sZWZ0XCIsXG4gIFwiYm9yZGVyLWxlZnQtY29sb3JcIixcbiAgXCJib3JkZXItbGVmdC1zdHlsZVwiLFxuICBcImJvcmRlci1sZWZ0LXdpZHRoXCIsXG4gIFwiYm9yZGVyLXJhZGl1c1wiLFxuICBcImJvcmRlci1yaWdodFwiLFxuICBcImJvcmRlci1yaWdodC1jb2xvclwiLFxuICBcImJvcmRlci1yaWdodC1zdHlsZVwiLFxuICBcImJvcmRlci1yaWdodC13aWR0aFwiLFxuICBcImJvcmRlci1zcGFjaW5nXCIsXG4gIFwiYm9yZGVyLXN0eWxlXCIsXG4gIFwiYm9yZGVyLXRvcFwiLFxuICBcImJvcmRlci10b3AtY29sb3JcIixcbiAgXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsXG4gIFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIixcbiAgXCJib3JkZXItdG9wLXN0eWxlXCIsXG4gIFwiYm9yZGVyLXRvcC13aWR0aFwiLFxuICBcImJvcmRlci13aWR0aFwiLFxuICBcImJvdHRvbVwiLFxuICBcImNhcHRpb24tc2lkZVwiLFxuICBcImNsZWFyXCIsXG4gIFwiY2xpcFwiLFxuICBcImNvbG9yXCIsXG4gIFwiY29udGVudFwiLFxuICBcImNvdW50ZXItaW5jcmVtZW50XCIsXG4gIFwiY291bnRlci1yZXNldFwiLFxuICBcImN1cnNvclwiLFxuICBcImRpcmVjdGlvblwiLFxuICBcImRpc3BsYXlcIixcbiAgXCJlbXB0eS1jZWxsc1wiLFxuICBcImZsb2F0XCIsXG4gIFwiZm9udFwiLFxuICBcImZvbnQtZmFtaWx5XCIsXG4gIFwiZm9udC1mZWF0dXJlLXNldHRpbmdzXCIsXG4gIFwiZm9udC1rZXJuaW5nXCIsXG4gIFwiZm9udC1sYW5ndWFnZS1vdmVycmlkZVwiLFxuICBcImZvbnQtc2l6ZVwiLFxuICBcImZvbnQtc2l6ZS1hZGp1c3RcIixcbiAgXCJmb250LXN0cmV0Y2hcIixcbiAgXCJmb250LXN0eWxlXCIsXG4gIFwiZm9udC1zeW50aGVzaXNcIixcbiAgXCJmb250LXZhcmlhbnRcIixcbiAgXCJmb250LXZhcmlhbnQtYWx0ZXJuYXRlc1wiLFxuICBcImZvbnQtdmFyaWFudC1jYXBzXCIsXG4gIFwiZm9udC12YXJpYW50LWVhc3QtYXNpYW5cIixcbiAgXCJmb250LXZhcmlhbnQtbGlnYXR1cmVzXCIsXG4gIFwiZm9udC12YXJpYW50LW51bWVyaWNcIixcbiAgXCJmb250LXZhcmlhbnQtcG9zaXRpb25cIixcbiAgXCJmb250LXdlaWdodFwiLFxuICBcImhlaWdodFwiLFxuICBcImxlZnRcIixcbiAgXCJsZXR0ZXItc3BhY2luZ1wiLFxuICBcImxpbmUtaGVpZ2h0XCIsXG4gIFwibGlzdC1zdHlsZVwiLFxuICBcImxpc3Qtc3R5bGUtaW1hZ2VcIixcbiAgXCJsaXN0LXN0eWxlLXBvc2l0aW9uXCIsXG4gIFwibGlzdC1zdHlsZS10eXBlXCIsXG4gIFwibWFyZ2luXCIsXG4gIFwibWFyZ2luLWJvdHRvbVwiLFxuICBcIm1hcmdpbi1sZWZ0XCIsXG4gIFwibWFyZ2luLXJpZ2h0XCIsXG4gIFwibWFyZ2luLXRvcFwiLFxuICBcIm1heC1oZWlnaHRcIixcbiAgXCJtYXgtd2lkdGhcIixcbiAgXCJtaW4taGVpZ2h0XCIsXG4gIFwibWluLXdpZHRoXCIsXG4gIFwib3BhY2l0eVwiLFxuICBcIm9ycGhhbnNcIixcbiAgXCJvdXRsaW5lXCIsXG4gIFwib3V0bGluZS1jb2xvclwiLFxuICBcIm91dGxpbmUtb2Zmc2V0XCIsXG4gIFwib3V0bGluZS1zdHlsZVwiLFxuICBcIm91dGxpbmUtd2lkdGhcIixcbiAgXCJvdmVyZmxvd1wiLFxuICBcIm92ZXJmbG93LXdyYXBcIixcbiAgXCJvdmVyZmxvdy14XCIsXG4gIFwib3ZlcmZsb3cteVwiLFxuICBcInBhZGRpbmdcIixcbiAgXCJwYWRkaW5nLWJvdHRvbVwiLFxuICBcInBhZGRpbmctbGVmdFwiLFxuICBcInBhZGRpbmctcmlnaHRcIixcbiAgXCJwYWRkaW5nLXRvcFwiLFxuICBcInBhZ2UtYnJlYWstYWZ0ZXJcIixcbiAgXCJwYWdlLWJyZWFrLWJlZm9yZVwiLFxuICBcInBhZ2UtYnJlYWstaW5zaWRlXCIsXG4gIFwicXVvdGVzXCIsXG4gIFwicmlnaHRcIixcbiAgXCJ0YWJsZS1sYXlvdXRcIixcbiAgXCJ0ZXh0LWFsaWduXCIsXG4gIFwidGV4dC1kZWNvcmF0aW9uXCIsXG4gIFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCIsXG4gIFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIixcbiAgXCJ0ZXh0LWRlY29yYXRpb24tc2tpcFwiLFxuICBcInRleHQtZGVjb3JhdGlvbi1zdHlsZVwiLFxuICBcInRleHQtaW5kZW50XCIsXG4gIFwidGV4dC10cmFuc2Zvcm1cIixcbiAgXCJ0b3BcIixcbiAgXCJ1bmljb2RlLWJpZGlcIixcbiAgXCJ2ZXJ0aWNhbC1hbGlnblwiLFxuICBcInZpc2liaWxpdHlcIixcbiAgXCJ3aGl0ZS1zcGFjZVwiLFxuICBcIndpZG93c1wiLFxuICBcIndpZHRoXCIsXG4gIFwid29yZC1zcGFjaW5nXCIsXG4gIFwiei1pbmRleFwiLFxuXTtcbiIsIi8qXG4gKiBUaGlzIGlzIGFuIGFkYXB0YXRpb24gb2YgQWxvayBNZW5naHJhamFuaSdzIEhUTUwgc2FuaXRpemVyLCBieSBzaWRpb3VzdmljLlxuIGh0dHBzOi8vd3d3LnF1YXhpby5jb20vaHRtbF93aGl0ZV9saXN0ZWRfc2FuaXRpemVyL1xuICogVGFrZXMgYSBwb3RlbnRpYWxseURhbmdlcm91c0hUTUwgc3RyaW5nLCByZXR1cm5zIGEgc2FuaXRpemVkIG5vZGUuXG4gKi9cblxuaW1wb3J0IHsgYWxsb3dlZFRhZ3MsIGFsbG93ZWRDU1MgfSBmcm9tIFwiLi9hbGxvd2VkXCI7XG5cbmZ1bmN0aW9uIHNhbml0aXplTm9kZShub2RlOiBIVE1MRWxlbWVudCkge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoKTtcblxuICBjb25zdCBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKG5vZGVOYW1lID09IFwiI3RleHRcIikge1xuICAgIHJldHVybiBub2RlOyAvLyBsZXQgdGV4dCBub2RlcyBiZVxuICB9XG4gIGlmIChub2RlTmFtZSA9PSBcIiNjb21tZW50XCIpIHtcbiAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKFwiXCIpOyAvLyBsZXQgY29tbWVudHMgZGllXG4gIH1cblxuICAvLyB0aHJvdyBlcnJvciBpbiBjYXNlIG9mIGRpc2FsbG93ZWQgbm9kZXNcbiAgaWYgKCFhbGxvd2VkVGFncy5oYXNPd25Qcm9wZXJ0eShub2RlTmFtZSkpIHtcbiAgICAvLyBhaW4ndCBkZWFsaW5nIHdpdGggdGhpcyBub2RlXG5cbiAgICB0aHJvdyBuZXcgRXJyb3Iobm9kZU5hbWUpO1xuICB9XG5cbiAgY29uc3Qgc2FuaXRpemVkTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcblxuICAvLyByZS1pbmplY3QgYWxsb3dlZCBhdHRyaWJ1dGVzXG4gIGZvciAoXG4gICAgbGV0IG5vZGVBdHRyaWJ1dGVzID0gMDtcbiAgICBub2RlQXR0cmlidXRlcyA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7XG4gICAgbm9kZUF0dHJpYnV0ZXMrK1xuICApIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0obm9kZUF0dHJpYnV0ZXMpPy5uYW1lIGFzIHN0cmluZztcbiAgICBpZiAoYWxsb3dlZFRhZ3Nbbm9kZU5hbWVdLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZXIgPSBhbGxvd2VkVGFnc1tub2RlTmFtZV1bYXR0cmlidXRlTmFtZV07XG4gICAgICBzYW5pdGl6ZWROb2RlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgc2FuaXRpemVyKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSBhcyBzdHJpbmdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmUtaW5qZWN0IGFsbG93ZWQgY3NzXG4gIGZvciAobGV0IGNzcyBpbiBhbGxvd2VkQ1NTKSB7XG4gICAgc2FuaXRpemVkTm9kZS5zdHlsZVthbGxvd2VkQ1NTW2Nzc11dID0gbm9kZS5zdHlsZVthbGxvd2VkQ1NTW2Nzc11dO1xuICB9XG5cbiAgLy8gcmVjdXJzaXZlbHkgc2FuaXRpemUgY2hpbGROb2Rlc1xuICB3aGlsZSAobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZCA9IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5jaGlsZE5vZGVzWzBdKTtcbiAgICBzYW5pdGl6ZWROb2RlLmFwcGVuZENoaWxkKHNhbml0aXplTm9kZShjaGlsZCBhcyBIVE1MRWxlbWVudCkpO1xuICB9XG4gIHJldHVybiBzYW5pdGl6ZWROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYW5pdGl6ZUhUTUwocG90ZW50aWFsbHlEYW5nZXJvdXNIVE1MOiBzdHJpbmcpIHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCk7XG5cbiAgY29uc3QgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5pbm5lckhUTUwgPSBwb3RlbnRpYWxseURhbmdlcm91c0hUTUw7XG5cbiAgcmV0dXJuIChzYW5pdGl6ZU5vZGUoZGl2KSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MO1xufVxuIiwiaW1wb3J0IHNhbml0aXplSFRNTCBmcm9tIFwiLi4vc2FuaXRpemVyL3Nhbml0aXplclwiO1xuXG5mdW5jdGlvbiBQSEFOVE9NKHJlZHV4U3RvcmU6IGFueSwgWERPTTogWERPTUZ1bmN0aW9uKSB7XG4gIGxldCBwc2V1ZG9ET006IHBzZXVkb0RPTSA9IHtcbiAgICB0ZXN0OiB7XG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxuICAgICAgYXR0cmlidXRlczogeyBpZDogXCJQSEFOVE9NXCIgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIGlubmVySFRNTDogXCJcIixcbiAgICAgIGRhdGFzZXQ6IHt9LFxuICAgIH0sXG4gIH07XG5cbiAgZnVuY3Rpb24gbGF1bmNoRE9NKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQSEFOVE9NXCIpKSB7XG4gICAgICBjb25zdCBQSEFOVE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIFBIQU5UT00uaWQgPSBcIlBIQU5UT01cIjtcbiAgICAgIGJvZHk/LmFwcGVuZENoaWxkKFBIQU5UT00pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgRE9NID0gcmVuZGVyUHNldWRvRWxlbWVudCgpO1xuICAgICAgc3dhcEVsZW1lbnQoRE9NLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1BIQU5UT01cIikpO1xuICAgICAgcmV0dXJuIERPTTtcbiAgICB9IGNhdGNoIChlcnJvck5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGDwn5qrUG90ZW50aWFsbHkgZGFuZ2Vyb3VzIG5vZGUsIDwke2Vycm9yTm9kZX0+LiBQaGFudG9tIGhhcyBkZXN0cm95ZWQgaXQuIElmIHlvdSB0aGluayB0aGlzIGlzIGEgbWlzdGFrZSwgcGxlYXNlIHJhaXNlIGFuIGlzc3VlIGF0OiBodHRwczovL2dpdGh1Yi5jb20vc2lkaW91c3ZpYy9waGFudG9tL2lzc3Vlc2BcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29hbGVzY2VQaGFudG9tRE9NKCkge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cIlBIQU5UT01cIj5cbiAgICAgICR7WERPTSgpfVxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQc2V1ZG9FbGVtZW50KFxuICAgIHBzZXVkb0VsZW1lbnQgPSB0cmFuc211dGVIVE1MdG9Qc2V1ZG9FbGVtZW50KGNvYWxlc2NlUGhhbnRvbURPTSgpKVxuICApIHtcbiAgICBjb25zdCB7IHRhZ05hbWUsIGF0dHJpYnV0ZXMsIGlubmVySFRNTCwgY2hpbGRyZW4gfSA9IHBzZXVkb0VsZW1lbnQ7XG4gICAgbGV0ICRjaGlsZHJlbjogUHNldWRvRWxlbWVudFtdID0gW107XG5cbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAoJGNoaWxkcmVuIGFzIHVua25vd24pID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgcmVuZGVyUHNldWRvRWxlbWVudChjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgRE9NRWxlbWVudDtcblxuICAgIC8qIFxuICAgIERPTSBkaWZmaW5nIGFoZWFkLiDihpPihpPihpNcbiAgICBXZSBsb29rIGF0IHRoZSBjdXJyZW50IHBzZXVkb0RPTSwgYW5kIGZvciBldmVyeSBwc2V1ZG9ET01Ob2RlLCBpZlxuICAgICogdGhlIGlkIG9mIHRoZSBwc2V1ZG9ET01Ob2RlIGFuZCBjdXJyZW50IHBzZXVkb0VsZW1lbnQgbWF0Y2gsIGFuZFxuICAgICogdGhlIG5vZGVzJyBkYXRhc2V0IChkYXRhLXBoYW50b20pIGFyZSBkaWZmZXJlbnQgKHRoZWlyIGRhdGEgaGFzIGNoYW5nZWQpLFxuICAgIHdlIHN3YXAgdGhlIG5vZGVzLlxuICAgICovXG4gICAgT2JqZWN0LnZhbHVlcyhwc2V1ZG9ET00pLm1hcCgocHNldWRvRE9NTm9kZTogYW55KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBzZXVkb0RPTU5vZGUuYXR0cmlidXRlcy5pZCA9PT0gcHNldWRvRWxlbWVudC5hdHRyaWJ1dGVzLmlkICYmXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHBzZXVkb0RPTU5vZGUuZGF0YXNldCkgIT09XG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHNldWRvRWxlbWVudC5kYXRhc2V0KVxuICAgICAgKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICBuZXdOb2RlLnNldEF0dHJpYnV0ZShrLCB2IGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgLyogXG4gICAgTm9kZSByZXBsYWNlbWVudCBhbmQgc2FuaXRpemF0aW9uLiDihpPihpPihpNcbiAgICBXZSBzd2FwIHRoZSBvYnNvbGV0ZSBET01FbGVtZW50J3MgaW5uZXJIVE1MIHdpdGggdGhlIHVwZGF0ZWQgdmVyc2lvbi5cbiAgICBUaGUgdXBkYXRlZCBpbm5lckhUTUwgaXMgc2FuaXRpemVkIGJlZm9yZSB0aGlzIHN3YXAuXG4gICAgKiBpZiBzYWZlLCB3ZSByZXR1cm4gdGhlIHVwZGF0ZWQgRE9NRWxlbWVudC5cbiAgICAqIGlmIGRhbmdlcm91cywgbG9nIGFuIGVycm9yIGFuZCBhYm9ydCByZW5kZXJpbmdcbiAgICAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ld05vZGUuaW5uZXJIVE1MID0gc2FuaXRpemVIVE1MKGlubmVySFRNTCk7XG4gICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVzLmlkKTtcbiAgICAgICAgICBzd2FwRWxlbWVudChuZXdOb2RlLCB0YXJnZXROb2RlKTtcbiAgICAgICAgICBET01FbGVtZW50ID0gbmV3Tm9kZTtcbiAgICAgICAgfSBjYXRjaCAoZGFuZ2Vyb3VzTm9kZUVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhbmdlcm91c05vZGVFcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBzZXVkb0RPTVthdHRyaWJ1dGVzLmlkXSA9IHBzZXVkb0VsZW1lbnQ7XG4gICAgRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgRE9NRWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgdiBhcyBzdHJpbmcpO1xuICAgIH1cblxuICAgIC8qIFxuICAgIEhUTUwgcmVwbGFjZW1lbnQgYW5kIHNhbml0aXphdGlvbi4g4oaT4oaT4oaTXG4gICAgV2Ugc3dhcCB0aGUgb2Jzb2xldGUgRE9NRWxlbWVudCdzIGlubmVySFRNTCB3aXRoIHRoZSB1cGRhdGVkIHZlcnNpb24uXG4gICAgVGhlIHVwZGF0ZWQgaW5uZXJIVE1MIGlzIHNhbml0aXplZCBiZWZvcmUgdGhpcyBzd2FwLlxuICAgICogaWYgc2FmZSwgd2UgcmV0dXJuIHRoZSB1cGRhdGVkIERPTUVsZW1lbnQuXG4gICAgKiBpZiBkYW5nZXJvdXMsIGxvZyBhbiBlcnJvciBhbmQgYWJvcnQgcmVuZGVyaW5nXG4gICAgKi9cbiAgICB0cnkge1xuICAgICAgRE9NRWxlbWVudC5pbm5lckhUTUwgPSBzYW5pdGl6ZUhUTUwoaW5uZXJIVE1MKTtcbiAgICAgIHJldHVybiBET01FbGVtZW50O1xuICAgIH0gY2F0Y2ggKGRhbmdlcm91c05vZGVFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGRhbmdlcm91c05vZGVFcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNtdXRlSFRNTHRvUHNldWRvRWxlbWVudChodG1sOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGh0bWwgIT09IFwic3RyaW5nXCIpIGh0bWwgPSAoaHRtbCBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MO1xuICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgc29sdXRpb24gdG8gbWFwcGVkIGVsZW1lbnRzIOKGk+KGk+KGk1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLz4sL2csIFwiPlwiKTsgLy8g4oaQIHJlbW92ZSBjb21tYXMgZnJvbSBtYXBwZWQgZWxlbWVudCBhcnJheXNcbiAgICBsZXQgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgICBjb25zdCAkZWwgPSBkb2MuYm9keS5maXJzdENoaWxkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgZGF0YXNldCxcbiAgICAgIGNsYXNzTGlzdCxcbiAgICAgIGlubmVySFRNTCxcbiAgICAgIG91dGVySFRNTCxcbiAgICB9ID0gJGVsIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgbGV0ICRjaGlsZHJlbjogUHNldWRvRWxlbWVudFtdID0gW107XG5cbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAoJGNoaWxkcmVuIGFzIHVua25vd24pID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbXV0ZUhUTUx0b1BzZXVkb0VsZW1lbnQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZCxcbiAgICAgICAgY2xhc3M6IGNsYXNzTGlzdCxcbiAgICAgIH0sXG4gICAgICBkYXRhc2V0LFxuICAgICAgY2hpbGRyZW46ICRjaGlsZHJlbixcbiAgICAgIGlubmVySFRNTCxcbiAgICAgIG91dGVySFRNTCxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc3dhcEVsZW1lbnQoXG4gICAgc3dhcEluOiBUZXh0IHwgSFRNTEVsZW1lbnQsXG4gICAgc3dhcE91dDogQ2hpbGROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzd2FwT3V0Py5yZXBsYWNlV2l0aChzd2FwSW4pO1xuICAgIHJldHVybiBzd2FwSW47XG4gIH1cblxuICByZWR1eFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgcmVuZGVyUHNldWRvRWxlbWVudCgpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGZpcmU6IHJlZHV4U3RvcmUuZGlzcGF0Y2gsXG4gICAgZGF0YTogcmVkdXhTdG9yZS5nZXRTdGF0ZSxcbiAgICBsYXVuY2g6IGxhdW5jaERPTSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUEhBTlRPTTtcbiJdLCJzb3VyY2VSb290IjoiIn0=