(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xml-format-xml-format-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/xml/xml-format/xml-format-home/xml-format-home.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xml/xml-format/xml-format-home/xml-format-home.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>xml-format-home works!</p>\n");

/***/ }),

/***/ "./src/app/xml/xml-format/xml-format-home/xml-format-home.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/xml/xml-format/xml-format-home/xml-format-home.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3htbC94bWwtZm9ybWF0L3htbC1mb3JtYXQtaG9tZS94bWwtZm9ybWF0LWhvbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/xml/xml-format/xml-format-home/xml-format-home.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/xml/xml-format/xml-format-home/xml-format-home.component.ts ***!
  \*****************************************************************************/
/*! exports provided: XmlFormatHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlFormatHomeComponent", function() { return XmlFormatHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let XmlFormatHomeComponent = class XmlFormatHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
XmlFormatHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xml-format-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xml-format-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/xml/xml-format/xml-format-home/xml-format-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xml-format-home.component.scss */ "./src/app/xml/xml-format/xml-format-home/xml-format-home.component.scss")).default]
    })
], XmlFormatHomeComponent);



/***/ }),

/***/ "./src/app/xml/xml-format/xml-format-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/xml/xml-format/xml-format-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: XmlFormatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlFormatRoutingModule", function() { return XmlFormatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xml_format_home_xml_format_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xml-format-home/xml-format-home.component */ "./src/app/xml/xml-format/xml-format-home/xml-format-home.component.ts");




const routes = [{
        path: '', component: _xml_format_home_xml_format_home_component__WEBPACK_IMPORTED_MODULE_3__["XmlFormatHomeComponent"]
    }];
let XmlFormatRoutingModule = class XmlFormatRoutingModule {
};
XmlFormatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XmlFormatRoutingModule);



/***/ }),

/***/ "./src/app/xml/xml-format/xml-format.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/xml/xml-format/xml-format.module.ts ***!
  \*****************************************************/
/*! exports provided: XmlFormatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlFormatModule", function() { return XmlFormatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _xml_format_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xml-format-routing.module */ "./src/app/xml/xml-format/xml-format-routing.module.ts");
/* harmony import */ var _xml_format_home_xml_format_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xml-format-home/xml-format-home.component */ "./src/app/xml/xml-format/xml-format-home/xml-format-home.component.ts");





let XmlFormatModule = class XmlFormatModule {
};
XmlFormatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xml_format_home_xml_format_home_component__WEBPACK_IMPORTED_MODULE_4__["XmlFormatHomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _xml_format_routing_module__WEBPACK_IMPORTED_MODULE_3__["XmlFormatRoutingModule"]
        ]
    })
], XmlFormatModule);



/***/ })

}]);
//# sourceMappingURL=xml-format-xml-format-module-es2015.js.map