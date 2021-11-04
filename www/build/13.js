webpackJsonp([13],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_hire_footer_tabs_hire_module__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_hire_footer_tabs_hire_module__["a" /* FooterTabsHireComponentModule */]
            ],
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());

//# sourceMappingURL=favorites.module.js.map

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

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers


var FavoritesPage = /** @class */ (function () {
    /**
     * Contructor of the class
     * @param navCtrl   NavController
     * @param navParams NavParams
     * @param alertCtrl AlertController
     */
    function FavoritesPage(navCtrl, navParams, configProv, accountProv, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.toastCtrl = toastCtrl;
        this.listFavorites = [];
        this.configProv.getSesionObject().then(function (sesion) {
            console.log('Este es el id Favorites: ', sesion.id);
            _this.id = sesion.id;
            _this.configProv.getListFavorites(sesion.id).subscribe(function (data) {
                _this.listFavorites = data['user'];
                console.log('Arreglo favoritos: ', _this.listFavorites);
                if (_this.listFavorites == null) {
                    var toast = _this.toastCtrl.create({
                        message: 'No favorite users',
                        duration: 3000
                    });
                    toast.present();
                }
                else {
                    _this.listFavorites.forEach(function (element, index) {
                        var resultado = _this.listFavorites.find(function (user) { return user.id === element.id; });
                        if (resultado != null) {
                            _this.listFavorites[index].enable = true;
                        }
                        else {
                            _this.listFavorites[index].enable = false;
                        }
                    });
                }
            });
        }).catch(function (error) { return console.error(error); });
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.addFavoritos = function (i, event) {
        var _this = this;
        if (this.listFavorites[i].enable == true) {
            console.log('IndexF: ', 'idu:', event.id, 'idf:', this.id);
            this.accountProv.eliminarFavoritoNotificacion({ idu: this.id, idf: event.id }).subscribe(function (data) {
                var d = data;
                console.log('Api agregarFavorito: ', d);
                if (d != null) {
                    var toast = _this.toastCtrl.create({
                        message: 'User removed from your favorites',
                        duration: 3000
                    });
                    toast.present();
                    _this.configProv.getListFavorites(String(_this.id)).subscribe(function (data) {
                        _this.listFavorites = data['user'];
                        console.log('Arreglo favoritos remove: ', _this.listFavorites);
                        if (_this.listFavorites != null) {
                            var _loop_1 = function (item, index) {
                                var resultado = _this.listFavorites.find(function (user) { return user.id === item.id; });
                                if (resultado != null) {
                                    _this.listFavorites[index].enable = true;
                                }
                                else {
                                    _this.listFavorites[index].enable = false;
                                }
                            };
                            for (var _i = 0, _a = _this.listFavorites.map(function (item, index) { return ({ item: item, index: index }); }); _i < _a.length; _i++) {
                                var _b = _a[_i], item = _b.item, index = _b.index;
                                _loop_1(item, index);
                            }
                        }
                    }, function (error) { return console.error(error); });
                }
            }), function (error) { return console.error(error); };
            this.visible = false;
            this.listFavorites[i].enable = this.visible;
        }
        else {
            this.configProv.getListFavorites(String(this.id)).subscribe(function (data) {
                _this.listFavorites = data['user'];
                if (_this.listFavorites != null) {
                    var resultado = _this.listFavorites.find(function (user) { return user.id === event.id; });
                    if (resultado != null) {
                        var toast = _this.toastCtrl.create({
                            message: 'The user is already in your favorites',
                            duration: 3000
                        });
                        toast.present();
                    }
                    else {
                        _this.accountProv.agregarFavorito({ id: _this.id, idf: event.id }).subscribe(function (data) {
                            var d = data;
                            var toast = _this.toastCtrl.create({
                                message: 'User added to your favorites',
                                duration: 3000
                            });
                            toast.present();
                        }, function (error) { return console.error(error); });
                        _this.visible = true;
                        _this.listFavorites[i].enable = _this.visible;
                        _this.configProv.getListFavorites(String(_this.id)).subscribe(function (data) {
                            _this.listFavorites = data['user'];
                            console.log('Arreglo favoritos add1: ', _this.listFavorites);
                            if (_this.listFavorites != null) {
                                var _loop_2 = function (item, index) {
                                    var resultado_1 = _this.listFavorites.find(function (user) { return user.id === item.id; });
                                    if (resultado_1 != null) {
                                        _this.listFavorites[index].enable = true;
                                    }
                                    else {
                                        _this.listFavorites[index].enable = false;
                                    }
                                };
                                for (var _i = 0, _a = _this.listFavorites.map(function (item, index) { return ({ item: item, index: index }); }); _i < _a.length; _i++) {
                                    var _b = _a[_i], item = _b.item, index = _b.index;
                                    _loop_2(item, index);
                                }
                            }
                        }, function (error) { return console.error(error); });
                    }
                }
                else {
                    console.log('No hay favoritos');
                    _this.accountProv.agregarFavorito({ id: _this.id, idf: event.id }).subscribe(function (data) {
                        var d = data;
                        console.log('Api agregarFavorito: ', d);
                        var toast = _this.toastCtrl.create({
                            message: 'User added to your favorites',
                            duration: 3000
                        });
                        toast.present();
                    }, function (error) { return console.error(error); });
                    _this.visible = true;
                    _this.listFavorites[i].enable = _this.visible;
                    _this.configProv.getListFavorites(String(_this.id)).subscribe(function (data) {
                        _this.listFavorites = data['user'];
                        console.log('Arreglo favoritos add: ', _this.listFavorites);
                        if (_this.listFavorites != null) {
                            var _loop_3 = function (item, index) {
                                var resultado = _this.listFavorites.find(function (user) { return user.id === item.id; });
                                if (resultado != null) {
                                    _this.listFavorites[index].enable = true;
                                }
                                else {
                                    _this.listFavorites[index].enable = false;
                                }
                            };
                            for (var _i = 0, _a = _this.listFavorites.map(function (item, index) { return ({ item: item, index: index }); }); _i < _a.length; _i++) {
                                var _b = _a[_i], item = _b.item, index = _b.index;
                                _loop_3(item, index);
                            }
                        }
                    }, function (error) { return console.error(error); });
                }
            }, function (error) { return console.error(error); });
        }
    };
    FavoritesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.configProv.getListFavorites(sesion.id).subscribe(function (data) {
                _this.listFavorites = data['user'];
                console.log('Arreglo favoritos: ', _this.listFavorites);
                if (_this.listFavorites == null) {
                    var toast = _this.toastCtrl.create({
                        message: 'No favorite users',
                        duration: 3000
                    });
                    toast.present();
                }
                else {
                    _this.listFavorites.forEach(function (element, index) {
                        var resultado = _this.listFavorites.find(function (user) { return user.id === element.id; });
                        if (resultado != null) {
                            _this.listFavorites[index].enable = true;
                        }
                        else {
                            _this.listFavorites[index].enable = false;
                        }
                    });
                }
            });
        }).catch(function (error) { return console.error(error); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\favorites\favorites.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Favorites</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n  <div class="seccion">\n\n    <h1 no-margin><b>Favorites</b></h1>\n\n    <p no-margin>Hire again your favorite artists</p>\n\n  </div>\n\n\n\n  <div class="list-avatar-page">\n\n    <ion-list>\n\n      <ion-item *ngFor="let list of listFavorites; let i = index">\n\n        <ion-avatar item-start>\n\n          <img [src]="list.foto">\n\n        </ion-avatar>\n\n        <h6><b>{{ list.nombre }}</b></h6>\n\n        <p text-uppercase *ngIf="list.ocupation != null">{{ list.ocupation }} |</p>\n\n        <p text-uppercase *ngIf="list.compania != null">{{ list.compania }} |</p>\n\n        <p text-uppercase>{{ list.estado }}</p>\n\n        <ion-note item-end>\n\n          <ion-icon (click)="addFavoritos(i,list)" color="{{(list.ocupation == \'Photographer\')?\'photographer\':((list.ocupation == \'Videographer\')?\'videographer\':((list.ocupation == \'Hair\')?\'makeup\':\'talent\'))}}"\n\n            [name]="listFavorites[i].enable ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n        </ion-note>\n\n        <ion-note item-end>\n\n          <ion-icon name=\'star\'></ion-icon>\n\n        </ion-note>\n\n        <ion-note item-end>{{ list.calificacion }}</ion-note>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs-hire></footer-tabs-hire>  \n\n</ion-footer>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ })

});
//# sourceMappingURL=13.js.map