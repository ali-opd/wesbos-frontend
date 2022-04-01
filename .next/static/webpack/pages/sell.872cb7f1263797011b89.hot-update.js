self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var C_Playground_Reactjs_wesbos_Advancedreact_wesbos_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Playground_Reactjs_wesbos_Advancedreact_wesbos_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Playground_Reactjs_wesbos_Advancedreact_wesbos_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // create a state object for our inputs
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),
      inputs = _useState[0],
      setInputs = _useState[1];

  function handleChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name,
        type = _e$target.type;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value[0] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,C_Playground_Reactjs_wesbos_Advancedreact_wesbos_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    var blankState = Object.entries(inputs).map(function (_ref) {
      var _ref2 = (0,C_Playground_Reactjs_wesbos_Advancedreact_wesbos_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),
          key = _ref2[0],
          _ = _ref2[1];

      return [key, ''];
    });
  } // return the things we want to surface from this custom hook


  return {
    inputs: inputs,
    handleChange: handleChange,
    resetForm: resetForm
  };
}

_s(useForm, "0tjT+aoDVbAe0wsQZsq9AKLCE20=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwicGFyc2VJbnQiLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM1QztBQUQ0QyxrQkFFaEJDLCtDQUFRLENBQUNELE9BQUQsQ0FGUTtBQUFBLE1BRXJDRSxNQUZxQztBQUFBLE1BRTdCQyxTQUY2Qjs7QUFJNUMsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDS0EsQ0FBQyxDQUFDQyxNQURQO0FBQUEsUUFDakJDLEtBRGlCLGFBQ2pCQSxLQURpQjtBQUFBLFFBQ1ZDLElBRFUsYUFDVkEsSUFEVTtBQUFBLFFBQ0pDLElBREksYUFDSkEsSUFESTs7QUFHdkIsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCO0FBQ0Q7O0FBRUQsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJGLFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBQXBCO0FBQ0Q7O0FBRURSLGFBQVMsaUNBRUpELE1BRkksc0xBR05NLElBSE0sRUFHQ0QsS0FIRCxHQUFUO0FBS0Q7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNuQlQsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTYSxTQUFULEdBQXFCO0FBQ25CLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVkLE1BQWYsRUFBdUJlLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT0MsQ0FBUDs7QUFBQSxhQUFjLENBQUNELEdBQUQsRUFBTSxFQUFOLENBQWQ7QUFBQSxLQUEzQixDQUFuQjtBQUNELEdBNUIyQyxDQThCNUM7OztBQUNBLFNBQU87QUFDTGhCLFVBQU0sRUFBTkEsTUFESztBQUVMRSxnQkFBWSxFQUFaQSxZQUZLO0FBR0xRLGFBQVMsRUFBVEE7QUFISyxHQUFQO0FBS0Q7O0dBcEN1QmIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxsLjg3MmNiN2YxMjYzNzk3MDExYjg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRzXHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgIHZhbHVlWzBdID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5wdXRzKHtcclxuICAgICAgLy8gY29weSB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgICAgLi4uaW5wdXRzLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgICBjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIF9dKSA9PiBba2V5LCAnJ10pO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCB0byBzdXJmYWNlIGZyb20gdGhpcyBjdXN0b20gaG9va1xyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dHMsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICByZXNldEZvcm0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9