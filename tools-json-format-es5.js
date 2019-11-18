var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tools-json-format"], {
        /***/ "./src/app/tools/json-format/index.ts": 
        /*!********************************************!*\
          !*** ./src/app/tools/json-format/index.ts ***!
          \********************************************/
        /*! exports provided: JsonFormatComponent, JsonFormatModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormatComponent", function () { return JsonFormatComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormatModule", function () { return JsonFormatModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/transform-tool/transform-tool.component */ "./src/app/core/transform-tool/transform-tool.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _readme_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./readme.md */ "./src/app/tools/json-format/readme.md");
            var JsonFormatComponent = /** @class */ (function (_super) {
                __extends(JsonFormatComponent, _super);
                function JsonFormatComponent() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.id = 'json-format';
                    _this.action = 'Format';
                    _this.schema = {
                        type: 'object',
                        properties: {
                            input: { type: 'string', title: 'JSON', description: 'JSON to format' },
                            advanced: {
                                type: 'object',
                                properties: {
                                    whitespaceType: { type: 'string', enum: ['space', 'tab'], default: 'space', description: 'New line indent format' },
                                    size: { type: 'number', default: 3, description: 'Number of spaces to indent with' }
                                },
                                required: ['whitespaceType'],
                                "x-schema-form": {
                                    type: "section",
                                    expandable: true,
                                    expande: false,
                                    title: 'Advanced'
                                }
                            }
                        },
                        required: ['input']
                    };
                    _this.documentation = _readme_md__WEBPACK_IMPORTED_MODULE_5__["default"];
                    return _this;
                }
                JsonFormatComponent.prototype.onTransform = function (transform) {
                    var input = transform.input;
                    var options = transform.advanced;
                    var object = JSON.parse(input);
                    var format = options.whitespaceType == 'space' ? options.size : '\t';
                    return JSON.stringify(object, null, format);
                };
                return JsonFormatComponent;
            }(src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__["TransformToolComponent"]));
            var JsonFormatModule = /** @class */ (function () {
                function JsonFormatModule() {
                }
                return JsonFormatModule;
            }());
            JsonFormatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        JsonFormatComponent,
                    ],
                    imports: [
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                            { path: '', component: JsonFormatComponent }
                        ])
                    ]
                })
            ], JsonFormatModule);
            /***/ 
        }),
        /***/ "./src/app/tools/json-format/readme.md": 
        /*!*********************************************!*\
          !*** ./src/app/tools/json-format/readme.md ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("## What is JSON Formatting?\r\n\r\nJSON formatting is the process of applying styling rules or guidelines to a JSON document. This makes it easier to read the JSON.\r\n\r\n### Example\r\n\r\nThe following unformatted code:\r\n```javascript\r\n{\"hello\":\"world\"}\r\n```\r\n\r\nCan be formatted as:\r\n```javascript\r\n{\r\n    \"hello\": \"world\"\r\n}\r\n```\r\n\r\n### Indenting with Spaces versus Tabs\r\n\r\nThis is how newlines are indented. Typically this is 2 to 3 spaces or a single tab.  This is purely a personal choice, but is a good idea to be consistent with whatever indentation type is selected.  Note that many IDEs automatically convert tabs to a certain amount of spaces.\r\n\r\n2 spaces:\r\n```javascript\r\n{\r\n  \"first\": \"one\",\r\n  \"nested\": {\r\n    \"second\": \"one\"\r\n  }\r\n}\r\n```\r\n\r\n3 spaces:\r\n```javascript\r\n{\r\n   \"first\": \"one\",\r\n   \"nested\": {\r\n      \"second\": \"one\"\r\n   }\r\n}\r\n```\r\n\r\nand one tab:\r\n```javascript\r\n{\r\n    \"first\": \"one\",\r\n    \"nested\": {\r\n        \"second\": \"one\"\r\n    }\r\n}\r\n```\r\n\r\n### Nested Objects or Arrays\r\n\r\nJSON often describes complex structures with many nested levels.  The root object is often made up of other objects or arrays, and those children objects may also contain additional objects. To make these complex documents readable, nested objects are indented with more spaces or tabs based on the nesting level (level * newline indentation).  If 2 spaces are used for newlines, then the first level would have 2 spaces, the second would have 4, the thrid 6, and so on.\r\n\r\nThis looks like:\r\n```javascript\r\n{\r\n   \"first\": \"one\",\r\n   \"second\": \"one\",\r\n   \"nested\": {\r\n      \"third\": [\r\n         {\r\n            \"fourth\": \"one\"\r\n         },\r\n         {\r\n            \"fifth\": {\r\n               \"sixth\": \"one\"\r\n            }\r\n         }\r\n      ]\r\n   }\r\n}\r\n```\r\n\r\n## When is JSON Formatting Needed?\r\n\r\nJSON formatting is needed whenever JSON needs to be easily read by a real person.\r\n\r\nWhen JSON is generated by developer tools, it often does not follow any style guides.  This unformatted JSON is still easily read by tools, but hurts readability for humans.\r\n\r\nAdditionally when trasnmitting JSON over the internet, it is often minified or has whitespace characters removed.  This can result in faster load timess of websites, but once against hurts the ease of reading for human.");
            /***/ 
        })
    }]);
//# sourceMappingURL=tools-json-format-es2015.js.map
//# sourceMappingURL=tools-json-format-es5.js.map
//# sourceMappingURL=tools-json-format-es5.js.map