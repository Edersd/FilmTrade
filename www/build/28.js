webpackJsonp([28],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExtraHourPageModule", function() { return ModalExtraHourPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_extra_hour__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalExtraHourPageModule = /** @class */ (function () {
    function ModalExtraHourPageModule() {
    }
    ModalExtraHourPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_extra_hour__["a" /* ModalExtraHourPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_extra_hour__["a" /* ModalExtraHourPage */]),
            ],
        })
    ], ModalExtraHourPageModule);
    return ModalExtraHourPageModule;
}());

//# sourceMappingURL=modal-extra-hour.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalExtraHourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalExtraHourPage = /** @class */ (function () {
    function ModalExtraHourPage(navCtrl, navParams, viewCtrl, modalCtrl, acoutProv, toatCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.acoutProv = acoutProv;
        this.toatCtrl = toatCtrl;
        this.dataUserModal = [{}];
        this.sendDataModal = [];
        var data = this.navParams.get('data');
        this.dataUserModal = data;
        this.sendDataModal = data;
        console.log(this.dataUserModal);
        if (this.dataUserModal.tipo_paquete === 'Basic') {
            this.costExtra = Number(this.dataUserModal.basic) * Number(0.10);
            this.total = Number(this.dataUserModal.costo) + Number(this.costExtra);
            console.log('Extra1:', this.costExtra, '--- Total: ', this.total);
        }
        if (this.dataUserModal.tipo_paquete === 'Gold') {
            this.costExtra = Number(this.dataUserModal.gold) * Number(0.10);
            this.total = Number(this.dataUserModal.costo) + Number(this.costExtra);
            console.log('Extra2:', this.costExtra, '--- Total: ', this.total);
        }
        if (this.dataUserModal.tipo_paquete === 'Premium') {
            this.costExtra = Number(this.dataUserModal.premium) * Number(0.10);
            this.total = Number(this.dataUserModal.costo) + Number(this.costExtra);
            console.log('Extra3:', this.costExtra, '--- Total: ', this.total);
        }
    }
    ModalExtraHourPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalExtraHourPage');
    };
    ModalExtraHourPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalExtraHourPage.prototype.pagoHecho = function () {
        var _this = this;
        this.acoutProv.horaExtra({ id_pro: this.dataUserModal.id_proyecto, id_work: this.dataUserModal.id, Ho_Ex: 1 }).subscribe(function (data) {
            var toast = _this.toatCtrl.create({
                duration: 2000,
                message: 'Extra time requested ' + _this.dataUserModal.hora_extra,
                position: 'bottom'
            });
            toast.present();
        }, function (error) { return console.error(error); });
        this.viewCtrl.dismiss();
        var myModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
        };
        var modal = this.modalCtrl.create('ModalRequestSendPage', { data: this.dataUserModal, total: this.total, hora_extra_new: 1 }, myModalOptions);
        modal.present();
        setTimeout(function () {
            modal.dismiss();
            var myModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
            };
            var modal2 = _this.modalCtrl.create('ModalBadQualificationPage', { data: _this.dataUserModal, total: _this.total, hora_extra_new: 1, costExtra: _this.costExtra }, myModalOptions);
            modal2.present();
        }, 2000);
        //setTimeout(() => modal.dismiss(), 4000);
        modal.onDidDismiss(function (data) {
        });
        modal.onWillDismiss(function (data) {
        });
    };
    ModalExtraHourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-extra-hour',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-extra-hour\modal-extra-hour.html"*/'<!--\n\n  Generated template for the ModalExtraHourPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img class="img" [src]="(dataUserModal.foto != null && dataUserModal.foto != undefined)?dataUserModal.foto:\'../../assets/imgs/logo.png\'" />\n\n    <h1 ion-text>Hire {{dataUserModal.nombre}} an </h1>\n\n    <h6 no-margin ion-text color="usingg">extra hour</h6>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12>\n\n          <p text-uppercase>{{dataUserModal.tipo_paquete}} package</p>\n\n          <p text-uppercase> + </p>\n\n          <p text-uppercase>Hora extra</p>\n\n        </ion-col>\n\n        <ion-col col-auto text-right [ngSwitch]="dataUserModal.tipo_paquete">\n\n          <p ion-text *ngSwitchCase="\'Basic\'">${{dataUserModal.basic}}</p>\n\n          <p ion-text *ngSwitchCase="\'Gold\'">${{dataUserModal.gold}}</p>\n\n          <p ion-text *ngSwitchCase="\'Premium\'">${{dataUserModal.premium}}</p>\n\n        </ion-col>\n\n        <ion-col col-auto offset-2 text-left>\n\n          <p ion-text>${{costExtra}}</p>\n\n        </ion-col>\n\n        <ion-col col-12 class="col-fin">\n\n          <p ion-text color="using">Total </p>\n\n          <p ion-text color="usingg">${{total}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <button ion-button full clear text-center color="dark" (click)="pagoHecho()">Pay</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-extra-hour\modal-extra-hour.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ModalExtraHourPage);
    return ModalExtraHourPage;
}());

//# sourceMappingURL=modal-extra-hour.js.map

/***/ })

});
//# sourceMappingURL=28.js.map