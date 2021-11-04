webpackJsonp([37],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdVerificationPageModule", function() { return IdVerificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__id_verification__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdVerificationPageModule = /** @class */ (function () {
    function IdVerificationPageModule() {
    }
    IdVerificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__id_verification__["a" /* IdVerificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__id_verification__["a" /* IdVerificationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__id_verification__["a" /* IdVerificationPage */]
            ]
        })
    ], IdVerificationPageModule);
    return IdVerificationPageModule;
}());

//# sourceMappingURL=id-verification.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payments__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_processing_data_modal_processing_data__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//Angular Forms

var IdVerificationPage = /** @class */ (function () {
    function IdVerificationPage(navCtrl, navParams, alertCtrl, modalCtrl, camera, accountProv, configProv, toastCtrl, transfer, loadingCtrl, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.accountProv = accountProv;
        this.configProv = configProv;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.picture = null;
        this.pattern = /^(\d{2})\/(d{2})$/;
        this.cameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.edit = true;
        this.edit = navParams.get('edit');
        if (this.edit === false) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        console.log(this.edit);
        this.configProv.getSesionObject().then(function (data) { return _this.sesionObject = data; }).catch(function (error) { return console.error(error); });
        this.idVerifyForm = formBuilder.group({
            idVerify: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required
            ]))
        });
    }
    IdVerificationPage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture(this.cameraOptions).then(function (data) {
            _this.picture = "data:image/jpeg;base64," + data;
            console.log(_this.picture);
        }).catch(function (error) { return console.error(error); });
    };
    IdVerificationPage.prototype.openPayment = function () {
        if (this.idVerifyForm.valid) {
            var values = this.idVerifyForm.getRawValue();
            if ((this.picture != null && this.picture != undefined) && (values.idVerify != null)) {
                if (this.edit != true) {
                }
                else {
                    this.uploadImage();
                }
            }
            else {
                var toast = this.toastCtrl.create({
                    duration: 2000,
                    message: 'You must send all the data to continue',
                    position: 'bottom'
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                duration: 2000,
                message: 'You must send all the data to continue',
                position: 'bottom'
            });
            toast.present();
        }
        /* this.accountProv.idVerificacion({ id: this.sesionObject.id, idV: this.id, img: this.picture }).subscribe(data => {
          console.log(data);
          const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
          };
          let modal = this.modalCtrl.create(ModalProcessingDataPage, myModalOptions);
          modal.present();
          setTimeout(() => {
            modal.dismiss();
            if (data.entra !== 0) {
              this.navCtrl.push(PaymentsPage, { id: this.id });
            } else {
              let toast = this.toastCtrl.create({
                duration: 2000,
                message: data.mensaje,
                position: 'bottom'
              });
              toast.present();
            }
            this.navCtrl.push(PaymentsPage, { id: this.id });
          }, 2000);
        },
          error => console.error(error)
        ); */
    };
    IdVerificationPage.prototype.uploadImage = function () {
        var _this = this;
        //Show loading
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        //create file transfer object
        var fileTransfer = this.transfer.create();
        //random int
        var random = Math.floor(Math.random() * 100);
        var values = this.idVerifyForm.getRawValue();
        var params = {
            "id": this.sesionObject.id,
            'idV': values.idVerify
        };
        //option transfer
        var options = {
            fileKey: 'img',
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            params: params,
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(this.picture, 'http://d-ies.com/FilmTrade/API/idVerificacion.php', options).then(function (data) {
            loader.dismiss();
            /* let toast = this.toastCtrl.create({
              duration: 2000,
              message: 'Your changes have been saved successfully ',
              position: 'bottom'
            });
            toast.present(); */
            if (_this.edit == false) {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Data added correctly, can be returned',
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                var dataass = data;
                var myModalOptions = {
                    enableBackdropDismiss: false,
                    showBackdrop: false,
                    cssClass: 'my-modal-inner'
                };
                var modal_1 = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_processing_data_modal_processing_data__["a" /* ModalProcessingDataPage */], myModalOptions);
                modal_1.present();
                setTimeout(function () {
                    modal_1.dismiss();
                    if (data != null) {
                        if (_this.edit != true) {
                            _this.navCtrl.pop();
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payments_payments__["a" /* PaymentsPage */], { id: _this.id });
                        }
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            duration: 2000,
                            message: 'Error inserting data',
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, 2000);
            }
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                duration: 2000,
                message: 'Error inserting data',
                position: 'bottom'
            });
            toast.present();
        });
    };
    IdVerificationPage.prototype.tabsFoto = function () {
        this.navCtrl.push('NoTabsPage');
    };
    IdVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-id-verification',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\id-verification\id-verification.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>ID Verification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-toolbar no-padding>\n\n    <h3 paddig style="padding: 0 30px; font-size: 30px; color: black;" class="ion-title">ID Verification</h3>\n\n    <h6 style="padding-left: 30px;padding-bottom: 10px;font-size: 13px;margin: auto;font-style: inherit;color: gray;">Must\n\n      be answered</h6> \n\n  </ion-toolbar>\n\n\n\n  <div padding class="ion-full">\n\n    <ion-grid class="ion-full">\n\n      <ion-row no-padding>\n\n        <form [formGroup]="idVerifyForm">\n\n          <ion-col no-padding>\n\n            <ion-item>\n\n              <ion-input placeholder="Verify your ID" clearInput formControlName="idVerify"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </form>\n\n\n\n        <ion-col col-1 align-self-center margin-right>\n\n          <ion-buttons end>\n\n            <button ion-button icon-only clear (click)="takePicture()">\n\n              <ion-icon name="camera"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row no-padding>\n\n        <ion-col no-padding>\n\n          <p style="color: lightgray; margin: 0;padding: 0 15px;" class="gray">Needed information</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="picture != null">\n\n        <ion-col padding>\n\n          <p align="center"><img src="{{ picture }}"></p>\n\n          <!-- <img [src]="picture"> -->\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row justify-content-end class="magin50">\n\n        <ion-col align-self-end col-auto>\n\n          <a style="margin-top: 15px">Are you foreigner?</a>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row justify-content-center>\n\n        <ion-col align-self-center>\n\n          <button ion-button full clear text-capitalize color="dark" (click)="openPayment()"><b>Next</b></button>\n\n          <!-- <button (click)="upload()" ion-button>Take Pic & Upload </button>\n\n          <button (click)="tabsFoto()" ion-button>TabsFoto </button> -->\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\id-verification\id-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormBuilder"]])
    ], IdVerificationPage);
    return IdVerificationPage;
}());

//# sourceMappingURL=id-verification.js.map

/***/ })

});
//# sourceMappingURL=37.js.map