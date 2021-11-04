webpackJsonp([20],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoTabsPageModule", function() { return NoTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_tabs__ = __webpack_require__(784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoTabsPageModule = /** @class */ (function () {
    function NoTabsPageModule() {
    }
    NoTabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__no_tabs__["a" /* NoTabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__no_tabs__["a" /* NoTabsPage */]),
            ],
        })
    ], NoTabsPageModule);
    return NoTabsPageModule;
}());

//# sourceMappingURL=no-tabs.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(77);
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
 * Generated class for the NoTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoTabsPage = /** @class */ (function () {
    function NoTabsPage(navCtrl, navParams, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    NoTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoTabsPage');
    };
    NoTabsPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    NoTabsPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://d-ies.com/FilmTrade/API/upload.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://d-ies.com/FilmTrade/API/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    NoTabsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NoTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-no-tabs',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\no-tabs\no-tabs.html"*/'<!--\n\n  Generated template for the NoTabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>No Tabs Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <p>{{imageURI}}</p>\n\n    <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n\n  </ion-item>\n\n  <ion-item>\n\n    <h4>Image Preview</h4>\n\n    <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n\n  </ion-item>\n\n  <ion-item>\n\n    <button ion-button (click)="uploadFile()">Upload</button>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\no-tabs\no-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], NoTabsPage);
    return NoTabsPage;
}());

//# sourceMappingURL=no-tabs.js.map

/***/ })

});
//# sourceMappingURL=20.js.map