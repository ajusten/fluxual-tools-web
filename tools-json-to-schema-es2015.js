(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tools-json-to-schema"],{

/***/ "./node_modules/generate-schema/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/generate-schema/src/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.generic = __webpack_require__(/*! ./schemas/generic */ "./node_modules/generate-schema/src/schemas/generic.js")
exports.mongoose = __webpack_require__(/*! ./schemas/mongoose */ "./node_modules/generate-schema/src/schemas/mongoose.js")
exports.bigquery = __webpack_require__(/*! ./schemas/bigquery */ "./node_modules/generate-schema/src/schemas/bigquery.js")
exports.mysql = __webpack_require__(/*! ./schemas/mysql */ "./node_modules/generate-schema/src/schemas/mysql.js")
exports.json = __webpack_require__(/*! ./schemas/json */ "./node_modules/generate-schema/src/schemas/json.js")
exports.clickhouse = __webpack_require__(/*! ./schemas/clickhouse */ "./node_modules/generate-schema/src/schemas/clickhouse.js")


/***/ }),

/***/ "./node_modules/generate-schema/src/schemas/bigquery.js":
/*!**************************************************************!*\
  !*** ./node_modules/generate-schema/src/schemas/bigquery.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(/*! ../utils */ "./node_modules/generate-schema/src/utils.js")

function getPropertyMode (value) {
  return Array.isArray(value) ? 'REPEATED' : 'NULLABLE'
}

function getPropertyType (value) {
  if (Array.isArray(value)) {
    return getPropertyType(value[0])
  }

  if (value instanceof Date) return 'TIMESTAMP'
  if (typeof value === 'object') return 'RECORD'
  if (typeof value === 'boolean') return 'BOOLEAN'
  if (typeof value === 'string') {
    if (utils.isDateString(value)) return 'DATE'
    if (utils.isTimestamp(value)) return 'TIMESTAMP'
  }

  if (!isNaN(value)) {
    return Number.isInteger(parseFloat(value)) ? 'INTEGER' : 'FLOAT'
  }

  return 'STRING'
}

function processFields (data) {
  return Object.keys(data).map(function (key) {
    var value = data[key]
    var entry = {
      name: key,
      type: getPropertyType(data[key]),
      mode: getPropertyMode(data[key])
    }

    if (entry.type === 'RECORD') {
      entry.fields = processFields((entry.mode === 'REPEATED') ? value[0] : value)
    }

    return entry
  })
}

module.exports = function Process (data) {
  return processFields(data)
}


/***/ }),

/***/ "./node_modules/generate-schema/src/schemas/clickhouse.js":
/*!****************************************************************!*\
  !*** ./node_modules/generate-schema/src/schemas/clickhouse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Modules
var Type = __webpack_require__(/*! type-of-is */ "./node_modules/type-of-is/index.js")
var Utils = __webpack_require__(/*! ../utils */ "./node_modules/generate-schema/src/utils.js")

// Type Mapping for Clickhouse
var types = {
  boolean: 'String',
  string: 'String',
  number: 'Int32',
  date: 'Date',
  timestamp: 'DateTime',
  object: 'Nested',
  'regexp': 'String',
  'undefined': 'String',
  'null': 'String'
}

var lang = {
  create: function (name) {
    return ['CREATE TABLE ', name, ' ('].join('')
  },

  close: function (id, dateField) {
    if (!dateField) return [') ENGINE = Memory;'].join('')
    else return [') ENGINE = MergeTree(', dateField, ', (', id, ', ', dateField, '), 8192);'].join('')
  },

  id: function (name, value) {
    return ['  ', name, '_id ', value, ','].join('')
  },

  property: function (name, value) {
    return ['  ', name, ' ', value, ','].join('')
  },

}

function processObject (obj, options, dateField) {
  var name = options.tableName
  var parent = options.parentTableName
  var parentId = options.parentTableId
  var parentIdType = options.parentTableIdType

  // In-memory storage
  var keys = Object.keys(obj)
  var output = []
  var tables = []

  // Table variables
  var id = null
  var idType = 'string'

  // Initialize Table
  output.push(lang.create(name))

  if (parent) {
    output.push(lang.property(parent + '_' + parentId, types[parentIdType]))
  }

  // Obtain ID
  var nkey
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === 'id' || keys[i].toLowerCase().indexOf('_id') > -1) {
      nkey = keys[i]
      obj[nkey] = obj[keys[i]]
      keys[i] = nkey
      id = keys[i]
      idType = typeof obj[keys[i]]
    }
  }

  if (!id) {
    id = 'id'
    idType = parentIdType || idType
    output.push(lang.property(id, types[idType]))
  }

  // Create table properties
  var key, value, type
  for (var i = 0; i < keys.length; i++) {
    key = keys[i]
    value = obj[key]
    type = value instanceof Date
      ? 'date'
      : Type.string(value).toLowerCase()

    if (type == 'date' && !dateField) {
	var dateField = key;
    }

    if (type !== 'undefined') {
      type = Utils.isTimestamp(value) ? 'timestamp' : type
    }

    if (type === 'function') {
      continue
    }

    // pojo
    if (type === 'object' && !value.length) {
      tables.push('')
      tables.push(processObject(value, {
        parentTableName: name,
        parentTableId: id,
        parentTableIdType: idType,
        tableName: name + '_' + key
      }).join(''))
      continue
    }

    // array
    if (type === 'object' || type === 'array') {
      if (typeof value[0] === 'object') {
        tables.push('')
        tables.push(processObject(value[0], {
          parentTableName: name,
          parentTableId: id,
          parentTableIdType: idType,
          tableName: name + '_' + key
        }).join(''))
        continue
      }

      tables.push('')
      tables.push(processObject({
        value: typeof value[0]
      }, {
        parentTableName: name,
        parentTableId: id,
        parentTableIdType: idType,
        tableName: name + '_' + key
      }).join(''))

      continue
    }

    output.push(lang.property(key, types[type]))
  }

  output[output.length - 1] = Utils.arrayLastItem(output)
    .substr(0, Utils.arrayLastItem(output).length - 1)

  output.push(lang.close(id, dateField))

  return output.concat(tables)
}

module.exports = function Process (tableName, object, dateField) {
  if (typeof tableName !== 'string') {
    object = tableName
    tableName = 'generic'
  }
  if (!dateField)
    dateField = null

  return processObject(object, {
    tableName: tableName
  }, dateField).join('')
}


/***/ }),

/***/ "./node_modules/generate-schema/src/schemas/generic.js":
/*!*************************************************************!*\
  !*** ./node_modules/generate-schema/src/schemas/generic.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Modules
var Type = __webpack_require__(/*! type-of-is */ "./node_modules/type-of-is/index.js")
var Utils = __webpack_require__(/*! ../utils */ "./node_modules/generate-schema/src/utils.js")

module.exports = function Process (object, output) {
  output = output || {}

  for (var key in object) {
    var value = object[key]
    var type = Type.string(value).toLowerCase()

    if (type === 'undefined') {
      type = 'null'
    }

    if (type === 'string' && Utils.isDate(value)) {
      type = 'date'
    }

    if (type !== 'object') {
      output[key] = {
        type: type
      }
    } else {
      output[key] = Process(object[key])
      output[key].type = type
    }
  }

  return output
}

/***/ }),

/***/ "./node_modules/generate-schema/src/schemas/json.js":
/*!**********************************************************!*\
  !*** ./node_modules/generate-schema/src/schemas/json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Modules
var Type = __webpack_require__(/*! type-of-is */ "./node_modules/type-of-is/index.js")

// Constants
var DRAFT = 'http://json-schema.org/draft-04/schema#'

function getPropertyFormat(value) {
  var type = Type.string(value).toLowerCase()

  if (type === 'date') return 'date-time'

  return null
}

function getPropertyType(value) {
  var type = Type.string(value).toLowerCase()

  if (type === 'date') return 'string'
  if (type === 'regexp') return 'string'
  if (type === 'function') return 'string'

  return type
}

function getUniqueKeys(a, b, c) {
  a = Object.keys(a)
  b = Object.keys(b)
  c = c || []

  var value
  var cIndex
  var aIndex

  for (var keyIndex = 0, keyLength = b.length; keyIndex < keyLength; keyIndex++) {
    value = b[keyIndex]
    aIndex = a.indexOf(value)
    cIndex = c.indexOf(value)

    if (aIndex === -1) {
      if (cIndex !== -1) {
        // Value is optional, it doesn't exist in A but exists in B(n)
        c.splice(cIndex, 1)
      }
    } else if (cIndex === -1) {
      // Value is required, it exists in both B and A, and is not yet present in C
      c.push(value)
    }
  }

  return c
}

function processArray(array, output, nested) {
  var format
  var oneOf
  var type

  if (nested && output) {
    output = { items: output }
  } else {
    output = output || {}
    output.type = getPropertyType(array)
    output.items = output.items || {}
    type = output.items.type || null
  }

  // Determine whether each item is different
  for (var arrIndex = 0, arrLength = array.length; arrIndex < arrLength; arrIndex++) {
    var elementType = getPropertyType(array[arrIndex])
    var elementFormat = getPropertyFormat(array[arrIndex])

    if (type && elementType !== type) {
      output.items.oneOf = []
      oneOf = true
      break
    } else {
      type = elementType
      format = elementFormat
    }
  }

  // Setup type otherwise
  if (!oneOf && type) {
    output.items.type = type
    if (format) {
      output.items.format = format
    }
  } else if (oneOf && type !== 'object') {
    output.items = {
      oneOf: [{ type: type }],
      required: output.items.required
    }
  }

  // Process each item depending
  if (typeof output.items.oneOf !== 'undefined' || type === 'object') {
    for (var itemIndex = 0, itemLength = array.length; itemIndex < itemLength; itemIndex++) {
      var value = array[itemIndex]
      var itemType = getPropertyType(value)
      var itemFormat = getPropertyFormat(value)
      var arrayItem
      if (itemType === 'object') {
        if (output.items.properties) {
          output.items.required = getUniqueKeys(output.items.properties, value, output.items.required)
        }
        arrayItem = processObject(value, oneOf ? {} : output.items.properties, true)
      } else if (itemType === 'array') {
        arrayItem = processArray(value, oneOf ? {} : output.items.properties, true)
      } else {
        arrayItem = {}
        arrayItem.type = itemType
        if (itemFormat) {
          arrayItem.format = itemFormat
        }
      }
      if (oneOf) {
        var childType = Type.string(value).toLowerCase()
        var tempObj = {}
        if (!arrayItem.type && childType === 'object') {
          tempObj.properties = arrayItem
          tempObj.type = 'object'
          arrayItem = tempObj
        }
        output.items.oneOf.push(arrayItem)
      } else {
        if (output.items.type !== 'object') {
          continue;
        }
        output.items.properties = arrayItem
      }
    }
  }
  return nested ? output.items : output
}

function processObject(object, output, nested) {
  if (nested && output) {
    output = { properties: output }
  } else {
    output = output || {}
    output.type = getPropertyType(object)
    output.properties = output.properties || {}
  }

  for (var key in object) {
    var value = object[key]
    var type = getPropertyType(value)
    var format = getPropertyFormat(value)

    type = type === 'undefined' ? 'null' : type

    if (type === 'object') {
      output.properties[key] = processObject(value, output.properties[key])
      continue
    }

    if (type === 'array') {
      output.properties[key] = processArray(value, output.properties[key])
      continue
    }

    if (output.properties[key]) {
      var entry = output.properties[key]
      var hasTypeArray = Array.isArray(entry.type)

      // When an array already exists, we check the existing
      // type array to see if it contains our current property
      // type, if not, we add it to the array and continue
      if (hasTypeArray && entry.type.indexOf(type) < 0) {
        entry.type.push(type)
      }

      // When multiple fields of differing types occur,
      // json schema states that the field must specify the
      // primitive types the field allows in array format.
      if (!hasTypeArray && entry.type !== type) {
        entry.type = [entry.type, type]
      }

      continue
    }

    output.properties[key] = {}
    output.properties[key].type = type

    if (format) {
      output.properties[key].format = format
    }
  }

  return nested ? output.properties : output
}

module.exports = function Process (title, object) {
  var processOutput
  var output = {
    $schema: DRAFT
  }

  // Determine title exists
  if (typeof title !== 'string') {
    object = title
    title = undefined
  } else {
    output.title = title
  }

  // Set initial object type
  output.type = Type.string(object).toLowerCase()

  // Process object
  if (output.type === 'object') {
    processOutput = processObject(object)
    output.type = processOutput.type
    output.properties = processOutput.properties
  }

  if (output.type === 'array') {
    processOutput = processArray(object)
    output.type = processOutput.type
    output.items = processOutput.items

    if (output.title) {
      output.items.title = output.title
      output.title += ' Set'
    }
  }

  // Output
  return output
}


/***/ }),

/***/ "./node_modules/generate-schema/src/schemas/mongoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/generate-schema/src/schemas/mongoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Modules
var Type = __webpack_require__(/*! type-of-is */ "./node_modules/type-of-is/index.js")
var Utils = __webpack_require__(/*! ../utils */ "./node_modules/generate-schema/src/utils.js")

function getNativeType (string) {
  switch (string) {
    case "array":
      return 'Array'

    case "buffer":
      return 'Buffer'

    case "boolean":
      return 'Boolean'

    case "date":
      return 'Date'

    case "number":
      return 'Number'

    case "string":
      return 'String'

    case "objectid":
      return 'ObjectId'

    case "null":
    case "undefined":
    case "regexp":
    default:
      return 'Mixed'
  }
}

module.exports = function Process (object, output) {
  var output = output || {}

  for (var key in object) {
    var value = object[key]
    var originalType = null
    var elementType = null
    var type = null

    if (value instanceof Buffer) {
      type = 'buffer'
    }

    if (value != null && typeof value.toString !== 'undefined' && value.toString().match(/^[0-9a-fA-F]{24}$/)) {
      type = 'objectid'
    }

    if (!type) {
      type = Type.string(value).toLowerCase()
    }

    if (type === 'string' && Utils.isDate(value)) {
      type = 'date'
    }

    if (type === 'object') {
      output[key] = Process(object[key])
    } else {
      if (type === 'undefined') {
        type = 'null'
      }

      if (type === 'array' && value.length) {
        originalType = type
        type = undefined

        for (var index = 0, length = value.length; index < length; index++) {
          elementType = Type.string(value[index]).toLowerCase()

          if (type && elementType !== type) {
            type = 'mixed'
            break
          } else {
            type = elementType
          }
        }
      }

      if (originalType && originalType === 'array') {
        output[key] = { type: [getNativeType(type)] }
      } else {
        output[key] = { type: getNativeType(type) }
      }
    }
  }

  return output
}

/***/ }),

/***/ "./node_modules/generate-schema/src/schemas/mysql.js":
/*!***********************************************************!*\
  !*** ./node_modules/generate-schema/src/schemas/mysql.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Modules
var Type = __webpack_require__(/*! type-of-is */ "./node_modules/type-of-is/index.js")
var Utils = __webpack_require__(/*! ../utils */ "./node_modules/generate-schema/src/utils.js")

// Type Mapping
var types = {
  boolean: 'BOOLEAN',
  string: 'TEXT',
  number: 'INT',
  date: 'DATE',
  timestamp: 'TIMESTAMP',
  'regexp': 'TEXT',
  'undefined': 'TEXT',
  'null': 'TEXT'
}

var lang = {
  create: function (name) {
    return ['CREATE TABLE ', name, ' ('].join('')
  },

  close: function () {
    return ');'
  },

  id: function (name, value) {
    return ['  ', name, '_id ', value, ','].join('')
  },

  property: function (name, value) {
    return ['  ', name, ' ', value, ','].join('')
  },

  primary: function (id) {
    return ['  PRIMARY KEY (', id, '),'].join('')
  },

  foreign: function (key1, table, key2) {
    return ['  FOREIGN KEY (', key1, ') REFERENCES ', table, '(', key2, '),'].join('')
  },
}

function processObject (obj, options) {
  var name = options.tableName
  var parent = options.parentTableName
  var parentId = options.parentTableId
  var parentIdType = options.parentTableIdType

  // In-memory storage
  var keys = Object.keys(obj)
  var output = []
  var tables = []

  // Table variables
  var id = null
  var idType = 'string'

  // Initialize Table
  output.push(lang.create(name))

  if (parent) {
    output.push(lang.property(parent + '_' + parentId, types[parentIdType]))
  }
  
  // Obtain ID
  var nkey
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === 'id' || keys[i].toLowerCase().indexOf('_id') > -1) {
      nkey = keys[i]
      obj[nkey] = obj[keys[i]]
      keys[i] = nkey
      id = keys[i]
      idType = typeof obj[keys[i]]
    }
  }

  if (!id) {
    id = 'id'
    idType = parentIdType || idType
    output.push(lang.property(id, types[idType]))
  }

  // Create table properties
  var key, value, type
  for (var i = 0; i < keys.length; i++) {
    key = keys[i]
    value = obj[key]
    type = value instanceof Date
      ? 'date'
      : Type.string(value).toLowerCase()

    if (type !== 'undefined') {
      type = Utils.isTimestamp(value) ? 'timestamp' : type
    }

    if (type === 'function') {
      continue
    }
    
    // pojo
    if (type === 'object' && !value.length) {
      tables.push('')
      tables.push(processObject(value, {
        parentTableName: name,
        parentTableId: id,
        parentTableIdType: idType,
        tableName: name + '_' + key
      }).join('\n'))
      continue
    }

    // array
    if (type === 'object' || type === 'array') {
      if (typeof value[0] === 'object') {
        tables.push('')
        tables.push(processObject(value[0], {
          parentTableName: name,
          parentTableId: id,
          parentTableIdType: idType,
          tableName: name + '_' + key
        }).join('\n'))
        continue      
      }
      
      tables.push('')
      tables.push(processObject({ 
        value: typeof value[0]
      }, {
        parentTableName: name,
        parentTableId: id,
        parentTableIdType: idType,
        tableName: name + '_' + key
      }).join('\n'))

      continue
    }

    output.push(lang.property(key, types[type]))
  }

  // Handle table keys
  output.push(lang.primary(id))
  
  if (parent) {
    output.push(lang.foreign(parent + '_id', parent, parentId))
  }

  output[output.length - 1] = Utils.arrayLastItem(output)
    .substr(0, Utils.arrayLastItem(output).length - 1)

  output.push(lang.close())

  return output.concat(tables)
}

module.exports = function Process (tableName, object) {
  if (typeof tableName !== 'string') {
    object = tableName
    tableName = 'generic'
  }

  return processObject(object, {
    tableName: tableName
  }).join('\n')
}


/***/ }),

/***/ "./node_modules/generate-schema/src/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/generate-schema/src/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var DATE_REGEXP = /\d{4}-\d{2}-\d{2}/

exports.isNumber = function (value) {
	return (typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]')
}

exports.isDate = function (date) {
  return ((new Date(date).toString() !== 'Invalid Date' && !isNaN(new Date(date))))
}

exports.isTimestamp = function (string) {
  return string.length > 18 && !isNaN((new Date(string)).getTime())
}

exports.isDateString = function (string) {
  return string.match(DATE_REGEXP)
}

exports.arrayLastItem = function (arr) {
  return arr[arr.length - 1]
}


/***/ }),

/***/ "./node_modules/type-of-is/index.js":
/*!******************************************!*\
  !*** ./node_modules/type-of-is/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
  if (true) {
    module.exports = factory();
  } else {}
}(function () {

  var isBuiltIn = (function () {
    var built_ins = [
      Object,
      Function,
      Array,
      String,
      Boolean,
      Number,
      Date,
      RegExp,
      Error
    ];
    var built_ins_length = built_ins.length;

    return function (_constructor) {
      for (var i = 0; i < built_ins_length; i++) {
        if (built_ins[i] === _constructor) {
          return true;
        }
      }
      return false;
    };
  })();

  var stringType = (function () {
    var _toString = ({}).toString;

    return function (obj) {
      // [object Blah] -> Blah
      var stype = _toString.call(obj).slice(8, -1);

      if ((obj === null) || (obj === undefined)) {
        return stype.toLowerCase();
      }

      var ctype = of(obj);

      if (ctype && !isBuiltIn(ctype)) {
        return ctype.name;
      } else {
        return stype;
      }
    };
  })();

  function of (obj) {
    if ((obj === null) || (obj === undefined)) {
      return obj;
    } else {
      return obj.constructor;
    }
  }

  function is (obj, test) {
    var typer = (of(test) === String) ? stringType : of;
    return (typer(obj) === test);
  }

  function instance (obj, test) {
    return (obj instanceof test);
  }

  function extension (_Extension, _Base) {
    return instance(_Extension.prototype, _Base);
  }

  function any (obj, tests) {
    if (!is(tests, Array)) {
      throw ("Second argument to .any() should be array")
    }
    for (var i = 0; i < tests.length; i++) {
      var test = tests[i];
      if (is(obj, test)) {
        return true;
      }
    }
    return false;
  }

  var exports = function (obj, type) {
    if (arguments.length == 1) {
      return of(obj);
    } else {
      if (is(type, Array)) {
        return any(obj, type);
      } else {
        return is(obj, type);
      }
    }
  }

  exports.instance  = instance;
  exports.string    = stringType;
  exports.of        = of;
  exports.is        = is;
  exports.any       = any;
  exports.extension = extension;
  return exports;

}));


/***/ }),

/***/ "./src/app/tools/json-to-schema/index.ts":
/*!***********************************************!*\
  !*** ./src/app/tools/json-to-schema/index.ts ***!
  \***********************************************/
/*! exports provided: JsonToSchemaComponent, JsonToSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToSchemaComponent", function() { return JsonToSchemaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToSchemaModule", function() { return JsonToSchemaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/transform-tool/transform-tool.component */ "./src/app/core/transform-tool/transform-tool.component.ts");
/* harmony import */ var generate_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! generate-schema */ "./node_modules/generate-schema/src/index.js");
/* harmony import */ var generate_schema__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(generate_schema__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _readme_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./readme.md */ "./src/app/tools/json-to-schema/readme.md");







class JsonToSchemaComponent extends src_app_core_transform_tool_transform_tool_component__WEBPACK_IMPORTED_MODULE_1__["TransformToolComponent"] {
    constructor() {
        super(...arguments);
        this.id = 'json-to-schema';
        this.action = 'Create Schema';
        this.schema = {
            type: 'object',
            properties: {
                input: { type: 'string', title: 'JSON', description: 'JSON to create schema from' },
                name: { type: 'string', description: 'Name of schema created' }
            },
            required: ['input', 'name']
        };
        this.documentation = _readme_md__WEBPACK_IMPORTED_MODULE_6__["default"];
    }
    onTransform(transform) {
        var schema = generate_schema__WEBPACK_IMPORTED_MODULE_2___default.a.json(transform.name, JSON.parse(transform.input));
        return JSON.stringify(schema, null, 3);
    }
    ;
}
let JsonToSchemaModule = class JsonToSchemaModule {
};
JsonToSchemaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            JsonToSchemaComponent,
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: '', component: JsonToSchemaComponent }
            ])
        ]
    })
], JsonToSchemaModule);



/***/ }),

/***/ "./src/app/tools/json-to-schema/readme.md":
/*!************************************************!*\
  !*** ./src/app/tools/json-to-schema/readme.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);
//# sourceMappingURL=tools-json-to-schema-es2015.js.map