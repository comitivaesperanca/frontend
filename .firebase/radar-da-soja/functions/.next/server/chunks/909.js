exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL),
/* harmony export */   "s": () => (/* binding */ API_PREDICT_URL)
/* harmony export */ });
const API_URL = "http://20.75.107.170/";
const API_PREDICT_URL = "http://20.75.5.40/";


/***/ }),

/***/ 7826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UT": () => (/* binding */ formatFilters),
/* harmony export */   "Vu": () => (/* binding */ formatFinalSentimentClass),
/* harmony export */   "YV": () => (/* binding */ getWeekDay),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "vd": () => (/* binding */ formatFinalSentiment),
/* harmony export */   "xy": () => (/* binding */ formatSuggestedSentiment)
/* harmony export */ });
/* unused harmony exports getMonthDate, formatSearchSentiment */
const formatDate = (data)=>{
    var date = new Date(data);
    date.toLocaleString();
    date = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    }).format(date);
    return date;
};
const getWeekDay = (data)=>{
    var date = new Date(data);
    const weekday = [
        "Domingo",
        "Segunda",
        "Ter\xe7a",
        "Quarta",
        "Quinta",
        "Sexta",
        "S\xe1bado"
    ];
    let day = weekday[date.getDay()];
    return day;
};
const getMonthDate = (data)=>{
    var date = new Date(data);
    var months = [
        "Janeiro",
        "Fevereiro",
        "Mar\xe7o",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezenbro"
    ];
    let month = months[date.getMonth()];
    return month;
};
const formatFinalSentiment = (sentiment)=>{
    switch(sentiment){
        case "Positiva":
            return "Positivo";
        case "Negativa":
            return "Negativo";
        default:
            return "Neutro";
    }
};
const formatSuggestedSentiment = (sentiment)=>{
    switch(sentiment){
        case "1":
            return "Positiva";
        case "2":
            return "Negativa";
        default:
            return "Neutra";
    }
};
const formatFinalSentimentClass = (sentiment)=>{
    switch(sentiment){
        case "Positiva":
            return "bg-green-200";
        case "Negativa":
            return "bg-red-200";
        default:
            return "bg-gray-200";
    }
};
const formatSearchSentiment = (sentiment)=>{
    switch(sentiment){
        case 1:
            return "positive";
        case 2:
            return "negative";
        default:
            return "neutral";
    }
};
const formatFilters = (search = "", source = "", date = "", sentiment = "")=>{
    var filter = "";
    if (search != "") {
        filter += `&search=${search}`;
    }
    if (source != "") {
        filter += `&source=${source}`;
    }
    if (date != "") {
        var dateFormat = new Date(date);
        dateFormat.toISOString();
        filter += `&date=${dateFormat}`;
    }
    if (sentiment != "") {
        filter += `&sentiment=${formatSearchSentiment(sentiment)}`;
    }
    return filter;
};


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;