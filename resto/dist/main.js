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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: home, contact, menuCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuCard\", function() { return menuCard; });\nconst cardFactory = (judul, harga, desk, gambar) => {\r\n    \"use strict\"\r\n    const getJudul = () => judul;\r\n    const getHarga = () => harga;\r\n    const getDesk = () => desk;\r\n    const getGambar = () => gambar;\r\n\r\n    return {getDesk, getGambar, getJudul, getHarga};\r\n}\r\n\r\nconst content = (() =>{\r\n    \"use strict\"\r\n    const simpleContent = (isi = \"\", gambar = \"\") =>{\r\n        const img = document.createElement(\"img\");\r\n        const p = document.createElement(\"p\");\r\n        p.textContent = isi;\r\n        img.setAttribute(\"src\", gambar);\r\n        return (gambar === \"\") ? [p] : [img, p];\r\n    }\r\n\r\n    const createCard = cardObject =>{\r\n        const div = document.createElement(\"div\");\r\n        div.setAttribute(\"id\", \"card-board\");\r\n        cardObject.forEach(obj => {\r\n            const card = document.createElement(\"div\");\r\n            const img = document.createElement(\"img\");\r\n            const judul = document.createElement(\"p\");\r\n            const harga = document.createElement(\"p\");\r\n            const desk = document.createElement(\"p\");\r\n            card.className = \"card\";\r\n            judul.className =\"judul\";\r\n            harga.className = \"harga\";\r\n            desk.className= \"desk\";\r\n            img.setAttribute(\"src\", obj.getGambar());\r\n            judul.textContent = obj.getJudul();\r\n            harga.textContent = obj.getHarga();\r\n            desk.textContent = obj.getDesk();\r\n            card.append(img, judul, harga, desk);\r\n            div.appendChild(card);\r\n        });\r\n        return [div];\r\n    }\r\n\r\n    return {simpleContent, createCard};\r\n\r\n})();\r\n\r\nconst home = content.simpleContent(\r\n        \"Heaven Cake adalah toko kue yang sangat terkenal di Bali. Toko kue ini berdiri sejak tahun 2010 dan \" +\r\n        \"pernah mendapatkan penghargaan toko terbaik tahun 2012. Heaven cake akan membuat kue sesuai pesanan \" +\r\n        \"dan rasanya akan membuat anda melayang pergi ke angkasa\",\r\n        \"cake-logo.png\"\r\n);\r\n\r\nconst contact = content.simpleContent(\r\n        \"Hubungi kami di nomer : 0811234546 \\nAnda dapat datang ke toko kami di Jl.Toko kue\"\r\n);\r\n\r\nconst menuCard = content.createCard(\r\n        [\r\n            cardFactory(\"Black Chocolatos\", 20000, \"Coklat nikmat\", \"cake-thumb.jpg\"),\r\n            cardFactory(\"Another Black\", 30000, \"Coklat nikmat\", \"cake-thumb.jpg\"),\r\n            cardFactory(\"Another Big Black\", 40000, \"Coklat nikmat\", \"cake-thumb.jpg\"),\r\n            cardFactory(\"Whatever\", 50000, \"Coklat nikmat\", \"cake-thumb.jpg\"),\r\n        ]\r\n);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZW50LmpzPzdmMGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FyZEZhY3RvcnkgPSAoanVkdWwsIGhhcmdhLCBkZXNrLCBnYW1iYXIpID0+IHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICBjb25zdCBnZXRKdWR1bCA9ICgpID0+IGp1ZHVsO1xyXG4gICAgY29uc3QgZ2V0SGFyZ2EgPSAoKSA9PiBoYXJnYTtcclxuICAgIGNvbnN0IGdldERlc2sgPSAoKSA9PiBkZXNrO1xyXG4gICAgY29uc3QgZ2V0R2FtYmFyID0gKCkgPT4gZ2FtYmFyO1xyXG5cclxuICAgIHJldHVybiB7Z2V0RGVzaywgZ2V0R2FtYmFyLCBnZXRKdWR1bCwgZ2V0SGFyZ2F9O1xyXG59XHJcblxyXG5jb25zdCBjb250ZW50ID0gKCgpID0+e1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgIGNvbnN0IHNpbXBsZUNvbnRlbnQgPSAoaXNpID0gXCJcIiwgZ2FtYmFyID0gXCJcIikgPT57XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGlzaTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGdhbWJhcik7XHJcbiAgICAgICAgcmV0dXJuIChnYW1iYXIgPT09IFwiXCIpID8gW3BdIDogW2ltZywgcF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQ2FyZCA9IGNhcmRPYmplY3QgPT57XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYXJkLWJvYXJkXCIpO1xyXG4gICAgICAgIGNhcmRPYmplY3QuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgY29uc3QganVkdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaGFyZ2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgY29uc3QgZGVzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xyXG4gICAgICAgICAgICBqdWR1bC5jbGFzc05hbWUgPVwianVkdWxcIjtcclxuICAgICAgICAgICAgaGFyZ2EuY2xhc3NOYW1lID0gXCJoYXJnYVwiO1xyXG4gICAgICAgICAgICBkZXNrLmNsYXNzTmFtZT0gXCJkZXNrXCI7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgb2JqLmdldEdhbWJhcigpKTtcclxuICAgICAgICAgICAganVkdWwudGV4dENvbnRlbnQgPSBvYmouZ2V0SnVkdWwoKTtcclxuICAgICAgICAgICAgaGFyZ2EudGV4dENvbnRlbnQgPSBvYmouZ2V0SGFyZ2EoKTtcclxuICAgICAgICAgICAgZGVzay50ZXh0Q29udGVudCA9IG9iai5nZXREZXNrKCk7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kKGltZywganVkdWwsIGhhcmdhLCBkZXNrKTtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBbZGl2XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3NpbXBsZUNvbnRlbnQsIGNyZWF0ZUNhcmR9O1xyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IGhvbWUgPSBjb250ZW50LnNpbXBsZUNvbnRlbnQoXHJcbiAgICAgICAgXCJIZWF2ZW4gQ2FrZSBhZGFsYWggdG9rbyBrdWUgeWFuZyBzYW5nYXQgdGVya2VuYWwgZGkgQmFsaS4gVG9rbyBrdWUgaW5pIGJlcmRpcmkgc2VqYWsgdGFodW4gMjAxMCBkYW4gXCIgK1xyXG4gICAgICAgIFwicGVybmFoIG1lbmRhcGF0a2FuIHBlbmdoYXJnYWFuIHRva28gdGVyYmFpayB0YWh1biAyMDEyLiBIZWF2ZW4gY2FrZSBha2FuIG1lbWJ1YXQga3VlIHNlc3VhaSBwZXNhbmFuIFwiICtcclxuICAgICAgICBcImRhbiByYXNhbnlhIGFrYW4gbWVtYnVhdCBhbmRhIG1lbGF5YW5nIHBlcmdpIGtlIGFuZ2thc2FcIixcclxuICAgICAgICBcImNha2UtbG9nby5wbmdcIlxyXG4pO1xyXG5cclxuY29uc3QgY29udGFjdCA9IGNvbnRlbnQuc2ltcGxlQ29udGVudChcclxuICAgICAgICBcIkh1YnVuZ2kga2FtaSBkaSBub21lciA6IDA4MTEyMzQ1NDYgXFxuQW5kYSBkYXBhdCBkYXRhbmcga2UgdG9rbyBrYW1pIGRpIEpsLlRva28ga3VlXCJcclxuKTtcclxuXHJcbmNvbnN0IG1lbnVDYXJkID0gY29udGVudC5jcmVhdGVDYXJkKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgY2FyZEZhY3RvcnkoXCJCbGFjayBDaG9jb2xhdG9zXCIsIDIwMDAwLCBcIkNva2xhdCBuaWttYXRcIiwgXCJjYWtlLXRodW1iLmpwZ1wiKSxcclxuICAgICAgICAgICAgY2FyZEZhY3RvcnkoXCJBbm90aGVyIEJsYWNrXCIsIDMwMDAwLCBcIkNva2xhdCBuaWttYXRcIiwgXCJjYWtlLXRodW1iLmpwZ1wiKSxcclxuICAgICAgICAgICAgY2FyZEZhY3RvcnkoXCJBbm90aGVyIEJpZyBCbGFja1wiLCA0MDAwMCwgXCJDb2tsYXQgbmlrbWF0XCIsIFwiY2FrZS10aHVtYi5qcGdcIiksXHJcbiAgICAgICAgICAgIGNhcmRGYWN0b3J5KFwiV2hhdGV2ZXJcIiwgNTAwMDAsIFwiQ29rbGF0IG5pa21hdFwiLCBcImNha2UtdGh1bWIuanBnXCIpLFxyXG4gICAgICAgIF1cclxuKTtcclxuXHJcbmV4cG9ydCB7aG9tZSwgY29udGFjdCwgbWVudUNhcmR9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/content.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\r\n\r\nconst main = document.getElementById(\"content\");\r\n\r\n_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createMainLayout(main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdCBmcm9tIFwiLi9pbml0XCI7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuaW5pdC5jcmVhdGVNYWluTGF5b3V0KG1haW4pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\r\n\r\nconst init = (() =>{\r\n    \"use strict\"\r\n    ////// VARIABLE ///////\r\n    const HEADER = \"header\";\r\n    const NAV = \"nav\";\r\n    const ISI = \"isi\";\r\n    let headerLayout = null;\r\n    let navLayout = null;\r\n    let isiLayout = null;\r\n\r\n    ////// PRIVATE METHOD //////\r\n    const _createHeader = (judul, deskripsi) => {\r\n        const header = document.createElement(\"div\");\r\n        header.setAttribute(\"id\", HEADER);\r\n        const judulLayout = document.createElement(\"h1\");\r\n        const deskripsiLayout = document.createElement(\"p\");\r\n        judulLayout.textContent = judul;\r\n        deskripsiLayout.textContent = deskripsi;\r\n        header.append(judulLayout, deskripsiLayout);\r\n        return header;\r\n    };\r\n\r\n    const _createNav = (listNav, content) =>{\r\n        if(listNav.length !== content.length) throw \"jumlah nav harus sama dengan content\";\r\n        const ul = document.createElement(\"ul\");\r\n        ul.setAttribute(\"id\", NAV);\r\n        listNav.forEach((element, index) => {\r\n            const li = document.createElement(\"li\");\r\n            li.textContent = element;\r\n            li.addEventListener(\"click\", e =>{\r\n                _resetElement(isiLayout);\r\n                _setIsi(content[index]);\r\n                _gantiNav(index);\r\n            });\r\n            ul.appendChild(li);\r\n        });\r\n        _setIsi(content[0]);\r\n        _gantiNav(0);\r\n        return ul;\r\n    }\r\n\r\n    const _createIsi = () =>{\r\n        const div = document.createElement(\"div\");\r\n        div.setAttribute(\"id\", ISI);\r\n        return div;\r\n    }\r\n\r\n    const _resetElement = element =>{\r\n        while (element.firstChild) {\r\n            element.removeChild(element.firstChild);\r\n        }\r\n    };\r\n\r\n    const _setIsi = isi =>{\r\n        if(isiLayout !== null){\r\n            isi.forEach(e =>{\r\n                isiLayout.append(e);\r\n            });\r\n        }\r\n    }\r\n\r\n    const _gantiNav = pos =>{\r\n        let child = document.querySelectorAll(\"ul#nav li\");\r\n        child.forEach((element, index) => {\r\n            if(index === pos){\r\n                element.classList.add(\"selected\");\r\n            }else{\r\n                if(element.classList.contains(\"selected\")){\r\n                    element.classList.remove(\"selected\");\r\n                }\r\n            }\r\n        });\r\n    }\r\n    \r\n    ////// PUBLIC METHOD //////\r\n    const createMainLayout = div =>{\r\n        if(div.tagName !== \"DIV\") throw \"Element harus Div\";\r\n        headerLayout = _createHeader(\"HEAVEN CAKE\", \"Ini adalah deskripsi\");\r\n        isiLayout = _createIsi();\r\n        navLayout = _createNav([\"HOME\", \"MENU\", \"CONTRACT\"], [_content__WEBPACK_IMPORTED_MODULE_0__[\"home\"], _content__WEBPACK_IMPORTED_MODULE_0__[\"menuCard\"], _content__WEBPACK_IMPORTED_MODULE_0__[\"contact\"]]);\r\n        div.append(headerLayout, navLayout, isiLayout);\r\n    };\r\n\r\n    const test = () => \"init.js berhasil di load\";\r\n\r\n    return {createMainLayout, test};\r\n    \r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5pdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbml0LmpzP2Q5OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtob21lLCBjb250YWN0LCBtZW51Q2FyZH0gZnJvbSBcIi4vY29udGVudFwiO1xyXG5cclxuY29uc3QgaW5pdCA9ICgoKSA9PntcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAvLy8vLy8gVkFSSUFCTEUgLy8vLy8vL1xyXG4gICAgY29uc3QgSEVBREVSID0gXCJoZWFkZXJcIjtcclxuICAgIGNvbnN0IE5BViA9IFwibmF2XCI7XHJcbiAgICBjb25zdCBJU0kgPSBcImlzaVwiO1xyXG4gICAgbGV0IGhlYWRlckxheW91dCA9IG51bGw7XHJcbiAgICBsZXQgbmF2TGF5b3V0ID0gbnVsbDtcclxuICAgIGxldCBpc2lMYXlvdXQgPSBudWxsO1xyXG5cclxuICAgIC8vLy8vLyBQUklWQVRFIE1FVEhPRCAvLy8vLy9cclxuICAgIGNvbnN0IF9jcmVhdGVIZWFkZXIgPSAoanVkdWwsIGRlc2tyaXBzaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIEhFQURFUik7XHJcbiAgICAgICAgY29uc3QganVkdWxMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgY29uc3QgZGVza3JpcHNpTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAganVkdWxMYXlvdXQudGV4dENvbnRlbnQgPSBqdWR1bDtcclxuICAgICAgICBkZXNrcmlwc2lMYXlvdXQudGV4dENvbnRlbnQgPSBkZXNrcmlwc2k7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZChqdWR1bExheW91dCwgZGVza3JpcHNpTGF5b3V0KTtcclxuICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlTmF2ID0gKGxpc3ROYXYsIGNvbnRlbnQpID0+e1xyXG4gICAgICAgIGlmKGxpc3ROYXYubGVuZ3RoICE9PSBjb250ZW50Lmxlbmd0aCkgdGhyb3cgXCJqdW1sYWggbmF2IGhhcnVzIHNhbWEgZGVuZ2FuIGNvbnRlbnRcIjtcclxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICB1bC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBOQVYpO1xyXG4gICAgICAgIGxpc3ROYXYuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XHJcbiAgICAgICAgICAgICAgICBfcmVzZXRFbGVtZW50KGlzaUxheW91dCk7XHJcbiAgICAgICAgICAgICAgICBfc2V0SXNpKGNvbnRlbnRbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIF9nYW50aU5hdihpbmRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX3NldElzaShjb250ZW50WzBdKTtcclxuICAgICAgICBfZ2FudGlOYXYoMCk7XHJcbiAgICAgICAgcmV0dXJuIHVsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVJc2kgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBJU0kpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3Jlc2V0RWxlbWVudCA9IGVsZW1lbnQgPT57XHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfc2V0SXNpID0gaXNpID0+e1xyXG4gICAgICAgIGlmKGlzaUxheW91dCAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlzaS5mb3JFYWNoKGUgPT57XHJcbiAgICAgICAgICAgICAgICBpc2lMYXlvdXQuYXBwZW5kKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2dhbnRpTmF2ID0gcG9zID0+e1xyXG4gICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bCNuYXYgbGlcIik7XHJcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IHBvcyl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8vLy8gUFVCTElDIE1FVEhPRCAvLy8vLy9cclxuICAgIGNvbnN0IGNyZWF0ZU1haW5MYXlvdXQgPSBkaXYgPT57XHJcbiAgICAgICAgaWYoZGl2LnRhZ05hbWUgIT09IFwiRElWXCIpIHRocm93IFwiRWxlbWVudCBoYXJ1cyBEaXZcIjtcclxuICAgICAgICBoZWFkZXJMYXlvdXQgPSBfY3JlYXRlSGVhZGVyKFwiSEVBVkVOIENBS0VcIiwgXCJJbmkgYWRhbGFoIGRlc2tyaXBzaVwiKTtcclxuICAgICAgICBpc2lMYXlvdXQgPSBfY3JlYXRlSXNpKCk7XHJcbiAgICAgICAgbmF2TGF5b3V0ID0gX2NyZWF0ZU5hdihbXCJIT01FXCIsIFwiTUVOVVwiLCBcIkNPTlRSQUNUXCJdLCBbaG9tZSwgbWVudUNhcmQsIGNvbnRhY3RdKTtcclxuICAgICAgICBkaXYuYXBwZW5kKGhlYWRlckxheW91dCwgbmF2TGF5b3V0LCBpc2lMYXlvdXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0ZXN0ID0gKCkgPT4gXCJpbml0LmpzIGJlcmhhc2lsIGRpIGxvYWRcIjtcclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZU1haW5MYXlvdXQsIHRlc3R9O1xyXG4gICAgXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/init.js\n");

/***/ })

/******/ });