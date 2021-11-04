webpackJsonp([32],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCompletedWorkPageModule", function() { return ModalCompletedWorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_completed_work__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCompletedWorkPageModule = /** @class */ (function () {
    function ModalCompletedWorkPageModule() {
    }
    ModalCompletedWorkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_completed_work__["a" /* ModalCompletedWorkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_completed_work__["a" /* ModalCompletedWorkPage */]),
            ],
        })
    ], ModalCompletedWorkPageModule);
    return ModalCompletedWorkPageModule;
}());

//# sourceMappingURL=modal-completed-work.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCompletedWorkPage; });
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



//provider


/**
 * Generated class for the ModalCompletedWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalCompletedWorkPage = /** @class */ (function () {
    function ModalCompletedWorkPage(navCtrl, navParams, viewCtrl, modalCtrl, accountProv, configProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.accountProv = accountProv;
        this.configProv = configProv;
        this.dataUserModal = [{}];
        this.dataUserModalAPI = [{}];
        this.user = "3";
        this.user = this.navParams.get('user');
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            if (_this.user == 2) {
                var datah = _this.navParams.get('data_hire');
                var dataw = _this.navParams.get('data_work');
                _this.dataUserModal = dataw;
                console.log(_this.dataUserModal, _this.user);
            }
            else {
                var data = _this.navParams.get('data');
                _this.dataUserModal = data;
                console.log(_this.dataUserModal, _this.user);
                _this.accountProv.trabajoTerminadoDatos({ idh: sesion.id, idw: data.id }).subscribe(function (data) {
                    _this.dataUserModalAPI = data['user'];
                    var resultado = _this.dataUserModalAPI.find(function (user) { return user.id_proyecto === _this.dataUserModal.id_proyecto; });
                    console.log('Usuario correcto', resultado);
                    if (resultado != null) {
                        _this.dataUserModal = resultado;
                    }
                    else {
                        _this.dataUserModal = data;
                    }
                }, function (error) { return console.error(error); });
            }
        }).catch(function (error) { return console.error(error); });
    }
    ModalCompletedWorkPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalCompletedWorkPage');
    };
    ModalCompletedWorkPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalCompletedWorkPage.prototype.addExtra = function () {
        this.viewCtrl.dismiss();
        var myModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
        };
        var modal = this.modalCtrl.create('ModalExtraHourPage', { data: this.dataUserModal }, myModalOptions);
        modal.present();
        modal.onDidDismiss(function (data) { });
        modal.onWillDismiss(function (data) { });
    };
    ModalCompletedWorkPage.prototype.finishPtoject = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        var myModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
        };
        var modal = this.modalCtrl.create('ModalRequestSendPage', { data: this.dataUserModal, total: this.dataUserModal.costo }, myModalOptions);
        modal.present();
        setTimeout(function () {
            modal.dismiss();
            var myModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
            };
            var modal2 = _this.modalCtrl.create('ModalBadQualificationPage', { data: _this.dataUserModal, total: _this.dataUserModal.costo, user: _this.user }, myModalOptions);
            modal2.present();
        }, 2000);
    };
    ModalCompletedWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-completed-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-completed-work\modal-completed-work.html"*/'<!--\n\n  Generated template for the ModalCompletedWorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation. \n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div text-center>\n\n    <img class="img" [src]="(dataUserModal.foto != null && dataUserModal.foto != undefined)?dataUserModal.foto:\'../../assets/imgs/logo.png\'" />\n\n    <h1 *ngIf="user != \'2\'" ion-text>{{dataUserModal.fila}} Finish Job</h1>\n\n    <h1 *ngIf="user == 2" ion-text></h1>\n\n    <h6 *ngIf="user != 2" ion-text color="dark" style="margin-bottom: 6px;">Thanks for working with\n\n      {{dataUserModal.nombre}}</h6>\n\n    <h6 *ngIf="user == 2" ion-text color="dark" style="margin-bottom: 6px; font-size: 20px">Thanks for working with\n\n      {{dataUserModal.nombre}}</h6>\n\n    <h6 ion-text color="usingg">{{dataUserModal.tipo_paquete}} package</h6>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12>\n\n          <p ion-text color="using">Total </p>\n\n          <p ion-text color="usingg">${{dataUserModal.costo}} </p>\n\n          <p ion-text color="usingg">MXN</p>\n\n        </ion-col>\n\n        <ion-col *ngIf="user != \'2\'">\n\n          <p ion-text color="using" style="font-size: 10px;" (click)="addExtra()">Add an extra hour</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <button ion-button full clear text-center color="dark" (click)="finishPtoject()">Finish Job</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-completed-work\modal-completed-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], ModalCompletedWorkPage);
    return ModalCompletedWorkPage;
}());

//# sourceMappingURL=modal-completed-work.js.map

/***/ })

});
//# sourceMappingURL=32.js.map