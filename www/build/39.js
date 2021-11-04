webpackJsonp([39],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTabsWorkPageModule", function() { return DashboardTabsWorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_tabs_work__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardTabsWorkPageModule = /** @class */ (function () {
    function DashboardTabsWorkPageModule() {
    }
    DashboardTabsWorkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_tabs_work__["a" /* DashboardTabsWorkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard_tabs_work__["a" /* DashboardTabsWorkPage */]),
            ],
        })
    ], DashboardTabsWorkPageModule);
    return DashboardTabsWorkPageModule;
}());

//# sourceMappingURL=dashboard-tabs-work.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTabsWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardTabsWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardTabsWorkPage = /** @class */ (function () {
    function DashboardTabsWorkPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.eventOnTabChange = 'TAB_CHANGED';
        this.index = 0;
        this.tab1 = 'PerfilWorkPage';
        this.tab2 = 'ProjectsWorkPage';
        this.tab3 = 'ExplorePage';
        this.tab4 = 'HelpPage';
        this.events.subscribe(this.eventOnTabChange, function (component) {
            switch (component) {
                case _this.tab1:
                    console.log(_this.tab1);
                    _this.index = 0;
                    break;
                case _this.tab2:
                    console.log(_this.tab2);
                    _this.index = 1;
                    break;
                case _this.tab3:
                    console.log(_this.tab3);
                    _this.index = 2;
                    break;
                case _this.tab4:
                    console.log(_this.tab4);
                    _this.index = 3;
                    break;
                default:
                    console.log(component);
                    _this.navCtrl.push(component);
                    break;
            }
        });
    }
    DashboardTabsWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard-tabs-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\dashboard-tabs-work\dashboard-tabs-work.html"*/'<ion-tabs #myTabs [selectedIndex]="index">\n\n  <ion-tab tabIcon="home" [root]="tab1"></ion-tab>\n\n  <ion-tab tabIcon="briefcase" [root]="tab2"></ion-tab>\n\n  <ion-tab tabIcon="search" [root]="tab3"></ion-tab>\n\n  <ion-tab tabIcon="call" [root]="tab4"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\dashboard-tabs-work\dashboard-tabs-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], DashboardTabsWorkPage);
    return DashboardTabsWorkPage;
}());

//# sourceMappingURL=dashboard-tabs-work.js.map

/***/ })

});
//# sourceMappingURL=39.js.map