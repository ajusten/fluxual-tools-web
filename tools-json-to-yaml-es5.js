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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tools-json-to-yaml"], {
        /***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr))
                    return arr;
            }
            module.exports = _arrayWithHoles;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js": 
        /*!**********************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
          \**********************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }
            module.exports = _assertThisInitialized;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            module.exports = _classCallCheck;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/construct.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
            function isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct)
                    return false;
                if (Reflect.construct.sham)
                    return false;
                if (typeof Proxy === "function")
                    return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
                    return true;
                }
                catch (e) {
                    return false;
                }
            }
            function _construct(Parent, args, Class) {
                if (isNativeReflectConstruct()) {
                    module.exports = _construct = Reflect.construct;
                }
                else {
                    module.exports = _construct = function _construct(Parent, args, Class) {
                        var a = [null];
                        a.push.apply(a, args);
                        var Constructor = Function.bind.apply(Parent, a);
                        var instance = new Constructor();
                        if (Class)
                            setPrototypeOf(instance, Class.prototype);
                        return instance;
                    };
                }
                return _construct.apply(null, arguments);
            }
            module.exports = _construct;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/createClass.js": 
        /*!************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
          \************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            module.exports = _createClass;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/defineProperty.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                }
                else {
                    obj[key] = value;
                }
                return obj;
            }
            module.exports = _defineProperty;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/get.js": 
        /*!****************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/get.js ***!
          \****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");
            function _get(target, property, receiver) {
                if (typeof Reflect !== "undefined" && Reflect.get) {
                    module.exports = _get = Reflect.get;
                }
                else {
                    module.exports = _get = function _get(target, property, receiver) {
                        var base = superPropBase(target, property);
                        if (!base)
                            return;
                        var desc = Object.getOwnPropertyDescriptor(base, property);
                        if (desc.get) {
                            return desc.get.call(receiver);
                        }
                        return desc.value;
                    };
                }
                return _get(target, property, receiver || target);
            }
            module.exports = _get;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _getPrototypeOf(o) {
                module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            module.exports = _getPrototypeOf;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/inherits.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass)
                    setPrototypeOf(subClass, superClass);
            }
            module.exports = _inherits;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js": 
        /*!**********************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
          \**********************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            module.exports = _interopRequireDefault;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js": 
        /*!***********************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
          \***********************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
            function _getRequireWildcardCache() {
                if (typeof WeakMap !== "function")
                    return null;
                var cache = new WeakMap();
                _getRequireWildcardCache = function _getRequireWildcardCache() {
                    return cache;
                };
                return cache;
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                }
                if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                    return {
                        "default": obj
                    };
                }
                var cache = _getRequireWildcardCache();
                if (cache && cache.has(obj)) {
                    return cache.get(obj);
                }
                var newObj = {};
                var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) {
                            Object.defineProperty(newObj, key, desc);
                        }
                        else {
                            newObj[key] = obj[key];
                        }
                    }
                }
                newObj["default"] = obj;
                if (cache) {
                    cache.set(obj, newObj);
                }
                return newObj;
            }
            module.exports = _interopRequireWildcard;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js": 
        /*!*****************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
          \*****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _isNativeFunction(fn) {
                return Function.toString.call(fn).indexOf("[native code]") !== -1;
            }
            module.exports = _isNativeFunction;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _iterableToArray(iter) {
                if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
                    return Array.from(iter);
            }
            module.exports = _iterableToArray;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
          \*********************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _iterableToArrayLimit(arr, i) {
                if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
                    return;
                }
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break;
                    }
                }
                catch (err) {
                    _d = true;
                    _e = err;
                }
                finally {
                    try {
                        if (!_n && _i["return"] != null)
                            _i["return"]();
                    }
                    finally {
                        if (_d)
                            throw _e;
                    }
                }
                return _arr;
            }
            module.exports = _iterableToArrayLimit;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            module.exports = _nonIterableRest;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js": 
        /*!**************************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
          \**************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
            var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                }
                return assertThisInitialized(self);
            }
            module.exports = _possibleConstructorReturn;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _setPrototypeOf(o, p) {
                module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            module.exports = _setPrototypeOf;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
            var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
            var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
            function _slicedToArray(arr, i) {
                return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
            }
            module.exports = _slicedToArray;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/superPropBase.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
            function _superPropBase(object, property) {
                while (!Object.prototype.hasOwnProperty.call(object, property)) {
                    object = getPrototypeOf(object);
                    if (object === null)
                        break;
                }
                return object;
            }
            module.exports = _superPropBase;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/toArray.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
            var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
            var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
            function _toArray(arr) {
                return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
            }
            module.exports = _toArray;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/typeof.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof2 = function _typeof2(obj) { return typeof obj; };
            }
            else {
                _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
            } return _typeof2(obj); }
            function _typeof(obj) {
                if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
                    module.exports = _typeof = function _typeof(obj) {
                        return _typeof2(obj);
                    };
                }
                else {
                    module.exports = _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
                    };
                }
                return _typeof(obj);
            }
            module.exports = _typeof;
            /***/ 
        }),
        /***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
            var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
            var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");
            var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");
            function _wrapNativeSuper(Class) {
                var _cache = typeof Map === "function" ? new Map() : undefined;
                module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
                    if (Class === null || !isNativeFunction(Class))
                        return Class;
                    if (typeof Class !== "function") {
                        throw new TypeError("Super expression must either be null or a function");
                    }
                    if (typeof _cache !== "undefined") {
                        if (_cache.has(Class))
                            return _cache.get(Class);
                        _cache.set(Class, Wrapper);
                    }
                    function Wrapper() {
                        return construct(Class, arguments, getPrototypeOf(this).constructor);
                    }
                    Wrapper.prototype = Object.create(Class.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    return setPrototypeOf(Wrapper, Class);
                };
                return _wrapNativeSuper(Class);
            }
            module.exports = _wrapNativeSuper;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/Anchors.js": 
        /*!***************************************************!*\
          !*** ./node_modules/yaml/browser/dist/Anchors.js ***!
          \***************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _Alias = _interopRequireDefault(__webpack_require__(/*! ./schema/Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));
            var _Map = _interopRequireDefault(__webpack_require__(/*! ./schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));
            var _Merge = _interopRequireDefault(__webpack_require__(/*! ./schema/Merge */ "./node_modules/yaml/browser/dist/schema/Merge.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var _Seq = _interopRequireDefault(__webpack_require__(/*! ./schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));
            var Anchors = 
            /*#__PURE__*/
            function () {
                (0, _createClass2.default)(Anchors, null, [{
                        key: "validAnchorNode",
                        value: function validAnchorNode(node) {
                            return node instanceof _Scalar.default || node instanceof _Seq.default || node instanceof _Map.default;
                        }
                    }]);
                function Anchors(prefix) {
                    (0, _classCallCheck2.default)(this, Anchors);
                    (0, _defineProperty2.default)(this, "map", {});
                    this.prefix = prefix;
                }
                (0, _createClass2.default)(Anchors, [{
                        key: "createAlias",
                        value: function createAlias(node, name) {
                            this.setAnchor(node, name);
                            return new _Alias.default(node);
                        }
                    }, {
                        key: "createMergePair",
                        value: function createMergePair() {
                            var _this = this;
                            var merge = new _Merge.default();
                            for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
                                sources[_key] = arguments[_key];
                            }
                            merge.value.items = sources.map(function (s) {
                                if (s instanceof _Alias.default) {
                                    if (s.source instanceof _Map.default)
                                        return s;
                                }
                                else if (s instanceof _Map.default) {
                                    return _this.createAlias(s);
                                }
                                throw new Error('Merge sources must be Map nodes or their Aliases');
                            });
                            return merge;
                        }
                    }, {
                        key: "getName",
                        value: function getName(node) {
                            var map = this.map;
                            return Object.keys(map).find(function (a) {
                                return map[a] === node;
                            });
                        }
                    }, {
                        key: "getNode",
                        value: function getNode(name) {
                            return this.map[name];
                        }
                    }, {
                        key: "newName",
                        value: function newName(prefix) {
                            if (!prefix)
                                prefix = this.prefix;
                            var names = Object.keys(this.map);
                            for (var i = 1; true; ++i) {
                                var name = "".concat(prefix).concat(i);
                                if (!names.includes(name))
                                    return name;
                            }
                        } // During parsing, map & aliases contain CST nodes
                    }, {
                        key: "resolveNodes",
                        value: function resolveNodes() {
                            var map = this.map, _cstAliases = this._cstAliases;
                            Object.keys(map).forEach(function (a) {
                                map[a] = map[a].resolved;
                            });
                            _cstAliases.forEach(function (a) {
                                a.source = a.source.resolved;
                            });
                            delete this._cstAliases;
                        }
                    }, {
                        key: "setAnchor",
                        value: function setAnchor(node, name) {
                            if (node != null && !Anchors.validAnchorNode(node)) {
                                throw new Error('Anchors may only be set for Scalar, Seq and Map nodes');
                            }
                            if (name && /[\x00-\x19\s,[\]{}]/.test(name)) {
                                throw new Error('Anchor names must not contain whitespace or control characters');
                            }
                            var map = this.map;
                            var prev = node && Object.keys(map).find(function (a) {
                                return map[a] === node;
                            });
                            if (prev) {
                                if (!name) {
                                    return prev;
                                }
                                else if (prev !== name) {
                                    delete map[prev];
                                    map[name] = node;
                                }
                            }
                            else {
                                if (!name) {
                                    if (!node)
                                        return null;
                                    name = this.newName();
                                }
                                map[name] = node;
                            }
                            return name;
                        }
                    }]);
                return Anchors;
            }();
            exports.default = Anchors;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/Document.js": 
        /*!****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/Document.js ***!
          \****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _addComment = _interopRequireDefault(__webpack_require__(/*! ./addComment */ "./node_modules/yaml/browser/dist/addComment.js"));
            var _Anchors = _interopRequireDefault(__webpack_require__(/*! ./Anchors */ "./node_modules/yaml/browser/dist/Anchors.js"));
            var _constants = __webpack_require__(/*! ./constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ./errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _listTagNames = _interopRequireDefault(__webpack_require__(/*! ./listTagNames */ "./node_modules/yaml/browser/dist/listTagNames.js"));
            var _schema = _interopRequireDefault(__webpack_require__(/*! ./schema */ "./node_modules/yaml/browser/dist/schema/index.js"));
            var _Alias = _interopRequireDefault(__webpack_require__(/*! ./schema/Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));
            var _Collection = _interopRequireWildcard(__webpack_require__(/*! ./schema/Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            var _Node = _interopRequireDefault(__webpack_require__(/*! ./schema/Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ./toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));
            var isCollectionItem = function isCollectionItem(node) {
                return node && [_constants.Type.MAP_KEY, _constants.Type.MAP_VALUE, _constants.Type.SEQ_ITEM].includes(node.type);
            };
            var Document = 
            /*#__PURE__*/
            function () {
                function Document(options) {
                    (0, _classCallCheck2.default)(this, Document);
                    this.anchors = new _Anchors.default(options.anchorPrefix);
                    this.commentBefore = null;
                    this.comment = null;
                    this.contents = null;
                    this.directivesEndMarker = null;
                    this.errors = [];
                    this.options = options;
                    this.schema = null;
                    this.tagPrefixes = [];
                    this.version = null;
                    this.warnings = [];
                }
                (0, _createClass2.default)(Document, [{
                        key: "assertCollectionContents",
                        value: function assertCollectionContents() {
                            if (this.contents instanceof _Collection.default)
                                return true;
                            throw new Error('Expected a YAML collection as document contents');
                        }
                    }, {
                        key: "add",
                        value: function add(value) {
                            this.assertCollectionContents();
                            return this.contents.add(value);
                        }
                    }, {
                        key: "addIn",
                        value: function addIn(path, value) {
                            this.assertCollectionContents();
                            this.contents.addIn(path, value);
                        }
                    }, {
                        key: "delete",
                        value: function _delete(key) {
                            this.assertCollectionContents();
                            return this.contents.delete(key);
                        }
                    }, {
                        key: "deleteIn",
                        value: function deleteIn(path) {
                            if ((0, _Collection.isEmptyPath)(path)) {
                                if (this.contents == null)
                                    return false;
                                this.contents = null;
                                return true;
                            }
                            this.assertCollectionContents();
                            return this.contents.deleteIn(path);
                        }
                    }, {
                        key: "getDefaults",
                        value: function getDefaults() {
                            return Document.defaults[this.version] || Document.defaults[this.options.version] || {};
                        }
                    }, {
                        key: "get",
                        value: function get(key, keepScalar) {
                            return this.contents instanceof _Collection.default ? this.contents.get(key, keepScalar) : undefined;
                        }
                    }, {
                        key: "getIn",
                        value: function getIn(path, keepScalar) {
                            if ((0, _Collection.isEmptyPath)(path))
                                return !keepScalar && this.contents instanceof _Scalar.default ? this.contents.value : this.contents;
                            return this.contents instanceof _Collection.default ? this.contents.getIn(path, keepScalar) : undefined;
                        }
                    }, {
                        key: "has",
                        value: function has(key) {
                            return this.contents instanceof _Collection.default ? this.contents.has(key) : false;
                        }
                    }, {
                        key: "hasIn",
                        value: function hasIn(path) {
                            if ((0, _Collection.isEmptyPath)(path))
                                return this.contents !== undefined;
                            return this.contents instanceof _Collection.default ? this.contents.hasIn(path) : false;
                        }
                    }, {
                        key: "set",
                        value: function set(key, value) {
                            this.assertCollectionContents();
                            this.contents.set(key, value);
                        }
                    }, {
                        key: "setIn",
                        value: function setIn(path, value) {
                            if ((0, _Collection.isEmptyPath)(path))
                                this.contents = value;
                            else {
                                this.assertCollectionContents();
                                this.contents.setIn(path, value);
                            }
                        }
                    }, {
                        key: "setSchema",
                        value: function setSchema(id, customTags) {
                            if (!id && !customTags && this.schema)
                                return;
                            if (typeof id === 'number')
                                id = id.toFixed(1);
                            if (id === '1.0' || id === '1.1' || id === '1.2') {
                                if (this.version)
                                    this.version = id;
                                else
                                    this.options.version = id;
                                delete this.options.schema;
                            }
                            else if (id && typeof id === 'string') {
                                this.options.schema = id;
                            }
                            if (Array.isArray(customTags))
                                this.options.customTags = customTags;
                            var opt = Object.assign({}, this.getDefaults(), this.options);
                            this.schema = new _schema.default(opt);
                        }
                    }, {
                        key: "parse",
                        value: function parse(node, prevDoc) {
                            if (this.options.keepCstNodes)
                                this.cstNode = node;
                            if (this.options.keepNodeTypes)
                                this.type = 'DOCUMENT';
                            var _node$directives = node.directives, directives = _node$directives === void 0 ? [] : _node$directives, _node$contents = node.contents, contents = _node$contents === void 0 ? [] : _node$contents, directivesEndMarker = node.directivesEndMarker, error = node.error, valueRange = node.valueRange;
                            if (error) {
                                if (!error.source)
                                    error.source = this;
                                this.errors.push(error);
                            }
                            this.parseDirectives(directives, prevDoc);
                            if (directivesEndMarker)
                                this.directivesEndMarker = true;
                            this.range = valueRange ? [valueRange.start, valueRange.end] : null;
                            this.setSchema();
                            this.anchors._cstAliases = [];
                            this.parseContents(contents);
                            this.anchors.resolveNodes();
                            if (this.options.prettyErrors) {
                                var _iteratorNormalCompletion = true;
                                var _didIteratorError = false;
                                var _iteratorError = undefined;
                                try {
                                    for (var _iterator = this.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        var _error = _step.value;
                                        if (_error instanceof _errors.YAMLError)
                                            _error.makePretty();
                                    }
                                }
                                catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                }
                                finally {
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    }
                                    finally {
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                var _iteratorNormalCompletion2 = true;
                                var _didIteratorError2 = false;
                                var _iteratorError2 = undefined;
                                try {
                                    for (var _iterator2 = this.warnings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var warn = _step2.value;
                                        if (warn instanceof _errors.YAMLError)
                                            warn.makePretty();
                                    }
                                }
                                catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                }
                                finally {
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    }
                                    finally {
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                            }
                            return this;
                        }
                    }, {
                        key: "parseDirectives",
                        value: function parseDirectives(directives, prevDoc) {
                            var _this = this;
                            var directiveComments = [];
                            var hasDirectives = false;
                            directives.forEach(function (directive) {
                                var comment = directive.comment, name = directive.name;
                                switch (name) {
                                    case 'TAG':
                                        _this.resolveTagDirective(directive);
                                        hasDirectives = true;
                                        break;
                                    case 'YAML':
                                    case 'YAML:1.0':
                                        _this.resolveYamlDirective(directive);
                                        hasDirectives = true;
                                        break;
                                    default:
                                        if (name) {
                                            var msg = "YAML only supports %TAG and %YAML directives, and not %".concat(name);
                                            _this.warnings.push(new _errors.YAMLWarning(directive, msg));
                                        }
                                }
                                if (comment)
                                    directiveComments.push(comment);
                            });
                            if (prevDoc && !hasDirectives && '1.1' === (this.version || prevDoc.version || this.options.version)) {
                                var copyTagPrefix = function copyTagPrefix(_ref) {
                                    var handle = _ref.handle, prefix = _ref.prefix;
                                    return {
                                        handle: handle,
                                        prefix: prefix
                                    };
                                };
                                this.tagPrefixes = prevDoc.tagPrefixes.map(copyTagPrefix);
                                this.version = prevDoc.version;
                            }
                            this.commentBefore = directiveComments.join('\n') || null;
                        }
                    }, {
                        key: "parseContents",
                        value: function parseContents(contents) {
                            var _this2 = this;
                            var comments = {
                                before: [],
                                after: []
                            };
                            var contentNodes = [];
                            var spaceBefore = false;
                            contents.forEach(function (node) {
                                if (node.valueRange) {
                                    if (contentNodes.length === 1) {
                                        var msg = 'Document is not valid YAML (bad indentation?)';
                                        _this2.errors.push(new _errors.YAMLSyntaxError(node, msg));
                                    }
                                    var res = _this2.resolveNode(node);
                                    if (spaceBefore) {
                                        res.spaceBefore = true;
                                        spaceBefore = false;
                                    }
                                    contentNodes.push(res);
                                }
                                else if (node.comment !== null) {
                                    var cc = contentNodes.length === 0 ? comments.before : comments.after;
                                    cc.push(node.comment);
                                }
                                else if (node.type === _constants.Type.BLANK_LINE) {
                                    spaceBefore = true;
                                    if (contentNodes.length === 0 && comments.before.length > 0 && !_this2.commentBefore) {
                                        // space-separated comments at start are parsed as document comments
                                        _this2.commentBefore = comments.before.join('\n');
                                        comments.before = [];
                                    }
                                }
                            });
                            switch (contentNodes.length) {
                                case 0:
                                    this.contents = null;
                                    comments.after = comments.before;
                                    break;
                                case 1:
                                    this.contents = contentNodes[0];
                                    if (this.contents) {
                                        var cb = comments.before.join('\n') || null;
                                        if (cb) {
                                            var cbNode = this.contents instanceof _Collection.default && this.contents.items[0] ? this.contents.items[0] : this.contents;
                                            cbNode.commentBefore = cbNode.commentBefore ? "".concat(cb, "\n").concat(cbNode.commentBefore) : cb;
                                        }
                                    }
                                    else {
                                        comments.after = comments.before.concat(comments.after);
                                    }
                                    break;
                                default:
                                    this.contents = contentNodes;
                                    if (this.contents[0]) {
                                        this.contents[0].commentBefore = comments.before.join('\n') || null;
                                    }
                                    else {
                                        comments.after = comments.before.concat(comments.after);
                                    }
                            }
                            this.comment = comments.after.join('\n') || null;
                        }
                    }, {
                        key: "resolveTagDirective",
                        value: function resolveTagDirective(directive) {
                            var _directive$parameters = (0, _slicedToArray2.default)(directive.parameters, 2), handle = _directive$parameters[0], prefix = _directive$parameters[1];
                            if (handle && prefix) {
                                if (this.tagPrefixes.every(function (p) {
                                    return p.handle !== handle;
                                })) {
                                    this.tagPrefixes.push({
                                        handle: handle,
                                        prefix: prefix
                                    });
                                }
                                else {
                                    var msg = 'The %TAG directive must only be given at most once per handle in the same document.';
                                    this.errors.push(new _errors.YAMLSemanticError(directive, msg));
                                }
                            }
                            else {
                                var _msg = 'Insufficient parameters given for %TAG directive';
                                this.errors.push(new _errors.YAMLSemanticError(directive, _msg));
                            }
                        }
                    }, {
                        key: "resolveYamlDirective",
                        value: function resolveYamlDirective(directive) {
                            var _directive$parameters2 = (0, _slicedToArray2.default)(directive.parameters, 1), version = _directive$parameters2[0];
                            if (directive.name === 'YAML:1.0')
                                version = '1.0';
                            if (this.version) {
                                var msg = 'The %YAML directive must only be given at most once per document.';
                                this.errors.push(new _errors.YAMLSemanticError(directive, msg));
                            }
                            if (!version) {
                                var _msg2 = 'Insufficient parameters given for %YAML directive';
                                this.errors.push(new _errors.YAMLSemanticError(directive, _msg2));
                            }
                            else {
                                if (!Document.defaults[version]) {
                                    var v0 = this.version || this.options.version;
                                    var _msg3 = "Document will be parsed as YAML ".concat(v0, " rather than YAML ").concat(version);
                                    this.warnings.push(new _errors.YAMLWarning(directive, _msg3));
                                }
                                this.version = version;
                            }
                        }
                    }, {
                        key: "resolveTagName",
                        value: function resolveTagName(node) {
                            var tag = node.tag, type = node.type;
                            var nonSpecific = false;
                            if (tag) {
                                var handle = tag.handle, suffix = tag.suffix, verbatim = tag.verbatim;
                                if (verbatim) {
                                    if (verbatim !== '!' && verbatim !== '!!')
                                        return verbatim;
                                    var msg = "Verbatim tags aren't resolved, so ".concat(verbatim, " is invalid.");
                                    this.errors.push(new _errors.YAMLSemanticError(node, msg));
                                }
                                else if (handle === '!' && !suffix) {
                                    nonSpecific = true;
                                }
                                else {
                                    var prefix = this.tagPrefixes.find(function (p) {
                                        return p.handle === handle;
                                    });
                                    if (!prefix) {
                                        var dtp = this.getDefaults().tagPrefixes;
                                        if (dtp)
                                            prefix = dtp.find(function (p) {
                                                return p.handle === handle;
                                            });
                                    }
                                    if (prefix) {
                                        if (suffix) {
                                            if (handle === '!' && (this.version || this.options.version) === '1.0') {
                                                if (suffix[0] === '^')
                                                    return suffix;
                                                if (/[:/]/.test(suffix)) {
                                                    // word/foo -> tag:word.yaml.org,2002:foo
                                                    var vocab = suffix.match(/^([a-z0-9-]+)\/(.*)/i);
                                                    return vocab ? "tag:".concat(vocab[1], ".yaml.org,2002:").concat(vocab[2]) : "tag:".concat(suffix);
                                                }
                                            }
                                            return prefix.prefix + decodeURIComponent(suffix);
                                        }
                                        this.errors.push(new _errors.YAMLSemanticError(node, "The ".concat(handle, " tag has no suffix.")));
                                    }
                                    else {
                                        var _msg4 = "The ".concat(handle, " tag handle is non-default and was not declared.");
                                        this.errors.push(new _errors.YAMLSemanticError(node, _msg4));
                                    }
                                }
                            }
                            switch (type) {
                                case _constants.Type.BLOCK_FOLDED:
                                case _constants.Type.BLOCK_LITERAL:
                                case _constants.Type.QUOTE_DOUBLE:
                                case _constants.Type.QUOTE_SINGLE:
                                    return _schema.default.defaultTags.STR;
                                case _constants.Type.FLOW_MAP:
                                case _constants.Type.MAP:
                                    return _schema.default.defaultTags.MAP;
                                case _constants.Type.FLOW_SEQ:
                                case _constants.Type.SEQ:
                                    return _schema.default.defaultTags.SEQ;
                                case _constants.Type.PLAIN:
                                    return nonSpecific ? _schema.default.defaultTags.STR : null;
                                default:
                                    return null;
                            }
                        }
                    }, {
                        key: "resolveNode",
                        value: function resolveNode(node) {
                            if (!node)
                                return null;
                            var anchors = this.anchors, errors = this.errors, schema = this.schema;
                            var hasAnchor = false;
                            var hasTag = false;
                            var comments = {
                                before: [],
                                after: []
                            };
                            var props = isCollectionItem(node.context.parent) ? node.context.parent.props.concat(node.props) : node.props;
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;
                            try {
                                for (var _iterator3 = props[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var _step3$value = _step3.value, start = _step3$value.start, end = _step3$value.end;
                                    switch (node.context.src[start]) {
                                        case _constants.Char.COMMENT:
                                            {
                                                if (!node.commentHasRequiredWhitespace(start)) {
                                                    var _msg7 = 'Comments must be separated from other tokens by white space characters';
                                                    errors.push(new _errors.YAMLSemanticError(node, _msg7));
                                                }
                                                var c = node.context.src.slice(start + 1, end);
                                                var header = node.header, valueRange = node.valueRange;
                                                if (valueRange && (start > valueRange.start || header && start > header.start)) {
                                                    comments.after.push(c);
                                                }
                                                else {
                                                    comments.before.push(c);
                                                }
                                            }
                                            break;
                                        case _constants.Char.ANCHOR:
                                            if (hasAnchor) {
                                                var _msg8 = 'A node can have at most one anchor';
                                                errors.push(new _errors.YAMLSemanticError(node, _msg8));
                                            }
                                            hasAnchor = true;
                                            break;
                                        case _constants.Char.TAG:
                                            if (hasTag) {
                                                var _msg9 = 'A node can have at most one tag';
                                                errors.push(new _errors.YAMLSemanticError(node, _msg9));
                                            }
                                            hasTag = true;
                                            break;
                                    }
                                }
                            }
                            catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            }
                            finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                        _iterator3.return();
                                    }
                                }
                                finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                            if (hasAnchor) {
                                var name = node.anchor;
                                var prev = anchors.getNode(name); // At this point, aliases for any preceding node with the same anchor
                                // name have already been resolved, so it may safely be renamed.
                                if (prev)
                                    anchors.map[anchors.newName(name)] = prev; // During parsing, we need to store the CST node in anchors.map as
                                // anchors need to be available during resolution to allow for
                                // circular references.
                                anchors.map[name] = node;
                            }
                            var res;
                            if (node.type === _constants.Type.ALIAS) {
                                if (hasAnchor || hasTag) {
                                    var msg = 'An alias node must not specify any properties';
                                    errors.push(new _errors.YAMLSemanticError(node, msg));
                                }
                                var _name = node.rawValue;
                                var src = anchors.getNode(_name);
                                if (!src) {
                                    var _msg5 = "Aliased anchor not found: ".concat(_name);
                                    errors.push(new _errors.YAMLReferenceError(node, _msg5));
                                    return null;
                                } // Lazy resolution for circular references
                                res = new _Alias.default(src);
                                anchors._cstAliases.push(res);
                            }
                            else {
                                var tagName = this.resolveTagName(node);
                                if (tagName) {
                                    res = schema.resolveNodeWithFallback(this, node, tagName);
                                }
                                else {
                                    if (node.type !== _constants.Type.PLAIN) {
                                        var _msg6 = "Failed to resolve ".concat(node.type, " node here");
                                        errors.push(new _errors.YAMLSyntaxError(node, _msg6));
                                        return null;
                                    }
                                    try {
                                        res = schema.resolveScalar(node.strValue || '');
                                    }
                                    catch (error) {
                                        if (!error.source)
                                            error.source = node;
                                        errors.push(error);
                                        return null;
                                    }
                                }
                            }
                            if (res) {
                                res.range = [node.range.start, node.range.end];
                                if (this.options.keepCstNodes)
                                    res.cstNode = node;
                                if (this.options.keepNodeTypes)
                                    res.type = node.type;
                                var cb = comments.before.join('\n');
                                if (cb) {
                                    res.commentBefore = res.commentBefore ? "".concat(res.commentBefore, "\n").concat(cb) : cb;
                                }
                                var ca = comments.after.join('\n');
                                if (ca)
                                    res.comment = res.comment ? "".concat(res.comment, "\n").concat(ca) : ca;
                            }
                            return node.resolved = res;
                        }
                    }, {
                        key: "listNonDefaultTags",
                        value: function listNonDefaultTags() {
                            return (0, _listTagNames.default)(this.contents).filter(function (t) {
                                return t.indexOf(_schema.default.defaultPrefix) !== 0;
                            });
                        }
                    }, {
                        key: "setTagPrefix",
                        value: function setTagPrefix(handle, prefix) {
                            if (handle[0] !== '!' || handle[handle.length - 1] !== '!')
                                throw new Error('Handle must start and end with !');
                            if (prefix) {
                                var prev = this.tagPrefixes.find(function (p) {
                                    return p.handle === handle;
                                });
                                if (prev)
                                    prev.prefix = prefix;
                                else
                                    this.tagPrefixes.push({
                                        handle: handle,
                                        prefix: prefix
                                    });
                            }
                            else {
                                this.tagPrefixes = this.tagPrefixes.filter(function (p) {
                                    return p.handle !== handle;
                                });
                            }
                        }
                    }, {
                        key: "stringifyTag",
                        value: function stringifyTag(tag) {
                            if ((this.version || this.options.version) === '1.0') {
                                var priv = tag.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
                                if (priv)
                                    return '!' + priv[1];
                                var vocab = tag.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
                                return vocab ? "!".concat(vocab[1], "/").concat(vocab[2]) : "!".concat(tag.replace(/^tag:/, ''));
                            }
                            else {
                                var p = this.tagPrefixes.find(function (p) {
                                    return tag.indexOf(p.prefix) === 0;
                                });
                                if (!p) {
                                    var dtp = this.getDefaults().tagPrefixes;
                                    p = dtp && dtp.find(function (p) {
                                        return tag.indexOf(p.prefix) === 0;
                                    });
                                }
                                if (!p)
                                    return tag[0] === '!' ? tag : "!<".concat(tag, ">");
                                var suffix = tag.substr(p.prefix.length).replace(/[!,[\]{}]/g, function (ch) {
                                    return {
                                        '!': '%21',
                                        ',': '%2C',
                                        '[': '%5B',
                                        ']': '%5D',
                                        '{': '%7B',
                                        '}': '%7D'
                                    }[ch];
                                });
                                return p.handle + suffix;
                            }
                        }
                    }, {
                        key: "toJSON",
                        value: function toJSON(arg) {
                            var _this3 = this;
                            var _this$options = this.options, keepBlobsInJSON = _this$options.keepBlobsInJSON, mapAsMap = _this$options.mapAsMap, maxAliasCount = _this$options.maxAliasCount;
                            var keep = keepBlobsInJSON && (typeof arg !== 'string' || !(this.contents instanceof _Scalar.default));
                            var ctx = {
                                doc: this,
                                keep: keep,
                                mapAsMap: keep && !!mapAsMap,
                                maxAliasCount: maxAliasCount
                            };
                            var anchorNames = Object.keys(this.anchors.map);
                            if (anchorNames.length > 0)
                                ctx.anchors = anchorNames.map(function (name) {
                                    return {
                                        alias: [],
                                        aliasCount: 0,
                                        count: 1,
                                        node: _this3.anchors.map[name]
                                    };
                                });
                            return (0, _toJSON2.default)(this.contents, arg, ctx);
                        }
                    }, {
                        key: "toString",
                        value: function toString() {
                            if (this.errors.length > 0)
                                throw new Error('Document with errors cannot be stringified');
                            this.setSchema();
                            var lines = [];
                            var hasDirectives = false;
                            if (this.version) {
                                var vd = '%YAML 1.2';
                                if (this.schema.name === 'yaml-1.1') {
                                    if (this.version === '1.0')
                                        vd = '%YAML:1.0';
                                    else if (this.version === '1.1')
                                        vd = '%YAML 1.1';
                                }
                                lines.push(vd);
                                hasDirectives = true;
                            }
                            var tagNames = this.listNonDefaultTags();
                            this.tagPrefixes.forEach(function (_ref2) {
                                var handle = _ref2.handle, prefix = _ref2.prefix;
                                if (tagNames.some(function (t) {
                                    return t.indexOf(prefix) === 0;
                                })) {
                                    lines.push("%TAG ".concat(handle, " ").concat(prefix));
                                    hasDirectives = true;
                                }
                            });
                            if (hasDirectives || this.directivesEndMarker)
                                lines.push('---');
                            if (this.commentBefore) {
                                if (hasDirectives || !this.directivesEndMarker)
                                    lines.unshift('');
                                lines.unshift(this.commentBefore.replace(/^/gm, '#'));
                            }
                            var ctx = {
                                anchors: {},
                                doc: this,
                                indent: ''
                            };
                            var chompKeep = false;
                            var contentComment = null;
                            if (this.contents) {
                                if (this.contents instanceof _Node.default) {
                                    if (this.contents.spaceBefore && (hasDirectives || this.directivesEndMarker))
                                        lines.push('');
                                    if (this.contents.commentBefore)
                                        lines.push(this.contents.commentBefore.replace(/^/gm, '#')); // top-level block scalars need to be indented if followed by a comment
                                    ctx.forceBlockIndent = !!this.comment;
                                    contentComment = this.contents.comment;
                                }
                                var onChompKeep = contentComment ? null : function () {
                                    return chompKeep = true;
                                };
                                var body = this.schema.stringify(this.contents, ctx, function () {
                                    return contentComment = null;
                                }, onChompKeep);
                                lines.push((0, _addComment.default)(body, '', contentComment));
                            }
                            else if (this.contents !== undefined) {
                                lines.push(this.schema.stringify(this.contents, ctx));
                            }
                            if (this.comment) {
                                if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '')
                                    lines.push('');
                                lines.push(this.comment.replace(/^/gm, '#'));
                            }
                            return lines.join('\n') + '\n';
                        }
                    }]);
                return Document;
            }();
            exports.default = Document;
            (0, _defineProperty2.default)(Document, "defaults", {
                '1.0': {
                    schema: 'yaml-1.1',
                    merge: true,
                    tagPrefixes: [{
                            handle: '!',
                            prefix: _schema.default.defaultPrefix
                        }, {
                            handle: '!!',
                            prefix: 'tag:private.yaml.org,2002:'
                        }]
                },
                '1.1': {
                    schema: 'yaml-1.1',
                    merge: true,
                    tagPrefixes: [{
                            handle: '!',
                            prefix: '!'
                        }, {
                            handle: '!!',
                            prefix: _schema.default.defaultPrefix
                        }]
                },
                '1.2': {
                    schema: 'core',
                    merge: false,
                    tagPrefixes: [{
                            handle: '!',
                            prefix: '!'
                        }, {
                            handle: '!!',
                            prefix: _schema.default.defaultPrefix
                        }]
                }
            });
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/addComment.js": 
        /*!******************************************************!*\
          !*** ./node_modules/yaml/browser/dist/addComment.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.addCommentBefore = addCommentBefore;
            exports.default = addComment;
            function addCommentBefore(str, indent, comment) {
                if (!comment)
                    return str;
                var cc = comment.replace(/[\s\S]^/gm, "$&".concat(indent, "#"));
                return "#".concat(cc, "\n").concat(indent).concat(str);
            }
            function addComment(str, indent, comment) {
                return !comment ? str : comment.indexOf('\n') === -1 ? "".concat(str, " #").concat(comment) : "".concat(str, "\n") + comment.replace(/^/gm, "".concat(indent || '', "#"));
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/constants.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/constants.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Type = exports.Char = void 0;
            var Char = {
                ANCHOR: '&',
                COMMENT: '#',
                TAG: '!',
                DIRECTIVES_END: '-',
                DOCUMENT_END: '.'
            };
            exports.Char = Char;
            var Type = {
                ALIAS: 'ALIAS',
                BLANK_LINE: 'BLANK_LINE',
                BLOCK_FOLDED: 'BLOCK_FOLDED',
                BLOCK_LITERAL: 'BLOCK_LITERAL',
                COMMENT: 'COMMENT',
                DIRECTIVE: 'DIRECTIVE',
                DOCUMENT: 'DOCUMENT',
                FLOW_MAP: 'FLOW_MAP',
                FLOW_SEQ: 'FLOW_SEQ',
                MAP: 'MAP',
                MAP_KEY: 'MAP_KEY',
                MAP_VALUE: 'MAP_VALUE',
                PLAIN: 'PLAIN',
                QUOTE_DOUBLE: 'QUOTE_DOUBLE',
                QUOTE_SINGLE: 'QUOTE_SINGLE',
                SEQ: 'SEQ',
                SEQ_ITEM: 'SEQ_ITEM'
            };
            exports.Type = Type;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/Alias.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/Alias.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var Alias = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Alias, _Node);
                function Alias() {
                    (0, _classCallCheck2.default)(this, Alias);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Alias).apply(this, arguments));
                }
                (0, _createClass2.default)(Alias, [{
                        key: "parse",
                        /**
                         * Parses an *alias from the source
                         *
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this scalar
                         */
                        value: function parse(context, start) {
                            this.context = context;
                            var src = context.src;
                            var offset = _Node2.default.endOfIdentifier(src, start + 1);
                            this.valueRange = new _Range.default(start + 1, offset);
                            offset = _Node2.default.endOfWhiteSpace(src, offset);
                            offset = this.parseComment(offset);
                            return offset;
                        }
                    }]);
                return Alias;
            }(_Node2.default);
            exports.default = Alias;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/BlankLine.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/BlankLine.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var BlankLine = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(BlankLine, _Node);
                function BlankLine() {
                    (0, _classCallCheck2.default)(this, BlankLine);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlankLine).call(this, _constants.Type.BLANK_LINE));
                }
                (0, _createClass2.default)(BlankLine, [{
                        key: "parse",
                        /**
                         * Parses blank lines from the source
                         *
                         * @param {ParseContext} context
                         * @param {number} start - Index of first \n character
                         * @returns {number} - Index of the character after this
                         */
                        value: function parse(context, start) {
                            this.context = context;
                            var src = context.src;
                            var offset = start + 1;
                            while (_Node2.default.atBlank(src, offset)) {
                                var lineEnd = _Node2.default.endOfWhiteSpace(src, offset);
                                if (lineEnd === '\n')
                                    offset = lineEnd + 1;
                                else
                                    break;
                            }
                            this.range = new _Range.default(start, offset);
                            return offset;
                        }
                    }, {
                        key: "includesTrailingLines",
                        get: function get() {
                            return true;
                        }
                    }]);
                return BlankLine;
            }(_Node2.default);
            exports.default = BlankLine;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/BlockValue.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/BlockValue.js ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports.Chomp = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var Chomp = {
                CLIP: 'CLIP',
                KEEP: 'KEEP',
                STRIP: 'STRIP'
            };
            exports.Chomp = Chomp;
            var BlockValue = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(BlockValue, _Node);
                function BlockValue(type, props) {
                    var _this;
                    (0, _classCallCheck2.default)(this, BlockValue);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockValue).call(this, type, props));
                    _this.blockIndent = null;
                    _this.chomping = Chomp.CLIP;
                    _this.header = null;
                    return _this;
                }
                (0, _createClass2.default)(BlockValue, [{
                        key: "parseBlockHeader",
                        value: function parseBlockHeader(start) {
                            var src = this.context.src;
                            var offset = start + 1;
                            var bi = '';
                            while (true) {
                                var ch = src[offset];
                                switch (ch) {
                                    case '-':
                                        this.chomping = Chomp.STRIP;
                                        break;
                                    case '+':
                                        this.chomping = Chomp.KEEP;
                                        break;
                                    case '0':
                                    case '1':
                                    case '2':
                                    case '3':
                                    case '4':
                                    case '5':
                                    case '6':
                                    case '7':
                                    case '8':
                                    case '9':
                                        bi += ch;
                                        break;
                                    default:
                                        this.blockIndent = Number(bi) || null;
                                        this.header = new _Range.default(start, offset);
                                        return offset;
                                }
                                offset += 1;
                            }
                        }
                    }, {
                        key: "parseBlockValue",
                        value: function parseBlockValue(start) {
                            var _this$context = this.context, indent = _this$context.indent, src = _this$context.src;
                            var offset = start;
                            var valueEnd = start;
                            var bi = this.blockIndent ? indent + this.blockIndent - 1 : indent;
                            var minBlockIndent = 1;
                            for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
                                offset += 1;
                                if (_Node2.default.atDocumentBoundary(src, offset))
                                    break;
                                var end = _Node2.default.endOfBlockIndent(src, bi, offset); // should not include tab?
                                if (end === null)
                                    break;
                                if (!this.blockIndent) {
                                    // no explicit block indent, none yet detected
                                    var lineIndent = end - (offset + indent);
                                    if (src[end] !== '\n') {
                                        // first line with non-whitespace content
                                        if (lineIndent < minBlockIndent) {
                                            offset -= 1;
                                            break;
                                        }
                                        this.blockIndent = lineIndent;
                                        bi = indent + this.blockIndent - 1;
                                    }
                                    else if (lineIndent > minBlockIndent) {
                                        // empty line with more whitespace
                                        minBlockIndent = lineIndent;
                                    }
                                }
                                if (src[end] === '\n') {
                                    offset = end;
                                }
                                else {
                                    offset = valueEnd = _Node2.default.endOfLine(src, end);
                                }
                            }
                            if (this.chomping !== Chomp.KEEP) {
                                offset = src[valueEnd] ? valueEnd + 1 : valueEnd;
                            }
                            this.valueRange = new _Range.default(start + 1, offset);
                            return offset;
                        }
                        /**
                         * Parses a block value from the source
                         *
                         * Accepted forms are:
                         * ```
                         * BS
                         * block
                         * lines
                         *
                         * BS #comment
                         * block
                         * lines
                         * ```
                         * where the block style BS matches the regexp `[|>][-+1-9]*` and block lines
                         * are empty or have an indent level greater than `indent`.
                         *
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this block
                         */
                    }, {
                        key: "parse",
                        value: function parse(context, start) {
                            this.context = context;
                            var src = context.src;
                            var offset = this.parseBlockHeader(start);
                            offset = _Node2.default.endOfWhiteSpace(src, offset);
                            offset = this.parseComment(offset);
                            offset = this.parseBlockValue(offset);
                            return offset;
                        }
                    }, {
                        key: "setOrigRanges",
                        value: function setOrigRanges(cr, offset) {
                            offset = (0, _get2.default)((0, _getPrototypeOf2.default)(BlockValue.prototype), "setOrigRanges", this).call(this, cr, offset);
                            return this.header ? this.header.setOrigRange(cr, offset) : offset;
                        }
                    }, {
                        key: "includesTrailingLines",
                        get: function get() {
                            return this.chomping === Chomp.KEEP;
                        }
                    }, {
                        key: "strValue",
                        get: function get() {
                            if (!this.valueRange || !this.context)
                                return null;
                            var _this$valueRange = this.valueRange, start = _this$valueRange.start, end = _this$valueRange.end;
                            var _this$context2 = this.context, indent = _this$context2.indent, src = _this$context2.src;
                            if (this.valueRange.isEmpty())
                                return '';
                            var lastNewLine = null;
                            var ch = src[end - 1];
                            while (ch === '\n' || ch === '\t' || ch === ' ') {
                                end -= 1;
                                if (end <= start) {
                                    if (this.chomping === Chomp.KEEP)
                                        break;
                                    else
                                        return '';
                                }
                                if (ch === '\n')
                                    lastNewLine = end;
                                ch = src[end - 1];
                            }
                            var keepStart = end + 1;
                            if (lastNewLine) {
                                if (this.chomping === Chomp.KEEP) {
                                    keepStart = lastNewLine;
                                    end = this.valueRange.end;
                                }
                                else {
                                    end = lastNewLine;
                                }
                            }
                            var bi = indent + this.blockIndent;
                            var folded = this.type === _constants.Type.BLOCK_FOLDED;
                            var atStart = true;
                            var str = '';
                            var sep = '';
                            var prevMoreIndented = false;
                            for (var i = start; i < end; ++i) {
                                for (var j = 0; j < bi; ++j) {
                                    if (src[i] !== ' ')
                                        break;
                                    i += 1;
                                }
                                var _ch = src[i];
                                if (_ch === '\n') {
                                    if (sep === '\n')
                                        str += '\n';
                                    else
                                        sep = '\n';
                                }
                                else {
                                    var lineEnd = _Node2.default.endOfLine(src, i);
                                    var line = src.slice(i, lineEnd);
                                    i = lineEnd;
                                    if (folded && (_ch === ' ' || _ch === '\t') && i < keepStart) {
                                        if (sep === ' ')
                                            sep = '\n';
                                        else if (!prevMoreIndented && !atStart && sep === '\n')
                                            sep = '\n\n';
                                        str += sep + line; //+ ((lineEnd < end && src[lineEnd]) || '')
                                        sep = lineEnd < end && src[lineEnd] || '';
                                        prevMoreIndented = true;
                                    }
                                    else {
                                        str += sep + line;
                                        sep = folded && i < keepStart ? ' ' : '\n';
                                        prevMoreIndented = false;
                                    }
                                    if (atStart && line !== '')
                                        atStart = false;
                                }
                            }
                            return this.chomping === Chomp.STRIP ? str : str + '\n';
                        }
                    }]);
                return BlockValue;
            }(_Node2.default);
            exports.default = BlockValue;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/Collection.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/Collection.js ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.grabCollectionEndComments = grabCollectionEndComments;
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));
            var _CollectionItem = _interopRequireDefault(__webpack_require__(/*! ./CollectionItem */ "./node_modules/yaml/browser/dist/cst/CollectionItem.js"));
            var _Comment = _interopRequireDefault(__webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            function grabCollectionEndComments(node) {
                var cnode = node;
                while (cnode instanceof _CollectionItem.default) {
                    cnode = cnode.node;
                }
                if (!(cnode instanceof Collection))
                    return null;
                var len = cnode.items.length;
                var ci = -1;
                for (var i = len - 1; i >= 0; --i) {
                    var n = cnode.items[i];
                    if (n.type === _constants.Type.COMMENT) {
                        // Keep sufficiently indented comments with preceding node
                        var _n$context = n.context, indent = _n$context.indent, lineStart = _n$context.lineStart;
                        if (indent > 0 && n.range.start >= lineStart + indent)
                            break;
                        ci = i;
                    }
                    else if (n.type === _constants.Type.BLANK_LINE)
                        ci = i;
                    else
                        break;
                }
                if (ci === -1)
                    return null;
                var ca = cnode.items.splice(ci, len - ci);
                var prevEnd = ca[0].range.start;
                while (true) {
                    cnode.range.end = prevEnd;
                    if (cnode.valueRange && cnode.valueRange.end > prevEnd)
                        cnode.valueRange.end = prevEnd;
                    if (cnode === node)
                        break;
                    cnode = cnode.context.parent;
                }
                return ca;
            }
            var Collection = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Collection, _Node);
                (0, _createClass2.default)(Collection, null, [{
                        key: "nextContentHasIndent",
                        value: function nextContentHasIndent(src, offset, indent) {
                            var lineStart = _Node2.default.endOfLine(src, offset) + 1;
                            offset = _Node2.default.endOfWhiteSpace(src, lineStart);
                            var ch = src[offset];
                            if (!ch)
                                return false;
                            if (offset >= lineStart + indent)
                                return true;
                            if (ch !== '#' && ch !== '\n')
                                return false;
                            return Collection.nextContentHasIndent(src, offset, indent);
                        }
                    }]);
                function Collection(firstItem) {
                    var _this;
                    (0, _classCallCheck2.default)(this, Collection);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Collection).call(this, firstItem.type === _constants.Type.SEQ_ITEM ? _constants.Type.SEQ : _constants.Type.MAP));
                    for (var i = firstItem.props.length - 1; i >= 0; --i) {
                        if (firstItem.props[i].start < firstItem.context.lineStart) {
                            // props on previous line are assumed by the collection
                            _this.props = firstItem.props.slice(0, i + 1);
                            firstItem.props = firstItem.props.slice(i + 1);
                            var itemRange = firstItem.props[0] || firstItem.valueRange;
                            firstItem.range.start = itemRange.start;
                            break;
                        }
                    }
                    _this.items = [firstItem];
                    var ec = grabCollectionEndComments(firstItem);
                    if (ec)
                        Array.prototype.push.apply(_this.items, ec);
                    return _this;
                }
                (0, _createClass2.default)(Collection, [{
                        key: "parse",
                        /**
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this
                         */
                        value: function parse(context, start) {
                            this.context = context;
                            var parseNode = context.parseNode, src = context.src; // It's easier to recalculate lineStart here rather than tracking down the
                            // last context from which to read it -- eemeli/yaml#2
                            var lineStart = _Node2.default.startOfLine(src, start);
                            var firstItem = this.items[0]; // First-item context needs to be correct for later comment handling
                            // -- eemeli/yaml#17
                            firstItem.context.parent = this;
                            this.valueRange = _Range.default.copy(firstItem.valueRange);
                            var indent = firstItem.range.start - firstItem.context.lineStart;
                            var offset = start;
                            offset = _Node2.default.normalizeOffset(src, offset);
                            var ch = src[offset];
                            var atLineStart = _Node2.default.endOfWhiteSpace(src, lineStart) === offset;
                            var prevIncludesTrailingLines = false;
                            while (ch) {
                                while (ch === '\n' || ch === '#') {
                                    if (atLineStart && ch === '\n' && !prevIncludesTrailingLines) {
                                        var blankLine = new _BlankLine.default();
                                        offset = blankLine.parse({
                                            src: src
                                        }, offset);
                                        this.valueRange.end = offset;
                                        if (offset >= src.length) {
                                            ch = null;
                                            break;
                                        }
                                        this.items.push(blankLine);
                                        offset -= 1; // blankLine.parse() consumes terminal newline
                                    }
                                    else if (ch === '#') {
                                        if (offset < lineStart + indent && !Collection.nextContentHasIndent(src, offset, indent)) {
                                            return offset;
                                        }
                                        var comment = new _Comment.default();
                                        offset = comment.parse({
                                            indent: indent,
                                            lineStart: lineStart,
                                            src: src
                                        }, offset);
                                        this.items.push(comment);
                                        this.valueRange.end = offset;
                                        if (offset >= src.length) {
                                            ch = null;
                                            break;
                                        }
                                    }
                                    lineStart = offset + 1;
                                    offset = _Node2.default.endOfIndent(src, lineStart);
                                    if (_Node2.default.atBlank(src, offset)) {
                                        var wsEnd = _Node2.default.endOfWhiteSpace(src, offset);
                                        var next = src[wsEnd];
                                        if (!next || next === '\n' || next === '#') {
                                            offset = wsEnd;
                                        }
                                    }
                                    ch = src[offset];
                                    atLineStart = true;
                                }
                                if (!ch) {
                                    break;
                                }
                                if (offset !== lineStart + indent && (atLineStart || ch !== ':')) {
                                    if (lineStart > start)
                                        offset = lineStart;
                                    break;
                                }
                                if (firstItem.type === _constants.Type.SEQ_ITEM !== (ch === '-')) {
                                    var typeswitch = true;
                                    if (ch === '-') {
                                        // map key may start with -, as long as it's followed by a non-whitespace char
                                        var _next = src[offset + 1];
                                        typeswitch = !_next || _next === '\n' || _next === '\t' || _next === ' ';
                                    }
                                    if (typeswitch) {
                                        if (lineStart > start)
                                            offset = lineStart;
                                        break;
                                    }
                                }
                                var node = parseNode({
                                    atLineStart: atLineStart,
                                    inCollection: true,
                                    indent: indent,
                                    lineStart: lineStart,
                                    parent: this
                                }, offset);
                                if (!node)
                                    return offset; // at next document start
                                this.items.push(node);
                                this.valueRange.end = node.valueRange.end;
                                offset = _Node2.default.normalizeOffset(src, node.range.end);
                                ch = src[offset];
                                atLineStart = false;
                                prevIncludesTrailingLines = node.includesTrailingLines; // Need to reset lineStart and atLineStart here if preceding node's range
                                // has advanced to check the current line's indentation level
                                // -- eemeli/yaml#10 & eemeli/yaml#38
                                if (ch) {
                                    var ls = offset - 1;
                                    var prev = src[ls];
                                    while (prev === ' ' || prev === '\t') {
                                        prev = src[--ls];
                                    }
                                    if (prev === '\n') {
                                        lineStart = ls + 1;
                                        atLineStart = true;
                                    }
                                }
                                var ec = grabCollectionEndComments(node);
                                if (ec)
                                    Array.prototype.push.apply(this.items, ec);
                            }
                            return offset;
                        }
                    }, {
                        key: "setOrigRanges",
                        value: function setOrigRanges(cr, offset) {
                            offset = (0, _get2.default)((0, _getPrototypeOf2.default)(Collection.prototype), "setOrigRanges", this).call(this, cr, offset);
                            this.items.forEach(function (node) {
                                offset = node.setOrigRanges(cr, offset);
                            });
                            return offset;
                        }
                    }, {
                        key: "toString",
                        value: function toString() {
                            var src = this.context.src, items = this.items, range = this.range, value = this.value;
                            if (value != null)
                                return value;
                            var str = src.slice(range.start, items[0].range.start) + String(items[0]);
                            for (var i = 1; i < items.length; ++i) {
                                var item = items[i];
                                var _item$context = item.context, atLineStart = _item$context.atLineStart, indent = _item$context.indent;
                                if (atLineStart)
                                    for (var _i = 0; _i < indent; ++_i) {
                                        str += ' ';
                                    }
                                str += String(item);
                            }
                            return _Node2.default.addStringTerminator(src, range.end, str);
                        }
                    }, {
                        key: "includesTrailingLines",
                        get: function get() {
                            return this.items.length > 0;
                        }
                    }]);
                return Collection;
            }(_Node2.default);
            exports.default = Collection;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/CollectionItem.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/CollectionItem.js ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var CollectionItem = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(CollectionItem, _Node);
                function CollectionItem(type, props) {
                    var _this;
                    (0, _classCallCheck2.default)(this, CollectionItem);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CollectionItem).call(this, type, props));
                    _this.node = null;
                    return _this;
                }
                (0, _createClass2.default)(CollectionItem, [{
                        key: "parse",
                        /**
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this
                         */
                        value: function parse(context, start) {
                            this.context = context;
                            var parseNode = context.parseNode, src = context.src;
                            var atLineStart = context.atLineStart, lineStart = context.lineStart;
                            if (!atLineStart && this.type === _constants.Type.SEQ_ITEM)
                                this.error = new _errors.YAMLSemanticError(this, 'Sequence items must not have preceding content on the same line');
                            var indent = atLineStart ? start - lineStart : context.indent;
                            var offset = _Node2.default.endOfWhiteSpace(src, start + 1);
                            var ch = src[offset];
                            var inlineComment = ch === '#';
                            var comments = [];
                            var blankLine = null;
                            while (ch === '\n' || ch === '#') {
                                if (ch === '#') {
                                    var _end = _Node2.default.endOfLine(src, offset + 1);
                                    comments.push(new _Range.default(offset, _end));
                                    offset = _end;
                                }
                                else {
                                    atLineStart = true;
                                    lineStart = offset + 1;
                                    var wsEnd = _Node2.default.endOfWhiteSpace(src, lineStart);
                                    if (src[wsEnd] === '\n' && comments.length === 0) {
                                        blankLine = new _BlankLine.default();
                                        lineStart = blankLine.parse({
                                            src: src
                                        }, lineStart);
                                    }
                                    offset = _Node2.default.endOfIndent(src, lineStart);
                                }
                                ch = src[offset];
                            }
                            if (_Node2.default.nextNodeIsIndented(ch, offset - (lineStart + indent), this.type !== _constants.Type.SEQ_ITEM)) {
                                this.node = parseNode({
                                    atLineStart: atLineStart,
                                    inCollection: false,
                                    indent: indent,
                                    lineStart: lineStart,
                                    parent: this
                                }, offset);
                            }
                            else if (ch && lineStart > start + 1) {
                                offset = lineStart - 1;
                            }
                            if (this.node) {
                                if (blankLine) {
                                    // Only blank lines preceding non-empty nodes are captured. Note that
                                    // this means that collection item range start indices do not always
                                    // increase monotonically. -- eemeli/yaml#126
                                    var items = context.parent.items || context.parent.contents;
                                    if (items)
                                        items.push(blankLine);
                                }
                                if (comments.length)
                                    Array.prototype.push.apply(this.props, comments);
                                offset = this.node.range.end;
                            }
                            else {
                                if (inlineComment) {
                                    var c = comments[0];
                                    this.props.push(c);
                                    offset = c.end;
                                }
                                else {
                                    offset = _Node2.default.endOfLine(src, start + 1);
                                }
                            }
                            var end = this.node ? this.node.valueRange.end : offset;
                            this.valueRange = new _Range.default(start, end);
                            return offset;
                        }
                    }, {
                        key: "setOrigRanges",
                        value: function setOrigRanges(cr, offset) {
                            offset = (0, _get2.default)((0, _getPrototypeOf2.default)(CollectionItem.prototype), "setOrigRanges", this).call(this, cr, offset);
                            return this.node ? this.node.setOrigRanges(cr, offset) : offset;
                        }
                    }, {
                        key: "toString",
                        value: function toString() {
                            var src = this.context.src, node = this.node, range = this.range, value = this.value;
                            if (value != null)
                                return value;
                            var str = node ? src.slice(range.start, node.range.start) + String(node) : src.slice(range.start, range.end);
                            return _Node2.default.addStringTerminator(src, range.end, str);
                        }
                    }, {
                        key: "includesTrailingLines",
                        get: function get() {
                            return !!this.node && this.node.includesTrailingLines;
                        }
                    }]);
                return CollectionItem;
            }(_Node2.default);
            exports.default = CollectionItem;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/Comment.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/Comment.js ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var Comment = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Comment, _Node);
                function Comment() {
                    (0, _classCallCheck2.default)(this, Comment);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Comment).call(this, _constants.Type.COMMENT));
                }
                /**
                 * Parses a comment line from the source
                 *
                 * @param {ParseContext} context
                 * @param {number} start - Index of first character
                 * @returns {number} - Index of the character after this scalar
                 */
                (0, _createClass2.default)(Comment, [{
                        key: "parse",
                        value: function parse(context, start) {
                            this.context = context;
                            var offset = this.parseComment(start);
                            this.range = new _Range.default(start, offset);
                            return offset;
                        }
                    }]);
                return Comment;
            }(_Node2.default);
            exports.default = Comment;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/Directive.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/Directive.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var Directive = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Directive, _Node);
                (0, _createClass2.default)(Directive, null, [{
                        key: "endOfDirective",
                        value: function endOfDirective(src, offset) {
                            var ch = src[offset];
                            while (ch && ch !== '\n' && ch !== '#') {
                                ch = src[offset += 1];
                            } // last char can't be whitespace
                            ch = src[offset - 1];
                            while (ch === ' ' || ch === '\t') {
                                offset -= 1;
                                ch = src[offset - 1];
                            }
                            return offset;
                        }
                    }]);
                function Directive() {
                    var _this;
                    (0, _classCallCheck2.default)(this, Directive);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Directive).call(this, _constants.Type.DIRECTIVE));
                    _this.name = null;
                    return _this;
                }
                (0, _createClass2.default)(Directive, [{
                        key: "parseName",
                        value: function parseName(start) {
                            var src = this.context.src;
                            var offset = start;
                            var ch = src[offset];
                            while (ch && ch !== '\n' && ch !== '\t' && ch !== ' ') {
                                ch = src[offset += 1];
                            }
                            this.name = src.slice(start, offset);
                            return offset;
                        }
                    }, {
                        key: "parseParameters",
                        value: function parseParameters(start) {
                            var src = this.context.src;
                            var offset = start;
                            var ch = src[offset];
                            while (ch && ch !== '\n' && ch !== '#') {
                                ch = src[offset += 1];
                            }
                            this.valueRange = new _Range.default(start, offset);
                            return offset;
                        }
                    }, {
                        key: "parse",
                        value: function parse(context, start) {
                            this.context = context;
                            var offset = this.parseName(start + 1);
                            offset = this.parseParameters(offset);
                            offset = this.parseComment(offset);
                            this.range = new _Range.default(start, offset);
                            return offset;
                        }
                    }, {
                        key: "parameters",
                        get: function get() {
                            var raw = this.rawValue;
                            return raw ? raw.trim().split(/[ \t]+/) : [];
                        }
                    }]);
                return Directive;
            }(_Node2.default);
            exports.default = Directive;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/Document.js": 
        /*!********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/Document.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));
            var _Collection = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/cst/Collection.js");
            var _Comment = _interopRequireDefault(__webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js"));
            var _Directive = _interopRequireDefault(__webpack_require__(/*! ./Directive */ "./node_modules/yaml/browser/dist/cst/Directive.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var Document = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Document, _Node);
                (0, _createClass2.default)(Document, null, [{
                        key: "startCommentOrEndBlankLine",
                        value: function startCommentOrEndBlankLine(src, start) {
                            var offset = _Node2.default.endOfWhiteSpace(src, start);
                            var ch = src[offset];
                            return ch === '#' || ch === '\n' ? offset : start;
                        }
                    }]);
                function Document() {
                    var _this;
                    (0, _classCallCheck2.default)(this, Document);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Document).call(this, _constants.Type.DOCUMENT));
                    _this.directives = null;
                    _this.contents = null;
                    _this.directivesEndMarker = null;
                    _this.documentEndMarker = null;
                    return _this;
                }
                (0, _createClass2.default)(Document, [{
                        key: "parseDirectives",
                        value: function parseDirectives(start) {
                            var src = this.context.src;
                            this.directives = [];
                            var atLineStart = true;
                            var hasDirectives = false;
                            var offset = start;
                            while (!_Node2.default.atDocumentBoundary(src, offset, _constants.Char.DIRECTIVES_END)) {
                                offset = Document.startCommentOrEndBlankLine(src, offset);
                                switch (src[offset]) {
                                    case '\n':
                                        if (atLineStart) {
                                            var blankLine = new _BlankLine.default();
                                            offset = blankLine.parse({
                                                src: src
                                            }, offset);
                                            if (offset < src.length) {
                                                this.directives.push(blankLine);
                                            }
                                        }
                                        else {
                                            offset += 1;
                                            atLineStart = true;
                                        }
                                        break;
                                    case '#':
                                        {
                                            var comment = new _Comment.default();
                                            offset = comment.parse({
                                                src: src
                                            }, offset);
                                            this.directives.push(comment);
                                            atLineStart = false;
                                        }
                                        break;
                                    case '%':
                                        {
                                            var directive = new _Directive.default();
                                            offset = directive.parse({
                                                parent: this,
                                                src: src
                                            }, offset);
                                            this.directives.push(directive);
                                            hasDirectives = true;
                                            atLineStart = false;
                                        }
                                        break;
                                    default:
                                        if (hasDirectives) {
                                            this.error = new _errors.YAMLSemanticError(this, 'Missing directives-end indicator line');
                                        }
                                        else if (this.directives.length > 0) {
                                            this.contents = this.directives;
                                            this.directives = [];
                                        }
                                        return offset;
                                }
                            }
                            if (src[offset]) {
                                this.directivesEndMarker = new _Range.default(offset, offset + 3);
                                return offset + 3;
                            }
                            if (hasDirectives) {
                                this.error = new _errors.YAMLSemanticError(this, 'Missing directives-end indicator line');
                            }
                            else if (this.directives.length > 0) {
                                this.contents = this.directives;
                                this.directives = [];
                            }
                            return offset;
                        }
                    }, {
                        key: "parseContents",
                        value: function parseContents(start) {
                            var _this$context = this.context, parseNode = _this$context.parseNode, src = _this$context.src;
                            if (!this.contents)
                                this.contents = [];
                            var lineStart = start;
                            while (src[lineStart - 1] === '-') {
                                lineStart -= 1;
                            }
                            var offset = _Node2.default.endOfWhiteSpace(src, start);
                            var atLineStart = lineStart === start;
                            this.valueRange = new _Range.default(offset);
                            while (!_Node2.default.atDocumentBoundary(src, offset, _constants.Char.DOCUMENT_END)) {
                                switch (src[offset]) {
                                    case '\n':
                                        if (atLineStart) {
                                            var blankLine = new _BlankLine.default();
                                            offset = blankLine.parse({
                                                src: src
                                            }, offset);
                                            if (offset < src.length) {
                                                this.contents.push(blankLine);
                                            }
                                        }
                                        else {
                                            offset += 1;
                                            atLineStart = true;
                                        }
                                        lineStart = offset;
                                        break;
                                    case '#':
                                        {
                                            var comment = new _Comment.default();
                                            offset = comment.parse({
                                                src: src
                                            }, offset);
                                            this.contents.push(comment);
                                            atLineStart = false;
                                        }
                                        break;
                                    default:
                                        {
                                            var iEnd = _Node2.default.endOfIndent(src, offset);
                                            var context = {
                                                atLineStart: atLineStart,
                                                indent: -1,
                                                inFlow: false,
                                                inCollection: false,
                                                lineStart: lineStart,
                                                parent: this
                                            };
                                            var node = parseNode(context, iEnd);
                                            if (!node)
                                                return this.valueRange.end = iEnd; // at next document start
                                            this.contents.push(node);
                                            offset = node.range.end;
                                            atLineStart = false;
                                            var ec = (0, _Collection.grabCollectionEndComments)(node);
                                            if (ec)
                                                Array.prototype.push.apply(this.contents, ec);
                                        }
                                }
                                offset = Document.startCommentOrEndBlankLine(src, offset);
                            }
                            this.valueRange.end = offset;
                            if (src[offset]) {
                                this.documentEndMarker = new _Range.default(offset, offset + 3);
                                offset += 3;
                                if (src[offset]) {
                                    offset = _Node2.default.endOfWhiteSpace(src, offset);
                                    if (src[offset] === '#') {
                                        var _comment = new _Comment.default();
                                        offset = _comment.parse({
                                            src: src
                                        }, offset);
                                        this.contents.push(_comment);
                                    }
                                    switch (src[offset]) {
                                        case '\n':
                                            offset += 1;
                                            break;
                                        case undefined:
                                            break;
                                        default:
                                            this.error = new _errors.YAMLSyntaxError(this, 'Document end marker line cannot have a non-comment suffix');
                                    }
                                }
                            }
                            return offset;
                        }
                        /**
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this
                         */
                    }, {
                        key: "parse",
                        value: function parse(context, start) {
                            context.root = this;
                            this.context = context;
                            var src = context.src;
                            var offset = src.charCodeAt(start) === 0xfeff ? start + 1 : start; // skip BOM
                            offset = this.parseDirectives(offset);
                            offset = this.parseContents(offset);
                            return offset;
                        }
                    }, {
                        key: "setOrigRanges",
                        value: function setOrigRanges(cr, offset) {
                            offset = (0, _get2.default)((0, _getPrototypeOf2.default)(Document.prototype), "setOrigRanges", this).call(this, cr, offset);
                            this.directives.forEach(function (node) {
                                offset = node.setOrigRanges(cr, offset);
                            });
                            if (this.directivesEndMarker)
                                offset = this.directivesEndMarker.setOrigRange(cr, offset);
                            this.contents.forEach(function (node) {
                                offset = node.setOrigRanges(cr, offset);
                            });
                            if (this.documentEndMarker)
                                offset = this.documentEndMarker.setOrigRange(cr, offset);
                            return offset;
                        }
                    }, {
                        key: "toString",
                        value: function toString() {
                            var contents = this.contents, directives = this.directives, value = this.value;
                            if (value != null)
                                return value;
                            var str = directives.join('');
                            if (contents.length > 0) {
                                if (directives.length > 0 || contents[0].type === _constants.Type.COMMENT)
                                    str += '---\n';
                                str += contents.join('');
                            }
                            if (str[str.length - 1] !== '\n')
                                str += '\n';
                            return str;
                        }
                    }]);
                return Document;
            }(_Node2.default);
            exports.default = Document;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/FlowCollection.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/FlowCollection.js ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));
            var _Comment = _interopRequireDefault(__webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var FlowCollection = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(FlowCollection, _Node);
                function FlowCollection(type, props) {
                    var _this;
                    (0, _classCallCheck2.default)(this, FlowCollection);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FlowCollection).call(this, type, props));
                    _this.items = null;
                    return _this;
                }
                (0, _createClass2.default)(FlowCollection, [{
                        key: "prevNodeIsJsonLike",
                        value: function prevNodeIsJsonLike() {
                            var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.items.length;
                            var node = this.items[idx - 1];
                            return !!node && (node.jsonLike || node.type === _constants.Type.COMMENT && this.nodeIsJsonLike(idx - 1));
                        }
                        /**
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this
                         */
                    }, {
                        key: "parse",
                        value: function parse(context, start) {
                            this.context = context;
                            var parseNode = context.parseNode, src = context.src;
                            var indent = context.indent, lineStart = context.lineStart;
                            var char = src[start]; // { or [
                            this.items = [{
                                    char: char,
                                    offset: start
                                }];
                            var offset = _Node2.default.endOfWhiteSpace(src, start + 1);
                            char = src[offset];
                            while (char && char !== ']' && char !== '}') {
                                switch (char) {
                                    case '\n':
                                        {
                                            lineStart = offset + 1;
                                            var wsEnd = _Node2.default.endOfWhiteSpace(src, lineStart);
                                            if (src[wsEnd] === '\n') {
                                                var blankLine = new _BlankLine.default();
                                                lineStart = blankLine.parse({
                                                    src: src
                                                }, lineStart);
                                                this.items.push(blankLine);
                                            }
                                            offset = _Node2.default.endOfIndent(src, lineStart);
                                            if (offset <= lineStart + indent) {
                                                char = src[offset];
                                                if (offset < lineStart + indent || char !== ']' && char !== '}') {
                                                    var msg = 'Insufficient indentation in flow collection';
                                                    this.error = new _errors.YAMLSemanticError(this, msg);
                                                }
                                            }
                                        }
                                        break;
                                    case ',':
                                        {
                                            this.items.push({
                                                char: char,
                                                offset: offset
                                            });
                                            offset += 1;
                                        }
                                        break;
                                    case '#':
                                        {
                                            var comment = new _Comment.default();
                                            offset = comment.parse({
                                                src: src
                                            }, offset);
                                            this.items.push(comment);
                                        }
                                        break;
                                    case '?':
                                    case ':':
                                        {
                                            var next = src[offset + 1];
                                            if (next === '\n' || next === '\t' || next === ' ' || next === ',' || // in-flow : after JSON-like key does not need to be followed by whitespace
                                                char === ':' && this.prevNodeIsJsonLike()) {
                                                this.items.push({
                                                    char: char,
                                                    offset: offset
                                                });
                                                offset += 1;
                                                break;
                                            }
                                        }
                                    // fallthrough
                                    default:
                                        {
                                            var node = parseNode({
                                                atLineStart: false,
                                                inCollection: false,
                                                inFlow: true,
                                                indent: -1,
                                                lineStart: lineStart,
                                                parent: this
                                            }, offset);
                                            if (!node) {
                                                // at next document start
                                                this.valueRange = new _Range.default(start, offset);
                                                return offset;
                                            }
                                            this.items.push(node);
                                            offset = _Node2.default.normalizeOffset(src, node.range.end);
                                        }
                                }
                                offset = _Node2.default.endOfWhiteSpace(src, offset);
                                char = src[offset];
                            }
                            this.valueRange = new _Range.default(start, offset + 1);
                            if (char) {
                                this.items.push({
                                    char: char,
                                    offset: offset
                                });
                                offset = _Node2.default.endOfWhiteSpace(src, offset + 1);
                                offset = this.parseComment(offset);
                            }
                            return offset;
                        }
                    }, {
                        key: "setOrigRanges",
                        value: function setOrigRanges(cr, offset) {
                            offset = (0, _get2.default)((0, _getPrototypeOf2.default)(FlowCollection.prototype), "setOrigRanges", this).call(this, cr, offset);
                            this.items.forEach(function (node) {
                                if (node instanceof _Node2.default) {
                                    offset = node.setOrigRanges(cr, offset);
                                }
                                else if (cr.length === 0) {
                                    node.origOffset = node.offset;
                                }
                                else {
                                    var i = offset;
                                    while (i < cr.length) {
                                        if (cr[i] > node.offset)
                                            break;
                                        else
                                            ++i;
                                    }
                                    node.origOffset = node.offset + i;
                                    offset = i;
                                }
                            });
                            return offset;
                        }
                    }, {
                        key: "toString",
                        value: function toString() {
                            var src = this.context.src, items = this.items, range = this.range, value = this.value;
                            if (value != null)
                                return value;
                            var nodes = items.filter(function (item) {
                                return item instanceof _Node2.default;
                            });
                            var str = '';
                            var prevEnd = range.start;
                            nodes.forEach(function (node) {
                                var prefix = src.slice(prevEnd, node.range.start);
                                prevEnd = node.range.end;
                                str += prefix + String(node);
                                if (str[str.length - 1] === '\n' && src[prevEnd - 1] !== '\n' && src[prevEnd] === '\n') {
                                    // Comment range does not include the terminal newline, but its
                                    // stringified value does. Without this fix, newlines at comment ends
                                    // get duplicated.
                                    prevEnd += 1;
                                }
                            });
                            str += src.slice(prevEnd, range.end);
                            return _Node2.default.addStringTerminator(src, range.end, str);
                        }
                    }]);
                return FlowCollection;
            }(_Node2.default);
            exports.default = FlowCollection;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/Node.js": 
        /*!****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/Node.js ***!
          \****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _sourceUtils = __webpack_require__(/*! ./source-utils */ "./node_modules/yaml/browser/dist/cst/source-utils.js");
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            /** Root class of all nodes */
            var Node = 
            /*#__PURE__*/
            function () {
                (0, _createClass2.default)(Node, null, [{
                        key: "addStringTerminator",
                        value: function addStringTerminator(src, offset, str) {
                            if (str[str.length - 1] === '\n')
                                return str;
                            var next = Node.endOfWhiteSpace(src, offset);
                            return next >= src.length || src[next] === '\n' ? str + '\n' : str;
                        } // ^(---|...)
                    }, {
                        key: "atDocumentBoundary",
                        value: function atDocumentBoundary(src, offset, sep) {
                            var ch0 = src[offset];
                            if (!ch0)
                                return true;
                            var prev = src[offset - 1];
                            if (prev && prev !== '\n')
                                return false;
                            if (sep) {
                                if (ch0 !== sep)
                                    return false;
                            }
                            else {
                                if (ch0 !== _constants.Char.DIRECTIVES_END && ch0 !== _constants.Char.DOCUMENT_END)
                                    return false;
                            }
                            var ch1 = src[offset + 1];
                            var ch2 = src[offset + 2];
                            if (ch1 !== ch0 || ch2 !== ch0)
                                return false;
                            var ch3 = src[offset + 3];
                            return !ch3 || ch3 === '\n' || ch3 === '\t' || ch3 === ' ';
                        }
                    }, {
                        key: "endOfIdentifier",
                        value: function endOfIdentifier(src, offset) {
                            var ch = src[offset];
                            var isVerbatim = ch === '<';
                            var notOk = isVerbatim ? ['\n', '\t', ' ', '>'] : ['\n', '\t', ' ', '[', ']', '{', '}', ','];
                            while (ch && notOk.indexOf(ch) === -1) {
                                ch = src[offset += 1];
                            }
                            if (isVerbatim && ch === '>')
                                offset += 1;
                            return offset;
                        }
                    }, {
                        key: "endOfIndent",
                        value: function endOfIndent(src, offset) {
                            var ch = src[offset];
                            while (ch === ' ') {
                                ch = src[offset += 1];
                            }
                            return offset;
                        }
                    }, {
                        key: "endOfLine",
                        value: function endOfLine(src, offset) {
                            var ch = src[offset];
                            while (ch && ch !== '\n') {
                                ch = src[offset += 1];
                            }
                            return offset;
                        }
                    }, {
                        key: "endOfWhiteSpace",
                        value: function endOfWhiteSpace(src, offset) {
                            var ch = src[offset];
                            while (ch === '\t' || ch === ' ') {
                                ch = src[offset += 1];
                            }
                            return offset;
                        }
                    }, {
                        key: "startOfLine",
                        value: function startOfLine(src, offset) {
                            var ch = src[offset - 1];
                            if (ch === '\n')
                                return offset;
                            while (ch && ch !== '\n') {
                                ch = src[offset -= 1];
                            }
                            return offset + 1;
                        }
                        /**
                         * End of indentation, or null if the line's indent level is not more
                         * than `indent`
                         *
                         * @param {string} src
                         * @param {number} indent
                         * @param {number} lineStart
                         * @returns {?number}
                         */
                    }, {
                        key: "endOfBlockIndent",
                        value: function endOfBlockIndent(src, indent, lineStart) {
                            var inEnd = Node.endOfIndent(src, lineStart);
                            if (inEnd > lineStart + indent) {
                                return inEnd;
                            }
                            else {
                                var wsEnd = Node.endOfWhiteSpace(src, inEnd);
                                var ch = src[wsEnd];
                                if (!ch || ch === '\n')
                                    return wsEnd;
                            }
                            return null;
                        }
                    }, {
                        key: "atBlank",
                        value: function atBlank(src, offset, endAsBlank) {
                            var ch = src[offset];
                            return ch === '\n' || ch === '\t' || ch === ' ' || endAsBlank && !ch;
                        }
                    }, {
                        key: "atCollectionItem",
                        value: function atCollectionItem(src, offset) {
                            var ch = src[offset];
                            return (ch === '?' || ch === ':' || ch === '-') && Node.atBlank(src, offset + 1, true);
                        }
                    }, {
                        key: "nextNodeIsIndented",
                        value: function nextNodeIsIndented(ch, indentDiff, indicatorAsIndent) {
                            if (!ch || indentDiff < 0)
                                return false;
                            if (indentDiff > 0)
                                return true;
                            return indicatorAsIndent && ch === '-';
                        } // should be at line or string end, or at next non-whitespace char
                    }, {
                        key: "normalizeOffset",
                        value: function normalizeOffset(src, offset) {
                            var ch = src[offset];
                            return !ch ? offset : ch !== '\n' && src[offset - 1] === '\n' ? offset - 1 : Node.endOfWhiteSpace(src, offset);
                        } // fold single newline into space, multiple newlines to N - 1 newlines
                        // presumes src[offset] === '\n'
                    }, {
                        key: "foldNewline",
                        value: function foldNewline(src, offset, indent) {
                            var inCount = 0;
                            var error = false;
                            var fold = '';
                            var ch = src[offset + 1];
                            while (ch === ' ' || ch === '\t' || ch === '\n') {
                                switch (ch) {
                                    case '\n':
                                        inCount = 0;
                                        offset += 1;
                                        fold += '\n';
                                        break;
                                    case '\t':
                                        if (inCount <= indent)
                                            error = true;
                                        offset = Node.endOfWhiteSpace(src, offset + 2) - 1;
                                        break;
                                    case ' ':
                                        inCount += 1;
                                        offset += 1;
                                        break;
                                }
                                ch = src[offset + 1];
                            }
                            if (!fold)
                                fold = ' ';
                            if (ch && inCount <= indent)
                                error = true;
                            return {
                                fold: fold,
                                offset: offset,
                                error: error
                            };
                        }
                    }]);
                function Node(type, props, context) {
                    (0, _classCallCheck2.default)(this, Node);
                    Object.defineProperty(this, 'context', {
                        value: context || null,
                        writable: true
                    });
                    this.error = null;
                    this.range = null;
                    this.valueRange = null;
                    this.props = props || [];
                    this.type = type;
                    this.value = null;
                }
                (0, _createClass2.default)(Node, [{
                        key: "getPropValue",
                        value: function getPropValue(idx, key, skipKey) {
                            if (!this.context)
                                return null;
                            var src = this.context.src;
                            var prop = this.props[idx];
                            return prop && src[prop.start] === key ? src.slice(prop.start + (skipKey ? 1 : 0), prop.end) : null;
                        }
                    }, {
                        key: "commentHasRequiredWhitespace",
                        value: function commentHasRequiredWhitespace(start) {
                            var src = this.context.src;
                            if (this.header && start === this.header.end)
                                return false;
                            if (!this.valueRange)
                                return false;
                            var end = this.valueRange.end;
                            return start !== end || Node.atBlank(src, end - 1);
                        }
                    }, {
                        key: "parseComment",
                        value: function parseComment(start) {
                            var src = this.context.src;
                            if (src[start] === _constants.Char.COMMENT) {
                                var end = Node.endOfLine(src, start + 1);
                                var commentRange = new _Range.default(start, end);
                                this.props.push(commentRange);
                                return end;
                            }
                            return start;
                        }
                        /**
                         * Populates the `origStart` and `origEnd` values of all ranges for this
                         * node. Extended by child classes to handle descendant nodes.
                         *
                         * @param {number[]} cr - Positions of dropped CR characters
                         * @param {number} offset - Starting index of `cr` from the last call
                         * @returns {number} - The next offset, matching the one found for `origStart`
                         */
                    }, {
                        key: "setOrigRanges",
                        value: function setOrigRanges(cr, offset) {
                            if (this.range)
                                offset = this.range.setOrigRange(cr, offset);
                            if (this.valueRange)
                                this.valueRange.setOrigRange(cr, offset);
                            this.props.forEach(function (prop) {
                                return prop.setOrigRange(cr, offset);
                            });
                            return offset;
                        }
                    }, {
                        key: "toString",
                        value: function toString() {
                            var src = this.context.src, range = this.range, value = this.value;
                            if (value != null)
                                return value;
                            var str = src.slice(range.start, range.end);
                            return Node.addStringTerminator(src, range.end, str);
                        }
                    }, {
                        key: "anchor",
                        get: function get() {
                            for (var i = 0; i < this.props.length; ++i) {
                                var anchor = this.getPropValue(i, _constants.Char.ANCHOR, true);
                                if (anchor != null)
                                    return anchor;
                            }
                            return null;
                        }
                    }, {
                        key: "comment",
                        get: function get() {
                            var comments = [];
                            for (var i = 0; i < this.props.length; ++i) {
                                var comment = this.getPropValue(i, _constants.Char.COMMENT, true);
                                if (comment != null)
                                    comments.push(comment);
                            }
                            return comments.length > 0 ? comments.join('\n') : null;
                        }
                    }, {
                        key: "hasComment",
                        get: function get() {
                            if (this.context) {
                                var src = this.context.src;
                                for (var i = 0; i < this.props.length; ++i) {
                                    if (src[this.props[i].start] === _constants.Char.COMMENT)
                                        return true;
                                }
                            }
                            return false;
                        }
                    }, {
                        key: "hasProps",
                        get: function get() {
                            if (this.context) {
                                var src = this.context.src;
                                for (var i = 0; i < this.props.length; ++i) {
                                    if (src[this.props[i].start] !== _constants.Char.COMMENT)
                                        return true;
                                }
                            }
                            return false;
                        }
                    }, {
                        key: "includesTrailingLines",
                        get: function get() {
                            return false;
                        }
                    }, {
                        key: "jsonLike",
                        get: function get() {
                            var jsonLikeTypes = [_constants.Type.FLOW_MAP, _constants.Type.FLOW_SEQ, _constants.Type.QUOTE_DOUBLE, _constants.Type.QUOTE_SINGLE];
                            return jsonLikeTypes.indexOf(this.type) !== -1;
                        }
                    }, {
                        key: "rangeAsLinePos",
                        get: function get() {
                            if (!this.range || !this.context)
                                return undefined;
                            var start = (0, _sourceUtils.getLinePos)(this.range.start, this.context.root);
                            if (!start)
                                return undefined;
                            var end = (0, _sourceUtils.getLinePos)(this.range.end, this.context.root);
                            return {
                                start: start,
                                end: end
                            };
                        }
                    }, {
                        key: "rawValue",
                        get: function get() {
                            if (!this.valueRange || !this.context)
                                return null;
                            var _this$valueRange = this.valueRange, start = _this$valueRange.start, end = _this$valueRange.end;
                            return this.context.src.slice(start, end);
                        }
                    }, {
                        key: "tag",
                        get: function get() {
                            for (var i = 0; i < this.props.length; ++i) {
                                var tag = this.getPropValue(i, _constants.Char.TAG, false);
                                if (tag != null) {
                                    if (tag[1] === '<') {
                                        return {
                                            verbatim: tag.slice(2, -1)
                                        };
                                    }
                                    else {
                                        // eslint-disable-next-line no-unused-vars
                                        var _tag$match = tag.match(/^(.*!)([^!]*)$/), _tag$match2 = (0, _slicedToArray2.default)(_tag$match, 3), _ = _tag$match2[0], handle = _tag$match2[1], suffix = _tag$match2[2];
                                        return {
                                            handle: handle,
                                            suffix: suffix
                                        };
                                    }
                                }
                            }
                            return null;
                        }
                    }, {
                        key: "valueRangeContainsNewline",
                        get: function get() {
                            if (!this.valueRange || !this.context)
                                return false;
                            var _this$valueRange2 = this.valueRange, start = _this$valueRange2.start, end = _this$valueRange2.end;
                            var src = this.context.src;
                            for (var i = start; i < end; ++i) {
                                if (src[i] === '\n')
                                    return true;
                            }
                            return false;
                        }
                    }]);
                return Node;
            }();
            exports.default = Node;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/ParseContext.js": 
        /*!************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/ParseContext.js ***!
          \************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _Alias = _interopRequireDefault(__webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/cst/Alias.js"));
            var _BlockValue = _interopRequireDefault(__webpack_require__(/*! ./BlockValue */ "./node_modules/yaml/browser/dist/cst/BlockValue.js"));
            var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/cst/Collection.js"));
            var _CollectionItem = _interopRequireDefault(__webpack_require__(/*! ./CollectionItem */ "./node_modules/yaml/browser/dist/cst/CollectionItem.js"));
            var _FlowCollection = _interopRequireDefault(__webpack_require__(/*! ./FlowCollection */ "./node_modules/yaml/browser/dist/cst/FlowCollection.js"));
            var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _PlainValue = _interopRequireDefault(__webpack_require__(/*! ./PlainValue */ "./node_modules/yaml/browser/dist/cst/PlainValue.js"));
            var _QuoteDouble = _interopRequireDefault(__webpack_require__(/*! ./QuoteDouble */ "./node_modules/yaml/browser/dist/cst/QuoteDouble.js"));
            var _QuoteSingle = _interopRequireDefault(__webpack_require__(/*! ./QuoteSingle */ "./node_modules/yaml/browser/dist/cst/QuoteSingle.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            /**
             * @param {boolean} atLineStart - Node starts at beginning of line
             * @param {boolean} inFlow - true if currently in a flow context
             * @param {boolean} inCollection - true if currently in a collection context
             * @param {number} indent - Current level of indentation
             * @param {number} lineStart - Start of the current line
             * @param {Node} parent - The parent of the node
             * @param {string} src - Source of the YAML document
             */
            var ParseContext = 
            /*#__PURE__*/
            function () {
                (0, _createClass2.default)(ParseContext, null, [{
                        key: "parseType",
                        value: function parseType(src, offset, inFlow) {
                            switch (src[offset]) {
                                case '*':
                                    return _constants.Type.ALIAS;
                                case '>':
                                    return _constants.Type.BLOCK_FOLDED;
                                case '|':
                                    return _constants.Type.BLOCK_LITERAL;
                                case '{':
                                    return _constants.Type.FLOW_MAP;
                                case '[':
                                    return _constants.Type.FLOW_SEQ;
                                case '?':
                                    return !inFlow && _Node.default.atBlank(src, offset + 1, true) ? _constants.Type.MAP_KEY : _constants.Type.PLAIN;
                                case ':':
                                    return !inFlow && _Node.default.atBlank(src, offset + 1, true) ? _constants.Type.MAP_VALUE : _constants.Type.PLAIN;
                                case '-':
                                    return !inFlow && _Node.default.atBlank(src, offset + 1, true) ? _constants.Type.SEQ_ITEM : _constants.Type.PLAIN;
                                case '"':
                                    return _constants.Type.QUOTE_DOUBLE;
                                case "'":
                                    return _constants.Type.QUOTE_SINGLE;
                                default:
                                    return _constants.Type.PLAIN;
                            }
                        }
                    }]);
                function ParseContext() {
                    var _this = this;
                    var orig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, atLineStart = _ref.atLineStart, inCollection = _ref.inCollection, inFlow = _ref.inFlow, indent = _ref.indent, lineStart = _ref.lineStart, parent = _ref.parent;
                    (0, _classCallCheck2.default)(this, ParseContext);
                    (0, _defineProperty2.default)(this, "parseNode", function (overlay, start) {
                        if (_Node.default.atDocumentBoundary(_this.src, start))
                            return null;
                        var context = new ParseContext(_this, overlay);
                        var _context$parseProps = context.parseProps(start), props = _context$parseProps.props, type = _context$parseProps.type, valueStart = _context$parseProps.valueStart;
                        var node;
                        switch (type) {
                            case _constants.Type.ALIAS:
                                node = new _Alias.default(type, props);
                                break;
                            case _constants.Type.BLOCK_FOLDED:
                            case _constants.Type.BLOCK_LITERAL:
                                node = new _BlockValue.default(type, props);
                                break;
                            case _constants.Type.FLOW_MAP:
                            case _constants.Type.FLOW_SEQ:
                                node = new _FlowCollection.default(type, props);
                                break;
                            case _constants.Type.MAP_KEY:
                            case _constants.Type.MAP_VALUE:
                            case _constants.Type.SEQ_ITEM:
                                node = new _CollectionItem.default(type, props);
                                break;
                            case _constants.Type.COMMENT:
                            case _constants.Type.PLAIN:
                                node = new _PlainValue.default(type, props);
                                break;
                            case _constants.Type.QUOTE_DOUBLE:
                                node = new _QuoteDouble.default(type, props);
                                break;
                            case _constants.Type.QUOTE_SINGLE:
                                node = new _QuoteSingle.default(type, props);
                                break;
                            default:
                                node.error = new _errors.YAMLSyntaxError(node, "Unknown node type: ".concat(JSON.stringify(type)));
                                node.range = new _Range.default(start, start + 1);
                                return node;
                        }
                        var offset = node.parse(context, valueStart);
                        node.range = new _Range.default(start, offset);
                        if (offset <= start) {
                            node.error = new Error("Node#parse consumed no characters");
                            node.error.parseEnd = offset;
                            node.error.source = node;
                            node.range.end = start + 1;
                        }
                        if (context.nodeStartsCollection(node)) {
                            if (!node.error && !context.atLineStart && context.parent.type === _constants.Type.DOCUMENT) {
                                node.error = new _errors.YAMLSyntaxError(node, 'Block collection must not have preceding content here (e.g. directives-end indicator)');
                            }
                            var collection = new _Collection.default(node);
                            offset = collection.parse(new ParseContext(context), offset);
                            collection.range = new _Range.default(start, offset);
                            return collection;
                        }
                        return node;
                    });
                    this.atLineStart = atLineStart != null ? atLineStart : orig.atLineStart || false;
                    this.inCollection = inCollection != null ? inCollection : orig.inCollection || false;
                    this.inFlow = inFlow != null ? inFlow : orig.inFlow || false;
                    this.indent = indent != null ? indent : orig.indent;
                    this.lineStart = lineStart != null ? lineStart : orig.lineStart;
                    this.parent = parent != null ? parent : orig.parent || {};
                    this.root = orig.root;
                    this.src = orig.src;
                } // for logging
                (0, _createClass2.default)(ParseContext, [{
                        key: "nodeStartsCollection",
                        value: function nodeStartsCollection(node) {
                            var inCollection = this.inCollection, inFlow = this.inFlow, src = this.src;
                            if (inCollection || inFlow)
                                return false;
                            if (node instanceof _CollectionItem.default)
                                return true; // check for implicit key
                            var offset = node.range.end;
                            if (src[offset] === '\n' || src[offset - 1] === '\n')
                                return false;
                            offset = _Node.default.endOfWhiteSpace(src, offset);
                            return src[offset] === ':';
                        } // Anchor and tag are before type, which determines the node implementation
                        // class; hence this intermediate step.
                    }, {
                        key: "parseProps",
                        value: function parseProps(offset) {
                            var inFlow = this.inFlow, parent = this.parent, src = this.src;
                            var props = [];
                            var lineHasProps = false;
                            offset = _Node.default.endOfWhiteSpace(src, offset);
                            var ch = src[offset];
                            while (ch === _constants.Char.ANCHOR || ch === _constants.Char.COMMENT || ch === _constants.Char.TAG || ch === '\n') {
                                if (ch === '\n') {
                                    var lineStart = offset + 1;
                                    var inEnd = _Node.default.endOfIndent(src, lineStart);
                                    var indentDiff = inEnd - (lineStart + this.indent);
                                    var noIndicatorAsIndent = parent.type === _constants.Type.SEQ_ITEM && parent.context.atLineStart;
                                    if (!_Node.default.nextNodeIsIndented(src[inEnd], indentDiff, !noIndicatorAsIndent))
                                        break;
                                    this.atLineStart = true;
                                    this.lineStart = lineStart;
                                    lineHasProps = false;
                                    offset = inEnd;
                                }
                                else if (ch === _constants.Char.COMMENT) {
                                    var end = _Node.default.endOfLine(src, offset + 1);
                                    props.push(new _Range.default(offset, end));
                                    offset = end;
                                }
                                else {
                                    var _end = _Node.default.endOfIdentifier(src, offset + 1);
                                    if (ch === _constants.Char.TAG && src[_end] === ',' && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(src.slice(offset + 1, _end + 13))) {
                                        // Let's presume we're dealing with a YAML 1.0 domain tag here, rather
                                        // than an empty but 'foo.bar' private-tagged node in a flow collection
                                        // followed without whitespace by a plain string starting with a year
                                        // or date divided by something.
                                        _end = _Node.default.endOfIdentifier(src, _end + 5);
                                    }
                                    props.push(new _Range.default(offset, _end));
                                    lineHasProps = true;
                                    offset = _Node.default.endOfWhiteSpace(src, _end);
                                }
                                ch = src[offset];
                            } // '- &a : b' has an anchor on an empty node
                            if (lineHasProps && ch === ':' && _Node.default.atBlank(src, offset + 1, true))
                                offset -= 1;
                            var type = ParseContext.parseType(src, offset, inFlow);
                            return {
                                props: props,
                                type: type,
                                valueStart: offset
                            };
                        }
                        /**
                         * Parses a node from the source
                         * @param {ParseContext} overlay
                         * @param {number} start - Index of first non-whitespace character for the node
                         * @returns {?Node} - null if at a document boundary
                         */
                    }, {
                        key: "pretty",
                        get: function get() {
                            var obj = {
                                start: "".concat(this.lineStart, " + ").concat(this.indent),
                                in: [],
                                parent: this.parent.type
                            };
                            if (!this.atLineStart)
                                obj.start += ' + N';
                            if (this.inCollection)
                                obj.in.push('collection');
                            if (this.inFlow)
                                obj.in.push('flow');
                            return obj;
                        }
                    }]);
                return ParseContext;
            }();
            exports.default = ParseContext;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/PlainValue.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/PlainValue.js ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var PlainValue = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(PlainValue, _Node);
                function PlainValue() {
                    (0, _classCallCheck2.default)(this, PlainValue);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PlainValue).apply(this, arguments));
                }
                (0, _createClass2.default)(PlainValue, [{
                        key: "parseBlockValue",
                        value: function parseBlockValue(start) {
                            var _this$context = this.context, indent = _this$context.indent, inFlow = _this$context.inFlow, src = _this$context.src;
                            var offset = start;
                            var valueEnd = start;
                            for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
                                if (_Node2.default.atDocumentBoundary(src, offset + 1))
                                    break;
                                var end = _Node2.default.endOfBlockIndent(src, indent, offset + 1);
                                if (end === null || src[end] === '#')
                                    break;
                                if (src[end] === '\n') {
                                    offset = end;
                                }
                                else {
                                    valueEnd = PlainValue.endOfLine(src, end, inFlow);
                                    offset = valueEnd;
                                }
                            }
                            if (this.valueRange.isEmpty())
                                this.valueRange.start = start;
                            this.valueRange.end = valueEnd;
                            return valueEnd;
                        }
                        /**
                         * Parses a plain value from the source
                         *
                         * Accepted forms are:
                         * ```
                         * #comment
                         *
                         * first line
                         *
                         * first line #comment
                         *
                         * first line
                         * block
                         * lines
                         *
                         * #comment
                         * block
                         * lines
                         * ```
                         * where block lines are empty or have an indent level greater than `indent`.
                         *
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this scalar, may be `\n`
                         */
                    }, {
                        key: "parse",
                        value: function parse(context, start) {
                            this.context = context;
                            var inFlow = context.inFlow, src = context.src;
                            var offset = start;
                            var ch = src[offset];
                            if (ch && ch !== '#' && ch !== '\n') {
                                offset = PlainValue.endOfLine(src, start, inFlow);
                            }
                            this.valueRange = new _Range.default(start, offset);
                            offset = _Node2.default.endOfWhiteSpace(src, offset);
                            offset = this.parseComment(offset);
                            if (!this.hasComment || this.valueRange.isEmpty()) {
                                offset = this.parseBlockValue(offset);
                            }
                            return offset;
                        }
                    }, {
                        key: "strValue",
                        get: function get() {
                            if (!this.valueRange || !this.context)
                                return null;
                            var _this$valueRange = this.valueRange, start = _this$valueRange.start, end = _this$valueRange.end;
                            var src = this.context.src;
                            var ch = src[end - 1];
                            while (start < end && (ch === '\n' || ch === '\t' || ch === ' ')) {
                                ch = src[--end - 1];
                            }
                            ch = src[start];
                            while (start < end && (ch === '\n' || ch === '\t' || ch === ' ')) {
                                ch = src[++start];
                            }
                            var str = '';
                            for (var i = start; i < end; ++i) {
                                var _ch = src[i];
                                if (_ch === '\n') {
                                    var _Node$foldNewline = _Node2.default.foldNewline(src, i, -1), fold = _Node$foldNewline.fold, offset = _Node$foldNewline.offset;
                                    str += fold;
                                    i = offset;
                                }
                                else if (_ch === ' ' || _ch === '\t') {
                                    // trim trailing whitespace
                                    var wsStart = i;
                                    var next = src[i + 1];
                                    while (i < end && (next === ' ' || next === '\t')) {
                                        i += 1;
                                        next = src[i + 1];
                                    }
                                    if (next !== '\n')
                                        str += i > wsStart ? src.slice(wsStart, i + 1) : _ch;
                                }
                                else {
                                    str += _ch;
                                }
                            }
                            return str;
                        }
                    }], [{
                        key: "endOfLine",
                        value: function endOfLine(src, start, inFlow) {
                            var ch = src[start];
                            var offset = start;
                            while (ch && ch !== '\n') {
                                if (inFlow && (ch === '[' || ch === ']' || ch === '{' || ch === '}' || ch === ','))
                                    break;
                                var next = src[offset + 1];
                                if (ch === ':' && (!next || next === '\n' || next === '\t' || next === ' ' || inFlow && next === ','))
                                    break;
                                if ((ch === ' ' || ch === '\t') && next === '#')
                                    break;
                                offset += 1;
                                ch = next;
                            }
                            return offset;
                        }
                    }]);
                return PlainValue;
            }(_Node2.default);
            exports.default = PlainValue;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/QuoteDouble.js": 
        /*!***********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/QuoteDouble.js ***!
          \***********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var QuoteDouble = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(QuoteDouble, _Node);
                function QuoteDouble() {
                    (0, _classCallCheck2.default)(this, QuoteDouble);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QuoteDouble).apply(this, arguments));
                }
                (0, _createClass2.default)(QuoteDouble, [{
                        key: "parseCharCode",
                        value: function parseCharCode(offset, length, errors) {
                            var src = this.context.src;
                            var cc = src.substr(offset, length);
                            var ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
                            var code = ok ? parseInt(cc, 16) : NaN;
                            if (isNaN(code)) {
                                errors.push(new _errors.YAMLSyntaxError(this, "Invalid escape sequence ".concat(src.substr(offset - 2, length + 2))));
                                return src.substr(offset - 2, length + 2);
                            }
                            return String.fromCodePoint(code);
                        }
                        /**
                         * Parses a "double quoted" value from the source
                         *
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this scalar
                         */
                    }, {
                        key: "parse",
                        value: function parse(context, start) {
                            this.context = context;
                            var src = context.src;
                            var offset = QuoteDouble.endOfQuote(src, start + 1);
                            this.valueRange = new _Range.default(start, offset);
                            offset = _Node2.default.endOfWhiteSpace(src, offset);
                            offset = this.parseComment(offset);
                            return offset;
                        }
                    }, {
                        key: "strValue",
                        /**
                         * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
                         */
                        get: function get() {
                            if (!this.valueRange || !this.context)
                                return null;
                            var errors = [];
                            var _this$valueRange = this.valueRange, start = _this$valueRange.start, end = _this$valueRange.end;
                            var _this$context = this.context, indent = _this$context.indent, src = _this$context.src;
                            if (src[end - 1] !== '"')
                                errors.push(new _errors.YAMLSyntaxError(this, 'Missing closing "quote')); // Using String#replace is too painful with escaped newlines preceded by
                            // escaped backslashes; also, this should be faster.
                            var str = '';
                            for (var i = start + 1; i < end - 1; ++i) {
                                var ch = src[i];
                                if (ch === '\n') {
                                    if (_Node2.default.atDocumentBoundary(src, i + 1))
                                        errors.push(new _errors.YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));
                                    var _Node$foldNewline = _Node2.default.foldNewline(src, i, indent), fold = _Node$foldNewline.fold, offset = _Node$foldNewline.offset, error = _Node$foldNewline.error;
                                    str += fold;
                                    i = offset;
                                    if (error)
                                        errors.push(new _errors.YAMLSemanticError(this, 'Multi-line double-quoted string needs to be sufficiently indented'));
                                }
                                else if (ch === '\\') {
                                    i += 1;
                                    switch (src[i]) {
                                        case '0':
                                            str += '\0';
                                            break;
                                        // null character
                                        case 'a':
                                            str += '\x07';
                                            break;
                                        // bell character
                                        case 'b':
                                            str += '\b';
                                            break;
                                        // backspace
                                        case 'e':
                                            str += '\x1b';
                                            break;
                                        // escape character
                                        case 'f':
                                            str += '\f';
                                            break;
                                        // form feed
                                        case 'n':
                                            str += '\n';
                                            break;
                                        // line feed
                                        case 'r':
                                            str += '\r';
                                            break;
                                        // carriage return
                                        case 't':
                                            str += '\t';
                                            break;
                                        // horizontal tab
                                        case 'v':
                                            str += '\v';
                                            break;
                                        // vertical tab
                                        case 'N':
                                            str += "\x85";
                                            break;
                                        // Unicode next line
                                        case '_':
                                            str += "\xA0";
                                            break;
                                        // Unicode non-breaking space
                                        case 'L':
                                            str += "\u2028";
                                            break;
                                        // Unicode line separator
                                        case 'P':
                                            str += "\u2029";
                                            break;
                                        // Unicode paragraph separator
                                        case ' ':
                                            str += ' ';
                                            break;
                                        case '"':
                                            str += '"';
                                            break;
                                        case '/':
                                            str += '/';
                                            break;
                                        case '\\':
                                            str += '\\';
                                            break;
                                        case '\t':
                                            str += '\t';
                                            break;
                                        case 'x':
                                            str += this.parseCharCode(i + 1, 2, errors);
                                            i += 2;
                                            break;
                                        case 'u':
                                            str += this.parseCharCode(i + 1, 4, errors);
                                            i += 4;
                                            break;
                                        case 'U':
                                            str += this.parseCharCode(i + 1, 8, errors);
                                            i += 8;
                                            break;
                                        case '\n':
                                            // skip escaped newlines, but still trim the following line
                                            while (src[i + 1] === ' ' || src[i + 1] === '\t') {
                                                i += 1;
                                            }
                                            break;
                                        default:
                                            errors.push(new _errors.YAMLSyntaxError(this, "Invalid escape sequence ".concat(src.substr(i - 1, 2))));
                                            str += '\\' + src[i];
                                    }
                                }
                                else if (ch === ' ' || ch === '\t') {
                                    // trim trailing whitespace
                                    var wsStart = i;
                                    var next = src[i + 1];
                                    while (next === ' ' || next === '\t') {
                                        i += 1;
                                        next = src[i + 1];
                                    }
                                    if (next !== '\n')
                                        str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
                                }
                                else {
                                    str += ch;
                                }
                            }
                            return errors.length > 0 ? {
                                errors: errors,
                                str: str
                            } : str;
                        }
                    }], [{
                        key: "endOfQuote",
                        value: function endOfQuote(src, offset) {
                            var ch = src[offset];
                            while (ch && ch !== '"') {
                                offset += ch === '\\' ? 2 : 1;
                                ch = src[offset];
                            }
                            return offset + 1;
                        }
                    }]);
                return QuoteDouble;
            }(_Node2.default);
            exports.default = QuoteDouble;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/QuoteSingle.js": 
        /*!***********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/QuoteSingle.js ***!
          \***********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var QuoteSingle = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(QuoteSingle, _Node);
                function QuoteSingle() {
                    (0, _classCallCheck2.default)(this, QuoteSingle);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QuoteSingle).apply(this, arguments));
                }
                (0, _createClass2.default)(QuoteSingle, [{
                        key: "parse",
                        /**
                         * Parses a 'single quoted' value from the source
                         *
                         * @param {ParseContext} context
                         * @param {number} start - Index of first character
                         * @returns {number} - Index of the character after this scalar
                         */
                        value: function parse(context, start) {
                            this.context = context;
                            var src = context.src;
                            var offset = QuoteSingle.endOfQuote(src, start + 1);
                            this.valueRange = new _Range.default(start, offset);
                            offset = _Node2.default.endOfWhiteSpace(src, offset);
                            offset = this.parseComment(offset);
                            return offset;
                        }
                    }, {
                        key: "strValue",
                        /**
                         * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
                         */
                        get: function get() {
                            if (!this.valueRange || !this.context)
                                return null;
                            var errors = [];
                            var _this$valueRange = this.valueRange, start = _this$valueRange.start, end = _this$valueRange.end;
                            var _this$context = this.context, indent = _this$context.indent, src = _this$context.src;
                            if (src[end - 1] !== "'")
                                errors.push(new _errors.YAMLSyntaxError(this, "Missing closing 'quote"));
                            var str = '';
                            for (var i = start + 1; i < end - 1; ++i) {
                                var ch = src[i];
                                if (ch === '\n') {
                                    if (_Node2.default.atDocumentBoundary(src, i + 1))
                                        errors.push(new _errors.YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));
                                    var _Node$foldNewline = _Node2.default.foldNewline(src, i, indent), fold = _Node$foldNewline.fold, offset = _Node$foldNewline.offset, error = _Node$foldNewline.error;
                                    str += fold;
                                    i = offset;
                                    if (error)
                                        errors.push(new _errors.YAMLSemanticError(this, 'Multi-line single-quoted string needs to be sufficiently indented'));
                                }
                                else if (ch === "'") {
                                    str += ch;
                                    i += 1;
                                    if (src[i] !== "'")
                                        errors.push(new _errors.YAMLSyntaxError(this, 'Unescaped single quote? This should not happen.'));
                                }
                                else if (ch === ' ' || ch === '\t') {
                                    // trim trailing whitespace
                                    var wsStart = i;
                                    var next = src[i + 1];
                                    while (next === ' ' || next === '\t') {
                                        i += 1;
                                        next = src[i + 1];
                                    }
                                    if (next !== '\n')
                                        str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
                                }
                                else {
                                    str += ch;
                                }
                            }
                            return errors.length > 0 ? {
                                errors: errors,
                                str: str
                            } : str;
                        }
                    }], [{
                        key: "endOfQuote",
                        value: function endOfQuote(src, offset) {
                            var ch = src[offset];
                            while (ch) {
                                if (ch === "'") {
                                    if (src[offset + 1] !== "'")
                                        break;
                                    ch = src[offset += 2];
                                }
                                else {
                                    ch = src[offset += 1];
                                }
                            }
                            return offset + 1;
                        }
                    }]);
                return QuoteSingle;
            }(_Node2.default);
            exports.default = QuoteSingle;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/Range.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/Range.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var Range = 
            /*#__PURE__*/
            function () {
                (0, _createClass2.default)(Range, null, [{
                        key: "copy",
                        value: function copy(orig) {
                            return new Range(orig.start, orig.end);
                        }
                    }]);
                function Range(start, end) {
                    (0, _classCallCheck2.default)(this, Range);
                    this.start = start;
                    this.end = end || start;
                }
                (0, _createClass2.default)(Range, [{
                        key: "isEmpty",
                        value: function isEmpty() {
                            return typeof this.start !== 'number' || !this.end || this.end <= this.start;
                        }
                        /**
                         * Set `origStart` and `origEnd` to point to the original source range for
                         * this node, which may differ due to dropped CR characters.
                         *
                         * @param {number[]} cr - Positions of dropped CR characters
                         * @param {number} offset - Starting index of `cr` from the last call
                         * @returns {number} - The next offset, matching the one found for `origStart`
                         */
                    }, {
                        key: "setOrigRange",
                        value: function setOrigRange(cr, offset) {
                            var start = this.start, end = this.end;
                            if (cr.length === 0 || end <= cr[0]) {
                                this.origStart = start;
                                this.origEnd = end;
                                return offset;
                            }
                            var i = offset;
                            while (i < cr.length) {
                                if (cr[i] > start)
                                    break;
                                else
                                    ++i;
                            }
                            this.origStart = start + i;
                            var nextOffset = i;
                            while (i < cr.length) {
                                // if end was at \n, it should now be at \r
                                if (cr[i] >= end)
                                    break;
                                else
                                    ++i;
                            }
                            this.origEnd = end + i;
                            return nextOffset;
                        }
                    }]);
                return Range;
            }();
            exports.default = Range;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/parse.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/parse.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = parse;
            var _Document = _interopRequireDefault(__webpack_require__(/*! ./Document */ "./node_modules/yaml/browser/dist/cst/Document.js"));
            var _ParseContext = _interopRequireDefault(__webpack_require__(/*! ./ParseContext */ "./node_modules/yaml/browser/dist/cst/ParseContext.js"));
            // Published as 'yaml/parse-cst'
            function parse(src) {
                var cr = [];
                if (src.indexOf('\r') !== -1) {
                    src = src.replace(/\r\n?/g, function (match, offset) {
                        if (match.length > 1)
                            cr.push(offset);
                        return '\n';
                    });
                }
                var documents = [];
                var offset = 0;
                do {
                    var doc = new _Document.default();
                    var context = new _ParseContext.default({
                        src: src
                    });
                    offset = doc.parse(context, offset);
                    documents.push(doc);
                } while (offset < src.length);
                documents.setOrigRanges = function () {
                    if (cr.length === 0)
                        return false;
                    for (var i = 1; i < cr.length; ++i) {
                        cr[i] -= i;
                    }
                    var crOffset = 0;
                    for (var _i = 0; _i < documents.length; ++_i) {
                        crOffset = documents[_i].setOrigRanges(cr, crOffset);
                    }
                    cr.splice(0, cr.length);
                    return true;
                };
                documents.toString = function () {
                    return documents.join('...\n');
                };
                return documents;
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/cst/source-utils.js": 
        /*!************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/cst/source-utils.js ***!
          \************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getLinePos = getLinePos;
            exports.getLine = getLine;
            exports.getPrettyContext = getPrettyContext;
            function findLineStarts(src) {
                var ls = [0];
                var offset = src.indexOf('\n');
                while (offset !== -1) {
                    offset += 1;
                    ls.push(offset);
                    offset = src.indexOf('\n', offset);
                }
                return ls;
            }
            function getSrcInfo(cst) {
                var lineStarts, src;
                if (typeof cst === 'string') {
                    lineStarts = findLineStarts(cst);
                    src = cst;
                }
                else {
                    if (Array.isArray(cst))
                        cst = cst[0];
                    if (cst && cst.context) {
                        if (!cst.lineStarts)
                            cst.lineStarts = findLineStarts(cst.context.src);
                        lineStarts = cst.lineStarts;
                        src = cst.context.src;
                    }
                }
                return {
                    lineStarts: lineStarts,
                    src: src
                };
            }
            /**
             * @typedef {Object} LinePos - One-indexed position in the source
             * @property {number} line
             * @property {number} col
             */
            /**
             * Determine the line/col position matching a character offset.
             *
             * Accepts a source string or a CST document as the second parameter. With
             * the latter, starting indices for lines are cached in the document as
             * `lineStarts: number[]`.
             *
             * Returns a one-indexed `{ line, col }` location if found, or
             * `undefined` otherwise.
             *
             * @param {number} offset
             * @param {string|Document|Document[]} cst
             * @returns {?LinePos}
             */
            function getLinePos(offset, cst) {
                if (typeof offset !== 'number' || offset < 0)
                    return null;
                var _getSrcInfo = getSrcInfo(cst), lineStarts = _getSrcInfo.lineStarts, src = _getSrcInfo.src;
                if (!lineStarts || !src || offset > src.length)
                    return null;
                for (var i = 0; i < lineStarts.length; ++i) {
                    var start = lineStarts[i];
                    if (offset < start) {
                        return {
                            line: i,
                            col: offset - lineStarts[i - 1] + 1
                        };
                    }
                    if (offset === start)
                        return {
                            line: i + 1,
                            col: 1
                        };
                }
                var line = lineStarts.length;
                return {
                    line: line,
                    col: offset - lineStarts[line - 1] + 1
                };
            }
            /**
             * Get a specified line from the source.
             *
             * Accepts a source string or a CST document as the second parameter. With
             * the latter, starting indices for lines are cached in the document as
             * `lineStarts: number[]`.
             *
             * Returns the line as a string if found, or `null` otherwise.
             *
             * @param {number} line One-indexed line number
             * @param {string|Document|Document[]} cst
             * @returns {?string}
             */
            function getLine(line, cst) {
                var _getSrcInfo2 = getSrcInfo(cst), lineStarts = _getSrcInfo2.lineStarts, src = _getSrcInfo2.src;
                if (!lineStarts || !(line >= 1) || line > lineStarts.length)
                    return null;
                var start = lineStarts[line - 1];
                var end = lineStarts[line]; // undefined for last line; that's ok for slice()
                while (end && end > start && src[end - 1] === '\n') {
                    --end;
                }
                return src.slice(start, end);
            }
            /**
             * Pretty-print the starting line from the source indicated by the range `pos`
             *
             * Trims output to `maxWidth` chars while keeping the starting column visible,
             * using `…` at either end to indicate dropped characters.
             *
             * Returns a two-line string (or `null`) with `\n` as separator; the second line
             * will hold appropriately indented `^` marks indicating the column range.
             *
             * @param {Object} pos
             * @param {LinePos} pos.start
             * @param {LinePos} [pos.end]
             * @param {string|Document|Document[]*} cst
             * @param {number} [maxWidth=80]
             * @returns {?string}
             */
            function getPrettyContext(_ref, cst) {
                var start = _ref.start, end = _ref.end;
                var maxWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
                var src = getLine(start.line, cst);
                if (!src)
                    return null;
                var col = start.col;
                if (src.length > maxWidth) {
                    if (col <= maxWidth - 10) {
                        src = src.substr(0, maxWidth - 1) + '…';
                    }
                    else {
                        var halfWidth = Math.round(maxWidth / 2);
                        if (src.length > col + halfWidth)
                            src = src.substr(0, col + halfWidth - 1) + '…';
                        col -= src.length - maxWidth;
                        src = '…' + src.substr(1 - maxWidth);
                    }
                }
                var errLen = 1;
                var errEnd = '';
                if (end) {
                    if (end.line === start.line && col + (end.col - start.col) <= maxWidth + 1) {
                        errLen = end.col - start.col;
                    }
                    else {
                        errLen = Math.min(src.length + 1, maxWidth) - col;
                        errEnd = '…';
                    }
                }
                var offset = col > 1 ? ' '.repeat(col - 1) : '';
                var err = '^'.repeat(errLen);
                return "".concat(src, "\n").concat(offset).concat(err).concat(errEnd);
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/errors.js": 
        /*!**************************************************!*\
          !*** ./node_modules/yaml/browser/dist/errors.js ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.YAMLWarning = exports.YAMLSyntaxError = exports.YAMLSemanticError = exports.YAMLReferenceError = exports.YAMLError = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));
            var _Node = _interopRequireDefault(__webpack_require__(/*! ./cst/Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));
            var _sourceUtils = __webpack_require__(/*! ./cst/source-utils */ "./node_modules/yaml/browser/dist/cst/source-utils.js");
            var _Range = _interopRequireDefault(__webpack_require__(/*! ./cst/Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));
            var YAMLError = 
            /*#__PURE__*/
            function (_Error) {
                (0, _inherits2.default)(YAMLError, _Error);
                function YAMLError(name, source, message) {
                    var _this;
                    (0, _classCallCheck2.default)(this, YAMLError);
                    if (!message || !(source instanceof _Node.default))
                        throw new Error("Invalid arguments for new ".concat(name));
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLError).call(this));
                    _this.name = name;
                    _this.message = message;
                    _this.source = source;
                    return _this;
                }
                (0, _createClass2.default)(YAMLError, [{
                        key: "makePretty",
                        value: function makePretty() {
                            if (!this.source)
                                return;
                            this.nodeType = this.source.type;
                            var cst = this.source.context && this.source.context.root;
                            if (typeof this.offset === 'number') {
                                this.range = new _Range.default(this.offset, this.offset + 1);
                                var start = cst && (0, _sourceUtils.getLinePos)(this.offset, cst);
                                if (start) {
                                    var end = {
                                        line: start.line,
                                        col: start.col + 1
                                    };
                                    this.linePos = {
                                        start: start,
                                        end: end
                                    };
                                }
                                delete this.offset;
                            }
                            else {
                                this.range = this.source.range;
                                this.linePos = this.source.rangeAsLinePos;
                            }
                            if (this.linePos) {
                                var _this$linePos$start = this.linePos.start, line = _this$linePos$start.line, col = _this$linePos$start.col;
                                this.message += " at line ".concat(line, ", column ").concat(col);
                                var ctx = cst && (0, _sourceUtils.getPrettyContext)(this.linePos, cst);
                                if (ctx)
                                    this.message += ":\n\n".concat(ctx, "\n");
                            }
                            delete this.source;
                        }
                    }]);
                return YAMLError;
            }((0, _wrapNativeSuper2.default)(Error));
            exports.YAMLError = YAMLError;
            var YAMLReferenceError = 
            /*#__PURE__*/
            function (_YAMLError) {
                (0, _inherits2.default)(YAMLReferenceError, _YAMLError);
                function YAMLReferenceError(source, message) {
                    (0, _classCallCheck2.default)(this, YAMLReferenceError);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLReferenceError).call(this, 'YAMLReferenceError', source, message));
                }
                return YAMLReferenceError;
            }(YAMLError);
            exports.YAMLReferenceError = YAMLReferenceError;
            var YAMLSemanticError = 
            /*#__PURE__*/
            function (_YAMLError2) {
                (0, _inherits2.default)(YAMLSemanticError, _YAMLError2);
                function YAMLSemanticError(source, message) {
                    (0, _classCallCheck2.default)(this, YAMLSemanticError);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSemanticError).call(this, 'YAMLSemanticError', source, message));
                }
                return YAMLSemanticError;
            }(YAMLError);
            exports.YAMLSemanticError = YAMLSemanticError;
            var YAMLSyntaxError = 
            /*#__PURE__*/
            function (_YAMLError3) {
                (0, _inherits2.default)(YAMLSyntaxError, _YAMLError3);
                function YAMLSyntaxError(source, message) {
                    (0, _classCallCheck2.default)(this, YAMLSyntaxError);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSyntaxError).call(this, 'YAMLSyntaxError', source, message));
                }
                return YAMLSyntaxError;
            }(YAMLError);
            exports.YAMLSyntaxError = YAMLSyntaxError;
            var YAMLWarning = 
            /*#__PURE__*/
            function (_YAMLError4) {
                (0, _inherits2.default)(YAMLWarning, _YAMLError4);
                function YAMLWarning(source, message) {
                    (0, _classCallCheck2.default)(this, YAMLWarning);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLWarning).call(this, 'YAMLWarning', source, message));
                }
                return YAMLWarning;
            }(YAMLError);
            exports.YAMLWarning = YAMLWarning;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/foldFlowLines.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/foldFlowLines.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = foldFlowLines;
            exports.FOLD_QUOTED = exports.FOLD_BLOCK = exports.FOLD_FLOW = void 0;
            var FOLD_FLOW = 'flow';
            exports.FOLD_FLOW = FOLD_FLOW;
            var FOLD_BLOCK = 'block';
            exports.FOLD_BLOCK = FOLD_BLOCK;
            var FOLD_QUOTED = 'quoted'; // presumes i+1 is at the start of a line
            // returns index of last newline in more-indented block
            exports.FOLD_QUOTED = FOLD_QUOTED;
            var consumeMoreIndentedLines = function consumeMoreIndentedLines(text, i) {
                var ch = text[i + 1];
                while (ch === ' ' || ch === '\t') {
                    do {
                        ch = text[i += 1];
                    } while (ch && ch !== '\n');
                    ch = text[i + 1];
                }
                return i;
            };
            /**
             * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
             * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
             * terminated with `\n` and started with `indent`.
             *
             * @param {string} text
             * @param {string} indent
             * @param {string} [mode='flow'] `'block'` prevents more-indented lines
             *   from being folded; `'quoted'` allows for `\` escapes, including escaped
             *   newlines
             * @param {Object} options
             * @param {number} [options.indentAtStart] Accounts for leading contents on
             *   the first line, defaulting to `indent.length`
             * @param {number} [options.lineWidth=80]
             * @param {number} [options.minContentWidth=20] Allow highly indented lines to
             *   stretch the line width
             * @param {function} options.onFold Called once if the text is folded
             * @param {function} options.onFold Called once if any line of text exceeds
             *   lineWidth characters
             */
            function foldFlowLines(text, indent, mode, _ref) {
                var indentAtStart = _ref.indentAtStart, _ref$lineWidth = _ref.lineWidth, lineWidth = _ref$lineWidth === void 0 ? 80 : _ref$lineWidth, _ref$minContentWidth = _ref.minContentWidth, minContentWidth = _ref$minContentWidth === void 0 ? 20 : _ref$minContentWidth, onFold = _ref.onFold, onOverflow = _ref.onOverflow;
                if (!lineWidth || lineWidth < 0)
                    return text;
                var endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
                if (text.length <= endStep)
                    return text;
                var folds = [];
                var escapedFolds = {};
                var end = lineWidth - (typeof indentAtStart === 'number' ? indentAtStart : indent.length);
                var split = undefined;
                var prev = undefined;
                var overflow = false;
                var i = -1;
                if (mode === FOLD_BLOCK) {
                    i = consumeMoreIndentedLines(text, i);
                    if (i !== -1)
                        end = i + endStep;
                }
                for (var ch; ch = text[i += 1];) {
                    if (mode === FOLD_QUOTED && ch === '\\') {
                        switch (text[i + 1]) {
                            case 'x':
                                i += 3;
                                break;
                            case 'u':
                                i += 5;
                                break;
                            case 'U':
                                i += 9;
                                break;
                            default:
                                i += 1;
                        }
                    }
                    if (ch === '\n') {
                        if (mode === FOLD_BLOCK)
                            i = consumeMoreIndentedLines(text, i);
                        end = i + endStep;
                        split = undefined;
                    }
                    else {
                        if (ch === ' ' && prev && prev !== ' ' && prev !== '\n' && prev !== '\t') {
                            // space surrounded by non-space can be replaced with newline + indent
                            var next = text[i + 1];
                            if (next && next !== ' ' && next !== '\n' && next !== '\t')
                                split = i;
                        }
                        if (i >= end) {
                            if (split) {
                                folds.push(split);
                                end = split + endStep;
                                split = undefined;
                            }
                            else if (mode === FOLD_QUOTED) {
                                // white-space collected at end may stretch past lineWidth
                                while (prev === ' ' || prev === '\t') {
                                    prev = ch;
                                    ch = text[i += 1];
                                    overflow = true;
                                } // i - 2 accounts for not-dropped last char + newline-escaping \
                                folds.push(i - 2);
                                escapedFolds[i - 2] = true;
                                end = i - 2 + endStep;
                                split = undefined;
                            }
                            else {
                                overflow = true;
                            }
                        }
                    }
                    prev = ch;
                }
                if (overflow && onOverflow)
                    onOverflow();
                if (folds.length === 0)
                    return text;
                if (onFold)
                    onFold();
                var res = text.slice(0, folds[0]);
                for (var _i = 0; _i < folds.length; ++_i) {
                    var fold = folds[_i];
                    var _end = folds[_i + 1] || text.length;
                    if (mode === FOLD_QUOTED && escapedFolds[fold])
                        res += "".concat(text[fold], "\\");
                    res += "\n".concat(indent).concat(text.slice(fold + 1, _end));
                }
                return res;
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/index.js": 
        /*!*************************************************!*\
          !*** ./node_modules/yaml/browser/dist/index.js ***!
          \*************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _parse = _interopRequireDefault(__webpack_require__(/*! ./cst/parse */ "./node_modules/yaml/browser/dist/cst/parse.js"));
            var _Document = _interopRequireDefault(__webpack_require__(/*! ./Document */ "./node_modules/yaml/browser/dist/Document.js"));
            var _errors = __webpack_require__(/*! ./errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _schema = _interopRequireDefault(__webpack_require__(/*! ./schema */ "./node_modules/yaml/browser/dist/schema/index.js"));
            var _warnings = __webpack_require__(/*! ./warnings */ "./node_modules/yaml/browser/dist/warnings.js");
            var defaultOptions = {
                anchorPrefix: 'a',
                customTags: null,
                keepCstNodes: false,
                keepNodeTypes: true,
                keepBlobsInJSON: true,
                mapAsMap: false,
                maxAliasCount: 100,
                prettyErrors: false,
                // TODO Set true in v2
                simpleKeys: false,
                version: '1.2'
            };
            function createNode(value) {
                var wrapScalars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                var tag = arguments.length > 2 ? arguments[2] : undefined;
                if (tag === undefined && typeof wrapScalars === 'string') {
                    tag = wrapScalars;
                    wrapScalars = true;
                }
                var options = Object.assign({}, _Document.default.defaults[defaultOptions.version], defaultOptions);
                var schema = new _schema.default(options);
                return schema.createNode(value, wrapScalars, tag);
            }
            var Document = 
            /*#__PURE__*/
            function (_YAMLDocument) {
                (0, _inherits2.default)(Document, _YAMLDocument);
                function Document(options) {
                    (0, _classCallCheck2.default)(this, Document);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Document).call(this, Object.assign({}, defaultOptions, options)));
                }
                return Document;
            }(_Document.default);
            function parseAllDocuments(src, options) {
                var stream = [];
                var prev;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = (0, _parse.default)(src)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var cstDoc = _step.value;
                        var doc = new Document(options);
                        doc.parse(cstDoc, prev);
                        stream.push(doc);
                        prev = doc;
                    }
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return stream;
            }
            function parseDocument(src, options) {
                var cst = (0, _parse.default)(src);
                var doc = new Document(options).parse(cst[0]);
                if (cst.length > 1) {
                    var errMsg = 'Source contains multiple documents; please use YAML.parseAllDocuments()';
                    doc.errors.unshift(new _errors.YAMLSemanticError(cst[1], errMsg));
                }
                return doc;
            }
            function parse(src, options) {
                var doc = parseDocument(src, options);
                doc.warnings.forEach(function (warning) {
                    return (0, _warnings.warn)(warning);
                });
                if (doc.errors.length > 0)
                    throw doc.errors[0];
                return doc.toJSON();
            }
            function stringify(value, options) {
                var doc = new Document(options);
                doc.contents = value;
                return String(doc);
            }
            var _default = {
                createNode: createNode,
                defaultOptions: defaultOptions,
                Document: Document,
                parse: parse,
                parseAllDocuments: parseAllDocuments,
                parseCST: _parse.default,
                parseDocument: parseDocument,
                stringify: stringify
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/listTagNames.js": 
        /*!********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/listTagNames.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _Collection = _interopRequireDefault(__webpack_require__(/*! ./schema/Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ./schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var visit = function visit(node, tags) {
                if (node && (0, _typeof2.default)(node) === 'object') {
                    var tag = node.tag;
                    if (node instanceof _Collection.default) {
                        if (tag)
                            tags[tag] = true;
                        node.items.forEach(function (n) {
                            return visit(n, tags);
                        });
                    }
                    else if (node instanceof _Pair.default) {
                        visit(node.key, tags);
                        visit(node.value, tags);
                    }
                    else if (node instanceof _Scalar.default) {
                        if (tag)
                            tags[tag] = true;
                    }
                }
                return tags;
            };
            var _default = function _default(node) {
                return Object.keys(visit(node, {}));
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Alias.js": 
        /*!********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Alias.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));
            var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var getAliasCount = function getAliasCount(node, anchors) {
                if (node instanceof Alias) {
                    var anchor = anchors.find(function (a) {
                        return a.node === node.source;
                    });
                    return anchor.count * anchor.aliasCount;
                }
                else if (node instanceof _Collection.default) {
                    var count = 0;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = node.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;
                            var c = getAliasCount(item, anchors);
                            if (c > count)
                                count = c;
                        }
                    }
                    catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    }
                    finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        }
                        finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return count;
                }
                else if (node instanceof _Pair.default) {
                    var kc = getAliasCount(node.key, anchors);
                    var vc = getAliasCount(node.value, anchors);
                    return Math.max(kc, vc);
                }
                return 1;
            };
            var Alias = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Alias, _Node);
                (0, _createClass2.default)(Alias, null, [{
                        key: "stringify",
                        value: function stringify(_ref, _ref2) {
                            var range = _ref.range, source = _ref.source;
                            var anchors = _ref2.anchors, doc = _ref2.doc, implicitKey = _ref2.implicitKey, inStringifyKey = _ref2.inStringifyKey;
                            var anchor = Object.keys(anchors).find(function (a) {
                                return anchors[a] === source;
                            });
                            if (!anchor && inStringifyKey)
                                anchor = doc.anchors.getName(source) || doc.anchors.newName();
                            if (anchor)
                                return "*".concat(anchor).concat(implicitKey ? ' ' : '');
                            var msg = doc.anchors.getName(source) ? 'Alias node must be after source node' : 'Source node not found for alias node';
                            throw new Error("".concat(msg, " [").concat(range, "]"));
                        }
                    }]);
                function Alias(source) {
                    var _this;
                    (0, _classCallCheck2.default)(this, Alias);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Alias).call(this));
                    _this.source = source;
                    _this.type = _constants.Type.ALIAS;
                    return _this;
                }
                (0, _createClass2.default)(Alias, [{
                        key: "toJSON",
                        value: function toJSON(arg, ctx) {
                            var _this2 = this;
                            if (!ctx)
                                return (0, _toJSON2.default)(this.source, arg, ctx);
                            var anchors = ctx.anchors, maxAliasCount = ctx.maxAliasCount;
                            var anchor = anchors.find(function (a) {
                                return a.node === _this2.source;
                            });
                            if (!anchor || anchor.res === undefined) {
                                var msg = 'This should not happen: Alias anchor was not resolved?';
                                if (this.cstNode)
                                    throw new _errors.YAMLReferenceError(this.cstNode, msg);
                                else
                                    throw new ReferenceError(msg);
                            }
                            if (maxAliasCount >= 0) {
                                anchor.count += 1;
                                if (anchor.aliasCount === 0)
                                    anchor.aliasCount = getAliasCount(this.source, anchors);
                                if (anchor.count * anchor.aliasCount > maxAliasCount) {
                                    var _msg = 'Excessive alias count indicates a resource exhaustion attack';
                                    if (this.cstNode)
                                        throw new _errors.YAMLReferenceError(this.cstNode, _msg);
                                    else
                                        throw new ReferenceError(_msg);
                                }
                            }
                            return anchor.res;
                        } // Only called when stringifying an alias mapping key while constructing
                        // Object output.
                    }, {
                        key: "toString",
                        value: function toString(ctx) {
                            return Alias.stringify(this, ctx);
                        }
                    }, {
                        key: "tag",
                        set: function set(t) {
                            throw new Error('Alias nodes cannot have tags');
                        }
                    }]);
                return Alias;
            }(_Node2.default);
            exports.default = Alias;
            (0, _defineProperty2.default)(Alias, "default", true);
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Collection.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Collection.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports.isEmptyPath = void 0;
            var _toArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js"));
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _addComment = _interopRequireDefault(__webpack_require__(/*! ../addComment */ "./node_modules/yaml/browser/dist/addComment.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            // null, undefined, or an empty non-string iterable (e.g. [])
            var isEmptyPath = function isEmptyPath(path) {
                return path == null || (0, _typeof2.default)(path) === 'object' && path[Symbol.iterator]().next().done;
            };
            exports.isEmptyPath = isEmptyPath;
            var Collection = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Collection, _Node);
                function Collection() {
                    var _getPrototypeOf2;
                    var _this;
                    (0, _classCallCheck2.default)(this, Collection);
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }
                    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Collection)).call.apply(_getPrototypeOf2, [this].concat(args)));
                    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "items", []);
                    return _this;
                }
                (0, _createClass2.default)(Collection, [{
                        key: "addIn",
                        value: function addIn(path, value) {
                            if (isEmptyPath(path))
                                this.add(value);
                            else {
                                var _path = (0, _toArray2.default)(path), key = _path[0], rest = _path.slice(1);
                                var node = this.get(key, true);
                                if (node instanceof Collection)
                                    node.addIn(rest, value);
                                else
                                    throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
                            }
                        }
                    }, {
                        key: "deleteIn",
                        value: function deleteIn(_ref) {
                            var _ref2 = (0, _toArray2.default)(_ref), key = _ref2[0], rest = _ref2.slice(1);
                            if (rest.length === 0)
                                return this.delete(key);
                            var node = this.get(key, true);
                            if (node instanceof Collection)
                                return node.deleteIn(rest);
                            else
                                throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
                        }
                    }, {
                        key: "getIn",
                        value: function getIn(_ref3, keepScalar) {
                            var _ref4 = (0, _toArray2.default)(_ref3), key = _ref4[0], rest = _ref4.slice(1);
                            var node = this.get(key, true);
                            if (rest.length === 0)
                                return !keepScalar && node instanceof _Scalar.default ? node.value : node;
                            else
                                return node instanceof Collection ? node.getIn(rest, keepScalar) : undefined;
                        }
                    }, {
                        key: "hasAllNullValues",
                        value: function hasAllNullValues() {
                            return this.items.every(function (node) {
                                if (!(node instanceof _Pair.default))
                                    return false;
                                var n = node.value;
                                return n == null || n instanceof _Scalar.default && n.value == null && !n.commentBefore && !n.comment && !n.tag;
                            });
                        }
                    }, {
                        key: "hasIn",
                        value: function hasIn(_ref5) {
                            var _ref6 = (0, _toArray2.default)(_ref5), key = _ref6[0], rest = _ref6.slice(1);
                            if (rest.length === 0)
                                return this.has(key);
                            var node = this.get(key, true);
                            return node instanceof Collection ? node.hasIn(rest) : false;
                        }
                    }, {
                        key: "setIn",
                        value: function setIn(_ref7, value) {
                            var _ref8 = (0, _toArray2.default)(_ref7), key = _ref8[0], rest = _ref8.slice(1);
                            if (rest.length === 0) {
                                this.set(key, value);
                            }
                            else {
                                var node = this.get(key, true);
                                if (node instanceof Collection)
                                    node.setIn(rest, value);
                                else
                                    throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
                            }
                        } // overridden in implementations
                    }, {
                        key: "toJSON",
                        value: function toJSON() {
                            return null;
                        }
                    }, {
                        key: "toString",
                        value: function toString(ctx, _ref9, onComment, onChompKeep) {
                            var _this2 = this;
                            var blockItem = _ref9.blockItem, flowChars = _ref9.flowChars, isMap = _ref9.isMap, itemIndent = _ref9.itemIndent;
                            var _ctx = ctx, doc = _ctx.doc, indent = _ctx.indent;
                            var inFlow = this.type && this.type.substr(0, 4) === 'FLOW' || ctx.inFlow;
                            if (inFlow)
                                itemIndent += '  ';
                            var allNullValues = isMap && this.hasAllNullValues();
                            ctx = Object.assign({}, ctx, {
                                allNullValues: allNullValues,
                                indent: itemIndent,
                                inFlow: inFlow,
                                type: null
                            });
                            var chompKeep = false;
                            var hasItemWithNewLine = false;
                            var nodes = this.items.reduce(function (nodes, item, i) {
                                var comment;
                                if (item) {
                                    if (!chompKeep && item.spaceBefore)
                                        nodes.push({
                                            type: 'comment',
                                            str: ''
                                        });
                                    if (item.commentBefore)
                                        item.commentBefore.match(/^.*$/gm).forEach(function (line) {
                                            nodes.push({
                                                type: 'comment',
                                                str: "#".concat(line)
                                            });
                                        });
                                    if (item.comment)
                                        comment = item.comment;
                                    if (inFlow && (!chompKeep && item.spaceBefore || item.commentBefore || item.comment || item.key && (item.key.commentBefore || item.key.comment) || item.value && (item.value.commentBefore || item.value.comment)))
                                        hasItemWithNewLine = true;
                                }
                                chompKeep = false;
                                var str = doc.schema.stringify(item, ctx, function () {
                                    return comment = null;
                                }, function () {
                                    return chompKeep = true;
                                });
                                if (inFlow && !hasItemWithNewLine && str.includes('\n'))
                                    hasItemWithNewLine = true;
                                if (inFlow && i < _this2.items.length - 1)
                                    str += ',';
                                str = (0, _addComment.default)(str, itemIndent, comment);
                                if (chompKeep && (comment || inFlow))
                                    chompKeep = false;
                                nodes.push({
                                    type: 'item',
                                    str: str
                                });
                                return nodes;
                            }, []);
                            var str;
                            if (nodes.length === 0) {
                                str = flowChars.start + flowChars.end;
                            }
                            else if (inFlow) {
                                var start = flowChars.start, end = flowChars.end;
                                var strings = nodes.map(function (n) {
                                    return n.str;
                                });
                                if (hasItemWithNewLine || strings.reduce(function (sum, str) {
                                    return sum + str.length + 2;
                                }, 2) > Collection.maxFlowStringSingleLineLength) {
                                    str = start;
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;
                                    try {
                                        for (var _iterator = strings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var s = _step.value;
                                            str += s ? "\n  ".concat(indent).concat(s) : '\n';
                                        }
                                    }
                                    catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    }
                                    finally {
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        }
                                        finally {
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }
                                    str += "\n".concat(indent).concat(end);
                                }
                                else {
                                    str = "".concat(start, " ").concat(strings.join(' '), " ").concat(end);
                                }
                            }
                            else {
                                var _strings = nodes.map(blockItem);
                                str = _strings.shift();
                                var _iteratorNormalCompletion2 = true;
                                var _didIteratorError2 = false;
                                var _iteratorError2 = undefined;
                                try {
                                    for (var _iterator2 = _strings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var _s = _step2.value;
                                        str += _s ? "\n".concat(indent).concat(_s) : '\n';
                                    }
                                }
                                catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                }
                                finally {
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    }
                                    finally {
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                            }
                            if (this.comment) {
                                str += '\n' + this.comment.replace(/^/gm, "".concat(indent, "#"));
                                if (onComment)
                                    onComment();
                            }
                            else if (chompKeep && onChompKeep)
                                onChompKeep();
                            return str;
                        }
                    }]);
                return Collection;
            }(_Node2.default);
            exports.default = Collection;
            (0, _defineProperty2.default)(Collection, "maxFlowStringSingleLineLength", 60);
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Map.js": 
        /*!******************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Map.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.findPair = findPair;
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _Collection2 = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            function findPair(items, key) {
                var k = key instanceof _Scalar.default ? key.value : key;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var it = _step.value;
                        if (it instanceof _Pair.default) {
                            if (it.key === key || it.key === k)
                                return it;
                            if (it.key && it.key.value === k)
                                return it;
                        }
                    }
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return undefined;
            }
            var YAMLMap = 
            /*#__PURE__*/
            function (_Collection) {
                (0, _inherits2.default)(YAMLMap, _Collection);
                function YAMLMap() {
                    (0, _classCallCheck2.default)(this, YAMLMap);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLMap).apply(this, arguments));
                }
                (0, _createClass2.default)(YAMLMap, [{
                        key: "add",
                        value: function add(pair) {
                            if (!pair)
                                pair = new _Pair.default(pair);
                            else if (!(pair instanceof _Pair.default))
                                pair = new _Pair.default(pair.key || pair, pair.value);
                            var prev = findPair(this.items, pair.key);
                            if (prev)
                                throw new Error("Key ".concat(pair.key, " already set"));
                            this.items.push(pair);
                        }
                    }, {
                        key: "delete",
                        value: function _delete(key) {
                            var it = findPair(this.items, key);
                            if (!it)
                                return false;
                            var del = this.items.splice(this.items.indexOf(it), 1);
                            return del.length > 0;
                        }
                    }, {
                        key: "get",
                        value: function get(key, keepScalar) {
                            var it = findPair(this.items, key);
                            var node = it && it.value;
                            return !keepScalar && node instanceof _Scalar.default ? node.value : node;
                        }
                    }, {
                        key: "has",
                        value: function has(key) {
                            return !!findPair(this.items, key);
                        }
                    }, {
                        key: "set",
                        value: function set(key, value) {
                            var prev = findPair(this.items, key);
                            if (prev)
                                prev.value = value;
                            else
                                this.items.push(new _Pair.default(key, value));
                        }
                        /**
                         * @param {*} arg ignored
                         * @param {*} ctx Conversion context, originally set in Document#toJSON()
                         * @param {Class} Type If set, forces the returned collection type
                         * @returns {*} Instance of Type, Map, or Object
                         */
                    }, {
                        key: "toJSON",
                        value: function toJSON(_, ctx, Type) {
                            var map = Type ? new Type() : ctx && ctx.mapAsMap ? new Map() : {};
                            if (ctx && ctx.onCreate)
                                ctx.onCreate(map);
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;
                            try {
                                for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var item = _step2.value;
                                    item.addToJSMap(ctx, map);
                                }
                            }
                            catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            }
                            finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                        _iterator2.return();
                                    }
                                }
                                finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }
                            return map;
                        }
                    }, {
                        key: "toString",
                        value: function toString(ctx, onComment, onChompKeep) {
                            if (!ctx)
                                return JSON.stringify(this);
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;
                            try {
                                for (var _iterator3 = this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var item = _step3.value;
                                    if (!(item instanceof _Pair.default))
                                        throw new Error("Map items must all be pairs; found ".concat(JSON.stringify(item), " instead"));
                                }
                            }
                            catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            }
                            finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                        _iterator3.return();
                                    }
                                }
                                finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                            return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLMap.prototype), "toString", this).call(this, ctx, {
                                blockItem: function blockItem(n) {
                                    return n.str;
                                },
                                flowChars: {
                                    start: '{',
                                    end: '}'
                                },
                                isMap: true,
                                itemIndent: ctx.indent || ''
                            }, onComment, onChompKeep);
                        }
                    }]);
                return YAMLMap;
            }(_Collection2.default);
            exports.default = YAMLMap;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Merge.js": 
        /*!********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Merge.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports.MERGE_KEY = void 0;
            var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _Map = _interopRequireDefault(__webpack_require__(/*! ./Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));
            var _Pair2 = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var _Seq = _interopRequireDefault(__webpack_require__(/*! ./Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));
            var MERGE_KEY = '<<';
            exports.MERGE_KEY = MERGE_KEY;
            var Merge = 
            /*#__PURE__*/
            function (_Pair) {
                (0, _inherits2.default)(Merge, _Pair);
                function Merge(pair) {
                    var _this;
                    (0, _classCallCheck2.default)(this, Merge);
                    if (pair instanceof _Pair2.default) {
                        var seq = pair.value;
                        if (!(seq instanceof _Seq.default)) {
                            seq = new _Seq.default();
                            seq.items.push(pair.value);
                            seq.range = pair.value.range;
                        }
                        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Merge).call(this, pair.key, seq));
                        _this.range = pair.range;
                    }
                    else {
                        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Merge).call(this, new _Scalar.default(MERGE_KEY), new _Seq.default()));
                    }
                    _this.type = 'MERGE_PAIR';
                    return (0, _possibleConstructorReturn2.default)(_this);
                } // If the value associated with a merge key is a single mapping node, each of
                // its key/value pairs is inserted into the current mapping, unless the key
                // already exists in it. If the value associated with the merge key is a
                // sequence, then this sequence is expected to contain mapping nodes and each
                // of these nodes is merged in turn according to its order in the sequence.
                // Keys in mapping nodes earlier in the sequence override keys specified in
                // later mapping nodes. -- http://yaml.org/type/merge.html
                (0, _createClass2.default)(Merge, [{
                        key: "addToJSMap",
                        value: function addToJSMap(ctx, map) {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = this.value.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var source = _step.value.source;
                                    if (!(source instanceof _Map.default))
                                        throw new Error('Merge sources must be maps');
                                    var srcMap = source.toJSON(null, ctx, Map);
                                    var _iteratorNormalCompletion2 = true;
                                    var _didIteratorError2 = false;
                                    var _iteratorError2 = undefined;
                                    try {
                                        for (var _iterator2 = srcMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                            var _step2$value = (0, _slicedToArray2.default)(_step2.value, 2), key = _step2$value[0], value = _step2$value[1];
                                            if (map instanceof Map) {
                                                if (!map.has(key))
                                                    map.set(key, value);
                                            }
                                            else if (map instanceof Set) {
                                                map.add(key);
                                            }
                                            else {
                                                if (!Object.prototype.hasOwnProperty.call(map, key))
                                                    map[key] = value;
                                            }
                                        }
                                    }
                                    catch (err) {
                                        _didIteratorError2 = true;
                                        _iteratorError2 = err;
                                    }
                                    finally {
                                        try {
                                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                                _iterator2.return();
                                            }
                                        }
                                        finally {
                                            if (_didIteratorError2) {
                                                throw _iteratorError2;
                                            }
                                        }
                                    }
                                }
                            }
                            catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            }
                            finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                }
                                finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            return map;
                        }
                    }, {
                        key: "toString",
                        value: function toString(ctx, onComment) {
                            var seq = this.value;
                            if (seq.items.length > 1)
                                return (0, _get2.default)((0, _getPrototypeOf2.default)(Merge.prototype), "toString", this).call(this, ctx, onComment);
                            this.value = seq.items[0];
                            var str = (0, _get2.default)((0, _getPrototypeOf2.default)(Merge.prototype), "toString", this).call(this, ctx, onComment);
                            this.value = seq;
                            return str;
                        }
                    }]);
                return Merge;
            }(_Pair2.default);
            exports.default = Merge;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Node.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Node.js ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var Node = function Node() {
                (0, _classCallCheck2.default)(this, Node);
            };
            exports.default = Node;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Pair.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Pair.js ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _addComment = _interopRequireDefault(__webpack_require__(/*! ../addComment */ "./node_modules/yaml/browser/dist/addComment.js"));
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _toJSON = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));
            var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            // Published as 'yaml/pair'
            var stringifyKey = function stringifyKey(key, jsKey, ctx) {
                if (jsKey === null)
                    return '';
                if ((0, _typeof2.default)(jsKey) !== 'object')
                    return String(jsKey);
                if (key instanceof _Node2.default && ctx && ctx.doc)
                    return key.toString({
                        anchors: {},
                        doc: ctx.doc,
                        indent: '',
                        inFlow: true,
                        inStringifyKey: true
                    });
                return JSON.stringify(jsKey);
            };
            var Pair = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Pair, _Node);
                function Pair(key) {
                    var _this;
                    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    (0, _classCallCheck2.default)(this, Pair);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Pair).call(this));
                    _this.key = key;
                    _this.value = value;
                    _this.type = 'PAIR';
                    return _this;
                }
                (0, _createClass2.default)(Pair, [{
                        key: "addToJSMap",
                        value: function addToJSMap(ctx, map) {
                            var key = (0, _toJSON.default)(this.key, '', ctx);
                            if (map instanceof Map) {
                                var value = (0, _toJSON.default)(this.value, key, ctx);
                                map.set(key, value);
                            }
                            else if (map instanceof Set) {
                                map.add(key);
                            }
                            else {
                                var stringKey = stringifyKey(this.key, key, ctx);
                                map[stringKey] = (0, _toJSON.default)(this.value, stringKey, ctx);
                            }
                            return map;
                        }
                    }, {
                        key: "toJSON",
                        value: function toJSON(_, ctx) {
                            var pair = ctx && ctx.mapAsMap ? new Map() : {};
                            return this.addToJSMap(ctx, pair);
                        }
                    }, {
                        key: "toString",
                        value: function toString(ctx, onComment, onChompKeep) {
                            if (!ctx || !ctx.doc)
                                return JSON.stringify(this);
                            var simpleKeys = ctx.doc.options.simpleKeys;
                            var key = this.key, value = this.value;
                            var keyComment = key instanceof _Node2.default && key.comment;
                            if (simpleKeys) {
                                if (keyComment) {
                                    throw new Error('With simple keys, key nodes cannot have comments');
                                }
                                if (key instanceof _Collection.default) {
                                    var msg = 'With simple keys, collection cannot be used as a key value';
                                    throw new Error(msg);
                                }
                            }
                            var explicitKey = !simpleKeys && (!key || keyComment || key instanceof _Collection.default || key.type === _constants.Type.BLOCK_FOLDED || key.type === _constants.Type.BLOCK_LITERAL);
                            var _ctx = ctx, doc = _ctx.doc, indent = _ctx.indent;
                            ctx = Object.assign({}, ctx, {
                                implicitKey: !explicitKey,
                                indent: indent + '  '
                            });
                            var chompKeep = false;
                            var str = doc.schema.stringify(key, ctx, function () {
                                return keyComment = null;
                            }, function () {
                                return chompKeep = true;
                            });
                            str = (0, _addComment.default)(str, ctx.indent, keyComment);
                            if (ctx.allNullValues && !simpleKeys) {
                                if (this.comment) {
                                    str = (0, _addComment.default)(str, ctx.indent, this.comment);
                                    if (onComment)
                                        onComment();
                                }
                                else if (chompKeep && !keyComment && onChompKeep)
                                    onChompKeep();
                                return ctx.inFlow ? str : "? ".concat(str);
                            }
                            str = explicitKey ? "? ".concat(str, "\n").concat(indent, ":") : "".concat(str, ":");
                            if (this.comment) {
                                // expected (but not strictly required) to be a single-line comment
                                str = (0, _addComment.default)(str, ctx.indent, this.comment);
                                if (onComment)
                                    onComment();
                            }
                            var vcb = '';
                            var valueComment = null;
                            if (value instanceof _Node2.default) {
                                if (value.spaceBefore)
                                    vcb = '\n';
                                if (value.commentBefore) {
                                    var cs = value.commentBefore.replace(/^/gm, "".concat(ctx.indent, "#"));
                                    vcb += "\n".concat(cs);
                                }
                                valueComment = value.comment;
                            }
                            else if (value && (0, _typeof2.default)(value) === 'object') {
                                value = doc.schema.createNode(value, true);
                            }
                            ctx.implicitKey = false;
                            chompKeep = false;
                            var valueStr = doc.schema.stringify(value, ctx, function () {
                                return valueComment = null;
                            }, function () {
                                return chompKeep = true;
                            });
                            var ws = ' ';
                            if (vcb || this.comment) {
                                ws = "".concat(vcb, "\n").concat(ctx.indent);
                            }
                            else if (!explicitKey && value instanceof _Collection.default) {
                                var flow = valueStr[0] === '[' || valueStr[0] === '{';
                                if (!flow || valueStr.includes('\n'))
                                    ws = "\n".concat(ctx.indent);
                            }
                            if (chompKeep && !valueComment && onChompKeep)
                                onChompKeep();
                            return (0, _addComment.default)(str + ws + valueStr, ctx.indent, valueComment);
                        }
                    }, {
                        key: "commentBefore",
                        get: function get() {
                            return this.key && this.key.commentBefore;
                        },
                        set: function set(cb) {
                            if (this.key == null)
                                this.key = new _Scalar.default(null);
                            this.key.commentBefore = cb;
                        }
                    }]);
                return Pair;
            }(_Node2.default);
            exports.default = Pair;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Scalar.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Scalar.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));
            var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));
            // Published as 'yaml/scalar'
            var Scalar = 
            /*#__PURE__*/
            function (_Node) {
                (0, _inherits2.default)(Scalar, _Node);
                function Scalar(value) {
                    var _this;
                    (0, _classCallCheck2.default)(this, Scalar);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scalar).call(this));
                    _this.value = value;
                    return _this;
                }
                (0, _createClass2.default)(Scalar, [{
                        key: "toJSON",
                        value: function toJSON(arg, ctx) {
                            return ctx && ctx.keep ? this.value : (0, _toJSON2.default)(this.value, arg, ctx);
                        }
                    }, {
                        key: "toString",
                        value: function toString() {
                            return String(this.value);
                        }
                    }]);
                return Scalar;
            }(_Node2.default);
            exports.default = Scalar;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/Seq.js": 
        /*!******************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/Seq.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));
            var _Collection2 = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            // Published as 'yaml/seq'
            function asItemIndex(key) {
                var idx = key instanceof _Scalar.default ? key.value : key;
                if (idx && typeof idx === 'string')
                    idx = Number(idx);
                return Number.isInteger(idx) && idx >= 0 ? idx : null;
            }
            var YAMLSeq = 
            /*#__PURE__*/
            function (_Collection) {
                (0, _inherits2.default)(YAMLSeq, _Collection);
                function YAMLSeq() {
                    (0, _classCallCheck2.default)(this, YAMLSeq);
                    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSeq).apply(this, arguments));
                }
                (0, _createClass2.default)(YAMLSeq, [{
                        key: "add",
                        value: function add(value) {
                            this.items.push(value);
                        }
                    }, {
                        key: "delete",
                        value: function _delete(key) {
                            var idx = asItemIndex(key);
                            if (typeof idx !== 'number')
                                return false;
                            var del = this.items.splice(idx, 1);
                            return del.length > 0;
                        }
                    }, {
                        key: "get",
                        value: function get(key, keepScalar) {
                            var idx = asItemIndex(key);
                            if (typeof idx !== 'number')
                                return undefined;
                            var it = this.items[idx];
                            return !keepScalar && it instanceof _Scalar.default ? it.value : it;
                        }
                    }, {
                        key: "has",
                        value: function has(key) {
                            var idx = asItemIndex(key);
                            return typeof idx === 'number' && idx < this.items.length;
                        }
                    }, {
                        key: "set",
                        value: function set(key, value) {
                            var idx = asItemIndex(key);
                            if (typeof idx !== 'number')
                                throw new Error("Expected a valid index, not ".concat(key, "."));
                            this.items[idx] = value;
                        }
                    }, {
                        key: "toJSON",
                        value: function toJSON(_, ctx) {
                            var seq = [];
                            if (ctx && ctx.onCreate)
                                ctx.onCreate(seq);
                            var i = 0;
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var item = _step.value;
                                    seq.push((0, _toJSON2.default)(item, String(i++), ctx));
                                }
                            }
                            catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            }
                            finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                }
                                finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            return seq;
                        }
                    }, {
                        key: "toString",
                        value: function toString(ctx, onComment, onChompKeep) {
                            if (!ctx)
                                return JSON.stringify(this);
                            return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLSeq.prototype), "toString", this).call(this, ctx, {
                                blockItem: function blockItem(n) {
                                    return n.type === 'comment' ? n.str : "- ".concat(n.str);
                                },
                                flowChars: {
                                    start: '[',
                                    end: ']'
                                },
                                isMap: false,
                                itemIndent: (ctx.indent || '') + '  '
                            }, onComment, onChompKeep);
                        }
                    }]);
                return YAMLSeq;
            }(_Collection2.default);
            exports.default = YAMLSeq;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/index.js": 
        /*!********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/index.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _warnings = __webpack_require__(/*! ../warnings */ "./node_modules/yaml/browser/dist/warnings.js");
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _stringify = __webpack_require__(/*! ../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
            var _tags = __webpack_require__(/*! ../tags */ "./node_modules/yaml/browser/dist/tags/index.js");
            var _string = __webpack_require__(/*! ../tags/failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");
            var _Alias = _interopRequireDefault(__webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));
            var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var isMap = function isMap(_ref) {
                var type = _ref.type;
                return type === _constants.Type.FLOW_MAP || type === _constants.Type.MAP;
            };
            var isSeq = function isSeq(_ref2) {
                var type = _ref2.type;
                return type === _constants.Type.FLOW_SEQ || type === _constants.Type.SEQ;
            };
            var Schema = 
            /*#__PURE__*/
            function () {
                function Schema(_ref3) {
                    var customTags = _ref3.customTags, merge = _ref3.merge, schema = _ref3.schema, deprecatedCustomTags = _ref3.tags;
                    (0, _classCallCheck2.default)(this, Schema);
                    this.merge = !!merge;
                    this.name = schema;
                    this.tags = _tags.schemas[schema.replace(/\W/g, '')]; // 'yaml-1.1' -> 'yaml11'
                    if (!this.tags) {
                        var keys = Object.keys(_tags.schemas).map(function (key) {
                            return JSON.stringify(key);
                        }).join(', ');
                        throw new Error("Unknown schema \"".concat(schema, "\"; use one of ").concat(keys));
                    }
                    if (!customTags && deprecatedCustomTags) {
                        customTags = deprecatedCustomTags;
                        (0, _warnings.warnOptionDeprecation)('tags', 'customTags');
                    }
                    if (Array.isArray(customTags)) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = customTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var tag = _step.value;
                                this.tags = this.tags.concat(tag);
                            }
                        }
                        catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        }
                        finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            }
                            finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                    else if (typeof customTags === 'function') {
                        this.tags = customTags(this.tags.slice());
                    }
                    for (var i = 0; i < this.tags.length; ++i) {
                        var _tag = this.tags[i];
                        if (typeof _tag === 'string') {
                            var tagObj = _tags.tags[_tag];
                            if (!tagObj) {
                                var _keys = Object.keys(_tags.tags).map(function (key) {
                                    return JSON.stringify(key);
                                }).join(', ');
                                throw new Error("Unknown custom tag \"".concat(_tag, "\"; use one of ").concat(_keys));
                            }
                            this.tags[i] = tagObj;
                        }
                    }
                }
                (0, _createClass2.default)(Schema, [{
                        key: "createNode",
                        value: function createNode(value, wrapScalars, tag, ctx) {
                            if (value instanceof _Node.default)
                                return value;
                            var tagObj;
                            if (tag) {
                                if (tag.startsWith('!!'))
                                    tag = Schema.defaultPrefix + tag.slice(2);
                                var match = this.tags.filter(function (t) {
                                    return t.tag === tag;
                                });
                                tagObj = match.find(function (t) {
                                    return !t.format;
                                }) || match[0];
                                if (!tagObj)
                                    throw new Error("Tag ".concat(tag, " not found"));
                            }
                            else {
                                // TODO: deprecate/remove class check
                                tagObj = this.tags.find(function (t) {
                                    return (t.identify && t.identify(value) || t.class && value instanceof t.class) && !t.format;
                                });
                                if (!tagObj) {
                                    if (typeof value.toJSON === 'function')
                                        value = value.toJSON();
                                    if ((0, _typeof2.default)(value) !== 'object')
                                        return wrapScalars ? new _Scalar.default(value) : value;
                                    tagObj = value instanceof Map ? _tags.tags.map : value[Symbol.iterator] ? _tags.tags.seq : _tags.tags.map;
                                }
                            }
                            if (!ctx)
                                ctx = {
                                    wrapScalars: wrapScalars
                                };
                            else
                                ctx.wrapScalars = wrapScalars;
                            if (ctx.onTagObj) {
                                ctx.onTagObj(tagObj);
                                delete ctx.onTagObj;
                            }
                            var obj = {};
                            if (value && (0, _typeof2.default)(value) === 'object' && ctx.prevObjects) {
                                var prev = ctx.prevObjects.find(function (o) {
                                    return o.value === value;
                                });
                                if (prev) {
                                    var alias = new _Alias.default(prev); // leaves source dirty; must be cleaned by caller
                                    ctx.aliasNodes.push(alias);
                                    return alias;
                                }
                                obj.value = value;
                                ctx.prevObjects.push(obj);
                            }
                            obj.node = tagObj.createNode ? tagObj.createNode(this, value, ctx) : wrapScalars ? new _Scalar.default(value) : value;
                            return obj.node;
                        }
                    }, {
                        key: "createPair",
                        value: function createPair(key, value, ctx) {
                            var k = this.createNode(key, ctx.wrapScalars, null, ctx);
                            var v = this.createNode(value, ctx.wrapScalars, null, ctx);
                            return new _Pair.default(k, v);
                        } // falls back to string on no match
                    }, {
                        key: "resolveScalar",
                        value: function resolveScalar(str, tags) {
                            if (!tags)
                                tags = this.tags;
                            for (var i = 0; i < tags.length; ++i) {
                                var _tags$i = tags[i], format = _tags$i.format, test = _tags$i.test, resolve = _tags$i.resolve;
                                if (test) {
                                    var match = str.match(test);
                                    if (match) {
                                        var res = resolve.apply(null, match);
                                        if (!(res instanceof _Scalar.default))
                                            res = new _Scalar.default(res);
                                        if (format)
                                            res.format = format;
                                        return res;
                                    }
                                }
                            }
                            if (this.tags.scalarFallback)
                                str = this.tags.scalarFallback(str);
                            return new _Scalar.default(str);
                        } // sets node.resolved on success
                    }, {
                        key: "resolveNode",
                        value: function resolveNode(doc, node, tagName) {
                            var tags = this.tags.filter(function (_ref4) {
                                var tag = _ref4.tag;
                                return tag === tagName;
                            });
                            var generic = tags.find(function (_ref5) {
                                var test = _ref5.test;
                                return !test;
                            });
                            if (node.error)
                                doc.errors.push(node.error);
                            try {
                                if (generic) {
                                    var res = generic.resolve(doc, node);
                                    if (!(res instanceof _Collection.default))
                                        res = new _Scalar.default(res);
                                    node.resolved = res;
                                }
                                else {
                                    var str = (0, _string.resolveString)(doc, node);
                                    if (typeof str === 'string' && tags.length > 0) {
                                        node.resolved = this.resolveScalar(str, tags);
                                    }
                                }
                            }
                            catch (error) {
                                if (!error.source)
                                    error.source = node;
                                doc.errors.push(error);
                                node.resolved = null;
                            }
                            if (!node.resolved)
                                return null;
                            if (tagName && node.tag)
                                node.resolved.tag = tagName;
                            return node.resolved;
                        }
                    }, {
                        key: "resolveNodeWithFallback",
                        value: function resolveNodeWithFallback(doc, node, tagName) {
                            var res = this.resolveNode(doc, node, tagName);
                            if (Object.prototype.hasOwnProperty.call(node, 'resolved'))
                                return res;
                            var fallback = isMap(node) ? Schema.defaultTags.MAP : isSeq(node) ? Schema.defaultTags.SEQ : Schema.defaultTags.STR;
                            if (fallback) {
                                doc.warnings.push(new _errors.YAMLWarning(node, "The tag ".concat(tagName, " is unavailable, falling back to ").concat(fallback)));
                                var _res = this.resolveNode(doc, node, fallback);
                                _res.tag = tagName;
                                return _res;
                            }
                            else {
                                doc.errors.push(new _errors.YAMLReferenceError(node, "The tag ".concat(tagName, " is unavailable")));
                            }
                            return null;
                        }
                    }, {
                        key: "getTagObject",
                        value: function getTagObject(item) {
                            if (item instanceof _Alias.default)
                                return _Alias.default;
                            if (item.tag) {
                                var match = this.tags.filter(function (t) {
                                    return t.tag === item.tag;
                                });
                                if (match.length > 0)
                                    return match.find(function (t) {
                                        return t.format === item.format;
                                    }) || match[0];
                            }
                            var tagObj, obj;
                            if (item instanceof _Scalar.default) {
                                obj = item.value; // TODO: deprecate/remove class check
                                var _match = this.tags.filter(function (t) {
                                    return t.identify && t.identify(obj) || t.class && obj instanceof t.class;
                                });
                                tagObj = _match.find(function (t) {
                                    return t.format === item.format;
                                }) || _match.find(function (t) {
                                    return !t.format;
                                });
                            }
                            else {
                                obj = item;
                                tagObj = this.tags.find(function (t) {
                                    return t.nodeClass && obj instanceof t.nodeClass;
                                });
                            }
                            if (!tagObj) {
                                var name = obj && obj.constructor ? obj.constructor.name : (0, _typeof2.default)(obj);
                                throw new Error("Tag not resolved for ".concat(name, " value"));
                            }
                            return tagObj;
                        } // needs to be called before stringifier to allow for circular anchor refs
                    }, {
                        key: "stringifyProps",
                        value: function stringifyProps(node, tagObj, _ref6) {
                            var anchors = _ref6.anchors, doc = _ref6.doc;
                            var props = [];
                            var anchor = doc.anchors.getName(node);
                            if (anchor) {
                                anchors[anchor] = node;
                                props.push("&".concat(anchor));
                            }
                            if (node.tag) {
                                props.push(doc.stringifyTag(node.tag));
                            }
                            else if (!tagObj.default) {
                                props.push(doc.stringifyTag(tagObj.tag));
                            }
                            return props.join(' ');
                        }
                    }, {
                        key: "stringify",
                        value: function stringify(item, ctx, onComment, onChompKeep) {
                            var tagObj;
                            if (!(item instanceof _Node.default)) {
                                var createCtx = {
                                    aliasNodes: [],
                                    onTagObj: function onTagObj(o) {
                                        return tagObj = o;
                                    },
                                    prevObjects: []
                                };
                                item = this.createNode(item, true, null, createCtx);
                                var anchors = ctx.doc.anchors;
                                var _iteratorNormalCompletion2 = true;
                                var _didIteratorError2 = false;
                                var _iteratorError2 = undefined;
                                try {
                                    for (var _iterator2 = createCtx.aliasNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var alias = _step2.value;
                                        alias.source = alias.source.node;
                                        var name = anchors.getName(alias.source);
                                        if (!name) {
                                            name = anchors.newName();
                                            anchors.map[name] = alias.source;
                                        }
                                    }
                                }
                                catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                }
                                finally {
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    }
                                    finally {
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                            }
                            ctx.tags = this;
                            if (item instanceof _Pair.default)
                                return item.toString(ctx, onComment, onChompKeep);
                            if (!tagObj)
                                tagObj = this.getTagObject(item);
                            var props = this.stringifyProps(item, tagObj, ctx);
                            var str = typeof tagObj.stringify === 'function' ? tagObj.stringify(item, ctx, onComment, onChompKeep) : item instanceof _Collection.default ? item.toString(ctx, onComment, onChompKeep) : (0, _stringify.stringifyString)(item, ctx, onComment, onChompKeep);
                            return props ? item instanceof _Collection.default && str[0] !== '{' && str[0] !== '[' ? "".concat(props, "\n").concat(ctx.indent).concat(str) : "".concat(props, " ").concat(str) : str;
                        }
                    }]);
                return Schema;
            }();
            exports.default = Schema;
            (0, _defineProperty2.default)(Schema, "defaultPrefix", 'tag:yaml.org,2002:');
            (0, _defineProperty2.default)(Schema, "defaultTags", {
                MAP: 'tag:yaml.org,2002:map',
                SEQ: 'tag:yaml.org,2002:seq',
                STR: 'tag:yaml.org,2002:str'
            });
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/parseMap.js": 
        /*!***********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/parseMap.js ***!
          \***********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = parseMap;
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _PlainValue = _interopRequireDefault(__webpack_require__(/*! ../cst/PlainValue */ "./node_modules/yaml/browser/dist/cst/PlainValue.js"));
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _Map = _interopRequireDefault(__webpack_require__(/*! ./Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));
            var _Merge = _interopRequireWildcard(__webpack_require__(/*! ./Merge */ "./node_modules/yaml/browser/dist/schema/Merge.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _parseUtils = __webpack_require__(/*! ./parseUtils */ "./node_modules/yaml/browser/dist/schema/parseUtils.js");
            var _Alias = _interopRequireDefault(__webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));
            var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            function parseMap(doc, cst) {
                if (cst.type !== _constants.Type.MAP && cst.type !== _constants.Type.FLOW_MAP) {
                    var msg = "A ".concat(cst.type, " node cannot be resolved as a mapping");
                    doc.errors.push(new _errors.YAMLSyntaxError(cst, msg));
                    return null;
                }
                var _ref = cst.type === _constants.Type.FLOW_MAP ? resolveFlowMapItems(doc, cst) : resolveBlockMapItems(doc, cst), comments = _ref.comments, items = _ref.items;
                var map = new _Map.default();
                map.items = items;
                (0, _parseUtils.resolveComments)(map, comments);
                var hasCollectionKey = false;
                for (var i = 0; i < items.length; ++i) {
                    var iKey = items[i].key;
                    if (iKey instanceof _Collection.default)
                        hasCollectionKey = true;
                    if (doc.schema.merge && iKey && iKey.value === _Merge.MERGE_KEY) {
                        items[i] = new _Merge.default(items[i]);
                        var sources = items[i].value.items;
                        var error = null;
                        sources.some(function (node) {
                            if (node instanceof _Alias.default) {
                                // During parsing, alias sources are CST nodes; to account for
                                // circular references their resolved values can't be used here.
                                var type = node.source.type;
                                if (type === _constants.Type.MAP || type === _constants.Type.FLOW_MAP)
                                    return false;
                                return error = 'Merge nodes aliases can only point to maps';
                            }
                            return error = 'Merge nodes can only have Alias nodes as values';
                        });
                        if (error)
                            doc.errors.push(new _errors.YAMLSemanticError(cst, error));
                    }
                    else {
                        for (var j = i + 1; j < items.length; ++j) {
                            var jKey = items[j].key;
                            if (iKey === jKey || iKey && jKey && Object.prototype.hasOwnProperty.call(iKey, 'value') && iKey.value === jKey.value) {
                                var _msg = "Map keys must be unique; \"".concat(iKey, "\" is repeated");
                                doc.errors.push(new _errors.YAMLSemanticError(cst, _msg));
                                break;
                            }
                        }
                    }
                }
                if (hasCollectionKey && !doc.options.mapAsMap) {
                    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
                    doc.warnings.push(new _errors.YAMLWarning(cst, warn));
                }
                cst.resolved = map;
                return map;
            }
            var valueHasPairComment = function valueHasPairComment(_ref2) {
                var _ref2$context = _ref2.context, lineStart = _ref2$context.lineStart, node = _ref2$context.node, src = _ref2$context.src, props = _ref2.props;
                if (props.length === 0)
                    return false;
                var start = props[0].start;
                if (node && start > node.valueRange.start)
                    return false;
                if (src[start] !== _constants.Char.COMMENT)
                    return false;
                for (var i = lineStart; i < start; ++i) {
                    if (src[i] === '\n')
                        return false;
                }
                return true;
            };
            function resolvePairComment(item, pair) {
                if (!valueHasPairComment(item))
                    return;
                var comment = item.getPropValue(0, _constants.Char.COMMENT, true);
                var found = false;
                var cb = pair.value.commentBefore;
                if (cb && cb.startsWith(comment)) {
                    pair.value.commentBefore = cb.substr(comment.length + 1);
                    found = true;
                }
                else {
                    var cc = pair.value.comment;
                    if (!item.node && cc && cc.startsWith(comment)) {
                        pair.value.comment = cc.substr(comment.length + 1);
                        found = true;
                    }
                }
                if (found)
                    pair.comment = comment;
            }
            function resolveBlockMapItems(doc, cst) {
                var comments = [];
                var items = [];
                var key = undefined;
                var keyStart = null;
                for (var i = 0; i < cst.items.length; ++i) {
                    var item = cst.items[i];
                    switch (item.type) {
                        case _constants.Type.BLANK_LINE:
                            comments.push({
                                afterKey: !!key,
                                before: items.length
                            });
                            break;
                        case _constants.Type.COMMENT:
                            comments.push({
                                afterKey: !!key,
                                before: items.length,
                                comment: item.comment
                            });
                            break;
                        case _constants.Type.MAP_KEY:
                            if (key !== undefined)
                                items.push(new _Pair.default(key));
                            if (item.error)
                                doc.errors.push(item.error);
                            key = doc.resolveNode(item.node);
                            keyStart = null;
                            break;
                        case _constants.Type.MAP_VALUE:
                            {
                                if (key === undefined)
                                    key = null;
                                if (item.error)
                                    doc.errors.push(item.error);
                                if (!item.context.atLineStart && item.node && item.node.type === _constants.Type.MAP && !item.node.context.atLineStart) {
                                    var msg = 'Nested mappings are not allowed in compact mappings';
                                    doc.errors.push(new _errors.YAMLSemanticError(item.node, msg));
                                }
                                var valueNode = item.node;
                                if (!valueNode && item.props.length > 0) {
                                    // Comments on an empty mapping value need to be preserved, so we
                                    // need to construct a minimal empty node here to use instead of the
                                    // missing `item.node`. -- eemeli/yaml#19
                                    valueNode = new _PlainValue.default(_constants.Type.PLAIN, []);
                                    valueNode.context = {
                                        parent: item,
                                        src: item.context.src
                                    };
                                    var pos = item.range.start + 1;
                                    valueNode.range = {
                                        start: pos,
                                        end: pos
                                    };
                                    valueNode.valueRange = {
                                        start: pos,
                                        end: pos
                                    };
                                    if (typeof item.range.origStart === 'number') {
                                        var origPos = item.range.origStart + 1;
                                        valueNode.range.origStart = valueNode.range.origEnd = origPos;
                                        valueNode.valueRange.origStart = valueNode.valueRange.origEnd = origPos;
                                    }
                                }
                                var pair = new _Pair.default(key, doc.resolveNode(valueNode));
                                resolvePairComment(item, pair);
                                items.push(pair);
                                (0, _parseUtils.checkKeyLength)(doc.errors, cst, i, key, keyStart);
                                key = undefined;
                                keyStart = null;
                            }
                            break;
                        default:
                            if (key !== undefined)
                                items.push(new _Pair.default(key));
                            key = doc.resolveNode(item);
                            keyStart = item.range.start;
                            if (item.error)
                                doc.errors.push(item.error);
                            next: for (var j = i + 1;; ++j) {
                                var nextItem = cst.items[j];
                                switch (nextItem && nextItem.type) {
                                    case _constants.Type.BLANK_LINE:
                                    case _constants.Type.COMMENT:
                                        continue next;
                                    case _constants.Type.MAP_VALUE:
                                        break next;
                                    default:
                                        doc.errors.push(new _errors.YAMLSemanticError(item, 'Implicit map keys need to be followed by map values'));
                                        break next;
                                }
                            }
                            if (item.valueRangeContainsNewline) {
                                var _msg2 = 'Implicit map keys need to be on a single line';
                                doc.errors.push(new _errors.YAMLSemanticError(item, _msg2));
                            }
                    }
                }
                if (key !== undefined)
                    items.push(new _Pair.default(key));
                return {
                    comments: comments,
                    items: items
                };
            }
            function resolveFlowMapItems(doc, cst) {
                var comments = [];
                var items = [];
                var key = undefined;
                var keyStart = null;
                var explicitKey = false;
                var next = '{';
                for (var i = 0; i < cst.items.length; ++i) {
                    (0, _parseUtils.checkKeyLength)(doc.errors, cst, i, key, keyStart);
                    var item = cst.items[i];
                    if (typeof item.char === 'string') {
                        var char = item.char, offset = item.offset;
                        if (char === '?' && key === undefined && !explicitKey) {
                            explicitKey = true;
                            next = ':';
                            continue;
                        }
                        if (char === ':') {
                            if (key === undefined)
                                key = null;
                            if (next === ':') {
                                next = ',';
                                continue;
                            }
                        }
                        else {
                            if (explicitKey) {
                                if (key === undefined && char !== ',')
                                    key = null;
                                explicitKey = false;
                            }
                            if (key !== undefined) {
                                items.push(new _Pair.default(key));
                                key = undefined;
                                keyStart = null;
                                if (char === ',') {
                                    next = ':';
                                    continue;
                                }
                            }
                        }
                        if (char === '}') {
                            if (i === cst.items.length - 1)
                                continue;
                        }
                        else if (char === next) {
                            next = ':';
                            continue;
                        }
                        var msg = "Flow map contains an unexpected ".concat(char);
                        var err = new _errors.YAMLSyntaxError(cst, msg);
                        err.offset = offset;
                        doc.errors.push(err);
                    }
                    else if (item.type === _constants.Type.BLANK_LINE) {
                        comments.push({
                            afterKey: !!key,
                            before: items.length
                        });
                    }
                    else if (item.type === _constants.Type.COMMENT) {
                        comments.push({
                            afterKey: !!key,
                            before: items.length,
                            comment: item.comment
                        });
                    }
                    else if (key === undefined) {
                        if (next === ',')
                            doc.errors.push(new _errors.YAMLSemanticError(item, 'Separator , missing in flow map'));
                        key = doc.resolveNode(item);
                        keyStart = explicitKey ? null : item.range.start; // TODO: add error for non-explicit multiline plain key
                    }
                    else {
                        if (next !== ',')
                            doc.errors.push(new _errors.YAMLSemanticError(item, 'Indicator : missing in flow map entry'));
                        items.push(new _Pair.default(key, doc.resolveNode(item)));
                        key = undefined;
                        explicitKey = false;
                    }
                }
                (0, _parseUtils.checkFlowCollectionEnd)(doc.errors, cst);
                if (key !== undefined)
                    items.push(new _Pair.default(key));
                return {
                    comments: comments,
                    items: items
                };
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/parseSeq.js": 
        /*!***********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/parseSeq.js ***!
          \***********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = parseSeq;
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _parseUtils = __webpack_require__(/*! ./parseUtils */ "./node_modules/yaml/browser/dist/schema/parseUtils.js");
            var _Seq = _interopRequireDefault(__webpack_require__(/*! ./Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));
            var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));
            function parseSeq(doc, cst) {
                if (cst.type !== _constants.Type.SEQ && cst.type !== _constants.Type.FLOW_SEQ) {
                    var msg = "A ".concat(cst.type, " node cannot be resolved as a sequence");
                    doc.errors.push(new _errors.YAMLSyntaxError(cst, msg));
                    return null;
                }
                var _ref = cst.type === _constants.Type.FLOW_SEQ ? resolveFlowSeqItems(doc, cst) : resolveBlockSeqItems(doc, cst), comments = _ref.comments, items = _ref.items;
                var seq = new _Seq.default();
                seq.items = items;
                (0, _parseUtils.resolveComments)(seq, comments);
                if (!doc.options.mapAsMap && items.some(function (it) {
                    return it instanceof _Pair.default && it.key instanceof _Collection.default;
                })) {
                    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
                    doc.warnings.push(new _errors.YAMLWarning(cst, warn));
                }
                cst.resolved = seq;
                return seq;
            }
            function resolveBlockSeqItems(doc, cst) {
                var comments = [];
                var items = [];
                for (var i = 0; i < cst.items.length; ++i) {
                    var item = cst.items[i];
                    switch (item.type) {
                        case _constants.Type.BLANK_LINE:
                            comments.push({
                                before: items.length
                            });
                            break;
                        case _constants.Type.COMMENT:
                            comments.push({
                                comment: item.comment,
                                before: items.length
                            });
                            break;
                        case _constants.Type.SEQ_ITEM:
                            if (item.error)
                                doc.errors.push(item.error);
                            items.push(doc.resolveNode(item.node));
                            if (item.hasProps) {
                                var msg = 'Sequence items cannot have tags or anchors before the - indicator';
                                doc.errors.push(new _errors.YAMLSemanticError(item, msg));
                            }
                            break;
                        default:
                            if (item.error)
                                doc.errors.push(item.error);
                            doc.errors.push(new _errors.YAMLSyntaxError(item, "Unexpected ".concat(item.type, " node in sequence")));
                    }
                }
                return {
                    comments: comments,
                    items: items
                };
            }
            function resolveFlowSeqItems(doc, cst) {
                var comments = [];
                var items = [];
                var explicitKey = false;
                var key = undefined;
                var keyStart = null;
                var next = '[';
                for (var i = 0; i < cst.items.length; ++i) {
                    var item = cst.items[i];
                    if (typeof item.char === 'string') {
                        var char = item.char, offset = item.offset;
                        if (char !== ':' && (explicitKey || key !== undefined)) {
                            if (explicitKey && key === undefined)
                                key = next ? items.pop() : null;
                            items.push(new _Pair.default(key));
                            explicitKey = false;
                            key = undefined;
                            keyStart = null;
                        }
                        if (char === next) {
                            next = null;
                        }
                        else if (!next && char === '?') {
                            explicitKey = true;
                        }
                        else if (next !== '[' && char === ':' && key === undefined) {
                            if (next === ',') {
                                key = items.pop();
                                if (key instanceof _Pair.default) {
                                    var msg = 'Chaining flow sequence pairs is invalid';
                                    var err = new _errors.YAMLSemanticError(cst, msg);
                                    err.offset = offset;
                                    doc.errors.push(err);
                                }
                                if (!explicitKey)
                                    (0, _parseUtils.checkKeyLength)(doc.errors, cst, i, key, keyStart);
                            }
                            else {
                                key = null;
                            }
                            keyStart = null;
                            explicitKey = false; // TODO: add error for non-explicit multiline plain key
                            next = null;
                        }
                        else if (next === '[' || char !== ']' || i < cst.items.length - 1) {
                            var _msg = "Flow sequence contains an unexpected ".concat(char);
                            var _err = new _errors.YAMLSyntaxError(cst, _msg);
                            _err.offset = offset;
                            doc.errors.push(_err);
                        }
                    }
                    else if (item.type === _constants.Type.BLANK_LINE) {
                        comments.push({
                            before: items.length
                        });
                    }
                    else if (item.type === _constants.Type.COMMENT) {
                        comments.push({
                            comment: item.comment,
                            before: items.length
                        });
                    }
                    else {
                        if (next) {
                            var _msg2 = "Expected a ".concat(next, " in flow sequence");
                            doc.errors.push(new _errors.YAMLSemanticError(item, _msg2));
                        }
                        var value = doc.resolveNode(item);
                        if (key === undefined) {
                            items.push(value);
                        }
                        else {
                            items.push(new _Pair.default(key, value));
                            key = undefined;
                        }
                        keyStart = item.range.start;
                        next = ',';
                    }
                }
                (0, _parseUtils.checkFlowCollectionEnd)(doc.errors, cst);
                if (key !== undefined)
                    items.push(new _Pair.default(key));
                return {
                    comments: comments,
                    items: items
                };
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/schema/parseUtils.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/schema/parseUtils.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.checkFlowCollectionEnd = checkFlowCollectionEnd;
            exports.checkKeyLength = checkKeyLength;
            exports.resolveComments = resolveComments;
            var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            function checkFlowCollectionEnd(errors, cst) {
                var char, name;
                switch (cst.type) {
                    case _constants.Type.FLOW_MAP:
                        char = '}';
                        name = 'flow map';
                        break;
                    case _constants.Type.FLOW_SEQ:
                        char = ']';
                        name = 'flow sequence';
                        break;
                    default:
                        errors.push(new _errors.YAMLSemanticError(cst, 'Not a flow collection!?'));
                        return;
                }
                var lastItem;
                for (var i = cst.items.length - 1; i >= 0; --i) {
                    var item = cst.items[i];
                    if (!item || item.type !== _constants.Type.COMMENT) {
                        lastItem = item;
                        break;
                    }
                }
                if (lastItem && lastItem.char !== char) {
                    var msg = "Expected ".concat(name, " to end with ").concat(char);
                    var err;
                    if (typeof lastItem.offset === 'number') {
                        err = new _errors.YAMLSemanticError(cst, msg);
                        err.offset = lastItem.offset + 1;
                    }
                    else {
                        err = new _errors.YAMLSemanticError(lastItem, msg);
                        if (lastItem.range && lastItem.range.end)
                            err.offset = lastItem.range.end - lastItem.range.start;
                    }
                    errors.push(err);
                }
            }
            function checkKeyLength(errors, node, itemIdx, key, keyStart) {
                if (!key || typeof keyStart !== 'number')
                    return;
                var item = node.items[itemIdx];
                var keyEnd = item && item.range && item.range.start;
                if (!keyEnd) {
                    for (var i = itemIdx - 1; i >= 0; --i) {
                        var it = node.items[i];
                        if (it && it.range) {
                            keyEnd = it.range.end + 2 * (itemIdx - i);
                            break;
                        }
                    }
                }
                if (keyEnd > keyStart + 1024) {
                    var k = String(key).substr(0, 8) + '...' + String(key).substr(-8);
                    errors.push(new _errors.YAMLSemanticError(node, "The \"".concat(k, "\" key is too long")));
                }
            }
            function resolveComments(collection, comments) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _step$value = _step.value, afterKey = _step$value.afterKey, before = _step$value.before, comment = _step$value.comment;
                        var item = collection.items[before];
                        if (!item) {
                            if (comment !== undefined) {
                                if (collection.comment)
                                    collection.comment += '\n' + comment;
                                else
                                    collection.comment = comment;
                            }
                        }
                        else {
                            if (afterKey && item.value)
                                item = item.value;
                            if (comment === undefined) {
                                if (afterKey || !item.commentBefore)
                                    item.spaceBefore = true;
                            }
                            else {
                                if (item.commentBefore)
                                    item.commentBefore += '\n' + comment;
                                else
                                    item.commentBefore = comment;
                            }
                        }
                    }
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/stringify.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/stringify.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.stringifyNumber = stringifyNumber;
            exports.stringifyString = stringifyString;
            var _addComment = __webpack_require__(/*! ./addComment */ "./node_modules/yaml/browser/dist/addComment.js");
            var _constants = __webpack_require__(/*! ./constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _foldFlowLines = _interopRequireWildcard(__webpack_require__(/*! ./foldFlowLines */ "./node_modules/yaml/browser/dist/foldFlowLines.js"));
            var _options = __webpack_require__(/*! ./tags/options */ "./node_modules/yaml/browser/dist/tags/options.js");
            function stringifyNumber(_ref) {
                var format = _ref.format, minFractionDigits = _ref.minFractionDigits, tag = _ref.tag, value = _ref.value;
                if (!isFinite(value))
                    return isNaN(value) ? '.nan' : value < 0 ? '-.inf' : '.inf';
                var n = JSON.stringify(value);
                if (!format && minFractionDigits && (!tag || tag === 'tag:yaml.org,2002:float') && /^\d/.test(n)) {
                    var i = n.indexOf('.');
                    if (i < 0) {
                        i = n.length;
                        n += '.';
                    }
                    var d = minFractionDigits - (n.length - i - 1);
                    while (d-- > 0) {
                        n += '0';
                    }
                }
                return n;
            }
            function lineLengthOverLimit(str, limit) {
                var strLen = str.length;
                if (strLen <= limit)
                    return false;
                for (var i = 0, start = 0; i < strLen; ++i) {
                    if (str[i] === '\n') {
                        if (i - start > limit)
                            return true;
                        start = i + 1;
                        if (strLen - start <= limit)
                            return false;
                    }
                }
                return true;
            }
            function doubleQuotedString(value, _ref2) {
                var implicitKey = _ref2.implicitKey, indent = _ref2.indent;
                var _strOptions$doubleQuo = _options.strOptions.doubleQuoted, jsonEncoding = _strOptions$doubleQuo.jsonEncoding, minMultiLineLength = _strOptions$doubleQuo.minMultiLineLength;
                var json = JSON.stringify(value);
                if (jsonEncoding)
                    return json;
                var str = '';
                var start = 0;
                for (var i = 0, ch = json[i]; ch; ch = json[++i]) {
                    if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
                        // space before newline needs to be escaped to not be folded
                        str += json.slice(start, i) + '\\ ';
                        i += 1;
                        start = i;
                        ch = '\\';
                    }
                    if (ch === '\\')
                        switch (json[i + 1]) {
                            case 'u':
                                {
                                    str += json.slice(start, i);
                                    var code = json.substr(i + 2, 4);
                                    switch (code) {
                                        case '0000':
                                            str += '\\0';
                                            break;
                                        case '0007':
                                            str += '\\a';
                                            break;
                                        case '000b':
                                            str += '\\v';
                                            break;
                                        case '001b':
                                            str += '\\e';
                                            break;
                                        case '0085':
                                            str += '\\N';
                                            break;
                                        case '00a0':
                                            str += '\\_';
                                            break;
                                        case '2028':
                                            str += '\\L';
                                            break;
                                        case '2029':
                                            str += '\\P';
                                            break;
                                        default:
                                            if (code.substr(0, 2) === '00')
                                                str += '\\x' + code.substr(2);
                                            else
                                                str += json.substr(i, 6);
                                    }
                                    i += 5;
                                    start = i + 1;
                                }
                                break;
                            case 'n':
                                if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
                                    i += 1;
                                }
                                else {
                                    // folding will eat first newline
                                    str += json.slice(start, i) + '\n\n';
                                    while (json[i + 2] === '\\' && json[i + 3] === 'n' && json[i + 4] !== '"') {
                                        str += '\n';
                                        i += 2;
                                    }
                                    str += indent; // space after newline needs to be escaped to not be folded
                                    if (json[i + 2] === ' ')
                                        str += '\\';
                                    i += 1;
                                    start = i + 1;
                                }
                                break;
                            default:
                                i += 1;
                        }
                }
                str = start ? str + json.slice(start) : json;
                return implicitKey ? str : (0, _foldFlowLines.default)(str, indent, _foldFlowLines.FOLD_QUOTED, _options.strOptions.fold);
            }
            function singleQuotedString(value, ctx) {
                var indent = ctx.indent, implicitKey = ctx.implicitKey;
                if (implicitKey) {
                    if (/\n/.test(value))
                        return doubleQuotedString(value, ctx);
                }
                else {
                    // single quoted string can't have leading or trailing whitespace around newline
                    if (/[ \t]\n|\n[ \t]/.test(value))
                        return doubleQuotedString(value, ctx);
                }
                var res = "'" + value.replace(/'/g, "''").replace(/\n+/g, "$&\n".concat(indent)) + "'";
                return implicitKey ? res : (0, _foldFlowLines.default)(res, indent, _foldFlowLines.FOLD_FLOW, _options.strOptions.fold);
            }
            function blockString(_ref3, ctx, onComment, onChompKeep) {
                var comment = _ref3.comment, type = _ref3.type, value = _ref3.value;
                // 1. Block can't end in whitespace unless the last line is non-empty.
                // 2. Strings consisting of only whitespace are best rendered explicitly.
                if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
                    return doubleQuotedString(value, ctx);
                }
                var indent = ctx.indent || (ctx.forceBlockIndent ? ' ' : '');
                var indentSize = indent ? '2' : '1'; // root is at -1
                var literal = type === _constants.Type.BLOCK_FOLDED ? false : type === _constants.Type.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, _options.strOptions.fold.lineWidth - indent.length);
                var header = literal ? '|' : '>';
                if (!value)
                    return header + '\n';
                var wsStart = '';
                var wsEnd = '';
                value = value.replace(/[\n\t ]*$/, function (ws) {
                    var n = ws.indexOf('\n');
                    if (n === -1) {
                        header += '-'; // strip
                    }
                    else if (value === ws || n !== ws.length - 1) {
                        header += '+'; // keep
                        if (onChompKeep)
                            onChompKeep();
                    }
                    wsEnd = ws.replace(/\n$/, '');
                    return '';
                }).replace(/^[\n ]*/, function (ws) {
                    if (ws.indexOf(' ') !== -1)
                        header += indentSize;
                    var m = ws.match(/ +$/);
                    if (m) {
                        wsStart = ws.slice(0, -m[0].length);
                        return m[0];
                    }
                    else {
                        wsStart = ws;
                        return '';
                    }
                });
                if (wsEnd)
                    wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, "$&".concat(indent));
                if (wsStart)
                    wsStart = wsStart.replace(/\n+/g, "$&".concat(indent));
                if (comment) {
                    header += ' #' + comment.replace(/ ?[\r\n]+/g, ' ');
                    if (onComment)
                        onComment();
                }
                if (!value)
                    return "".concat(header).concat(indentSize, "\n").concat(indent).concat(wsEnd);
                if (literal) {
                    value = value.replace(/\n+/g, "$&".concat(indent));
                    return "".concat(header, "\n").concat(indent).concat(wsStart).concat(value).concat(wsEnd);
                }
                value = value.replace(/\n+/g, '\n$&').replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
                    //         ^ ind.line  ^ empty     ^ capture next empty lines only at end of indent
                    .replace(/\n+/g, "$&".concat(indent));
                var body = (0, _foldFlowLines.default)("".concat(wsStart).concat(value).concat(wsEnd), indent, _foldFlowLines.FOLD_BLOCK, _options.strOptions.fold);
                return "".concat(header, "\n").concat(indent).concat(body);
            }
            function plainString(item, ctx, onComment, onChompKeep) {
                var comment = item.comment, type = item.type, value = item.value;
                var actualString = ctx.actualString, implicitKey = ctx.implicitKey, indent = ctx.indent, inFlow = ctx.inFlow, tags = ctx.tags;
                if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) {
                    return doubleQuotedString(value, ctx);
                }
                if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
                    // not allowed:
                    // - empty string, '-' or '?'
                    // - start with an indicator character (except [?:-]) or /[?-] /
                    // - '\n ', ': ' or ' \n' anywhere
                    // - '#' not preceded by a non-space char
                    // - end with ' ' or ':'
                    return implicitKey || inFlow || value.indexOf('\n') === -1 ? value.indexOf('"') !== -1 && value.indexOf("'") === -1 ? singleQuotedString(value, ctx) : doubleQuotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
                }
                if (!implicitKey && !inFlow && type !== _constants.Type.PLAIN && value.indexOf('\n') !== -1) {
                    // Where allowed & type not set explicitly, prefer block style for multiline strings
                    return blockString(item, ctx, onComment, onChompKeep);
                }
                var str = value.replace(/\n+/g, "$&\n".concat(indent)); // Verify that output will be parsed as a string, as e.g. plain numbers and
                // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
                // and others in v1.1.
                if (actualString && typeof tags.resolveScalar(str).value !== 'string') {
                    return doubleQuotedString(value, ctx);
                }
                var body = implicitKey ? str : (0, _foldFlowLines.default)(str, indent, _foldFlowLines.FOLD_FLOW, _options.strOptions.fold);
                if (comment && !inFlow && (body.indexOf('\n') !== -1 || comment.indexOf('\n') !== -1)) {
                    if (onComment)
                        onComment();
                    return (0, _addComment.addCommentBefore)(body, indent, comment);
                }
                return body;
            }
            function stringifyString(item, ctx, onComment, onChompKeep) {
                var defaultType = _options.strOptions.defaultType;
                var implicitKey = ctx.implicitKey, inFlow = ctx.inFlow;
                var _item = item, type = _item.type, value = _item.value;
                if (typeof value !== 'string') {
                    value = String(value);
                    item = Object.assign({}, item, {
                        value: value
                    });
                }
                var _stringify = function _stringify(_type) {
                    switch (_type) {
                        case _constants.Type.BLOCK_FOLDED:
                        case _constants.Type.BLOCK_LITERAL:
                            return blockString(item, ctx, onComment, onChompKeep);
                        case _constants.Type.QUOTE_DOUBLE:
                            return doubleQuotedString(value, ctx);
                        case _constants.Type.QUOTE_SINGLE:
                            return singleQuotedString(value, ctx);
                        case _constants.Type.PLAIN:
                            return plainString(item, ctx, onComment, onChompKeep);
                        default:
                            return null;
                    }
                };
                if (type !== _constants.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)) {
                    // force double quotes on control characters
                    type = _constants.Type.QUOTE_DOUBLE;
                }
                else if ((implicitKey || inFlow) && (type === _constants.Type.BLOCK_FOLDED || type === _constants.Type.BLOCK_LITERAL)) {
                    // should not happen; blocks are not valid inside flow containers
                    type = _constants.Type.QUOTE_DOUBLE;
                }
                var res = _stringify(type);
                if (res === null) {
                    res = _stringify(defaultType);
                    if (res === null)
                        throw new Error("Unsupported default string type ".concat(defaultType));
                }
                return res;
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/core.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/core.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var _stringify = __webpack_require__(/*! ../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
            var _failsafe = _interopRequireDefault(__webpack_require__(/*! ./failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js"));
            var _options = __webpack_require__(/*! ./options */ "./node_modules/yaml/browser/dist/tags/options.js");
            var _default = _failsafe.default.concat([{
                    identify: function identify(value) {
                        return value == null;
                    },
                    createNode: function createNode(schema, value, ctx) {
                        return ctx.wrapScalars ? new _Scalar.default(null) : null;
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:null',
                    test: /^(?:~|[Nn]ull|NULL)?$/,
                    resolve: function resolve() {
                        return null;
                    },
                    options: _options.nullOptions,
                    stringify: function stringify() {
                        return _options.nullOptions.nullStr;
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'boolean';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:bool',
                    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
                    resolve: function resolve(str) {
                        return str[0] === 't' || str[0] === 'T';
                    },
                    options: _options.boolOptions,
                    stringify: function stringify(_ref) {
                        var value = _ref.value;
                        return value ? _options.boolOptions.trueStr : _options.boolOptions.falseStr;
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    format: 'OCT',
                    test: /^0o([0-7]+)$/,
                    resolve: function resolve(str, oct) {
                        return parseInt(oct, 8);
                    },
                    stringify: function stringify(_ref2) {
                        var value = _ref2.value;
                        return '0o' + value.toString(8);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    test: /^[-+]?[0-9]+$/,
                    resolve: function resolve(str) {
                        return parseInt(str, 10);
                    },
                    stringify: _stringify.stringifyNumber
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    format: 'HEX',
                    test: /^0x([0-9a-fA-F]+)$/,
                    resolve: function resolve(str, hex) {
                        return parseInt(hex, 16);
                    },
                    stringify: function stringify(_ref3) {
                        var value = _ref3.value;
                        return '0x' + value.toString(16);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:float',
                    test: /^(?:[-+]?\.inf|(\.nan))$/i,
                    resolve: function resolve(str, nan) {
                        return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
                    },
                    stringify: _stringify.stringifyNumber
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:float',
                    format: 'EXP',
                    test: /^[-+]?(?:0|[1-9][0-9]*)(\.[0-9]*)?[eE][-+]?[0-9]+$/,
                    resolve: function resolve(str) {
                        return parseFloat(str);
                    },
                    stringify: function stringify(_ref4) {
                        var value = _ref4.value;
                        return Number(value).toExponential();
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:float',
                    test: /^[-+]?(?:0|[1-9][0-9]*)\.([0-9]*)$/,
                    resolve: function resolve(str, frac) {
                        var node = new _Scalar.default(parseFloat(str));
                        if (frac && frac[frac.length - 1] === '0')
                            node.minFractionDigits = frac.length;
                        return node;
                    },
                    stringify: _stringify.stringifyNumber
                }]);
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/failsafe/index.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/failsafe/index.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js"));
            var _seq = _interopRequireDefault(__webpack_require__(/*! ./seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js"));
            var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js"));
            var _default = [_map.default, _seq.default, _string.default];
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/failsafe/map.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/failsafe/map.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
            var _Map = _interopRequireDefault(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));
            var _parseMap = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseMap */ "./node_modules/yaml/browser/dist/schema/parseMap.js"));
            function createMap(schema, obj, ctx) {
                var map = new _Map.default();
                if (obj instanceof Map) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var _step$value = (0, _slicedToArray2.default)(_step.value, 2), key = _step$value[0], value = _step$value[1];
                            map.items.push(schema.createPair(key, value, ctx));
                        }
                    }
                    catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    }
                    finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        }
                        finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                else if (obj && (0, _typeof2.default)(obj) === 'object') {
                    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
                        var _key = _Object$keys[_i];
                        map.items.push(schema.createPair(_key, obj[_key], ctx));
                    }
                }
                return map;
            }
            var _default = {
                createNode: createMap,
                default: true,
                nodeClass: _Map.default,
                tag: 'tag:yaml.org,2002:map',
                resolve: _parseMap.default
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/failsafe/seq.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _parseSeq = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseSeq */ "./node_modules/yaml/browser/dist/schema/parseSeq.js"));
            var _Seq = _interopRequireDefault(__webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));
            function createSeq(schema, obj, ctx) {
                var seq = new _Seq.default();
                if (obj && obj[Symbol.iterator]) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var it = _step.value;
                            var v = schema.createNode(it, ctx.wrapScalars, null, ctx);
                            seq.items.push(v);
                        }
                    }
                    catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    }
                    finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        }
                        finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                return seq;
            }
            var _default = {
                createNode: createSeq,
                default: true,
                nodeClass: _Seq.default,
                tag: 'tag:yaml.org,2002:seq',
                resolve: _parseSeq.default
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/failsafe/string.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/failsafe/string.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports.resolveString = void 0;
            var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
            var _options = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");
            var resolveString = function resolveString(doc, node) {
                // on error, will return { str: string, errors: Error[] }
                var res = node.strValue;
                if (!res)
                    return '';
                if (typeof res === 'string')
                    return res;
                res.errors.forEach(function (error) {
                    if (!error.source)
                        error.source = node;
                    doc.errors.push(error);
                });
                return res.str;
            };
            exports.resolveString = resolveString;
            var _default = {
                identify: function identify(value) {
                    return typeof value === 'string';
                },
                default: true,
                tag: 'tag:yaml.org,2002:str',
                resolve: resolveString,
                stringify: function stringify(item, ctx, onComment, onChompKeep) {
                    ctx = Object.assign({
                        actualString: true
                    }, ctx);
                    return (0, _stringify.stringifyString)(item, ctx, onComment, onChompKeep);
                },
                options: _options.strOptions
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/index.js": 
        /*!******************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/index.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.tags = exports.schemas = void 0;
            var _core = _interopRequireDefault(__webpack_require__(/*! ./core */ "./node_modules/yaml/browser/dist/tags/core.js"));
            var _failsafe = _interopRequireDefault(__webpack_require__(/*! ./failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js"));
            var _json = _interopRequireDefault(__webpack_require__(/*! ./json */ "./node_modules/yaml/browser/dist/tags/json.js"));
            var _yaml = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1 */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js"));
            var _map = _interopRequireDefault(__webpack_require__(/*! ./failsafe/map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js"));
            var _seq = _interopRequireDefault(__webpack_require__(/*! ./failsafe/seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js"));
            var _binary = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/binary */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js"));
            var _omap = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/omap */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js"));
            var _pairs = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js"));
            var _set = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/set */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js"));
            var _timestamp = __webpack_require__(/*! ./yaml-1.1/timestamp */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js");
            var schemas = {
                core: _core.default,
                failsafe: _failsafe.default,
                json: _json.default,
                yaml11: _yaml.default
            };
            exports.schemas = schemas;
            var tags = {
                binary: _binary.default,
                floatTime: _timestamp.floatTime,
                intTime: _timestamp.intTime,
                map: _map.default,
                omap: _omap.default,
                pairs: _pairs.default,
                seq: _seq.default,
                set: _set.default,
                timestamp: _timestamp.timestamp
            };
            exports.tags = tags;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/json.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/json.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _map = _interopRequireDefault(__webpack_require__(/*! ./failsafe/map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js"));
            var _seq = _interopRequireDefault(__webpack_require__(/*! ./failsafe/seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var _string = __webpack_require__(/*! ./failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");
            var schema = [_map.default, _seq.default, {
                    identify: function identify(value) {
                        return typeof value === 'string';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:str',
                    resolve: _string.resolveString,
                    stringify: function stringify(value) {
                        return JSON.stringify(value);
                    }
                }, {
                    identify: function identify(value) {
                        return value == null;
                    },
                    createNode: function createNode(schema, value, ctx) {
                        return ctx.wrapScalars ? new _Scalar.default(null) : null;
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:null',
                    test: /^null$/,
                    resolve: function resolve() {
                        return null;
                    },
                    stringify: function stringify(value) {
                        return JSON.stringify(value);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'boolean';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:bool',
                    test: /^true$/,
                    resolve: function resolve() {
                        return true;
                    },
                    stringify: function stringify(value) {
                        return JSON.stringify(value);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'boolean';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:bool',
                    test: /^false$/,
                    resolve: function resolve() {
                        return false;
                    },
                    stringify: function stringify(value) {
                        return JSON.stringify(value);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    test: /^-?(?:0|[1-9][0-9]*)$/,
                    resolve: function resolve(str) {
                        return parseInt(str, 10);
                    },
                    stringify: function stringify(value) {
                        return JSON.stringify(value);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:float',
                    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
                    resolve: function resolve(str) {
                        return parseFloat(str);
                    },
                    stringify: function stringify(value) {
                        return JSON.stringify(value);
                    }
                }];
            schema.scalarFallback = function (str) {
                throw new SyntaxError("Unresolved plain scalar ".concat(JSON.stringify(str)));
            };
            var _default = schema;
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/options.js": 
        /*!********************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/options.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.strOptions = exports.nullOptions = exports.boolOptions = exports.binaryOptions = void 0;
            var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var binaryOptions = {
                defaultType: _constants.Type.BLOCK_LITERAL,
                lineWidth: 76
            };
            exports.binaryOptions = binaryOptions;
            var boolOptions = {
                trueStr: 'true',
                falseStr: 'false'
            };
            exports.boolOptions = boolOptions;
            var nullOptions = {
                nullStr: 'null'
            };
            exports.nullOptions = nullOptions;
            var strOptions = {
                defaultType: _constants.Type.PLAIN,
                doubleQuoted: {
                    jsonEncoding: false,
                    minMultiLineLength: 40
                },
                fold: {
                    lineWidth: 80,
                    minContentWidth: 20
                }
            };
            exports.strOptions = strOptions;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _constants = __webpack_require__(/*! ../../constants */ "./node_modules/yaml/browser/dist/constants.js");
            var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
            var _string = __webpack_require__(/*! ../failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");
            var _options = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");
            /* global atob, btoa, Buffer */
            var _default = {
                identify: function identify(value) {
                    return value instanceof Uint8Array;
                },
                // Buffer inherits from Uint8Array
                default: false,
                tag: 'tag:yaml.org,2002:binary',
                /**
                 * Returns a Buffer in node and an Uint8Array in browsers
                 *
                 * To use the resulting buffer as an image, you'll want to do something like:
                 *
                 *   const blob = new Blob([buffer], { type: 'image/jpeg' })
                 *   document.querySelector('#photo').src = URL.createObjectURL(blob)
                 */
                resolve: function resolve(doc, node) {
                    if (typeof Buffer === 'function') {
                        var src = (0, _string.resolveString)(doc, node);
                        return Buffer.from(src, 'base64');
                    }
                    else if (typeof atob === 'function') {
                        var _src = atob((0, _string.resolveString)(doc, node));
                        var buffer = new Uint8Array(_src.length);
                        for (var i = 0; i < _src.length; ++i) {
                            buffer[i] = _src.charCodeAt(i);
                        }
                        return buffer;
                    }
                    else {
                        doc.errors.push(new _errors.YAMLReferenceError(node, 'This environment does not support reading binary tags; either Buffer or atob is required'));
                        return null;
                    }
                },
                options: _options.binaryOptions,
                stringify: function stringify(_ref, ctx, onComment, onChompKeep) {
                    var comment = _ref.comment, type = _ref.type, value = _ref.value;
                    var src;
                    if (typeof Buffer === 'function') {
                        src = value instanceof Buffer ? value.toString('base64') : Buffer.from(value.buffer).toString('base64');
                    }
                    else if (typeof btoa === 'function') {
                        var s = '';
                        for (var i = 0; i < value.length; ++i) {
                            s += String.fromCharCode(value[i]);
                        }
                        src = btoa(s);
                    }
                    else {
                        throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
                    }
                    if (!type)
                        type = _options.binaryOptions.defaultType;
                    if (type === _constants.Type.QUOTE_DOUBLE) {
                        value = src;
                    }
                    else {
                        var lineWidth = _options.binaryOptions.lineWidth;
                        var n = Math.ceil(src.length / lineWidth);
                        var lines = new Array(n);
                        for (var _i = 0, o = 0; _i < n; ++_i, o += lineWidth) {
                            lines[_i] = src.substr(o, lineWidth);
                        }
                        value = lines.join(type === _constants.Type.BLOCK_LITERAL ? '\n' : ' ');
                    }
                    return (0, _stringify.stringifyString)({
                        comment: comment,
                        type: type,
                        value: value
                    }, ctx, onComment, onChompKeep);
                }
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
            var _failsafe = _interopRequireDefault(__webpack_require__(/*! ../failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js"));
            var _options = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");
            var _binary = _interopRequireDefault(__webpack_require__(/*! ./binary */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js"));
            var _omap = _interopRequireDefault(__webpack_require__(/*! ./omap */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js"));
            var _pairs = _interopRequireDefault(__webpack_require__(/*! ./pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js"));
            var _set = _interopRequireDefault(__webpack_require__(/*! ./set */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js"));
            var _timestamp = __webpack_require__(/*! ./timestamp */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js");
            var _default = _failsafe.default.concat([{
                    identify: function identify(value) {
                        return value == null;
                    },
                    createNode: function createNode(schema, value, ctx) {
                        return ctx.wrapScalars ? new _Scalar.default(null) : null;
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:null',
                    test: /^(?:~|[Nn]ull|NULL)?$/,
                    resolve: function resolve() {
                        return null;
                    },
                    options: _options.nullOptions,
                    stringify: function stringify() {
                        return _options.nullOptions.nullStr;
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'boolean';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:bool',
                    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
                    resolve: function resolve() {
                        return true;
                    },
                    options: _options.boolOptions,
                    stringify: function stringify(_ref) {
                        var value = _ref.value;
                        return value ? _options.boolOptions.trueStr : _options.boolOptions.falseStr;
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'boolean';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:bool',
                    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
                    resolve: function resolve() {
                        return false;
                    },
                    options: _options.boolOptions,
                    stringify: function stringify(_ref2) {
                        var value = _ref2.value;
                        return value ? _options.boolOptions.trueStr : _options.boolOptions.falseStr;
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    format: 'BIN',
                    test: /^0b([0-1_]+)$/,
                    resolve: function resolve(str, bin) {
                        return parseInt(bin.replace(/_/g, ''), 2);
                    },
                    stringify: function stringify(_ref3) {
                        var value = _ref3.value;
                        return '0b' + value.toString(2);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    format: 'OCT',
                    test: /^[-+]?0([0-7_]+)$/,
                    resolve: function resolve(str, oct) {
                        return parseInt(oct.replace(/_/g, ''), 8);
                    },
                    stringify: function stringify(_ref4) {
                        var value = _ref4.value;
                        return (value < 0 ? '-0' : '0') + value.toString(8);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    test: /^[-+]?[0-9][0-9_]*$/,
                    resolve: function resolve(str) {
                        return parseInt(str.replace(/_/g, ''), 10);
                    },
                    stringify: _stringify.stringifyNumber
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:int',
                    format: 'HEX',
                    test: /^0x([0-9a-fA-F_]+)$/,
                    resolve: function resolve(str, hex) {
                        return parseInt(hex.replace(/_/g, ''), 16);
                    },
                    stringify: function stringify(_ref5) {
                        var value = _ref5.value;
                        return (value < 0 ? '-0x' : '0x') + value.toString(16);
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:float',
                    test: /^(?:[-+]?\.inf|(\.nan))$/i,
                    resolve: function resolve(str, nan) {
                        return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
                    },
                    stringify: _stringify.stringifyNumber
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:float',
                    format: 'EXP',
                    test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
                    resolve: function resolve(str) {
                        return parseFloat(str.replace(/_/g, ''));
                    },
                    stringify: function stringify(_ref6) {
                        var value = _ref6.value;
                        return Number(value).toExponential();
                    }
                }, {
                    identify: function identify(value) {
                        return typeof value === 'number';
                    },
                    default: true,
                    tag: 'tag:yaml.org,2002:float',
                    test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
                    resolve: function resolve(str, frac) {
                        var node = new _Scalar.default(parseFloat(str.replace(/_/g, '')));
                        if (frac) {
                            var f = frac.replace(/_/g, '');
                            if (f[f.length - 1] === '0')
                                node.minFractionDigits = f.length;
                        }
                        return node;
                    },
                    stringify: _stringify.stringifyNumber
                }], _binary.default, _omap.default, _pairs.default, _set.default, _timestamp.intTime, _timestamp.floatTime, _timestamp.timestamp);
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports.YAMLOMap = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));
            var _Map = _interopRequireDefault(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var _Seq = _interopRequireDefault(__webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));
            var _pairs = __webpack_require__(/*! ./pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js");
            var YAMLOMap = 
            /*#__PURE__*/
            function (_YAMLSeq) {
                (0, _inherits2.default)(YAMLOMap, _YAMLSeq);
                function YAMLOMap() {
                    var _this;
                    (0, _classCallCheck2.default)(this, YAMLOMap);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLOMap).call(this));
                    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "add", _Map.default.prototype.add.bind((0, _assertThisInitialized2.default)(_this)));
                    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "delete", _Map.default.prototype.delete.bind((0, _assertThisInitialized2.default)(_this)));
                    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "get", _Map.default.prototype.get.bind((0, _assertThisInitialized2.default)(_this)));
                    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "has", _Map.default.prototype.has.bind((0, _assertThisInitialized2.default)(_this)));
                    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "set", _Map.default.prototype.set.bind((0, _assertThisInitialized2.default)(_this)));
                    _this.tag = YAMLOMap.tag;
                    return _this;
                }
                (0, _createClass2.default)(YAMLOMap, [{
                        key: "toJSON",
                        value: function toJSON(_, ctx) {
                            var map = new Map();
                            if (ctx && ctx.onCreate)
                                ctx.onCreate(map);
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var pair = _step.value;
                                    var key = void 0, value = void 0;
                                    if (pair instanceof _Pair.default) {
                                        key = (0, _toJSON2.default)(pair.key, '', ctx);
                                        value = (0, _toJSON2.default)(pair.value, key, ctx);
                                    }
                                    else {
                                        key = (0, _toJSON2.default)(pair, '', ctx);
                                    }
                                    if (map.has(key))
                                        throw new Error('Ordered maps must not include duplicate keys');
                                    map.set(key, value);
                                }
                            }
                            catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            }
                            finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                }
                                finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            return map;
                        }
                    }]);
                return YAMLOMap;
            }(_Seq.default);
            exports.YAMLOMap = YAMLOMap;
            (0, _defineProperty2.default)(YAMLOMap, "tag", 'tag:yaml.org,2002:omap');
            function parseOMap(doc, cst) {
                var pairs = (0, _pairs.parsePairs)(doc, cst);
                var seenKeys = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;
                try {
                    for (var _iterator2 = pairs.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var key = _step2.value.key;
                        if (key instanceof _Scalar.default) {
                            if (seenKeys.includes(key.value)) {
                                var msg = 'Ordered maps must not include duplicate keys';
                                throw new _errors.YAMLSemanticError(cst, msg);
                            }
                            else {
                                seenKeys.push(key.value);
                            }
                        }
                    }
                }
                catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    }
                    finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                return Object.assign(new YAMLOMap(), pairs);
            }
            function createOMap(schema, iterable, ctx) {
                var pairs = (0, _pairs.createPairs)(schema, iterable, ctx);
                var omap = new YAMLOMap();
                omap.items = pairs.items;
                return omap;
            }
            var _default = {
                identify: function identify(value) {
                    return value instanceof Map;
                },
                nodeClass: YAMLOMap,
                default: false,
                tag: 'tag:yaml.org,2002:omap',
                resolve: parseOMap,
                createNode: createOMap
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.parsePairs = parsePairs;
            exports.createPairs = createPairs;
            exports.default = void 0;
            var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _Map = _interopRequireDefault(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _parseSeq = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseSeq */ "./node_modules/yaml/browser/dist/schema/parseSeq.js"));
            var _Seq = _interopRequireDefault(__webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));
            function parsePairs(doc, cst) {
                var seq = (0, _parseSeq.default)(doc, cst);
                for (var i = 0; i < seq.items.length; ++i) {
                    var item = seq.items[i];
                    if (item instanceof _Pair.default)
                        continue;
                    else if (item instanceof _Map.default) {
                        if (item.items.length > 1) {
                            var msg = 'Each pair must have its own sequence indicator';
                            throw new _errors.YAMLSemanticError(cst, msg);
                        }
                        var pair = item.items[0] || new _Pair.default();
                        if (item.commentBefore)
                            pair.commentBefore = pair.commentBefore ? "".concat(item.commentBefore, "\n").concat(pair.commentBefore) : item.commentBefore;
                        if (item.comment)
                            pair.comment = pair.comment ? "".concat(item.comment, "\n").concat(pair.comment) : item.comment;
                        item = pair;
                    }
                    seq.items[i] = item instanceof _Pair.default ? item : new _Pair.default(item);
                }
                return seq;
            }
            function createPairs(schema, iterable, ctx) {
                var pairs = new _Seq.default();
                pairs.tag = 'tag:yaml.org,2002:pairs';
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var it = _step.value;
                        var key = void 0, value = void 0;
                        if (Array.isArray(it)) {
                            if (it.length === 2) {
                                key = it[0];
                                value = it[1];
                            }
                            else
                                throw new TypeError("Expected [key, value] tuple: ".concat(it));
                        }
                        else if (it && it instanceof Object) {
                            var keys = Object.keys(it);
                            if (keys.length === 1) {
                                key = keys[0];
                                value = it[key];
                            }
                            else
                                throw new TypeError("Expected { key: value } tuple: ".concat(it));
                        }
                        else {
                            key = it;
                        }
                        var pair = schema.createPair(key, value, ctx);
                        pairs.items.push(pair);
                    }
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return pairs;
            }
            var _default = {
                default: false,
                tag: 'tag:yaml.org,2002:pairs',
                resolve: parsePairs,
                createNode: createPairs
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports.YAMLSet = void 0;
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
            var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
            var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
            var _Map = _interopRequireWildcard(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));
            var _Pair = _interopRequireDefault(__webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));
            var _parseMap = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseMap */ "./node_modules/yaml/browser/dist/schema/parseMap.js"));
            var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));
            var YAMLSet = 
            /*#__PURE__*/
            function (_YAMLMap) {
                (0, _inherits2.default)(YAMLSet, _YAMLMap);
                function YAMLSet() {
                    var _this;
                    (0, _classCallCheck2.default)(this, YAMLSet);
                    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSet).call(this));
                    _this.tag = YAMLSet.tag;
                    return _this;
                }
                (0, _createClass2.default)(YAMLSet, [{
                        key: "add",
                        value: function add(key) {
                            var pair = key instanceof _Pair.default ? key : new _Pair.default(key);
                            var prev = (0, _Map.findPair)(this.items, pair.key);
                            if (!prev)
                                this.items.push(pair);
                        }
                    }, {
                        key: "get",
                        value: function get(key, keepPair) {
                            var pair = (0, _Map.findPair)(this.items, key);
                            return !keepPair && pair instanceof _Pair.default ? pair.key instanceof _Scalar.default ? pair.key.value : pair.key : pair;
                        }
                    }, {
                        key: "set",
                        value: function set(key, value) {
                            if (typeof value !== 'boolean')
                                throw new Error("Expected boolean value for set(key, value) in a YAML set, not ".concat((0, _typeof2.default)(value)));
                            var prev = (0, _Map.findPair)(this.items, key);
                            if (prev && !value) {
                                this.items.splice(this.items.indexOf(prev), 1);
                            }
                            else if (!prev && value) {
                                this.items.push(new _Pair.default(key));
                            }
                        }
                    }, {
                        key: "toJSON",
                        value: function toJSON(_, ctx) {
                            return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLSet.prototype), "toJSON", this).call(this, _, ctx, Set);
                        }
                    }, {
                        key: "toString",
                        value: function toString(ctx, onComment, onChompKeep) {
                            if (!ctx)
                                return JSON.stringify(this);
                            if (this.hasAllNullValues())
                                return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLSet.prototype), "toString", this).call(this, ctx, onComment, onChompKeep);
                            else
                                throw new Error('Set items must all have null values');
                        }
                    }]);
                return YAMLSet;
            }(_Map.default);
            exports.YAMLSet = YAMLSet;
            (0, _defineProperty2.default)(YAMLSet, "tag", 'tag:yaml.org,2002:set');
            function parseSet(doc, cst) {
                var map = (0, _parseMap.default)(doc, cst);
                if (!map.hasAllNullValues())
                    throw new _errors.YAMLSemanticError(cst, 'Set items must all have null values');
                return Object.assign(new YAMLSet(), map);
            }
            function createSet(schema, iterable, ctx) {
                var set = new YAMLSet();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var value = _step.value;
                        set.items.push(schema.createPair(value, null, ctx));
                    }
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return set;
            }
            var _default = {
                identify: function identify(value) {
                    return value instanceof Set;
                },
                nodeClass: YAMLSet,
                default: false,
                tag: 'tag:yaml.org,2002:set',
                resolve: parseSet,
                createNode: createSet
            };
            exports.default = _default;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js": 
        /*!*******************************************************************!*\
          !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js ***!
          \*******************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.timestamp = exports.floatTime = exports.intTime = void 0;
            var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
            var parseSexagesimal = function parseSexagesimal(sign, parts) {
                var n = parts.split(':').reduce(function (n, p) {
                    return n * 60 + Number(p);
                }, 0);
                return sign === '-' ? -n : n;
            }; // hhhh:mm:ss.sss
            var stringifySexagesimal = function stringifySexagesimal(_ref) {
                var value = _ref.value;
                if (isNaN(value) || !isFinite(value))
                    return (0, _stringify.stringifyNumber)(value);
                var sign = '';
                if (value < 0) {
                    sign = '-';
                    value = Math.abs(value);
                }
                var parts = [value % 60]; // seconds, including ms
                if (value < 60) {
                    parts.unshift(0); // at least one : is required
                }
                else {
                    value = Math.round((value - parts[0]) / 60);
                    parts.unshift(value % 60); // minutes
                    if (value >= 60) {
                        value = Math.round((value - parts[0]) / 60);
                        parts.unshift(value); // hours
                    }
                }
                return sign + parts.map(function (n) {
                    return n < 10 ? '0' + String(n) : String(n);
                }).join(':').replace(/000000\d*$/, '') // % 60 may introduce error
                ;
            };
            var intTime = {
                identify: function identify(value) {
                    return typeof value === 'number';
                },
                default: true,
                tag: 'tag:yaml.org,2002:int',
                format: 'TIME',
                test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
                resolve: function resolve(str, sign, parts) {
                    return parseSexagesimal(sign, parts.replace(/_/g, ''));
                },
                stringify: stringifySexagesimal
            };
            exports.intTime = intTime;
            var floatTime = {
                identify: function identify(value) {
                    return typeof value === 'number';
                },
                default: true,
                tag: 'tag:yaml.org,2002:float',
                format: 'TIME',
                test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
                resolve: function resolve(str, sign, parts) {
                    return parseSexagesimal(sign, parts.replace(/_/g, ''));
                },
                stringify: stringifySexagesimal
            };
            exports.floatTime = floatTime;
            var timestamp = {
                identify: function identify(value) {
                    return value instanceof Date;
                },
                default: true,
                tag: 'tag:yaml.org,2002:timestamp',
                // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
                // may be omitted altogether, resulting in a date format. In such a case, the time part is
                // assumed to be 00:00:00Z (start of day, UTC).
                test: RegExp('^(?:' + '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})' + // YYYY-Mm-Dd
                    '(?:(?:t|T|[ \\t]+)' + // t | T | whitespace
                    '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)' + // Hh:Mm:Ss(.ss)?
                    '(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?' + // Z | +5 | -03:30
                    ')?' + ')$'),
                resolve: function resolve(str, year, month, day, hour, minute, second, millisec, tz) {
                    if (millisec)
                        millisec = (millisec + '00').substr(1, 3);
                    var date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec || 0);
                    if (tz && tz !== 'Z') {
                        var d = parseSexagesimal(tz[0], tz.slice(1));
                        if (Math.abs(d) < 30)
                            d *= 60;
                        date -= 60000 * d;
                    }
                    return new Date(date);
                },
                stringify: function stringify(_ref2) {
                    var value = _ref2.value;
                    return value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '');
                }
            };
            exports.timestamp = timestamp;
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/toJSON.js": 
        /*!**************************************************!*\
          !*** ./node_modules/yaml/browser/dist/toJSON.js ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = toJSON;
            function toJSON(value, arg, ctx) {
                if (Array.isArray(value))
                    return value.map(function (v, i) {
                        return toJSON(v, String(i), ctx);
                    });
                if (value && typeof value.toJSON === 'function') {
                    var anchor = ctx && ctx.anchors && ctx.anchors.find(function (a) {
                        return a.node === value;
                    });
                    if (anchor)
                        ctx.onCreate = function (res) {
                            anchor.res = res;
                            delete ctx.onCreate;
                        };
                    var res = value.toJSON(arg, ctx);
                    if (anchor && ctx.onCreate)
                        ctx.onCreate(res);
                    return res;
                }
                return value;
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/dist/warnings.js": 
        /*!****************************************************!*\
          !*** ./node_modules/yaml/browser/dist/warnings.js ***!
          \****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.warn = warn;
            exports.warnFileDeprecation = warnFileDeprecation;
            exports.warnOptionDeprecation = warnOptionDeprecation;
            /* global global, console */
            function warn(warning, type) {
                if (global && global._YAML_SILENCE_WARNINGS)
                    return;
                var _ref = global && global.process, emitWarning = _ref.emitWarning; // This will throw in Jest if `warning` is an Error instance due to
                // https://github.com/facebook/jest/issues/2549
                if (emitWarning)
                    emitWarning(warning, type);
                else {
                    // eslint-disable-next-line no-console
                    console.warn(type ? "".concat(type, ": ").concat(warning) : warning);
                }
            }
            function warnFileDeprecation(filename) {
                if (global && global._YAML_SILENCE_DEPRECATION_WARNINGS)
                    return;
                var path = filename.replace(/.*yaml[/\\]/i, '').replace(/\.js$/, '').replace(/\\/g, '/');
                warn("The endpoint 'yaml/".concat(path, "' will be removed in a future release."), 'DeprecationWarning');
            }
            var warned = {};
            function warnOptionDeprecation(name, alternative) {
                if (global && global._YAML_SILENCE_DEPRECATION_WARNINGS)
                    return;
                if (warned[name])
                    return;
                warned[name] = true;
                var msg = "The option '".concat(name, "' will be removed in a future release");
                msg += alternative ? ", use '".concat(alternative, "' instead.") : '.';
                warn(msg, 'DeprecationWarning');
            }
            /***/ 
        }),
        /***/ "./node_modules/yaml/browser/index.js": 
        /*!********************************************!*\
          !*** ./node_modules/yaml/browser/index.js ***!
          \********************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! ./dist */ "./node_modules/yaml/browser/dist/index.js").default;
            /***/ 
        }),
        /***/ "./src/app/tools/json-to-yaml/index.ts": 
        /*!*********************************************!*\
          !*** ./src/app/tools/json-to-yaml/index.ts ***!
          \*********************************************/
        /*! exports provided: JsonToYamlComponent, JsonToYamlModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToYamlComponent", function () { return JsonToYamlComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToYamlModule", function () { return JsonToYamlModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/transform-tool/transform-tool.component */ "./src/app/core/transform-tool/transform-tool.component.ts");
            /* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js");
            /* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(yaml__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _readme_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./readme.md */ "./src/app/tools/json-to-yaml/readme.md");
            var JsonToYamlComponent = /** @class */ (function (_super) {
                __extends(JsonToYamlComponent, _super);
                function JsonToYamlComponent() {
                    var _this_1 = _super.apply(this, arguments) || this;
                    _this_1.id = 'json-to-yaml';
                    _this_1.action = 'Convert';
                    _this_1.schema = {
                        type: 'object',
                        properties: {
                            input: { type: 'string', title: 'JSON', description: 'JSON to convert' }
                        },
                        required: ['input']
                    };
                    _this_1.documentation = _readme_md__WEBPACK_IMPORTED_MODULE_6__["default"];
                    return _this_1;
                }
                JsonToYamlComponent.prototype.onTransform = function (transform) {
                    var result = yaml__WEBPACK_IMPORTED_MODULE_2___default.a.parse(transform.input);
                    return yaml__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(result);
                };
                return JsonToYamlComponent;
            }(src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__["TransformToolComponent"]));
            var JsonToYamlModule = /** @class */ (function () {
                function JsonToYamlModule() {
                }
                return JsonToYamlModule;
            }());
            JsonToYamlModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        JsonToYamlComponent,
                    ],
                    imports: [
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                            { path: '', component: JsonToYamlComponent }
                        ])
                    ]
                })
            ], JsonToYamlModule);
            /***/ 
        }),
        /***/ "./src/app/tools/json-to-yaml/readme.md": 
        /*!**********************************************!*\
          !*** ./src/app/tools/json-to-yaml/readme.md ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n## What is converting JSON to YAML?");
            /***/ 
        })
    }]);
//# sourceMappingURL=tools-json-to-yaml-es2015.js.map
//# sourceMappingURL=tools-json-to-yaml-es5.js.map
//# sourceMappingURL=tools-json-to-yaml-es5.js.map