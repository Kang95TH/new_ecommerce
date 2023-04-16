"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"ID & PASSWD\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"ID (email)\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const res = await fetch(\"http://localhost:3001/sessionRequest\", {\n                    method: \"POST\",\n                    body: JSON.stringify(credentials),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const user = await res.json();\n                // If no error and we have user data, return it\n                if (res.ok && user) {\n                    return user;\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        })\n    ],\n    secret: process.env.SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNpQztBQUVsRSxpRUFBZUEsZ0RBQVFBLENBQUM7SUFDcEJFLFdBQVc7UUFDUEQsc0VBQW1CQSxDQUFDO1lBQ2hCRSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1RDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07b0JBQVFDLGFBQWE7Z0JBQWE7Z0JBQ3ZFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ3BEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHLEVBQUU7Z0JBRTlCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSx3Q0FBd0M7b0JBQzVEQyxRQUFRO29CQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNiO29CQUNyQmMsU0FBUzt3QkFBRSxnQkFBZ0I7b0JBQW1CO2dCQUNsRDtnQkFDQSxNQUFNQyxPQUFPLE1BQU1QLElBQUlRLElBQUk7Z0JBRTNCLCtDQUErQztnQkFDL0MsSUFBSVIsSUFBSVMsRUFBRSxJQUFJRixNQUFNO29CQUNoQixPQUFPQTtnQkFDWCxDQUFDO2dCQUNELGtEQUFrRDtnQkFDbEQsT0FBTyxJQUFJO1lBQ2Y7UUFDSjtLQUNIO0lBQ0RHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtBQUM5QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWVjb21tZXJjZS8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBuYW1lOiBcIklEICYgUEFTU1dEXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJJRCAoZW1haWwpXCIgfSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXNzaW9uUmVxdWVzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyksXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICAgICAgICAgIC8vIElmIG5vIGVycm9yIGFuZCB3ZSBoYXZlIHVzZXIgZGF0YSwgcmV0dXJuIGl0XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vayAmJiB1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBudWxsIGlmIHVzZXIgZGF0YSBjb3VsZCBub3QgYmUgcmV0cmlldmVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdLFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ1c2VyIiwianNvbiIsIm9rIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();