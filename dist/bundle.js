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
    var ul = createUl();
    createHomeLink(ul);
    createAboutLink(ul);
    createContactsLink(ul);
    createProductsLink(ul);
    createPartnersLink(ul);
};

var createDiv = function createDiv() {

    var wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    var parentElement = document.body;
    parentElement.appendChild(wrapper);
};

var createUl = function createUl() {

    var ul = document.createElement('ul');
    ul.className = 'menu';
    document.getElementById('wrapper').appendChild(ul);
    return ul;
};

var createHomeLink = function createHomeLink(ul) {

    var a = document.createElement('a');
    a.text = 'Home';
    a.setAttribute('href', '#home');
    var li = document.createElement('li');
    li.appendChild(a);
    ul.appendChild(li);
};

var createAboutLink = function createAboutLink(ul) {

    var a = document.createElement('a');
    a.text = 'About';
    a.setAttribute('href', '#about');
    var li = document.createElement('li');
    li.appendChild(a);
    ul.appendChild(li);
};

var createContactsLink = function createContactsLink(ul) {

    var a = document.createElement('a');
    a.text = 'Contacts';
    a.setAttribute('href', '#contacts');
    var li = document.createElement('li');
    li.appendChild(a);
    ul.appendChild(li);
};

var createProductsLink = function createProductsLink(ul) {

    var a = document.createElement('a');
    a.text = 'Products';
    a.setAttribute('href', '#products');
    var li = document.createElement('li');
    li.appendChild(a);
    ul.appendChild(li);
};

var createPartnersLink = function createPartnersLink(ul) {

    var a = document.createElement('a');
    a.text = 'Partners';
    a.setAttribute('href', '#partners');
    var li = document.createElement('li');
    li.appendChild(a);
    ul.appendChild(li);
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
    createDiv: createDiv,
    createUl: createUl,
    createHomeLink: createHomeLink,
    createAboutLink: createAboutLink,
    createContactsLink: createContactsLink,
    createProductsLink: createProductsLink,
    createPartnersLink: createPartnersLink,
    drawActiveMenuItems: drawActiveMenuItems
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M3ZjIzM2ViYTljOWY5NTkwMTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1lbnUiLCJkcmF3QWN0aXZlTWVudUl0ZW1zIiwiY3JlYXRlRGl2IiwidWwiLCJjcmVhdGVVbCIsImNyZWF0ZUhvbWVMaW5rIiwiY3JlYXRlQWJvdXRMaW5rIiwiY3JlYXRlQ29udGFjdHNMaW5rIiwiY3JlYXRlUHJvZHVjdHNMaW5rIiwiY3JlYXRlUGFydG5lcnNMaW5rIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwicGFyZW50RWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImdldEVsZW1lbnRCeUlkIiwiYSIsInRleHQiLCJzZXRBdHRyaWJ1dGUiLCJsaSIsImFjdGl2ZU1lbnVJdGVtcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaSIsImxlbmd0aCIsImhyZWYiLCJpbmRleE9mIiwibG9jYXRpb24iLCJoYXNoIiwic3R5bGUiLCJjb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7QUFFQTs7Ozs7O0FBRUEs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VUFBVDtBQUNBRCxNQUFFRSxZQUFGLENBQWUsTUFBZixFQUF1QixXQUF2QjtBQUNBLFFBQUlDLEtBQUtYLFNBQVNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtBQUNBVSxPQUFHTixXQUFILENBQWVHLENBQWY7QUFDQWhCLE9BQUdhLFdBQUgsQ0FBZU0sRUFBZjtBQUNILENBUkQ7O0FBVUEsSUFBSXJCLHNCQUFzQixTQUF0QkEsbUJBQXNCLEdBQU07O0FBRTVCLFFBQUlzQixrQkFBa0JaLFNBQVNhLG9CQUFULENBQThCLEdBQTlCLENBQXRCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGdCQUFnQkcsTUFBcEMsRUFBNENELEdBQTVDLEVBQWlEO0FBQzdDLFlBQUlFLE9BQU9KLGdCQUFnQkUsQ0FBaEIsRUFBbUJFLElBQTlCO0FBQ0EsWUFBSUEsS0FBS0MsT0FBTCxDQUFhQyxTQUFTQyxJQUF0QixJQUE0QixDQUFoQyxFQUFtQztBQUMvQlAsNEJBQWdCRSxDQUFoQixFQUFtQk0sS0FBbkIsQ0FBeUJDLEtBQXpCLEdBQWlDLEtBQWpDO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDRCxXQUFPLEtBQVA7QUFDSCxDQVhEOztrQkFhZTtBQUNYaEMsMEJBRFc7QUFFWEUsd0JBRlc7QUFHWEUsc0JBSFc7QUFJWEMsa0NBSlc7QUFLWEMsb0NBTFc7QUFNWEMsMENBTlc7QUFPWEMsMENBUFc7QUFRWEMsMENBUlc7QUFTWFI7QUFUVyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdjN2YyMzNlYmE5YzlmOTU5MDE1IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5tZW51LmNyZWF0ZU1lbnUoKTtcbm1lbnUuZHJhd0FjdGl2ZU1lbnVJdGVtcygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG5cbiAgICBjcmVhdGVEaXYoKTtcbiAgICBsZXQgdWwgPSBjcmVhdGVVbCgpO1xuICAgIGNyZWF0ZUhvbWVMaW5rKHVsKTtcbiAgICBjcmVhdGVBYm91dExpbmsodWwpO1xuICAgIGNyZWF0ZUNvbnRhY3RzTGluayh1bCk7XG4gICAgY3JlYXRlUHJvZHVjdHNMaW5rKHVsKTtcbiAgICBjcmVhdGVQYXJ0bmVyc0xpbmsodWwpO1xufTtcblxubGV0IGNyZWF0ZURpdiA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuaWQgPSAnd3JhcHBlcic7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59O1xuXG5sZXQgY3JlYXRlVWwgPSAoKSA9PiB7XG5cbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmNsYXNzTmFtZSA9ICdtZW51JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpLmFwcGVuZENoaWxkKHVsKTtcbiAgICByZXR1cm4gdWw7XG59O1xuXG5sZXQgY3JlYXRlSG9tZUxpbmsgPSAodWwpID0+IHtcblxuICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEudGV4dCA9ICdIb21lJztcbiAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjaG9tZScpO1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7ICBcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5sZXQgY3JlYXRlQWJvdXRMaW5rID0gKHVsKSA9PiB7XG5cbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLnRleHQgPSAnQWJvdXQnO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyNhYm91dCcpO1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7ICBcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5sZXQgY3JlYXRlQ29udGFjdHNMaW5rID0gKHVsKSA9PiB7XG5cbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLnRleHQgPSAnQ29udGFjdHMnO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyNjb250YWN0cycpO1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7ICBcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5sZXQgY3JlYXRlUHJvZHVjdHNMaW5rID0gKHVsKSA9PiB7XG5cbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLnRleHQgPSAnUHJvZHVjdHMnO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyNwcm9kdWN0cycpO1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7ICBcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5sZXQgY3JlYXRlUGFydG5lcnNMaW5rID0gKHVsKSA9PiB7XG5cbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLnRleHQgPSAnUGFydG5lcnMnO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyNwYXJ0bmVycycpO1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7ICBcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5sZXQgZHJhd0FjdGl2ZU1lbnVJdGVtcyA9ICgpID0+IHtcblxuICAgIGxldCBhY3RpdmVNZW51SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlTWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBocmVmID0gYWN0aXZlTWVudUl0ZW1zW2ldLmhyZWY7XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YobG9jYXRpb24uaGFzaCkrMSkge1xuICAgICAgICAgICAgYWN0aXZlTWVudUl0ZW1zW2ldLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlTWVudSxcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlVWwsXG4gICAgY3JlYXRlSG9tZUxpbmssXG4gICAgY3JlYXRlQWJvdXRMaW5rLFxuICAgIGNyZWF0ZUNvbnRhY3RzTGluayxcbiAgICBjcmVhdGVQcm9kdWN0c0xpbmssXG4gICAgY3JlYXRlUGFydG5lcnNMaW5rLFxuICAgIGRyYXdBY3RpdmVNZW51SXRlbXNcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9