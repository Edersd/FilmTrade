webpackJsonp([3],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function() { return ChatListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_list__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_tabs_hire_footer_tabs_hire_module__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatListPageModule = /** @class */ (function () {
    function ChatListPageModule() {
    }
    ChatListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__["a" /* FooterTabsComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_tabs_hire_footer_tabs_hire_module__["a" /* FooterTabsHireComponentModule */]
            ],
        })
    ], ChatListPageModule);
    return ChatListPageModule;
}());

//# sourceMappingURL=chat-list.module.js.map

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

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatListPage = /** @class */ (function () {
    function ChatListPage(navCtrl, navParams, angularDatabase, configProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularDatabase = angularDatabase;
        this.configProv = configProv;
        this.sesionObject = {};
    }
    ChatListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            console.log(sesion);
            _this.chatList = _this.angularDatabase.list('ionic/chats', function (ref) { return ref.orderByChild("guest/" + ((sesion.tipo_usuario === '2') ? 0 : 1) + "/idGuest").equalTo(sesion.id); });
            _this.chats = _this.chatList.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) { return (changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); })); }));
        }).catch(function (error) { return console.error(error); });
    };
    ChatListPage.prototype.openChat = function (item) {
        console.log(item);
        this.navCtrl.push('ChatRoomPage', { chat: item });
    };
    ChatListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-list',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\chat-list\chat-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Chats</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="seccion">\n\n    <h1 no-margin><b>Chats</b></h1>\n\n    <p no-margin>Get in touch with clients</p>\n\n  </div>\n\n\n\n  <div class="list-avatar-page">\n\n    <ion-list>\n\n      <ion-item *ngFor="let chat of chats | async" (click)="openChat(chat)">\n\n        <ion-avatar item-start>\n\n            <h6 *ngIf="sesionObject.tipo_usuario==2"> <img src="http://d-ies.com/FilmTrade/API/Media/{{ chat.guest[1].idGuest }}/Datos/3.jpg"></h6>\n\n            <h6 *ngIf="sesionObject.tipo_usuario==3"> <img src="http://d-ies.com/FilmTrade/API/Media/{{ chat.guest[0].idGuest }}/Datos/3.jpg"></h6>\n\n        </ion-avatar>\n\n        <h6 *ngIf="sesionObject.tipo_usuario==2"><b>{{ chat.guest[1].name }}</b></h6>\n\n        <h6 *ngIf="sesionObject.tipo_usuario==3"><b>{{ chat.guest[0].name }}</b></h6>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <p text-center ion-text color="usingg">Chats will be deleted after finishing each project</p>\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs *ngIf="sesionObject.tipo_usuario==2"></footer-tabs>\n\n  <footer-tabs-hire *ngIf="sesionObject.tipo_usuario==3"></footer-tabs-hire>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\chat-list\chat-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */]])
    ], ChatListPage);
    return ChatListPage;
}());

//# sourceMappingURL=chat-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map