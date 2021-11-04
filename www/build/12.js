webpackJsonp([12],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsHirePageModule", function() { return NotificationsHirePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_hire__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_hire_footer_tabs_hire_module__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationsHirePageModule = /** @class */ (function () {
    function NotificationsHirePageModule() {
    }
    NotificationsHirePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications_hire__["a" /* NotificationsHirePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications_hire__["a" /* NotificationsHirePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_hire_footer_tabs_hire_module__["a" /* FooterTabsHireComponentModule */]
            ],
        })
    ], NotificationsHirePageModule);
    return NotificationsHirePageModule;
}());

//# sourceMappingURL=notifications-hire.module.js.map

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

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsHirePage; });
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


//Modals

//provider


var NotificationsHirePage = /** @class */ (function () {
    function NotificationsHirePage(navCtrl, navParams, configProv, accountProv, alertCtrl, toastCtrl, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.usersNotifications = [{}];
        this.notifications = [{}];
        this.buttonIcon = "home";
        this.listFavorites = [];
        this.serviceDescription = { days: 0 };
        this._date = new Date();
        this.usuarioCorecto = [{}];
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            _this.accountProv.notificaciones(sesion.id).subscribe(function (data) {
                var noti = data['user'];
                _this.usersNotifications = data['user'];
                _this.notifications = noti;
                console.log('Datos del api regreso No: ', _this.notifications);
                /* for (let i = 0; i < this.notifications.length; i++) {
                  this.notifications[i].enable = false;
                } */
            }, function (error) { return console.error(error); });
            _this.configProv.getListFavorites(sesion.id).subscribe(function (data) {
                _this.listFavorites = data['user'];
                console.log('Arreglo favoritos: ', _this.listFavorites);
                if (_this.listFavorites == null) {
                    if (_this.notifications != null) {
                        for (var i = 0; i < _this.notifications.length; i++) {
                            _this.notifications[i].enable = false;
                        }
                    }
                }
                else {
                    _this.notifications.forEach(function (element, index) {
                        var resultado = _this.listFavorites.find(function (user) { return user.id === element.id; });
                        if (resultado != null) {
                            _this.notifications[index].enable = true;
                        }
                        else {
                            _this.notifications[index].enable = false;
                        }
                    });
                }
            });
        }).catch(function (error) { return console.error(error); });
    }
    /**
     * Delete the notification from list
     * @param i Index of notification to delete
     */
    NotificationsHirePage.prototype.delete = function (i, event) {
        var _this = this;
        var mensajeT = "Are you sure you want to remove " + event.nombre + " from your list?";
        var alert = this.alertCtrl.create({
            title: mensajeT,
            buttons: [
                {
                    role: 'cancel',
                    text: 'Cancel'
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.notifications.splice(i, 1);
                        console.log('Datos del user: ', event.id_proyecto, event.id);
                        _this.accountProv.cancelarServicio({ id_pro: event.id_proyecto, id_work: event.id }).subscribe(function (data) {
                            var d = data;
                            console.log('Datos del api regreso No: ', d);
                        }, function (error) { return console.error(error); });
                    }
                }
            ]
        });
        alert.present();
    };
    /**
     * Function to accept projects
     * @param i Index of notificacion
     */
    NotificationsHirePage.prototype.accept = function (i) {
        this.navCtrl.push('ProjectsWorkPage');
    };
    NotificationsHirePage.prototype.addFavoritos = function (i, event) {
        var _this = this;
        if (this.notifications[i].enable == true) {
            console.log('IndexF: ', 'idu:', event.id, 'idf:', this.id_user);
            this.accountProv.eliminarFavoritoNotificacion({ idu: this.id_user, idf: event.id }).subscribe(function (data) {
                var d = data;
                console.log('Api agregarFavorito: ', d);
                if (d != null) {
                    var toast = _this.toastCtrl.create({
                        message: 'User removed from your favorites',
                        duration: 3000
                    });
                    //toast.present();
                    _this.configProv.getListFavorites(String(_this.id_user)).subscribe(function (data) {
                        _this.listFavorites = data['user'];
                        console.log('Arreglo favoritos remove: ', _this.listFavorites);
                        if (_this.listFavorites != null) {
                            var _loop_1 = function (item, index) {
                                var resultado = _this.listFavorites.find(function (user) { return user.id === item.id; });
                                if (resultado != null) {
                                    _this.notifications[index].enable = true;
                                }
                                else {
                                    _this.notifications[index].enable = false;
                                }
                            };
                            for (var _i = 0, _a = _this.notifications.map(function (item, index) { return ({ item: item, index: index }); }); _i < _a.length; _i++) {
                                var _b = _a[_i], item = _b.item, index = _b.index;
                                _loop_1(item, index);
                            }
                        }
                    }, function (error) { return console.error(error); });
                }
            }), function (error) { return console.error(error); };
            this.visible = false;
            this.notifications[i].enable = this.visible;
        }
        else {
            this.configProv.getListFavorites(String(this.id_user)).subscribe(function (data) {
                _this.listFavorites = data['user'];
                if (_this.listFavorites != null) {
                    var resultado = _this.listFavorites.find(function (user) { return user.id === event.id; });
                    if (resultado != null) {
                        var toast = _this.toastCtrl.create({
                            message: 'The user is already in your favorites',
                            duration: 3000
                        });
                        //toast.present();
                    }
                    else {
                        _this.accountProv.agregarFavorito({ id: _this.id_user, idf: event.id }).subscribe(function (data) {
                            var d = data;
                            var toast = _this.toastCtrl.create({
                                message: 'User added to your favorites',
                                duration: 3000
                            });
                            //toast.present();
                        }, function (error) { return console.error(error); });
                        _this.visible = true;
                        _this.notifications[i].enable = _this.visible;
                        _this.configProv.getListFavorites(String(_this.id_user)).subscribe(function (data) {
                            _this.listFavorites = data['user'];
                            console.log('Arreglo favoritos add1: ', _this.listFavorites);
                            if (_this.listFavorites != null) {
                                var _loop_2 = function (item, index) {
                                    var resultado_1 = _this.listFavorites.find(function (user) { return user.id === item.id; });
                                    if (resultado_1 != null) {
                                        _this.notifications[index].enable = true;
                                    }
                                    else {
                                        _this.notifications[index].enable = false;
                                    }
                                };
                                for (var _i = 0, _a = _this.notifications.map(function (item, index) { return ({ item: item, index: index }); }); _i < _a.length; _i++) {
                                    var _b = _a[_i], item = _b.item, index = _b.index;
                                    _loop_2(item, index);
                                }
                            }
                        }, function (error) { return console.error(error); });
                    }
                }
                else {
                    console.log('No hay favoritos');
                    _this.accountProv.agregarFavorito({ id: _this.id_user, idf: event.id }).subscribe(function (data) {
                        var d = data;
                        console.log('Api agregarFavorito: ', d);
                        var toast = _this.toastCtrl.create({
                            message: 'User added to your favorites',
                            duration: 3000
                        });
                        toast.present();
                    }, function (error) { return console.error(error); });
                    _this.visible = true;
                    _this.notifications[i].enable = _this.visible;
                    _this.configProv.getListFavorites(String(_this.id_user)).subscribe(function (data) {
                        _this.listFavorites = data['user'];
                        console.log('Arreglo favoritos add: ', _this.listFavorites);
                        if (_this.listFavorites != null) {
                            var _loop_3 = function (item, index) {
                                var resultado = _this.listFavorites.find(function (user) { return user.id === item.id; });
                                if (resultado != null) {
                                    _this.notifications[index].enable = true;
                                }
                                else {
                                    _this.notifications[index].enable = false;
                                }
                            };
                            for (var _i = 0, _a = _this.notifications.map(function (item, index) { return ({ item: item, index: index }); }); _i < _a.length; _i++) {
                                var _b = _a[_i], item = _b.item, index = _b.index;
                                _loop_3(item, index);
                            }
                        }
                    }, function (error) { return console.error(error); });
                }
            }, function (error) { return console.error(error); });
        }
    };
    NotificationsHirePage.prototype.viewModal = function (event) {
        var _this = this;
        var fechaCorta = new Date().toISOString();
        var dia = String(this._date).substr(8, 8);
        var horaDis = String(this._date).substr(15, 17);
        console.log('Fecha dis', fechaCorta.substr(0, 7), dia.substr(0, 2));
        console.log('Hora dis', horaDis.substr(1, 5));
        fechaCorta = fechaCorta.substr(0, 7) + '-' + dia.substr(0, 2);
        this.accountProv.estatusUsuarioProyecto({ id: event.id, id_pro: event.id_proyecto }).subscribe(function (sesion) {
            var d = sesion;
            if (d != null || d != undefined) {
                if (d.user['status'] == 'Finalizado') {
                    var toast = _this.toastCtrl.create({
                        message: 'The work is finished',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (d.user['status'] == 'Agendado') {
                    console.log(event.id, event.id_proyecto);
                    _this.accountProv.infoProyecto({ id: event.id, id_pro: event.id_proyecto }).subscribe(function (data) {
                        _this.usuarioCorecto = data['datos'];
                        console.log(_this.usuarioCorecto, _this.usuarioCorecto.fecha_trabajo[_this.usuarioCorecto.fecha_trabajo.length - 1]);
                        var hora = horaDis.substr(1, 5);
                        var horaif = _this.formatAMPM(hora.split(':'));
                        var horaiff = _this.formatAMPMF(_this.usuarioCorecto.hora.split(':'), _this.usuarioCorecto.tipo_paquete);
                        console.log('Fecha bien', fechaCorta);
                        var resultado = _this.usuarioCorecto.fecha_trabajo.find(function (fecha) { return fecha == fechaCorta.substr(0, 10); });
                        console.log(resultado);
                        if (resultado != undefined) {
                            if ((horaif.substr(0, 2) >= horaiff.substr(0, 2)) && (horaif.substr(3, 6) >= horaiff.substr(3, 6)) && (horaif.substr(6, 9) == horaiff.substr(6, 9))) {
                                console.log('El trabajo ha terminado');
                                var myModalOptions = {
                                    enableBackdropDismiss: false,
                                    showBackdrop: false,
                                    cssClass: 'my-modal-inner'
                                };
                                var modal = _this.modalCtrl.create('ModalCompletedWorkPage', { data: event }, myModalOptions);
                                modal.present();
                                var toast = _this.toastCtrl.create({
                                    message: 'Finished Status',
                                    duration: 3000
                                });
                                toast.present();
                            }
                            else {
                                var myModalOptions = {
                                    enableBackdropDismiss: false,
                                    showBackdrop: false,
                                    cssClass: 'my-modal-inner'
                                };
                                var modal = _this.modalCtrl.create('ModalAcceptedRequestPage', { data: event }, myModalOptions);
                                modal.present();
                                var toast = _this.toastCtrl.create({
                                    message: 'Scheduled Status',
                                    duration: 3000
                                });
                                toast.present();
                                console.log('Aun no es la hora de terminación');
                            }
                        }
                        else {
                            var myModalOptions = {
                                enableBackdropDismiss: false,
                                showBackdrop: false,
                                cssClass: 'my-modal-inner'
                            };
                            var modal = _this.modalCtrl.create('ModalAcceptedRequestPage', { data: event }, myModalOptions);
                            modal.present();
                            var toast = _this.toastCtrl.create({
                                message: 'Scheduled Status',
                                duration: 3000
                            });
                            toast.present();
                            console.log('Aun no termina los dias');
                        }
                    }, function (error) { return console.error(error); });
                }
            }
        }, function (error) { return console.error(error); });
    };
    NotificationsHirePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            _this.accountProv.notificaciones(sesion.id).subscribe(function (data) {
                var noti = data['user'];
                _this.usersNotifications = data['user'];
                _this.notifications = noti;
                console.log('Datos del api regreso No: ', _this.notifications);
                /* for (let i = 0; i < this.notifications.length; i++) {
                  this.notifications[i].enable = false;
                } */
            }, function (error) { return console.error(error); });
            _this.configProv.getListFavorites(sesion.id).subscribe(function (data) {
                _this.listFavorites = data['user'];
                console.log('Arreglo favoritos: ', _this.listFavorites);
                if (_this.listFavorites == null) {
                    if (_this.notifications != null) {
                        for (var i = 0; i < _this.notifications.length; i++) {
                            _this.notifications[i].enable = false;
                        }
                    }
                }
                else {
                    _this.notifications.forEach(function (element, index) {
                        var resultado = _this.listFavorites.find(function (user) { return user.id === element.id; });
                        if (resultado != null) {
                            _this.notifications[index].enable = true;
                        }
                        else {
                            _this.notifications[index].enable = false;
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
    //Horas
    NotificationsHirePage.prototype.formatAMPM = function (date) {
        console.log('Date entra', date);
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        console.log('Date sale', strTime);
        return strTime;
    };
    NotificationsHirePage.prototype.formatAMPMF = function (date, paquete) {
        var hours2 = date[0];
        var minutes = date[1];
        if (paquete == 'Basic') {
            hours2 = (Number(hours2) + Number(3)) > 24 ? (Number(hours2) + Number(3)) - Number(24) : (Number(hours2) + Number(3));
        }
        if (paquete == 'Gold') {
            hours2 = (Number(hours2) + Number(5)) > 24 ? (Number(hours2) + Number(5)) - Number(24) : (Number(hours2) + Number(5));
        }
        if (paquete == 'Premium') {
            hours2 = (Number(hours2) + Number(8)) > 24 ? (Number(hours2) + Number(8)) - Number(24) : (Number(hours2) + Number(8));
        }
        /* if (this.dataModalFinish.hora_extra != undefined) {
          hours2 = Number(hours2) + Number(1)
        } */
        var ampm = hours2 >= 12 ? 'pm' : 'am';
        hours2 = hours2 % 12;
        hours2 = hours2 ? hours2 : 12;
        hours2 = hours2 < 10 ? '0' + hours2 : hours2;
        minutes = minutes < 10 ? '' + minutes : minutes;
        var strTime = hours2 + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    NotificationsHirePage.prototype.convertTime12to24 = function (time12h) {
        var _a = time12h.split(' '), time = _a[0], modifier = _a[1];
        var _b = time.split(':'), hours = _b[0], minutes = _b[1];
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'pm') {
            hours = parseInt(hours, 10) + 12;
        }
        return hours + ':' + minutes;
    };
    NotificationsHirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications-hire',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\notifications-hire\notifications-hire.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <div class="seccion">\n\n    <h1 no-margin><b>Notifications</b></h1>\n\n    <p no-margin>Check on the artist that accepted your invitation</p>\n\n  </div>\n\n\n\n  <div class="list-avatar-page">\n\n    <ion-list *ngIf="notifications != null || notifications != undefined">\n\n      <ion-item-sliding *ngFor="let notification of notifications; let i = index">\n\n        <ion-item>\n\n          <ion-avatar item-start (click)="viewModal(notification)">\n\n            <img [src]="notification.foto">\n\n          </ion-avatar>\n\n          <div (click)="viewModal(notification)">\n\n            <h6><b>{{ notification.nombre }}</b></h6>\n\n            <p text-uppercase>{{ notification.ocupation }} |</p>\n\n            <p text-uppercase>{{ notification.nom_proyecto }}</p>\n\n            <div [ngSwitch]="notification.status">\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'En proceso\'"> In process</h6>\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'Agendado\'">Scheduled</h6>\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'Finalizado\'">Finished</h6>\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'Cancelado\'">Cancelled</h6>\n\n            </div>\n\n          </div>\n\n          <!-- [ngStyle]=\"{\'color\':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor }\" name=\"{{index <this.Math.round(this.parseFloat(rating)) ? activeIcon : defaultIcon}} -->\n\n          <ion-note item-end>\n\n            <ion-icon (click)="addFavoritos(i,notification)" color="{{(notification.ocupation == \'Photographer\')?\'photographer\':((notification.ocupation == \'Videographer\')?\'videographer\':((notification.ocupation == \'Hair\')?\'makeup\':\'talent\'))}}"\n\n              [name]="notifications[i].enable ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n          </ion-note>\n\n          <ion-note item-end>\n\n            <ion-icon name=\'star\' color="proceso"></ion-icon>\n\n          </ion-note>\n\n          <ion-note item-end>{{ notification.calificacion }}</ion-note>\n\n        </ion-item>\n\n        <ion-item-options side="left">\n\n          <button ion-button (click)="delete(i,notification)" color="danger">\n\n            <ion-icon name="md-close"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n        <ion-item-options side="right">\n\n          <button ion-button (click)="delete(i,notification)" color="danger">\n\n            <ion-icon name="md-close"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </div>\n\n  <p style="font-size: 15px; color: #dddddd; text-align: center; padding-left: 5%; padding-right: 5%">After 24 hrs without response your notifications will be deleted</p>\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs-hire></footer-tabs-hire>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\notifications-hire\notifications-hire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], NotificationsHirePage);
    return NotificationsHirePage;
}());

//# sourceMappingURL=notifications-hire.js.map

/***/ })

});
//# sourceMappingURL=12.js.map