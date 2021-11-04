webpackJsonp([0],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetingsPageModule", function() { return SetingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setings__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_tabs_hire_footer_tabs_hire_module__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SetingsPageModule = /** @class */ (function () {
    function SetingsPageModule() {
    }
    SetingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setings__["a" /* SetingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setings__["a" /* SetingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__["a" /* FooterTabsComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_tabs_hire_footer_tabs_hire_module__["a" /* FooterTabsHireComponentModule */]
            ],
        })
    ], SetingsPageModule);
    return SetingsPageModule;
}());

//# sourceMappingURL=setings.module.js.map

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

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterTabsHireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_profiles_list_profiles__ = __webpack_require__(180);
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
//import { ListProfilesPage } from '../list-profiles/list-profiles';
/**
 * Generated class for the FooterTabsHireComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterTabsHireComponent = /** @class */ (function () {
    function FooterTabsHireComponent(navCtrl, navParams, events, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.menuCtrl = menuCtrl;
        console.log('Hello FooterTabsComponent Component');
    }
    FooterTabsHireComponent.prototype.tabs = function () {
        /* this.navCtrl.setRoot('YourProjectsPage'); */
        console.log(this.mymodel);
        if (this.mymodel == 'segment1') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('CategoryHirePage');
        }
        if (this.mymodel == 'segment2') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('YourProjectsPage');
        }
        if (this.mymodel == 'segment3') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_list_profiles_list_profiles__["a" /* ListProfilesPage */]);
        }
        if (this.mymodel == 'segment4') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('FavoritesPage');
        }
    };
    FooterTabsHireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-tabs-hire',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\footer-tabs-hire\footer-tabs-hire.html"*/'<!-- Generated template for the FooterTabsHireComponent component -->\n<div>\n  <ion-segment [(ngModel)]="mymodel">\n    <ion-segment-button value="segment1" (click)="tabs()">\n      <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment2" (click)="tabs()">\n      <ion-icon ios="ios-briefcase-outline" md="md-briefcase"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment3" (click)="tabs()">\n      <ion-icon ios="ios-search-outline" md="md-search"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment4" (click)="tabs()">\n      <ion-icon ios="ios-star-half-outline" md="md-star-half"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</div>\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\footer-tabs-hire\footer-tabs-hire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], FooterTabsHireComponent);
    return FooterTabsHireComponent;
}());

//# sourceMappingURL=footer-tabs-hire.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterTabsHireComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_tabs_hire__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterTabsHireComponentModule = /** @class */ (function () {
    function FooterTabsHireComponentModule() {
    }
    FooterTabsHireComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer_tabs_hire__["a" /* FooterTabsHireComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__footer_tabs_hire__["a" /* FooterTabsHireComponent */]
            ]
        })
    ], FooterTabsHireComponentModule);
    return FooterTabsHireComponentModule;
}());

//# sourceMappingURL=footer-tabs-hire.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suport_help_suport_help__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_ft_about_ft__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_account_account__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//provider
//import { ConfigProvider } from '../../providers/config/config';

var SetingsPage = /** @class */ (function () {
    function SetingsPage(navCtrl, navParams, configProv, app, menu, events, accountProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.app = app;
        this.menu = menu;
        this.events = events;
        this.accountProv = accountProv;
        this.sesionObject = [{}];
        this.configProv.getSesionObject().then(function (sesion) { _this.sesionObject = sesion; console.log(_this.sesionObject); }).catch(function (error) { return console.error(error); });
    }
    SetingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetingsPage');
    };
    SetingsPage.prototype.supportHelp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__suport_help_suport_help__["a" /* SuportHelpPage */]);
        console.log('SuppHelp');
    };
    SetingsPage.prototype.aboutFT = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_ft_about_ft__["a" /* AboutFtPage */]);
    };
    SetingsPage.prototype.ratePayments = function () {
        this.navCtrl.push('RatePaymentsPage');
    };
    SetingsPage.prototype.linkAccounts = function () {
        this.navCtrl.push('LinkedAccountsPage', { edit: false });
    };
    SetingsPage.prototype.idVerification = function () {
        this.navCtrl.push('IdVerificationPage', { edit: false });
    };
    SetingsPage.prototype.delete = function () {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.id_user = sesion.id;
            _this.accountProv.eliminarusuario({ id_user: _this.id_user }).subscribe(function (data) {
                console.log('Id_user: ', _this.id_user);
                console.log('Datos del api regreso No: ', data);
            }, function (error) { return console.error(error); });
            _this.configProv.removeSesionObject();
            _this.configProv.removeTheme();
            localStorage.clear();
            _this.menu.enable(false);
            //this.menu.close();
            //this.events.publish('user:logout');
            //this.app.getRootNavs()[0].setRoot(HomePage);
            //this.app.getRootNavs()[0].setRoot(HomePage);
            //this.navCtrl.setRoot(HomePage);
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            _this.navCtrl.popToRoot();
            //root.popToRoot(); 
            //this.navCtrl.parent.setRoot(HomePage);
            /* this.navCtrl.setPages([
              { page: HomePage }
            ]); */
            console.log("Logout");
            //this.authService.logout();
            //this.app.getRootNav().setRoot(HomePage);
            //nav.setRoot(LoginPage);
        }, function (error) { return console.error(error); });
    };
    SetingsPage.prototype.logout = function () {
        this.configProv.removeSesionObject();
        this.configProv.removeTheme();
        localStorage.clear();
        this.menu.enable(false);
        //this.menu.close();
        //this.events.publish('user:logout');
        //this.app.getRootNavs()[0].setRoot(HomePage);
        //this.app.getRootNavs()[0].setRoot(HomePage);
        //this.navCtrl.setRoot(HomePage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        this.navCtrl.popToRoot();
        //root.popToRoot(); 
        //this.navCtrl.parent.setRoot(HomePage);
        /* this.navCtrl.setPages([
          { page: HomePage }
        ]); */
        console.log("Logout");
        //this.authService.logout();
        //this.app.getRootNav().setRoot(HomePage);
        //nav.setRoot(LoginPage);
    };
    SetingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setings',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\setings\setings.html"*/'<!--\n\n  Generated template for the SetingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="seccion">\n\n    <h1 no-margin><b>Settings</b></h1>\n\n  </div>\n\n\n\n  <div class="list-avatar-page">\n\n    <ion-list>\n\n      <ion-item text-uppercase>\n\n        <ion-toggle checked="true"></ion-toggle>\n\n        <ion-label>\n\n          Notifications\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item text-uppercase (click)="ratePayments()" *ngIf="sesionObject.tipo_usuario==2">\n\n        <ion-label>\n\n          Rate and payments\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item text-uppercase (click)="linkAccounts()" *ngIf="sesionObject.tipo_usuario==3">\n\n        <ion-label>\n\n          Link accounts\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item text-uppercase (click)="idVerification()">\n\n        <ion-label>\n\n          Id verification\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item text-uppercase (click)="supportHelp()">\n\n        <ion-label>\n\n          Support and help\n\n        </ion-label>\n\n      </ion-item>\n\n      <!-- \n\n        <ion-item text-uppercase (click)="aboutFT()">\n\n        <ion-label>\n\n          About filmtrade\n\n        </ion-label>\n\n      </ion-item>\n\n      -->\n\n      <!-- <ion-item text-uppercase (click)="logout()">\n\n        <ion-label>\n\n          Log out\n\n        </ion-label>\n\n      </ion-item> -->\n\n      <ion-item (click)="delete()" text-uppercase>\n\n        <button menuClose ion-item style="color:red">\n\n          Delete account\n\n        </button>\n\n      </ion-item>\n\n      <!--\n\n      <ion-item text-uppercase>\n\n        <ion-label style="color:red">\n\n          Delete account\n\n        </ion-label>\n\n      </ion-item>\n\n      -->\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs *ngIf="sesionObject.tipo_usuario==2"></footer-tabs>\n\n  <footer-tabs-hire *ngIf="sesionObject.tipo_usuario==3"></footer-tabs-hire>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\setings\setings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_6__providers_account_account__["a" /* AccountProvider */]])
    ], SetingsPage);
    return SetingsPage;
}());

//# sourceMappingURL=setings.js.map

/***/ })

});
//# sourceMappingURL=0.js.map