(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/autocomplete/autocomplete.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autocomplete/autocomplete.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input type=\"text\"\r\n       class=\"form-control\"\r\n       [placeholder]=\"placeholder\"\r\n       [(ngModel)]=\"value\"\r\n       (ngModelChange)=\"valueChange.emit($event)\"\r\n       (focus)=\"_onFocus()\"\r\n>\r\n<div *ngIf=\"_suggestedItems && _suggestedItems.length > 0 && _isDropdownDisplayed\" class=\"app-dropdown\">\r\n  <div *ngFor=\"let i of _suggestedItems\" class=\"app-dropdown__item\" (click)=\"_onItemClick(i)\">\r\n    <span [innerHTML]=\"i | highlightText: value\"></span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/current-conditions/current-conditions.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/current-conditions/current-conditions.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div *ngFor=\"let condition of conditions\" class=\"well flex\" (click)=\"showForecast(condition.location)\">\r\n    <div>\r\n      <h3>{{condition.data.name}} ({{condition.location}})</h3>\r\n      <h4>Current conditions: {{condition.data.weather[0].main}}</h4>\r\n      <h4>Temperatures today:</h4>\r\n      <p>\r\n        Current {{condition.data.main.temp | number:'.0-0'}}\r\n        - Max {{condition.data.main.temp_max | number:'.0-0'}}\r\n        - Min {{condition.data.main.temp_min | number:'.0-0'}}\r\n      </p>\r\n      <p>\r\n        <a [routerLink]=\"['/forecast', condition.location]\" >Show 5-day forecast for {{condition.data.name}}</a>\r\n      </p>\r\n    </div>\r\n    <div>\r\n      <span class=\"close\" (click)=\"_locationService.removeLocation(condition.location)\">&times;</span>\r\n      <img [src]=\"_httpWeatherService.getWeatherIcon(condition.data.weather[0].id)\">\r\n    </div>\r\n </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forecasts-list/forecasts-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecasts-list/forecasts-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\r\n\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\r\n        {{dailyForecast.weather[0].main}}\r\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\r\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\r\n\r\n        <img [src]=\"httpWeatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-entry/location-entry.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-entry/location-entry.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"well\">\r\n  <h2>Enter a location:</h2>\r\n  <div style=\"width: 200px\">\r\n    <app-autocomplete placeholder=\"Country\" [items]=\"_countries\" [(value)]=\"_countryName\"></app-autocomplete>\r\n    <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\" style=\"margin-top: 5px;\">\r\n  </div>\r\n  <br>\r\n  <app-state-button #addLocationButtonRef (click)=\"_addLocation(zipcode.value, _countryName)\">\r\n    <button class=\"btn btn-primary\" ready>Add location</button>\r\n    <button class=\"btn\" disabled running>Adding...</button>\r\n    <button class=\"btn btn-success\" disabled done>Done</button>\r\n  </app-state-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n\r\n  <app-location-entry> </app-location-entry>\r\n  <app-current-conditions [conditions]=\"_currentConditions$ | async\"></app-current-conditions>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/state-button/state-button.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/state-button/state-button.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"_state\">\r\n  <ng-container *ngSwitchCase=\"ButtonState.READY\">\r\n    <ng-content select=\"[ready]\"></ng-content>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"ButtonState.RUNNING\">\r\n    <ng-content select=\"[running]\"></ng-content>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"ButtonState.DONE\">\r\n    <ng-content select=\"[done]\"></ng-content>\r\n  </ng-container>\r\n</ng-container>\r\n");

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/autocomplete/autocomplete.component.ts");
/* harmony import */ var _autocomplete_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autocomplete/highlight-text.pipe */ "./src/app/autocomplete/highlight-text.pipe.ts");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country.service */ "./src/app/country.service.ts");
/* harmony import */ var _state_button_state_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state-button/state-button.component */ "./src/app/state-button/state-button.component.ts");
/* harmony import */ var _http_weather_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http-weather.service */ "./src/app/http-weather.service.ts");
/* harmony import */ var _location_entry_location_entry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location-entry/location-entry.component */ "./src/app/location-entry/location-entry.component.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location.service */ "./src/app/location.service.ts");
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ "./src/app/forecasts-list/forecasts-list.component.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ "./src/app/current-conditions/current-conditions.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _location_entry_location_entry_component__WEBPACK_IMPORTED_MODULE_9__["LocationEntryComponent"],
                _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_11__["ForecastsListComponent"],
                _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_13__["CurrentConditionsComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"],
                _state_button_state_button_component__WEBPACK_IMPORTED_MODULE_7__["StateButtonComponent"],
                _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"],
                _autocomplete_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_5__["HighlightTextPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_16__["routing"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production })
            ],
            providers: [_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"], _weather_service__WEBPACK_IMPORTED_MODULE_12__["WeatherService"], _http_weather_service__WEBPACK_IMPORTED_MODULE_8__["HttpWeatherService"], _country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ "./src/app/forecasts-list/forecasts-list.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var appRoutes = [
    {
        path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    },
    {
        path: 'forecast/:location', component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__["ForecastsListComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/autocomplete/autocomplete.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-dropdown {\n  max-height: 500px;\n  min-width: 200px;\n  background-color: white;\n  border: 1px solid grey;\n  position: absolute;\n  overflow-y: auto;\n}\n.app-dropdown__item {\n  padding: 5px 10px;\n}\n.app-dropdown__item:hover {\n  background-color: #f5f5f5;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0b2NvbXBsZXRlL0M6XFxVc2Vyc1xcemhhbnBcXElkZWFQcm9qZWN0c1xcdG1wXFxuZy13ZWF0aGVyL3NyY1xcYXBwXFxhdXRvY29tcGxldGVcXGF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWRyb3Bkb3duIHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFwcC1kcm9wZG93biB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmFwcC1kcm9wZG93bl9faXRlbSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmFwcC1kcm9wZG93bl9faXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/autocomplete/autocomplete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.ts ***!
  \********************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isDropdownDisplayed = false;
    }
    Object.defineProperty(AutocompleteComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this._updateSuggestedItems();
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteComponent.prototype._onItemClick = function (value) {
        this.value = value;
        this.valueChange.emit(value);
        this._isDropdownDisplayed = false;
    };
    AutocompleteComponent.prototype._onFocus = function () {
        this._isDropdownDisplayed = true;
    };
    AutocompleteComponent.prototype._updateSuggestedItems = function () {
        var _this = this;
        if (this.items) {
            if (this.value) {
                this._suggestedItems = this.items.filter(function (item) { return item && (item.toLowerCase().indexOf(_this.value.toLowerCase()) !== -1); });
            }
            else {
                this._suggestedItems = __spreadArrays(this.items);
            }
        }
        else {
            this._suggestedItems = [];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AutocompleteComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AutocompleteComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], AutocompleteComponent.prototype, "value", null);
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete',
            template: __importDefault(__webpack_require__(/*! raw-loader!./autocomplete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/autocomplete/autocomplete.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/autocomplete/autocomplete.component.scss")).default]
        })
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/autocomplete/highlight-text.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/autocomplete/highlight-text.pipe.ts ***!
  \*****************************************************/
/*! exports provided: HighlightTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightTextPipe", function() { return HighlightTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HighlightTextPipe = /** @class */ (function () {
    function HighlightTextPipe() {
    }
    HighlightTextPipe.prototype.transform = function (text, highlightedText) {
        return text.replace(new RegExp("(" + highlightedText + ")", 'gi'), '<b>$1</b>');
    };
    HighlightTextPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'highlightText',
        })
    ], HighlightTextPipe);
    return HighlightTextPipe;
}());



/***/ }),

/***/ "./src/app/country.service.ts":
/*!************************************!*\
  !*** ./src/app/country.service.ts ***!
  \************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var COUNTRY_MAP = {
    "AF": "Afghanistan",
    "AX": "Aland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua And Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia And Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Congo, Democratic Republic",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D\"Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (Malvinas)",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island & Mcdonald Islands",
    "VA": "Holy See (Vatican City State)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran, Islamic Republic Of",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle Of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KR": "Korea",
    "KP": "North Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People\"s Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libyan Arab Jamahiriya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia, Federated States Of",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestinian Territory, Occupied",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts And Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre And Miquelon",
    "VC": "Saint Vincent And Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome And Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia And Sandwich Isl.",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard And Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad And Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks And Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "WF": "Wallis And Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
};
var CountryService = /** @class */ (function () {
    function CountryService() {
    }
    CountryService.prototype.getCountryMap = function () {
        return COUNTRY_MAP;
    };
    CountryService.prototype.getCountryIso2Code = function (countryName) {
        for (var _i = 0, _a = Object.keys(COUNTRY_MAP); _i < _a.length; _i++) {
            var countryKey = _a[_i];
            if (countryName && COUNTRY_MAP[countryKey].toLowerCase() === countryName.toLowerCase().trim()) {
                return countryKey;
            }
        }
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/current-conditions/current-conditions.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close {\r\n  cursor: pointer;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1jb25kaXRpb25zL2N1cnJlbnQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbnQtY29uZGl0aW9ucy9jdXJyZW50LWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/current-conditions/current-conditions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/*! exports provided: CurrentConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConditionsComponent", function() { return CurrentConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _http_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-weather.service */ "./src/app/http-weather.service.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ "./src/app/location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CurrentConditionsComponent = /** @class */ (function () {
    function CurrentConditionsComponent(_httpWeatherService, _locationService, _router) {
        this._httpWeatherService = _httpWeatherService;
        this._locationService = _locationService;
        this._router = _router;
    }
    CurrentConditionsComponent.prototype.showForecast = function (location) {
        this._router.navigate(['/forecast', location]);
    };
    CurrentConditionsComponent.ctorParameters = function () { return [
        { type: _http_weather_service__WEBPACK_IMPORTED_MODULE_2__["HttpWeatherService"] },
        { type: _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CurrentConditionsComponent.prototype, "conditions", void 0);
    CurrentConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-conditions',
            template: __importDefault(__webpack_require__(/*! raw-loader!./current-conditions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/current-conditions/current-conditions.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./current-conditions.component.css */ "./src/app/current-conditions/current-conditions.component.css")).default]
        }),
        __metadata("design:paramtypes", [_http_weather_service__WEBPACK_IMPORTED_MODULE_2__["HttpWeatherService"],
            _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CurrentConditionsComponent);
    return CurrentConditionsComponent;
}());



/***/ }),

/***/ "./src/app/forecasts-list/forecasts-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZWNhc3RzLWxpc3QvZm9yZWNhc3RzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9mb3JlY2FzdHMtbGlzdC9mb3JlY2FzdHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgdG9wOiAtMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/forecasts-list/forecasts-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/*! exports provided: ForecastsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastsListComponent", function() { return ForecastsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _http_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-weather.service */ "./src/app/http-weather.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ForecastsListComponent = /** @class */ (function () {
    function ForecastsListComponent(httpWeatherService, route) {
        var _this = this;
        this.httpWeatherService = httpWeatherService;
        route.params.subscribe(function (params) {
            _this.location = params['location'];
            httpWeatherService.getForecast(_this.location)
                .subscribe(function (data) { return _this.forecast = data; });
        });
    }
    ForecastsListComponent.ctorParameters = function () { return [
        { type: _http_weather_service__WEBPACK_IMPORTED_MODULE_1__["HttpWeatherService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ForecastsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forecasts-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./forecasts-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forecasts-list/forecasts-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./forecasts-list.component.css */ "./src/app/forecasts-list/forecasts-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_http_weather_service__WEBPACK_IMPORTED_MODULE_1__["HttpWeatherService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ForecastsListComponent);
    return ForecastsListComponent;
}());



/***/ }),

/***/ "./src/app/http-weather.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-weather.service.ts ***!
  \*****************************************/
/*! exports provided: HttpWeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpWeatherService", function() { return HttpWeatherService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HttpWeatherService = /** @class */ (function () {
    function HttpWeatherService(http) {
        this.http = http;
    }
    HttpWeatherService_1 = HttpWeatherService;
    HttpWeatherService.prototype.getCurrentConditions = function (location) {
        return this.http.get(HttpWeatherService_1.URL + "/weather?zip=" + location + "&units=imperial&APPID=" + HttpWeatherService_1.APPID);
    };
    HttpWeatherService.prototype.getForecast = function (location) {
        // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http.get(HttpWeatherService_1.URL + "/forecast/daily?zip=" + location + "&units=imperial&cnt=5&APPID=" + HttpWeatherService_1.APPID);
    };
    HttpWeatherService.prototype.getWeatherIcon = function (id) {
        if (id >= 200 && id <= 232)
            return HttpWeatherService_1.ICON_URL + "art_storm.png";
        else if (id >= 501 && id <= 511)
            return HttpWeatherService_1.ICON_URL + "art_rain.png";
        else if (id === 500 || (id >= 520 && id <= 531))
            return HttpWeatherService_1.ICON_URL + "art_light_rain.png";
        else if (id >= 600 && id <= 622)
            return HttpWeatherService_1.ICON_URL + "art_snow.png";
        else if (id >= 801 && id <= 804)
            return HttpWeatherService_1.ICON_URL + "art_clouds.png";
        else if (id === 741 || id === 761)
            return HttpWeatherService_1.ICON_URL + "art_fog.png";
        else
            return HttpWeatherService_1.ICON_URL + "art_clear.png";
    };
    var HttpWeatherService_1;
    HttpWeatherService.URL = 'http://api.openweathermap.org/data/2.5';
    HttpWeatherService.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
    HttpWeatherService.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
    HttpWeatherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    HttpWeatherService = HttpWeatherService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HttpWeatherService);
    return HttpWeatherService;
}());



/***/ }),

/***/ "./src/app/location-entry/location-entry.component.ts":
/*!************************************************************!*\
  !*** ./src/app/location-entry/location-entry.component.ts ***!
  \************************************************************/
/*! exports provided: LocationEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationEntryComponent", function() { return LocationEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../country.service */ "./src/app/country.service.ts");
/* harmony import */ var _state_button_state_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state-button/state-button.component */ "./src/app/state-button/state-button.component.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ "./src/app/location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LocationEntryComponent = /** @class */ (function () {
    function LocationEntryComponent(_countryService, _locationService) {
        var _this = this;
        this._countryService = _countryService;
        this._locationService = _locationService;
        this._countries = [];
        var countryMap = _countryService.getCountryMap();
        Object.keys(countryMap).forEach(function (key) {
            _this._countries.push(countryMap[key]);
        });
    }
    LocationEntryComponent.prototype._addLocation = function (zipcode, countryName) {
        if (countryName) {
            var countryIso2Code = this._countryService.getCountryIso2Code(countryName);
            if (countryIso2Code) {
                var location_1 = zipcode + "," + countryIso2Code;
                this._addLocationButtonRef.subscribeToObservable(this._locationService.addLocation(location_1));
            }
        }
    };
    LocationEntryComponent.ctorParameters = function () { return [
        { type: _country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"] },
        { type: _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addLocationButtonRef'),
        __metadata("design:type", _state_button_state_button_component__WEBPACK_IMPORTED_MODULE_2__["StateButtonComponent"])
    ], LocationEntryComponent.prototype, "_addLocationButtonRef", void 0);
    LocationEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-entry',
            template: __importDefault(__webpack_require__(/*! raw-loader!./location-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-entry/location-entry.component.html")).default
        }),
        __metadata("design:paramtypes", [_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"],
            _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
    ], LocationEntryComponent);
    return LocationEntryComponent;
}());



/***/ }),

/***/ "./src/app/location.service.ts":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: LOCATIONS, LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATIONS", function() { return LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LOCATIONS = "locations";
var LocationService = /** @class */ (function () {
    function LocationService(weatherService) {
        this.weatherService = weatherService;
        this.locations = [];
        var locString = localStorage.getItem(LOCATIONS);
        if (locString)
            this.locations = JSON.parse(locString);
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var loc = _a[_i];
            this.weatherService.addCurrentConditions(loc);
        }
    }
    LocationService.prototype.addLocation = function (location) {
        this.locations.push(location);
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        return this.weatherService.addCurrentConditions(location);
    };
    LocationService.prototype.removeLocation = function (location) {
        var index = this.locations.indexOf(location);
        if (index !== -1) {
            this.locations.splice(index, 1);
            localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
            this.weatherService.removeCurrentConditions(location);
        }
    };
    LocationService.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"] }
    ]; };
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(_weatherService) {
        this._weatherService = _weatherService;
        _weatherService.startUpdates();
        this._currentConditions$ = _weatherService.getCurrentConditions();
    }
    MainPageComponent.prototype.ngOnDestroy = function () {
        this._weatherService.stopUpdates();
    };
    MainPageComponent.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"] }
    ]; };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html")).default
        }),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/state-button/state-button.component.ts":
/*!********************************************************!*\
  !*** ./src/app/state-button/state-button.component.ts ***!
  \********************************************************/
/*! exports provided: StateButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateButtonComponent", function() { return StateButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ButtonState;
(function (ButtonState) {
    ButtonState["RUNNING"] = "running";
    ButtonState["READY"] = "ready";
    ButtonState["DONE"] = "done";
})(ButtonState || (ButtonState = {}));
var StateButtonComponent = /** @class */ (function () {
    function StateButtonComponent() {
        this.ButtonState = ButtonState;
        this._state = ButtonState.READY;
    }
    StateButtonComponent_1 = StateButtonComponent;
    StateButtonComponent.prototype.subscribeToObservable = function (obs) {
        var _this = this;
        if (!obs) {
            return;
        }
        this._state = ButtonState.RUNNING;
        obs.subscribe(function () {
            _this._state = ButtonState.DONE;
            setTimeout(function () {
                _this._state = ButtonState.READY;
            }, StateButtonComponent_1.readyDelay);
        }, function () {
            alert('Location not found!');
            setTimeout(function () {
                _this._state = ButtonState.READY;
            }, StateButtonComponent_1.readyDelay);
        });
    };
    var StateButtonComponent_1;
    StateButtonComponent.readyDelay = 500;
    StateButtonComponent = StateButtonComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state-button',
            template: __importDefault(__webpack_require__(/*! raw-loader!./state-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/state-button/state-button.component.html")).default
        })
    ], StateButtonComponent);
    return StateButtonComponent;
}());



/***/ }),

/***/ "./src/app/weather.service.ts":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-weather.service */ "./src/app/http-weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




// Now only manages weather state
var WeatherService = /** @class */ (function () {
    function WeatherService(_httpWeatherService) {
        this._httpWeatherService = _httpWeatherService;
        this._currentConditions = [];
        this._currentConditions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    WeatherService_1 = WeatherService;
    WeatherService.prototype.addCurrentConditions = function (location) {
        var _this = this;
        var currentCondition$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._httpWeatherService.getCurrentConditions(location)
            .subscribe(function (data) {
            _this._currentConditions.push({ location: location, data: data });
            _this._currentConditions$.next(_this._currentConditions);
            currentCondition$.next({ location: location, data: data });
        }, function (error) {
            currentCondition$.error(error);
        });
        return currentCondition$;
    };
    WeatherService.prototype.removeCurrentConditions = function (location) {
        for (var i in this._currentConditions) {
            if (this._currentConditions[i].location === location) {
                this._currentConditions.splice(+i, 1);
                this._currentConditions$.next(this._currentConditions);
            }
        }
    };
    WeatherService.prototype.getCurrentConditions = function () {
        return this._currentConditions$;
    };
    WeatherService.prototype.startUpdates = function () {
        var _this = this;
        this._intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(WeatherService_1._updateDelay).subscribe(function () {
            var newCurrentConditions = [];
            var obsArray = [];
            _this._currentConditions.forEach(function (condition) {
                obsArray.push(_this._httpWeatherService.getCurrentConditions(condition.location)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { newCurrentConditions.push({ location: condition.location, data: data }); })));
            });
            // wait for all new weather conditions to be retrieved and then emit update state
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(obsArray).subscribe(function () {
                _this._currentConditions = newCurrentConditions;
                _this._currentConditions$.next(_this._currentConditions);
            });
        });
    };
    WeatherService.prototype.stopUpdates = function () {
        this._intervalSubscription.unsubscribe();
    };
    var WeatherService_1;
    WeatherService._updateDelay = 30000;
    WeatherService.ctorParameters = function () { return [
        { type: _http_weather_service__WEBPACK_IMPORTED_MODULE_3__["HttpWeatherService"] }
    ]; };
    WeatherService = WeatherService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_weather_service__WEBPACK_IMPORTED_MODULE_3__["HttpWeatherService"]])
    ], WeatherService);
    return WeatherService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zhanp\IdeaProjects\tmp\ng-weather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map