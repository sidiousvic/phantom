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
    var phantomDOM = { test: { attributes: { id: 0 }, dataset: {} } };
    function LAUNCHDOM() {
        var _a;
        var body = document.body;
        if (!document.querySelector("#PHANTOM")) {
            var PHANTOM_1 = document.createElement("div");
            PHANTOM_1.id = "PHANTOM";
            body === null || body === void 0 ? void 0 : body.appendChild(PHANTOM_1);
        }
        (_a = document.getElementById("X")) === null || _a === void 0 ? void 0 : _a.firstChild;
        var DOM = RENDERPSEUDOELEMENT();
        SWAPNODE(DOM, document.querySelector("#PHANTOM"));
        return DOM;
    }
    function COALESCEXDOM() {
        return "\n    <div id=\"PHANTOM\">\n    " + XDOM() + "\n    </div>\n    ";
    }
    function RENDERPSEUDOELEMENT(pseudoElement) {
        var e_1, _a;
        if (pseudoElement === void 0) { pseudoElement = TRANSMUTEXMLTOPSEUDOEL(COALESCEXDOM()); }
        var tagName = pseudoElement.tagName, attributes = pseudoElement.attributes, innerHTML = pseudoElement.innerHTML, children = pseudoElement.children /*dataset*/;
        var $children = [];
        if (children && children.length) {
            $children = Array.prototype.map.call(children, function (child) {
                RENDERPSEUDOELEMENT(child);
            });
        }
        var DOMElement;
        // dom diffing
        Object.values(phantomDOM).map(function (phantomNode) {
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
                SWAPNODE(newNode, targetNode);
                DOMElement = newNode;
            }
        });
        phantomDOM[attributes.id] = pseudoElement;
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
    function TRANSMUTEXMLTOPSEUDOEL(xml) {
        if (typeof xml !== "string")
            xml = xml.outerHTML;
        var doc = new DOMParser().parseFromString(xml, "text/html");
        var $el = doc.body.firstChild;
        var _a = $el, tagName = _a.tagName, children = _a.children, id = _a.id, dataset = _a.dataset, classList = _a.classList, innerHTML = _a.innerHTML, outerHTML = _a.outerHTML;
        var $children = [];
        if (children && children.length) {
            $children = Array.prototype.map.call(children, function (child) {
                return TRANSMUTEXMLTOPSEUDOEL(child);
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
    function SWAPNODE(pseudoNode, targetNode) {
        targetNode === null || targetNode === void 0 ? void 0 : targetNode.replaceWith(pseudoNode);
        return pseudoNode;
    }
    reduxStore.subscribe(function () {
        RENDERPSEUDOELEMENT();
    });
    return {
        fire: reduxStore.dispatch,
        data: reduxStore.getState,
        launch: LAUNCHDOM,
    };
}
/* harmony default export */ __webpack_exports__["default"] = (PHANTOM);


/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2lkaW91c3ZpYy9waGFudG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzaWRpb3VzdmljL3BoYW50b20vLi9waGFudG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQSxTQUFTLE9BQU8sQ0FBQyxVQUFlLEVBQUUsSUFBa0I7SUFDbEQsSUFBSSxVQUFVLEdBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFFdkUsU0FBUyxTQUFTOztRQUNoQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQU0sU0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsU0FBTyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsQ0FBQyxTQUFPLEVBQUU7U0FDNUI7UUFDRCxjQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQywwQ0FBRSxVQUFVLENBQUM7UUFDekMsSUFBTSxHQUFHLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxTQUFTLFlBQVk7UUFDbkIsT0FBTyxxQ0FFTCxJQUFJLEVBQUUsdUJBRVAsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLG1CQUFtQixDQUMxQixhQUFzRDs7UUFBdEQsZ0RBQWdCLHNCQUFzQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3BELFdBQU8sR0FJTCxhQUFhLFFBSlIsRUFDUCxVQUFVLEdBR1IsYUFBYSxXQUhMLEVBQ1YsU0FBUyxHQUVQLGFBQWEsVUFGTixFQUNULFFBQVEsR0FDTixhQUFhLFNBRFAsQ0FBQyxXQUFXLENBQ0o7UUFFbEIsSUFBSSxTQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUVqQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzlCLFNBQXFCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUs7Z0JBQ2hFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFVBQVUsQ0FBQztRQUVmLGNBQWM7UUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFdBQWdCOztZQUM3QyxJQUNFLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO29CQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFDdkM7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7b0JBQzlDLEtBQXFCLHdCQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyw2Q0FBRTt3QkFBdEMsNEJBQU0sRUFBTCxDQUFDLFVBQUUsQ0FBQzt3QkFDZCxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUMsQ0FBQztxQkFDdEM7Ozs7Ozs7OztnQkFDRCxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDOUIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFJLFVBQVUsQ0FBQyxFQUFJLENBQUMsQ0FBQztnQkFDN0QsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDOUIsVUFBVSxHQUFHLE9BQU8sQ0FBQzthQUN0QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDMUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTdDLEtBQXFCLHdCQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyw2Q0FBRTtnQkFBdEMsNEJBQU0sRUFBTCxDQUFDLFVBQUUsQ0FBQztnQkFDZCxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUMsQ0FBQzthQUN6Qzs7Ozs7Ozs7O1FBRUQsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDakMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVMsc0JBQXNCLENBQUMsR0FBVztRQUN6QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFBRSxHQUFHLEdBQUksR0FBbUIsQ0FBQyxTQUFTLENBQUM7UUFDbEUsSUFBSSxHQUFHLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzFCLFNBUUYsR0FBa0IsRUFQcEIsT0FBTyxlQUNQLFFBQVEsZ0JBQ1IsRUFBRSxVQUNGLE9BQU8sZUFDUCxTQUFTLGlCQUNULFNBQVMsaUJBQ1QsU0FBUyxlQUNXLENBQUM7UUFFdkIsSUFBSSxTQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUVqQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzlCLFNBQXFCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUs7Z0JBQ2hFLE9BQU8sc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU87WUFDTCxPQUFPO1lBQ1AsVUFBVSxFQUFFO2dCQUNWLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRCxPQUFPO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsUUFBUSxDQUNmLFVBQThCLEVBQzlCLFVBQXdDO1FBRXhDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxXQUFXLENBQUMsVUFBVSxFQUFFO1FBQ3BDLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ25CLG1CQUFtQixFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0wsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRO1FBQ3pCLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUTtRQUN6QixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDO0FBQ0osQ0FBQztBQUVjLHNFQUFPLEVBQUMiLCJmaWxlIjoicGhhbnRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGhhbnRvbS50c1wiKTtcbiIsInR5cGUgUHNldWRvTm9kZSA9IHtcbiAgdGFnTmFtZTogc3RyaW5nO1xuICBhdHRyaWJ1dGVzOiB7IGlkOiBzdHJpbmc7IGNsYXNzOiBzdHJpbmcgfCBET01Ub2tlbkxpc3QgfTtcbiAgJGNoaWxkcmVuOiBQc2V1ZG9Ob2RlW107XG4gIGlubmVySFRNTDogc3RyaW5nO1xufTtcblxudHlwZSBYRE9NRnVuY3Rpb24gPSB7XG4gICgpOiBbc3RyaW5nLCBhbnldO1xufTtcblxuZnVuY3Rpb24gUEhBTlRPTShyZWR1eFN0b3JlOiBhbnksIFhET006IFhET01GdW5jdGlvbikge1xuICBsZXQgcGhhbnRvbURPTTogYW55ID0geyB0ZXN0OiB7IGF0dHJpYnV0ZXM6IHsgaWQ6IDAgfSwgZGF0YXNldDoge30gfSB9O1xuXG4gIGZ1bmN0aW9uIExBVU5DSERPTSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUEhBTlRPTVwiKSkge1xuICAgICAgY29uc3QgUEhBTlRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBQSEFOVE9NLmlkID0gXCJQSEFOVE9NXCI7XG4gICAgICBib2R5Py5hcHBlbmRDaGlsZChQSEFOVE9NKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJYXCIpPy5maXJzdENoaWxkO1xuICAgIGNvbnN0IERPTSA9IFJFTkRFUlBTRVVET0VMRU1FTlQoKTtcbiAgICBTV0FQTk9ERShET00sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUEhBTlRPTVwiKSk7XG4gICAgcmV0dXJuIERPTTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENPQUxFU0NFWERPTSgpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJQSEFOVE9NXCI+XG4gICAgJHtYRE9NKCl9XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFJFTkRFUlBTRVVET0VMRU1FTlQoXG4gICAgcHNldWRvRWxlbWVudCA9IFRSQU5TTVVURVhNTFRPUFNFVURPRUwoQ09BTEVTQ0VYRE9NKCkpXG4gICkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgaW5uZXJIVE1MLFxuICAgICAgY2hpbGRyZW4gLypkYXRhc2V0Ki8sXG4gICAgfSA9IHBzZXVkb0VsZW1lbnQ7XG5cbiAgICBsZXQgJGNoaWxkcmVuOiBQc2V1ZG9Ob2RlW10gPSBbXTtcblxuICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICgkY2hpbGRyZW4gYXMgdW5rbm93bikgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgICBSRU5ERVJQU0VVRE9FTEVNRU5UKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBET01FbGVtZW50O1xuXG4gICAgLy8gZG9tIGRpZmZpbmdcbiAgICBPYmplY3QudmFsdWVzKHBoYW50b21ET00pLm1hcCgocGhhbnRvbU5vZGU6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwaGFudG9tTm9kZS5hdHRyaWJ1dGVzLmlkID09PSBwc2V1ZG9FbGVtZW50LmF0dHJpYnV0ZXMuaWQgJiZcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocGhhbnRvbU5vZGUuZGF0YXNldCkgIT09XG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHNldWRvRWxlbWVudC5kYXRhc2V0KVxuICAgICAgKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICBuZXdOb2RlLnNldEF0dHJpYnV0ZShrLCB2IGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Tm9kZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YXR0cmlidXRlcy5pZH1gKTtcbiAgICAgICAgU1dBUE5PREUobmV3Tm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgICAgIERPTUVsZW1lbnQgPSBuZXdOb2RlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGhhbnRvbURPTVthdHRyaWJ1dGVzLmlkXSA9IHBzZXVkb0VsZW1lbnQ7XG4gICAgRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgRE9NRWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgdiBhcyBzdHJpbmcpO1xuICAgIH1cblxuICAgIERPTUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHJldHVybiBET01FbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gVFJBTlNNVVRFWE1MVE9QU0VVRE9FTCh4bWw6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgeG1sICE9PSBcInN0cmluZ1wiKSB4bWwgPSAoeG1sIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUw7XG4gICAgbGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoeG1sLCBcInRleHQvaHRtbFwiKTtcbiAgICBjb25zdCAkZWwgPSBkb2MuYm9keS5maXJzdENoaWxkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgZGF0YXNldCxcbiAgICAgIGNsYXNzTGlzdCxcbiAgICAgIGlubmVySFRNTCxcbiAgICAgIG91dGVySFRNTCxcbiAgICB9ID0gJGVsIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgbGV0ICRjaGlsZHJlbjogUHNldWRvTm9kZVtdID0gW107XG5cbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAoJGNoaWxkcmVuIGFzIHVua25vd24pID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIFRSQU5TTVVURVhNTFRPUFNFVURPRUwoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkLFxuICAgICAgICBjbGFzczogY2xhc3NMaXN0LFxuICAgICAgfSxcbiAgICAgIGRhdGFzZXQsXG4gICAgICBjaGlsZHJlbjogJGNoaWxkcmVuLFxuICAgICAgaW5uZXJIVE1MLFxuICAgICAgb3V0ZXJIVE1MLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBTV0FQTk9ERShcbiAgICBwc2V1ZG9Ob2RlOiBUZXh0IHwgSFRNTEVsZW1lbnQsXG4gICAgdGFyZ2V0Tm9kZTogQ2hpbGROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0YXJnZXROb2RlPy5yZXBsYWNlV2l0aChwc2V1ZG9Ob2RlKTtcbiAgICByZXR1cm4gcHNldWRvTm9kZTtcbiAgfVxuXG4gIHJlZHV4U3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBSRU5ERVJQU0VVRE9FTEVNRU5UKCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZmlyZTogcmVkdXhTdG9yZS5kaXNwYXRjaCxcbiAgICBkYXRhOiByZWR1eFN0b3JlLmdldFN0YXRlLFxuICAgIGxhdW5jaDogTEFVTkNIRE9NLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQSEFOVE9NO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==