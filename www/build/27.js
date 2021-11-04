webpackJsonp([27],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFinishProjectPageModule", function() { return ModalFinishProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_finish_project__ = __webpack_require__(779);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalFinishProjectPageModule = /** @class */ (function () {
    function ModalFinishProjectPageModule() {
    }
    ModalFinishProjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_finish_project__["a" /* ModalFinishProjectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_finish_project__["a" /* ModalFinishProjectPage */]),
            ],
        })
    ], ModalFinishProjectPageModule);
    return ModalFinishProjectPageModule;
}());

//# sourceMappingURL=modal-finish-project.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFinishProjectPage; });
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



/**
 * Generated class for the ModalFinishProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalFinishProjectPage = /** @class */ (function () {
    function ModalFinishProjectPage(navCtrl, navParams, viewCtrl, accountProv, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.accountProv = accountProv;
        this.toastCtrl = toastCtrl;
        this.dataUser = navParams.get('data');
        console.log('Datos fin:', this.dataUser);
        this.accountProv.finalizarServicio({ id_pro: this.dataUser.id_proyecto, id_work: this.dataUser.id }).subscribe(function (data) {
            var toast = _this.toastCtrl.create({
                duration: 10000,
                message: 'Project finished',
                position: 'bottom'
            });
            toast.present();
        });
    }
    ModalFinishProjectPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalFinishProjectPage');
    };
    ModalFinishProjectPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalFinishProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-finish-project',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-finish-project\modal-finish-project.html"*/'<!--\n\n  Generated template for the ModalFinishProjectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()"> \n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img src="./../../assets/imgs/cirFT.png" class="img">\n\n    <h1 ion-text>Thank you for working with FilmTrade</h1>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-finish-project\modal-finish-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ModalFinishProjectPage);
    return ModalFinishProjectPage;
}());

//# sourceMappingURL=modal-finish-project.js.map

/***/ })

});
//# sourceMappingURL=27.js.map