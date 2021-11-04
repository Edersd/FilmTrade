webpackJsonp([26],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOthersPageModule", function() { return ModalOthersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_others__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalOthersPageModule = /** @class */ (function () {
    function ModalOthersPageModule() {
    }
    ModalOthersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_others__["a" /* ModalOthersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_others__["a" /* ModalOthersPage */]),
            ],
        })
    ], ModalOthersPageModule);
    return ModalOthersPageModule;
}());

//# sourceMappingURL=modal-others.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalOthersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
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


//Angular Forms

var ModalOthersPage = /** @class */ (function () {
    function ModalOthersPage(navCtrl, navParams, viewCtrl, modalCtrl, configProv, accountProv, formBuilder, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.sesionObject = {};
        this.dataModalFinish = {};
        this.user = 3;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            console.log('Este es el id: ', sesion.id);
        }).catch(function (error) { return console.error(error); });
        this.projectForm = this.formBuilder.group({
            porque: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            calificacion: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('')
        });
    }
    ModalOthersPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalOthersPage');
        var data = this.navParams.get('data');
        this.user = this.navParams.get('user');
        this.dataModalFinish = data;
        this.projectForm.controls.id.setValue(this.dataModalFinish.id);
        this.projectForm.controls.calificacion.setValue(this.dataModalFinish.calificacion);
    };
    ModalOthersPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalOthersPage.prototype.finProject = function () {
        var _this = this;
        if (this.projectForm.valid) {
            var values = this.projectForm.getRawValue();
            console.log('Datos para calificar', this.dataModalFinish.id, this.dataModalFinish.calificacion, values.porque);
            if ((this.dataModalFinish.id != null || this.dataModalFinish.id != undefined) && (values.porque != undefined || values.porque != null)) {
                this.accountProv.calificar({ idc: (this.user != 2) ? this.dataModalFinish.id : this.dataModalFinish.id_hire, ca: this.dataModalFinish.calificacion, po: values.porque }).subscribe(function (data) {
                    var d = data;
                    var toast = _this.toastCtrl.create({
                        message: 'Qualified user',
                        duration: 3000
                    });
                    toast.present();
                }, function (error) { return console.error(error); });
                this.viewCtrl.dismiss();
                var myModalOptions = {
                    enableBackdropDismiss: false,
                    showBackdrop: false,
                    cssClass: 'my-modal-inner'
                };
                var myModalData = {};
                var modal_1 = this.modalCtrl.create('ModalFinishProjectPage', { data: myModalData }, myModalOptions);
                modal_1.present();
                setTimeout(function () {
                    modal_1.dismiss();
                    //this.navCtrl.setRoot(MenuHomePage);
                }, 2000);
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Unqualified user',
                    duration: 3000
                });
                toast.present();
            }
        }
    };
    ModalOthersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-others',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-others\modal-others.html"*/'<!--\n\n  Generated template for the ModalOthersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content text-center no-padding no-margin>\n\n  <div style="height: 11px;">\n\n    <ion-col col-6>\n\n      <img class="imgStart" src=" ../../assets/icon/icono-other.PNG" style="height: 35px; width:  28%; margin-top:15px; margin-left: 30%">\n\n\n\n      <button ion-button icon-only clear color="dark" (click)="close()" style="margin-left: 14%; margin-top: -30px">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      \n\n    </ion-col>\n\n  </div>\n\n  <ion-icon padding-top name="chatboxes-outline"></ion-icon>\n\n\n\n  <form [formGroup]="projectForm">\n\n    <div padding-top>\n\n      <ion-card>\n\n        <ion-card-content no-padding text-center>\n\n          <ion-item>\n\n            <ion-textarea formControlName="porque" placeholder="What happen?"></ion-textarea>\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </form>\n\n  <button ion-button full clear text-center color="dark" (click)="finProject()">Send</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-others\modal-others.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ModalOthersPage);
    return ModalOthersPage;
}());

//# sourceMappingURL=modal-others.js.map

/***/ })

});
//# sourceMappingURL=26.js.map