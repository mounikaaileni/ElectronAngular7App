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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<header>\r\n  Themable App\r\n</header>\r\n<main>\r\n  <div class=\"main-body\">\r\n    <label for=\"darkTheme\">Select Theme :</label>\r\n    <select id=\"darkTheme\" [formControl]=\"selectedTheme\">\r\n      <option value=\"0\">Dark</option>\r\n      <option value=\"1\">Light</option>\r\n      <option value=\"2\">Custom</option>\r\n    </select>\r\n    <div class=\"color-pickers\" *ngIf=\"selectedTheme.value == '2'\">\r\n      <label for=\"primary-color\">Primary Color:</label><input name=\"pricolor\" [formControl]=\"primaryColor\" (change)=\"changeCustomThemeColors()\" type=\"color\"><br>\r\n      <label for=\"text-color\">Text Color:</label><input name=\"txtcolor\" [formControl]=\"textColor\" (change)=\"changeCustomThemeColors()\" type=\"color\"><br>\r\n      <label for=\"bg-color\">Background Color:</label><input name=\"bgcolor\" [formControl]=\"bgColor\" (change)=\"changeCustomThemeColors()\" type=\"color\"><br>\r\n    </div>\r\n    <div class=\"image-src\" *ngIf=\"selectedTheme.value == '2'\"></div>\r\n    <div class=\"btn-grp\" *ngIf=\"selectedTheme.value == '2'\">\r\n      <button class=\"btn\">Yes, I like my Theme</button>\r\n      <button class=\"btn\">No, I didnot like my Theme</button>\r\n    </div>\r\n  </div>\r\n</main>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*mixins*/\n/*styles*/\nmain {\n  align-items: center;\n  height: calc(100% - 60px);\n  display: block; }\nmain > .main-body {\n    text-align: center;\n    padding-top: 30px; }\nmain > .main-body .color-pickers {\n      display: flex;\n      justify-content: center;\n      padding: 30px 0; }\nmain > .main-body .color-pickers > input {\n        margin-right: 10px; }\nmain .image-src {\n    background-image: url('ThumbsUp.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 120px;\n    height: 150px; }\nmain .btn-grp {\n    display: flex;\n    justify-content: space-around; }\nmain .btn-grp .btn {\n      background-color: var(--primary-color);\n      color: var(--text-color);\n      min-width: 150px;\n      height: 30px;\n      border-radius: 0; }\nmain .btn-grp .btn:hover, main .btn-grp .btn:focus {\n        border: 1px solid;\n        border-color: var(--text-color); }\nmain select {\n    width: 150px; }\nmain select option:hover, main select option:active, main select option:focus {\n      background-color: var(--primary-color);\n      color: var(--background-color-color); }\nheader {\n  background-color: var(--primary-color);\n  color: var(--background-color);\n  text-align: center;\n  font-size: 16px;\n  padding: 15px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzMGEzNlxcc291cmNlXFxyZXBvc1xcYW5ndWxhci1lbGVjdHJvbi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQUE7QUFhQSxTQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTtBQUhoQjtJQU1JLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtBQVByQjtNQVVNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsZUFBZSxFQUFBO0FBWnJCO1FBZVEsa0JBQWtCLEVBQUE7QUFmMUI7SUFxQkkscUNBQTBDO0lBQzFDLDRCQUEyQjtJQUMzQiwyQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGFBQWEsRUFBQTtBQXpCakI7SUE2QkksYUFBYTtJQUNiLDZCQUE2QixFQUFBO0FBOUJqQztNQWlDTSxzQ0FBc0M7TUFDdEMsd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osZ0JBQWdCLEVBQUE7QUFyQ3RCO1FBd0NRLGlCQUFpQjtRQUNqQiwrQkFBK0IsRUFBQTtBQXpDdkM7SUErQ0ksWUFBWSxFQUFBO0FBL0NoQjtNQW1EUSxzQ0FBc0M7TUFDdEMsb0NBQW9DLEVBQUE7QUFLNUM7RUFDRSxzQ0FBc0M7RUFDdEMsOEJBQThCO0VBdkU5QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbWl4aW5zKi9cbkBtaXhpbiBhbGlnbm1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWl4aW4gY29sb3Itc2V0dGluZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4vKnN0eWxlcyovXG5tYWluIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgPiAubWFpbi1ib2R5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAuY29sb3ItcGlja2VycyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XG5cbiAgICAgID4gaW5wdXQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmltYWdlLXNyYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+c3JjL1RodW1ic1VwLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuYnRuLWdycCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIC5idG4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgb3B0aW9uIHtcbiAgICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIEBpbmNsdWRlIGFsaWdubWVudHM7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.selectedTheme = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("0");
        this.primaryColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("#870074");
        this.textColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("#ffffff");
        this.bgColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("#2c232b");
        this.themeService.toggleDark();
        this.selectedTheme.valueChanges.subscribe(function (value) {
            switch (value) {
                case "0":
                    _this.themeService.toggleDark();
                    break;
                case "1":
                    _this.themeService.toggleLight();
                    break;
                case "2":
                    _this.themeService.CustomTheme(_this.primaryColor.value, _this.textColor.value, _this.bgColor.value);
                    break;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.changeCustomThemeColors = function () {
        this.themeService.CustomTheme(this.primaryColor.value, this.textColor.value, this.bgColor.value);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/theme.service.ts":
/*!**********************************!*\
  !*** ./src/app/theme.service.ts ***!
  \**********************************/
/*! exports provided: darkTheme, lightTheme, customTheme, ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customTheme", function() { return customTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var darkTheme = {
    'primary-color': '#f4af03',
    'background-color': '#414550',
    'text-color': '#fff'
};
var lightTheme = {
    'primary-color': '#0072c6',
    'background-color': '#ffffff',
    'text-color': '#333333'
};
var customTheme = {
    'primary-color': '#870074',
    'background-color': '#2c232b',
    'text-color': '#ffffff'
};
var ThemeService = /** @class */ (function () {
    function ThemeService() {
    }
    ThemeService.prototype.toggleDark = function () {
        this.setTheme(darkTheme);
    };
    ThemeService.prototype.toggleLight = function () {
        this.setTheme(lightTheme);
    };
    ThemeService.prototype.CustomTheme = function (priclr, txtclr, bgclr) {
        customTheme["primary-color"] = priclr;
        customTheme["background-color"] = bgclr;
        customTheme["text-color"] = txtclr;
        this.setTheme(customTheme);
    };
    ThemeService.prototype.setTheme = function (theme) {
        Object.keys(theme).forEach(function (k) {
            return document.documentElement.style.setProperty("--" + k, theme[k]);
        });
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ThemeService);
    return ThemeService;
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

module.exports = __webpack_require__(/*! C:\Users\s0a36\source\repos\angular-electron\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map