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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_menu2.default.createMenu();
_menu2.default.drawActiveMenuItems();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var createMenu = function createMenu() {

    createDiv();
    var rootElement = createUl();
    createLinkInMarkedList(rootElement, 'Home');
    createLinkInMarkedList(rootElement, 'About');
    createLinkInMarkedList(rootElement, 'Contacts');
    createLinkInMarkedList(rootElement, 'Products');
    createLinkInMarkedList(rootElement, 'Partners');
};

var createDiv = function createDiv() {

    var wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    var parentElement = document.body;
    parentElement.appendChild(wrapper);
};

var createUl = function createUl() {

    var rootElement = document.createElement('ul');
    rootElement.className = 'menu';

    document.getElementById('wrapper').appendChild(rootElement);
    return rootElement;
};

/*
    This function creates marked down list in rootElement with reference to hrefText
*/

var createLinkInMarkedList = function createLinkInMarkedList(rootElement, hrefText) {

    var a = document.createElement('a');
    a.text = hrefText;
    a.setAttribute('href', '#' + hrefText.toLowerCase());

    var li = document.createElement('li');
    li.appendChild(a);

    rootElement.appendChild(li);
};

var drawActiveMenuItems = function drawActiveMenuItems() {

    var activeMenuItems = document.getElementsByTagName('a');
    for (var i = 0; i < activeMenuItems.length; i++) {

        var href = activeMenuItems[i].href;

        if (href.indexOf(location.hash) + 1) {
            activeMenuItems[i].style.color = 'red';
            return true;
        }
    }
    return false;
};

exports.default = {
    createMenu: createMenu,
    drawActiveMenuItems: drawActiveMenuItems
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDgyYzUxYThhNThmNWIwODg5YTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1lbnUiLCJkcmF3QWN0aXZlTWVudUl0ZW1zIiwiY3JlYXRlRGl2Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVbCIsImNyZWF0ZUxpbmtJbk1hcmtlZExpc3QiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJwYXJlbnRFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJocmVmVGV4dCIsImEiLCJ0ZXh0Iiwic2V0QXR0cmlidXRlIiwidG9Mb3dlckNhc2UiLCJsaSIsImFjdGl2ZU1lbnVJdGVtcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaSIsImxlbmd0aCIsImhyZWYiLCJpbmRleE9mIiwibG9jYXRpb24iLCJoYXNoIiwic3R5bGUiLCJjb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7QUFFQTs7Ozs7O0FBRUEsZUFBS0EsVUFBTDtBQUNBLGVBQUtDLG1CQUFMLEc7Ozs7Ozs7QUNMQTs7Ozs7QUFFQSxJQUFJRCxhQUFhLFNBQWJBLFVBQWEsR0FBTTs7QUFFbkJFO0FBQ0EsUUFBSUMsY0FBY0MsVUFBbEI7QUFDQUMsMkJBQXVCRixXQUF2QixFQUFvQyxNQUFwQztBQUNBRSwyQkFBdUJGLFdBQXZCLEVBQW9DLE9BQXBDO0FBQ0FFLDJCQUF1QkYsV0FBdkIsRUFBb0MsVUFBcEM7QUFDQUUsMkJBQXVCRixXQUF2QixFQUFvQyxVQUFwQztBQUNBRSwyQkFBdUJGLFdBQXZCLEVBQW9DLFVBQXBDO0FBQ0gsQ0FURDs7QUFXQSxJQUFJRCxZQUFZLFNBQVpBLFNBQVksR0FBTTs7QUFFbEIsUUFBSUksVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FGLFlBQVFHLEVBQVIsR0FBYSxTQUFiOztBQUVBLFFBQUlDLGdCQUFnQkgsU0FBU0ksSUFBN0I7QUFDQUQsa0JBQWNFLFdBQWQsQ0FBMEJOLE9BQTFCO0FBQ0gsQ0FQRDs7QUFTQSxJQUFJRixXQUFXLFNBQVhBLFFBQVcsR0FBTTs7QUFFakIsUUFBSUQsY0FBY0ksU0FBU0MsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBTCxnQkFBWVUsU0FBWixHQUF3QixNQUF4Qjs7QUFFQU4sYUFBU08sY0FBVCxDQUF3QixTQUF4QixFQUFtQ0YsV0FBbkMsQ0FBK0NULFdBQS9DO0FBQ0EsV0FBT0EsV0FBUDtBQUNILENBUEQ7O0FBU0E7Ozs7QUFJQSxJQUFJRSx5QkFBeUIsU0FBekJBLHNCQUF5QixDQUFDRixXQUFELEVBQWNZLFFBQWQsRUFBMkI7O0FBRW5ELFFBQUlDLElBQUlULFNBQVNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUjtBQUNBUSxNQUFFQyxJQUFGLEdBQVNGLFFBQVQ7QUFDQUMsTUFBRUUsWUFBRixDQUFlLE1BQWYsRUFBdUIsTUFBTUgsU0FBU0ksV0FBVCxFQUE3Qjs7QUFFQSxRQUFJQyxLQUFLYixTQUFTQyxhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQVksT0FBR1IsV0FBSCxDQUFlSSxDQUFmOztBQUVBYixnQkFBWVMsV0FBWixDQUF3QlEsRUFBeEI7QUFDSixDQVZEOztBQVlBLElBQUluQixzQkFBc0IsU0FBdEJBLG1CQUFzQixHQUFNOztBQUU1QixRQUFJb0Isa0JBQWtCZCxTQUFTZSxvQkFBVCxDQUE4QixHQUE5QixDQUF0QjtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixnQkFBZ0JHLE1BQXBDLEVBQTRDRCxHQUE1QyxFQUFpRDs7QUFFN0MsWUFBSUUsT0FBT0osZ0JBQWdCRSxDQUFoQixFQUFtQkUsSUFBOUI7O0FBRUEsWUFBSUEsS0FBS0MsT0FBTCxDQUFhQyxTQUFTQyxJQUF0QixJQUE0QixDQUFoQyxFQUFtQztBQUMvQlAsNEJBQWdCRSxDQUFoQixFQUFtQk0sS0FBbkIsQ0FBeUJDLEtBQXpCLEdBQWlDLEtBQWpDO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDRCxXQUFPLEtBQVA7QUFDSCxDQWJEOztrQkFlZTtBQUNYOUIsMEJBRFc7QUFFWEM7QUFGVyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA4MmM1MWE4YTU4ZjViMDg4OWEwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5tZW51LmNyZWF0ZU1lbnUoKTtcbm1lbnUuZHJhd0FjdGl2ZU1lbnVJdGVtcygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG5cbiAgICBjcmVhdGVEaXYoKTtcbiAgICBsZXQgcm9vdEVsZW1lbnQgPSBjcmVhdGVVbCgpO1xuICAgIGNyZWF0ZUxpbmtJbk1hcmtlZExpc3Qocm9vdEVsZW1lbnQsICdIb21lJyk7XG4gICAgY3JlYXRlTGlua0luTWFya2VkTGlzdChyb290RWxlbWVudCwgJ0Fib3V0Jyk7XG4gICAgY3JlYXRlTGlua0luTWFya2VkTGlzdChyb290RWxlbWVudCwgJ0NvbnRhY3RzJyk7XG4gICAgY3JlYXRlTGlua0luTWFya2VkTGlzdChyb290RWxlbWVudCwgJ1Byb2R1Y3RzJyk7XG4gICAgY3JlYXRlTGlua0luTWFya2VkTGlzdChyb290RWxlbWVudCwgJ1BhcnRuZXJzJyk7XG59O1xuXG5sZXQgY3JlYXRlRGl2ID0gKCkgPT4ge1xuXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmlkID0gJ3dyYXBwZXInO1xuXG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59O1xuXG5sZXQgY3JlYXRlVWwgPSAoKSA9PiB7XG5cbiAgICBsZXQgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHJvb3RFbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51JztcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJykuYXBwZW5kQ2hpbGQocm9vdEVsZW1lbnQpO1xuICAgIHJldHVybiByb290RWxlbWVudDtcbn07XG5cbi8qXG4gICAgVGhpcyBmdW5jdGlvbiBjcmVhdGVzIG1hcmtlZCBkb3duIGxpc3QgaW4gcm9vdEVsZW1lbnQgd2l0aCByZWZlcmVuY2UgdG8gaHJlZlRleHRcbiovXG5cbmxldCBjcmVhdGVMaW5rSW5NYXJrZWRMaXN0ID0gKHJvb3RFbGVtZW50LCBocmVmVGV4dCkgPT4ge1xuXG4gICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICBhLnRleHQgPSBocmVmVGV4dDtcbiAgICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBocmVmVGV4dC50b0xvd2VyQ2FzZSgpKTtcblxuICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyAgXG4gICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuXG4gICAgIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbmxldCBkcmF3QWN0aXZlTWVudUl0ZW1zID0gKCkgPT4ge1xuXG4gICAgbGV0IGFjdGl2ZU1lbnVJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVNZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBsZXQgaHJlZiA9IGFjdGl2ZU1lbnVJdGVtc1tpXS5ocmVmO1xuXG4gICAgICAgIGlmIChocmVmLmluZGV4T2YobG9jYXRpb24uaGFzaCkrMSkge1xuICAgICAgICAgICAgYWN0aXZlTWVudUl0ZW1zW2ldLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlTWVudSxcbiAgICBkcmF3QWN0aXZlTWVudUl0ZW1zXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==