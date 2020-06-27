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
        // We look at the current pseudoDOM, and for every pseudoNode in it, if
        // * the id of the pseudoNode and current pseudoElement match, and
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
                newNode.innerHTML = innerHTML;
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
        DOMElement.innerHTML = innerHTML;
        return DOMElement;
    }
    function transmuteHTMLtoPseudoElement(html) {
        if (typeof html !== "string")
            html = html.outerHTML;
        // TODO: find a better solution to mapped elements ↓↓↓
        // the next line removes stray commas after stringifying element
        html = html.replace(/>,/g, ">"); // remove commas from mapped element arrays
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9waGFudG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTLE9BQU8sQ0FBQyxVQUFlLEVBQUUsSUFBa0I7SUFDbEQsSUFBSSxTQUFTLEdBQWM7UUFDekIsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1lBQzdCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsRUFBRTtTQUNaO0tBQ0YsQ0FBQztJQUVGLFNBQVMsU0FBUztRQUNoQixJQUFNLElB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LHVCQUFQLE9BQU8sQ0FBRSxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQzdCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ25CLG1CQUFtQixFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0wsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRO1FBQ3pCLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUTtRQUN6QixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDO0FBQ0osQ0FBQztBQUVjLHNFQUFPLEVBQUMiLCJmaWxlIjoicGhhbnRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGhhbnRvbS50c1wiKTtcbiIsImZ1bmN0aW9uIFBIQU5UT00ocmVkdXhTdG9yZTogYW55LCBYRE9NOiBYRE9NRnVuY3Rpb24pIHtcbiAgbGV0IHBzZXVkb0RPTTogcHNldWRvRE9NID0ge1xuICAgIHRlc3Q6IHtcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGlkOiBcIlBIQU5UT01cIiB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgaW5uZXJIVE1MOiBcIlwiLFxuICAgICAgZGF0YXNldDoge30sXG4gICAgfSxcbiAgfTtcblxuICBmdW5jdGlvbiBsYXVuY2hET00oKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1BIQU5UT01cIikpIHtcbiAgICAgIGNvbnN0IFBIQU5UT00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgUEhBTlRPTS5pZCA9IFwiUEhBTlRPTVwiO1xuICAgICAgYm9keT8uYXBwZW5kQ2hpbGQoUEhBTlRPTSk7XG4gICAgfVxuICAgIGNvbnN0IERPTSA9IHJlbmRlclBzZXVkb0VsZW1lbnQoKTtcbiAgICBzd2FwRWxlbWVudChET00sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUEhBTlRPTVwiKSk7XG4gICAgcmV0dXJuIERPTTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvYWxlc2NlUGhhbnRvbURPTSgpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJQSEFOVE9NXCI+XG4gICAgICAke1hET00oKX1cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUHNldWRvRWxlbWVudChcbiAgICBwc2V1ZG9FbGVtZW50ID0gdHJhbnNtdXRlSFRNTHRvUHNldWRvRWxlbWVudChjb2FsZXNjZVBoYW50b21ET00oKSlcbiAgKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lLCBhdHRyaWJ1dGVzLCBpbm5lckhUTUwsIGNoaWxkcmVuIH0gPSBwc2V1ZG9FbGVtZW50O1xuICAgIGxldCAkY2hpbGRyZW46IFBzZXVkb0VsZW1lbnRbXSA9IFtdO1xuXG4gICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgKCRjaGlsZHJlbiBhcyB1bmtub3duKSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIHJlbmRlclBzZXVkb0VsZW1lbnQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IERPTUVsZW1lbnQ7XG5cbiAgICAvLyBET00gZGlmZmluZyBhaGVhZC4g4oaT4oaT4oaTXG4gICAgLy8gV2UgbG9vayBhdCB0aGUgY3VycmVudCBwc2V1ZG9ET00sIGFuZCBmb3IgZXZlcnkgcHNldWRvTm9kZSBpbiBpdCwgaWZcbiAgICAvLyAqIHRoZSBpZCBvZiB0aGUgcHNldWRvTm9kZSBhbmQgY3VycmVudCBwc2V1ZG9FbGVtZW50IG1hdGNoLCBhbmRcbiAgICAvLyAqIHRoZSBub2RlcycgZGF0YXNldCAoZGF0YS1waGFudG9tKSBhcmUgZGlmZmVyZW50ICh0aGVpciBkYXRhIGhhcyBjaGFuZ2VkKSxcbiAgICAvLyB3ZSBzd2FwIHRoZSBub2Rlcy5cbiAgICBPYmplY3QudmFsdWVzKHBzZXVkb0RPTSkubWFwKChwc2V1ZG9ET01Ob2RlOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcHNldWRvRE9NTm9kZS5hdHRyaWJ1dGVzLmlkID09PSBwc2V1ZG9FbGVtZW50LmF0dHJpYnV0ZXMuaWQgJiZcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocHNldWRvRE9NTm9kZS5kYXRhc2V0KSAhPT1cbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShwc2V1ZG9FbGVtZW50LmRhdGFzZXQpXG4gICAgICApIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICAgIG5ld05vZGUuc2V0QXR0cmlidXRlKGssIHYgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdOb2RlLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZXMuaWQpO1xuICAgICAgICBzd2FwRWxlbWVudChuZXdOb2RlLCB0YXJnZXROb2RlKTtcbiAgICAgICAgRE9NRWxlbWVudCA9IG5ld05vZGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwc2V1ZG9ET01bYXR0cmlidXRlcy5pZF0gPSBwc2V1ZG9FbGVtZW50O1xuICAgIERPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgIERPTUVsZW1lbnQuc2V0QXR0cmlidXRlKGssIHYgYXMgc3RyaW5nKTtcbiAgICB9XG5cbiAgICBET01FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICByZXR1cm4gRE9NRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbXV0ZUhUTUx0b1BzZXVkb0VsZW1lbnQoaHRtbDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBodG1sICE9PSBcInN0cmluZ1wiKSBodG1sID0gKGh0bWwgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTDtcbiAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHNvbHV0aW9uIHRvIG1hcHBlZCBlbGVtZW50cyDihpPihpPihpNcbiAgICAvLyB0aGUgbmV4dCBsaW5lIHJlbW92ZXMgc3RyYXkgY29tbWFzIGFmdGVyIHN0cmluZ2lmeWluZyBlbGVtZW50XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvPiwvZywgXCI+XCIpOyAvLyByZW1vdmUgY29tbWFzIGZyb20gbWFwcGVkIGVsZW1lbnQgYXJyYXlzXG4gICAgbGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgJGVsID0gZG9jLmJvZHkuZmlyc3RDaGlsZDtcbiAgICBjb25zdCB7XG4gICAgICB0YWdOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGRhdGFzZXQsXG4gICAgICBjbGFzc0xpc3QsXG4gICAgICBpbm5lckhUTUwsXG4gICAgICBvdXRlckhUTUwsXG4gICAgfSA9ICRlbCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGxldCAkY2hpbGRyZW46IFBzZXVkb0VsZW1lbnRbXSA9IFtdO1xuXG4gICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgKCRjaGlsZHJlbiBhcyB1bmtub3duKSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIHJldHVybiB0cmFuc211dGVIVE1MdG9Qc2V1ZG9FbGVtZW50KGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGFnTmFtZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNsYXNzOiBjbGFzc0xpc3QsXG4gICAgICB9LFxuICAgICAgZGF0YXNldCxcbiAgICAgIGNoaWxkcmVuOiAkY2hpbGRyZW4sXG4gICAgICBpbm5lckhUTUwsXG4gICAgICBvdXRlckhUTUwsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3YXBFbGVtZW50KFxuICAgIHN3YXBJbjogVGV4dCB8IEhUTUxFbGVtZW50LFxuICAgIHN3YXBPdXQ6IENoaWxkTm9kZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3dhcE91dD8ucmVwbGFjZVdpdGgoc3dhcEluKTtcbiAgICByZXR1cm4gc3dhcEluO1xuICB9XG5cbiAgcmVkdXhTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIHJlbmRlclBzZXVkb0VsZW1lbnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJlOiByZWR1eFN0b3JlLmRpc3BhdGNoLFxuICAgIGRhdGE6IHJlZHV4U3RvcmUuZ2V0U3RhdGUsXG4gICAgbGF1bmNoOiBsYXVuY2hET00sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBIQU5UT007XG4iXSwic291cmNlUm9vdCI6IiJ9