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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>TNEB Calculator</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<app-calculator-ui></app-calculator-ui>\n\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Bismillah';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _calculator_ui_calculator_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculator-ui/calculator-ui.component */ "./src/app/calculator-ui/calculator-ui.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _calculator_ui_calculator_ui_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorUIComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator-ui/calculator-ui.component.css":
/*!***********************************************************!*\
  !*** ./src/app/calculator-ui/calculator-ui.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tariff-calc {\r\n  margin: 1rem auto;\r\n  max-width: 40rem;\r\n}\r\n\r\n.tariff-footer {\r\n  font-size: 0.75em;\r\n  color: gray;\r\n  margin: 1em 1em;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci11aS9jYWxjdWxhdG9yLXVpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci11aS9jYWxjdWxhdG9yLXVpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyaWZmLWNhbGMge1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIG1heC13aWR0aDogNDByZW07XHJcbn1cclxuXHJcbi50YXJpZmYtZm9vdGVyIHtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBjb2xvcjogZ3JheTtcclxuICBtYXJnaW46IDFlbSAxZW07XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/calculator-ui/calculator-ui.component.html":
/*!************************************************************!*\
  !*** ./src/app/calculator-ui/calculator-ui.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tariff-calc\">\n  <form name=\"tariff\">\n    <mat-card>\n      <mat-card-title>Tariff Calculator</mat-card-title>\n      <mat-card-subtitle>Helps you calculate your bills</mat-card-subtitle>\n      <mat-card-content>\n        <mat-form-field class=\"full-width\" style=\"font-size:16px\">\n          <input name=\"units\" type=\"number\" [(ngModel)]=\"units\" matInput placeholder=\"Number of Units according to meter\">\n        </mat-form-field>\n        <p>Your amount is {{ amount }}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button type=\"button\" mat-button (click)=\"calculate()\">Calculate</button>\n      </mat-card-actions>\n      <mat-card-footer>\n        <p class=\"tariff-footer\">\n          Tariff applicable only for household electricity supply\n        </p>\n      </mat-card-footer>\n    </mat-card>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/calculator-ui/calculator-ui.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/calculator-ui/calculator-ui.component.ts ***!
  \**********************************************************/
/*! exports provided: CalculatorUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorUIComponent", function() { return CalculatorUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tariff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tariff.service */ "./src/app/tariff.service.ts");



var CalculatorUIComponent = /** @class */ (function () {
    function CalculatorUIComponent(tariff) {
        this.tariff = tariff;
        this.amount = 0;
        this.units = 0;
        this.tariff = tariff;
    }
    CalculatorUIComponent.prototype.ngOnInit = function () {
    };
    CalculatorUIComponent.prototype.calculate = function () {
        this.amount = this.tariff.getBillAmount(this.units);
    };
    CalculatorUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator-ui',
            template: __webpack_require__(/*! ./calculator-ui.component.html */ "./src/app/calculator-ui/calculator-ui.component.html"),
            styles: [__webpack_require__(/*! ./calculator-ui.component.css */ "./src/app/calculator-ui/calculator-ui.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tariff_service__WEBPACK_IMPORTED_MODULE_2__["TariffService"]])
    ], CalculatorUIComponent);
    return CalculatorUIComponent;
}());



/***/ }),

/***/ "./src/app/price-slab.ts":
/*!*******************************!*\
  !*** ./src/app/price-slab.ts ***!
  \*******************************/
/*! exports provided: PriceSlab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceSlab", function() { return PriceSlab; });
var PriceSlab = /** @class */ (function () {
    function PriceSlab(maxUnit, fixedCharge, tariff) {
        this.maxUnit = maxUnit;
        this.fixedCharge = fixedCharge;
        this.tariff = tariff;
    }
    /**
     * calculateAmount
     */
    PriceSlab.prototype.calculateTotalAmount = function (units) {
        var amount = 0;
        var tempUnits = units;
        var tariffIndex = 0;
        amount += this.fixedCharge;
        while (tempUnits > 0) {
            var maxUnitsInCurrSlab = (this.tariff[tariffIndex].maxUnit - this.tariff[tariffIndex].minUnit + 1);
            var unitsInCurrSlab = maxUnitsInCurrSlab > tempUnits ? tempUnits : maxUnitsInCurrSlab;
            amount += unitsInCurrSlab * this.tariff[tariffIndex].pricePerUnit;
            tempUnits -= unitsInCurrSlab;
            tariffIndex++;
        }
        return amount;
    };
    return PriceSlab;
}());



/***/ }),

/***/ "./src/app/tariff.service.ts":
/*!***********************************!*\
  !*** ./src/app/tariff.service.ts ***!
  \***********************************/
/*! exports provided: TariffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffService", function() { return TariffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _price_slab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price-slab */ "./src/app/price-slab.ts");



var TariffService = /** @class */ (function () {
    function TariffService() {
        this.unitSlab = [
            new _price_slab__WEBPACK_IMPORTED_MODULE_2__["PriceSlab"](100, 0, [
                { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
            ]),
            new _price_slab__WEBPACK_IMPORTED_MODULE_2__["PriceSlab"](200, 20, [
                { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
                { minUnit: 101, maxUnit: 200, pricePerUnit: 1.5 },
            ]),
            new _price_slab__WEBPACK_IMPORTED_MODULE_2__["PriceSlab"](500, 30, [
                { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
                { minUnit: 101, maxUnit: 200, pricePerUnit: 2 },
                { minUnit: 201, maxUnit: 500, pricePerUnit: 3 },
            ]),
            new _price_slab__WEBPACK_IMPORTED_MODULE_2__["PriceSlab"](9999999, 50, [
                { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
                { minUnit: 101, maxUnit: 200, pricePerUnit: 3.5 },
                { minUnit: 201, maxUnit: 500, pricePerUnit: 4.6 },
                { minUnit: 501, maxUnit: 9999999, pricePerUnit: 6.6 },
            ]),
        ];
    }
    TariffService.prototype.getBillAmount = function (units) {
        for (var _i = 0, _a = this.unitSlab; _i < _a.length; _i++) {
            var slab = _a[_i];
            if (slab.maxUnit >= units) {
                return slab.calculateTotalAmount(units);
            }
        }
        return 0;
    };
    TariffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TariffService);
    return TariffService;
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

module.exports = __webpack_require__(/*! C:\Users\Fareez\sites\tneb-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map