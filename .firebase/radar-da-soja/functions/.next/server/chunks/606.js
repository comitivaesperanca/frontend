"use strict";
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 5606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ PieChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3767);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__]);
([chart_js__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);
function PieChart(props) {
    const data = {
        labels: [
            "Positivo",
            "Neutro",
            "Negativo"
        ],
        datasets: [
            {
                label: "Sentimentos",
                // data: [12, 19, 3],
                data: [
                    props.positive,
                    props.neutral,
                    props.negative
                ],
                backgroundColor: [
                    "rgba(163, 214, 156)",
                    "rgba(229, 229, 229)",
                    "rgba(247, 182, 196)"
                ],
                borderColor: [
                    "rgba(163, 214, 156, 1)",
                    "rgba(229, 229, 229, 1)",
                    "rgba(247, 182, 196, 1)"
                ],
                borderWidth: 1
            }
        ]
    };
    const options = {
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                text: props.title,
                display: true
            }
        },
        maintainAspectRatio: false,
        responsive: true
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {
        data: data,
        options: options
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;