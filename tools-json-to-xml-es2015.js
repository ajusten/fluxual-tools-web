(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tools-json-to-xml"],{

/***/ "./node_modules/jsontoxml/jsontoxml.js":
/*!*********************************************!*\
  !*** ./node_modules/jsontoxml/jsontoxml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//copyright Ryan Day 2010 <http://ryanday.org>, Joscha Feth 2013 <http://www.feth.com> [MIT Licensed]

var element_start_char = 
	"a-zA-Z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FFF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
var element_non_start_char = "\-.0-9\u00B7\u0300-\u036F\u203F\u2040"; 
var element_replace = new RegExp("^([^" + element_start_char + "])|^((x|X)(m|M)(l|L))|([^" + element_start_char + element_non_start_char + "])", "g");
var not_safe_in_xml = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;

var process_to_xml = function(node_data,options){

  var makeNode = function(name, content, attributes, level, hasSubNodes) {

    var indent_value = options.indent !== undefined ? options.indent : "\t";
    var indent = options.prettyPrint ? '\n' + new Array(level).join(indent_value) : '';
    if(options.removeIllegalNameCharacters) {
	name = name.replace(element_replace, '_');
    }

    var node = [indent, '<',name, (attributes || '')];
    if(content && content.length > 0 || options.html) {
      node.push('>')
      node.push(content);
      hasSubNodes && node.push(indent);
      node.push('</');
      node.push(name);
      node.push('>');
    } else {
      node.push('/>');
    }
    return node.join('');
  };

  return (function fn(node_data,node_descriptor, level){
    var type = typeof node_data;
    if((Array.isArray) ? Array.isArray(node_data) : node_data instanceof Array) {
      type = 'array';
    } else if(node_data instanceof Date) {
      type = 'date';
    }

    switch(type) {
    //if value is an array create child nodes from values
      case 'array':
        var ret = [];
        node_data.map(function(v){
            ret.push(fn(v,1, level+1));
            //entries that are values of an array are the only ones that can be special node descriptors
        });
        options.prettyPrint && ret.push('\n');
        return ret.join('');
        break;

      case 'date':
        // cast dates to ISO 8601 date (soap likes it)
        return node_data.toJSON?node_data.toJSON():node_data+'';
        break;

      case 'object':
        if(node_descriptor == 1 && node_data.name){
          var content = []
          , attributes = []
          ;

          if(node_data.attrs) {
            if(typeof node_data.attrs != 'object') {
            // attrs is a string, etc. - just use it as an attribute
              attributes.push(' ');
              attributes.push(node_data.attrs);
            } else {
              for(var key in node_data.attrs){
                var value = node_data.attrs[key];
                attributes.push(' ');
                attributes.push(key);
                attributes.push('="')
                attributes.push(options.escape ? esc(value) : value);
                attributes.push('"');
              }
            }
          }

          //later attributes can be added here
          if(typeof node_data.value != 'undefined') {
            var c = ''+node_data.value;
            content.push(options.escape && !node_data.noescape ? esc(c) : c);
          } else if(typeof node_data.text != 'undefined') {
            var c = ''+node_data.text;
            content.push(options.escape && !node_data.noescape ? esc(c) : c);
          }

          if(node_data.children){
            content.push(fn(node_data.children,0,level+1));
          }

          return makeNode(node_data.name, content.join(''), attributes.join(''),level,!!node_data.children);

        } else {
          var nodes = [];
          for(var name in node_data){
            nodes.push(makeNode(name, fn(node_data[name],0,level+1),null,level+1));
          }
          options.prettyPrint && nodes.length > 0 && nodes.push('\n');
          return nodes.join('');
        }
        break;

      case 'function':
        return node_data();
        break;

      default:
        return options.escape ? esc(node_data) : ''+node_data;
    }

  }(node_data, 0, 0))
};


var xml_header = function(standalone) {
  var ret = ['<?xml version="1.0" encoding="utf-8"'];

  if(standalone) {
    ret.push(' standalone="yes"');
  }

  ret.push('?>');

  return ret.join('');
};

module.exports = function(obj,options){

  var Buf = typeof Buffer !== 'undefined' ? Buffer : function Buffer () {};

  if(typeof obj == 'string' || obj instanceof Buf) {
    try{
      obj = JSON.parse(obj.toString());
    } catch(e){
      return false;
    }
  }

  var xmlheader = '';
  var docType = '';
  if(options) {
    if(typeof options == 'object') {
      // our config is an object

      if(options.xmlHeader) {
        // the user wants an xml header
        xmlheader = xml_header(!!options.xmlHeader.standalone);
      }

      if(typeof options.docType != 'undefined') {
        docType = '<!DOCTYPE '+options.docType+'>'
      }
    } else {
      // our config is a boolean value, so just add xml header
      xmlheader = xml_header();
    }
  }
  options = options || {}

  var ret = [
    xmlheader,
    (options.prettyPrint && docType ? '\n' : ''),
  docType,
    process_to_xml(obj,options)
  ];

  return ret.join('');
}

module.exports.json_to_xml=
module.exports.obj_to_xml = module.exports;

module.exports.escape = esc;

function esc(str){
  return (''+str).replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&apos;')
      .replace(/"/g, '&quot;')
      .replace(not_safe_in_xml, '');
}

module.exports.cdata = cdata;

function cdata(str){
  if(str) return "<![CDATA["+str.replace(/]]>/g,'')+']]>';
  return "<![CDATA[]]>";
};


/***/ }),

/***/ "./src/app/tools/json-to-xml/index.ts":
/*!********************************************!*\
  !*** ./src/app/tools/json-to-xml/index.ts ***!
  \********************************************/
/*! exports provided: JsonToXmlComponent, JsonToXmlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToXmlComponent", function() { return JsonToXmlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToXmlModule", function() { return JsonToXmlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/transform-tool/transform-tool.component */ "./src/app/core/transform-tool/transform-tool.component.ts");
/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsontoxml */ "./node_modules/jsontoxml/jsontoxml.js");
/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsontoxml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _readme_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./readme.md */ "./src/app/tools/json-to-xml/readme.md");







class JsonToXmlComponent extends src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__["TransformToolComponent"] {
    constructor() {
        super(...arguments);
        this.id = 'json-to-xml';
        this.action = 'Convert';
        this.schema = {
            type: 'object',
            properties: {
                input: { type: 'string', title: 'JSON', description: 'JSON to Convert' },
                advanced: {
                    type: 'object',
                    properties: {
                        xmlHeader: { type: 'boolean', description: 'Add XML header' },
                        prettyPrint: { type: 'boolean', default: true, description: 'Make XML human readable' }
                    },
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
        this.documentation = _readme_md__WEBPACK_IMPORTED_MODULE_6__["default"];
    }
    onTransform(transform) {
        return jsontoxml__WEBPACK_IMPORTED_MODULE_2___default()(transform.input, transform.advanced);
    }
}
let JsonToXmlModule = class JsonToXmlModule {
};
JsonToXmlModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            JsonToXmlComponent,
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                { path: '', component: JsonToXmlComponent }
            ])
        ]
    })
], JsonToXmlModule);



/***/ }),

/***/ "./src/app/tools/json-to-xml/readme.md":
/*!*********************************************!*\
  !*** ./src/app/tools/json-to-xml/readme.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);
//# sourceMappingURL=tools-json-to-xml-es2015.js.map