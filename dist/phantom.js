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
        try {
            var DOM = renderPseudoElement();
            swapElement(DOM, document.querySelector("#PHANTOM"));
            return DOM;
        }
        catch (error) {
            console.error(error);
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
        throw new Error("\uD83D\uDEABPotentially dangerous node, <" + nodeName + ">. Phantom has destroyed it. If you think this is a mistake, please raise an issue at: https://github.com/sidiousvic/phantom/issues");
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


/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9waGFudG9tLnRzIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9zYW5pdGl6ZXIvYWxsb3dlZC50cyIsIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tLy4vc2FuaXRpemVyL3Nhbml0aXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZpRDtBQUVqRCxTQUFTLE9BQU8sQ0FBQyxVQUFlLEVBQUUsSUFBa0I7SUFDbEQsSUFBSSxTQUFTLEdBQWM7UUFDekIsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsRUFBRSxFQUFF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LEdBQUcsRUFBRSxhQUFhO0lBQ2xCLFlBQVksRUFBRSxhQUFhO0lBQzNCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLElBQUksRUFBRSxhQUFhO0lBQ25CLEtBQUssRUFBRSxhQUFhO0lBQ3BCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLGVBQWUsRUFBRSxhQUFhO0lBQzlCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxhQUFhO0lBQ25CLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLEVBQUUsRUFBRSxhQUFhO0lBQ2pCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxhQUFhO0lBQ25CLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLElBQUksRUFBRSxhQUFhO0lBQ25CLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxhQUFhO0lBQ25CLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLElBQUksRUFBRSxhQUFhO0lBQ25CLEtBQUssRUFBRSxhQUFhO0lBQ3BCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLElBQUksRUFBRSxhQUFhO0lBQ25CLE1BQU0sRUFBRSxhQUFh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QUFZLENBQUMsR0FBRyxDQUFpQixDQUFDLFNBQVMsQ0FBQztBQUN0RCxDQUFDIiwiZmlsZSI6InBoYW50b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BoYW50b20udHNcIik7XG4iLCJpbXBvcnQgc2FuaXRpemVIVE1MIGZyb20gXCIuL3Nhbml0aXplci9zYW5pdGl6ZXJcIjtcblxuZnVuY3Rpb24gUEhBTlRPTShyZWR1eFN0b3JlOiBhbnksIFhET006IFhET01GdW5jdGlvbikge1xuICBsZXQgcHNldWRvRE9NOiBwc2V1ZG9ET00gPSB7XG4gICAgdGVzdDoge1xuICAgICAgdGFnTmFtZTogXCJkaXZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgaWQ6IFwiUEhBTlRPTVwiIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBpbm5lckhUTUw6IFwiXCIsXG4gICAgICBkYXRhc2V0OiB7fSxcbiAgICB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIGxhdW5jaERPTSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUEhBTlRPTVwiKSkge1xuICAgICAgY29uc3QgUEhBTlRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBQSEFOVE9NLmlkID0gXCJQSEFOVE9NXCI7XG4gICAgICBib2R5Py5hcHBlbmRDaGlsZChQSEFOVE9NKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IERPTSA9IHJlbmRlclBzZXVkb0VsZW1lbnQoKTtcbiAgICAgIHN3YXBFbGVtZW50KERPTSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQSEFOVE9NXCIpKTtcbiAgICAgIHJldHVybiBET007XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvYWxlc2NlUGhhbnRvbURPTSgpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJQSEFOVE9NXCI+XG4gICAgICAke1hET00oKX1cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUHNldWRvRWxlbWVudChcbiAgICBwc2V1ZG9FbGVtZW50ID0gdHJhbnNtdXRlSFRNTHRvUHNldWRvRWxlbWVudChjb2FsZXNjZVBoYW50b21ET00oKSlcbiAgKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lLCBhdHRyaWJ1dGVzLCBpbm5lckhUTUwsIGNoaWxkcmVuIH0gPSBwc2V1ZG9FbGVtZW50O1xuICAgIGxldCAkY2hpbGRyZW46IFBzZXVkb0VsZW1lbnRbXSA9IFtdO1xuXG4gICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgKCRjaGlsZHJlbiBhcyB1bmtub3duKSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIHJlbmRlclBzZXVkb0VsZW1lbnQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IERPTUVsZW1lbnQ7XG5cbiAgICAvKiBcbiAgICBET00gZGlmZmluZyBhaGVhZC4g4oaT4oaT4oaTXG4gICAgV2UgbG9vayBhdCB0aGUgY3VycmVudCBwc2V1ZG9ET00sIGFuZCBmb3IgZXZlcnkgcHNldWRvRE9NTm9kZSwgaWZcbiAgICAqIHRoZSBpZCBvZiB0aGUgcHNldWRvRE9NTm9kZSBhbmQgY3VycmVudCBwc2V1ZG9FbGVtZW50IG1hdGNoLCBhbmRcbiAgICAqIHRoZSBub2RlcycgZGF0YXNldCAoZGF0YS1waGFudG9tKSBhcmUgZGlmZmVyZW50ICh0aGVpciBkYXRhIGhhcyBjaGFuZ2VkKSxcbiAgICB3ZSBzd2FwIHRoZSBub2Rlcy5cbiAgICAqL1xuICAgIE9iamVjdC52YWx1ZXMocHNldWRvRE9NKS5tYXAoKHBzZXVkb0RPTU5vZGU6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwc2V1ZG9ET01Ob2RlLmF0dHJpYnV0ZXMuaWQgPT09IHBzZXVkb0VsZW1lbnQuYXR0cmlidXRlcy5pZCAmJlxuICAgICAgICBKU09OLnN0cmluZ2lmeShwc2V1ZG9ET01Ob2RlLmRhdGFzZXQpICE9PVxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHBzZXVkb0VsZW1lbnQuZGF0YXNldClcbiAgICAgICkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgbmV3Tm9kZS5zZXRBdHRyaWJ1dGUoaywgdiBhcyBzdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIC8qIFxuICAgIE5vZGUgcmVwbGFjZW1lbnQgYW5kIHNhbml0aXphdGlvbi4g4oaT4oaT4oaTXG4gICAgV2Ugc3dhcCB0aGUgb2Jzb2xldGUgRE9NRWxlbWVudCdzIGlubmVySFRNTCB3aXRoIHRoZSB1cGRhdGVkIHZlcnNpb24uXG4gICAgVGhlIHVwZGF0ZWQgaW5uZXJIVE1MIGlzIHNhbml0aXplZCBiZWZvcmUgdGhpcyBzd2FwLlxuICAgICogaWYgc2FmZSwgd2UgcmV0dXJuIHRoZSB1cGRhdGVkIERPTUVsZW1lbnQuXG4gICAgKiBpZiBkYW5nZXJvdXMsIGxvZyBhbiBlcnJvciBhbmQgYWJvcnQgcmVuZGVyaW5nXG4gICAgKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXdOb2RlLmlubmVySFRNTCA9IHNhbml0aXplSFRNTChpbm5lckhUTUwpO1xuICAgICAgICAgIGxldCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlcy5pZCk7XG4gICAgICAgICAgc3dhcEVsZW1lbnQobmV3Tm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgICAgICAgRE9NRWxlbWVudCA9IG5ld05vZGU7XG4gICAgICAgIH0gY2F0Y2ggKGRhbmdlcm91c05vZGVFcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYW5nZXJvdXNOb2RlRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwc2V1ZG9ET01bYXR0cmlidXRlcy5pZF0gPSBwc2V1ZG9FbGVtZW50O1xuICAgIERPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgIERPTUVsZW1lbnQuc2V0QXR0cmlidXRlKGssIHYgYXMgc3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKiBcbiAgICBIVE1MIHJlcGxhY2VtZW50IGFuZCBzYW5pdGl6YXRpb24uIOKGk+KGk+KGk1xuICAgIFdlIHN3YXAgdGhlIG9ic29sZXRlIERPTUVsZW1lbnQncyBpbm5lckhUTUwgd2l0aCB0aGUgdXBkYXRlZCB2ZXJzaW9uLlxuICAgIFRoZSB1cGRhdGVkIGlubmVySFRNTCBpcyBzYW5pdGl6ZWQgYmVmb3JlIHRoaXMgc3dhcC5cbiAgICAqIGlmIHNhZmUsIHdlIHJldHVybiB0aGUgdXBkYXRlZCBET01FbGVtZW50LlxuICAgICogaWYgZGFuZ2Vyb3VzLCBsb2cgYW4gZXJyb3IgYW5kIGFib3J0IHJlbmRlcmluZ1xuICAgICovXG4gICAgdHJ5IHtcbiAgICAgIERPTUVsZW1lbnQuaW5uZXJIVE1MID0gc2FuaXRpemVIVE1MKGlubmVySFRNTCk7XG4gICAgICByZXR1cm4gRE9NRWxlbWVudDtcbiAgICB9IGNhdGNoIChkYW5nZXJvdXNOb2RlRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYW5nZXJvdXNOb2RlRXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbXV0ZUhUTUx0b1BzZXVkb0VsZW1lbnQoaHRtbDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBodG1sICE9PSBcInN0cmluZ1wiKSBodG1sID0gKGh0bWwgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTDtcbiAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHNvbHV0aW9uIHRvIG1hcHBlZCBlbGVtZW50cyDihpPihpPihpNcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC8+LC9nLCBcIj5cIik7IC8vIOKGkCByZW1vdmUgY29tbWFzIGZyb20gbWFwcGVkIGVsZW1lbnQgYXJyYXlzXG4gICAgbGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgJGVsID0gZG9jLmJvZHkuZmlyc3RDaGlsZDtcbiAgICBjb25zdCB7XG4gICAgICB0YWdOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGRhdGFzZXQsXG4gICAgICBjbGFzc0xpc3QsXG4gICAgICBpbm5lckhUTUwsXG4gICAgICBvdXRlckhUTUwsXG4gICAgfSA9ICRlbCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGxldCAkY2hpbGRyZW46IFBzZXVkb0VsZW1lbnRbXSA9IFtdO1xuXG4gICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgKCRjaGlsZHJlbiBhcyB1bmtub3duKSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIHJldHVybiB0cmFuc211dGVIVE1MdG9Qc2V1ZG9FbGVtZW50KGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGFnTmFtZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNsYXNzOiBjbGFzc0xpc3QsXG4gICAgICB9LFxuICAgICAgZGF0YXNldCxcbiAgICAgIGNoaWxkcmVuOiAkY2hpbGRyZW4sXG4gICAgICBpbm5lckhUTUwsXG4gICAgICBvdXRlckhUTUwsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3YXBFbGVtZW50KFxuICAgIHN3YXBJbjogVGV4dCB8IEhUTUxFbGVtZW50LFxuICAgIHN3YXBPdXQ6IENoaWxkTm9kZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3dhcE91dD8ucmVwbGFjZVdpdGgoc3dhcEluKTtcbiAgICByZXR1cm4gc3dhcEluO1xuICB9XG5cbiAgcmVkdXhTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIHJlbmRlclBzZXVkb0VsZW1lbnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJlOiByZWR1eFN0b3JlLmRpc3BhdGNoLFxuICAgIGRhdGE6IHJlZHV4U3RvcmUuZ2V0U3RhdGUsXG4gICAgbGF1bmNoOiBsYXVuY2hET00sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBIQU5UT007XG4iLCIvLyBwaGFudG9tIG9mZmljaWFsIHRhZywgYXR0ciwgY3NzIGFsbG93TGlzdHNcblxuZnVuY3Rpb24gdW5jb25zdHJhaW5lZChhdHRyaWJ1dGU6IHN0cmluZyB8IG51bGwpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSB7XG4gIGFiYnI6IHVuY29uc3RyYWluZWQsXG4gIGFjY2VwdDogdW5jb25zdHJhaW5lZCxcbiAgXCJhY2NlcHQtY2hhcnNldFwiOiB1bmNvbnN0cmFpbmVkLFxuICBhY2Nlc3NrZXk6IHVuY29uc3RyYWluZWQsXG4gIGFjdGlvbjogdW5jb25zdHJhaW5lZCxcbiAgYWxpZ246IHVuY29uc3RyYWluZWQsXG4gIGFsdDogdW5jb25zdHJhaW5lZCxcbiAgYXV0b2NvbXBsZXRlOiB1bmNvbnN0cmFpbmVkLFxuICBhdXRvc2F2ZTogdW5jb25zdHJhaW5lZCxcbiAgYXhpczogdW5jb25zdHJhaW5lZCxcbiAgYmdjb2xvcjogdW5jb25zdHJhaW5lZCxcbiAgYm9yZGVyOiB1bmNvbnN0cmFpbmVkLFxuICBjZWxscGFkZGluZzogdW5jb25zdHJhaW5lZCxcbiAgY2VsbHNwYWNpbmc6IHVuY29uc3RyYWluZWQsXG4gIGNoYWxsZW5nZTogdW5jb25zdHJhaW5lZCxcbiAgY2hhcjogdW5jb25zdHJhaW5lZCxcbiAgY2hhcm9mZjogdW5jb25zdHJhaW5lZCxcbiAgY2hhcnNldDogdW5jb25zdHJhaW5lZCxcbiAgY2hlY2tlZDogdW5jb25zdHJhaW5lZCxcbiAgY2l0ZTogdW5jb25zdHJhaW5lZCxcbiAgY2xhc3M6IHVuY29uc3RyYWluZWQsXG4gIGNsZWFyOiB1bmNvbnN0cmFpbmVkLFxuICBjb2xvcjogdW5jb25zdHJhaW5lZCxcbiAgY29sczogdW5jb25zdHJhaW5lZCxcbiAgY29sc3BhbjogdW5jb25zdHJhaW5lZCxcbiAgY29tcGFjdDogdW5jb25zdHJhaW5lZCxcbiAgY29udGVudGVkaXRhYmxlOiB1bmNvbnN0cmFpbmVkLFxuICBjb29yZHM6IHVuY29uc3RyYWluZWQsXG4gIGRhdGV0aW1lOiB1bmNvbnN0cmFpbmVkLFxuICBkaXI6IHVuY29uc3RyYWluZWQsXG4gIGRpc2FibGVkOiB1bmNvbnN0cmFpbmVkLFxuICBkcmFnZ2FibGU6IHVuY29uc3RyYWluZWQsXG4gIGRyb3B6b25lOiB1bmNvbnN0cmFpbmVkLFxuICBlbmN0eXBlOiB1bmNvbnN0cmFpbmVkLFxuICBmb3I6IHVuY29uc3RyYWluZWQsXG4gIGZyYW1lOiB1bmNvbnN0cmFpbmVkLFxuICBoZWFkZXJzOiB1bmNvbnN0cmFpbmVkLFxuICBoZWlnaHQ6IHVuY29uc3RyYWluZWQsXG4gIGhpZ2g6IHVuY29uc3RyYWluZWQsXG4gIGhyZWY6IHVuY29uc3RyYWluZWQsXG4gIGhyZWZsYW5nOiB1bmNvbnN0cmFpbmVkLFxuICBoc3BhY2U6IHVuY29uc3RyYWluZWQsXG4gIGlzbWFwOiB1bmNvbnN0cmFpbmVkLFxuICBpZDogdW5jb25zdHJhaW5lZCxcbiAga2V5dHlwZTogdW5jb25zdHJhaW5lZCxcbiAgbGFiZWw6IHVuY29uc3RyYWluZWQsXG4gIGxhbmc6IHVuY29uc3RyYWluZWQsXG4gIGxpc3Q6IHVuY29uc3RyYWluZWQsXG4gIGxvbmdkZXNjOiB1bmNvbnN0cmFpbmVkLFxuICBsb3c6IHVuY29uc3RyYWluZWQsXG4gIG1heDogdW5jb25zdHJhaW5lZCxcbiAgbWF4bGVuZ3RoOiB1bmNvbnN0cmFpbmVkLFxuICBtZWRpYTogdW5jb25zdHJhaW5lZCxcbiAgbWV0aG9kOiB1bmNvbnN0cmFpbmVkLFxuICBtaW46IHVuY29uc3RyYWluZWQsXG4gIG11bHRpcGxlOiB1bmNvbnN0cmFpbmVkLFxuICBuYW1lOiB1bmNvbnN0cmFpbmVkLFxuICBub2hyZWY6IHVuY29uc3RyYWluZWQsXG4gIG5vc2hhZGU6IHVuY29uc3RyYWluZWQsXG4gIG5vdmFsaWRhdGU6IHVuY29uc3RyYWluZWQsXG4gIG5vd3JhcDogdW5jb25zdHJhaW5lZCxcbiAgb3BlbjogdW5jb25zdHJhaW5lZCxcbiAgb3B0aW11bTogdW5jb25zdHJhaW5lZCxcbiAgcGF0dGVybjogdW5jb25zdHJhaW5lZCxcbiAgcGxhY2Vob2xkZXI6IHVuY29uc3RyYWluZWQsXG4gIHByb21wdDogdW5jb25zdHJhaW5lZCxcbiAgcHViZGF0ZTogdW5jb25zdHJhaW5lZCxcbiAgcmFkaW9ncm91cDogdW5jb25zdHJhaW5lZCxcbiAgcmVhZG9ubHk6IHVuY29uc3RyYWluZWQsXG4gIHJlbDogdW5jb25zdHJhaW5lZCxcbiAgcmVxdWlyZWQ6IHVuY29uc3RyYWluZWQsXG4gIHJldjogdW5jb25zdHJhaW5lZCxcbiAgcmV2ZXJzZWQ6IHVuY29uc3RyYWluZWQsXG4gIHJvd3M6IHVuY29uc3RyYWluZWQsXG4gIHJvd3NwYW46IHVuY29uc3RyYWluZWQsXG4gIHJ1bGVzOiB1bmNvbnN0cmFpbmVkLFxuICBzY29wZTogdW5jb25zdHJhaW5lZCxcbiAgc2VsZWN0ZWQ6IHVuY29uc3RyYWluZWQsXG4gIHNoYXBlOiB1bmNvbnN0cmFpbmVkLFxuICBzaXplOiB1bmNvbnN0cmFpbmVkLFxuICBzcGFuOiB1bmNvbnN0cmFpbmVkLFxuICBzcGVsbGNoZWNrOiB1bmNvbnN0cmFpbmVkLFxuICBzcmM6IHVuY29uc3RyYWluZWQsXG4gIHN0YXJ0OiB1bmNvbnN0cmFpbmVkLFxuICBzdGVwOiB1bmNvbnN0cmFpbmVkLFxuICBzdHlsZTogdW5jb25zdHJhaW5lZCxcbiAgc3VtbWFyeTogdW5jb25zdHJhaW5lZCxcbiAgdGFiaW5kZXg6IHVuY29uc3RyYWluZWQsXG4gIHRhcmdldDogdW5jb25zdHJhaW5lZCxcbiAgdGl0bGU6IHVuY29uc3RyYWluZWQsXG4gIHR5cGU6IHVuY29uc3RyYWluZWQsXG4gIHVzZW1hcDogdW5jb25zdHJhaW5lZCxcbiAgdmFsaWduOiB1bmNvbnN0cmFpbmVkLFxuICB2YWx1ZTogdW5jb25zdHJhaW5lZCxcbiAgdnNwYWNlOiB1bmNvbnN0cmFpbmVkLFxuICB3aWR0aDogdW5jb25zdHJhaW5lZCxcbiAgd3JhcDogdW5jb25zdHJhaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCBhbGxvd2VkVGFnczogQWxsb3dlZFRhZ3MgPSB7XG4gIGE6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBhYmJyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYWNyb255bTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGFkZHJlc3M6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBhcmVhOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYXJ0aWNsZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGFzaWRlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgYjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJkaTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJpZzogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJsb2NrcXVvdGU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBicjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGJ1dHRvbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNhcHRpb246IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBjZW50ZXI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBjaXRlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgY29kZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNvbDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGNvbGdyb3VwOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGF0YTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGRhdGFsaXN0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkZWw6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkZXRhaWxzOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGZuOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGlyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGl2OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZGw6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBkdDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGVtOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZmllbGRzZXQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBmaWdjYXB0aW9uOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZmlndXJlOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgZm9udDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGZvb3RlcjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGZvcm06IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoMTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGgyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaDM6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoNDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGg1OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgaDY6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBoZWFkZXI6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBocjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGk6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBpbWc6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBpbnB1dDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGluczogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGtiZDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGtleWdlbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIGxhYmVsOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbGVnZW5kOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbGk6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBtYWluOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbWFwOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbWFyazogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG1lbnU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBtZW51aXRlbTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG1ldGVyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgbmF2OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgb2w6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBvcHRncm91cDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG9wdGlvbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIG91dHB1dDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHA6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBwcmU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBwcm9ncmVzczogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHE6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBycDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHJ0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgcnVieTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHM6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBzYW1wOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc2VjdGlvbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHNlbGVjdDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHNtYWxsOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgc3BhbjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN0cmlrZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN0cm9uZzogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN1YjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHN1bW1hcnk6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICBzdXA6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0YWJsZTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRib2R5OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdGQ6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0ZXh0YXJlYTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRmb290OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdGg6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0aGVhZDogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHRpbWU6IGFsbG93ZWRBdHRyaWJ1dGVzLFxuICB0cjogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHR0OiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdTogYWxsb3dlZEF0dHJpYnV0ZXMsXG4gIHVsOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgdmFyOiBhbGxvd2VkQXR0cmlidXRlcyxcbiAgd2JyOiBhbGxvd2VkQXR0cmlidXRlcyxcbn07XG5cbmV4cG9ydCBjb25zdCBhbGxvd2VkQ1NTOiBBbGxvd2VkQ1NTID0gW1xuICBcImJhY2tncm91bmRcIixcbiAgXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIixcbiAgXCJiYWNrZ3JvdW5kLWNsaXBcIixcbiAgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXG4gIFwiYmFja2dyb3VuZC1pbWFnZVwiLFxuICBcImJhY2tncm91bmQtb3JpZ2luXCIsXG4gIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFxuICBcImJhY2tncm91bmQtcmVwZWF0XCIsXG4gIFwiYmFja2dyb3VuZC1zaXplXCIsXG4gIFwiYm9yZGVyXCIsXG4gIFwiYm9yZGVyLWJvdHRvbVwiLFxuICBcImJvcmRlci1ib3R0b20tY29sb3JcIixcbiAgXCJib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCIsXG4gIFwiYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIixcbiAgXCJib3JkZXItYm90dG9tLXN0eWxlXCIsXG4gIFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFxuICBcImJvcmRlci1jb2xsYXBzZVwiLFxuICBcImJvcmRlci1jb2xvclwiLFxuICBcImJvcmRlci1pbWFnZVwiLFxuICBcImJvcmRlci1pbWFnZS1vdXRzZXRcIixcbiAgXCJib3JkZXItaW1hZ2UtcmVwZWF0XCIsXG4gIFwiYm9yZGVyLWltYWdlLXNsaWNlXCIsXG4gIFwiYm9yZGVyLWltYWdlLXNvdXJjZVwiLFxuICBcImJvcmRlci1pbWFnZS13aWR0aFwiLFxuICBcImJvcmRlci1sZWZ0XCIsXG4gIFwiYm9yZGVyLWxlZnQtY29sb3JcIixcbiAgXCJib3JkZXItbGVmdC1zdHlsZVwiLFxuICBcImJvcmRlci1sZWZ0LXdpZHRoXCIsXG4gIFwiYm9yZGVyLXJhZGl1c1wiLFxuICBcImJvcmRlci1yaWdodFwiLFxuICBcImJvcmRlci1yaWdodC1jb2xvclwiLFxuICBcImJvcmRlci1yaWdodC1zdHlsZVwiLFxuICBcImJvcmRlci1yaWdodC13aWR0aFwiLFxuICBcImJvcmRlci1zcGFjaW5nXCIsXG4gIFwiYm9yZGVyLXN0eWxlXCIsXG4gIFwiYm9yZGVyLXRvcFwiLFxuICBcImJvcmRlci10b3AtY29sb3JcIixcbiAgXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsXG4gIFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIixcbiAgXCJib3JkZXItdG9wLXN0eWxlXCIsXG4gIFwiYm9yZGVyLXRvcC13aWR0aFwiLFxuICBcImJvcmRlci13aWR0aFwiLFxuICBcImJvdHRvbVwiLFxuICBcImNhcHRpb24tc2lkZVwiLFxuICBcImNsZWFyXCIsXG4gIFwiY2xpcFwiLFxuICBcImNvbG9yXCIsXG4gIFwiY29udGVudFwiLFxuICBcImNvdW50ZXItaW5jcmVtZW50XCIsXG4gIFwiY291bnRlci1yZXNldFwiLFxuICBcImN1cnNvclwiLFxuICBcImRpcmVjdGlvblwiLFxuICBcImRpc3BsYXlcIixcbiAgXCJlbXB0eS1jZWxsc1wiLFxuICBcImZsb2F0XCIsXG4gIFwiZm9udFwiLFxuICBcImZvbnQtZmFtaWx5XCIsXG4gIFwiZm9udC1mZWF0dXJlLXNldHRpbmdzXCIsXG4gIFwiZm9udC1rZXJuaW5nXCIsXG4gIFwiZm9udC1sYW5ndWFnZS1vdmVycmlkZVwiLFxuICBcImZvbnQtc2l6ZVwiLFxuICBcImZvbnQtc2l6ZS1hZGp1c3RcIixcbiAgXCJmb250LXN0cmV0Y2hcIixcbiAgXCJmb250LXN0eWxlXCIsXG4gIFwiZm9udC1zeW50aGVzaXNcIixcbiAgXCJmb250LXZhcmlhbnRcIixcbiAgXCJmb250LXZhcmlhbnQtYWx0ZXJuYXRlc1wiLFxuICBcImZvbnQtdmFyaWFudC1jYXBzXCIsXG4gIFwiZm9udC12YXJpYW50LWVhc3QtYXNpYW5cIixcbiAgXCJmb250LXZhcmlhbnQtbGlnYXR1cmVzXCIsXG4gIFwiZm9udC12YXJpYW50LW51bWVyaWNcIixcbiAgXCJmb250LXZhcmlhbnQtcG9zaXRpb25cIixcbiAgXCJmb250LXdlaWdodFwiLFxuICBcImhlaWdodFwiLFxuICBcImxlZnRcIixcbiAgXCJsZXR0ZXItc3BhY2luZ1wiLFxuICBcImxpbmUtaGVpZ2h0XCIsXG4gIFwibGlzdC1zdHlsZVwiLFxuICBcImxpc3Qtc3R5bGUtaW1hZ2VcIixcbiAgXCJsaXN0LXN0eWxlLXBvc2l0aW9uXCIsXG4gIFwibGlzdC1zdHlsZS10eXBlXCIsXG4gIFwibWFyZ2luXCIsXG4gIFwibWFyZ2luLWJvdHRvbVwiLFxuICBcIm1hcmdpbi1sZWZ0XCIsXG4gIFwibWFyZ2luLXJpZ2h0XCIsXG4gIFwibWFyZ2luLXRvcFwiLFxuICBcIm1heC1oZWlnaHRcIixcbiAgXCJtYXgtd2lkdGhcIixcbiAgXCJtaW4taGVpZ2h0XCIsXG4gIFwibWluLXdpZHRoXCIsXG4gIFwib3BhY2l0eVwiLFxuICBcIm9ycGhhbnNcIixcbiAgXCJvdXRsaW5lXCIsXG4gIFwib3V0bGluZS1jb2xvclwiLFxuICBcIm91dGxpbmUtb2Zmc2V0XCIsXG4gIFwib3V0bGluZS1zdHlsZVwiLFxuICBcIm91dGxpbmUtd2lkdGhcIixcbiAgXCJvdmVyZmxvd1wiLFxuICBcIm92ZXJmbG93LXdyYXBcIixcbiAgXCJvdmVyZmxvdy14XCIsXG4gIFwib3ZlcmZsb3cteVwiLFxuICBcInBhZGRpbmdcIixcbiAgXCJwYWRkaW5nLWJvdHRvbVwiLFxuICBcInBhZGRpbmctbGVmdFwiLFxuICBcInBhZGRpbmctcmlnaHRcIixcbiAgXCJwYWRkaW5nLXRvcFwiLFxuICBcInBhZ2UtYnJlYWstYWZ0ZXJcIixcbiAgXCJwYWdlLWJyZWFrLWJlZm9yZVwiLFxuICBcInBhZ2UtYnJlYWstaW5zaWRlXCIsXG4gIFwicXVvdGVzXCIsXG4gIFwicmlnaHRcIixcbiAgXCJ0YWJsZS1sYXlvdXRcIixcbiAgXCJ0ZXh0LWFsaWduXCIsXG4gIFwidGV4dC1kZWNvcmF0aW9uXCIsXG4gIFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCIsXG4gIFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIixcbiAgXCJ0ZXh0LWRlY29yYXRpb24tc2tpcFwiLFxuICBcInRleHQtZGVjb3JhdGlvbi1zdHlsZVwiLFxuICBcInRleHQtaW5kZW50XCIsXG4gIFwidGV4dC10cmFuc2Zvcm1cIixcbiAgXCJ0b3BcIixcbiAgXCJ1bmljb2RlLWJpZGlcIixcbiAgXCJ2ZXJ0aWNhbC1hbGlnblwiLFxuICBcInZpc2liaWxpdHlcIixcbiAgXCJ3aGl0ZS1zcGFjZVwiLFxuICBcIndpZG93c1wiLFxuICBcIndpZHRoXCIsXG4gIFwid29yZC1zcGFjaW5nXCIsXG4gIFwiei1pbmRleFwiLFxuXTtcbiIsIi8qXG4gKiBUaGlzIGlzIGFuIGFkYXB0YXRpb24gb2YgQWxvayBNZW5naHJhamFuaSdzIEhUTUwgc2FuaXRpemVyLCBieSBzaWRpb3VzdmljLlxuIGh0dHBzOi8vd3d3LnF1YXhpby5jb20vaHRtbF93aGl0ZV9saXN0ZWRfc2FuaXRpemVyL1xuICogVGFrZXMgYSBwb3RlbnRpYWxseURhbmdlcm91c0hUTUwgc3RyaW5nLCByZXR1cm5zIGEgc2FuaXRpemVkIG5vZGUuXG4gKi9cblxuaW1wb3J0IHsgYWxsb3dlZFRhZ3MsIGFsbG93ZWRDU1MgfSBmcm9tIFwiLi9hbGxvd2VkXCI7XG5cbmZ1bmN0aW9uIHNhbml0aXplTm9kZShub2RlOiBIVE1MRWxlbWVudCkge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoKTtcblxuICBjb25zdCBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKG5vZGVOYW1lID09IFwiI3RleHRcIikge1xuICAgIHJldHVybiBub2RlOyAvLyBsZXQgdGV4dCBub2RlcyBiZVxuICB9XG4gIGlmIChub2RlTmFtZSA9PSBcIiNjb21tZW50XCIpIHtcbiAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKFwiXCIpOyAvLyBsZXQgY29tbWVudHMgZGllXG4gIH1cblxuICAvLyB0aHJvdyBlcnJvciBpbiBjYXNlIG9mIGRpc2FsbG93ZWQgbm9kZXNcbiAgaWYgKCFhbGxvd2VkVGFncy5oYXNPd25Qcm9wZXJ0eShub2RlTmFtZSkpIHtcbiAgICAvLyBhaW4ndCBkZWFsaW5nIHdpdGggdGhpcyBub2RlXG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBg8J+aq1BvdGVudGlhbGx5IGRhbmdlcm91cyBub2RlLCA8JHtub2RlTmFtZX0+LiBQaGFudG9tIGhhcyBkZXN0cm95ZWQgaXQuIElmIHlvdSB0aGluayB0aGlzIGlzIGEgbWlzdGFrZSwgcGxlYXNlIHJhaXNlIGFuIGlzc3VlIGF0OiBodHRwczovL2dpdGh1Yi5jb20vc2lkaW91c3ZpYy9waGFudG9tL2lzc3Vlc2BcbiAgICApO1xuICB9XG5cbiAgY29uc3Qgc2FuaXRpemVkTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcblxuICAvLyByZS1pbmplY3QgYWxsb3dlZCBhdHRyaWJ1dGVzXG4gIGZvciAoXG4gICAgbGV0IG5vZGVBdHRyaWJ1dGVzID0gMDtcbiAgICBub2RlQXR0cmlidXRlcyA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7XG4gICAgbm9kZUF0dHJpYnV0ZXMrK1xuICApIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0obm9kZUF0dHJpYnV0ZXMpPy5uYW1lIGFzIHN0cmluZztcbiAgICBpZiAoYWxsb3dlZFRhZ3Nbbm9kZU5hbWVdLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZXIgPSBhbGxvd2VkVGFnc1tub2RlTmFtZV1bYXR0cmlidXRlTmFtZV07XG4gICAgICBzYW5pdGl6ZWROb2RlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgc2FuaXRpemVyKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSBhcyBzdHJpbmdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmUtaW5qZWN0IGFsbG93ZWQgY3NzXG4gIGZvciAobGV0IGNzcyBpbiBhbGxvd2VkQ1NTKSB7XG4gICAgc2FuaXRpemVkTm9kZS5zdHlsZVthbGxvd2VkQ1NTW2Nzc11dID0gbm9kZS5zdHlsZVthbGxvd2VkQ1NTW2Nzc11dO1xuICB9XG5cbiAgLy8gcmVjdXJzaXZlbHkgc2FuaXRpemUgY2hpbGROb2Rlc1xuICB3aGlsZSAobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZCA9IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5jaGlsZE5vZGVzWzBdKTtcbiAgICBzYW5pdGl6ZWROb2RlLmFwcGVuZENoaWxkKHNhbml0aXplTm9kZShjaGlsZCBhcyBIVE1MRWxlbWVudCkpO1xuICB9XG4gIHJldHVybiBzYW5pdGl6ZWROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYW5pdGl6ZUhUTUwocG90ZW50aWFsbHlEYW5nZXJvdXNIVE1MOiBzdHJpbmcpIHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCk7XG5cbiAgY29uc3QgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5pbm5lckhUTUwgPSBwb3RlbnRpYWxseURhbmdlcm91c0hUTUw7XG5cbiAgcmV0dXJuIChzYW5pdGl6ZU5vZGUoZGl2KSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==