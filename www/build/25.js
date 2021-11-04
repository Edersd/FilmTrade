webpackJsonp([25],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPayPageModule", function() { return ModalPayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_pay__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPayPageModule = /** @class */ (function () {
    function ModalPayPageModule() {
    }
    ModalPayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_pay__["a" /* ModalPayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_pay__["a" /* ModalPayPage */]),
            ],
        })
    ], ModalPayPageModule);
    return ModalPayPageModule;
}());

//# sourceMappingURL=modal-pay.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPayPage; });
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
 * Generated class for the ModalPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPayPage = /** @class */ (function () {
    function ModalPayPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPayPage');
        var data = this.navParams.get('data');
        var total = this.navParams.get('total');
        var hora_extra_new = this.navParams.get('hora_extra_new');
        console.log(data, total, hora_extra_new);
    };
    ModalPayPage.prototype.close = function () {
        var data = {
            name: 'Joes',
            occupation: 'Documentation'
        };
        this.viewCtrl.dismiss(data);
    };
    ModalPayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-pay',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-pay\modal-pay.html"*/'<!--\n\n  Generated template for the ModalPayPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon> \n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img src="./../../assets/imgs/cirFlecha.png" class="img">\n\n    <h1 ion-text> Your transaction was succesful. Check your receipt.</h1>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-pay\modal-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ModalPayPage);
    return ModalPayPage;
}());

//# sourceMappingURL=modal-pay.js.map

/***/ })

});
//# sourceMappingURL=25.js.map