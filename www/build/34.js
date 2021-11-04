webpackJsonp([34],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAddProjectsPageModule", function() { return ModalAddProjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_add_projects__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalAddProjectsPageModule = /** @class */ (function () {
    function ModalAddProjectsPageModule() {
    }
    ModalAddProjectsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_add_projects__["a" /* ModalAddProjectsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_add_projects__["a" /* ModalAddProjectsPage */]),
            ],
        })
    ], ModalAddProjectsPageModule);
    return ModalAddProjectsPageModule;
}());

//# sourceMappingURL=modal-add-projects.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAddProjectsPage; });
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

var ModalAddProjectsPage = /** @class */ (function () {
    function ModalAddProjectsPage(navCtrl, navParams, viewCtrl, configProv, accountProv, formBuilder, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.sesionObject = {};
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            console.log('Este es el id: ', sesion.id);
            //console.log('Este es todo: ', sesion.id)
            _this.projectForm.controls.id_user.setValue(sesion.id);
        }).catch(function (error) { return console.error(error); });
        this.projectForm = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            id_user: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('')
        });
    }
    ModalAddProjectsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalAddProjectsPage.prototype.addNewProject = function () {
        var _this = this;
        var values = this.projectForm.getRawValue();
        if ((values.name != undefined && values.name != null && values.name != "") && (values.description != undefined && values.description != null && values.description != "")) {
            this.accountProv.agregarProyecto({ na: values.name, des: values.description, id_us: values.id_user }).subscribe(function (data) {
                var d = data;
                /*console.log('Datos del api regreso: ',d.mensaje)
                const toast = this.toastCtrl.create({
                  message: d.mensaje,
                  duration: 3000
                });
                toast.present();*/
                _this.viewCtrl.dismiss();
            }, function (error) { return console.error(error); });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'You must fill all the fields',
                duration: 3000
            });
            toast.present();
        }
    };
    ModalAddProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-add-projects',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-add-projects\modal-add-projects.html"*/'<!--\n\n  Generated template for the ModalAddProjectsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content no-padding no-margin>\n\n  <div style="height: 22px;">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n\n\n  <form [formGroup]="projectForm">\n\n    <div>\n\n      <ion-label stacked padding-left>Project name</ion-label>\n\n      <ion-card no-padding>\n\n        <ion-card-content no-padding ftext-center>\n\n          <ion-item>\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n    <div>\n\n      <ion-label stacked padding-left>Description</ion-label>\n\n      <ion-card no-padding>\n\n        <ion-card-content no-padding text-center>\n\n          <ion-item>\n\n            <ion-textarea formControlName="description"></ion-textarea>\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n    <p ion-text color="usingg" text-center>Terms and conditions</p>\n\n  </form>\n\n  <button ion-button full clear text-center color="dark" (click)="addNewProject()">Create</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-add-projects\modal-add-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ModalAddProjectsPage);
    return ModalAddProjectsPage;
}());

//# sourceMappingURL=modal-add-projects.js.map

/***/ })

});
//# sourceMappingURL=34.js.map