webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils/calendar.ts":
/*!***************************!*\
  !*** ./utils/calendar.ts ***!
  \***************************/
/*! exports provided: YEAR, CALENDAR, DATE_TODAY, DATE_TODAY_ZERO, DATE_START, DATE_END, THEMEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module, __prefresh_utils__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR", function() { return YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR", function() { return CALENDAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_TODAY", function() { return DATE_TODAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_TODAY_ZERO", function() { return DATE_TODAY_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_START", function() { return DATE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_END", function() { return DATE_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMEN", function() { return THEMEN; });
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/dayjs */ "./utils/dayjs.ts");

var YEAR = 2020;
var CALENDAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var TODAY = process && "\"3wXX6TCGvlyuLzBGzdhDHQbYcmalv3x9AY0cIKciyaubAXwQxF9SgvAJWGGoTOZJXloirZzgrQgd45C6\"";
var DATE_TODAY = TODAY ? Object(_utils_dayjs__WEBPACK_IMPORTED_MODULE_0__["default"])(TODAY) : Object(_utils_dayjs__WEBPACK_IMPORTED_MODULE_0__["default"])();
var DATE_TODAY_ZERO = DATE_TODAY.tz('Antarctica/McMurdo');
var DATE_START = Object(_utils_dayjs__WEBPACK_IMPORTED_MODULE_0__["default"])('2020-12-01');
var DATE_END = Object(_utils_dayjs__WEBPACK_IMPORTED_MODULE_0__["default"])('2020-12-24');
var THEMEN = ['manifest', 'sharing', 'shortcuts / badging', 'ServiceWorker', 'SW Cache', 'IndexedDB', 'persistent Storage', 'BKG sync', 'Push Notifications', 'Push Trigger', 'Media Session', 'native file system', 'Wake Lock', 'font access', 'Orientation lock', 'Multi window', 'credentials', 'payments', 'Web Midi', 'shape detection', 'contact picker', 'sms reciever', 'Paw Clipboard API', 'WASM'];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ "./node_modules/@prefresh/webpack/src/utils/prefresh.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2FsZW5kYXIudHMiXSwibmFtZXMiOlsiWUVBUiIsIkNBTEVOREFSIiwiVE9EQVkiLCJwcm9jZXNzIiwiREFURV9UT0RBWSIsImRheWpzIiwiREFURV9UT0RBWV9aRVJPIiwidHoiLCJEQVRFX1NUQVJUIiwiREFURV9FTkQiLCJUSEVNRU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLElBQVksR0FBRyxJQUFyQjtBQUNBLElBQU1DLFFBQWtCLEdBQUcsQ0FDaEMsQ0FEZ0MsRUFDN0IsQ0FENkIsRUFDMUIsQ0FEMEIsRUFDdkIsQ0FEdUIsRUFDcEIsQ0FEb0IsRUFDakIsQ0FEaUIsRUFDZCxDQURjLEVBQ1gsQ0FEVyxFQUNSLENBRFEsRUFDTCxFQURLLEVBQ0QsRUFEQyxFQUNHLEVBREgsRUFDTyxFQURQLEVBQ1csRUFEWCxFQUNlLEVBRGYsRUFDbUIsRUFEbkIsRUFDdUIsRUFEdkIsRUFDMkIsRUFEM0IsRUFDK0IsRUFEL0IsRUFDbUMsRUFEbkMsRUFDdUMsRUFEdkMsRUFDMkMsRUFEM0MsRUFFaEMsRUFGZ0MsRUFFNUIsRUFGNEIsQ0FBM0I7QUFLUCxJQUFNQyxLQUFLLEdBQUdDLE9BQU8sSUFBSUEsc0ZBQXpCO0FBQ08sSUFBTUMsVUFBdUIsR0FBR0YsS0FBSyxHQUFHRyw0REFBSyxDQUFDSCxLQUFELENBQVIsR0FBa0JHLDREQUFLLEVBQTVEO0FBQ0EsSUFBTUMsZUFBNEIsR0FBR0YsVUFBVSxDQUFDRyxFQUFYLENBQWMsb0JBQWQsQ0FBckM7QUFDQSxJQUFNQyxVQUF1QixHQUFHSCw0REFBSyxDQUFDLFlBQUQsQ0FBckM7QUFDQSxJQUFNSSxRQUFxQixHQUFHSiw0REFBSyxDQUFDLFlBQUQsQ0FBbkM7QUFFQSxJQUFNSyxNQUFnQixHQUFHLENBQzlCLFVBRDhCLEVBRTlCLFNBRjhCLEVBRzlCLHFCQUg4QixFQUk5QixlQUo4QixFQUs5QixVQUw4QixFQU05QixXQU44QixFQU85QixvQkFQOEIsRUFROUIsVUFSOEIsRUFTOUIsb0JBVDhCLEVBVTlCLGNBVjhCLEVBVzlCLGVBWDhCLEVBWTlCLG9CQVo4QixFQWE5QixXQWI4QixFQWM5QixhQWQ4QixFQWU5QixrQkFmOEIsRUFnQjlCLGNBaEI4QixFQWlCOUIsYUFqQjhCLEVBa0I5QixVQWxCOEIsRUFtQjlCLFVBbkI4QixFQW9COUIsaUJBcEI4QixFQXFCOUIsZ0JBckI4QixFQXNCOUIsY0F0QjhCLEVBdUI5QixtQkF2QjhCLEVBd0I5QixNQXhCOEIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kODk4Mjk4MmJkOTEzMmY4YzU5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gJ0B1dGlscy9kYXlqcyc7XG5cbmV4cG9ydCBjb25zdCBZRUFSOiBudW1iZXIgPSAyMDIwO1xuZXhwb3J0IGNvbnN0IENBTEVOREFSOiBudW1iZXJbXSA9IFtcbiAgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsXG4gIDIzLCAyNCxcbl07XG5cbmNvbnN0IFRPREFZID0gcHJvY2VzcyAmJiBwcm9jZXNzLmVudi5BUElfS0VZO1xuZXhwb3J0IGNvbnN0IERBVEVfVE9EQVk6IGRheWpzLkRheWpzID0gVE9EQVkgPyBkYXlqcyhUT0RBWSkgOiBkYXlqcygpO1xuZXhwb3J0IGNvbnN0IERBVEVfVE9EQVlfWkVSTzogZGF5anMuRGF5anMgPSBEQVRFX1RPREFZLnR6KCdBbnRhcmN0aWNhL01jTXVyZG8nKTtcbmV4cG9ydCBjb25zdCBEQVRFX1NUQVJUOiBkYXlqcy5EYXlqcyA9IGRheWpzKCcyMDIwLTEyLTAxJyk7XG5leHBvcnQgY29uc3QgREFURV9FTkQ6IGRheWpzLkRheWpzID0gZGF5anMoJzIwMjAtMTItMjQnKTtcblxuZXhwb3J0IGNvbnN0IFRIRU1FTjogc3RyaW5nW10gPSBbXG4gICdtYW5pZmVzdCcsXG4gICdzaGFyaW5nJyxcbiAgJ3Nob3J0Y3V0cyAvIGJhZGdpbmcnLFxuICAnU2VydmljZVdvcmtlcicsXG4gICdTVyBDYWNoZScsXG4gICdJbmRleGVkREInLFxuICAncGVyc2lzdGVudCBTdG9yYWdlJyxcbiAgJ0JLRyBzeW5jJyxcbiAgJ1B1c2ggTm90aWZpY2F0aW9ucycsXG4gICdQdXNoIFRyaWdnZXInLFxuICAnTWVkaWEgU2Vzc2lvbicsXG4gICduYXRpdmUgZmlsZSBzeXN0ZW0nLFxuICAnV2FrZSBMb2NrJyxcbiAgJ2ZvbnQgYWNjZXNzJyxcbiAgJ09yaWVudGF0aW9uIGxvY2snLFxuICAnTXVsdGkgd2luZG93JyxcbiAgJ2NyZWRlbnRpYWxzJyxcbiAgJ3BheW1lbnRzJyxcbiAgJ1dlYiBNaWRpJyxcbiAgJ3NoYXBlIGRldGVjdGlvbicsXG4gICdjb250YWN0IHBpY2tlcicsXG4gICdzbXMgcmVjaWV2ZXInLFxuICAnUGF3IENsaXBib2FyZCBBUEknLFxuICAnV0FTTScsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==