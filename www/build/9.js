webpackJsonp([9],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__["a" /* FooterTabsComponentModule */]
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterTabsComponent; });
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
 * Generated class for the FooterTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterTabsComponent = /** @class */ (function () {
    function FooterTabsComponent(navCtrl, navParams, events, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.menuCtrl = menuCtrl;
        console.log('Hello FooterTabsComponent Component');
    }
    FooterTabsComponent.prototype.segmentButtonClicked = function (ev) {
        console.log('Segment button clicked', ev);
    };
    FooterTabsComponent.prototype.tabs = function () {
        /* this.navCtrl.setRoot('YourProjectsPage'); */
        console.log(this.mymodel);
        if (this.mymodel == 'segment1') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('PerfilWorkPage');
        }
        if (this.mymodel == 'segment2') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('ProjectsWorkPage');
        }
        if (this.mymodel == 'segment3') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('ExplorePage');
        }
        if (this.mymodel == 'segment4') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('HelpPage');
        }
    };
    FooterTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-tabs',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\footer-tabs\footer-tabs.html"*/'<!-- Generated template for the FooterTabsComponent component -->\n<div>\n  <ion-segment [(ngModel)]="mymodel">\n    <ion-segment-button value="segment1" (click)="tabs()" (ionSelect)="segmentButtonClicked($event)">\n      <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment2" (click)="tabs()" (ionSelect)="segmentButtonClicked($event)">\n      <ion-icon ios="ios-briefcase-outline" md="md-briefcase"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment3" (click)="tabs()">\n      <ion-icon ios="ios-search-outline" md="md-search"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment4" (click)="tabs()">\n      <ion-icon ios="ios-call-outline" md="md-call"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</div>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\footer-tabs\footer-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], FooterTabsComponent);
    return FooterTabsComponent;
}());

//# sourceMappingURL=footer-tabs.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterTabsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_tabs__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterTabsComponentModule = /** @class */ (function () {
    function FooterTabsComponentModule() {
    }
    FooterTabsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer_tabs__["a" /* FooterTabsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__footer_tabs__["a" /* FooterTabsComponent */]
            ]
        })
    ], FooterTabsComponentModule);
    return FooterTabsComponentModule;
}());

//# sourceMappingURL=footer-tabs.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Help</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="seccion">\n\n    <h1 no-margin><b>Help</b></h1>\n\n    <!-- <ion-searchbar *ngIf="!isSearchbrOpened"></ion-searchbar> -->\n\n  </div>\n\n  <div padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <p ion-text>If we don’t have an answer for your problem in our FAQ’s you can contact us by clicking on the blue button bellow. </p>\n\n      </ion-row>\n\n      <ion-row text-center>\n\n        <ion-col align-self-center>\n\n          <a ion-button round text-capitalize class="btn" href="tel: +52 5551950738">call</a>\n\n          \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs></footer-tabs>\n\n</ion-footer> '/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=9.js.map