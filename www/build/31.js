webpackJsonp([31],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConcludeProjectPageModule", function() { return ModalConcludeProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_conclude_project__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalConcludeProjectPageModule = /** @class */ (function () {
    function ModalConcludeProjectPageModule() {
    }
    ModalConcludeProjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_conclude_project__["a" /* ModalConcludeProjectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_conclude_project__["a" /* ModalConcludeProjectPage */]),
            ],
        })
    ], ModalConcludeProjectPageModule);
    return ModalConcludeProjectPageModule;
}());

//# sourceMappingURL=modal-conclude-project.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalConcludeProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ModalConcludeProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalConcludeProjectPage = /** @class */ (function () {
    function ModalConcludeProjectPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalConcludeProjectPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalConcludeProjectPage');
    };
    ModalConcludeProjectPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalConcludeProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-modal-conclude-project',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-conclude-project\modal-conclude-project.html"*/'<!--\n\n  Generated template for the ModalConcludeProjectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div text-center>\n\n    <img src="./../../assets/imgs/foto_not.png" class="img" />\n\n    <h1 ion-text>Conclude Project</h1>\n\n    <h6 ion-text color="dark" style="margin-bottom: 6px;">Thanks for working with Napoleon</h6>\n\n    <h6 ion-text color="usingg">Gold package</h6>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12>\n\n          <p ion-text color="using">Total </p>\n\n          <p ion-text color="usingg">$2500 </p>\n\n          <p ion-text color="usingg">MXN</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <button ion-button full clear text-center color="dark">Conclude Project</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-conclude-project\modal-conclude-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ViewController"]])
    ], ModalConcludeProjectPage);
    return ModalConcludeProjectPage;
}());

//# sourceMappingURL=modal-conclude-project.js.map

/***/ })

});
//# sourceMappingURL=31.js.map