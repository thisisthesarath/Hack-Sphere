"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ThemeTitle/index.jsx":
/*!*****************************************!*\
  !*** ./components/ThemeTitle/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ThemeTitle = ()=>{\n    _s();\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [cursorVariant, setCursorVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"block\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mouseMove = (e)=>{\n            setMousePosition({\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        window.addEventListener(\"mousemove\", mouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", mouseMove);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setDisplay(window.innerWidth < 450 ? \"none\" : \"block\");\n    }, []);\n    const variants = {\n        default: {\n            x: mousePosition.x - 16,\n            y: mousePosition.y - 16,\n            display: display\n        },\n        text: {\n            height: 120,\n            width: 120,\n            x: mousePosition.x - 75,\n            y: mousePosition.y - 75,\n            backgroundColor: \"#DED9C6\",\n            mixBlendMode: \"difference\"\n        }\n    };\n    const textEnter = ()=>setCursorVariant(\"text\");\n    const textLeave = ()=>setCursorVariant(\"default\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[#FAF8ED] text-[1.25rem] md:text-[1.5rem] font-medium uppercase\",\n                children: [\n                    \"This year's theme :\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\Sarath\\\\PROGRAMS\\\\Hack-Sphere Web\\\\components\\\\ThemeTitle\\\\index.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[#FAF8ED] text-[2.375rem] md:text-[3rem]  font-medium leading-[1.2] md:leading-[1.1]\",\n                onMouseEnter: textEnter,\n                onMouseLeave: textLeave,\n                children: [\n                    \"Sustainable\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\Sarath\\\\PROGRAMS\\\\Hack-Sphere Web\\\\components\\\\ThemeTitle\\\\index.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    \" Development Goals\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\Sarath\\\\PROGRAMS\\\\Hack-Sphere Web\\\\components\\\\ThemeTitle\\\\index.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"cursor\",\n                variants: variants,\n                animate: cursorVariant\n            }, void 0, false, {\n                fileName: \"D:\\\\Users\\\\Sarath\\\\PROGRAMS\\\\Hack-Sphere Web\\\\components\\\\ThemeTitle\\\\index.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ThemeTitle, \"5G63lq+SMpIQ6VWRY+tWwJKTME0=\");\n_c = ThemeTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeTitle);\nvar _c;\n$RefreshReg$(_c, \"ThemeTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGhlbWVUaXRsZS9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNMO0FBRXZDLE1BQU1HLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ2pESyxHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUNBLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxZQUFZLENBQUNDO1lBQ2pCUixpQkFBaUI7Z0JBQ2ZDLEdBQUdPLEVBQUVDLE9BQU87Z0JBQ1pQLEdBQUdNLEVBQUVFLE9BQU87WUFDZDtRQUNGO1FBRUFDLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFMO1FBRXJDLE9BQU87WUFDTEksT0FBT0UsbUJBQW1CLENBQUMsYUFBYU47UUFDMUM7SUFDRixHQUFHLEVBQUU7SUFFTFosZ0RBQVNBLENBQUM7UUFDUlcsV0FBV0ssT0FBT0csVUFBVSxHQUFHLE1BQU0sU0FBUztJQUNoRCxHQUFHLEVBQUU7SUFFTCxNQUFNQyxXQUFXO1FBQ2ZDLFNBQVM7WUFDUGYsR0FBR0YsY0FBY0UsQ0FBQyxHQUFHO1lBQ3JCQyxHQUFHSCxjQUFjRyxDQUFDLEdBQUc7WUFDckJHLFNBQVNBO1FBQ1g7UUFDQVksTUFBTTtZQUNKQyxRQUFRO1lBQ1JDLE9BQU87WUFDUGxCLEdBQUdGLGNBQWNFLENBQUMsR0FBRztZQUNyQkMsR0FBR0gsY0FBY0csQ0FBQyxHQUFHO1lBQ3JCa0IsaUJBQWlCO1lBQ2pCQyxjQUFjO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNQyxZQUFZLElBQU1sQixpQkFBaUI7SUFDekMsTUFBTW1CLFlBQVksSUFBTW5CLGlCQUFpQjtJQUV6QyxxQkFDRTs7MEJBQ0UsOERBQUNvQjtnQkFBRUMsV0FBVTs7b0JBQXVFO29CQUN6RDs7Ozs7OzswQkFFM0IsOERBQUNEO2dCQUNDQyxXQUFVO2dCQUVWQyxjQUFjSjtnQkFDZEssY0FBY0o7O29CQUNmO2tDQUVDLDhEQUFDSzs7Ozs7b0JBQUs7Ozs7Ozs7MEJBR1IsOERBQUMvQixpREFBTUEsQ0FBQ2dDLEdBQUc7Z0JBQ1RKLFdBQVU7Z0JBQ1ZWLFVBQVVBO2dCQUNWZSxTQUFTM0I7Ozs7Ozs7O0FBSWpCO0dBcEVNTDtLQUFBQTtBQXNFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lVGl0bGUvaW5kZXguanN4PzhkMDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFRoZW1lVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gIH0pO1xuICBjb25zdCBbY3Vyc29yVmFyaWFudCwgc2V0Q3Vyc29yVmFyaWFudF0gPSB1c2VTdGF0ZShcImRlZmF1bHRcIik7XG4gIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFwiYmxvY2tcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgc2V0TW91c2VQb3NpdGlvbih7XG4gICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgeTogZS5jbGllbnRZLFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREaXNwbGF5KHdpbmRvdy5pbm5lcldpZHRoIDwgNDUwID8gXCJub25lXCIgOiBcImJsb2NrXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgeDogbW91c2VQb3NpdGlvbi54IC0gMTYsXG4gICAgICB5OiBtb3VzZVBvc2l0aW9uLnkgLSAxNixcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgIHdpZHRoOiAxMjAsXG4gICAgICB4OiBtb3VzZVBvc2l0aW9uLnggLSA3NSxcbiAgICAgIHk6IG1vdXNlUG9zaXRpb24ueSAtIDc1LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNERUQ5QzZcIixcbiAgICAgIG1peEJsZW5kTW9kZTogXCJkaWZmZXJlbmNlXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCB0ZXh0RW50ZXIgPSAoKSA9PiBzZXRDdXJzb3JWYXJpYW50KFwidGV4dFwiKTtcbiAgY29uc3QgdGV4dExlYXZlID0gKCkgPT4gc2V0Q3Vyc29yVmFyaWFudChcImRlZmF1bHRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0ZBRjhFRF0gdGV4dC1bMS4yNXJlbV0gbWQ6dGV4dC1bMS41cmVtXSBmb250LW1lZGl1bSB1cHBlcmNhc2VcIj5cbiAgICAgICAgVGhpcyB5ZWFyJmFwb3M7cyB0aGVtZSA6e1wiIFwifVxuICAgICAgPC9wPlxuICAgICAgPHBcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bI0ZBRjhFRF0gdGV4dC1bMi4zNzVyZW1dIG1kOnRleHQtWzNyZW1dIFxuICAgICAgICAgIGZvbnQtbWVkaXVtIGxlYWRpbmctWzEuMl0gbWQ6bGVhZGluZy1bMS4xXVwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17dGV4dEVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RleHRMZWF2ZX1cbiAgICAgID5cbiAgICAgICAgU3VzdGFpbmFibGUgXG4gICAgICAgIDxiciAvPiBEZXZlbG9wbWVudCBHb2Fsc1xuICAgICAgPC9wPlxuXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3JcIlxuICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgIGFuaW1hdGU9e2N1cnNvclZhcmlhbnR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUaXRsZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlRoZW1lVGl0bGUiLCJtb3VzZVBvc2l0aW9uIiwic2V0TW91c2VQb3NpdGlvbiIsIngiLCJ5IiwiY3Vyc29yVmFyaWFudCIsInNldEN1cnNvclZhcmlhbnQiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsIm1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5uZXJXaWR0aCIsInZhcmlhbnRzIiwiZGVmYXVsdCIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1peEJsZW5kTW9kZSIsInRleHRFbnRlciIsInRleHRMZWF2ZSIsInAiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJiciIsImRpdiIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ThemeTitle/index.jsx\n"));

/***/ })

});