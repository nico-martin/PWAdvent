webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/idb.ts":
/*!**********************!*\
  !*** ./store/idb.ts ***!
  \**********************/
/*! exports provided: daysDB, pageDB, settingsDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysDB", function() { return daysDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDB", function() { return pageDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsDB", function() { return settingsDB; });
/* harmony import */ var C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");



var dbName = 'pwadvent';
var dbPromise = window === 'undefined' ? new Promise(function (resolve) {
  return reject();
}) : Object(idb__WEBPACK_IMPORTED_MODULE_2__["openDB"])(dbName, 2, {
  upgrade: function upgrade(db, oldVersion) {
    if (oldVersion < 1) {
      db.createObjectStore('days');
      db.createObjectStore('page');
    }

    if (oldVersion < 2) {
      db.createObjectStore('settings');
    }
  }
});
var daysDB = {
  get: function () {
    var _get = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(key) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dbPromise;

            case 2:
              return _context.abrupt("return", _context.sent.get('days', key));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function get(_x) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  set: function () {
    var _set = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(key, val) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.put('days', val, key));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function set(_x2, _x3) {
      return _set.apply(this, arguments);
    }

    return set;
  }(),
  "delete": function () {
    var _delete2 = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(key) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dbPromise;

            case 2:
              return _context3.abrupt("return", _context3.sent["delete"]('days', key));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function _delete(_x4) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }()
};
var pageDB = {
  get: function () {
    var _get2 = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(key) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent.get('page', key));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function get(_x5) {
      return _get2.apply(this, arguments);
    }

    return get;
  }(),
  set: function () {
    var _set2 = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(key, val) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return dbPromise;

            case 2:
              return _context5.abrupt("return", _context5.sent.put('page', val, key));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function set(_x6, _x7) {
      return _set2.apply(this, arguments);
    }

    return set;
  }(),
  "delete": function () {
    var _delete3 = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(key) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return dbPromise;

            case 2:
              return _context6.abrupt("return", _context6.sent["delete"]('page', key));

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function _delete(_x8) {
      return _delete3.apply(this, arguments);
    }

    return _delete;
  }()
};
var settingsDB = {
  get: function () {
    var _get3 = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(key) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return dbPromise;

            case 2:
              return _context7.abrupt("return", _context7.sent.get('settings', key));

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function get(_x9) {
      return _get3.apply(this, arguments);
    }

    return get;
  }(),
  set: function () {
    var _set3 = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(key, val) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return dbPromise;

            case 2:
              return _context8.abrupt("return", _context8.sent.put('settings', val, key));

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function set(_x10, _x11) {
      return _set3.apply(this, arguments);
    }

    return set;
  }(),
  "delete": function () {
    var _delete4 = Object(C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key) {
      return C_Users_admin_Documents_Dev_PWAdvent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return dbPromise;

            case 2:
              return _context9.abrupt("return", _context9.sent["delete"]('settings', key));

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function _delete(_x12) {
      return _delete4.apply(this, arguments);
    }

    return _delete;
  }()
};

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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


const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

  if (true) {
    const currentExports = __prefresh_utils__.getExports(module);
    const previousHotModuleExports =
      module.hot.data && module.hot.data.moduleExports;

    __prefresh_utils__.registerExports(currentExports, module.i);

    if (isPrefreshComponent) {
      if (previousHotModuleExports) {
        try {
          __prefresh_utils__.flush();
          if (
            typeof __prefresh_errors__ !== 'undefined' &&
            __prefresh_errors__ &&
            __prefresh_errors__.clearRuntimeErrors
          ) {
            __prefresh_errors__.clearRuntimeErrors();
          }
        } catch (e) {
          // Only available in newer webpack versions.
          if (module.hot.invalidate) {
            module.hot.invalidate();
          } else {
            self.location.reload();
          }
        }
      }

      module.hot.dispose(data => {
        data.moduleExports = __prefresh_utils__.getExports(module);
      });

      module.hot.accept(function errorRecovery() {
        if (
          typeof __prefresh_errors__ !== 'undefined' &&
          __prefresh_errors__ &&
          __prefresh_errors__.handleRuntimeError
        ) {
          __prefresh_errors__.handleRuntimeError(error);
        }

        __webpack_require__.c[module.i].hot.accept(errorRecovery);
      });
    }
  }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ "./node_modules/@prefresh/webpack/src/utils/prefresh.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaWRiLnRzIl0sIm5hbWVzIjpbImRiTmFtZSIsImRiUHJvbWlzZSIsIndpbmRvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib3BlbkRCIiwidXBncmFkZSIsImRiIiwib2xkVmVyc2lvbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwiZGF5c0RCIiwiZ2V0Iiwia2V5Iiwic2V0IiwidmFsIiwicHV0IiwicGFnZURCIiwic2V0dGluZ3NEQiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLE1BQU0sR0FBRyxVQUFmO0FBaUJBLElBQU1DLFNBQVMsR0FDYkMsTUFBTSxLQUFLLFdBQVgsR0FDSSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLFNBQWFDLE1BQU0sRUFBbkI7QUFBQSxDQUFaLENBREosR0FFSUMsa0RBQU0sQ0FBYU4sTUFBYixFQUFxQixDQUFyQixFQUF3QjtBQUM1Qk8sU0FENEIsbUJBQ3BCQyxFQURvQixFQUNoQkMsVUFEZ0IsRUFDSjtBQUN0QixRQUFJQSxVQUFVLEdBQUcsQ0FBakIsRUFBb0I7QUFDbEJELFFBQUUsQ0FBQ0UsaUJBQUgsQ0FBcUIsTUFBckI7QUFDQUYsUUFBRSxDQUFDRSxpQkFBSCxDQUFxQixNQUFyQjtBQUNEOztBQUNELFFBQUlELFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNsQkQsUUFBRSxDQUFDRSxpQkFBSCxDQUFxQixVQUFyQjtBQUNEO0FBQ0Y7QUFUMkIsQ0FBeEIsQ0FIWjtBQWVPLElBQU1DLE1BQU0sR0FBRztBQUNwQkMsS0FBRztBQUFBLGtTQUFFLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4QlosU0FBOUI7O0FBQUE7QUFBQSw2REFBeUNXLEdBQXpDLENBQTZDLE1BQTdDLEVBQXFEQyxHQUFyRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBRGlCO0FBRXBCQyxLQUFHO0FBQUEsa1NBQUUsa0JBQU9ELEdBQVAsRUFBb0JFLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF3Q2QsU0FBeEM7O0FBQUE7QUFBQSwrREFBbURlLEdBQW5ELENBQXVELE1BQXZELEVBQStERCxHQUEvRCxFQUFvRUYsR0FBcEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQUZpQjtBQUdwQjtBQUFBLHNTQUFRLGtCQUFPQSxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4QlosU0FBOUI7O0FBQUE7QUFBQSx5RUFBZ0QsTUFBaEQsRUFBd0RZLEdBQXhEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFIb0IsQ0FBZjtBQU1BLElBQU1JLE1BQU0sR0FBRztBQUNwQkwsS0FBRztBQUFBLG1TQUFFLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4QlosU0FBOUI7O0FBQUE7QUFBQSwrREFBeUNXLEdBQXpDLENBQTZDLE1BQTdDLEVBQXFEQyxHQUFyRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBRGlCO0FBRXBCQyxLQUFHO0FBQUEsbVNBQUUsa0JBQU9ELEdBQVAsRUFBb0JFLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF3Q2QsU0FBeEM7O0FBQUE7QUFBQSwrREFBbURlLEdBQW5ELENBQXVELE1BQXZELEVBQStERCxHQUEvRCxFQUFvRUYsR0FBcEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQUZpQjtBQUdwQjtBQUFBLHNTQUFRLGtCQUFPQSxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4QlosU0FBOUI7O0FBQUE7QUFBQSx5RUFBZ0QsTUFBaEQsRUFBd0RZLEdBQXhEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFIb0IsQ0FBZjtBQU1BLElBQU1LLFVBQVUsR0FBRztBQUN4Qk4sS0FBRztBQUFBLG1TQUFFLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4QlosU0FBOUI7O0FBQUE7QUFBQSwrREFBeUNXLEdBQXpDLENBQTZDLFVBQTdDLEVBQXlEQyxHQUF6RDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBRHFCO0FBRXhCQyxLQUFHO0FBQUEsbVNBQUUsa0JBQU9ELEdBQVAsRUFBb0JFLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJZCxTQURKOztBQUFBO0FBQUEsK0RBQ2VlLEdBRGYsQ0FDbUIsVUFEbkIsRUFDK0JELEdBRC9CLEVBQ29DRixHQURwQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBRnFCO0FBSXhCO0FBQUEsc1NBQVEsa0JBQU9BLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQThCWixTQUE5Qjs7QUFBQTtBQUFBLHlFQUFnRCxVQUFoRCxFQUE0RFksR0FBNUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUp3QixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM1NjQyYzkyZDRjMWYyZjU1Zjg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGVuREIsIERCU2NoZW1hIH0gZnJvbSAnaWRiJztcbmltcG9ydCB7IERheURhdGEgfSBmcm9tICdAY29tcHMvdHlwZXMnO1xuXG5jb25zdCBkYk5hbWUgPSAncHdhZHZlbnQnO1xuXG5pbnRlcmZhY2UgUFdBZHZlbnREQiBleHRlbmRzIERCU2NoZW1hIHtcbiAgZGF5czoge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHZhbHVlOiBhbnk7XG4gIH07XG4gIHBhZ2U6IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICB2YWx1ZTogRGF5RGF0YTtcbiAgfTtcbiAgc2V0dGluZ3M6IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICB2YWx1ZTogYW55O1xuICB9O1xufVxuXG5jb25zdCBkYlByb21pc2UgPVxuICB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gICAgPyBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVqZWN0KCkpXG4gICAgOiBvcGVuREI8UFdBZHZlbnREQj4oZGJOYW1lLCAyLCB7XG4gICAgICAgIHVwZ3JhZGUoZGIsIG9sZFZlcnNpb24pIHtcbiAgICAgICAgICBpZiAob2xkVmVyc2lvbiA8IDEpIHtcbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdkYXlzJyk7XG4gICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgncGFnZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob2xkVmVyc2lvbiA8IDIpIHtcbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdzZXR0aW5ncycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG5leHBvcnQgY29uc3QgZGF5c0RCID0ge1xuICBnZXQ6IGFzeW5jIChrZXk6IHN0cmluZykgPT4gKGF3YWl0IGRiUHJvbWlzZSkuZ2V0KCdkYXlzJywga2V5KSxcbiAgc2V0OiBhc3luYyAoa2V5OiBzdHJpbmcsIHZhbDogYW55KSA9PiAoYXdhaXQgZGJQcm9taXNlKS5wdXQoJ2RheXMnLCB2YWwsIGtleSksXG4gIGRlbGV0ZTogYXN5bmMgKGtleTogc3RyaW5nKSA9PiAoYXdhaXQgZGJQcm9taXNlKS5kZWxldGUoJ2RheXMnLCBrZXkpLFxufTtcblxuZXhwb3J0IGNvbnN0IHBhZ2VEQiA9IHtcbiAgZ2V0OiBhc3luYyAoa2V5OiBzdHJpbmcpID0+IChhd2FpdCBkYlByb21pc2UpLmdldCgncGFnZScsIGtleSksXG4gIHNldDogYXN5bmMgKGtleTogc3RyaW5nLCB2YWw6IGFueSkgPT4gKGF3YWl0IGRiUHJvbWlzZSkucHV0KCdwYWdlJywgdmFsLCBrZXkpLFxuICBkZWxldGU6IGFzeW5jIChrZXk6IHN0cmluZykgPT4gKGF3YWl0IGRiUHJvbWlzZSkuZGVsZXRlKCdwYWdlJywga2V5KSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc0RCID0ge1xuICBnZXQ6IGFzeW5jIChrZXk6IHN0cmluZykgPT4gKGF3YWl0IGRiUHJvbWlzZSkuZ2V0KCdzZXR0aW5ncycsIGtleSksXG4gIHNldDogYXN5bmMgKGtleTogc3RyaW5nLCB2YWw6IGFueSkgPT5cbiAgICAoYXdhaXQgZGJQcm9taXNlKS5wdXQoJ3NldHRpbmdzJywgdmFsLCBrZXkpLFxuICBkZWxldGU6IGFzeW5jIChrZXk6IHN0cmluZykgPT4gKGF3YWl0IGRiUHJvbWlzZSkuZGVsZXRlKCdzZXR0aW5ncycsIGtleSksXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==