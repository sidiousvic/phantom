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
        if (pseudoElement === void 0) { pseudoElement = transmuteXMLtoPseudoElement(coalescePhantomDOM()); }
        var tagName = pseudoElement.tagName, attributes = pseudoElement.attributes, innerHTML = pseudoElement.innerHTML, children = pseudoElement.children;
        var $children = [];
        if (children && children.length) {
            $children = Array.prototype.map.call(children, function (child) {
                renderPseudoElement(child);
            });
        }
        var DOMElement;
        // dom diffing
        Object.values(pseudoDOM).map(function (phantomNode) {
            var e_2, _a;
            if (phantomNode.attributes.id === pseudoElement.attributes.id &&
                JSON.stringify(phantomNode.dataset) !==
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
                var targetNode = document.querySelector("#" + attributes.id);
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
    function transmuteXMLtoPseudoElement(xml) {
        if (typeof xml !== "string")
            xml = xml.outerHTML;
        var doc = new DOMParser().parseFromString(xml, "text/html");
        var $el = doc.body.firstChild;
        var _a = $el, tagName = _a.tagName, children = _a.children, id = _a.id, dataset = _a.dataset, classList = _a.classList, innerHTML = _a.innerHTML, outerHTML = _a.outerHTML;
        var $children = [];
        if (children && children.length) {
            $children = Array.prototype.map.call(children, function (child) {
                return transmuteXMLtoPseudoElement(child);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9waGFudG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQSxTQUFTLE9BQU8sQ0FBQyxVQUFlLEVBQUUsSUFBa0I7SUFDbEQsSUFBSSxTQUFTLEdBQWM7UUFDekIsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1lBQzdCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsRUFBRTtTQUNaO0tBQ0YsQ0FBQztJQUVGLFNBQVMsU0FBUztRQUNoQixJQUFNLElB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QUNMLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUTtRQUN6QixJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVE7UUFDekIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQztBQUNKLENBQUM7QUFFYyxzRUFBTyxFQUFDIiwiZmlsZSI6InBoYW50b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BoYW50b20udHNcIik7XG4iLCJ0eXBlIFBzZXVkb0VsZW1lbnQgPSB7XG4gIHRhZ05hbWU6IHN0cmluZztcbiAgYXR0cmlidXRlczogeyBpZD86IHN0cmluZzsgY2xhc3M/OiBzdHJpbmcgfCBET01Ub2tlbkxpc3QgfTtcbiAgY2hpbGRyZW46IFBzZXVkb0VsZW1lbnRbXSB8IFtdO1xuICBpbm5lckhUTUw6IHN0cmluZztcbiAgZGF0YXNldD86IERPTVRva2VuTGlzdCB8IHt9O1xufTtcblxudHlwZSBYRE9NRnVuY3Rpb24gPSB7XG4gICgpOiBbc3RyaW5nLCBhbnldO1xufTtcblxudHlwZSBwc2V1ZG9ET00gPSB7XG4gIFtrZXk6IHN0cmluZ106IFBzZXVkb0VsZW1lbnQ7XG59O1xuXG5mdW5jdGlvbiBQSEFOVE9NKHJlZHV4U3RvcmU6IGFueSwgWERPTTogWERPTUZ1bmN0aW9uKSB7XG4gIGxldCBwc2V1ZG9ET006IHBzZXVkb0RPTSA9IHtcbiAgICB0ZXN0OiB7XG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxuICAgICAgYXR0cmlidXRlczogeyBpZDogXCJQSEFOVE9NXCIgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIGlubmVySFRNTDogXCJcIixcbiAgICAgIGRhdGFzZXQ6IHt9LFxuICAgIH0sXG4gIH07XG5cbiAgZnVuY3Rpb24gbGF1bmNoRE9NKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQSEFOVE9NXCIpKSB7XG4gICAgICBjb25zdCBQSEFOVE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIFBIQU5UT00uaWQgPSBcIlBIQU5UT01cIjtcbiAgICAgIGJvZHk/LmFwcGVuZENoaWxkKFBIQU5UT00pO1xuICAgIH1cbiAgICBjb25zdCBET00gPSByZW5kZXJQc2V1ZG9FbGVtZW50KCk7XG4gICAgc3dhcEVsZW1lbnQoRE9NLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1BIQU5UT01cIikpO1xuICAgIHJldHVybiBET007XG4gIH1cblxuICBmdW5jdGlvbiBjb2FsZXNjZVBoYW50b21ET00oKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwiUEhBTlRPTVwiPlxuICAgICAgJHtYRE9NKCl9XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBzZXVkb0VsZW1lbnQoXG4gICAgcHNldWRvRWxlbWVudCA9IHRyYW5zbXV0ZVhNTHRvUHNldWRvRWxlbWVudChjb2FsZXNjZVBoYW50b21ET00oKSlcbiAgKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lLCBhdHRyaWJ1dGVzLCBpbm5lckhUTUwsIGNoaWxkcmVuIH0gPSBwc2V1ZG9FbGVtZW50O1xuXG4gICAgbGV0ICRjaGlsZHJlbjogUHNldWRvRWxlbWVudFtdID0gW107XG5cbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAoJGNoaWxkcmVuIGFzIHVua25vd24pID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgcmVuZGVyUHNldWRvRWxlbWVudChjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgRE9NRWxlbWVudDtcblxuICAgIC8vIGRvbSBkaWZmaW5nXG4gICAgT2JqZWN0LnZhbHVlcyhwc2V1ZG9ET00pLm1hcCgocGhhbnRvbU5vZGU6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwaGFudG9tTm9kZS5hdHRyaWJ1dGVzLmlkID09PSBwc2V1ZG9FbGVtZW50LmF0dHJpYnV0ZXMuaWQgJiZcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocGhhbnRvbU5vZGUuZGF0YXNldCkgIT09XG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHNldWRvRWxlbWVudC5kYXRhc2V0KVxuICAgICAgKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICBuZXdOb2RlLnNldEF0dHJpYnV0ZShrLCB2IGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Tm9kZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YXR0cmlidXRlcy5pZH1gKTtcbiAgICAgICAgc3dhcEVsZW1lbnQobmV3Tm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgICAgIERPTUVsZW1lbnQgPSBuZXdOb2RlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHNldWRvRE9NW2F0dHJpYnV0ZXMuaWRdID0gcHNldWRvRWxlbWVudDtcbiAgICBET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICBET01FbGVtZW50LnNldEF0dHJpYnV0ZShrLCB2IGFzIHN0cmluZyk7XG4gICAgfVxuXG4gICAgRE9NRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgcmV0dXJuIERPTUVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc211dGVYTUx0b1BzZXVkb0VsZW1lbnQoeG1sOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHhtbCAhPT0gXCJzdHJpbmdcIikgeG1sID0gKHhtbCBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MO1xuICAgIGxldCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgJGVsID0gZG9jLmJvZHkuZmlyc3RDaGlsZDtcbiAgICBjb25zdCB7XG4gICAgICB0YWdOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGRhdGFzZXQsXG4gICAgICBjbGFzc0xpc3QsXG4gICAgICBpbm5lckhUTUwsXG4gICAgICBvdXRlckhUTUwsXG4gICAgfSA9ICRlbCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGxldCAkY2hpbGRyZW46IFBzZXVkb0VsZW1lbnRbXSA9IFtdO1xuXG4gICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgKCRjaGlsZHJlbiBhcyB1bmtub3duKSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIHJldHVybiB0cmFuc211dGVYTUx0b1BzZXVkb0VsZW1lbnQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkLFxuICAgICAgICBjbGFzczogY2xhc3NMaXN0LFxuICAgICAgfSxcbiAgICAgIGRhdGFzZXQsXG4gICAgICBjaGlsZHJlbjogJGNoaWxkcmVuLFxuICAgICAgaW5uZXJIVE1MLFxuICAgICAgb3V0ZXJIVE1MLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzd2FwRWxlbWVudChcbiAgICBzd2FwSW46IFRleHQgfCBIVE1MRWxlbWVudCxcbiAgICBzd2FwT3V0OiBDaGlsZE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN3YXBPdXQ/LnJlcGxhY2VXaXRoKHN3YXBJbik7XG4gICAgcmV0dXJuIHN3YXBJbjtcbiAgfVxuXG4gIHJlZHV4U3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICByZW5kZXJQc2V1ZG9FbGVtZW50KCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZmlyZTogcmVkdXhTdG9yZS5kaXNwYXRjaCxcbiAgICBkYXRhOiByZWR1eFN0b3JlLmdldFN0YXRlLFxuICAgIGxhdW5jaDogbGF1bmNoRE9NLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQSEFOVE9NO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==