webpackJsonp([30],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetailRequestPageModule", function() { return ModalDetailRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_detail_request__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDetailRequestPageModule = /** @class */ (function () {
    function ModalDetailRequestPageModule() {
    }
    ModalDetailRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_detail_request__["a" /* ModalDetailRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_detail_request__["a" /* ModalDetailRequestPage */]),
            ],
        })
    ], ModalDetailRequestPageModule);
    return ModalDetailRequestPageModule;
}());

//# sourceMappingURL=modal-detail-request.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetailRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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


var ModalDetailRequestPage = /** @class */ (function () {
    function ModalDetailRequestPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl, configProv, accountProv, toastCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.startsNumber = 0;
        this.loadingOpts = {
            content: '<div class="img_h">ass </div>',
            cssClass: 'img_h',
            spinner: 'hide',
            duration: 2000
        };
        this.projectAdd = {};
        this.serviceDescription = { days: 0 };
        this.configProv.getSesionObject().then(function (sesion) {
            _this.serviceDescription.id_user = sesion.id;
        }).catch(function (error) { return console.error(error); });
        this.configProv.getSesionObjectProject().then(function (data) {
            _this.projectAdd = data;
            _this.serviceDescription.days = _this.projectAdd.avaibleDates.length;
            _this.serviceDescription.subtotal = _this.projectAdd.costo;
            _this.serviceDescription.id_pro = _this.projectAdd.id_proyecto;
            _this.costPor = Number(_this.projectAdd.costo) + Number(_this.projectAdd.costo) * Number(0.20);
            console.log('Datos del proyecto MDR: ', _this.projectAdd, '--', data, '--------', _this.serviceDescription);
            if (_this.projectAdd.extra == 1) {
                _this.serviceDescription.total = (Number(_this.projectAdd.costo * _this.serviceDescription.days) + (Number(_this.projectAdd.costo) * 0.10));
                console.log('Hay hora extra1');
            }
            else {
                _this.serviceDescription.total = (_this.projectAdd.costo * _this.serviceDescription.days);
                console.log('No hay hora extra1');
            }
            console.log('Total:', (_this.projectAdd.costo * _this.serviceDescription.days), 'Subtotal: ', _this.serviceDescription.total);
            var hoursMinutes = _this.projectAdd.hora.split(':');
            _this.serviceDescription.horai = _this.formatAMPM(hoursMinutes);
            _this.serviceDescription.horaf = _this.formatAMPMF(hoursMinutes);
            switch (_this.projectAdd.paquete) {
                case 1:
                    _this.serviceDescription.paquete = 'Basic';
                    break;
                case 2:
                    _this.serviceDescription.paquete = 'Gold';
                    break;
                case 3:
                    _this.serviceDescription.paquete = 'Premium';
                    break;
            }
        }).catch(function (error) { return console.error(error); });
    }
    ModalDetailRequestPage.prototype.formatAMPM = function (date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ModalDetailRequestPage.prototype.formatAMPMF = function (date) {
        var hours2 = date[0];
        var minutes = date[1];
        if (this.projectAdd.paquete == 1) {
            hours2 = (Number(hours2) + Number(3)) > 24 ? (Number(hours2) + Number(3)) - Number(24) : (Number(hours2) + Number(3));
        }
        if (this.projectAdd.paquete == 2) {
            hours2 = (Number(hours2) + Number(5)) > 24 ? (Number(hours2) + Number(5)) - Number(24) : (Number(hours2) + Number(5));
        }
        if (this.projectAdd.paquete == 3) {
            hours2 = (Number(hours2) + Number(8)) > 24 ? (Number(hours2) + Number(8)) - Number(24) : (Number(hours2) + Number(8));
        }
        if (this.projectAdd.extra === 1) {
            hours2 = Number(hours2) + Number(1);
        }
        else {
            console.log('No hay hora extra');
        }
        var ampm = hours2 >= 12 ? 'pm' : 'am';
        hours2 = hours2 % 12;
        hours2 = hours2 ? hours2 : 12;
        minutes = minutes < 10 ? '' + minutes : minutes;
        var strTime = hours2 + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ModalDetailRequestPage.prototype.onStartsChange = function (event) {
        this.startsNumber = event;
    };
    ModalDetailRequestPage.prototype.showProgress = function () {
        var loading = this.loadingCtrl.create(this.loadingOpts);
        loading.present();
    };
    ModalDetailRequestPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalDetailRequestPage.prototype.openModal = function () {
        var _this = this;
        if (this.projectAdd.extra == 1) {
            this.serviceDescription.extra = 1;
        }
        else {
            this.serviceDescription.extra = 0;
        }
        console.log('Modal', 'id_pro:', this.projectAdd.id_proyecto, 'work:', this.projectAdd.id, 'hire:', this.projectAdd.id_user, 'fecT:', this.projectAdd.avaibleDates, 'ti_pa:', this.serviceDescription.paquete, 'cos:', this.projectAdd.costo, 'Ho_Ex:', this.serviceDescription.extra, 'hora:', this.projectAdd.hora);
        if ((this.projectAdd.id_proyecto != null && this.projectAdd.id_proyecto != undefined) && (this.projectAdd.id != null && this.projectAdd.id != undefined) && (this.projectAdd.id_user != null && this.projectAdd.id_user != undefined) && (this.projectAdd.avaibleDates != null && this.projectAdd.avaibleDates != undefined) && (this.serviceDescription.paquete != null && this.serviceDescription.paquete != undefined) && (this.projectAdd.costo != null && this.projectAdd.costo != undefined)) {
            console.log('Modal', 'id_pro:', this.projectAdd.id_proyecto, 'work:', this.projectAdd.id, 'hire:', this.projectAdd.id_user, 'fecT:', this.projectAdd.avaibleDates, 'ti_pa:', this.serviceDescription.paquete, 'cos:', this.projectAdd.costo, 'Ho_Ex:', this.serviceDescription.extra, 'hora:', this.serviceDescription.horai);
            this.accountProv.agragarUsuarioProyecto({
                id_pro: (this.projectAdd.id_proyecto == null) ? this.serviceDescription.id_pro : this.projectAdd.id_proyecto, work: this.projectAdd.id, hire: (this.projectAdd.id_user == undefined) ? this.serviceDescription.id_user : this.projectAdd.id_user, fecT: String(this.projectAdd.avaibleDates), ti_pa: this.serviceDescription.paquete, cos: this.costPor, Ho_Ex: this.projectAdd.extra, hora: this.projectAdd.hora
            }).subscribe(function (data) {
                var d = data;
                console.log('Datos del api regreso: ', d.mensaje);
                /*const toast = this.toastCtrl.create({
                  message: "User add to the project",
                  duration: 3000
                });
                toast.present();*/
                _this.projectAdd = {};
                _this.serviceDescription = { days: 0 };
            }, function (error) { return console.error(error); });
            this.viewCtrl.dismiss();
            var myModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
            };
            var myModalData = {};
            var modal_1 = this.modalCtrl.create('ModalRequestSendPage', { data: myModalData }, myModalOptions);
            modal_1.present();
            setTimeout(function () {
                modal_1.dismiss();
                var root = _this.app.getRootNav();
                _this.navCtrl.popToRoot();
                /* const myModalOptions: ModalOptions = {
                  enableBackdropDismiss: false,
                  showBackdrop: false,
                  cssClass: 'my-modal-inner'
                };
        
                const myModalData = {     };
        
                const modal2: Modal = this.modalCtrl.create('ModalAcceptedRequestPage', { data: myModalData }, myModalOptions);
                modal2.present(); */
            }, 2000);
            this.navCtrl.setRoot('CategoryHirePage');
        }
        else {
            var toast = this.toastCtrl.create({
                message: "It was not possible to add the user to the project",
                duration: 3000
            });
            toast.present();
        }
    };
    ModalDetailRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-modal-detail-request',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-detail-request\modal-detail-request.html"*/'<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img [src]="(projectAdd.foto != null && projectAdd.foto != undefined)?projectAdd.foto:\'../../assets/imgs/logo.png\'"\n\n      class="img" />\n\n    <h1 ion-text>{{ projectAdd.nombre }}</h1>\n\n    <div [ngSwitch]="projectAdd.paquete">\n\n      <h6 text-uppercase ion-text color="usingg" *ngSwitchCase="1">Basic package</h6>\n\n      <h6 text-uppercase ion-text color="usingg" *ngSwitchCase="2">Gold package</h6>\n\n      <h6 text-uppercase ion-text color="usingg" *ngSwitchCase="3">Premium package</h6>\n\n    </div>\n\n    <p>{{ serviceDescription.days }} </p>\n\n    <p *ngIf="serviceDescription.days >= 2">days</p>\n\n    <p *ngIf="serviceDescription.days == 1">day</p>\n\n    <p> starting at {{serviceDescription.horai}} - {{serviceDescription.horaf}}</p>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-auto>\n\n          <p ion-text color="using">Total </p>\n\n          <p ion-text color="usingg">${{ costPor }}</p>\n\n        </ion-col>\n\n        <ion-col col-auto offset-2 text-right>\n\n          <ion-note item-end>\n\n            <ion-icon name=\'star\' color="using"></ion-icon>\n\n          </ion-note>\n\n        </ion-col>\n\n        <ion-col col-auto>\n\n          <p ion-text color="dark">{{ projectAdd.calificacion }}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <button ion-button full clear text-center color="dark" (click)="openModal()">Send Invitation</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-detail-request\modal-detail-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["App"]])
    ], ModalDetailRequestPage);
    return ModalDetailRequestPage;
}());

//  C:\Webpages\Bepineapple\PDF\ 
//# sourceMappingURL=modal-detail-request.js.map

/***/ })

});
//# sourceMappingURL=30.js.map