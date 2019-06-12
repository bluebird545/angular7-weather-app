(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-card/add-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-card/add-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add__card\" [ngClass]=\"{'dark': globals.darkModeActive}\">\r\n    <div class=\"header__container\">\r\n        <span class=\"card__title\">Add city</span>\r\n    </div>\r\n    <div class=\"body__container\">\r\n        <!--  city svg -->\r\n        <svg class=\"city__illustration\" id=\"City_Illustration\" data-name=\"City Illustration\"\r\n             viewBox=\"1367.8 616.6 403.6 331.4\">\r\n          <defs>\r\n            <style>\r\n              .cls-1 {\r\n                fill: #a1ffd9\r\n              }\r\n              .cls-2 {\r\n                fill: #f5f5f5\r\n              }\r\n              .cls-3 {\r\n                fill: #c4d1fe\r\n              }\r\n              .cls-6 {\r\n                fill: #bffee6\r\n              }\r\n              .cls-7 {\r\n                fill: #31feae\r\n              }\r\n              .cls-11 {\r\n                fill: #7d9cff\r\n              }\r\n              .cls-14 {\r\n                fill: #5f84fb\r\n              }\r\n              .cls-17, .cls-19 {\r\n                fill: none\r\n              }\r\n              .cls-17 {\r\n                stroke: #fff;\r\n                stroke-width: 2px\r\n              }\r\n              .cls-18 {\r\n                fill: #606cb9\r\n              }\r\n              .cls-19 {\r\n                stroke: #a1ffd9;\r\n                stroke-width: 3px\r\n              }\r\n            </style>\r\n          </defs>\r\n          <path id=\"City_grass\" d=\"M1488.3 646.3v-30H1892v30z\" class=\"cls-1\" data-name=\"City grass\"\r\n                transform=\"translate(-120.5 301.7)\"/>\r\n          <g id=\"Buidings\">\r\n            <g id=\"Buiding_Shadow\" data-name=\"Buiding Shadow\">\r\n              <path id=\"Path_23\" d=\"M1488.3 777.8V616.3h26.6v161.5z\" class=\"cls-2\" data-name=\"Path 23\"\r\n                    transform=\"translate(-120.5 48.4)\"/>\r\n              <path id=\"Path_29\" d=\"M1488.3 788.9V616.3h26.6V789z\" class=\"cls-2\" data-name=\"Path 29\"\r\n                    transform=\"translate(-30.5 5.3)\"/>\r\n              <path id=\"Path_21\" d=\"M1488.3 783.8V616.3h96.8v167.5z\" class=\"cls-2\" data-name=\"Path 21\"\r\n                    transform=\"translate(176.5 45.4)\"/>\r\n              <path id=\"Path_30\" d=\"M1488.3 735V616.3h34.3V735z\" class=\"cls-2\" data-name=\"Path 30\"\r\n                    transform=\"translate(128.5 48.2)\"/>\r\n              <path id=\"Path_31\" d=\"M1488.3 811V616.3h34.3V811z\" class=\"cls-2\" data-name=\"Path 31\"\r\n                    transform=\"translate(28.5 5.2)\"/>\r\n            </g>\r\n            <g id=\"Core\">\r\n              <path id=\"Path_8\" d=\"M1488.3 771.2V616.3h59.7v154.9z\" class=\"cls-3\" data-name=\"Path 8\"\r\n                    transform=\"translate(-112 54)\"/>\r\n              <path id=\"Path_9\" d=\"M1488.3 825V616.2h96.8V825z\" class=\"cls-1\" data-name=\"Path 9\"\r\n                    transform=\"translate(-43.5 .3)\"/>\r\n              <path id=\"Path_10\" fill=\"#7affcb\" d=\"M1488.3 660.7v-44.4h96.8v44.4z\" data-name=\"Path 10\"\r\n                    transform=\"translate(62.5 164.4)\"/>\r\n              <path id=\"Path_11\" d=\"M1488.3 771.2V616.3h96.8v154.9z\" class=\"cls-3\" data-name=\"Path 11\"\r\n                    transform=\"translate(168.5 54)\"/>\r\n            </g>\r\n          </g>\r\n          <path id=\"City_water\" fill=\"#8091ff\" d=\"M1488.3 692.6v-76.3H1892v76.3z\" data-name=\"City water\"\r\n                transform=\"translate(-120.5 217.2)\"/>\r\n          <g id=\"Windows\" transform=\"translate(8 40)\">\r\n            <path id=\"Path_13\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" class=\"cls-6\" data-name=\"Path 13\"\r\n                  transform=\"translate(-43.2 -19.8)\"/>\r\n            <path id=\"Path_14\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" class=\"cls-7\" data-name=\"Path 14\"\r\n                  transform=\"translate(-43.2 2.2)\"/>\r\n            <path id=\"Path_25\" d=\"M1488.3 628.5v-12.2h83.7v12.2z\" class=\"cls-7\" data-name=\"Path 25\"\r\n                  transform=\"translate(168.2 110.2)\"/>\r\n            <path id=\"Path_26\" d=\"M1488.3 628.5v-12.2h83.7v12.2z\" class=\"cls-7\" data-name=\"Path 26\"\r\n                  transform=\"translate(169.2 132.2)\"/>\r\n            <path id=\"Path_18\" fill=\"#a1feda\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" data-name=\"Path 18\"\r\n                  transform=\"translate(-108.2 26.2)\"/>\r\n            <path id=\"Path_20\" fill=\"#3564fb\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" data-name=\"Path 20\"\r\n                  transform=\"translate(-108.2 146.2)\"/>\r\n            <path id=\"Path_19\" fill=\"#a2b8ff\" d=\"M1488.3 665.4v-49h36.6v49z\" data-name=\"Path 19\"\r\n                  transform=\"translate(-108.2 54.3)\"/>\r\n            <path id=\"Path_15\" d=\"M1488.3 651v-34.7h36.6V651z\" class=\"cls-11\" data-name=\"Path 15\"\r\n                  transform=\"translate(-3.2 47.2)\"/>\r\n            <path id=\"Path_16\" fill=\"#3b5dca\" d=\"M1488.3 651v-34.7h36.6V651z\" data-name=\"Path 16\"\r\n                  transform=\"translate(-46.2 46.2)\"/>\r\n            <path id=\"Path_17\" fill=\"#597ff7\" d=\"M1488.3 651v-34.7h36.6V651z\" data-name=\"Path 17\"\r\n                  transform=\"translate(-12.2 117.2)\"/>\r\n            <path id=\"Path_27\" d=\"M1488.3 641.2v-24.9h62.9v24.9z\" class=\"cls-6\" data-name=\"Path 27\"\r\n                  transform=\"translate(169.1 28.2)\"/>\r\n            <path id=\"Path_28\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 28\"\r\n                  transform=\"translate(194.4 56)\"/>\r\n            <path id=\"Path_46\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 46\"\r\n                  transform=\"translate(194.4 82)\"/>\r\n            <path id=\"Path_47\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 47\"\r\n                  transform=\"translate(169.4 82)\"/>\r\n            <path id=\"Path_48\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-7\" data-name=\"Path 48\"\r\n                  transform=\"translate(169.4 56)\"/>\r\n            <path id=\"Path_44\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-11\" data-name=\"Path 44\"\r\n                  transform=\"translate(232.4 56)\"/>\r\n            <path id=\"Path_45\" fill=\"#aebff7\" d=\"M1488.3 634.3v-18h17.5v18z\" data-name=\"Path 45\"\r\n                  transform=\"translate(232.4 84)\"/>\r\n          </g>\r\n          <path id=\"Bridge\" fill=\"#ccc8ff\"\r\n                d=\"M1580.5 875.5c1-.3-17.9-39 .2-85.3h40s-11.4 42.6 5.5 85.3c-47.4-1.7-46.7.3-45.7 0z\"\r\n                transform=\"translate(8 40)\"/>\r\n          <g id=\"Water_Turbulence\" data-name=\"Water Turbulence\" transform=\"translate(8 40)\">\r\n            <g id=\"Group_4\" data-name=\"Group 4\">\r\n              <path id=\"Path_42\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                    transform=\"translate(11.8 2)\"/>\r\n              <path id=\"Path_43\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                    data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n            </g>\r\n            <g id=\"Group_5\" data-name=\"Group 5\" transform=\"translate(74 -14)\">\r\n              <path id=\"Path_42-2\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                    transform=\"translate(11.8 2)\"/>\r\n              <path id=\"Path_43-2\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                    data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n            </g>\r\n            <g id=\"Group_8\" data-name=\"Group 8\" transform=\"translate(85 17)\">\r\n              <path id=\"Path_42-3\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                    transform=\"translate(11.8 2)\"/>\r\n              <path id=\"Path_43-3\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                    data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n            </g>\r\n            <g id=\"Group_17\" data-name=\"Group 17\" transform=\"translate(315 14)\">\r\n              <path id=\"Path_42-4\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                    transform=\"translate(11.8 2)\"/>\r\n              <path id=\"Path_43-4\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                    data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n            </g>\r\n            <g id=\"Group_18\" data-name=\"Group 18\" transform=\"translate(245 -17)\">\r\n              <path id=\"Path_42-5\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                    transform=\"translate(11.8 2)\"/>\r\n              <path id=\"Path_43-5\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                    data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n            </g>\r\n          </g>\r\n          <g id=\"Fence\" transform=\"translate(8 40)\">\r\n            <g id=\"Poles\">\r\n              <rect id=\"Rectangle_13\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 13\" rx=\"2\"\r\n                    transform=\"translate(1375 858)\"/>\r\n              <rect id=\"Rectangle_18\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 18\" rx=\"2\"\r\n                    transform=\"translate(1450 858)\"/>\r\n              <rect id=\"Rectangle_21\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 21\" rx=\"2\"\r\n                    transform=\"translate(1525 858)\"/>\r\n              <rect id=\"Rectangle_14\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 14\" rx=\"2\"\r\n                    transform=\"translate(1400 858)\"/>\r\n              <rect id=\"Rectangle_17\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 17\" rx=\"2\"\r\n                    transform=\"translate(1475 858)\"/>\r\n              <rect id=\"Rectangle_20\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 20\" rx=\"2\"\r\n                    transform=\"translate(1550 858)\"/>\r\n              <rect id=\"Rectangle_15\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 15\" rx=\"2\"\r\n                    transform=\"translate(1425 858)\"/>\r\n              <rect id=\"Rectangle_16\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 16\" rx=\"2\"\r\n                    transform=\"translate(1500 858)\"/>\r\n            </g>\r\n            <g id=\"Ropes\">\r\n              <path id=\"Path_45-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 45\"\r\n                    transform=\"translate(0 4)\"/>\r\n              <path id=\"Path_46-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 46\"\r\n                    transform=\"translate(25 5)\"/>\r\n              <path id=\"Path_47-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 47\"\r\n                    transform=\"translate(50 3)\"/>\r\n              <path id=\"Path_48-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 48\"\r\n                    transform=\"translate(75 5)\"/>\r\n              <path id=\"Path_49\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 49\"\r\n                    transform=\"translate(101 3)\"/>\r\n              <path id=\"Path_50\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 50\"\r\n                    transform=\"translate(125 7)\"/>\r\n              <path id=\"Path_51\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 51\"\r\n                    transform=\"translate(150 5)\"/>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n\r\n        <form class=\"weather-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value.cityname)\" novalidate>\r\n            <input type=\"text\" id=\"city\" [(ngModel)] =\"cityName\" name=\"cityname\" (input)=\"onSearchLocation(input.value)\" #input required placeholder=\"Enter city\">\r\n\r\n            <button [disabled]=\"disabledForecastButton\" (click) =\"onSubmitDatabinding()\" type=\"submit\" name=\"button\">\r\n                <svg class=\"add__icon\" id=\"Plus_Icon\" data-name=\"Plus Icon\" viewBox=\"1454.4 326.4 209.1 209.1\">\r\n                  <defs>\r\n                    <style>\r\n                      .cls-299 {\r\n                        fill: #7effcc\r\n                      }\r\n                    </style>\r\n                    <filter id=\"Ellipse_7\" width=\"209.1\" height=\"209.1\" x=\"1454.4\" y=\"326.4\" filterUnits=\"userSpaceOnUse\">\r\n                      <feOffset dy=\"3\"/>\r\n                      <feGaussianBlur result=\"blur\" stdDeviation=\"3\"/>\r\n                      <feFlood flood-color=\"#333\" flood-opacity=\".1\"/>\r\n                      <feComposite in2=\"blur\" operator=\"in\"/>\r\n                      <feComposite in=\"SourceGraphic\"/>\r\n                    </filter>\r\n                  </defs>\r\n                  <g filter=\"url(#Ellipse_7)\">\r\n                    <circle id=\"Ellipse_7-2\" cx=\"95.6\" cy=\"95.6\" r=\"95.6\" fill=\"#f5f8ff\" data-name=\"Ellipse 7\"\r\n                            transform=\"translate(1463.4 332.4)\"/>\r\n                  </g>\r\n                  <rect id=\"Rectangle_3\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 3\" rx=\"5\"\r\n                        transform=\"translate(1552.6 358.1)\"/>\r\n                  <rect id=\"Rectangle_4\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 4\" rx=\"5\"\r\n                        transform=\"rotate(90 603.6 1026.8)\"/>\r\n                </svg>\r\n            </button>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-card/add-card.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-card/add-card.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* add card */\n.add__card {\n  background-color: #ffffff;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  padding: 2rem;\n  margin: 2rem;\n  width: 18rem;\n  height: 26rem;\n  justify-items: center;\n  border-radius: 1.75rem;\n  -webkit-animation: 1.25s ease-in-out 0ms 1 fadein;\n          animation: 1.25s ease-in-out 0ms 1 fadein;\n  color: #443282; }\n.add__card.dark {\n    background: linear-gradient(to bottom, #711B86, #00057A);\n    color: white; }\n.add__card .header__container .card__title {\n    text-transform: uppercase;\n    letter-spacing: 0.1rem; }\n.add__card .body__container {\n    align-self: end;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-flow: column; }\n.add__card .body__container .city__illustration {\n      width: 10rem; }\n.add__card .body__container .weather-form {\n      display: flex;\n      flex-flow: column;\n      width: 80%; }\n.add__card .body__container .weather-form input {\n        margin: 0.75rem 0;\n        padding: 1rem;\n        border-radius: 2rem;\n        outline: none;\n        border: none;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);\n        -webkit-animation-duration: 2s;\n                animation-duration: 2s; }\n.add__card .body__container .weather-form input::-webkit-input-placeholder {\n          color: #39437a;\n          font-size: 0.9rem; }\n.add__card .body__container .weather-form input::-ms-input-placeholder {\n          color: #39437a;\n          font-size: 0.9rem; }\n.add__card .body__container .weather-form input::placeholder {\n          color: #39437a;\n          font-size: 0.9rem; }\n.add__card .body__container .weather-form button {\n        background: linear-gradient(#4fffa1, #4ff0ff);\n        padding: 1rem;\n        border-radius: 2rem;\n        outline: none;\n        border: none;\n        cursor: pointer;\n        margin-top: 1rem;\n        -webkit-animation-duration: 2s;\n                animation-duration: 2s; }\n.add__card .body__container .weather-form button .add__icon {\n          width: 3rem;\n          margin-top: 1rem;\n          margin-bottom: 1.15rem;\n          /*plus sign fill*/ }\n.add__card .body__container .weather-form button .add__icon .cls-299 {\n            fill: #7effcc; }\n.add__card .body__container .weather-form button .add__icon:hover .cls-299 {\n            fill: red; }\n.add__card .body__container .weather-form button:hover {\n          background: linear-gradient(to right, #e21649, #ffb600); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNhcmQvQzpcXFVzZXJzXFxibHVlYmlyZFxcRGVza3RvcFxcYW5ndWxhcjZjcnVkL3NyY1xcYXBwXFxhZGQtY2FyZFxcYWRkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQTtBQUNBO0VBQ0kseUJBQXlCO0VBQ3pCLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBRXJCLHNCQUFzQjtFQUN0QixpREFBeUM7VUFBekMseUNBQXlDO0VBQ3pDLGNBQWMsRUFBQTtBQWRsQjtJQWdCUSx3REFBd0Q7SUFDeEQsWUFBWSxFQUFBO0FBakJwQjtJQXFCWSx5QkFBeUI7SUFDekIsc0JBQXNCLEVBQUE7QUF0QmxDO0lBMEJRLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQTlCekI7TUFnQ1ksWUFBWSxFQUFBO0FBaEN4QjtNQW1DWSxhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFVBQVUsRUFBQTtBQXJDdEI7UUF1Q1ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFlBQVk7UUFDWix3Q0FBd0M7UUFDeEMsOEJBQXNCO2dCQUF0QixzQkFBc0IsRUFBQTtBQTdDbEM7VUErQ29CLGNBQWM7VUFDZCxpQkFBaUIsRUFBQTtBQWhEckM7VUErQ29CLGNBQWM7VUFDZCxpQkFBaUIsRUFBQTtBQWhEckM7VUErQ29CLGNBQWM7VUFDZCxpQkFBaUIsRUFBQTtBQWhEckM7UUFvRGdCLDZDQUE2QztRQUM3QyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixZQUFZO1FBR1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQiw4QkFBc0I7Z0JBQXRCLHNCQUFzQixFQUFBO0FBN0R0QztVQWdFb0IsV0FBVztVQUNYLGdCQUFnQjtVQUNoQixzQkFBc0I7VUFDdEIsaUJBQUEsRUFBa0I7QUFuRXRDO1lBb0U2QixhQUFZLEVBQUE7QUFwRXpDO1lBc0VpQyxTQUFRLEVBQUE7QUF0RXpDO1VBMEVvQix1REFBdUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1jYXJkL2FkZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYWRkIGNhcmQgKi9cclxuLmFkZF9fY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMyk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgaGVpZ2h0OiAyNnJlbTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcbiAgICBhbmltYXRpb246IDEuMjVzIGVhc2UtaW4tb3V0IDBtcyAxIGZhZGVpbjtcclxuICAgIGNvbG9yOiAjNDQzMjgyO1xyXG4gICAgJi5kYXJrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzExQjg2LCAjMDAwNTdBKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xyXG4gICAgICAgIC5jYXJkX190aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvZHlfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgLmNpdHlfX2lsbHVzdHJhdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndlYXRoZXItZm9ybSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzOTQzN2E7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNGZmZmExLCAjNGZmMGZmKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcblxyXG4gICAgICAgICAgICAgICAgLmFkZF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qcGx1cyBzaWduIGZpbGwqL1xyXG4gICAgICAgICAgICAgICAgICAgIC5jbHMtMjk5e2ZpbGw6IzdlZmZjYzt9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMjk5e2ZpbGw6cmVkO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMjE2NDksICNmZmI2MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-card/add-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-card/add-card.component.ts ***!
  \************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _weather_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather/weather.service */ "./src/app/weather/weather.service.ts");
/* harmony import */ var _weather_weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weather/weather */ "./src/app/weather/weather.ts");






var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(globals, _weatherService) {
        this.globals = globals;
        this._weatherService = _weatherService;
        this.weatherForecastData = [];
    }
    AddCardComponent.prototype.ngOnInit = function () { };
    // onSubmit(cityName: string) {
    //     console.log("Get weather for "+cityName);
    //     this._weatherService.searchWeatherInfo(cityName)
    //         .pipe(map(result => (<any>result)))
    //         .subscribe(result => {
    //
    //             console.log(result);
    //
    //             this.onResetControls();
    //
    //         }, error => {
    //             console.error(error);
    //         });
    // }
    AddCardComponent.prototype.onSubmit = function (cityName) {
        var _this = this;
        console.log("Get weather for " + cityName);
        this._weatherService.searchWeatherInfo(cityName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.observations.location[0]; }))
            .subscribe(function (result) {
            var city = result.city;
            var description = result.observation[0].iconName;
            var temperature = result.observation[0].temperature;
            // let temperature = ((result.observation[0].temperature * (9 / 5)) + 32).toFixed(2);
            var country = result.country;
            var icon = result.observation[0].iconLink;
            var weather = new _weather_weather__WEBPACK_IMPORTED_MODULE_5__["Weather"](city, description, temperature, country, icon);
            console.log(weather);
            _this._weatherService.addWeatherData(weather);
            _this.onResetControls();
        }, function (error) {
            console.error(error);
        });
    };
    AddCardComponent.prototype.onSearchLocation = function (cityName) {
        this.disabledForecastButton = false;
        // console.log(cityName);
        // this.isSearching = true;
        // this.searchStream.next(value);
    };
    AddCardComponent.prototype.onSubmitDatabinding = function () {
        console.log('Inside the two way', this.cityName);
        // this._weatherService.searchWeatherInfo(this.cityName)
        //     .subscribe(data => { this.weatherForecastData = data }, error => this.errorMessage = <any>error);
        // this.onResetControls();
    };
    AddCardComponent.prototype.onSearchLocationWithEvent = function (event) {
        console.log('Control event value', event.target.value);
        this.cityName = event.target.value;
        this.disabledForecastButton = false;
    };
    AddCardComponent.prototype.onResetControls = function () {
        this.cityName = '';
        // this.disabledForecastButton = true;
    };
    AddCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-card',
            template: __webpack_require__(/*! ./add-card.component.html */ "./src/app/add-card/add-card.component.html"),
            providers: [_weather_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]],
            styles: [__webpack_require__(/*! ./add-card.component.scss */ "./src/app/add-card/add-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _weather_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n    {{message.text}}\n</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../weather/details/weather-details.component */ "./src/app/weather/details/weather-details.component.ts");







var routes = [
    {
        path: 'dashboard',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'detail-report/:city',
        component: _weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_6__["WeatherDetailsComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: '',
        pathMatch: 'full',
        // component: HomeComponent
        redirectTo: 'dashboard'
    },
    // otherwise redirect to login
    { path: '**', redirectTo: 'dashboard' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-container__bg\" [ngClass]=\"{'dark': globals.darkModeActive}\"></div> -->\n<!-- <div class=\"root__container\"> -->\n\n\n    <app-header></app-header>\n    <main>\n        <div class=\"content\">\n            <div class=\"\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n\n        <!-- <app-svg-definitions class=\"hide-svgs\" ></app-svg-definitions> -->\n    </main>\n\n    <footer class=\"main__footer clear\">\n        <small class=\"copyright__text\">Copyright © 2018 Fatima</small>\n    </footer>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root__container {\n  width: 100%;\n  height: 100vh; }\n\n/****** body ******/\n\n.main__container {\n  height: 100vh;\n  width: 100%; }\n\n.main__container.dark {\n    opacity: 1;\n    background: linear-gradient(to bottom, pink, #2E1D65);\n    transition: opacity 300ms linear; }\n\n.main-container__bg {\n  background: linear-gradient(#FC7DB8, #495CFC);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: -2;\n  transition: opacity 300ms linear; }\n\n.main-container__bg.dark {\n    opacity: 1;\n    background: linear-gradient(#711B86, #00057A);\n    transition: opacity 300ms linear; }\n\n/****** footer ******/\n\n.main__footer {\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.main__footer .copyright__text {\n    letter-spacing: 0.1rem;\n    color: #FFB200; }\n\n@media only screen and (max-width: 300px) {\n  .slide-menu {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxibHVlYmlyZFxcRGVza3RvcFxcYW5ndWxhcjZjcnVkL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQWFmLG1CQUFBOztBQUNBO0VBQ0ksYUFBYTtFQUNoQixXQUFXLEVBQUE7O0FBRlo7SUFPUSxVQUFVO0lBQ1YscURBQXFEO0lBQ3JELGdDQUFnQyxFQUFBOztBQUd4QztFQVNJLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQ0FBZ0MsRUFBQTs7QUFoQnBDO0lBa0JRLFVBQVU7SUFDViw2Q0FBNkM7SUFDN0MsZ0NBQWdDLEVBQUE7O0FBS3hDLHFCQUFBOztBQUNBO0VBT0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTLEVBQUE7O0FBVGI7SUFXUSxzQkFBc0I7SUFDdEIsY0FBYyxFQUFBOztBQVN0QjtFQUNFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdF9fY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgYXV0bztcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKioqKiogYm9keSAqKioqKiovXHJcbi5tYWluX19jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAmLmRhcmsge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcGluaywgIzJFMUQ2NSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbiAgICB9XHJcbn1cclxuLm1haW4tY29udGFpbmVyX19iZyB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICAvLyB6LWluZGV4OiAtMjtcclxuICAgIC8vIG9wYWNpdHk6IDA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkM3REI4LCAjNDk1Q0ZDKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB6LWluZGV4OiAtMjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgbGluZWFyO1xyXG4gICAgJi5kYXJrIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNzExQjg2LCAjMDAwNTdBKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKioqKiogZm9vdGVyICoqKioqKi9cclxuLm1haW5fX2Zvb3RlciB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vIGJvdHRvbTogMDtcclxuICAgIC8vIHotaW5kZXg6IDEwMDtcclxuICAgIC8vIHBhZGRpbmc6IDFyZW07XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAuY29weXJpZ2h0X190ZXh0IHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjRkZCMjAwO1xyXG4gICAgfVxyXG4gICAgLy8gJi5kYXJrIHtcclxuICAgIC8vICAgICBvcGFjaXR5OiAxO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6ICMyRTFENjU7XHJcbiAgICAvLyAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuc2xpZGUtbWVudSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");


// import { WeatherItemComponent } from './weather/details/weather-item.component';

var AppComponent = /** @class */ (function () {
    function AppComponent(globals) {
        this.globals = globals;
        this.title = 'angular6crud';
    }
    //   showSvgs: boolean = false;
    //   getClass() {
    //     if(this.className === 'hide-svgs') {
    //         this.showSvgs = false;
    //     } else {
    //         this.showSvgs = true;
    //     }
    // }
    // darkModeActive: boolean = false;
    AppComponent.prototype.modeToggleSwitch = function (event) {
        if (event.target.checked) {
            this.globals.darkModeActive = true;
        }
        else {
            this.globals.darkModeActive = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _click_outside_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./click-outside.directive */ "./src/app/click-outside.directive.ts");
/* harmony import */ var _weather_weathercard_weathercard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./weather/weathercard/weathercard.component */ "./src/app/weather/weathercard/weathercard.component.ts");
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-card/add-card.component */ "./src/app/add-card/add-card.component.ts");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svg/svg.component */ "./src/app/svg/svg.component.ts");
/* harmony import */ var _svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svg-definitions/svg-definitions.component */ "./src/app/svg-definitions/svg-definitions.component.ts");
/* harmony import */ var _weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./weather/details/weather-details.component */ "./src/app/weather/details/weather-details.component.ts");
/* harmony import */ var _weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./weather/item/weather-item.component */ "./src/app/weather/item/weather-item.component.ts");
/* harmony import */ var _weather_list_weather_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./weather/list/weather-list.component */ "./src/app/weather/list/weather-list.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _pipes_fahrenheit_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/fahrenheit.pipe */ "./src/app/pipes/fahrenheit.pipe.ts");
/* harmony import */ var _pipes_removeUnderscore_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/removeUnderscore.pipe */ "./src/app/pipes/removeUnderscore.pipe.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");







// services















// pipes



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _click_outside_directive__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideDirective"],
                _weather_weathercard_weathercard_component__WEBPACK_IMPORTED_MODULE_14__["WeathercardComponent"],
                _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_15__["AddCardComponent"],
                _svg_svg_component__WEBPACK_IMPORTED_MODULE_16__["SvgComponent"],
                _svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_17__["SvgDefinitionsComponent"],
                _weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_18__["WeatherDetailsComponent"],
                _weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_19__["WeatherItemComponent"],
                _weather_list_weather_list_component__WEBPACK_IMPORTED_MODULE_20__["WeatherListComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_21__["AlertComponent"],
                _pipes_fahrenheit_pipe__WEBPACK_IMPORTED_MODULE_22__["FahrenheitPipe"],
                _pipes_removeUnderscore_pipe__WEBPACK_IMPORTED_MODULE_23__["RemoveUnderscorePipe"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientJsonpModule"]
            ],
            providers: [
                _globals__WEBPACK_IMPORTED_MODULE_6__["Globals"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/click-outside.directive.ts":
/*!********************************************!*\
  !*** ./src/app/click-outside.directive.ts ***!
  \********************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ClickOutsideDirective.prototype.onClick = function (event) {
        // if (!this.elementRef.nativeElement.contains(event.target)) // or some similar check
        // console.log("clicked")
        //doSomething();
    };
    ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appClickOutside]',
            host: {
                '(document:click)': 'onClick($event)'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Globals = /** @class */ (function () {
    function Globals() {
        this.darkModeActive = false;
    }
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-nav__container\" [ngClass]=\"{'dark': globals.darkModeActive}\">\n    <nav class=\"main-nav\">\n        <div class=\"main-nav__left\">\n            <svg [ngClass]=\"{'active': showMenu, 'dark': globals.darkModeActive}\" (click)=\"toggleMenu()\" id=\"Menu_Burger_Icon\" class=\"hamburger__icon hamRotate ham1\" viewBox=\"0 0 100 100\" width=\"80\" onclick=\"this.classList.toggle('active')\">\n                <path\n                class=\"line top\"\n                d=\"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40\" />\n                <path\n                class=\"line middle\"\n                d=\"m 30,50 h 40\" />\n                <path\n                class=\"line bottom\"\n                d=\"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40\" />\n            </svg>\n            <!-- <svg class=\"logo__icon\" viewBox=\"150.3 22.2 213.7 42.8\">\n                <path fill=\"#00ff9b\" d=\"M150.3 65V22.2L193 65z\" data-name=\"Path 1\"/>\n                <path fill=\"#003eff\" d=\"M193.1 65h-42.8L193 22.2z\" data-name=\"Path 2\"/>\n                <text class=\"logo__text\" fill=\"#432c85\" font-family=\"SegoeUI-Semibold,Segoe UI\" font-size=\"30\" font-weight=\"600\"\n                letter-spacing=\".1em\" transform=\"translate(237 56)\">\n                <tspan x=\"0\" y=\"0\">HiWeather</tspan>\n                </text>\n            </svg> -->\n        </div>\n        <div class=\"main-nav__center\">\n            <h2>HiWEATHER</h2>\n        </div>\n\n        <div class=\"main-nav__right\">\n            <div class=\"mode-toggle__container\">\n                <span>Light </span>\n                <span class=\"toggle-button\">\n                    <input (change)=\"modeToggleSwitch($event)\" type=\"checkbox\" name=\"checkbox1\" id=\"toggle-button-checkbox\" />\n                    <label for=\"toggle-button-checkbox\" class=\"toggle-button-label-left\"></label>\n                    <label for=\"toggle-button-checkbox\" class=\"toggle-button-label\"></label>\n                </span>\n                <span>Dark</span>\n            </div>\n            <!-- <span *ngIf=\"!currentUser\"><a routerLink=\"login\" routerLinkActive=\"active-link\" class=\"btn ylw-btn\">Login</a></span> -->\n            <span *ngIf=\"currentUser\"><a routerLinkActive=\"active-link\" class=\"btn ylw-btn\" (click)=\"logout()\">Login</a></span>\n        </div>\n    </nav>\n</header>\n\n<!-- slide menu -->\n<aside class=\"slide-menu__container\" [ngClass]=\"{'active': showMenu}\" appClickOutside (click)=\"ClickedOut($event)\">\n    <nav class=\"slide-menu\" [ngClass]=\"{'active': showMenu}\" >\n        <section class=\"menu-header\">\n            <h2 class=\"greeting-text\">Welcome back!</h2>\n            <div class=\"account-details\">\n                <span class=\"name__text\">[NAME]</span>\n                <span class=\"email__text\">[EMAIL]</span>\n            </div>\n\n        </section>\n        <section class=\"menu-body\">\n            <ul>\n                <li>\n                    <a routerLink=\"dashboard\" routerLinkActive=\"active-link\" (click)=\"toggleMenu()\">Home</a>\n                </li>\n                <!-- <li>\n                    <a routerLink=\"login\" routerLinkActive=\"active-link\">Login</a>\n                </li> -->\n                <!-- <li>\n                    <a routerLink=\"register\" routerLinkActive=\"active-link\">Register</a>\n                </li> -->\n            </ul>\n        </section>\n        <section class=\"menu-footer\">\n\n        </section>\n    </nav>\n</aside>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/****** header ******/\n/* main-nav */\n.main-nav__container {\n  width: 100%;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  height: 4rem;\n  background-color: #FC7DB8;\n  transition: background-color 500ms linear;\n  -webkit-animation: 1s ease-in-out 0ms 1 fadein;\n          animation: 1s ease-in-out 0ms 1 fadein;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.main-nav__container.dark {\n    background-color: #2B244D;\n    color: white; }\n.clear:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n.main-nav {\n  display: flex; }\n.main-nav .main-nav__left {\n    flex: 1;\n    /* shorthand for: flex-grow: 1, flex-shrink: 1, flex-basis: 0 */\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n.main-nav .main-nav__center {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.main-nav .main-nav__right {\n    flex: 1;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding-right: 40px; }\n.main-nav .main-nav__right span {\n      height: 50%; }\n/* hamburger__icon */\n.hamburger__icon {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: -webkit-transform 400ms;\n  transition: transform 400ms;\n  transition: transform 400ms, -webkit-transform 400ms;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 26; }\n.hamburger__icon.hamRotate.active {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.hamburger__icon.hamRotate180.active {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n.hamburger__icon.ham1 .top {\n    stroke-dasharray: 40 139; }\n.hamburger__icon.ham1 .bottom {\n    stroke-dasharray: 40 180; }\n.hamburger__icon.ham1.active .top {\n    stroke-dashoffset: -98px; }\n.hamburger__icon.ham1.active .bottom {\n    stroke-dashoffset: -138px; }\n.hamburger__icon .line {\n    fill: none;\n    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;\n    stroke: black;\n    stroke-width: 5.5;\n    stroke-linecap: round; }\n.hamburger__icon.dark .line {\n    stroke: pink; }\n/* slide-menu */\n.slide-menu__container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 25; }\n.slide-menu__container::before {\n    content: '';\n    cursor: pointer;\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #0c1066;\n    opacity: 0;\n    transition: opacity 300ms linear;\n    will-change: opacity; }\n.slide-menu__container.active {\n    pointer-events: auto; }\n.slide-menu__container.active::before {\n      opacity: 0.3; }\n.slide-menu {\n  -webkit-transform: translateX(-103%);\n          transform: translateX(-103%);\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  height: 100%;\n  width: 90%;\n  max-width: 26rem;\n  background-color: white;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2fr 4fr 1fr;\n  grid-gap: 1rem;\n  transition: -webkit-transform 300ms linear;\n  transition: transform 300ms linear;\n  transition: transform 300ms linear, -webkit-transform 300ms linear;\n  will-change: transform; }\n.slide-menu.active {\n    -webkit-transform: none;\n            transform: none; }\n.menu-header {\n  background: linear-gradient(to right, #00FF9B, #5f84fb);\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: 1fr 4fr;\n  grid-template-areas: \"greeting greeting\" \"image details\";\n  box-sizing: border-box;\n  width: 100%;\n  align-content: center;\n  color: white;\n  box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);\n  text-align: center;\n  padding: 20% 0 0 0; }\n.greeting-text {\n  grid-area: greeting;\n  font-size: 1.25rem;\n  letter-spacing: 0.15rem;\n  text-transform: uppercase;\n  margin-top: 1rem;\n  justify-self: center;\n  align-self: center; }\n.account-details {\n  grid-area: details;\n  display: flex;\n  flex-flow: column;\n  margin-left: 1rem;\n  align-self: center; }\n.name__text {\n  font-size: 1.15rem;\n  margin-bottom: 0.5rem; }\n.email__text {\n  font-size: 0.9rem;\n  letter-spacing: 0.1rem; }\n.menu-body {\n  display: grid;\n  width: 100%;\n  margin-left: 2rem; }\n.menu-body ul {\n    list-style-type: none; }\n.menu-body li {\n    padding: 1rem; }\n.profile-image__container {\n  grid-area: image;\n  margin-right: 0.5rem;\n  border-radius: 50%;\n  height: 4rem;\n  width: 4rem;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  align-self: center;\n  margin-left: 2rem; }\n.profile__image {\n  max-width: 4rem; }\n/*LOGO*/\n.logo__icon {\n  height: 2rem;\n  margin-left: 1rem; }\n.logo__text {\n  fill: #2B244D; }\n.logo__text-dark {\n  fill: #ffff; }\n/****** mode-toggle__container ******/\n.mode-toggle__container {\n  margin-right: 10px;\n  /* variables for toggle-button */ }\n.mode-toggle__container .toggle-button-label-left:empty {\n    margin-left: -10px; }\n.mode-toggle__container .toggle-button-label-left:before, .mode-toggle__container .toggle-button-label-left:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    /*transition*/\n    transition: .25s ease-in-out;\n    outline: none; }\n.mode-toggle__container .toggle-button {\n    margin-left: 10px; }\n.mode-toggle__container .toggle-button input[type=checkbox], .mode-toggle__container .toggle-button input[type=checkbox]:active {\n    position: absolute;\n    top: -5000px;\n    height: 0;\n    width: 0;\n    opacity: 0;\n    border: none;\n    outline: none; }\n.mode-toggle__container .toggle-button label {\n    display: inline-block;\n    position: relative;\n    padding: 0px;\n    margin-bottom: 20px;\n    font-size: 14px;\n    line-height: 16px;\n    cursor: pointer;\n    color: rgba(149, 149, 149, 0.51);\n    font-weight: normal; }\n.mode-toggle__container .toggle-button label.toggle-button-label-left:before {\n      content: '';\n      display: block;\n      position: absolute;\n      z-index: 1;\n      line-height: 34px;\n      text-indent: 40px;\n      height: 16px;\n      width: 16px;\n      margin: 4px;\n      /*border-radius*/\n      border-radius: 100%;\n      right: 26px;\n      bottom: 0px;\n      background: #FFB200;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      box-shadow: 0 0 10px white; }\n.mode-toggle__container .toggle-button label.toggle-button-label-left:after {\n      content: \"\";\n      display: inline-block;\n      width: 40px;\n      height: 24px;\n      /*border-radius*/\n      border-radius: 16px;\n      background: rgba(255, 255, 255, 0.15);\n      vertical-align: middle;\n      margin: 0 10px;\n      border: 2px solid black; }\n.mode-toggle__container .toggle-button input[type=checkbox]:checked + .toggle-button-label-left:before {\n    right: 17px;\n    box-shadow: 5px 5px 0 0 #eee;\n    background: transparent; }\n.mode-toggle__container .toggle-button input[type=checkbox]:checked + .toggle-button-label-left:after {\n    background: rgba(0, 0, 0, 0.15);\n    border: 2px solid pink; }\n.mode-toggle__container .toggle-button input[type=checkbox] + .toggle-button-label-left {\n    color: rgba(250, 250, 250, 0.51);\n    font-weight: bold; }\n.mode-toggle__container .toggle-button input[type=checkbox]:checked + .toggle-button-label-left {\n    color: rgba(149, 149, 149, 0.51);\n    font-weight: normal; }\n.mode-toggle__container .toggle-button input[type=checkbox]:checked + .toggle-button-label-left + .toggle-button-label {\n    color: rgba(250, 250, 250, 0.51);\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcYmx1ZWJpcmRcXERlc2t0b3BcXGFuZ3VsYXI2Y3J1ZC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQUE7QUFDQSxhQUFBO0FBQ0E7RUFFSSxXQUFXO0VBSVgseUNBQXlDO0VBQ3pDLFlBQVk7RUFHWix5QkFBeUI7RUFDekIseUNBQXlDO0VBQ3pDLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPLEVBQUE7QUFmWDtJQWlCUSx5QkFBeUI7SUFDekIsWUFBWSxFQUFBO0FBR3BCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUE7QUFFbEI7RUFDSSxhQUFhLEVBQUE7QUFEakI7SUFHUSxPQUFPO0lBQVcsK0RBQUE7SUFDbEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUIsRUFBQTtBQU4zQjtJQVVRLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBO0FBYjNCO0lBaUJRLE9BQU87SUFDUCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtBQXJCM0I7TUF5QmEsV0FBVyxFQUFBO0FBSXhCLG9CQUFBO0FBQ0E7RUFDSSxlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLG1DQUEyQjtFQUEzQiwyQkFBMkI7RUFBM0Isb0RBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7QUFSZjtJQVVrQixnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7QUFWMUM7SUFha0IsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0FBYjNDO0lBZ0JjLHdCQUF3QixFQUFBO0FBaEJ0QztJQWlCaUIsd0JBQXdCLEVBQUE7QUFqQnpDO0lBbUJrQix3QkFBd0IsRUFBQTtBQW5CMUM7SUFvQnFCLHlCQUF5QixFQUFBO0FBcEI5QztJQXdCTSxVQUFTO0lBQ1QsMkRBQTJEO0lBQzNELGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIscUJBQW9CLEVBQUE7QUE1QjFCO0lBZ0NlLFlBQVksRUFBQTtBQUkzQixlQUFBO0FBQ0E7RUFDSSxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVyxFQUFBO0FBUmY7SUFXUSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLG9CQUFvQixFQUFBO0FBdEI1QjtJQXlCUSxvQkFBb0IsRUFBQTtBQXpCNUI7TUEwQmtCLFlBQVksRUFBQTtBQUc5QjtFQUNJLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLDBDQUFrQztFQUFsQyxrQ0FBa0M7RUFBbEMsa0VBQWtDO0VBQ2xDLHNCQUFzQixFQUFBO0FBaEIxQjtJQWtCUSx1QkFBZTtZQUFmLGVBQWUsRUFBQTtBQUl2QjtFQUNJLHVEQUF1RDtFQUN2RCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix3REFBd0Q7RUFDeEQsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTtBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7QUFIbkI7SUFLTSxxQkFBcUIsRUFBQTtBQUwzQjtJQVFNLGFBQWEsRUFBQTtBQUluQjtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxlQUFlLEVBQUE7QUFHakIsT0FBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxXQUFXLEVBQUE7QUFFYixxQ0FBQTtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdDQUFBLEVBQWlDO0FBRnJDO0lBbUJpQixrQkFQYSxFQUFBO0FBWjlCO0lBcUJZLHNCQUFxQjtJQUNyQixTQUFRO0lBQ1IsVUFBUztJQUNULGFBQUE7SUFJQSw0QkFBMkI7SUFDM0IsYUFBWSxFQUFBO0FBN0J4QjtJQWlDUSxpQkFBaUIsRUFBQTtBQWpDekI7SUFxQ1Esa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxTQUFRO0lBQ1IsUUFBTztJQUNQLFVBQVM7SUFDVCxZQUFXO0lBQ1gsYUFBWSxFQUFBO0FBM0NwQjtJQThDUSxxQkFBb0I7SUFDcEIsa0JBQWlCO0lBQ2pCLFlBbkM0QjtJQW9DNUIsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLGdDQXZDZ0Q7SUF3Q2hELG1CQXRDOEIsRUFBQTtBQWhCdEM7TUF5RGdCLFdBQVU7TUFDVixjQUFhO01BQ2Isa0JBQWlCO01BQ2pCLFVBQVM7TUFDVCxpQkFBZ0I7TUFDaEIsaUJBQWdCO01BQ2hCLFlBckRZO01Bc0RaLFdBdERZO01BdURaLFdBdERjO01BdURkLGdCQUFBO01BR0EsbUJBQWtCO01BQ2xCLFdBQW1GO01BQ25GLFdBMURvQjtNQTJEcEIsbUJBbkVVO01Bb0VWLGlDQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsMEJBdkVVLEVBQUE7QUFIMUI7TUE2RWdCLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIsV0FBNkQ7TUFDN0QsWUFBdUQ7TUFDdkQsZ0JBQUE7TUFHQSxtQkExRVk7TUEyRVoscUNBOUVzQjtNQStFdEIsc0JBQXNCO01BQ3RCLGNBM0VjO01BNEVkLHVCQWxGZSxFQUFBO0FBTi9CO0lBOEZRLFdBQVc7SUFDWCw0QkF2RmdCO0lBd0ZoQix1QkFBdUIsRUFBQTtBQWhHL0I7SUFtR1EsK0JBL0Z1QjtJQWdHdkIsc0JBM0Z1QixFQUFBO0FBVC9CO0lBdUdRLGdDQXhGdUQ7SUF5RnZELGlCQXZGbUMsRUFBQTtBQWpCM0M7SUEyR1EsZ0NBN0ZnRDtJQThGaEQsbUJBNUY4QixFQUFBO0FBaEJ0QztJQStHUSxnQ0FoR3VEO0lBaUd2RCxpQkEvRm1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKiBoZWFkZXIgKioqKioqL1xyXG4vKiBtYWluLW5hdiAqL1xyXG4ubWFpbi1uYXZfX2NvbnRhaW5lciB7XHJcbiAgICAvLyBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuMjVmcjtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAvLyBtYXJnaW46IDA7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDN0RCODtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwbXMgMSBmYWRlaW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgJi5kYXJrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyNDREO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4uY2xlYXI6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLm1haW4tbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAubWFpbi1uYXZfX2xlZnQge1xyXG4gICAgICAgIGZsZXg6IDE7ICAgICAgICAgIC8qIHNob3J0aGFuZCBmb3I6IGZsZXgtZ3JvdzogMSwgZmxleC1zaHJpbms6IDEsIGZsZXgtYmFzaXM6IDAgKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XHJcbiAgICB9XHJcbiAgICAubWFpbi1uYXZfX2NlbnRlciB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcclxuICAgIH1cclxuICAgIC5tYWluLW5hdl9fcmlnaHQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBoYW1idXJnZXJfX2ljb24gKi9cclxuLmhhbWJ1cmdlcl9faWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHotaW5kZXg6IDI2O1xyXG4gICAgJi5oYW1Sb3RhdGUge1xyXG4gICAgICAgICYuYWN0aXZlIHt0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7fVxyXG4gICAgfVxyXG4gICAgJi5oYW1Sb3RhdGUxODAge1xyXG4gICAgICAgICYuYWN0aXZlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO31cclxuICAgIH1cclxuICAgICYuaGFtMSB7XHJcbiAgICAgICAgLnRvcCB7c3Ryb2tlLWRhc2hhcnJheTogNDAgMTM5O31cclxuICAgICAgICAuYm90dG9tIHtzdHJva2UtZGFzaGFycmF5OiA0MCAxODA7fVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgLnRvcCB7c3Ryb2tlLWRhc2hvZmZzZXQ6IC05OHB4O31cclxuICAgICAgICAgICAgLmJvdHRvbSB7c3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMzhweDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICBmaWxsOm5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgNDAwbXMsIHN0cm9rZS1kYXNob2Zmc2V0IDQwMG1zO1xyXG4gICAgICBzdHJva2U6YmxhY2s7XHJcbiAgICAgIHN0cm9rZS13aWR0aDo1LjU7XHJcbiAgICAgIHN0cm9rZS1saW5lY2FwOnJvdW5kO1xyXG5cclxuICAgIH1cclxuICAgICYuZGFyayB7XHJcbiAgICAgICAgLmxpbmUge3N0cm9rZTogcGluazt9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIHNsaWRlLW1lbnUgKi9cclxuLnNsaWRlLW1lbnVfX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAyNTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTA2NjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgbGluZWFyO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICAgICY6OmJlZm9yZXtvcGFjaXR5OiAwLjM7fVxyXG4gICAgfVxyXG59XHJcbi5zbGlkZS1tZW51IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAzJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiAyNnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA0ZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgfVxyXG59XHJcbi5tZW51LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMEZGOUIsICM1Zjg0ZmIpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZ3JlZXRpbmcgZ3JlZXRpbmdcIiBcImltYWdlIGRldGFpbHNcIjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMCUgMCAwIDA7XHJcbiAgICAvLyBwYWRkaW5nOiAzcmVtO1xyXG59XHJcbi5ncmVldGluZy10ZXh0IHtcclxuICAgIGdyaWQtYXJlYTogZ3JlZXRpbmc7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmFjY291bnQtZGV0YWlscyB7XHJcbiAgICBncmlkLWFyZWE6IGRldGFpbHM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hbWVfX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5lbWFpbF9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLm1lbnUtYm9keSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2VfX2NvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnByb2ZpbGVfX2ltYWdlIHtcclxuICBtYXgtd2lkdGg6IDRyZW07XHJcbn1cclxuXHJcbi8qTE9HTyovXHJcbi5sb2dvX19pY29uIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5sb2dvX190ZXh0IHtcclxuICBmaWxsOiAjMkIyNDREO1xyXG59XHJcblxyXG4ubG9nb19fdGV4dC1kYXJrIHtcclxuICBmaWxsOiAjZmZmZjtcclxufVxyXG4vKioqKioqIG1vZGUtdG9nZ2xlX19jb250YWluZXIgKioqKioqL1xyXG4ubW9kZS10b2dnbGVfX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAvKiB2YXJpYWJsZXMgZm9yIHRvZ2dsZS1idXR0b24gKi9cclxuICAgICRzaGluZTogMCAwIDEwcHggd2hpdGU7XHJcbiAgICAkb24tYmc6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAkb24tZG90LWNvbG9yOiAjRkZCMjAwO1xyXG4gICAgJG9uLWJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgJG9mZi1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICRvZmYtZG90LWNvbG9yOiAjZWVlO1xyXG4gICAgJG9mZi1ib3JkZXI6IDJweCBzb2xpZCBwaW5rOyAvLyBjaGFuZ2UgdG8gd2hpdGUgZm9yIGRhcmsgbW9kZVxyXG4gICAgJHRvZ2dsZWJ1dHRvbi1zaXplOiAxNnB4O1xyXG4gICAgJHRvZ2dsZWJ1dHRvbi1wYWRkaW5nOiA0cHg7XHJcbiAgICAkdG9nZ2xlYnV0dG9uLW1hcmdpbjogMTBweDtcclxuICAgICR0b2dnbGVidXR0b24tbGFiZWwtcGFkZGluZzogMHB4O1xyXG4gICAgJHRvZ2dsZWJ1dHRvbi1sYWJlbC1jb2xvcjogcmdiYSgxNDksIDE0OSwgMTQ5LCAwLjUxKTtcclxuICAgICR0b2dnbGVidXR0b24tbGFiZWwtYWN0aXZlLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNTEpO1xyXG4gICAgJHRvZ2dsZWJ1dHRvbi1sYWJlbC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICR0b2dnbGVidXR0b24tbGFiZWwtYWN0aXZlLXdlaWdodDogYm9sZDtcclxuICAgIC50b2dnbGUtYnV0dG9uLWxhYmVsLWxlZnQge1xyXG4gICAgICAgICY6ZW1wdHkge21hcmdpbi1sZWZ0OiAtJHRvZ2dsZWJ1dHRvbi1tYXJnaW47fVxyXG4gICAgICAgICY6YmVmb3JlLCY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIC8qdHJhbnNpdGlvbiovXHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjouMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246LjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjouMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOi4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZ2dsZS1idXR0b24gaW5wdXRbdHlwZT1jaGVja2JveF0sIC50b2dnbGUtYnV0dG9uIGlucHV0W3R5cGU9Y2hlY2tib3hdOmFjdGl2ZXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6LTUwMDBweDtcclxuICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICB3aWR0aDowO1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9nZ2xlLWJ1dHRvbiBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiR0b2dnbGVidXR0b24tbGFiZWwtcGFkZGluZztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MTZweDtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHRvZ2dsZWJ1dHRvbi1sYWJlbC1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogJHRvZ2dsZWJ1dHRvbi1sYWJlbC13ZWlnaHQ7XHJcbiAgICAgICAgJi50b2dnbGUtYnV0dG9uLWxhYmVsLWxlZnQge1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OicnO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MzRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OjQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6JHRvZ2dsZWJ1dHRvbi1zaXplO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6JHRvZ2dsZWJ1dHRvbi1zaXplO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAkdG9nZ2xlYnV0dG9uLXBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAvKmJvcmRlci1yYWRpdXMqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAoKCR0b2dnbGVidXR0b24tc2l6ZSkgKSArICR0b2dnbGVidXR0b24tbGFiZWwtcGFkZGluZyArICR0b2dnbGVidXR0b24tbWFyZ2luO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAkdG9nZ2xlYnV0dG9uLWxhYmVsLXBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRvbi1kb3QtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAoJHRvZ2dsZWJ1dHRvbi1zaXplICogMikgKyAoJHRvZ2dsZWJ1dHRvbi1wYWRkaW5nICogMik7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6JHRvZ2dsZWJ1dHRvbi1zaXplICsgKCR0b2dnbGVidXR0b24tcGFkZGluZyAqIDIpO1xyXG4gICAgICAgICAgICAgICAgLypib3JkZXItcmFkaXVzKi9cclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvZ2dsZWJ1dHRvbi1zaXplO1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9nZ2xlYnV0dG9uLXNpemU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9nZ2xlYnV0dG9uLXNpemU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb2ZmLWJnO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAkdG9nZ2xlYnV0dG9uLW1hcmdpbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJG9uLWJvcmRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xlLWJ1dHRvbiBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLnRvZ2dsZS1idXR0b24tbGFiZWwtbGVmdDpiZWZvcmV7XHJcbiAgICAgICAgcmlnaHQ6IDE3cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAwIDAgJG9mZi1kb3QtY29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAudG9nZ2xlLWJ1dHRvbiBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLnRvZ2dsZS1idXR0b24tbGFiZWwtbGVmdDphZnRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkb24tYmc7XHJcbiAgICAgICAgYm9yZGVyOiAkb2ZmLWJvcmRlcjtcclxuICAgIH1cclxuICAgIC50b2dnbGUtYnV0dG9uIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLnRvZ2dsZS1idXR0b24tbGFiZWwtbGVmdHtcclxuICAgICAgICBjb2xvcjogJHRvZ2dsZWJ1dHRvbi1sYWJlbC1hY3RpdmUtY29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR0b2dnbGVidXR0b24tbGFiZWwtYWN0aXZlLXdlaWdodDtcclxuICAgIH1cclxuICAgIC50b2dnbGUtYnV0dG9uIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAudG9nZ2xlLWJ1dHRvbi1sYWJlbC1sZWZ0e1xyXG4gICAgICAgIGNvbG9yOiAkdG9nZ2xlYnV0dG9uLWxhYmVsLWNvbG9yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkdG9nZ2xlYnV0dG9uLWxhYmVsLXdlaWdodDtcclxuICAgIH1cclxuICAgIC50b2dnbGUtYnV0dG9uIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAudG9nZ2xlLWJ1dHRvbi1sYWJlbC1sZWZ0ICsgLnRvZ2dsZS1idXR0b24tbGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICR0b2dnbGVidXR0b24tbGFiZWwtYWN0aXZlLWNvbG9yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkdG9nZ2xlYnV0dG9uLWxhYmVsLWFjdGl2ZS13ZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(globals) {
        this.globals = globals;
        this.showMenu = false;
    }
    HeaderComponent.prototype.toggleMenu = function () {
        if (this.showMenu == true) {
            this.showMenu = false;
        }
        else {
            this.showMenu = true;
        }
    };
    HeaderComponent.prototype.ClickedOut = function (event) {
        // console.log(event.target.className)
        //debugger;
        if (event.target.className === "slide-menu__container active") {
            this.showMenu = false;
        }
    };
    HeaderComponent.prototype.modeToggleSwitch = function (event) {
        if (event.target.checked) {
            this.globals.darkModeActive = true;
        }
        else {
            this.globals.darkModeActive = false;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"main__container\" [ngClass]=\"{'dark': globals.darkModeActive}\">\n    <app-weathercard></app-weathercard>\n    <!-- <add-card></add-card> -->\n\n    <!-- <app-weathercard [WeatherForecastList]=\"weatherForecastData\"></app-weathercard> -->\n</article>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__container {\n  display: block;\n  justify-content: center;\n  background: linear-gradient(#FC7DB8, #495CFC);\n  overflow: auto;\n  transition: background 500ms;\n  -webkit-animation: 1s ease-in-out 0ms 1 fadein;\n          animation: 1s ease-in-out 0ms 1 fadein; }\n  .main__container.dark {\n    background: linear-gradient(to bottom, #711B86, #00057A);\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGJsdWViaXJkXFxEZXNrdG9wXFxhbmd1bGFyNmNydWQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDZDQUE2QztFQUM3QyxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDhDQUFzQztVQUF0QyxzQ0FBc0MsRUFBQTtFQU4xQztJQVFRLHdEQUF3RDtJQUN4RCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZDN0RCOCwgIzQ5NUNGQyk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgNTAwbXM7XHJcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDBtcyAxIGZhZGVpbjtcclxuICAgICYuZGFyayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcxMUI4NiwgIzAwMDU3QSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMWZyKTtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHg7XHJcblxyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAvLyBmbGV4OiAxIDEgMTYwcHg7XHJcblxyXG4gICAgLy8gYXBwLXdlYXRoZXJjYXJkIHtcclxuICAgIC8vICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather/weather.service */ "./src/app/weather/weather.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var HomeComponent = /** @class */ (function () {
    // weatherItems: Weather[];
    function HomeComponent(globals, _weatherService) {
        this.globals = globals;
        this._weatherService = _weatherService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"], _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Login</button>\n    </div><br>\n    <small><a routerLink=\"/register\">Don't have an account? Create one here.</a></small>\n</form>\n\n<!-- <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\"> -->\n    <!-- <div class=\"form-group\">\n        <label>email</label>\n        <input type=\"text\" id=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && email.errors }\">\n        <div *ngIf=\"submitted && email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"email.errors.required\">email is required</div>\n        </div>\n    </div> -->\n    <!-- <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div> -->\n    <!-- <div class=\"form-group\"> -->\n        <!-- <button [disabled]=\"submitted\" class=\"btn btn-primary\">Login</button> -->\n        <!-- <a routerLink=\"/login\" class=\"btn btn-link\">login</a> -->\n    <!-- </div> -->\n    <!-- <small><a href=\"#\" routerLink=\"/login\">Don't have an account? Create one here.</a></small> -->\n<!-- </form> -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");







// import { AlertService } from '../services/alert.service';
// import { AuthService } from '../services/auth.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, authService, userService, alertService, http) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.http = http;
        this.loading = false;
        this.submitted = false;
        this.uri = '/rest';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            var obj = this.loginForm.value;
            this.authService.login(this.f.email.value, this.f.password.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (data) {
                _this.router.navigate(['dashboard']);
            }, function (error) {
                console.log("error: ", error);
            });
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pipes/fahrenheit.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/fahrenheit.pipe.ts ***!
  \******************************************/
/*! exports provided: FahrenheitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FahrenheitPipe", function() { return FahrenheitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FahrenheitPipe = /** @class */ (function () {
    function FahrenheitPipe() {
    }
    FahrenheitPipe.prototype.transform = function (value, args) {
        return ((value * (9 / 5)) + 32).toFixed(2);
    };
    FahrenheitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'fahrenheit'
        })
    ], FahrenheitPipe);
    return FahrenheitPipe;
}());



/***/ }),

/***/ "./src/app/pipes/removeUnderscore.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/removeUnderscore.pipe.ts ***!
  \************************************************/
/*! exports provided: RemoveUnderscorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveUnderscorePipe", function() { return RemoveUnderscorePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemoveUnderscorePipe = /** @class */ (function () {
    function RemoveUnderscorePipe() {
    }
    RemoveUnderscorePipe.prototype.transform = function (value, args) {
        return value.replace(/_/g, " ");
    };
    RemoveUnderscorePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'removeUnderscore'
        })
    ], RemoveUnderscorePipe);
    return RemoveUnderscorePipe;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Confirm Password</label>\n        <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n        <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Register</button>\n    </div><br>\n    <small><a routerLink=\"/login\">Already have an account? Login here.</a></small>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, authService, userService, alertService, http) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.http = http;
        this.submitted = false;
        this.uri = '/rest';
        // redirect to home if already logged in
        // if (this.authService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.passwordMatchValidator('password', 'confirmPassword')
        });
    };
    // custom validator to check that two fields match
    RegisterComponent.prototype.passwordMatchValidator = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var obj = this.registerForm.value;
        this.userService.registerUser(obj)
            // .then(() => res.json({}))
            // .catch(err => next(err));
            .subscribe(function (res) {
            console.log("Response: ", res);
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log("Error: ", err);
        });
        // console.log(obj);
        // this.http.post(`${this.uri}/newUserRegistration`, obj)
        //     .subscribe(res => console.log('Done'));
        // this.router.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert msg on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'succes', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    // private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;
    //
    function AuthService(http) {
        this.http = http;
        this.uri = '/rest';
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }
    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.uri + "/login", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's jwt token in the response
            // if (user && user.id) {
            // store user details
            // }
            return user;
            console.log("User: ", user);
        }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AlertService, AuthService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.uri = '/rest';
    }
    UserService.prototype.getAll = function () {
        // return this.http.get<User[]>(`${config.apiUrl}/users`);
    };
    UserService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.uri + "/newUserRegistration", user, { headers: headers, responseType: 'text' });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/svg-definitions/svg-definitions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/svg-definitions/svg-definitions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  DEFINE ALL SVG ICONS HERE  -->\n<svg\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    viewbox=\"0 0 100 300\"\n\n    xml:space=\"preserve\"\n    preserveAspectRatio=\"none\">\n    <defs>\n        <symbol id=\"cloudy-icon\">\n        <filter id=\"blur\" width=\"200%\" height=\"200%\">\n            <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3\"/>\n            <feOffset dx=\"0\" dy=\"4\" result=\"offsetblur\"/>\n            <feComponentTransfer>\n                <feFuncA type=\"linear\" slope=\"0.05\"/>\n            </feComponentTransfer>\n        <feMerge>\n          <feMergeNode/>\n          <feMergeNode in=\"SourceGraphic\"/>\n        </feMerge>\n        </filter>\n\n        <g filter=\"url(#blur)\" id=\"cloudy\" >\n            <g transform=\"translate(20,10) scale(4,4)\">\n                <g class=\"am-weather-cloud-1\">\n                    <path d=\"M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z\" fill=\"#91C0F8\" stroke=\"white\" stroke-linejoin=\"round\" stroke-width=\"1.2\" transform=\"translate(-10,-8), scale(0.6)\"/>\n                </g>\n                <g class=\"am-weather-cloud-2\">\n                    <path d=\"M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z\" fill=\"#57A0EE\" stroke=\"white\" stroke-linejoin=\"round\" stroke-width=\"1.2\" transform=\"translate(-20,-11)\"/>\n                </g>\n            </g>\n        </g>\n        </symbol>\n    </defs>\n\n</svg>\n\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n      <symbol id=\"home\" viewBox=\"0 0 46.177 46.177\">\n          <path d=\"M23.856,1.451l10.984,10.222l10.984,10.222c0.444,0.429,0.476,1.127,0.063,1.587\n          c-0.222,0.238-0.524,0.349-0.825,0.349v0.016h-5.555V43.91c0,0.619-0.508,1.127-1.127,1.127h-8.746\n          c-0.619,0-1.111-0.508-1.111-1.127V28.482H17.666V43.91c0,0.619-0.508,1.127-1.127,1.127H7.793c-0.619,0-1.111-0.508-1.111-1.127\n          V23.847H1.111C0.492,23.847,0,23.34,0,22.721c0-0.349,0.159-0.667,0.413-0.873l10.936-10.174L22.332,1.435\n          C22.761,1.039,23.427,1.039,23.856,1.451L23.856,1.451z M33.316,13.308L23.094,3.785l-10.222,9.524l-8.904,8.286h3.825\n          c0.619,0,1.127,0.508,1.127,1.127v20.063h6.508V27.371c0-0.619,0.492-1.127,1.111-1.127h13.095c0.619,0,1.127,0.508,1.127,1.127\n          v15.412h6.508V22.721c0-0.619,0.492-1.127,1.111-1.127h3.841L33.316,13.308z\"/>\n      </symbol>\n      <symbol id=\"home_filled\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      </symbol>\n    </defs>\n</svg>\n"

/***/ }),

/***/ "./src/app/svg-definitions/svg-definitions.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/svg-definitions/svg-definitions.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n  margin: auto; }\n\n/*\r\n** CLOUDS\r\n*/\n\n@-webkit-keyframes am-weather-cloud-1 {\n  0% {\n    -webkit-transform: translate(-5px, 0px);\n    transform: translate(-5px, 0px); }\n  50% {\n    -webkit-transform: translate(10px, 0px);\n    transform: translate(10px, 0px); }\n  100% {\n    -webkit-transform: translate(-5px, 0px);\n    transform: translate(-5px, 0px); } }\n\n@keyframes am-weather-cloud-1 {\n  0% {\n    -webkit-transform: translate(-5px, 0px);\n    transform: translate(-5px, 0px); }\n  50% {\n    -webkit-transform: translate(10px, 0px);\n    transform: translate(10px, 0px); }\n  100% {\n    -webkit-transform: translate(-5px, 0px);\n    transform: translate(-5px, 0px); } }\n\n.am-weather-cloud-1 {\n  -webkit-animation-name: am-weather-cloud-1;\n  animation-name: am-weather-cloud-1;\n  -webkit-animation-duration: 7s;\n  animation-duration: 7s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n@-webkit-keyframes am-weather-cloud-2 {\n  0% {\n    -webkit-transform: translate(0px, 0px);\n    transform: translate(0px, 0px); }\n  50% {\n    -webkit-transform: translate(2px, 0px);\n    transform: translate(2px, 0px); }\n  100% {\n    -webkit-transform: translate(0px, 0px);\n    transform: translate(0px, 0px); } }\n\n@keyframes am-weather-cloud-2 {\n  0% {\n    -webkit-transform: translate(0px, 0px);\n    transform: translate(0px, 0px); }\n  50% {\n    -webkit-transform: translate(2px, 0px);\n    transform: translate(2px, 0px); }\n  100% {\n    -webkit-transform: translate(0px, 0px);\n    transform: translate(0px, 0px); } }\n\n.am-weather-cloud-2 {\n  -webkit-animation-name: am-weather-cloud-2;\n  animation-name: am-weather-cloud-2;\n  -webkit-animation-duration: 3s;\n  animation-duration: 3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n/*\r\n** SUN\r\n*/\n\n@-webkit-keyframes am-weather-sun {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes am-weather-sun {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.am-weather-sun {\n  -webkit-animation-name: am-weather-sun;\n  animation-name: am-weather-sun;\n  -webkit-animation-duration: 9s;\n  animation-duration: 9s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n@-webkit-keyframes am-weather-sun-shiny {\n  0% {\n    stroke-dasharray: 3px 10px;\n    stroke-dashoffset: 0px; }\n  50% {\n    stroke-dasharray: 0.1px 10px;\n    stroke-dashoffset: -1px; }\n  100% {\n    stroke-dasharray: 3px 10px;\n    stroke-dashoffset: 0px; } }\n\n@keyframes am-weather-sun-shiny {\n  0% {\n    stroke-dasharray: 3px 10px;\n    stroke-dashoffset: 0px; }\n  50% {\n    stroke-dasharray: 0.1px 10px;\n    stroke-dashoffset: -1px; }\n  100% {\n    stroke-dasharray: 3px 10px;\n    stroke-dashoffset: 0px; } }\n\n.am-weather-sun-shiny line {\n  -webkit-animation-name: am-weather-sun-shiny;\n  animation-name: am-weather-sun-shiny;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n/*\r\n** MOON\r\n*/\n\n@-webkit-keyframes am-weather-moon {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n\n@keyframes am-weather-moon {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n\n.am-weather-moon {\n  -webkit-animation-name: am-weather-moon;\n  animation-name: am-weather-moon;\n  -webkit-animation-duration: 6s;\n  animation-duration: 6s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-transform-origin: 12.5px 15.15px 0;\n  /* TODO FF CENTER ISSUE */\n  /* TODO FF CENTER ISSUE */\n  /* TODO FF CENTER ISSUE */\n  transform-origin: 12.5px 15.15px 0;\n  /* TODO FF CENTER ISSUE */ }\n\n@-webkit-keyframes am-weather-moon-star-1 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes am-weather-moon-star-1 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.am-weather-moon-star-1 {\n  -webkit-animation-name: am-weather-moon-star-1;\n  animation-name: am-weather-moon-star-1;\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n  -webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1; }\n\n@-webkit-keyframes am-weather-moon-star-2 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes am-weather-moon-star-2 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.am-weather-moon-star-2 {\n  -webkit-animation-name: am-weather-moon-star-2;\n  animation-name: am-weather-moon-star-2;\n  -webkit-animation-delay: 5s;\n  animation-delay: 5s;\n  -webkit-animation-duration: 4s;\n  animation-duration: 4s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1; }\n\n/*\r\n** RAIN\r\n*/\n\n@-webkit-keyframes am-weather-rain {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: -100; } }\n\n@keyframes am-weather-rain {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: -100; } }\n\n.am-weather-rain-1 {\n  -webkit-animation-name: am-weather-rain;\n  animation-name: am-weather-rain;\n  -webkit-animation-duration: 8s;\n  animation-duration: 8s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.am-weather-rain-2 {\n  -webkit-animation-name: am-weather-rain;\n  animation-name: am-weather-rain;\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s;\n  -webkit-animation-duration: 8s;\n  animation-duration: 8s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n/*\r\n** SNOW\r\n*/\n\n@-webkit-keyframes am-weather-snow {\n  0% {\n    -webkit-transform: translateX(0) translateY(0);\n    transform: translateX(0) translateY(0); }\n  33.33% {\n    -webkit-transform: translateX(-1.2px) translateY(2px);\n    transform: translateX(-1.2px) translateY(2px); }\n  66.66% {\n    -webkit-transform: translateX(1.4px) translateY(4px);\n    transform: translateX(1.4px) translateY(4px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(-1.6px) translateY(6px);\n    transform: translateX(-1.6px) translateY(6px);\n    opacity: 0; } }\n\n@keyframes am-weather-snow {\n  0% {\n    -webkit-transform: translateX(0) translateY(0);\n    transform: translateX(0) translateY(0); }\n  33.33% {\n    -webkit-transform: translateX(-1.2px) translateY(2px);\n    transform: translateX(-1.2px) translateY(2px); }\n  66.66% {\n    -webkit-transform: translateX(1.4px) translateY(4px);\n    transform: translateX(1.4px) translateY(4px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(-1.6px) translateY(6px);\n    transform: translateX(-1.6px) translateY(6px);\n    opacity: 0; } }\n\n@-webkit-keyframes am-weather-snow-reverse {\n  0% {\n    -webkit-transform: translateX(0) translateY(0);\n    transform: translateX(0) translateY(0); }\n  33.33% {\n    -webkit-transform: translateX(1.2px) translateY(2px);\n    transform: translateX(1.2px) translateY(2px); }\n  66.66% {\n    -webkit-transform: translateX(-1.4px) translateY(4px);\n    transform: translateX(-1.4px) translateY(4px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(1.6px) translateY(6px);\n    transform: translateX(1.6px) translateY(6px);\n    opacity: 0; } }\n\n@keyframes am-weather-snow-reverse {\n  0% {\n    -webkit-transform: translateX(0) translateY(0);\n    transform: translateX(0) translateY(0); }\n  33.33% {\n    -webkit-transform: translateX(1.2px) translateY(2px);\n    transform: translateX(1.2px) translateY(2px); }\n  66.66% {\n    -webkit-transform: translateX(-1.4px) translateY(4px);\n    transform: translateX(-1.4px) translateY(4px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(1.6px) translateY(6px);\n    transform: translateX(1.6px) translateY(6px);\n    opacity: 0; } }\n\n.am-weather-snow-1 {\n  -webkit-animation-name: am-weather-snow;\n  animation-name: am-weather-snow;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.am-weather-snow-2 {\n  -webkit-animation-name: am-weather-snow;\n  animation-name: am-weather-snow;\n  -webkit-animation-delay: 1.2s;\n  animation-delay: 1.2s;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.am-weather-snow-3 {\n  -webkit-animation-name: am-weather-snow-reverse;\n  animation-name: am-weather-snow-reverse;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n/*\r\n** EASING\r\n*/\n\n.am-weather-easing-ease-in-out {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ZnLWRlZmluaXRpb25zL0M6XFxVc2Vyc1xcYmx1ZWJpcmRcXERlc2t0b3BcXGFuZ3VsYXI2Y3J1ZC9zcmNcXGFwcFxcc3ZnLWRlZmluaXRpb25zXFxzdmctZGVmaW5pdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N2Zy1kZWZpbml0aW9ucy9zdmctZGVmaW5pdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBRWhCOztDQ0VDOztBRENEO0VBQ0U7SUFDRSx1Q0FBc0M7SUFHOUIsK0JBQThCLEVBQUE7RUFHeEM7SUFDRSx1Q0FBc0M7SUFHOUIsK0JBQThCLEVBQUE7RUFHeEM7SUFDRSx1Q0FBc0M7SUFHOUIsK0JBQThCLEVBQUEsRUFBQTs7QUFuQjFDO0VBQ0U7SUFDRSx1Q0FBc0M7SUFHOUIsK0JBQThCLEVBQUE7RUFHeEM7SUFDRSx1Q0FBc0M7SUFHOUIsK0JBQThCLEVBQUE7RUFHeEM7SUFDRSx1Q0FBc0M7SUFHOUIsK0JBQThCLEVBQUEsRUFBQTs7QUFJMUM7RUFDRSwwQ0FBMEM7RUFFbEMsa0NBQWtDO0VBQzFDLDhCQUE4QjtFQUV0QixzQkFBc0I7RUFDOUIseUNBQXlDO0VBRWpDLGlDQUFpQztFQUN6QywyQ0FBMkM7RUFFbkMsbUNBQW1DLEVBQUE7O0FBRzdDO0VBQ0U7SUFDRSxzQ0FBcUM7SUFHN0IsOEJBQTZCLEVBQUE7RUFHdkM7SUFDRSxzQ0FBcUM7SUFHN0IsOEJBQTZCLEVBQUE7RUFHdkM7SUFDRSxzQ0FBcUM7SUFHN0IsOEJBQTZCLEVBQUEsRUFBQTs7QUFuQnpDO0VBQ0U7SUFDRSxzQ0FBcUM7SUFHN0IsOEJBQTZCLEVBQUE7RUFHdkM7SUFDRSxzQ0FBcUM7SUFHN0IsOEJBQTZCLEVBQUE7RUFHdkM7SUFDRSxzQ0FBcUM7SUFHN0IsOEJBQTZCLEVBQUEsRUFBQTs7QUFJekM7RUFDRSwwQ0FBMEM7RUFFbEMsa0NBQWtDO0VBQzFDLDhCQUE4QjtFQUV0QixzQkFBc0I7RUFDOUIseUNBQXlDO0VBRWpDLGlDQUFpQztFQUN6QywyQ0FBMkM7RUFFbkMsbUNBQW1DLEVBQUE7O0FBRzdDOztDQ1pDOztBRGVEO0VBQ0U7SUFDRSwrQkFBK0I7SUFHdkIsdUJBQXVCLEVBQUE7RUFHakM7SUFDRSxpQ0FBaUM7SUFHekIseUJBQXlCLEVBQUEsRUFBQTs7QUFackM7RUFDRTtJQUNFLCtCQUErQjtJQUd2Qix1QkFBdUIsRUFBQTtFQUdqQztJQUNFLGlDQUFpQztJQUd6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUlyQztFQUNFLHNDQUFzQztFQUc5Qiw4QkFBOEI7RUFDdEMsOEJBQThCO0VBR3RCLHNCQUFzQjtFQUM5Qix5Q0FBeUM7RUFHakMsaUNBQWlDO0VBQ3pDLDJDQUEyQztFQUduQyxtQ0FBbUMsRUFBQTs7QUFHN0M7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLDRCQUE0QjtJQUM1Qix1QkFBdUIsRUFBQTtFQUd6QjtJQUNFLDBCQUEwQjtJQUMxQixzQkFBc0IsRUFBQSxFQUFBOztBQWIxQjtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLHNCQUFzQixFQUFBO0VBR3hCO0lBQ0UsNEJBQTRCO0lBQzVCLHVCQUF1QixFQUFBO0VBR3pCO0lBQ0UsMEJBQTBCO0lBQzFCLHNCQUFzQixFQUFBLEVBQUE7O0FBSTFCO0VBQ0UsNENBQTRDO0VBR3BDLG9DQUFvQztFQUM1Qyw4QkFBOEI7RUFHdEIsc0JBQXNCO0VBQzlCLHlDQUF5QztFQUdqQyxpQ0FBaUM7RUFDekMsMkNBQTJDO0VBR25DLG1DQUFtQyxFQUFBOztBQU03Qzs7Q0MzQkM7O0FEOEJEO0VBQ0U7SUFDRSwrQkFBK0I7SUFHdkIsdUJBQXVCLEVBQUE7RUFHakM7SUFDRSxnQ0FBZ0M7SUFHeEIsd0JBQXdCLEVBQUE7RUFHbEM7SUFDRSwrQkFBK0I7SUFHdkIsdUJBQXVCLEVBQUEsRUFBQTs7QUFuQm5DO0VBQ0U7SUFDRSwrQkFBK0I7SUFHdkIsdUJBQXVCLEVBQUE7RUFHakM7SUFDRSxnQ0FBZ0M7SUFHeEIsd0JBQXdCLEVBQUE7RUFHbEM7SUFDRSwrQkFBK0I7SUFHdkIsdUJBQXVCLEVBQUEsRUFBQTs7QUFJbkM7RUFDRSx1Q0FBdUM7RUFHL0IsK0JBQStCO0VBQ3ZDLDhCQUE4QjtFQUd0QixzQkFBc0I7RUFDOUIseUNBQXlDO0VBR2pDLGlDQUFpQztFQUN6QywyQ0FBMkM7RUFHbkMsbUNBQW1DO0VBQzNDLDBDQUEwQztFQUFFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNwQyxrQ0FBa0M7RUFBRSx5QkFBQSxFQUEwQjs7QUFHeEU7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRSw4Q0FBOEM7RUFHdEMsc0NBQXNDO0VBQzlDLDJCQUEyQjtFQUduQixtQkFBbUI7RUFDM0IsOEJBQThCO0VBR3RCLHNCQUFzQjtFQUM5Qix5Q0FBeUM7RUFHakMsaUNBQWlDO0VBQ3pDLG9DQUFvQztFQUc1Qiw0QkFBNEIsRUFBQTs7QUFHdEM7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRSw4Q0FBOEM7RUFHdEMsc0NBQXNDO0VBQzlDLDJCQUEyQjtFQUduQixtQkFBbUI7RUFDM0IsOEJBQThCO0VBR3RCLHNCQUFzQjtFQUM5Qix5Q0FBeUM7RUFHakMsaUNBQWlDO0VBQ3pDLG9DQUFvQztFQUc1Qiw0QkFBNEIsRUFBQTs7QUFHdEM7O0NDeENDOztBRDJDRDtFQUNFO0lBQ0Usb0JBQW9CLEVBQUE7RUFHdEI7SUFDRSx1QkFBdUIsRUFBQSxFQUFBOztBQU4zQjtFQUNFO0lBQ0Usb0JBQW9CLEVBQUE7RUFHdEI7SUFDRSx1QkFBdUIsRUFBQSxFQUFBOztBQUkzQjtFQUNFLHVDQUF1QztFQUcvQiwrQkFBK0I7RUFDdkMsOEJBQThCO0VBR3RCLHNCQUFzQjtFQUM5Qix5Q0FBeUM7RUFHakMsaUNBQWlDO0VBQ3pDLDJDQUEyQztFQUduQyxtQ0FBbUMsRUFBQTs7QUFHN0M7RUFDRSx1Q0FBdUM7RUFHL0IsK0JBQStCO0VBQ3ZDLDhCQUE4QjtFQUd0QixzQkFBc0I7RUFDOUIsOEJBQThCO0VBR3RCLHNCQUFzQjtFQUM5Qix5Q0FBeUM7RUFHakMsaUNBQWlDO0VBQ3pDLDJDQUEyQztFQUduQyxtQ0FBbUMsRUFBQTs7QUFJN0M7O0NDL0NDOztBRGtERDtFQUNFO0lBQ0UsOENBQThDO0lBR3RDLHNDQUFzQyxFQUFBO0VBR2hEO0lBQ0UscURBQXFEO0lBRzdDLDZDQUE2QyxFQUFBO0VBR3ZEO0lBQ0Usb0RBQW9EO0lBRzVDLDRDQUE0QztJQUNwRCxVQUFVLEVBQUE7RUFHWjtJQUNFLHFEQUFxRDtJQUc3Qyw2Q0FBNkM7SUFDckQsVUFBVSxFQUFBLEVBQUE7O0FBNUJkO0VBQ0U7SUFDRSw4Q0FBOEM7SUFHdEMsc0NBQXNDLEVBQUE7RUFHaEQ7SUFDRSxxREFBcUQ7SUFHN0MsNkNBQTZDLEVBQUE7RUFHdkQ7SUFDRSxvREFBb0Q7SUFHNUMsNENBQTRDO0lBQ3BELFVBQVUsRUFBQTtFQUdaO0lBQ0UscURBQXFEO0lBRzdDLDZDQUE2QztJQUNyRCxVQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsOENBQThDO0lBR3RDLHNDQUFzQyxFQUFBO0VBR2hEO0lBQ0Usb0RBQW9EO0lBRzVDLDRDQUE0QyxFQUFBO0VBR3REO0lBQ0UscURBQXFEO0lBRzdDLDZDQUE2QztJQUNyRCxVQUFVLEVBQUE7RUFHWjtJQUNFLG9EQUFvRDtJQUc1Qyw0Q0FBNEM7SUFDcEQsVUFBVSxFQUFBLEVBQUE7O0FBNUJkO0VBQ0U7SUFDRSw4Q0FBOEM7SUFHdEMsc0NBQXNDLEVBQUE7RUFHaEQ7SUFDRSxvREFBb0Q7SUFHNUMsNENBQTRDLEVBQUE7RUFHdEQ7SUFDRSxxREFBcUQ7SUFHN0MsNkNBQTZDO0lBQ3JELFVBQVUsRUFBQTtFQUdaO0lBQ0Usb0RBQW9EO0lBRzVDLDRDQUE0QztJQUNwRCxVQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFLHVDQUF1QztFQUcvQiwrQkFBK0I7RUFDdkMsOEJBQThCO0VBR3RCLHNCQUFzQjtFQUM5Qix5Q0FBeUM7RUFHakMsaUNBQWlDO0VBQ3pDLDJDQUEyQztFQUduQyxtQ0FBbUMsRUFBQTs7QUFHN0M7RUFDRSx1Q0FBdUM7RUFHL0IsK0JBQStCO0VBQ3ZDLDZCQUE2QjtFQUdyQixxQkFBcUI7RUFDN0IsOEJBQThCO0VBR3RCLHNCQUFzQjtFQUM5Qix5Q0FBeUM7RUFHakMsaUNBQWlDO0VBQ3pDLDJDQUEyQztFQUduQyxtQ0FBbUMsRUFBQTs7QUFHN0M7RUFDRSwrQ0FBK0M7RUFHdkMsdUNBQXVDO0VBQy9DLDhCQUE4QjtFQUd0QixzQkFBc0I7RUFDOUIseUNBQXlDO0VBR2pDLGlDQUFpQztFQUN6QywyQ0FBMkM7RUFHbkMsbUNBQW1DLEVBQUE7O0FBRzdDOztDQ2xFQzs7QURxRUQ7RUFDRSw4Q0FBOEM7RUFHdEMsc0NBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdmctZGVmaW5pdGlvbnMvc3ZnLWRlZmluaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLypcclxuKiogQ0xPVURTXHJcbiovXHJcbkBrZXlmcmFtZXMgYW0td2VhdGhlci1jbG91ZC0xIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsMHB4KTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsMHB4KTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsMHB4KTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsMHB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LDBweCk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYW0td2VhdGhlci1jbG91ZC0xIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTE7XHJcbiAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XHJcbiAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDdzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsMHB4KTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsMHB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5hbS13ZWF0aGVyLWNsb3VkLTIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMjtcclxuICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7XHJcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0yO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4vKlxyXG4qKiBTVU5cclxuKi9cclxuQGtleWZyYW1lcyBhbS13ZWF0aGVyLXN1biB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmFtLXdlYXRoZXItc3VuIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bjtcclxuICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bjtcclxuICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bjtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOXM7XHJcbiAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDlzO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA5cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbS13ZWF0aGVyLXN1bi1zaGlueSB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogM3B4IDEwcHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAuMXB4IDEwcHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTFweDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogM3B4IDEwcHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFtLXdlYXRoZXItc3VuLXNoaW55IGxpbmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuLXNoaW55O1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuLXNoaW55O1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuLXNoaW55O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuLXNoaW55O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG4qKiBNT09OXHJcbiovXHJcbkBrZXlmcmFtZXMgYW0td2VhdGhlci1tb29uIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmFtLXdlYXRoZXItbW9vbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbjtcclxuICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb247XHJcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcclxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDZzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTIuNXB4IDE1LjE1cHggMDsgLyogVE9ETyBGRiBDRU5URVIgSVNTVUUgKi9cclxuICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEyLjVweCAxNS4xNXB4IDA7IC8qIFRPRE8gRkYgQ0VOVEVSIElTU1VFICovXHJcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMi41cHggMTUuMTVweCAwOyAvKiBUT0RPIEZGIENFTlRFUiBJU1NVRSAqL1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTIuNXB4IDE1LjE1cHggMDsgLyogVE9ETyBGRiBDRU5URVIgSVNTVUUgKi9cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbS13ZWF0aGVyLW1vb24tc3Rhci0xIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmFtLXdlYXRoZXItbW9vbi1zdGFyLTEge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7XHJcbiAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uLXN0YXItMTtcclxuICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb24tc3Rhci0xO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICAgICAgLW1zLWFuaW1hdGlvbi1kZWxheTogM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW0td2VhdGhlci1tb29uLXN0YXItMiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5hbS13ZWF0aGVyLW1vb24tc3Rhci0yIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb24tc3Rhci0yO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTI7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uLXN0YXItMjtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb24tc3Rhci0yO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogNXM7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcblxyXG4vKlxyXG4qKiBSQUlOXHJcbiovXHJcbkBrZXlmcmFtZXMgYW0td2VhdGhlci1yYWluIHtcclxuICAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYW0td2VhdGhlci1yYWluLTEge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjtcclxuICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47XHJcbiAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDhzO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLmFtLXdlYXRoZXItcmFpbi0yIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47XHJcbiAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMjVzO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcclxuICAgICAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC4yNXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDhzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuLypcclxuKiogU05PV1xyXG4qL1xyXG5Aa2V5ZnJhbWVzIGFtLXdlYXRoZXItc25vdyB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIDMzLjMzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjJweCkgdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuMnB4KSB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTtcclxuICB9XHJcblxyXG4gIDY2LjY2JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjRweCkgdHJhbnNsYXRlWSg0cHgpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS40cHgpIHRyYW5zbGF0ZVkoNHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHB4KSB0cmFuc2xhdGVZKDRweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjRweCkgdHJhbnNsYXRlWSg0cHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNnB4KSB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjZweCkgdHJhbnNsYXRlWSg2cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNnB4KSB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbS13ZWF0aGVyLXNub3ctcmV2ZXJzZSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIDMzLjMzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjJweCkgdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuMnB4KSB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjJweCkgdHJhbnNsYXRlWSgycHgpO1xyXG4gIH1cclxuXHJcbiAgNjYuNjYlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjRweCkgdHJhbnNsYXRlWSg0cHgpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNHB4KSB0cmFuc2xhdGVZKDRweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS40cHgpIHRyYW5zbGF0ZVkoNHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjRweCkgdHJhbnNsYXRlWSg0cHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcclxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNnB4KSB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjZweCkgdHJhbnNsYXRlWSg2cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYW0td2VhdGhlci1zbm93LTEge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdztcclxuICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXNub3c7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLmFtLXdlYXRoZXItc25vdy0yIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXNub3c7XHJcbiAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93O1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdztcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXNub3c7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5hbS13ZWF0aGVyLXNub3ctMyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93LXJldmVyc2U7XHJcbiAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93LXJldmVyc2U7XHJcbiAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93LXJldmVyc2U7XHJcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93LXJldmVyc2U7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi8qXHJcbioqIEVBU0lOR1xyXG4qL1xyXG4uYW0td2VhdGhlci1lYXNpbmctZWFzZS1pbi1vdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbn1cclxuIiwic3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4vKlxyXG4qKiBDTE9VRFNcclxuKi9cbkBrZXlmcmFtZXMgYW0td2VhdGhlci1jbG91ZC0xIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTsgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7IH0gfVxuXG4uYW0td2VhdGhlci1jbG91ZC0xIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xO1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTE7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDdzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDdzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IH1cblxuQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsgfSB9XG5cbi5hbS13ZWF0aGVyLWNsb3VkLTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMjtcbiAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgfVxuXG4vKlxyXG4qKiBTVU5cclxuKi9cbkBrZXlmcmFtZXMgYW0td2VhdGhlci1zdW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG4uYW0td2VhdGhlci1zdW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW47XG4gIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW47XG4gIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDlzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogOXM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDlzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDlzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgfVxuXG5Aa2V5ZnJhbWVzIGFtLXdlYXRoZXItc3VuLXNoaW55IHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDNweCAxMHB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7IH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwLjFweCAxMHB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMXB4OyB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDNweCAxMHB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7IH0gfVxuXG4uYW0td2VhdGhlci1zdW4tc2hpbnkgbGluZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuLXNoaW55O1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bi1zaGlueTtcbiAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bi1zaGlueTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuLXNoaW55O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyB9XG5cbi8qXHJcbioqIE1PT05cclxuKi9cbkBrZXlmcmFtZXMgYW0td2VhdGhlci1tb29uIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IH1cblxuLmFtLXdlYXRoZXItbW9vbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uO1xuICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDZzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDZzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMi41cHggMTUuMTVweCAwO1xuICAvKiBUT0RPIEZGIENFTlRFUiBJU1NVRSAqL1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEyLjVweCAxNS4xNXB4IDA7XG4gIC8qIFRPRE8gRkYgQ0VOVEVSIElTU1VFICovXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMi41cHggMTUuMTVweCAwO1xuICAvKiBUT0RPIEZGIENFTlRFUiBJU1NVRSAqL1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMi41cHggMTUuMTVweCAwO1xuICAvKiBUT0RPIEZGIENFTlRFUiBJU1NVRSAqLyB9XG5cbkBrZXlmcmFtZXMgYW0td2VhdGhlci1tb29uLXN0YXItMSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uYW0td2VhdGhlci1tb29uLXN0YXItMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7XG4gIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uLXN0YXItMTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDNzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyB9XG5cbkBrZXlmcmFtZXMgYW0td2VhdGhlci1tb29uLXN0YXItMiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uYW0td2VhdGhlci1tb29uLXN0YXItMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTI7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTI7XG4gIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uLXN0YXItMjtcbiAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDVzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiA1cztcbiAgYW5pbWF0aW9uLWRlbGF5OiA1cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDRzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDRzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyB9XG5cbi8qXHJcbioqIFJBSU5cclxuKi9cbkBrZXlmcmFtZXMgYW0td2VhdGhlci1yYWluIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwOyB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwOyB9IH1cblxuLmFtLXdlYXRoZXItcmFpbi0xIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluO1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47XG4gIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluO1xuICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcbiAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyB9XG5cbi5hbS13ZWF0aGVyLXJhaW4tMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluO1xuICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMjVzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuMjVzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcbiAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyB9XG5cbi8qXHJcbioqIFNOT1dcclxuKi9cbkBrZXlmcmFtZXMgYW0td2VhdGhlci1zbm93IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7IH1cbiAgMzMuMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjJweCkgdHJhbnNsYXRlWSgycHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTsgfVxuICA2Ni42NiUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHB4KSB0cmFuc2xhdGVZKDRweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS40cHgpIHRyYW5zbGF0ZVkoNHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHB4KSB0cmFuc2xhdGVZKDRweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHB4KSB0cmFuc2xhdGVZKDRweCk7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjZweCkgdHJhbnNsYXRlWSg2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuQGtleWZyYW1lcyBhbS13ZWF0aGVyLXNub3ctcmV2ZXJzZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApOyB9XG4gIDMzLjMzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjJweCkgdHJhbnNsYXRlWSgycHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTsgfVxuICA2Ni42NiUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjRweCkgdHJhbnNsYXRlWSg0cHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjRweCkgdHJhbnNsYXRlWSg0cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNHB4KSB0cmFuc2xhdGVZKDRweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjRweCkgdHJhbnNsYXRlWSg0cHgpO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjZweCkgdHJhbnNsYXRlWSg2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuLmFtLXdlYXRoZXItc25vdy0xIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93O1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXNub3c7XG4gIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93O1xuICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyB9XG5cbi5hbS13ZWF0aGVyLXNub3ctMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdztcbiAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93O1xuICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdztcbiAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdztcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IH1cblxuLmFtLXdlYXRoZXItc25vdy0zIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93LXJldmVyc2U7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdy1yZXZlcnNlO1xuICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdy1yZXZlcnNlO1xuICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93LXJldmVyc2U7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IH1cblxuLypcclxuKiogRUFTSU5HXHJcbiovXG4uYW0td2VhdGhlci1lYXNpbmctZWFzZS1pbi1vdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/svg-definitions/svg-definitions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/svg-definitions/svg-definitions.component.ts ***!
  \**************************************************************/
/*! exports provided: SvgDefinitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgDefinitionsComponent", function() { return SvgDefinitionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SvgDefinitionsComponent = /** @class */ (function () {
    function SvgDefinitionsComponent() {
    }
    SvgDefinitionsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SvgDefinitionsComponent.prototype, "absUrl", {
        get: function () {
            return window.location.href;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SvgDefinitionsComponent.prototype, "name", void 0);
    SvgDefinitionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-svg-definitions',
            template: __webpack_require__(/*! ./svg-definitions.component.html */ "./src/app/svg-definitions/svg-definitions.component.html"),
            styles: [__webpack_require__(/*! ./svg-definitions.component.scss */ "./src/app/svg-definitions/svg-definitions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SvgDefinitionsComponent);
    return SvgDefinitionsComponent;
}());



/***/ }),

/***/ "./src/app/svg/svg.component.html":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HOST ALL SVG ICONS HERE -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" >\n    <use [attr.xlink:href]=\"absUrl + '#' + name\"></use>\n</svg>\n"

/***/ }),

/***/ "./src/app/svg/svg.component.scss":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ZnL0M6XFxVc2Vyc1xcYmx1ZWJpcmRcXERlc2t0b3BcXGFuZ3VsYXI2Y3J1ZC9zcmNcXGFwcFxcc3ZnXFxzdmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3ZnL3N2Zy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/svg/svg.component.ts":
/*!**************************************!*\
  !*** ./src/app/svg/svg.component.ts ***!
  \**************************************/
/*! exports provided: SvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgComponent", function() { return SvgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SvgComponent = /** @class */ (function () {
    function SvgComponent() {
    }
    SvgComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SvgComponent.prototype, "absUrl", {
        get: function () {
            return window.location.href;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SvgComponent.prototype, "name", void 0);
    SvgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'svg-icon',
            template: __webpack_require__(/*! ./svg.component.html */ "./src/app/svg/svg.component.html"),
            styles: [__webpack_require__(/*! ./svg.component.scss */ "./src/app/svg/svg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SvgComponent);
    return SvgComponent;
}());



/***/ }),

/***/ "./src/app/weather/details/weather-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/weather/details/weather-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-page__wrapper\" [ngClass]=\"{'dark': globals.darkModeActive}\">\n    <!-- <svg class=\"background-gradient__circle\" [ngClass]=\"{'dark': globals.darkModeActive}\" viewBox=\"4572 73 1328 1328\">\n        <defs>\n            <linearGradient id=\"ddd\" x2=\"0\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n                <stop offset=\"0\" stop-color=\"#ff8b8b\"/>\n                <stop offset=\"1\" stop-color=\"#6676ff\"/>\n            </linearGradient>\n        </defs>\n        <circle cx=\"664\" cy=\"664\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4572 73)\"/>\n    </svg> -->\n\n  <!-- <svg class=\"back__button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\">\n    <defs>\n      <style>.a {\n        fill: #2b244d;\n      }\n      .b {\n        fill: rgba(0, 0, 0, 0);\n      }\n      .b, .c {\n        stroke: #fff;\n        stroke-width: 2px;\n      }\n      .c {\n        fill: none;\n      }\n      .d {\n        fill: #fff;\n        font-size: 15px;\n        font-family: SegoeUI, Segoe UI;\n        letter-spacing: 0.4em;\n      }</style>\n    </defs>\n    <g transform=\"translate(3980)\">\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"/>\n      <line class=\"b\" x1=\"80\" transform=\"translate(123.5 190.5)\"/>\n      <line class=\"b\" y1=\"26\" x2=\"26\" transform=\"translate(123.5 164.5)\"/>\n      <line class=\"c\" x1=\"26\" y1=\"27\" transform=\"translate(123.5 190.5)\"/>\n      <text class=\"d\" transform=\"translate(117 274)\">\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\n      </text>\n    </g>\n  </svg> -->\n\n    <section class=\"main-weather__card\" [ngClass]=\"{'dark': globals.darkModeActive}\">\n        <div class=\"card-header__container\" > <!-- [ngSwitch]=\"true\" -->\n            <div class=\"header-content__wrapper\">\n                <div class=\"city-name__container\">\n                    <span class=\"city-name__text\">{{city}}</span>\n                </div>\n                <div class=\"temp-state__container\">\n                    <p class=\"temperature__text\">{{forecast[0].highTemperature | fahrenheit}}°<span>F</span></p>\n                </div>\n                <div class=\"hum-wind__container\">\n                    <div class=\"hum__container\">\n                        <span class=\"hum__text\">humidity</span>\n                        <span class=\"hum-value__text\">{{forecast[0].humidity}}%</span>\n                    </div>\n\n                    <div class=\"hum-wind__separator\">&nbsp;</div>\n\n                    <div class=\"wind__container\">\n                        <span class=\"wind__text\">wind</span>\n                        <span class=\"wind-value__text\">{{forecast[0].windSpeed}}K/M</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"body-content__wrapper\">\n            <section class=\"forecast__container\">\n                <div class=\"day-weather__container\" *ngFor=\"let weather of forecast; let i = index;\">\n                    <div class=\"day-weather\" *ngIf=\"i<5\">\n                        <p class=\"day-name__text\" [ngClass]=\"{'dark': globals.darkModeActive}\">{{weather.weekday | slice:0:3 }}</p>\n                        <img class=\"day-icon forecast-condition__icon\" src=\"{{weather.iconLink}}\" alt=\"\">\n                        <p class=\"day-temp__text\" [ngClass]=\"{'dark': globals.darkModeActive}\">{{weather.highTemperature | fahrenheit}}°F</p>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/details/weather-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/weather/details/weather-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-page__wrapper {\n  background: linear-gradient(#FC7DB8, #495CFC);\n  width: 100%;\n  height: 100vh;\n  padding: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .details-page__wrapper.dark {\n    background: linear-gradient(#711B86, #00057A); }\n  .main-weather__card {\n  position: relative;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n  /** CARD HEADER  **/\n  .card-header__container {\n  color: white;\n  width: 100%;\n  padding: 50px 0 15px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  font-weight: 200; }\n  .header-content__wrapper {\n  text-align: center;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n  .city-name__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 3%; }\n  .city-name__container .city-name__underline {\n    background: transparent;\n    border-radius: 5px;\n    height: 5px;\n    box-shadow: 0 3rem 0 0 #ffffff; }\n  .city-name__container .city-name__text {\n    text-transform: uppercase;\n    letter-spacing: 0.3rem;\n    font-size: 1.35rem; }\n  .temp-state__container {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .temp-state__container .temperature__text {\n    font-size: 3rem; }\n  .hum-wind__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem; }\n  .hum-wind__container .hum__container, .hum-wind__container .wind__container {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center; }\n  .hum-wind__container .hum__text, .hum-wind__container .wind__text {\n    text-transform: uppercase;\n    letter-spacing: 0.2rem;\n    font-size: 0.8rem;\n    margin-bottom: 0.5rem; }\n  .hum-wind__container .hum-wind__separator {\n    margin: 0 0.5rem;\n    width: 2px;\n    height: 2.5rem;\n    background-color: white; }\n  /****** body ******/\n  .body-content__wrapper {\n  position: relative;\n  box-shadow: 0 0 80px rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  width: 100%;\n  margin-top: 10px; }\n  .body-content__wrapper .forecast__container {\n    display: flex;\n    justify-content: space-between; }\n  .body-content__wrapper .forecast__container .day-weather__container {\n      display: block;\n      text-align: center;\n      font-size: 13px;\n      margin-top: 4px; }\n  .body-content__wrapper .forecast__container .day-weather__container .day-weather {\n        padding: 2rem 1.5rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n  .body-content__wrapper .forecast__container .day-weather__container .day-weather .day-name__text {\n          font-size: 1rem;\n          color: #39437a;\n          margin-bottom: 0.5rem;\n          text-transform: uppercase; }\n  .body-content__wrapper .forecast__container .day-weather__container .day-weather .day-name__text.dark {\n            color: white; }\n  .body-content__wrapper .forecast__container .day-weather__container .day-weather .forecast-condition__icon {\n          height: 4rem; }\n  .body-content__wrapper .forecast__container .day-weather__container .day-weather .day-temp__text {\n          color: #0c1066;\n          letter-spacing: 0.10rem;\n          margin: 0.75rem 0;\n          text-align: center;\n          padding-left: 0.35rem; }\n  .body-content__wrapper .forecast__container .day-weather__container .day-weather .day-temp__text.dark {\n            color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9kZXRhaWxzL0M6XFxVc2Vyc1xcYmx1ZWJpcmRcXERlc2t0b3BcXGFuZ3VsYXI2Y3J1ZC9zcmNcXGFwcFxcd2VhdGhlclxcZGV0YWlsc1xcd2VhdGhlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkNBQTZDO0VBRTdDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUlmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFYM0I7SUFhUSw2Q0FBNkMsRUFBQTtFQUdyRDtFQWVJLGtCQUFrQjtFQUNsQixjQUFjO0VBRWQsYUFBYTtFQUNiLHNCQUFzQjtFQUV0Qix1QkFBdUIsRUFBQTtFQUszQixtQkFBQTtFQUNBO0VBR0ksWUFBWTtFQUNaLFdBQVc7RUFFWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBUXBCO0VBRUksa0JBQWtCO0VBS2xCLE1BQU07RUFJTixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBRWhCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7RUFKdEI7SUFNUSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw4QkFBOEIsRUFBQTtFQVR0QztJQVlRLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7RUFJMUI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0VBSHZCO0lBTVEsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7RUFKcEI7SUFNUSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtFQVQzQjtJQVlRLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHFCQUFxQixFQUFBO0VBZjdCO0lBa0JRLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QixFQUFBO0VBRy9CLG1CQUFBO0VBQ0E7RUFFSSxrQkFBa0I7RUFFbEIsdUNBQStCO0VBQy9CLGFBQWE7RUFHYixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFUcEI7SUFhUSxhQUFhO0lBQ2IsOEJBQThCLEVBQUE7RUFkdEM7TUFnQlksY0FBYztNQUNkLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBbkIzQjtRQXFCZ0Isb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQixFQUFBO0VBekJuQztVQTJCb0IsZUFBZTtVQUNmLGNBQWM7VUFDZCxxQkFBcUI7VUFDckIseUJBQXlCLEVBQUE7RUE5QjdDO1lBK0I0QixZQUFZLEVBQUE7RUEvQnhDO1VBbUNvQixZQUFZLEVBQUE7RUFuQ2hDO1VBc0NvQixjQUFjO1VBQ2QsdUJBQXVCO1VBQ3ZCLGlCQUFpQjtVQUNqQixrQkFBa0I7VUFDbEIscUJBQXFCLEVBQUE7RUExQ3pDO1lBMkM0QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyL2RldGFpbHMvd2VhdGhlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtcGFnZV9fd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZDN0RCOCwgIzQ5NUNGQyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJi5kYXJrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzcxMUI4NiwgIzAwMDU3QSk7XHJcbiAgICB9XHJcbn1cclxuLm1haW4td2VhdGhlcl9fY2FyZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGhlaWdodDogNzUlO1xyXG4gICAgLy8gd2lkdGg6IDY1JTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAvLyAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAvLyB6LWluZGV4OiAzO1xyXG4gICAgLy8gZGlzcGxheTogZ3JpZDtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxLjI1ZnI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJi5kYXJrIHtcclxuXHJcbiAgICB9XHJcbn1cclxuLyoqIENBUkQgSEVBREVSICAqKi9cclxuLmNhcmQtaGVhZGVyX19jb250YWluZXIge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeSwgMC42KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiA0NTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMCAxNXB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDIwcmVtO1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gei1pbmRleDogMTtcclxuXHJcbiAgICAmLmRhcmsge31cclxufVxyXG4uaGVhZGVyLWNvbnRlbnRfX3dyYXBwZXIge1xyXG4gICAgLy8gaGVpZ2h0OiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBsZWZ0OiAzMCU7XHJcbiAgICAvLyAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAvLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIC8vICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8vICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAvLyAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uY2l0eS1uYW1lX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIC5jaXR5LW5hbWVfX3VuZGVybGluZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3JlbSAwIDAgI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIC5jaXR5LW5hbWVfX3RleHQge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbn1cclxuLnRlbXAtc3RhdGVfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAudGVtcGVyYXR1cmVfX3RleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAvLyBsZXR0ZXItc3BhY2luZzogMC43NXJlbTtcclxuICAgIH1cclxufVxyXG4uaHVtLXdpbmRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIC5odW1fX2NvbnRhaW5lciwgLndpbmRfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmh1bV9fdGV4dCwgLndpbmRfX3RleHQge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICAuaHVtLXdpbmRfX3NlcGFyYXRvciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi8qKioqKiogYm9keSAqKioqKiovXHJcbi5ib2R5LWNvbnRlbnRfX3dyYXBwZXIge1xyXG4gICAgLy8gd2lkdGg6IDQyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgODBweCByZ2JhKGJsYWNrLCAwLjMpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC8vIGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgIC5mb3JlY2FzdF9fY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAuZGF5LXdlYXRoZXJfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAuZGF5LXdlYXRoZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5kYXktbmFtZV9fdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzk0MzdhO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICYuZGFyayB7Y29sb3I6IHdoaXRlO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXktaWNvbiB7fVxyXG4gICAgICAgICAgICAgICAgLmZvcmVjYXN0LWNvbmRpdGlvbl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRheS10ZW1wX190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBjMTA2NjtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICYuZGFyayB7Y29sb3I6IHdoaXRlO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmRhcmsge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/weather/details/weather-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/weather/details/weather-details.component.ts ***!
  \**************************************************************/
/*! exports provided: WeatherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsComponent", function() { return WeatherDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather/weather.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");





// import { WEATHERS } from '../mock-weather';

var WeatherDetailsComponent = /** @class */ (function () {
    function WeatherDetailsComponent(globals, _weatherService, route) {
        this.globals = globals;
        this._weatherService = _weatherService;
        this.route = route;
    }
    WeatherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.city = this.route.snapshot.paramMap.get('city');
        // console.log(city);
        this._weatherService.getSevenDayForecast(this.city)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.dailyForecasts.forecastLocation.forecast; }))
            .subscribe(function (result) {
            console.log(result);
            _this.forecast = result;
            console.log(_this.forecast);
        });
    };
    WeatherDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-details',
            template: __webpack_require__(/*! ./weather-details.component.html */ "./src/app/weather/details/weather-details.component.html"),
            providers: [_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]],
            styles: [__webpack_require__(/*! ./weather-details.component.scss */ "./src/app/weather/details/weather-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WeatherDetailsComponent);
    return WeatherDetailsComponent;
}());



/***/ }),

/***/ "./src/app/weather/item/weather-item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/weather/item/weather-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"weather-card__container\" (click)=\"openDetails()\" [ngClass]=\"{'dark': globals.darkModeActive}\">\n    <span class=\"city-name__text\">{{item.city}} , {{item.country}}</span>\n    <div class=\"weather-icon__container\">\n        <!-- <svg-icon class=\"cloudy-icon\" name=\"cloudy-icon\"></svg-icon> -->\n        <img src=\"{{item.icon}}\" alt=\"\">\n    </div>\n    <div class=\"temperature-text__container\">\n        <span class=\"temperature__text\">{{item.temperature | fahrenheit}}<span class=\"temperature-metric__text\">°F</span></span>\n        <!-- <span class=\"temperature__text\">{{item.temperature}}<span class=\"temperature-metric__text\">°C</span></span> -->\n        <!-- <span class=\"temperature-metric__text\">°<span *ngIf=\"weather.metric == true\">C</span><span *ngIf=\"weather.metric == false\">F</span></span> -->\n        <span class=\"weather-condition__text\">{{item.description | removeUnderscore}}</span>\n    </div>\n    <section class=\"min-max__container\">\n        <div class=\"min__container\">\n            <svg class=\"min-arrow__icon\" viewBox=\"188.5 807 21 21\">\n                <path fill=\"#00ff9b\" d=\"M209.5 817.5h-21L199 828z\" data-name=\"Min Arrow\"/>\n            </svg>\n\n            <span class=\"min-temperature__text\">{{item.lowTemperature}}</span>\n            <span class=\"min__text\">Min</span>\n        </div>\n        <div class=\"max__container\">\n            <svg class=\"max-arrow__icon\" viewBox=\"449.5 820 21 21\">\n                <path fill=\"red\" d=\"M449.5 830.5h21L460 820z\" data-name=\"Max Arrow\"/>\n            </svg>\n            <span class=\"max-temperature__text\">{{item.highTemperature}}</span>\n            <span class=\"max__text\">Max</span>\n        </div>\n    </section>\n</section>\n"

/***/ }),

/***/ "./src/app/weather/item/weather-item.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/weather/item/weather-item.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* weather card */\n.weather-card__container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3);\n  justify-items: center;\n  padding: 2rem;\n  margin: 2rem;\n  width: 18rem;\n  height: 26rem;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 1.75rem;\n  -webkit-animation: 1.25s ease-in-out 0ms 1 fadein;\n          animation: 1.25s ease-in-out 0ms 1 fadein;\n  float: left; }\n.weather-card__container.dark {\n    background: linear-gradient(to bottom, #711B86, #00057A);\n    color: white; }\n.weather-card__container .city-name__text {\n    text-transform: uppercase;\n    font-size: 1.4rem;\n    letter-spacing: 0.1rem;\n    margin-bottom: 1rem; }\n.weather-card__container .weather-icon__container {\n    margin-bottom: 2rem; }\n.weather-card__container .weather-icon__container img {\n      width: 100%; }\n.weather-card__container .temperature-text__container .temperature__text {\n    align-self: end;\n    width: 100%;\n    font-size: 4rem;\n    font-weight: 100;\n    letter-spacing: 0.1rem; }\n.weather-card__container .temperature-text__container .temperature-metric__text {\n    vertical-align: top;\n    font-size: 2rem; }\n.weather-card__container .temperature-text__container .weather-condition__text {\n    display: block;\n    font-size: 1rem;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    text-align: center; }\n.weather-card__container .min-max__container {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr;\n    align-items: center; }\n.weather-card__container .min-max__container .min__container,\n    .weather-card__container .min-max__container .max__container {\n      margin: 0 1rem;\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr; }\n.weather-card__container .min-max__container .min__container .min-arrow__icon, .weather-card__container .min-max__container .min__container .max-arrow__icon,\n      .weather-card__container .min-max__container .max__container .min-arrow__icon,\n      .weather-card__container .min-max__container .max__container .max-arrow__icon {\n        height: 1.25rem;\n        margin: auto; }\n.weather-card__container .min-max__container .min__container .max-arrow__icon,\n      .weather-card__container .min-max__container .max__container .max-arrow__icon {\n        margin-bottom: -0.05rem; }\n.weather-card__container .min-max__container .min__container .min__text,\n      .weather-card__container .min-max__container .max__container .min__text {\n        color: #00FF9B; }\n.weather-card__container .min-max__container .min__container .max__text,\n      .weather-card__container .min-max__container .max__container .max__text {\n        color: #FF0070; }\n.weather-card__container .min-max__container .min__container .max-temperature__text, .weather-card__container .min-max__container .min__container .min-temperature__text,\n      .weather-card__container .min-max__container .max__container .max-temperature__text,\n      .weather-card__container .min-max__container .max__container .min-temperature__text {\n        text-align: center;\n        font-size: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9pdGVtL0M6XFxVc2Vyc1xcYmx1ZWJpcmRcXERlc2t0b3BcXGFuZ3VsYXI2Y3J1ZC9zcmNcXGFwcFxcd2VhdGhlclxcaXRlbVxcd2VhdGhlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBQ0E7RUFDSSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUUvQix5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixpREFBeUM7VUFBekMseUNBQXlDO0VBQ3pDLFdBQVcsRUFBQTtBQWZmO0lBaUJRLHdEQUF3RDtJQUN4RCxZQUFZLEVBQUE7QUFsQnBCO0lBcUJRLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0FBeEIzQjtJQTRCUSxtQkFBbUIsRUFBQTtBQTVCM0I7TUFnQ1ksV0FBVyxFQUFBO0FBaEN2QjtJQXlDWSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCLEVBQUE7QUE3Q2xDO0lBZ0RZLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7QUFqRDNCO0lBb0RZLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0IsRUFBQTtBQXhEOUI7SUE0RFEsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7QUEvRDNCOztNQWtFWSxjQUFjO01BQ2QsYUFBYTtNQUNiLDBCQUEwQjtNQUMxQiwyQkFBMkIsRUFBQTtBQXJFdkM7OztRQXdFZ0IsZUFBZTtRQUNmLFlBQVksRUFBQTtBQXpFNUI7O1FBNEU4Qix1QkFBdUIsRUFBQTtBQTVFckQ7O1FBNkV3QixjQUFjLEVBQUE7QUE3RXRDOztRQThFd0IsY0FBYyxFQUFBO0FBOUV0Qzs7O1FBZ0ZjLGtCQUFrQjtRQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyL2l0ZW0vd2VhdGhlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogd2VhdGhlciBjYXJkICovXHJcbi53ZWF0aGVyLWNhcmRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBoZWlnaHQ6IDI2cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG4gICAgYW5pbWF0aW9uOiAxLjI1cyBlYXNlLWluLW91dCAwbXMgMSBmYWRlaW47XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgICYuZGFyayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcxMUI4NiwgIzAwMDU3QSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNpdHktbmFtZV9fdGV4dCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAud2VhdGhlci1pY29uX19jb250YWluZXJ7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnLWljb24ge1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGN5YW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRlbXBlcmF0dXJlLXRleHRfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgLnRlbXBlcmF0dXJlX190ZXh0IHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVtcGVyYXR1cmUtbWV0cmljX190ZXh0IHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2VhdGhlci1jb25kaXRpb25fX3RleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1pbi1tYXhfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAubWluX19jb250YWluZXIsXHJcbiAgICAgICAgLm1heF9fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcblxyXG4gICAgICAgICAgICAubWluLWFycm93X19pY29uLCAubWF4LWFycm93X19pY29uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1heC1hcnJvd19faWNvbiB7bWFyZ2luLWJvdHRvbTogLTAuMDVyZW07fVxyXG4gICAgICAgICAgICAubWluX190ZXh0IHtjb2xvcjogIzAwRkY5Qjt9XHJcbiAgICAgICAgICAgIC5tYXhfX3RleHQge2NvbG9yOiAjRkYwMDcwO31cclxuICAgICAgICAgICAgLm1heC10ZW1wZXJhdHVyZV9fdGV4dCwgLm1pbi10ZW1wZXJhdHVyZV9fdGV4dCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/weather/item/weather-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/weather/item/weather-item.component.ts ***!
  \********************************************************/
/*! exports provided: WeatherItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherItemComponent", function() { return WeatherItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather/weather.service.ts");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather */ "./src/app/weather/weather.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");





// import { WEATHERS } from '../mock-weather';

var WeatherItemComponent = /** @class */ (function () {
    function WeatherItemComponent(globals, _weatherService, router, route) {
        this.globals = globals;
        this._weatherService = _weatherService;
        this.router = router;
        this.route = route;
    }
    WeatherItemComponent.prototype.ngOnInit = function () {
        // console.log(this.item.city);
        // this._weatherService.getSevenDayForecast(cityName)
        //   .subscribe(result => {
        //       console.log(result);
        //   });
    };
    WeatherItemComponent.prototype.openDetails = function () {
        console.log(this.item.city);
        // this._weatherService.getSevenDayForecast(this.item.city)
        //     .pipe(map(result => (<any>result.dailyForecasts.forecastLocation.forecast)))
        //     .subscribe(result => {
        //         console.log(result);
        //         this.forecast = result;
        //         console.log(this.forecast);
        this.router.navigate(['/detail-report/', this.item.city]);
        // });
        // this.router.navigateByUrl('/details/paris');
        // this.router.navigate(['/detail-report']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('weatherItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _weather__WEBPACK_IMPORTED_MODULE_4__["Weather"])
    ], WeatherItemComponent.prototype, "item", void 0);
    WeatherItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-item',
            template: __webpack_require__(/*! ./weather-item.component.html */ "./src/app/weather/item/weather-item.component.html"),
            providers: [_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]],
            styles: [__webpack_require__(/*! ./weather-item.component.scss */ "./src/app/weather/item/weather-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WeatherItemComponent);
    return WeatherItemComponent;
}());



/***/ }),

/***/ "./src/app/weather/list/weather-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/weather/list/weather-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main__container\"> -->\n    <!-- <weather-item *ngFor=\"let item of weatherItems; let i = index;\" [weatherItem]=\"item\"></weather-item> -->\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/weather/list/weather-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/weather/list/weather-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__container {\n  display: flex;\n  flex-wrap: wrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9saXN0L0M6XFxVc2Vyc1xcYmx1ZWJpcmRcXERlc2t0b3BcXGFuZ3VsYXI2Y3J1ZC9zcmNcXGFwcFxcd2VhdGhlclxcbGlzdFxcd2VhdGhlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBU0ksYUFBYTtFQUNiLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvbGlzdC93ZWF0aGVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9fY29udGFpbmVyIHtcclxuICAgIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMWZyKTtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC8vIGZsZXg6IDEgMSAxNjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/weather/list/weather-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/weather/list/weather-list.component.ts ***!
  \********************************************************/
/*! exports provided: WeatherListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherListComponent", function() { return WeatherListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather/weather.service.ts");




var WeatherListComponent = /** @class */ (function () {
    function WeatherListComponent(globals, _weatherService) {
        this.globals = globals;
        this._weatherService = _weatherService;
    }
    WeatherListComponent.prototype.ngOnInit = function () {
        this.weatherItems = this._weatherService.getWeatherData();
        // console.log(this.weather);
    };
    WeatherListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-list',
            template: __webpack_require__(/*! ./weather-list.component.html */ "./src/app/weather/list/weather-list.component.html"),
            styles: [__webpack_require__(/*! ./weather-list.component.scss */ "./src/app/weather/list/weather-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]])
    ], WeatherListComponent);
    return WeatherListComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.data.ts":
/*!*****************************************!*\
  !*** ./src/app/weather/weather.data.ts ***!
  \*****************************************/
/*! exports provided: WEATHER_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEATHER_DATA", function() { return WEATHER_DATA; });
var WEATHER_DATA = [
// new Weather('Tokyo', 'CLoudy', 34, 'Japan'),
// new Weather('Beijing', 'Rainy', 24, 'China'),
// new Weather('New York', 'Clear', 14, 'United States'),
];


/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather/weather.service.ts ***!
  \********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.data */ "./src/app/weather/weather.data.ts");



// import { catch } from 'rxjs/operators';

// import 'rxjs/add/operator/map';


var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.appId = "/* appId */";
        this.appCode = "/* appCode */";
    }
    WeatherService.prototype.getWeatherData = function () {
        return _weather_data__WEBPACK_IMPORTED_MODULE_4__["WEATHER_DATA"];
    };
    WeatherService.prototype.addWeatherData = function (weather) {
        _weather_data__WEBPACK_IMPORTED_MODULE_4__["WEATHER_DATA"].push(weather);
        console.log(_weather_data__WEBPACK_IMPORTED_MODULE_4__["WEATHER_DATA"]);
    };
    WeatherService.prototype.isExistWeather = function (weather) {
        return _weather_data__WEBPACK_IMPORTED_MODULE_4__["WEATHER_DATA"].some(function (elem) { return (elem.city == weather.city); });
        // return WEATHER_DATA.some(elem => (elem.city == weather.city && elem.country == weather.country));
    };
    WeatherService.prototype.searchWeatherInfo = function (city) {
        // let url = 'https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=' + city + '&app_id=' + this.appId + '&app_code=' + this.appCode;
        var url = 'https://weather.cit.api.here.com/weather/1.0/report.json?app_id=' + this.appId + '&app_code=' + this.appCode + '&product=observation&name=' + city;
        return this.http.jsonp(url, "jsonpCallback");
        // .catch(this.handleError);
        // .pipe(map(response => (<any>response).dailyForecasts.forecastLocation ))
        // .subscribe(response => {
        //     console.log(response);
        // }, error => {
        //     console.error(error);
        // });
        // .catch(
        //     error => {
        //         return Observable.of<any>(error.json());
        //     }
        // );
    };
    WeatherService.prototype.getSevenDayForecast = function (city) {
        var url = 'https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=' + city + '&app_id=' + this.appId + '&app_code=' + this.appCode;
        return this.http.jsonp(url, "jsonpCallback");
    };
    WeatherService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        errMsg = error.message ? error.message : error.toString();
        console.error(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/weather/weather.ts":
/*!************************************!*\
  !*** ./src/app/weather/weather.ts ***!
  \************************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weather", function() { return Weather; });
// export class Weather {
//     public city: string;
//     public description: string;
//     public temperature: number;
//
//     constructor(city: string, description: string, temperature: number) {
//         this.city = city;
//         this.description = description;
//         this.temperature = temperature;
//     }
// }
var Weather = /** @class */ (function () {
    function Weather(city, description, temperature, country, icon) {
        this.city = city;
        this.description = description;
        this.temperature = temperature;
        this.country = country;
        this.icon = icon;
    }
    return Weather;
}());



/***/ }),

/***/ "./src/app/weather/weathercard/weathercard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/weather/weathercard/weathercard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"main__container\" >\r\n    <add-card></add-card>\r\n    <weather-item *ngFor=\"let item of weatherItems; let i = index;\" [weatherItem]=\"item\"></weather-item>\r\n<!-- <weather-list></weather-list> -->\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/weather/weathercard/weathercard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/weather/weathercard/weathercard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n  transition: opacity 300ms linear;\n  padding-top: 4rem; }\n  .main__container.dark {\n    opacity: 1;\n    background: linear-gradient(#711B86, #00057A);\n    transition: opacity 300ms linear; }\n  .main-container__bg {\n  background: linear-gradient(#FC7DB8, #495CFC);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: -2;\n  transition: opacity 300ms linear; }\n  .main-container__bg.dark {\n    opacity: 1;\n    background: linear-gradient(#711B86, #00057A);\n    transition: opacity 300ms linear; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci93ZWF0aGVyY2FyZC9DOlxcVXNlcnNcXGJsdWViaXJkXFxEZXNrdG9wXFxhbmd1bGFyNmNydWQvc3JjXFxhcHBcXHdlYXRoZXJcXHdlYXRoZXJjYXJkXFx3ZWF0aGVyY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBS3ZCLFdBQVc7RUFDWCxhQUFhO0VBRWIsZ0NBQWdDO0VBR2hDLGlCQUFpQixFQUFBO0VBZHJCO0lBaUJRLFVBQVU7SUFDViw2Q0FBNkM7SUFDN0MsZ0NBQWdDLEVBQUE7RUFHeEM7RUFTSSw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0NBQWdDLEVBQUE7RUFoQnBDO0lBa0JRLFVBQVU7SUFDViw2Q0FBNkM7SUFDN0MsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyL3dlYXRoZXJjYXJkL3dlYXRoZXJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZDN0RCOCwgIzQ5NUNGQyk7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDA7XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLy8gei1pbmRleDogLTI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcclxuXHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuXHJcbiAgICAmLmRhcmsge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM3MTFCODYsICMwMDA1N0EpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgbGluZWFyO1xyXG4gICAgfVxyXG59XHJcbi5tYWluLWNvbnRhaW5lcl9fYmcge1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDA7XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgLy8gei1pbmRleDogLTI7XHJcbiAgICAvLyBvcGFjaXR5OiAwO1xyXG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZDN0RCOCwgIzQ5NUNGQyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcclxuICAgICYuZGFyayB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzcxMUI4NiwgIzAwMDU3QSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/weather/weathercard/weathercard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/weather/weathercard/weathercard.component.ts ***!
  \**************************************************************/
/*! exports provided: WeathercardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeathercardComponent", function() { return WeathercardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather/weather.service.ts");




// import { WeatherItemComponent } from '../item/weather-item';
var WeathercardComponent = /** @class */ (function () {
    function WeathercardComponent(globals, _weatherService) {
        this.globals = globals;
        this._weatherService = _weatherService;
    }
    WeathercardComponent.prototype.ngOnInit = function () {
        this.weatherItems = this._weatherService.getWeatherData();
        // console.log(this.weather);
    };
    WeathercardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weathercard',
            template: __webpack_require__(/*! ./weathercard.component.html */ "./src/app/weather/weathercard/weathercard.component.html"),
            styles: [__webpack_require__(/*! ./weathercard.component.scss */ "./src/app/weather/weathercard/weathercard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]])
    ], WeathercardComponent);
    return WeathercardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bluebird\Desktop\angular6crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map