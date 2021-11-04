webpackJsonp([23],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalQualifyFreelancePageModule", function() { return ModalQualifyFreelancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_qualify_freelance__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_rating__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic3_star_rating__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Rangking */


var ModalQualifyFreelancePageModule = /** @class */ (function () {
    function ModalQualifyFreelancePageModule() {
    }
    ModalQualifyFreelancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_qualify_freelance__["a" /* ModalQualifyFreelancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_rating__["a" /* IonicRatingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_qualify_freelance__["a" /* ModalQualifyFreelancePage */]),
            ],
        })
    ], ModalQualifyFreelancePageModule);
    return ModalQualifyFreelancePageModule;
}());

//# sourceMappingURL=modal-qualify-freelance.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalQualifyFreelancePage; });
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
 * Generated class for the ModalQualifyFreelancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalQualifyFreelancePage = /** @class */ (function () {
    function ModalQualifyFreelancePage(navCtrl, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.rate = 0;
        this.rating = 0;
        events.subscribe('star-rating:changed', function (starRating) { console.log(starRating); });
    }
    ModalQualifyFreelancePage.prototype.onModelChange = function (event) {
        this.rate = event;
        console.log(event);
    };
    ModalQualifyFreelancePage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad ModalQualifyFreelancePage');
        var data = this.navParams.get('data');
        console.log(data);
    };
    ModalQualifyFreelancePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalQualifyFreelancePage.prototype.getTemperatureLabel = function (forTemperature) {
        var errorResult = "Error";
        var result;
        if (isNaN(forTemperature)) {
            result = errorResult;
        }
        else {
            var options = ["Cold", "Warm", "Hot"];
            result = forTemperature < 40 ? options[0] :
                forTemperature < 85 ? options[1] :
                    options[3];
        }
        return result;
    };
    ModalQualifyFreelancePage.prototype.setRating = function (val) {
        var ratingArr = [{
                value: 1,
                icon: 'ion-ios-star-outline'
            }, {
                value: 2,
                icon: 'ion-ios-star-outline'
            }, {
                value: 3,
                icon: 'ion-ios-star-outline'
            }, {
                value: 4,
                icon: 'ion-ios-star-outline'
            }, {
                value: 5,
                icon: 'ion-ios-star-outline'
            }];
        var rtgs = ratingArr;
        for (var i = 0; i < rtgs.length; i++) {
            if (i < val) {
                rtgs[i].icon = 'ion-ios-star';
            }
            else {
                rtgs[i].icon = 'ion-ios-star-outline';
            }
        }
        ;
    };
    ModalQualifyFreelancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-qualify-freelance',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-qualify-freelance\modal-qualify-freelance.html"*/'<!--\n\n  Generated template for the ModalQualifyFreelancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img src="./../../assets/imgs/foto_not.png" class="img" />\n\n    <h1 ion-text>Rate Napoleon</h1>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12>\n\n          <p ion-text color="usingg" text-uppercase>Gold package</p>\n\n          <p ion-text color="usingg" text-uppercase> + </p>\n\n          <p ion-text color="using">1 </p>\n\n          <p ion-text color="using" text-uppercase>extra hr</p>\n\n        </ion-col>\n\n        <ion-col col-auto text-right>\n\n          <p ion-text color="usingg">$2500</p>\n\n        </ion-col>\n\n        <ion-col col-auto offset-2 text-left>\n\n          <p ion-text color="usingg">$250</p>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <p>1 day from 10:30 a.m - 15:30 p.m</p>\n\n        </ion-col>\n\n        <ion-col col-12 class="col-fin">\n\n          <p ion-text color="using">Total </p>\n\n          <p ion-text color="usingg">$2500</p>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-card padding>\n\n            <rating [(ngModel)]="rate" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n\n              starIconName="star" nullable="false" (ngModelChange)="onModelChange($event)">\n\n            </rating>\n\n            <h2>{{rate}}</h2>\n\n            <ionic3-star-rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#488aff" defaultColor="red"\n\n              readonly="false" [rating]="rating">\n\n            </ionic3-star-rating>\n\n\n\n            Selected rating: {{rating}}\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <button ion-button full clear text-center color="dark">Enviar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-qualify-freelance\modal-qualify-freelance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], ModalQualifyFreelancePage);
    return ModalQualifyFreelancePage;
}());

//# sourceMappingURL=modal-qualify-freelance.js.map

/***/ })

});
//# sourceMappingURL=23.js.map