webpackJsonp([38],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTabsPageModule", function() { return DashboardTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_tabs__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardTabsPageModule = /** @class */ (function () {
    function DashboardTabsPageModule() {
    }
    DashboardTabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_tabs__["a" /* DashboardTabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard_tabs__["a" /* DashboardTabsPage */]),
            ],
        })
    ], DashboardTabsPageModule);
    return DashboardTabsPageModule;
}());

//# sourceMappingURL=dashboard-tabs.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_profiles_list_profiles__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages

var DashboardTabsPage = /** @class */ (function () {
    function DashboardTabsPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.eventOnTabChange = 'TAB_CHANGED';
        this.index = 0;
        this.tab1 = 'CategoryHirePage';
        this.tab2 = 'YourProjectsPage';
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__list_profiles_list_profiles__["a" /* ListProfilesPage */];
        this.tab4 = 'FavoritesPage';
        this.events.subscribe('user:logout', function () {
            _this.navCtrl.popToRoot();
        });
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
                    _this.navCtrl.push(component);
                    break;
            }
        });
    }
    DashboardTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard-tabs',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\dashboard-tabs\dashboard-tabs.html"*/'<ion-tabs #myTabs [selectedIndex]="index">\n\n  <ion-tab tabIcon="home" [root]="tab1"></ion-tab>\n\n  <ion-tab tabIcon="briefcase" [root]="tab2"></ion-tab>\n\n  <ion-tab tabIcon="search" [root]="tab3"></ion-tab>\n\n  <ion-tab tabIcon="star-half" [root]="tab4"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\dashboard-tabs\dashboard-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], DashboardTabsPage);
    return DashboardTabsPage;
}());

//# sourceMappingURL=dashboard-tabs.js.map

/***/ })

});
//# sourceMappingURL=38.js.map