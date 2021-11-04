webpackJsonp([35],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAcceptedRequestPageModule", function() { return ModalAcceptedRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_accepted_request__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalAcceptedRequestPageModule = /** @class */ (function () {
    function ModalAcceptedRequestPageModule() {
    }
    ModalAcceptedRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_accepted_request__["a" /* ModalAcceptedRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_accepted_request__["a" /* ModalAcceptedRequestPage */]),
            ],
        })
    ], ModalAcceptedRequestPageModule);
    return ModalAcceptedRequestPageModule;
}());

//# sourceMappingURL=modal-accepted-request.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAcceptedRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
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
 * Generated class for the ModalAcceptedRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalAcceptedRequestPage = /** @class */ (function () {
    function ModalAcceptedRequestPage(navCtrl, navParams, angularDatabase, configProv, viewCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularDatabase = angularDatabase;
        this.configProv = configProv;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.perfilUserChat = [{}];
        this.user = 2;
        var data = this.navParams.get('data');
        this.user = this.navParams.get('user');
        this.perfilUserChat = data;
        console.log('Data of project', this.perfilUserChat, this.user);
        //TODO: Agregar la notificacion aqui
        configProv.getSesionObject().then(function (sesion) {
            var newChat = {
                guest: [
                    {
                        idGuest: _this.perfilUserChat.id_user_contratado,
                        name: sesion.nombre + ' - ' + _this.perfilUserChat.nom_proyecto
                    },
                    {
                        idGuest: _this.perfilUserChat.id,
                        name: _this.perfilUserChat.nombre + ' - ' + _this.perfilUserChat.nom_proyecto
                    }
                ],
                messages: [
                    {
                        idGuest: _this.perfilUserChat.id_user_contratado,
                        message: "Hola, acabo de aceptar el proyecto: " + _this.perfilUserChat.nom_proyecto,
                        date: Date.now()
                    }
                ],
                projectId: _this.perfilUserChat.id_proyecto
            };
            newChat.key = angularDatabase.list('ionic/chats').push(newChat).key;
            angularDatabase.list('ionic/chats').update(newChat.key, newChat);
        }).catch(function (error) { return console.error(error); });
    }
    ModalAcceptedRequestPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalAcceptedRequestPage.prototype.openChat = function () {
        this.navCtrl.push('ChatListPage');
    };
    ModalAcceptedRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-accepted-request',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-accepted-request\modal-accepted-request.html"*/'<!--\n\n  Generated template for the ModalAcceptedRequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <h1 ion-text color="light" class="textImg">It\'s a deal!</h1>\n\n    <img class="img" [src]="(perfilUserChat.foto != null && perfilUserChat.foto != undefined)?perfilUserChat.foto:\'../../assets/imgs/logo.png\'" />\n\n    <h1 ion-text>{{perfilUserChat.nombre}}</h1>\n\n    <p></p>\n\n    <!-- <p ion-text color="usingg" style="font-size: 16px">Has accepted your invitation</p> -->\n\n    <p ion-text color="usingg" style="font-size: 16px">You can chat now</p>\n\n  </div>\n\n\n\n  <button ion-button full clear text-center color="dark" (click)="openChat()" style="margin-top: -5px">Open Chat</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-accepted-request\modal-accepted-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ModalAcceptedRequestPage);
    return ModalAcceptedRequestPage;
}());

//# sourceMappingURL=modal-accepted-request.js.map

/***/ })

});
//# sourceMappingURL=35.js.map