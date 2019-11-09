(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["json-json-module"], {
        /***/ "./src/app/json/json-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/json/json-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: JsonRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonRoutingModule", function () { return JsonRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                {
                    path: 'format',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | json-format-json-format-module */ "json-format-json-format-module").then(__webpack_require__.bind(null, /*! ./json-format/json-format.module */ "./src/app/json/json-format/json-format.module.ts")).then(function (m) { return m.JsonFormatModule; }); }
                }
            ];
            var JsonRoutingModule = /** @class */ (function () {
                function JsonRoutingModule() {
                }
                return JsonRoutingModule;
            }());
            JsonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], JsonRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/json/json.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/json/json.module.ts ***!
          \*************************************/
        /*! exports provided: JsonModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonModule", function () { return JsonModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _json_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json-routing.module */ "./src/app/json/json-routing.module.ts");
            var JsonModule = /** @class */ (function () {
                function JsonModule() {
                }
                return JsonModule;
            }());
            JsonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _json_routing_module__WEBPACK_IMPORTED_MODULE_3__["JsonRoutingModule"]
                    ]
                })
            ], JsonModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=json-json-module-es2015.js.map
//# sourceMappingURL=json-json-module-es5.js.map
//# sourceMappingURL=json-json-module-es5.js.map