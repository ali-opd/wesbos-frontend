(function() {
var exports = {};
exports.id = "pages/sell";
exports.ids = ["pages/sell"];
exports.modules = {

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");

var _jsxFileName = "C:\\Playground\\Reactjs\\wesbos\\Advancedreact\\wesbos-frontend\\components\\CreateProduct.js";

function CreateProduct() {
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_1__.default)({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes'
  });
  console.log(inputs);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "name",
      children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "name",
        id: "name",
        value: inputs.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "price",
      children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "number",
        name: "price",
        id: "price",
        value: inputs.price,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: clearForm,
      children: "Clear Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: resetForm,
      children: "Reset Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  // create a state object for our inputs
  const {
    0: inputs,
    1: setInputs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value[0] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key]) => [key, '']));
    setInputs(blankState);
  } // return the things we want to surface from this custom hook


  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SellPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateProduct */ "./components/CreateProduct.js");

var _jsxFileName = "C:\\Playground\\Reactjs\\wesbos\\Advancedreact\\wesbos-frontend\\pages\\sell.js";

function SellPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/sell.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL3VzZUZvcm0uanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvc2VsbC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VGb3JtIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbCIsInNldElucHV0cyIsInVzZVN0YXRlIiwiZSIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInBhcnNlSW50IiwiZmlsZXMiLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiU2VsbFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFDdEMsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLGdCQUFWO0FBQXdCQyxhQUF4QjtBQUFtQ0M7QUFBbkMsTUFBaURDLHFEQUFPLENBQUM7QUFDN0RDLFFBQUksRUFBRSxZQUR1RDtBQUU3REMsU0FBSyxFQUFFLEtBRnNEO0FBRzdEQyxlQUFXLEVBQUU7QUFIZ0QsR0FBRCxDQUE5RDtBQU1BQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBWjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxhQUFPLEVBQUMsTUFBZjtBQUFBLHNDQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFVBQUUsRUFBQyxNQUhMO0FBSUUsYUFBSyxFQUFFQSxNQUFNLENBQUNLLElBSmhCO0FBS0UsZ0JBQVEsRUFBRUo7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRTtBQUFPLGFBQU8sRUFBQyxPQUFmO0FBQUEsdUNBRUU7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsVUFBRSxFQUFDLE9BSEw7QUFJRSxhQUFLLEVBQUVELE1BQU0sQ0FBQ00sS0FKaEI7QUFLRSxnQkFBUSxFQUFFTDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQXNCRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkYsZUEwQkU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NEO0FBRWUsU0FBU0MsT0FBVCxDQUFpQk0sT0FBTyxHQUFHLEVBQTNCLEVBQStCO0FBQzVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNWLE1BQUQ7QUFBQSxPQUFTVztBQUFULE1BQXNCQywrQ0FBUSxDQUFDRixPQUFELENBQXBDOztBQUVBLFdBQVNULFlBQVQsQ0FBc0JZLENBQXRCLEVBQXlCO0FBQ3ZCLFFBQUk7QUFBRUMsV0FBRjtBQUFTVCxVQUFUO0FBQWVVO0FBQWYsUUFBd0JGLENBQUMsQ0FBQ0csTUFBOUI7O0FBRUEsUUFBSUQsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJELFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCO0FBQ0Q7O0FBRUQsUUFBSUMsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJELFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0QsQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBQXBCO0FBQ0Q7O0FBRURQLGFBQVMsaUNBRUpYLE1BRkk7QUFHUCxPQUFDSyxJQUFELEdBQVFTO0FBSEQsT0FBVDtBQUtEOztBQUVELFdBQVNYLFNBQVQsR0FBcUI7QUFDbkJRLGFBQVMsQ0FBQ0QsT0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU1IsU0FBVCxHQUFxQjtBQUNuQixVQUFNaUIsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FDakJELE1BQU0sQ0FBQ0UsT0FBUCxDQUFldEIsTUFBZixFQUF1QnVCLEdBQXZCLENBQTJCLENBQUMsQ0FBQ0MsR0FBRCxDQUFELEtBQVcsQ0FBQ0EsR0FBRCxFQUFNLEVBQU4sQ0FBdEMsQ0FEaUIsQ0FBbkI7QUFJQWIsYUFBUyxDQUFDUSxVQUFELENBQVQ7QUFDRCxHQWhDMkMsQ0FrQzVDOzs7QUFDQSxTQUFPO0FBQ0xuQixVQURLO0FBRUxDLGdCQUZLO0FBR0xFLGFBSEs7QUFJTEQ7QUFKSyxHQUFQO0FBTUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFFZSxTQUFTdUIsUUFBVCxHQUFvQjtBQUNqQyxzQkFBTyw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ0pELG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3NlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9kdWN0KCkge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIG5hbWU6ICdOaWNlIFNob2VzJyxcclxuICAgIHByaWNlOiAzNDIzNCxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhlc2UgYXJlIHRoZSBiZXN0IHNob2VzJyxcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coaW5wdXRzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgUHJpY2VcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NsZWFyRm9ybX0+XHJcbiAgICAgICAgQ2xlYXIgRm9ybVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+XHJcbiAgICAgICAgUmVzZXQgRm9ybVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcclxuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcclxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgdmFsdWVbMF0gPSBlLnRhcmdldC5maWxlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAvLyBjb3B5IHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5XSkgPT4gW2tleSwgJyddKVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0cyxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHJlc2V0Rm9ybSxcclxuICAgIGNsZWFyRm9ybSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBDcmVhdGVQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxsUGFnZSgpIHtcclxuICByZXR1cm4gPENyZWF0ZVByb2R1Y3QgLz47XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==