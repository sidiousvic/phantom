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
    function LAUNCHDOM() {
        var _a;
        var body = document.body;
        if (!document.querySelector("#PHANTOM")) {
            var PHANTOM_1 = document.createElement("div");
            PHANTOM_1.id = "PHANTOM";
            body === null || body === void 0 ? void 0 : body.appendChild(PHANTOM_1);
        }
        (_a = document.getElementById("X")) === null || _a === void 0 ? void 0 : _a.firstChild;
        var DOM = RENDER();
        SWAPNODE(DOM, document.querySelector("#PHANTOM"));
        return DOM;
    }
    function COALESCEXDOM() {
        return "\n      <div id=\"PHANTOM\">\n      " + XDOM() + "\n      </div>\n      ";
    }
    function TRANSMUTEXMLTOPSEUDOEL(xml) {
        if (typeof xml !== "string")
            xml = xml.outerHTML;
        var doc = new DOMParser().parseFromString(xml, "text/html");
        var $el = doc.body.firstChild;
        var _a = $el, tagName = _a.tagName, children = _a.children, id = _a.id, classList = _a.classList, innerHTML = _a.innerHTML;
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
            $children: $children,
            innerHTML: innerHTML,
        };
    }
    function RENDERPSEUDOELEMENT(_a) {
        var e_1, _b;
        var tagName = _a.tagName, attributes = _a.attributes, innerHTML = _a.innerHTML;
        var ELEMENT = document.createElement(tagName);
        try {
            for (var _c = __values(Object.entries(attributes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), k = _e[0], v = _e[1];
                ELEMENT.setAttribute(k, v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ELEMENT.innerHTML = innerHTML;
        return ELEMENT;
    }
    function RENDER() {
        var element = TRANSMUTEXMLTOPSEUDOEL(COALESCEXDOM());
        if (typeof element === "string") {
            return document.createTextNode(element);
        }
        return RENDERPSEUDOELEMENT(element);
    }
    function SWAPNODE(pseudoNode, targetNode) {
        targetNode === null || targetNode === void 0 ? void 0 : targetNode.replaceWith(pseudoNode);
        return pseudoNode;
    }
    reduxStore.subscribe(function () {
        var _a;
        SWAPNODE(LAUNCHDOM(), (_a = document.getElementById("X")) === null || _a === void 0 ? void 0 : _a.firstChild);
    });
    return {
        fire: reduxStore.dispatch,
        data: reduxStore.getState,
        launch: LAUNCHDOM,
    };
}
/* harmony default export */ __webpack_exports__["default"] = (PHANTOM);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGhhbnRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTLE9BQU8sQ0FBQyxVQUFlLEVBQUUsSUFBa0I7SUFDbEQsU0FBUyxTQUFTOztRQUNoQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQU0sU0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsU0FBTyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsQ0FBQyxTQUFPLEVBQUU7U0FDNUI7UUFDRCxjQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQywwQ0FBRSxVQUFVLENBQUM7UUFDekMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsU0FBUyxZQUFZO1FBQ25CLE9BQU8seUNBRUgsSUFBSSxFQUFFLDJCQUVQLENBQUM7SUFDTixDQUFDO0lBRUQsU0FBUyxzQkFBc0IsQ0FBQyxHQUFXO1FBQ3pDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUFFLEdBQUcsR0FBSSxHQUFtQixDQUFDLFNBQVMsQ0FBQztRQUNsRSxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUQsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUIsU0FBa0QsR0FBa0IsRUFBbEUsT0FBTyxlQUFFLFFBQVEsZ0JBQUUsRUFBRSxVQUFFLFNBQVMsaUJBQUUsU0FBUyxlQUF1QixDQUFDO1FBQzNFLElBQUksU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDakMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUM5QixTQUFxQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLO2dCQUNoRSxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPO1lBQ0wsT0FBTztZQUNQLFVBQVUsRUFBRTtnQkFDVixFQUFFO2dCQUNGLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsbUJBQW1CLENBQUMsRUFBOEM7O1lBQTVDLE9BQU8sZUFBRSxVQUFVLGtCQUFFLFNBQVM7UUFDM0QsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFaEQsS0FBcUIsd0JBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLDZDQUFFO2dCQUF0Qyw0QkFBTSxFQUFMLENBQUMsVUFBRSxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQVcsQ0FBQyxDQUFDO2FBQ3RDOzs7Ozs7Ozs7UUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUU5QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsU0FBUyxNQUFNO1FBQ2IsSUFBTSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxTQUFTLFFBQVEsQ0FDZixVQUE4QixFQUM5QixVQUF3QztRQUV4QyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRTtRQUNwQyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7UUFDbkIsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLDBDQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUTtRQUN6QixJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVE7UUFDekIsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQztBQUNKLENBQUM7QUFFYyxzRUFBTyxFQUFDIiwiZmlsZSI6InBoYW50b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BoYW50b20udHNcIik7XG4iLCJmdW5jdGlvbiBQSEFOVE9NKHJlZHV4U3RvcmU6IGFueSwgWERPTTogWERPTUZ1bmN0aW9uKSB7XG4gIGZ1bmN0aW9uIExBVU5DSERPTSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUEhBTlRPTVwiKSkge1xuICAgICAgY29uc3QgUEhBTlRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBQSEFOVE9NLmlkID0gXCJQSEFOVE9NXCI7XG4gICAgICBib2R5Py5hcHBlbmRDaGlsZChQSEFOVE9NKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJYXCIpPy5maXJzdENoaWxkO1xuICAgIGNvbnN0IERPTSA9IFJFTkRFUigpO1xuICAgIFNXQVBOT0RFKERPTSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQSEFOVE9NXCIpKTtcbiAgICByZXR1cm4gRE9NO1xuICB9XG5cbiAgZnVuY3Rpb24gQ09BTEVTQ0VYRE9NKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiUEhBTlRPTVwiPlxuICAgICAgJHtYRE9NKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gIH1cblxuICBmdW5jdGlvbiBUUkFOU01VVEVYTUxUT1BTRVVET0VMKHhtbDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB4bWwgIT09IFwic3RyaW5nXCIpIHhtbCA9ICh4bWwgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTDtcbiAgICBsZXQgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwidGV4dC9odG1sXCIpO1xuICAgIGNvbnN0ICRlbCA9IGRvYy5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgeyB0YWdOYW1lLCBjaGlsZHJlbiwgaWQsIGNsYXNzTGlzdCwgaW5uZXJIVE1MIH0gPSAkZWwgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0ICRjaGlsZHJlbjogUHNldWRvTm9kZVtdID0gW107XG4gICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgKCRjaGlsZHJlbiBhcyB1bmtub3duKSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBUUkFOU01VVEVYTUxUT1BTRVVET0VMKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGFnTmFtZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNsYXNzOiBjbGFzc0xpc3QsXG4gICAgICB9LFxuICAgICAgJGNoaWxkcmVuLFxuICAgICAgaW5uZXJIVE1MLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBSRU5ERVJQU0VVRE9FTEVNRU5UKHsgdGFnTmFtZSwgYXR0cmlidXRlcywgaW5uZXJIVE1MIH06IFBzZXVkb05vZGUpIHtcbiAgICBjb25zdCBFTEVNRU5UID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICBFTEVNRU5ULnNldEF0dHJpYnV0ZShrLCB2IGFzIHN0cmluZyk7XG4gICAgfVxuXG4gICAgRUxFTUVOVC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cbiAgICByZXR1cm4gRUxFTUVOVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFJFTkRFUigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gVFJBTlNNVVRFWE1MVE9QU0VVRE9FTChDT0FMRVNDRVhET00oKSk7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBSRU5ERVJQU0VVRE9FTEVNRU5UKGVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gU1dBUE5PREUoXG4gICAgcHNldWRvTm9kZTogVGV4dCB8IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldE5vZGU6IENoaWxkTm9kZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGFyZ2V0Tm9kZT8ucmVwbGFjZVdpdGgocHNldWRvTm9kZSk7XG4gICAgcmV0dXJuIHBzZXVkb05vZGU7XG4gIH1cblxuICByZWR1eFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgU1dBUE5PREUoTEFVTkNIRE9NKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWFwiKT8uZmlyc3RDaGlsZCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZmlyZTogcmVkdXhTdG9yZS5kaXNwYXRjaCxcbiAgICBkYXRhOiByZWR1eFN0b3JlLmdldFN0YXRlLFxuICAgIGxhdW5jaDogTEFVTkNIRE9NLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQSEFOVE9NO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==