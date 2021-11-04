webpackJsonp([8],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsWorkPageModule", function() { return NotificationsWorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_work__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationsWorkPageModule = /** @class */ (function () {
    function NotificationsWorkPageModule() {
    }
    NotificationsWorkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications_work__["a" /* NotificationsWorkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications_work__["a" /* NotificationsWorkPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__["a" /* FooterTabsComponentModule */]
            ],
        })
    ], NotificationsWorkPageModule);
    return NotificationsWorkPageModule;
}());

//# sourceMappingURL=notifications-work.module.js.map

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

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Notification } from '../../model/interfaces/interfaces';

//Modals

//provider


var NotificationsWorkPage = /** @class */ (function () {
    /**
     * Contructor of the class
     * @param navCtrl   NavController
     * @param navParams NavParams
     * @param alertCtrl AlertController
     */
    function NotificationsWorkPage(navCtrl, navParams, alertCtrl, angularDatabase, configProv, accountProv, toastCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.angularDatabase = angularDatabase;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.notifications = [];
        this.usersNotifications = [{}];
        this.buttonIcon = "home";
        this.listFavorites = [];
        this.dataUserModalAPI = [{}];
        this.dataSend = {};
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            _this.accountProv.notificacionesWork(sesion.id).subscribe(function (data) {
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
    NotificationsWorkPage.prototype.delete = function (i, event) {
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
                        _this.accountProv.declinarProyecto({ id: event.id_proyecto, id_us: event.id, id_u_c: _this.id_user }).subscribe(function (data) {
                            var d = data;
                            console.log('Datos del api regreso No: ', d);
                            var toast = _this.toastCtrl.create({
                                message: 'The project declined ',
                                duration: 3000
                            });
                            toast.present();
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
    NotificationsWorkPage.prototype.accept = function (i, event) {
        var _this = this;
        if (this.notifications[i].status == 'En proceso') {
            this.accountProv.agendadoWork({ id_pro: event.id_proyecto, id_hire: event.id, id_work: this.id_user }).subscribe(function (data) {
                var d = data;
                console.log('Datos del api regreso No: ', d);
                /*const toast = this.toastCtrl.create({
                  message: 'The project sheduled',
                  duration: 3000
                });
                toast.present();
        
                */
                if (d.mensaje == "Proyecto agendado") {
                    var myModalOptions = {
                        enableBackdropDismiss: false,
                        showBackdrop: false,
                        cssClass: 'my-modal-inner'
                    };
                    var modal = _this.modalCtrl.create('ModalAcceptedRequestPage', { data: event, user: 3 }, myModalOptions);
                    modal.present();
                }
                _this.refresh();
            }, function (error) { return console.error(error); });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'The project is already scheduled ',
                duration: 3000
            });
            toast.present();
            this.navCtrl.push("ChatListPage");
        }
        /*  let newChat: Chat = {
           guest: [
             {
               idGuest: "1",
               name: this.sesionObject.name
             },
             {
               idGuest: "2",
               name: this.notifications[i].nombre
             }
           ],
           messages: []
         }
         this.angularDatabase.list('ionic/chats').push(
           newChat
         ); */
        //this.navCtrl.push('ProjectsWorkPage');
    };
    NotificationsWorkPage.prototype.addFavoritos = function (i, event) {
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
                    toast.present();
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
                        toast.present();
                    }
                    else {
                        _this.accountProv.agregarFavorito({ id: _this.id_user, idf: event.id }).subscribe(function (data) {
                            var d = data;
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
    NotificationsWorkPage.prototype.viewModal = function (event) {
        var _this = this;
        console.log('Datos del evento', event);
        this.accountProv.trabajoTerminadoDatos({ idh: event.id, idw: event.id_user_contratado }).subscribe(function (data) {
            _this.dataUserModalAPI = data['user'];
            var resultado = _this.dataUserModalAPI.find(function (user) { return user.id_proyecto === event.id_proyecto; });
            console.log('Usuario correcto', resultado);
            if (resultado != null) {
                _this.dataUserModalAPI = resultado;
            }
            else {
                _this.dataUserModalAPI = data;
            }
            if (event.status == 'Finalizado') {
                _this.dataSend = resultado;
                _this.dataSend.nombre = event.nombre;
                _this.dataSend.foto = event.foto;
                _this.dataSend.id_hire = event.id;
                _this.dataSend.id_work = event.id_user_contratado;
                console.log('Finalizado', _this.dataUserModalAPI, _this.dataSend);
                var myModalOptions = {
                    enableBackdropDismiss: false,
                    showBackdrop: false,
                    cssClass: 'my-modal-inner'
                };
                var modal = _this.modalCtrl.create('ModalCompletedWorkPage', { data_hire: event, data_work: _this.dataSend, user: 2 }, myModalOptions);
                modal.present();
                /* const toast = this.toastCtrl.create({
                  message: 'Finished Status',
                  duration: 3000
                });
                toast.present(); */
                var toast2 = _this.toastCtrl.create({
                    message: 'No extra hour',
                    duration: 3000
                });
                toast2.present();
            }
            else {
                _this.accountProv.statusHora({ id_pro: event.id_proyecto, id_work: event.id_user_contratado }).subscribe(function (data) {
                    var d = data['datos'];
                    if (data['datos'] != null) {
                        if (d.estatus == 0) {
                            var myModalOptions = {
                                enableBackdropDismiss: false,
                                showBackdrop: false,
                                cssClass: 'my-modal-inner'
                            };
                            var modal = _this.modalCtrl.create('ModalExtraHourWorkPage', { data_hire: event, data_work: _this.dataUserModalAPI, estatus: data.datos.estatus, user: 2 }, myModalOptions);
                            modal.present();
                            var toast = _this.toastCtrl.create({
                                message: 'You have an extra time request',
                                duration: 3000
                            });
                            toast.present();
                        }
                    }
                    else {
                    }
                }, function (error) { return console.error(); });
            }
        }, function (error) { return console.error(error); });
    };
    NotificationsWorkPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            _this.accountProv.notificacionesWork(sesion.id).subscribe(function (data) {
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
    NotificationsWorkPage.prototype.refresh = function () {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            _this.accountProv.notificacionesWork(sesion.id).subscribe(function (data) {
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
    };
    NotificationsWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\notifications-work\notifications-work.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n     <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <div class="seccion">\n\n    <h1 no-margin><b>Notifications</b></h1>\n\n    <p no-margin> Check your invitations to new projects</p>\n\n  </div>\n\n\n\n  <div class="list-avatar-page">\n\n    <ion-list *ngIf="notifications != null || notifications != undefined">\n\n      <ion-item-sliding *ngFor="let notification of notifications; let i = index">\n\n        <ion-item>\n\n          <ion-avatar item-start (click)="viewModal(notification)">\n\n            <img [src]="notification.foto">\n\n          </ion-avatar>\n\n          <div (click)="viewModal(notification)">\n\n            <h6><b>{{ notification.nom_proyecto }}</b></h6>\n\n            <p text-uppercase>{{ notification.nombre }} |</p>\n\n            <p text-uppercase>{{ notification.compania }} |</p>\n\n            <p text-uppercase>{{ notification.descripcion }}</p>\n\n            <div [ngSwitch]="notification.status">\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'En proceso\'"> In process</h6>\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'Agendado\'">Scheduled</h6>\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'Finalizado\'">Finished</h6>\n\n              <h6 text-uppercase ion-text style="display: block;font-size: 8px" color="{{(notification.status == \'En proceso\')?\'proceso\':((notification.status == \'Cancelado\')?\'cancelado\':((notification.status == \'Finalizado\')?\'finalizado\':\'agendado\'))}}" *ngSwitchCase="\'Cancelado\'">Cancelled</h6>\n\n            </div>\n\n          </div>\n\n          <ion-note item-end>\n\n            <ion-icon (click)="addFavoritos(i,notification)" color="{{(notification.ocupation == \'Photographer\')?\'photographer\':((notification.ocupation == \'Videographer\')?\'videographer\':((notification.ocupation == \'Hair\')?\'makeup\':\'talent\'))}}"\n\n              [name]="notifications[i].enable ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n          </ion-note>\n\n          <ion-note item-end>\n\n            <ion-icon name=\'star\' color="proceso"></ion-icon>\n\n          </ion-note>\n\n          <ion-note item-end>{{ notification.calificacion }}</ion-note>\n\n        </ion-item>\n\n        <ion-item-options side="left">\n\n          <button ion-button (click)="delete(i,notification)" color="danger">\n\n            <ion-icon name="md-close"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n        <ion-item-options side="right">\n\n          <button ion-button (click)="accept(i,notification)" color="secondary">\n\n            <ion-icon name="md-checkmark"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n    <div text-center>\n\n      <p ion-text color="dark">After 24 hrs without response your notifications will be deleted</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs></footer-tabs>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\notifications-work\notifications-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], NotificationsWorkPage);
    return NotificationsWorkPage;
}());

//# sourceMappingURL=notifications-work.js.map

/***/ })

});
//# sourceMappingURL=8.js.map