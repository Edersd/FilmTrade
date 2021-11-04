webpackJsonp([29],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExtraHourWorkPageModule", function() { return ModalExtraHourWorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_extra_hour_work__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalExtraHourWorkPageModule = /** @class */ (function () {
    function ModalExtraHourWorkPageModule() {
    }
    ModalExtraHourWorkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_extra_hour_work__["a" /* ModalExtraHourWorkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_extra_hour_work__["a" /* ModalExtraHourWorkPage */]),
            ],
        })
    ], ModalExtraHourWorkPageModule);
    return ModalExtraHourWorkPageModule;
}());

//# sourceMappingURL=modal-extra-hour-work.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalExtraHourWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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




//Modals

var ModalExtraHourWorkPage = /** @class */ (function () {
    function ModalExtraHourWorkPage(navCtrl, navParams, viewCtrl, accountProv, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.accountProv = accountProv;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.dataModalHire = [{}];
        this.dataModalWork = [{}];
        this.dataSend = {};
        this.user = "";
        this.estatus = "";
        this.dataModalHire = this.navParams.get('data_hire');
        this.dataModalWork = this.navParams.get('data_work');
        this.user = this.navParams.get('user');
        this.estatus = this.navParams.get('estatus');
        console.log(this.dataModalHire, this.dataModalWork, this.user, this.estatus);
        if (this.dataModalWork.tipo_paquete === 'Basic') {
            this.costExtra = Number(this.dataModalWork.basic) * Number(0.10);
            this.total = Number(this.dataModalWork.costo) + Number(this.costExtra);
            console.log('Extra1:', this.costExtra, '--- Total: ', this.total);
        }
        if (this.dataModalWork.tipo_paquete === 'Gold') {
            this.costExtra = Number(this.dataModalWork.gold) * Number(0.10);
            this.total = Number(this.dataModalWork.costo) + Number(this.costExtra);
            console.log('Extra2:', this.costExtra, '--- Total: ', this.total);
        }
        if (this.dataModalWork.tipo_paquete === 'Premium') {
            this.costExtra = Number(this.dataModalWork.premium) * Number(0.10);
            this.total = Number(this.dataModalWork.costo) + Number(this.costExtra);
            console.log('Extra3:', this.costExtra, '--- Total: ', this.total);
        }
    }
    ModalExtraHourWorkPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalExtraHourWorkPage');
    };
    ModalExtraHourWorkPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalExtraHourWorkPage.prototype.acceptHour = function () {
        var _this = this;
        this.accountProv.aceptarHora({ id_pro: this.dataModalHire.id_proyecto, id_work: this.dataModalHire.id_user_contratado, cost: this.total }).subscribe(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Hour acepted',
                duration: 3000
            });
            toast.present();
            _this.viewCtrl.dismiss();
        }, function (error) { return console.error(error); });
    };
    ModalExtraHourWorkPage.prototype.declineHour = function () {
        var _this = this;
        var noExtra = this.dataModalHire.hora_extra - 1;
        console.log('No quiere', noExtra);
        this.accountProv.declinarHora({ id_pro: this.dataModalHire.id_proyecto, id_work: this.dataModalHire.id_user_contratado, hora: noExtra }).subscribe(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Hour declined',
                duration: 3000
            });
            toast.present();
            _this.viewCtrl.dismiss();
        }, function (error) { return console.error(error); });
        this.dataSend = this.dataModalWork;
        this.dataSend.nombre = this.dataModalHire.nombre;
        this.dataSend.foto = this.dataModalHire.foto;
        this.dataSend.id_hire = this.dataModalHire.id;
        this.dataSend.id_work = this.dataModalHire.id_user_contratado;
        var toast = this.toastCtrl.create({
            message: 'Extra time declined',
            duration: 3000
        });
        toast.present();
        this.viewCtrl.dismiss();
        var myModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
        };
        var modal = this.modalCtrl.create('ModalCompletedWorkPage', { data_hire: this.dataModalHire, data_work: this.dataSend, user: 2 }, myModalOptions);
        modal.present();
    };
    ModalExtraHourWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-modal-extra-hour-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-extra-hour-work\modal-extra-hour-work.html"*/'<!--\n\n  Generated template for the ModalExtraHourWorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img class="img" [src]="(dataModalHire.foto != null && dataModalHire.foto != undefined)?dataModalHire.foto:\'../../assets/imgs/logo.png\'" />\n\n    <h1 ion-text>{{dataModalHire.nombre}}</h1>\n\n    <h6 no-margin ion-text color="usingg">hired <b>overtime</b></h6>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12>\n\n          <p text-uppercase>{{dataModalWork.tipo_paquete}} package</p>\n\n          <p text-uppercase> + </p>\n\n          <p text-uppercase>Overtime</p>\n\n        </ion-col>\n\n        <ion-col col-auto text-right [ngSwitch]="dataModalWork.tipo_paquete">\n\n          <p ion-text *ngSwitchCase="\'Basic\'">${{dataModalWork.basic}}</p>\n\n          <p ion-text *ngSwitchCase="\'Gold\'">${{dataModalWork.gold}}</p>\n\n          <p ion-text *ngSwitchCase="\'Premium\'">${{dataModalWork.premium}}</p>\n\n        </ion-col>\n\n        <ion-col col-auto offset-2 text-left>\n\n          <p ion-text>${{costExtra}}</p>\n\n        </ion-col>\n\n        <ion-col col-12 class="col-fin">\n\n          <p ion-text color="using">Total </p>\n\n          <p ion-text color="usingg">${{total}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button full clear text-center color="dark" (click)="acceptHour()" >Accept</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button full clear text-center color="dark" (click)="declineHour()" >Reject</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-extra-hour-work\modal-extra-hour-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"]])
    ], ModalExtraHourWorkPage);
    return ModalExtraHourWorkPage;
}());

//# sourceMappingURL=modal-extra-hour-work.js.map

/***/ })

});
//# sourceMappingURL=29.js.map