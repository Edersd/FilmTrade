webpackJsonp([6],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilWorkPageModule", function() { return PerfilWorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_work__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_tabs_footer_tabs_module__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PerfilWorkPageModule = /** @class */ (function () {
    function PerfilWorkPageModule() {
    }
    PerfilWorkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil_work__["a" /* PerfilWorkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil_work__["a" /* PerfilWorkPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_tabs_footer_tabs_module__["a" /* FooterTabsComponentModule */]
            ],
        })
    ], PerfilWorkPageModule);
    return PerfilWorkPageModule;
}());

//# sourceMappingURL=perfil-work.module.js.map

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

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [],
            exports: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__portfolio_work_portfolio_work__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_pakage_work_select_pakage_work__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//component

//interfaces

//providers


//page


var PerfilWorkPage = /** @class */ (function () {
    function PerfilWorkPage(navCtrl, navParams, imageViewerCtrl, actionCtrl, configProv, modalCtrl, acoutProv, toatCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this.actionCtrl = actionCtrl;
        this.configProv = configProv;
        this.modalCtrl = modalCtrl;
        this.acoutProv = acoutProv;
        this.toatCtrl = toatCtrl;
        this.images = ['1.png', '2.png', '3.png', '4.png'];
        this.sesionObject = {};
        this.selected = false;
        this.serviceDescription = { id: 0 };
        this.configProv.getSesionObject().then(function (sesion) {
            _this.id = sesion.id;
            _this.configProv.getAllPerfil(sesion.id).subscribe(function (sesion) {
                _this.sesionObject.occupationType = sesion['tipo_usuario'];
                console.log('DATOS WORK PERFIL:', sesion);
                _this.sesionObject = sesion;
                if (_this.sesionObject.ocupation == "Photographer") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].PHOTOGRAPHER;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].PHOTOGRAPHER;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].PHOTOGRAPHER);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                else if (_this.sesionObject.ocupation == "Videographer") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].VIDEOGRAPHER;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].VIDEOGRAPHER;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].VIDEOGRAPHER);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                else if (_this.sesionObject.ocupation == "Hair") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].HAIR_MAKEUP;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].HAIR_MAKEUP;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].HAIR_MAKEUP);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                else if (_this.sesionObject.ocupation == "Talent") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].TALENT;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].TALENT;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].TALENT);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                var stringFoto = sesion['galeria'];
                if (sesion['galeria'] != null) {
                    var arrayFoto = stringFoto.split(',');
                    _this.sesionObject.galeria = arrayFoto;
                }
            }, function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
    }
    PerfilWorkPage.prototype.ionViewWillEnter = function () {
    };
    /**
     * [presentImage description]
     * @param myImage [description]
     */
    PerfilWorkPage.prototype.presentImage = function (myImage) {
        var imageViewer = this.imageViewerCtrl.create(myImage);
        imageViewer.present();
        //setTimeout(() => imageViewer.dismiss(), 3000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    /* CalendarModal */
    PerfilWorkPage.prototype.presentActionSheet = function () {
        var _this = this;
        var daysConfig = [];
        var dates = [];
        console.log('Dias inicio', this.sesionObject.dias, this.sesionObject.dias.length);
        if (this.sesionObject.dias.length != undefined) {
            this.sesionObject.dias.forEach(function (element, loop) { return dates.push(element); });
            for (var i = 0; i < dates.length; i++) {
                var currentNumber = dates[i];
                var subCadena = currentNumber.substring(10, 8);
                var yymm = currentNumber.substring(8, 0);
                daysConfig.push({
                    date: new Date(yymm + String(Number(subCadena) + 1)),
                    disable: false,
                    subTitle: 'Disable',
                });
            }
        }
        var options = {
            daysConfig: daysConfig,
            title: 'Available days',
            format: 'YYYY-MM-DD',
            pickMode: 'multi',
            closeIcon: true,
            doneIcon: true,
            defaultDates: (this.sesionObject.dias != undefined) ? this.sesionObject.dias : null
        };
        var calendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModal"], {
            options: options
        });
        calendar.onDidDismiss(function (date, type) {
            if (type == 'done') {
                var dates_1 = [];
                date.forEach(function (element, loop) { return dates_1.push(element.string); });
                _this.sesionObject.dias = dates_1;
                _this.sesionObject.occupationType = 2;
                _this.configProv.setAllPerfil(_this.sesionObject);
                console.log(dates_1, '-', String(_this.sesionObject.dias));
                _this.acoutProv.existenDias(_this.id).subscribe(function (datae) {
                    if (datae.mensaje === 'Si tiene dias insertados') {
                        _this.acoutProv.actualizarDias({ id: _this.id, dia: String(_this.sesionObject.dias) }).subscribe(function (dias) {
                            var toast = _this.toatCtrl.create({
                                duration: 2000,
                                message: 'Updated days',
                                position: 'bottom'
                            });
                            toast.present();
                        }, function (error) { return console.error(error); });
                    }
                    else {
                        _this.acoutProv.diasHabiles({ id: _this.id, di: String(_this.sesionObject.dias) }).subscribe(function (dias) {
                            var toast = _this.toatCtrl.create({
                                duration: 2000,
                                message: 'Days added',
                                position: 'bottom'
                            });
                            toast.present();
                        }, function (error) { return console.error(error); });
                    }
                }, function (error) { return console.error(error); });
            }
        });
        calendar.present();
    };
    /**
     * [change description]
     * @param type [description]
     */
    PerfilWorkPage.prototype.change = function (type) {
        if (type === this.serviceDescription.id) {
            this.selected = false;
            this.serviceDescription.id = 0;
        }
        else {
            this.selected = true;
            switch (type) {
                case 1:
                    this.serviceDescription.id = type;
                    this.serviceDescription.name = 'Basic';
                    this.serviceDescription.generalTime = 3;
                    this.serviceDescription.extendedTime = 1;
                    break;
                case 2:
                    this.serviceDescription.id = type;
                    this.serviceDescription.name = 'Gold';
                    this.serviceDescription.generalTime = 5;
                    this.serviceDescription.extendedTime = 1;
                    break;
                case 3:
                    this.serviceDescription.id = type;
                    this.serviceDescription.name = 'Premium';
                    this.serviceDescription.generalTime = 8;
                    this.serviceDescription.extendedTime = 1;
                    break;
            }
        }
    };
    PerfilWorkPage.prototype.openPortfolioPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__portfolio_work_portfolio_work__["a" /* PortfolioWorkPage */], { edit: false });
    };
    PerfilWorkPage.prototype.openPackagePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__select_pakage_work_select_pakage_work__["a" /* SelectPakageWorkPage */], { edit: false });
    };
    PerfilWorkPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.id = sesion.id;
            _this.configProv.getAllPerfil(sesion.id).subscribe(function (sesion) {
                console.log('DATOS WORK PERFIL:', sesion);
                _this.sesionObject = sesion;
                if (_this.sesionObject.ocupation == "Photographer") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].PHOTOGRAPHER;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].PHOTOGRAPHER;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].PHOTOGRAPHER);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                else if (_this.sesionObject.ocupation == "Videographer") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].VIDEOGRAPHER;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].VIDEOGRAPHER;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].VIDEOGRAPHER);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                else if (_this.sesionObject.ocupation == "Hair") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].HAIR_MAKEUP;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].HAIR_MAKEUP;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].HAIR_MAKEUP);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                else if (_this.sesionObject.ocupation == "Talent") {
                    _this.sesionObject.theme = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].TALENT;
                    _this.sesionObject.occupationType = __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["a" /* OccupationType */].TALENT;
                    _this.configProv.setTheme(__WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].TALENT);
                    console.log(_this.sesionObject.theme, _this.sesionObject.occupationType);
                }
                var stringFoto = sesion['galeria'];
                if (sesion['galeria'] != null) {
                    var arrayFoto = stringFoto.split(',');
                    _this.sesionObject.galeria = arrayFoto;
                }
            }, function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    PerfilWorkPage.prototype.isVideo = function (url) {
        return url.includes('.mp4');
    };
    PerfilWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\perfil-work\perfil-work.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ sesionObject.nombre }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <div class="seccionPerfil">\n\n  </div>\n\n  <img class="img" [src]="(sesionObject.foto != null && sesionObject.foto != undefined)?sesionObject.foto:\'../../assets/imgs/logo.png\'" />\n\n  <ion-grid>\n\n    <h4 text-center>{{ sesionObject.nombre }}</h4>\n\n    <b text-center>\n\n      <div [ngSwitch]="sesionObject.ocupation">\n\n        <h1 *ngSwitchCase="\'Photographer\'">{{sesionObject.ocupation}}</h1>\n\n        <h1 *ngSwitchCase="\'Videographer\'">Videographer</h1>\n\n        <h1 *ngSwitchCase="\'Hair\'">Hair & Makeup</h1>\n\n        <h1 *ngSwitchCase="\'Talent\'">Talent</h1>\n\n      </div>\n\n\n\n    </b>\n\n    <ion-row align-items-center justify-content-center>\n\n      <ion-col col-auto align-self-center text-center>\n\n        <p *ngIf="sesionObject.terminados != null"><b>{{ sesionObject.terminados }} jobs</b></p>\n\n        <p *ngIf="sesionObject.terminados == null"><b>0 jobs</b></p>\n\n        <p text-uppercase>Completed</p>\n\n      </ion-col>\n\n      <ion-col col-auto offset-1>\n\n        <ion-avatar item-start>\n\n          <img class="imgStart" src=" ../../assets/icon/favorito.png">\n\n        </ion-avatar>\n\n      </ion-col>\n\n      <ion-col col-auto>\n\n        <h5><b>{{ sesionObject.calificacion }}</b></h5>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid padding style="background: ghostwhite;">\n\n    <ion-card>\n\n      <ion-card-header no-padding no-margin>\n\n        <ion-row no-padding no-margin>\n\n          <ion-col align-self-center text-center>\n\n            Available days\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content text-center>\n\n        <button ion-button color="{{(sesionObject.ocupation == \'Photographer\')?\'photographer\':((sesionObject.ocupation == \'Videographer\')?\'videographer\':((sesionObject.ocupation == \'Hair\')?\'makeup\':\'transparent\'))}}"\n\n          large text-center text-wrap padding (click)="presentActionSheet()" style="text-transform: none;">Add or\n\n          change the days you\n\n          are\n\n          available</button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="(sesionObject.galeria != null && sesionObject.galeria != undefined)">\n\n      <ion-card-header no-padding no-margin>\n\n        <ion-row no-padding no-margin>\n\n          <ion-col align-self-center text-center>\n\n            Galery\n\n          </ion-col>\n\n          <ion-col col-auto align-self-center text-center>\n\n            <button ion-button clear color="using" no-margin no-padding padding-right (click)="openPortfolioPage()">\n\n              <ion-icon name=\'brush\'></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content >\n\n        <ion-slides class="image-slider" loop="true" slidesPerView="2" >\n\n          <ion-slide *ngFor="let img of sesionObject.galeria; let i = index" align-content="align-self-center">\n\n\n\n            <div *ngIf=" !img.includes(\'.mp4\') ;else showVideo">\n\n              <img [src]="img" class="thumb-img" #myImage (click)="presentImage(myImage)">\n\n            </div>\n\n\n\n            <ng-template #showVideo>\n\n              <div class="thumb-img">\n\n                  <video controls="true" width=\'100%\' height=\'100%\' [src]="img" type=\'video/mp4\'></video>\n\n              </div>\n\n            </ng-template>\n\n\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header no-padding no-margin (click)="change(0)">\n\n        <ion-row no-padding no-margin>\n\n          <ion-col align-self-center text-center>\n\n            Packages\n\n          </ion-col>\n\n          <ion-col col-auto align-self-center text-center>\n\n            <button ion-button clear color="using" no-margin no-padding padding-right (click)="openPackagePage()">\n\n              <ion-icon name=\'brush\'></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content text-center>\n\n        <ion-grid no-padding>\n\n          <ion-row justify-content-center align-items-center>\n\n            <ion-col *ngIf="sesionObject.basic != 0" col-4 (click)="change(1)">\n\n              <p ion-text color="using"><b>${{ sesionObject.basic }}</b></p>\n\n              <p ion-text color="usingg">Basic</p>\n\n              <p ion-text color="dark">3 hrs</p>\n\n            </ion-col>\n\n            <ion-col *ngIf="sesionObject.gold != 0" col-4 (click)="change(2)">\n\n              <p ion-text color="using"><b>${{ sesionObject.gold }}</b></p>\n\n              <p ion-text color="usingg">Gold</p>\n\n              <p ion-text color="dark">5 hrs</p>\n\n            </ion-col>\n\n            <ion-col *ngIf="sesionObject.premium != 0" col-4 (click)="change(3)">\n\n              <p ion-text color="using"><b>${{ sesionObject.premium }}</b></p>\n\n              <p ion-text color="usingg">Premium</p>\n\n              <p ion-text color="dark">8 hrs</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <!-- <button ion-button full color="light" style="color: orange">Your projects</button>\n\n    <button ion-button full color="light" style="color: orange">Discover other freelance work\'s</button> -->\n\n\n\n\n\n  </ion-grid>\n\n  <!-- <ion-fab right bottom>\n\n    <button ion-fab color="primary">\n\n      <ion-icon name="mail"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab>\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="logo-twitter"></ion-icon>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="logo-vimeo"></ion-icon>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="logo-googleplus"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs></footer-tabs>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\perfil-work\perfil-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_6__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], PerfilWorkPage);
    return PerfilWorkPage;
}());

//# sourceMappingURL=perfil-work.js.map

/***/ })

});
//# sourceMappingURL=6.js.map