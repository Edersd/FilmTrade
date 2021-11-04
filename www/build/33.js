webpackJsonp([33],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBadQualificationPageModule", function() { return ModalBadQualificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_bad_qualification__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_rating__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic3_star_rating__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Rangking */


var ModalBadQualificationPageModule = /** @class */ (function () {
    function ModalBadQualificationPageModule() {
    }
    ModalBadQualificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_bad_qualification__["a" /* ModalBadQualificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_rating__["a" /* IonicRatingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_bad_qualification__["a" /* ModalBadQualificationPage */]),
            ],
        })
    ], ModalBadQualificationPageModule);
    return ModalBadQualificationPageModule;
}());

//# sourceMappingURL=modal-bad-qualification.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBadQualificationPage; });
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


var ModalBadQualificationPage = /** @class */ (function () {
    function ModalBadQualificationPage(navCtrl, navParams, viewCtrl, modalCtrl, events, configProv, accountProv, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.toastCtrl = toastCtrl;
        this.dataModalFinish = {};
        this.serviceDescription = { days: 0 };
        this.user = "3";
        this.rate = 0;
        this.rating = 0;
        events.subscribe('star-rating:changed', function (starRating) { _this.rating = starRating; _this.dataModalFinish.calificacion = starRating; console.log(starRating); });
    }
    ModalBadQualificationPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalBadQualificationPage');
        var data = this.navParams.get('data');
        var total = this.navParams.get('total');
        this.user = this.navParams.get('user');
        var hora_extra_new = this.navParams.get('hora_extra_new');
        console.log(data, total, hora_extra_new, this.user);
        this.dataModalFinish = data;
        this.dataModalFinish.total = total;
        this.dataModalFinish.hora_extra_new = hora_extra_new;
        this.dataModalFinish.costo_extra = this.navParams.get('costExtra');
        var hoursMinutes = this.dataModalFinish.hora.split(':');
        this.serviceDescription.horai = this.formatAMPM(hoursMinutes);
        this.serviceDescription.horaf = this.formatAMPMF(hoursMinutes);
        var minutesFinish = this.convertTime12to24(this.serviceDescription.horaf).split(':');
        this.serviceDescription.horafe = this.formatAMPMFE(minutesFinish);
    };
    ModalBadQualificationPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalBadQualificationPage.prototype.porQue = function (porue) {
        this.dataModalFinish.porque = porue;
        console.log('Este es el porque', this.dataModalFinish.porque);
    };
    ModalBadQualificationPage.prototype.finProject = function () {
        var _this = this;
        console.log('Datos para calificar', this.dataModalFinish.id, this.dataModalFinish.id_hire, this.dataModalFinish.calificacion, this.dataModalFinish.porque);
        if (this.dataModalFinish.calificacion != null || this.dataModalFinish.calificacion != undefined) {
            if (this.dataModalFinish.calificacion <= 2 && this.dataModalFinish.calificacion >= 1) {
                this.accountProv.calificar({ idc: (this.user != 2) ? this.dataModalFinish.id : this.dataModalFinish.id_hire, ca: this.dataModalFinish.calificacion, po: this.dataModalFinish.porque }).subscribe(function (data) {
                    var d = data;
                    var toast = _this.toastCtrl.create({
                        message: 'Badly qualified user',
                        duration: 3000
                    });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
            else {
                this.accountProv.calificar({ idc: (this.user != 2) ? this.dataModalFinish.id : this.dataModalFinish.id_hire, ca: this.dataModalFinish.calificacion, po: '' }).subscribe(function (data) {
                    var d = data;
                    var toast = _this.toastCtrl.create({
                        message: 'Qualified user well',
                        duration: 3000
                    });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
            this.viewCtrl.dismiss();
            var myModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
            };
            var myModalData = {
                name: 'Abraham',
                occupation: 'Desinger'
            };
            var modal_1 = this.modalCtrl.create('ModalFinishProjectPage', { data: this.dataModalFinish }, myModalOptions);
            modal_1.present();
            setTimeout(function () {
                modal_1.dismiss();
                //this.navCtrl.setRoot(MenuHomePage);
            }, 2000);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'The user has no qualification, not qualified',
                duration: 3000
            });
            toast.present();
        }
    };
    ModalBadQualificationPage.prototype.other = function () {
        this.viewCtrl.dismiss();
        var myModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
        };
        var myModalData = {
            name: 'Abraham',
            occupation: 'Desinger'
        };
        var modal = this.modalCtrl.create('ModalOthersPage', { data: this.dataModalFinish, user: this.user }, myModalOptions);
        modal.present();
    };
    ModalBadQualificationPage.prototype.formatAMPM = function (date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ModalBadQualificationPage.prototype.formatAMPMF = function (date) {
        var hours2 = date[0];
        var minutes = date[1];
        if (this.dataModalFinish.tipo_paquete == 'Basic') {
            hours2 = (Number(hours2) + Number(3)) > 24 ? (Number(hours2) + Number(3)) - Number(24) : (Number(hours2) + Number(3));
        }
        if (this.dataModalFinish.tipo_paquete == 'Gold') {
            hours2 = (Number(hours2) + Number(5)) > 24 ? (Number(hours2) + Number(5)) - Number(24) : (Number(hours2) + Number(5));
        }
        if (this.dataModalFinish.tipo_paquete == 'Premium') {
            hours2 = (Number(hours2) + Number(8)) > 24 ? (Number(hours2) + Number(8)) - Number(24) : (Number(hours2) + Number(8));
        }
        /* if (this.dataModalFinish.hora_extra != undefined) {
          hours2 = Number(hours2) + Number(1)
        } */
        var ampm = hours2 >= 12 ? 'pm' : 'am';
        hours2 = hours2 % 12;
        hours2 = hours2 ? hours2 : 12;
        minutes = minutes < 10 ? '' + minutes : minutes;
        var strTime = hours2 + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ModalBadQualificationPage.prototype.convertTime12to24 = function (time12h) {
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
    ModalBadQualificationPage.prototype.formatAMPMFE = function (date) {
        console.log('Datos fin: ', date, date[0], date[1]);
        var hours2 = date[0];
        var minutes = date[1];
        if (this.dataModalFinish.hora_extra_new === 1) {
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
    ModalBadQualificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-bad-qualification',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-bad-qualification\modal-bad-qualification.html"*/'<!--\n\n  Generated template for the ModalBadQualificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div *ngIf="user != 2"class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div *ngIf="user == 2"class="img_w no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img class="img" [src]="(dataModalFinish.foto != null && dataModalFinish.foto != undefined)?dataModalFinish.foto:\'../../assets/imgs/logo.png\'" />\n\n    <h1 ion-text>Rate {{dataModalFinish.nombre}}</h1>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12>\n\n          <p ion-text color="usingg" text-uppercase>{{dataModalFinish.tipo_paquete}} package</p>\n\n          <p ion-text color="usingg" text-uppercase *ngIf="dataModalFinish.hora_extra_new != undefined"> + </p>\n\n          <p ion-text color="using" *ngIf="dataModalFinish.hora_extra_new != undefined">1 </p>\n\n          <p ion-text color="using" text-uppercase *ngIf="dataModalFinish.hora_extra_new != undefined">Hora extra</p>\n\n        </ion-col>\n\n        <ion-col col-auto text-right [ngSwitch]="dataModalFinish.tipo_paquete">\n\n          <p ion-text color="usingg" *ngSwitchCase="\'Basic\'">${{dataModalFinish.basic}}</p>\n\n          <p ion-text color="usingg" *ngSwitchCase="\'Gold\'">${{dataModalFinish.gold}}</p>\n\n          <p ion-text color="usingg" *ngSwitchCase="\'Premium\'">${{dataModalFinish.premium}}</p>\n\n        </ion-col>\n\n        <ion-col col-auto offset-2 text-left *ngIf="dataModalFinish.hora_extra_new != undefined">\n\n          <p ion-text color="usingg">${{dataModalFinish.costo_extra}}</p>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <p>1 day from {{serviceDescription.horai}} - </p>\n\n          <p *ngIf="dataModalFinish.hora_extra_new == undefined">{{serviceDescription.horaf}}</p>\n\n          <p *ngIf="dataModalFinish.hora_extra_new != undefined">{{serviceDescription.horafe}}</p>\n\n        </ion-col>\n\n        <ion-col col-12 class="col-fin">\n\n          <p ion-text color="using">Total </p>\n\n          <p ion-text color="usingg">${{dataModalFinish.total}}</p>\n\n        </ion-col>\n\n        <ion-col col-12 text-center>\n\n          <ionic3-star-rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#ffb400" defaultColor="gray"\n\n            readonly="false" [rating]="rating">\n\n          </ionic3-star-rating>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="rating <= 2 && rating >= 1 ">\n\n          <p ion-text color="usingg">Reasons for the bad rating</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="row-fin" *ngIf="rating <= 2 && rating >= 1">\n\n        <ion-col col-3 (click)="porQue(\'Puntuality\')">\n\n          <ion-icon ios="ios-alarm-outline" md="md-alarm" color="using"></ion-icon><br>\n\n          <p ion-text color="dark">Puntuality</p>\n\n        </ion-col>\n\n        <ion-col col-4 (click)="porQue(\'Performance\')">\n\n          <ion-icon ios="ios-medal-outline" md="md-medal" color="using"></ion-icon><br>\n\n          <p ion-text color="dark">Performance</p>\n\n        </ion-col>\n\n        <ion-col col-3 (click)="porQue(\'Attitude\')">\n\n          <ion-icon ios="ios-happy-outline" md="md-happy" color="using"></ion-icon><br>\n\n          <p ion-text color="dark">Attitude</p>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="other()">\n\n          <ion-icon ios="ios-chatboxes-outline" md="md-chatboxes" color="using"></ion-icon><br>\n\n          <p ion-text color="dark">Others</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <button ion-button full clear text-center color="dark" (click)="finProject()">Enviar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-bad-qualification\modal-bad-qualification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ModalBadQualificationPage);
    return ModalBadQualificationPage;
}());

//# sourceMappingURL=modal-bad-qualification.js.map

/***/ })

});
//# sourceMappingURL=33.js.map