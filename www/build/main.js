webpackJsonp([55],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SesionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccupationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Theme; });
/* unused harmony export ThemeColor */
var SesionType;
(function (SesionType) {
    SesionType[SesionType["WORK"] = 2] = "WORK";
    SesionType[SesionType["HIRE"] = 3] = "HIRE";
})(SesionType || (SesionType = {}));
var OccupationType;
(function (OccupationType) {
    OccupationType[OccupationType["PHOTOGRAPHER"] = 1] = "PHOTOGRAPHER";
    OccupationType[OccupationType["VIDEOGRAPHER"] = 2] = "VIDEOGRAPHER";
    OccupationType[OccupationType["HAIR_MAKEUP"] = 3] = "HAIR_MAKEUP";
    OccupationType[OccupationType["TALENT"] = 4] = "TALENT";
})(OccupationType || (OccupationType = {}));
var Theme;
(function (Theme) {
    Theme["PHOTOGRAPHER"] = "photographer-theme";
    Theme["VIDEOGRAPHER"] = "videographer-theme";
    Theme["HAIR_MAKEUP"] = "makeup-theme";
    Theme["TALENT"] = "talent-theme";
    Theme["DEFAULT"] = "videographer-theme";
})(Theme || (Theme = {}));
var ThemeColor;
(function (ThemeColor) {
    ThemeColor["PHOTOGRAPHER"] = "photographer";
    ThemeColor["VIDEOGRAPHER"] = "videographer";
    ThemeColor["HAIR_MAKEUP"] = "makeup";
    ThemeColor["TALENT"] = "talent";
    ThemeColor["DEFAULT"] = "videographer";
})(ThemeColor || (ThemeColor = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPakageWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_home_work_menu_home_work__ = __webpack_require__(105);
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



var SelectPakageWorkPage = /** @class */ (function () {
    function SelectPakageWorkPage(navCtrl, navParams, accountProv, configProv, toastCtrl, modalCtrl, loadingCtrl) {
        /* this.priceGold, this.pricePremium*/
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountProv = accountProv;
        this.configProv = configProv;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.basic = false;
        this.priceBasic = 0;
        this.gold = false;
        this.priceGold = 0;
        this.premium = false;
        this.pricePremium = 0;
        this.sesionObject = {};
        this.id_user = "";
        this.edit = true;
        this.edit = navParams.get('edit');
        this.id_user = navParams.get('id_user');
        if (this.edit === false) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            /* let toast = this.toastCtrl.create({
              duration: 2000,
              message: 'Id del usuario:' + this.id_user,
              position: 'bottom'
            });
            toast.present(); */
        }).catch(function (error) { return console.error(error); });
    }
    /**
     * [next description]
     */
    SelectPakageWorkPage.prototype.next = function () {
        var _this = this;
        if (this.basic) {
            this.sesionObject.priceBasic = this.priceBasic;
        }
        else {
            this.sesionObject.priceBasic = 0;
        }
        if (this.gold) {
            this.sesionObject.priceGold = this.priceGold;
        }
        else {
            this.sesionObject.priceGold = 0;
        }
        if (this.premium) {
            this.sesionObject.pricePremium = this.pricePremium;
        }
        else {
            this.sesionObject.pricePremium = 0;
        }
        console.log(this.sesionObject);
        this.configProv.setSesionObject(this.sesionObject);
        /*  let toast = this.toastCtrl.create({
           duration: 2000,
           message: 'Id del usuario con datos:' + this.id_user + ' - ' + this.sesionObject,
           position: 'bottom'
         });
         toast.present() */
        if (this.edit == true) {
            /* let toast = this.toastCtrl.create({
              duration: 2000,
              message: 'Id del usuario:' + this.id_user,
              position: 'bottom'
            });
            toast.present() */
            this.configProv.getSesionObject().then(function (sesion) {
                /* let toast = this.toastCtrl.create({
                  duration: 9000,
                  message: 'Edit:' + this.edit + ' ' + this.id_user + '-' + sesion.id + this.priceBasic + this.priceGold + this.pricePremium,
                  position: 'bottom'
                });
                toast.present(); */
                _this.accountProv.selectPaquete({ id: sesion.id, cb: _this.priceBasic, cg: _this.priceGold, cp: _this.pricePremium }).subscribe(function (data) {
                    console.log(_this.edit, _this.id_user, data);
                    if (data != null) {
                        if (_this.edit == true) {
                            var toast = _this.toastCtrl.create({
                                duration: 6000,
                                message: 'Your packages were added successfully ',
                                position: 'bottom'
                            });
                            toast.present();
                            var myModalOptions = {
                                enableBackdropDismiss: false,
                                showBackdrop: false,
                                cssClass: 'my-modal-inner'
                            };
                            var modal_1 = _this.modalCtrl.create('ModalSuccessfulLoadPage', myModalOptions);
                            modal_1.present();
                            setTimeout(function () {
                                modal_1.dismiss();
                                if (data != null) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_home_work_menu_home_work__["a" /* MenuHomeWorkPage */]);
                                }
                                else {
                                    var toast_1 = _this.toastCtrl.create({
                                        duration: 6000,
                                        message: 'Your packages were not added',
                                        position: 'bottom'
                                    });
                                    toast_1.present();
                                }
                            }, 5000);
                        }
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            duration: 2000,
                            message: 'Your packages were not added',
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, function (error) { return console.error(error); });
            }).catch(function (error) { return console.error(error); });
        }
        else {
            this.accountProv.actualizarPaquetes({ id: this.id_user, cb: this.priceBasic, cg: this.priceGold, cp: this.pricePremium }).subscribe(function (data) {
                console.log(_this.edit, _this.id_user, data);
                if (data != null) {
                    var toast = _this.toastCtrl.create({
                        duration: 2000,
                        message: 'Your packages were updated successfully',
                        position: 'bottom'
                    });
                    toast.present();
                    _this.navCtrl.pop();
                    //Actualiza los datos en pantalla
                    _this.navCtrl.setRoot('PerfilWorkPage');
                }
                else {
                    var toast = _this.toastCtrl.create({
                        duration: 2000,
                        message: 'Your packages were not updated ',
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, function (error) { return console.error(error); });
        }
    };
    SelectPakageWorkPage.prototype.termConditions = function () {
        this.navCtrl.push('TermsConditionsPage');
    };
    SelectPakageWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-pakage-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\select-pakage-work\select-pakage-work.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Portfolio</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-toolbar no-padding>\n\n    <ion-grid *ngIf="edit">\n\n      <ion-row>\n\n        <ion-col col-12 class="colNav">\n\n          <h1>Step 5</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <h3 class="ion-title">Select a package</h3>\n\n    <h6>You can adjust your payments</h6>\n\n  </ion-toolbar>\n\n\n\n  <div padding>\n\n    <p><b>Packages</b></p>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <ion-item>\n\n            Basic\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-auto text-center>\n\n          <ion-item>\n\n            x\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>3 hrs</ion-label>\n\n            <ion-toggle [(ngModel)]="basic" checked="false"></ion-toggle>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="basic">\n\n        <ion-col col-1 text-right align-self-center justify-content-center>\n\n          $\n\n        </ion-col>\n\n        <ion-col col-7 align-self-center justify-content-center>\n\n          <ion-item>\n\n            $<ion-input type="number" placeholder="Type your budget" [(ngModel)]="priceBasic"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <ion-item>\n\n            Gold\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-auto text-center>\n\n          <ion-item>\n\n            x\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>5 hrs</ion-label>\n\n            <ion-toggle [(ngModel)]="gold" checked="false"></ion-toggle>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="gold">\n\n        <ion-col col-1 text-right align-self-center justify-content-center>\n\n          $\n\n        </ion-col>\n\n        <ion-col col-5 align-self-center justify-content-center>\n\n          <ion-item>\n\n            <ion-input type="number" placeholder="Type your budget" [(ngModel)]="priceGold"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6 text-center align-self-center justify-content-center>\n\n          + lunch break 45 min\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <ion-item style="font-size: 17px">Premium</ion-item>\n\n        </ion-col>\n\n        <ion-col col-auto text-center>\n\n          <ion-item>\n\n            x\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>8 hrs</ion-label>\n\n            <ion-toggle [(ngModel)]="premium" checked="false"></ion-toggle>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="premium">\n\n        <ion-col col-1 text-right align-self-center justify-content-center>\n\n          $\n\n        </ion-col>\n\n        <ion-col col-5 align-self-center justify-content-center>\n\n          <ion-item>\n\n            <ion-input type="number" placeholder="Type your budget" [(ngModel)]="pricePremium"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6 text-center align-self-center justify-content-center>\n\n          + lunch break 45 min\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row padding-top>\n\n        <ion-col col-12 text-wrap>\n\n          * Overtime will be charged 10% of the cost for each packages.\n\n        </ion-col>\n\n        <ion-col col-12 text-wrap>\n\n          * Lunch break food not provided by the client.\n\n        </ion-col>\n\n        <ion-col col-12 text-center text-wrap padding-top (click)="termConditions()" >\n\n          Check terms and conditions\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n    <button color="dark" text-capitalize ion-button full clear (click)="next()"><b style="font-size: 20px;">Next</b></button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\select-pakage-work\select-pakage-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], SelectPakageWorkPage);
    return SelectPakageWorkPage;
}());

//# sourceMappingURL=select-pakage-work.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_work_profile_work__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_crop__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_ionic_webview_ngx__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select_pakage_work_select_pakage_work__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//interfaces

//pages

//providers


//native






var EditInfoPage = /** @class */ (function () {
    function EditInfoPage(navCtrl, navParams, configProv, camera, crop, loadingCtrl, file, webView, accountProv, transfer, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.camera = camera;
        this.crop = crop;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.webView = webView;
        this.accountProv = accountProv;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.showComp = false;
        this.imgAttr = [{
                element: 'class',
                value: 'img'
            }];
        this.occupations = [
            {
                title: 'Photographer',
                subtitle: 'Photographer',
                color: '#ff9100',
                occupationType: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["a" /* OccupationType */].PHOTOGRAPHER,
                theme: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["c" /* Theme */].PHOTOGRAPHER,
                tags: [
                    "Fashion",
                    "Animals",
                    "Food",
                    "Children",
                    "Product",
                    "Nude",
                    "Outdoors",
                    "Street style",
                    "Nature",
                    "Sports",
                    "Events",
                    "Wedding",
                    "Documentary"
                ]
            },
            {
                title: 'Videographer',
                subtitle: 'Videographer',
                color: '#2196f3',
                occupationType: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["a" /* OccupationType */].VIDEOGRAPHER,
                theme: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["c" /* Theme */].VIDEOGRAPHER,
                tags: [
                    "Fashion",
                    "Animals",
                    "Food",
                    "Children",
                    "Product",
                    "Nude",
                    "Outdoors",
                    "Street style",
                    "Nature",
                    "Sports",
                    "Events",
                    "Wedding",
                    "Documentary"
                ]
            },
            {
                title: 'Hair and Makeup',
                subtitle: 'Hair',
                color: '#f50057',
                occupationType: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["a" /* OccupationType */].HAIR_MAKEUP,
                theme: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["c" /* Theme */].HAIR_MAKEUP,
                tags: [
                    "Party",
                    "Wedding",
                    "Casual",
                    "High Fashion",
                    "Body paint",
                    "Children",
                    "Commercial"
                ]
            },
            {
                title: 'Talent',
                subtitle: 'Talent',
                color: '#76ff03',
                occupationType: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["a" /* OccupationType */].TALENT,
                theme: __WEBPACK_IMPORTED_MODULE_2__model_interfaces_interfaces__["c" /* Theme */].TALENT,
                tags: [
                    "Music",
                    "Singer",
                    "Clown",
                    "Art",
                    "Musician",
                    "Performance",
                    "Actor",
                    "Actress",
                    "Magic",
                    "Paint"
                ]
            }
        ];
        this.occupationsEdit = [];
        this.sesionObject = { nombre: '', photoUri: null };
        this.statesList = [];
        this.filteredRegionsList = [];
        this.edit = true;
        this.id_user = "";
        this.newPhoto = 0;
        this.edit = navParams.get('edit');
        if (this.edit === false) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        this.configProv.getSesionObject().then(function (data) {
            _this.sesionObject = data;
            _this.id_user = _this.sesionObject.id;
            console.log('DATA SESION: ', _this.sesionObject, _this.sesionObject.id);
            console.log('Los datos', _this.sesionObject, _this.occupations);
            _this.configProv.setSesionObject(_this.sesionObject);
            _this.sesionObject.photoUri = data['foto'];
            _this.sesionObject.state = data['estado'];
            _this.sesionObject.region = data['municipio'];
            /* if (this.edit == false) {
              this.accountProv.todoPerfil(this.id_user).subscribe(data => {
                console.log('Datos todo perfil:', data)
                this.sesionObject = data;
                if (data.entra != 0) {
                }
              }, error => console.error(error));
            } */
            if (_this.sesionObject.ocupation == "Photographer") {
                _this.occupationsEdit.push(_this.occupations[0]);
                console.log(_this.occupationsEdit);
            }
            else if (_this.sesionObject.ocupation == "Videographer") {
                _this.occupationsEdit.push(_this.occupations[1]);
                console.log(_this.occupationsEdit);
            }
            else if (_this.sesionObject.ocupation == "Hair") {
                _this.occupationsEdit.push(_this.occupations[2]);
                console.log(_this.occupationsEdit);
            }
            else if (_this.sesionObject.ocupation == "Talent") {
                _this.occupationsEdit.push(_this.occupations[3]);
                console.log(_this.occupationsEdit);
            }
        }).catch(function (error) { return console.error(error); });
        this.configProv.getStateList().subscribe(function (data) {
            var states = data;
            _this.statesList = states;
        }, function (error) { return console.error(error); });
    }
    EditInfoPage.prototype.changeState = function (event) {
        this.sesionObject.estado = event.descripcion;
        this.regionsList = event.regions;
    };
    EditInfoPage.prototype.changeRegion = function (event) {
        this.sesionObject.municipio = event;
    };
    EditInfoPage.prototype.changeOcupation = function (occupation) {
        var _this = this;
        this.configProv.setTheme(occupation.theme);
        this.sesionObject.ocupation = occupation.subtitle;
        if (this.sesionObject.photoUri != null || this.sesionObject.photoUri != undefined) {
            this.uploadImage(occupation);
        }
        else {
            console.log('Datos sin foto:', this.sesionObject.id, this.id_user, this.sesionObject.nombre, this.sesionObject.estado, this.sesionObject.municipio, (this.sesionObject.photoUri != undefined) ? this.sesionObject.photoUri : '', this.sesionObject.ocupation);
            this.accountProv.editarInfoWork({ id: (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user, na: this.sesionObject.nombre, es: this.sesionObject.estado, mu: this.sesionObject.municipio, fo: null, oc: this.sesionObject.ocupation }).subscribe(function (edit) {
                console.log('Edit api', edit);
                if (edit.entra === "1") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_work_profile_work__["a" /* ProfileWorkPage */], { ocupation: occupation });
                }
            }, function (error) { console.error(error); _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_work_profile_work__["a" /* ProfileWorkPage */], { ocupation: occupation }); });
        }
        this.configProv.setSesionObject(this.sesionObject);
    };
    EditInfoPage.prototype.changePhoto = function (si) {
        var _this = this;
        this.newPhoto = si;
        var cameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true,
        };
        this.camera.getPicture(cameraOptions).then(function (data) {
            _this.sesionObject.photoUri = "data:image/jpeg;base64," + data;
            _this.configProv.setSesionObject(_this.sesionObject);
            _this.imageURI = data;
        }).catch(function (error) { return console.error(error); });
    };
    EditInfoPage.prototype.uploadImage = function (occupation) {
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
        var params = {
            'id': (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user,
            'na': this.sesionObject.nombre,
            'es': this.sesionObject.estado,
            'mu': this.sesionObject.municipio,
            'oc': this.sesionObject.ocupation
        };
        //option transfer
        var options = {
            fileKey: 'fo',
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            params: params,
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(this.sesionObject.photoUri, 'http://d-ies.com/FilmTrade/API/editarInfoWork.php', options).then(function (data) {
            loader.dismiss();
            if (data != null) {
                /*  let toast = this.toastCtrl.create({
                   duration: 2000,
                   message: 'Data added correctly',
                   position: 'bottom'
                 });
                 toast.present(); */
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_work_profile_work__["a" /* ProfileWorkPage */], { ocupation: occupation });
            }
            else {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Error inserting data',
                    position: 'bottom'
                });
                toast.present();
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
    EditInfoPage.prototype.uploadImageEdit = function () {
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
        var params = {
            'id': (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user,
            'na': this.sesionObject.nombre,
            'es': this.sesionObject.estado,
            'mu': this.sesionObject.municipio,
            'oc': this.sesionObject.ocupation
        };
        //option transfer
        var options = {
            fileKey: 'fo',
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            params: params,
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(this.sesionObject.photoUri, 'http://d-ies.com/FilmTrade/API/editarInfoWork.php', options).then(function (data) {
            loader.dismiss();
            if (data != null) {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Your changes have been saved succesfully',
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Error editing data',
                    position: 'bottom'
                });
                toast.present();
            }
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                duration: 2000,
                message: 'Error editing data',
                position: 'bottom'
            });
            toast.present();
        });
    };
    EditInfoPage.prototype.updateInfo = function () {
        var _this = this;
        console.log('Quiere foto: ', this.newPhoto);
        if (this.newPhoto == 1) {
            this.uploadImageEdit();
        }
        else {
            this.accountProv.editarInfoWork({ id: (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user, na: this.sesionObject.nombre, es: this.sesionObject.estado, mu: this.sesionObject.municipio, fo: null, oc: this.sesionObject.ocupation }).subscribe(function (edit) {
                if (edit.entra === "1") {
                    var toast_1 = _this.toastCtrl.create({
                        duration: 2000,
                        message: 'Your changes have been saved successfully',
                        position: 'bottom'
                    });
                    toast_1.present();
                    //Actualiza los datos en pantalla
                    _this.navCtrl.push('PerfilWorkPage');
                }
            }, function (error) { return console.error(error); });
            var toast = this.toastCtrl.create({
                duration: 2000,
                message: 'Your changes have been saved successfully',
                position: 'bottom'
            });
            toast.present();
            //Actualiza los datos en pantalla
            this.navCtrl.push('PerfilWorkPage');
        }
    };
    EditInfoPage.prototype.openPackagePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__select_pakage_work_select_pakage_work__["a" /* SelectPakageWorkPage */], { edit: false });
    };
    EditInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-info',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\edit-info\edit-info.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Edit Info</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-toolbar no-padding>\n\n    <ion-grid *ngIf="edit">\n\n      <ion-row>\n\n        <ion-col col-6 class="colNav">\n\n          <h1>Step 2</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid *ngIf="!edit">\n\n      <ion-row>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n    <h3 class="ion-title"></h3>\n\n  </ion-toolbar>\n\n  <div *ngIf="edit">\n\n    <img *ngIf="(sesionObject.photoUri != null && sesionObject.photoUri != undefined)" class="img" (click)="changePhoto(1)"\n\n      [src]="sesionObject.photoUri">\n\n    <img *ngIf="(sesionObject.photoUri == null && sesionObject.photoUri == undefined)" (click)="changePhoto()" class="plus img"\n\n      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTBoLTEwdi0xMGgtNHYxMGgtMTB2NGgxMHYxMGg0di0xMGgxMHoiLz48L3N2Zz4=">\n\n  </div>\n\n  <div *ngIf="!edit">\n\n    <img *ngIf="(sesionObject.photoUri != null && sesionObject.photoUri != undefined)" class="img2" (click)="changePhoto(1)"\n\n      [src]="sesionObject.photoUri">\n\n    <img *ngIf="(sesionObject.photoUri == null && sesionObject.photoUri == undefined)" (click)="changePhoto()" class="plus img2"\n\n      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTBoLTEwdi0xMGgtNHYxMGgtMTB2NGgxMHYxMGg0di0xMGgxMHoiLz48L3N2Zz4=">\n\n  </div>\n\n\n\n\n\n  <div padding center center-text>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 margin-bottom>\n\n          <ion-item>\n\n            <ion-label floating>NAME</ion-label>\n\n            <ion-input type="text" [(ngModel)]="sesionObject.nombre"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6 center text-center no-padding>\n\n          <p no-margin>STATE</p>\n\n        </ion-col>\n\n        <ion-col col-6 center text-center no-padding>\n\n          <p no-margin>MUNICIPALITY</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-label floating> </ion-label>\n\n            <ion-select (ionChange)="changeState($event)" interface="popover" placeholder="Select one">\n\n              <ion-option *ngFor="let stateIn of statesList" [value]="stateIn">{{ stateIn.descripcion }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-label floating> </ion-label>\n\n            <ion-select (ionChange)="changeRegion($event)" interface="popover" placeholder="Select one">\n\n              <ion-option *ngFor="let region of regionsList" [value]="region">{{ region }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row align-items-end>\n\n        <ion-col align-self-end>\n\n          <ion-item>\n\n            <h2>OCCUPATION</h2>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="edit">\n\n        <ion-col>\n\n          <ion-card *ngFor="let occupation of occupations" (click)="changeOcupation(occupation)">\n\n            <ion-card-content no-padding>\n\n              <ion-card-title text-center>\n\n                {{occupation.title}}\n\n              </ion-card-title>\n\n            </ion-card-content>\n\n            <hr class="linea" [ngStyle]="{\'background\': occupation.color}">\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="!edit">\n\n        <ion-col>\n\n          <ion-card *ngFor="let occupationedi of occupationsEdit">\n\n            <ion-card-content no-padding>\n\n              <ion-card-title text-center>\n\n                {{occupationedi.title}}\n\n              </ion-card-title>\n\n            </ion-card-content>\n\n            <hr class="linea" [ngStyle]="{\'background\': occupationedi.color}">\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <button *ngIf="!edit" style="margin-left:15px; background:transparent; color: gray; font-size:15px" (click)="openPackagePage()" ><b>Edit your packages</b></button>\n\n    <button *ngIf="!edit" color="dark" text-capitalize text-center full ion-button clear (click)="updateInfo()" ><b>Next</b></button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\edit-info\edit-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_ionic_webview_ngx__["a" /* WebView */], __WEBPACK_IMPORTED_MODULE_5__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], EditInfoPage);
    return EditInfoPage;
}());

//# sourceMappingURL=edit-info.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuHomeWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_info_edit_info__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
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

var MenuHomeWorkPage = /** @class */ (function () {
    function MenuHomeWorkPage(navCtrl, navParams, events, configProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.configProv = configProv;
        this.eventOnTabChange = 'TAB_CHANGED';
        this.rootPage = 'PerfilWorkPage';
        this.sesionObject = {};
        this.configProv.getSesionObject().then(function (sesion) { return _this.sesionObject = sesion; }).catch(function (error) { return console.error(error); });
        this.pages = [
            { title: 'Perfil', component: 'PerfilWorkPage' },
            { title: 'Notifications', component: 'NotificationsWorkPage' },
            { title: 'Chats', component: 'ChatListPage' },
            { title: 'Settings', component: 'SetingsPage' },
            { title: 'Linked accounts', component: 'LinkedAccountsPage' },
            { title: 'Verify your ID*', component: 'IdVerificationPage' },
            //{ title: 'Terms and conditions', component: 'TermsConditionsPage' },
            { title: 'Copyright', component: 'CopyrightPage' }
        ];
    }
    MenuHomeWorkPage.prototype.openPage = function (page) {
        this.events.publish(this.eventOnTabChange, page.component);
    };
    MenuHomeWorkPage.prototype.editInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_info_edit_info__["a" /* EditInfoPage */], { edit: false });
    };
    MenuHomeWorkPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) { return _this.sesionObject = sesion; }).catch(function (error) { return console.error(error); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MenuHomeWorkPage.prototype, "nav", void 0);
    MenuHomeWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu-home-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\menu-home-work\menu-home-work.html"*/'<!--\n\n  Generated template for the MenuHomeWorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content>\n\n      </ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-list class="listperfil">\n\n      <ion-item text-wrap class="itemperfil">\n\n        <ion-avatar item-start>\n\n          <img [src]="(sesionObject.foto != undefined && sesionObject.foto != null)?sesionObject.foto:\'assets/imgs/agregar_img.png\'">\n\n        </ion-avatar>\n\n        <h2><b>{{ sesionObject.nombre }}</b></h2>\n\n        <p>{{ sesionObject.email }}</p>\n\n        <a (click)="editInfo()">Change information</a>\n\n      </ion-item>\n\n    </ion-list>\n\n    <!-- \n\n    <ion-list no-lines>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list> -->\n\n    <header-menu></header-menu>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\menu-home-work\menu-home-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], MenuHomeWorkPage);
    return MenuHomeWorkPage;
}());

//# sourceMappingURL=menu-home-work.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_interfaces_interfaces__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//RxJS


var ConfigProvider = /** @class */ (function () {
    function ConfigProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.BASE_API = 'http://d-ies.com/FilmTrade/API/';
        this.SESION_OBJECT_KEY = 'sesion_object';
        this.SESION_PROJECT_KEY = 'sesion_project';
        this.URL_STATES_LIST = 'assets/json/states.json';
        this.URL_REGIONS_LIST = 'assets/json/regions.json';
        this.STATES_LIST = [];
        this.REGIONS_LIST = {};
        this.THEME_KEY = 'theme';
        this.theme = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_3__model_interfaces_interfaces__["c" /* Theme */].DEFAULT);
        this.items2 = [];
        this.LISTA_PERFILES = this.BASE_API + 'listaPerfiles.php?id=';
        this.ALL_PERFILH = this.BASE_API + 'todoPerfil.php?id=';
        this.LISTA_FAVORITES = this.BASE_API + 'listaFavoritos.php?id=';
        this.LISTA_PERFILESAll = this.BASE_API + 'listaPerfilesAll.php';
        this.PROJECTS_EXIS = this.BASE_API + 'proyectosExistentes.php?id=';
        this.storage.get(this.THEME_KEY).then(function (data) {
            if (data != null) {
                _this.theme.next(data);
            }
        }).catch(function (error) { return console.error(error); });
    }
    ConfigProvider.prototype.getTheme = function () {
        return this.theme.asObservable();
    };
    ConfigProvider.prototype.setTheme = function (theme) {
        this.theme.next(theme);
        this.storage.set(this.THEME_KEY, theme).then(function (data) { return console.log(data); }).catch(function (error) { return console.error(error); });
    };
    ConfigProvider.prototype.removeTheme = function () {
        this.storage.remove(this.THEME_KEY).then(function (data) { return console.log(data); }).catch(function (error) { return console.error; });
    };
    ConfigProvider.prototype.getApiServer = function () {
        return this.BASE_API;
    };
    ConfigProvider.prototype.setApiServer = function (api_server) {
        this.BASE_API = api_server;
    };
    ConfigProvider.prototype.getSesionObject = function () {
        return this.storage.get(this.SESION_OBJECT_KEY);
    };
    ConfigProvider.prototype.setSesionObject = function (sesionObject) {
        this.storage.set(this.SESION_OBJECT_KEY, sesionObject).then(function (data) {
            console.log(data);
        }).catch(function (error) { return console.error(error); });
    };
    ConfigProvider.prototype.removeSesionObject = function () {
        this.storage.remove(this.SESION_OBJECT_KEY).then(function (data) {
            console.log(data);
        }).catch(function (error) { return console.error(error); });
    };
    //Hire
    ConfigProvider.prototype.getStateList = function () {
        return this.http.get(this.URL_STATES_LIST);
    };
    ConfigProvider.prototype.getRegionsList = function () {
        return this.http.get(this.URL_REGIONS_LIST);
    };
    ConfigProvider.prototype.getListProfiles = function (id) {
        var _this = this;
        console.log(this.LISTA_PERFILES + id);
        this.items = this.http.get(this.LISTA_PERFILES + id);
        this.items.subscribe(function (data) {
            _this.items2 = data;
        }, function (error) { return console.error(error); });
        return this.http.get(this.LISTA_PERFILES + id);
    };
    ConfigProvider.prototype.getListProfilesAll = function () {
        var _this = this;
        console.log(this.LISTA_PERFILESAll);
        this.items = this.http.get(this.LISTA_PERFILESAll);
        this.items.subscribe(function (data) {
            _this.items2 = data;
        }, function (error) { return console.error(error); });
        return this.http.get(this.LISTA_PERFILESAll);
    };
    ConfigProvider.prototype.getAllPerfil = function (id) {
        return this.http.get(this.ALL_PERFILH + id);
    };
    ConfigProvider.prototype.getListFavorites = function (id) {
        return this.http.get(this.LISTA_FAVORITES + id);
    };
    ConfigProvider.prototype.getProjectExis = function (id) {
        return this.http.get(this.PROJECTS_EXIS + id);
    };
    ConfigProvider.prototype.filterItems = function (searchTerm) {
        if (this.items2 == null) {
            return null;
        }
        else {
            return this.items2.filter(function (item) {
                return item.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }
    };
    ConfigProvider.prototype.setAddProject = function (sesionObject) {
        this.storage.set(this.SESION_PROJECT_KEY, sesionObject).then(function (data) {
            console.log(data);
        }).catch(function (error) { return console.error(error); });
    };
    ConfigProvider.prototype.setAllPerfil = function (sesionObject) {
        this.storage.set(this.SESION_OBJECT_KEY, sesionObject).then(function (data) {
            console.log(data);
        }).catch(function (error) { return console.error(error); });
    };
    ConfigProvider.prototype.getSesionObjectProject = function () {
        return this.storage.get(this.SESION_PROJECT_KEY);
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProfilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
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



var ListProfilesPage = /** @class */ (function () {
    function ListProfilesPage(navCtrl, navParams, configProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.isSearchbrOpened = false;
        this.listProfiles = [];
        this.foundBooks = [];
        this.cah = false;
        this.sesionObject = {};
        this.mymodel = false;
        this.searchTerm = '';
        this.searching = false;
        this.configProv.getSesionObject().then(function (sesion) { _this.sesionObject = sesion; console.log(_this.sesionObject); }).catch(function (error) { return console.error(error); });
        this.id = navParams.get('id');
        this.cah = navParams.get('cah');
        console.log(this.id);
        console.log(this.cah);
        if (this.cah == true) {
            this.configProv.getListProfiles(this.id).subscribe(function (data) {
                var states = data;
                _this.listProfiles = states;
                _this.foundBooks = Array.of(states);
                console.log("list: ", _this.listProfiles);
                console.log("found: ", _this.foundBooks);
            }, function (error) { return console.error(error); });
        }
        else {
            console.log('Otro');
            this.configProv.getListProfilesAll().subscribe(function (data) {
                var states = data;
                _this.listProfiles = states;
            }, function (error) { return console.error(error); });
        }
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]();
    }
    ListProfilesPage_1 = ListProfilesPage;
    ListProfilesPage.prototype.openProfile = function (item) {
        this.navCtrl.push('PerfilWorkHirePage', { id: item.id });
    };
    ListProfilesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.listProfiles != undefined || this.listProfiles != null) {
            this.setFilteredItems();
            this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
                _this.searching = false;
                _this.setFilteredItems();
            });
        }
        else {
            console.log('No hay datos');
        }
    };
    ListProfilesPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    ListProfilesPage.prototype.setFilteredItems = function () {
        this.listProfiles = this.configProv.filterItems(this.searchTerm);
    };
    ListProfilesPage.prototype.tabs = function () {
        /* this.navCtrl.setRoot('YourProjectsPage'); */
        console.log(this.mymodel);
        if (this.mymodel == 'segment1') {
            this.navCtrl.setRoot('CategoryHirePage');
        }
        if (this.mymodel == 'segment2') {
            this.navCtrl.setRoot('YourProjectsPage');
        }
        if (this.mymodel == 'segment3') {
            this.navCtrl.setRoot(ListProfilesPage_1);
        }
        if (this.mymodel == 'segment4') {
            this.navCtrl.setRoot('FavoritesPage');
        }
    };
    ListProfilesPage = ListProfilesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-profiles',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\list-profiles\list-profiles.html"*/'<!--\n\n  Generated template for the ListProfilesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="listProfiles == undefined && listProfiles == null">List of Profiles</ion-title>\n\n    <ion-searchbar *ngIf="listProfiles != undefined && listProfiles != null" [(ngModel)]="searchTerm" [formControl]="searchControl"\n\n      (ionInput)="onSearchInput()"></ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="seccionw">\n\n  <div class="divB" text-center *ngIf="listProfiles != undefined && listProfiles != null">\n\n    <p style="display: inline;">{{listProfiles.length}} Available</p>\n\n    <div style="display: inline;" [ngSwitch]="id">\n\n      <p style="display: inline;" *ngSwitchCase="1">Photographer</p>\n\n      <p style="display: inline;" *ngSwitchCase="2">Videographer</p>\n\n      <p style="display: inline;" *ngSwitchCase="3">Hair & Makeup</p>\n\n      <p style="display: inline;" *ngSwitchCase="4">Talent</p>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="searching" class="spinner-container">\n\n    <ion-spinner></ion-spinner>\n\n  </div>\n\n\n\n  <div class="list-avatar-page" *ngIf="listProfiles != undefined && listProfiles != null">\n\n    <ion-list>\n\n      <ion-item *ngFor="let list of listProfiles;let i=index" (click)="openProfile(list)">\n\n        <ion-avatar item-start>\n\n          <img [src]="list.foto">\n\n        </ion-avatar>\n\n        <h6><b>{{ list.nombre }}</b></h6>\n\n        <p text-uppercase>{{ list.ocupation }} |</p>\n\n        <p text-uppercase>{{ list.tags}}</p>\n\n        <ion-grid>\n\n          <ion-row align-items-center>\n\n            <ion-col col-auto>\n\n              <img class="imgStart" src=" ../../assets/icon/favorito.png">\n\n            </ion-col>\n\n            <ion-col text-left style="text-align: left; margin-left: 10px;">\n\n              <h5>{{ list.calificacion }}</h5>\n\n            </ion-col>\n\n            <ion-col col-auto>\n\n              <ion-note padding-right>\n\n                <!-- <ion-icon color="using" name=\'cash-outline\'></ion-icon> -->\n\n              </ion-note>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>Packages from:</p> <br>\n\n              <div style="display: inline;" [ngSwitch]="id">\n\n                  <ion-col col-auto>\n\n                      <img class="imgStart" src=" ../../assets/icon/billete-photo.PNG" *ngSwitchCase="1" style="height: 15px;">\n\n                      <img class="imgStart" src=" ../../assets/icon/billete-video.PNG" *ngSwitchCase="2" style="height: 15px;">\n\n                      <img class="imgStart" src=" ../../assets/icon/billete-make.PNG" *ngSwitchCase="3" style="height: 15px;">\n\n                      <img class="imgStart" src=" ../../assets/icon/billete-talent.PNG" *ngSwitchCase="4" style="height: 15px;">\n\n                    </ion-col>\n\n                </div>\n\n              <p *ngIf="(list.basic > 0 && list.basic != undefined)">${{ list.basic }} -</p>\n\n              <p *ngIf="(list.basic == 0 && list.gold > 0 || list.premium == 0 && list.gold > 0)">${{ list.gold }}</p>\n\n              <p *ngIf="(list.premium > 0 && list.premium != undefined)">- ${{ list.premium }}</p>\n\n              <p> MXN</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="list-none-page" *ngIf="listProfiles == undefined && listProfiles == null">\n\n    <ion-list>\n\n      <ion-item text-center>\n\n        <h1>No hay artistas registrados</h1>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <!-- <footer-tabs-hire></footer-tabs-hire> -->\n\n  <ion-segment [(ngModel)]="mymodel"> \n\n    <ion-segment-button value="segment1" (click)="tabs()">\n\n      <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="segment2" (click)="tabs()">\n\n      <ion-icon ios="ios-briefcase-outline" md="md-briefcase"></ion-icon>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="segment3" (click)="tabs()">\n\n      <ion-icon ios="ios-search-outline" md="md-search"></ion-icon>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="segment4" (click)="tabs()">\n\n      <ion-icon ios="ios-star-half-outline" md="md-star-half"></ion-icon>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\list-profiles\list-profiles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], ListProfilesPage);
    return ListProfilesPage;
    var ListProfilesPage_1;
}());

//# sourceMappingURL=list-profiles.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutFtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
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
 * Generated class for the AboutFtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutFtPage = /** @class */ (function () {
    function AboutFtPage(navCtrl, navParams, configProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.sesionObject = [{}];
        this.configProv.getSesionObject().then(function (sesion) { _this.sesionObject = sesion; console.log(_this.sesionObject); }).catch(function (error) { return console.error(error); });
    }
    AboutFtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutFtPage');
    };
    AboutFtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-ft',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\about-ft\about-ft.html"*/'<!--\n\n  Generated template for the AboutFtPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="seccion">\n\n    <h1 no-margin><b>About FilmTrade</b></h1>\n\n  </div>\n\n  <div padding style="text-align: justify">\n\n    <p>Film Trade is a one-stop service platform where you can find and hire creative pros for any type of audiovisual\n\n      service.</p>\n\n    <p>Our easy to use app consists of a vast database of ready to work professionals, accesible at the best rates in\n\n      the market.</p>\n\n    <p>\n\n      Forget the creative industry as you know it and get ready to book, work and get paid on the spot.\n\n    </p>\n\n    <br>\n\n    <p>\n\n      Welcome to FILM TRADE.\n\n    </p>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <!-- <div *ngIf="sesionObject.tipo_usuario == 2">\n\n    <footer-tabs></footer-tabs>\n\n  </div>\n\n  <div *ngIf="sesionObject.tipo_usuario == 3">\n\n    <footer-tabs-hire></footer-tabs-hire>\n\n  </div> -->\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\about-ft\about-ft.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], AboutFtPage);
    return AboutFtPage;
}());

//# sourceMappingURL=about-ft.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_pakage_work_select_pakage_work__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_account_account__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//native



//pages

//providers


var PortfolioWorkPage = /** @class */ (function () {
    function PortfolioWorkPage(navCtrl, navParams, configProv, camera, actionSheetCtrl, file, loadingCtrl, transfer, toastCtrl, acoutProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.acoutProv = acoutProv;
        this.droping = false;
        this.photoList = [];
        this.edit = true;
        this.edit = navParams.get('edit');
        if (this.edit === false) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        this.configProv.getSesionObject().then(function (data) {
            _this.sesionObject = data;
            _this.id_user = data.id;
            _this.acoutProv.portafolio(data.id).subscribe(function (port) {
                var stringFoto = port.galeria;
                if (port.galeria != null) {
                    var arrayFoto = stringFoto.split(',');
                    _this.photoList = arrayFoto;
                }
                else {
                    if (_this.sesionObject.photos != undefined) {
                        _this.photoList = _this.sesionObject.photos;
                    }
                }
            }, function (error) { return console.error(error); });
            /*  if (this.sesionObject.photos != undefined) {
               this.photoList = this.sesionObject.photos;
             } */
        }).catch(function (error) { return console.error(error); });
    }
    PortfolioWorkPage.prototype.addPhoto = function () {
        var _this = this;
        if (this.photoList.length < 10) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Select the media to upload',
                enableBackdropDismiss: true,
                buttons: [
                    {
                        text: 'Cancel',
                        icon: 'md-close-circle',
                        role: 'cancel'
                    },
                    {
                        text: 'Photo',
                        icon: 'md-camera',
                        handler: function () {
                            _this.pickMedia(__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["c" /* MediaType */].PICTURE);
                        }
                    },
                    {
                        text: 'Video',
                        icon: 'md-videocam',
                        handler: function () {
                            _this.pickMedia(__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["c" /* MediaType */].VIDEO);
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var toast = this.toastCtrl.create({
                duration: 2000,
                message: 'Full gallery',
                position: 'bottom'
            });
            toast.present();
        }
    };
    PortfolioWorkPage.prototype.pickMedia = function (type) {
        var _this = this;
        var cameraOptions = {
            quality: 100,
            destinationType: __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["b" /* DestinationType */].FILE_URL,
            sourceType: __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["d" /* PictureSourceType */].PHOTOLIBRARY,
            mediaType: type,
            allowEdit: true,
            correctOrientation: true,
        };
        this.camera.getPicture(cameraOptions).then(function (data) {
            /* let loading = this.loadingCtrl.create({
              spinner: 'dots',
              content: 'Encoding picture'
            }); */
            var d = data;
            var filename = d.substring(d.lastIndexOf('/') + 1).split('?')[0];
            var path = d.substring(0, d.lastIndexOf('/') + 1);
            console.log('Name', filename);
            console.log('Path', path);
            /* loading.present(); */
            if ((filename != undefined || filename != null) && (path != undefined || path != null)) {
                _this.file.readAsDataURL(path, filename).then(function (picture) {
                    /* let toast = this.toastCtrl.create({
                      duration: 10000,
                      message: 'Es la ' + picture,
                      position: 'bottom'
                    });
                    toast.present(); */
                    _this.photoList.push(picture);
                    _this.photoUri = picture;
                    _this.uploadImage(type);
                    //loading.dismiss();
                }).catch(function (error) {
                    console.error(error);
                    //loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        duration: 10000,
                        message: 'Error inserting data ',
                        position: 'bottom'
                    });
                    toast.present();
                });
            }
            console.log(_this.photoList);
        }).catch(function (error) { return console.error(error); });
    };
    PortfolioWorkPage.prototype.next = function () {
        this.sesionObject.photos = this.photoList;
        this.configProv.setSesionObject(this.sesionObject);
        if (this.edit = true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__select_pakage_work_select_pakage_work__["a" /* SelectPakageWorkPage */], { id_user: this.id_user });
        }
        else {
            this.navCtrl.pop();
        }
    };
    PortfolioWorkPage.prototype.dropMedia = function (i) {
        var _this = this;
        this.droping = !this.droping;
        this.photoList.splice(i, 1);
        this.posicion = i;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.acoutProv.eliminarGaleria({ id_user: _this.id_user, posicion: _this.posicion }).subscribe(function (data) {
                console.log('valor this.posicion', _this.posicion);
                console.log('id de usuario', _this.id_user);
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    };
    PortfolioWorkPage.prototype.uploadImage = function (type) {
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
        var params = {
            'id_us': this.id_user,
            'des': 'Descrip' + this.id_user,
            'lu': 'Lugar' + this.id_user
        };
        var img = 'image/jpeg';
        var video = 'video/mp4';
        var fileExtencionType = (type == 0) ? ".jpg" : ".mp4";
        //option transfer
        var options = {
            fileKey: 'fi',
            fileName: "myImage_" + random + fileExtencionType,
            chunkedMode: false,
            httpMethod: 'post',
            params: params,
            mimeType: (type == 0) ? img : video,
            headers: {}
        };
        //video / mp4
        //file transfer action
        fileTransfer.upload(this.photoUri, 'http://d-ies.com/FilmTrade/API/Galeria.php', options).then(function (data) {
            loader.dismiss();
            if (data != null) {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Your changes have been saved successfully',
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Error inserting data ',
                    position: 'bottom'
                });
                toast.present();
            }
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                duration: 2000,
                message: 'Error inserting data ',
                position: 'bottom'
            });
            toast.present();
        });
    };
    PortfolioWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-portfolio-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\portfolio-work\portfolio-work.html"*/'<!--\n\n  Generated template for the PortfolioWorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Portfolio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-toolbar no-padding>\n\n    <ion-grid *ngIf="edit">\n\n      <ion-row>\n\n        <ion-col col-11 class="colNav">\n\n          <h1>Step 4</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <h3 class="ion-title">Choose your work</h3>\n\n    <h6>10 photos or videos</h6>\n\n  </ion-toolbar>\n\n\n\n  <div padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col *ngFor="let photo of photoList; let i = index" col-6>\n\n          <ion-card (click)="addPhoto()">\n\n            <ion-icon *ngIf="droping" (click)="dropMedia(i)" color="danger" name="md-close-circle"></ion-icon>\n\n\n\n            <div *ngIf=" !photo.includes(\'.mp4\') ;else showVideo">\n\n              <img (press)="droping = !droping" [src]="photo" class="center-cropped" />\n\n            </div>\n\n\n\n            <ng-template #showVideo>\n\n              <div class="center-video" (press)="droping = !droping">\n\n                <video controls="true" width="100" height="127" [src]="photo" type=\'video/mp4\'></video>\n\n              </div>\n\n            </ng-template>\n\n\n\n\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col *ngIf="photoList.length < 10" col-6>\n\n          <ion-card (click)="addPhoto()">\n\n            <img class="plus" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTBoLTEwdi0xMGgtNHYxMGgtMTB2NGgxMHYxMGg0di0xMGgxMHoiLz48L3N2Zz4=">\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer *ngIf="edit">\n\n  <button ion-button full clear text-capitalize color="dark" (click)="next()"><b>Next</b></button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\portfolio-work\portfolio-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_7__providers_account_account__["a" /* AccountProvider */]])
    ], PortfolioWorkPage);
    return PortfolioWorkPage;
}());

//# sourceMappingURL=portfolio-work.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInfoHirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_ionic_webview_ngx__ = __webpack_require__(151);
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


//native





var EditInfoHirePage = /** @class */ (function () {
    function EditInfoHirePage(navCtrl, navParams, configProv, camera, crop, loadingCtrl, file, webView, accountProv, transfer, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.camera = camera;
        this.crop = crop;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.webView = webView;
        this.accountProv = accountProv;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.showComp = false;
        this.imgAttr = [{
                element: 'class',
                value: 'img'
            }];
        this.editID = false;
        this.sesionObject = { nombre: '', photoUri: null, compania: null };
        this.statesList = [];
        this.newPhoto = 0;
        this.configProv.getSesionObject().then(function (data) {
            _this.sesionObject = data;
            console.log('Datos Edit:', data);
            _this.accountProv.perfilHire(_this.sesionObject.id).subscribe(function (data) {
                _this.sesionObject = data;
                console.log('Datos Edit:', data);
                _this.sesionObject.photoUri = data['foto'];
                _this.sesionObject.state = data['estado'];
                _this.sesionObject.region = data['municipio'];
                _this.sesionObject.compania = data['compania'];
            }, function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
        this.configProv.getStateList().subscribe(function (data) {
            var states = data;
            _this.statesList = states;
        }, function (error) { return console.error(error); });
    }
    EditInfoHirePage.prototype.changeState = function (event) {
        this.sesionObject.state = event.descripcion;
        this.regionsList = event.regions;
    };
    EditInfoHirePage.prototype.changeRegion = function (event) {
        console.log('Regin', event);
        this.sesionObject.region = event;
    };
    EditInfoHirePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditInfoHirePage');
    };
    EditInfoHirePage.prototype.itemOcupation = function () {
        this.showComp = !this.showComp;
    };
    EditInfoHirePage.prototype.changePhoto = function (si) {
        var _this = this;
        this.newPhoto = si;
        var cameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetHeight: 300,
            targetWidth: 300,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions).then(function (data) {
            _this.sesionObject.photoUri = "data:image/jpeg;base64," + data;
            _this.configProv.setSesionObject(_this.sesionObject);
        }).catch(function (error) { return console.error(error); });
    };
    EditInfoHirePage.prototype.updateInfo = function () {
        var _this = this;
        console.log('Quiere foto', this.newPhoto, this.sesionObject.compania, this.company);
        console.log('Datos a enviar', this.sesionObject.id, this.sesionObject.nombre, this.sesionObject.state, this.sesionObject.region, this.sesionObject.photoUri, this.sesionObject.compania);
        if (this.newPhoto == 1) {
            this.uploadImageEdit();
        }
        else {
            this.accountProv.editarInfoHire({ id: this.sesionObject.id, no: this.sesionObject.nombre, es: this.sesionObject.state, mu: this.sesionObject.region, fo: null, co: this.sesionObject.compania }).subscribe(function (edit) {
                if (edit.entra === "1") {
                    var toast = _this.toastCtrl.create({
                        duration: 2000,
                        message: 'Your changes have been saved succesfully',
                        position: 'bottom'
                    });
                    toast.present();
                    _this.cargarDatos();
                }
            }, function (error) {
                console.error(error);
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Your changes have been saved succesfully',
                    position: 'bottom'
                });
                toast.present();
                _this.cargarDatos();
            });
        }
    };
    EditInfoHirePage.prototype.uploadImageEdit = function () {
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
        var company = (this.sesionObject.compania != null) ? this.sesionObject.compania : this.company;
        var params = {
            'id': this.sesionObject.id,
            'no': this.sesionObject.nombre,
            'es': (this.sesionObject.state != null) ? this.sesionObject.state : this.sesionObject.estado,
            'mu': (this.sesionObject.region != null) ? this.sesionObject.region : this.sesionObject.municipio,
            'co': this.sesionObject.compania
        };
        //option transfer
        var options = {
            fileKey: 'fo',
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            params: params,
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(this.sesionObject.photoUri, 'http://d-ies.com/FilmTrade/API/editarInfoHire.php', options).then(function (data) {
            loader.dismiss();
            if (data != null) {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Your changes have been saved succesfully',
                    position: 'bottom'
                });
                toast.present();
                _this.cargarDatos();
            }
            else {
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Error editing data',
                    position: 'bottom'
                });
                toast.present();
            }
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                duration: 2000,
                message: 'Fail, error when editing the data',
                position: 'bottom'
            });
            toast.present();
        });
    };
    EditInfoHirePage.prototype.cargarDatos = function () {
        var _this = this;
        this.accountProv.perfilHire(this.sesionObject.id).subscribe(function (data) {
            _this.sesionObject = data;
            console.log('Datos Edit:', data);
            _this.sesionObject.photoUri = data['foto'];
            _this.sesionObject.state = data['estado'];
            _this.sesionObject.region = data['municipio'];
            _this.sesionObject.compania = data['compania'];
        }, function (error) { return console.error(error); });
        this.configProv.setSesionObject(this.sesionObject);
    };
    EditInfoHirePage.prototype.doRefresh = function (refresher) {
        this.cargarDatos();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditInfoHirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-info-hire',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\edit-info-hire\edit-info-hire.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Edit Info</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n  <ion-toolbar no-padding>\n\n    <h3 class="ion-title"></h3>\n\n  </ion-toolbar>\n\n  <div>\n\n    <img *ngIf="(sesionObject.photoUri != null && sesionObject.photoUri != undefined)" class="img" (click)="changePhoto(1)"\n\n      [src]="sesionObject.photoUri">\n\n    <img *ngIf="(sesionObject.photoUri == null && sesionObject.photoUri == undefined)" (click)="changePhoto(1)" class="plus img"\n\n      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTBoLTEwdi0xMGgtNHYxMGgtMTB2NGgxMHYxMGg0di0xMGgxMHoiLz48L3N2Zz4=">\n\n  </div>\n\n\n\n  <div padding center center-text>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 margin-bottom>\n\n          <ion-item>\n\n            <ion-label floating>NAME</ion-label>\n\n            <ion-input type="text" [(ngModel)]="sesionObject.nombre"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>COMPANY</ion-label>\n\n            <ion-input type="text" [(ngModel)]="sesionObject.compania"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6 center text-center no-padding>\n\n          <p no-margin>State</p>\n\n        </ion-col>\n\n        <ion-col col-6 center text-center no-padding>\n\n          <p no-margin>Municipality</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-label floating> </ion-label>\n\n            <ion-select (ionChange)="changeState($event)" interface="popover" placeholder="Select one">\n\n              <ion-option *ngFor="let stateIn of statesList" [value]="stateIn">{{ stateIn.descripcion }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-label floating> </ion-label>\n\n            <ion-select (ionChange)="changeRegion($event)" interface="popover" placeholder="Select one">\n\n              <ion-option *ngFor="let region of regionsList" [value]="region">{{ region }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="editID">\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-input placeholder="Verify your ID" clearInput></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-1 align-self-center margin-right>\n\n          <ion-buttons end>\n\n            <button ion-button icon-only clear>\n\n              <ion-icon name="camera"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row no-padding>\n\n        <ion-col no-padding>\n\n          <p class="gray">Must*</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row justify-content-center>\n\n        <ion-col align-self-center>\n\n          <button ion-button full clear color="dark" (click)="updateInfo()"><b>SAVE</b></button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\edit-info-hire\edit-info-hire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_ionic_webview_ngx__["a" /* WebView */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], EditInfoHirePage);
    return EditInfoHirePage;
}());

//# sourceMappingURL=edit-info-hire.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portfolio_work_portfolio_work__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages

//providers


var ProfileWorkPage = /** @class */ (function () {
    function ProfileWorkPage(navCtrl, navParams, configProv, accountProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.tagList = [];
        this.occupation = { title: '', color: '', occupationType: null };
        this.sesionObject = {};
        this.occupation = this.navParams.get('ocupation');
        this.occupation.tags.forEach(function (element, loop) { return _this.tagList.push({ name: element, id: (loop + 1) }); });
        this.configProv.getSesionObject().then(function (data) {
            _this.sesionObject = data;
        }).catch(function (error) { return console.error(error); });
        console.log(this.occupation);
    }
    ProfileWorkPage.prototype.next = function () {
        var _this = this;
        var selectedTags = [];
        this.tagList.forEach(function (element, loop) { return (element.selected) ? selectedTags.push(element.name) : null; });
        var tags = '';
        selectedTags.forEach(function (element, loop) { return tags += (loop == (selectedTags.length - 1)) ? "" + element : element + ","; });
        this.accountProv.perfilWork({ id: this.sesionObject.id, tag: tags }).subscribe(function (data) {
            if (data.entra == "1") {
                console.log(data);
                _this.sesionObject.tags = tags;
                _this.configProv.setSesionObject(_this.sesionObject);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__portfolio_work_portfolio_work__["a" /* PortfolioWorkPage */]);
            }
        }, function (error) { return console.error(error); });
    };
    ProfileWorkPage.prototype.changeChipSelected = function (tag) {
        if (tag.selected) {
            tag.selected = false;
            tag.color = null;
        }
        else {
            tag.selected = true;
            tag.color = '#f8f8f8';
        }
    };
    ProfileWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\profile-work\profile-work.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-toolbar no-padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-9 class="colNav">\n\n          <h1>Step 3</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <h3 class="ion-title"></h3>\n\n  </ion-toolbar>\n\n  <img *ngIf="(sesionObject.photoUri != null && sesionObject.photoUri != undefined)" class="img" [src]="sesionObject.photoUri" />\n\n  <img *ngIf="(sesionObject.photoUri == null && sesionObject.photoUri == undefined)" class="img" src="../../assets/imgs/logo.png" />\n\n\n\n  <div padding center center-text>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 margin-bottom>\n\n          <ion-card>\n\n            <ion-card-content no-padding>\n\n              <ion-card-title text-center>\n\n                <b>{{ occupation.title }}</b>\n\n              </ion-card-title>\n\n            </ion-card-content>\n\n            <hr class="linea" [ngStyle]="{\'background\': occupation.color}">\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <h5>What\'s your speciality?</h5>\n\n          <h5>Use tags to make your searching easier.</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 margin-bottom>\n\n          <ion-card>\n\n            <ion-card-content no-padding text-center>\n\n              <ion-chip *ngFor="let tag of tagList" (click)="changeChipSelected(tag)" [ngStyle]="{\'background\': tag.color}">\n\n                <ion-label>{{ tag.name }}</ion-label>\n\n              </ion-chip>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n    <button ion-button full clear text-capitalize color="dark" (click)="next()"><b>Next</b></button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\profile-work\profile-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */]])
    ], ProfileWorkPage);
    return ProfileWorkPage;
}());

//# sourceMappingURL=profile-work.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_info_hire_edit_info_hire__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
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

var MenuHomePage = /** @class */ (function () {
    function MenuHomePage(navCtrl, navParams, events, configProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.configProv = configProv;
        this.eventOnTabChange = 'TAB_CHANGED';
        this.rootPage = 'CategoryHirePage';
        this.sesionObject = {};
        this.configProv.getSesionObject().then(function (sesion) { return _this.sesionObject = sesion; }).catch(function (error) { return console.error(error); });
        this.pages = [
            { title: 'Notifications', component: 'NotificationsHirePage' },
            { title: 'Chats', component: 'ChatListPage' },
            { title: 'Settings', component: 'SetingsPage' },
            { title: 'Linked accounts', component: 'LinkedAccountsPage' },
            { title: 'Verify your ID*', component: 'IdVerificationPage' },
        ];
    }
    MenuHomePage.prototype.openPage = function (page) {
        this.events.publish(this.eventOnTabChange, page.component);
    };
    MenuHomePage.prototype.editInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_info_hire_edit_info_hire__["a" /* EditInfoHirePage */]);
    };
    MenuHomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) { return _this.sesionObject = sesion; }).catch(function (error) { return console.error(error); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    MenuHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu-home',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\menu-home\menu-home.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content>\n\n      </ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-list class="listperfil">\n\n      <ion-item text-wrap class="itemperfil">\n\n        <ion-avatar item-start>\n\n          <img [src]="(sesionObject.foto != undefined || sesionObject.foto != null) ? sesionObject.foto : \'./../../assets/imgs/agregar_img.png\'">\n\n        </ion-avatar>\n\n        <h2><b>{{ sesionObject.nombre }}</b></h2>\n\n        <p>{{ sesionObject.email }}</p>\n\n        <a (click)="editInfo()">Change information</a>\n\n      </ion-item>\n\n    </ion-list>\n\n    <!-- <ion-list no-lines>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list> -->\n\n    <header-menu-hire></header-menu-hire>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\menu-home\menu-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], MenuHomePage);
    return MenuHomePage;
}());

//# sourceMappingURL=menu-home.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectRegisterPage = /** @class */ (function () {
    function SelectRegisterPage(navCtrl, navParams, configProv, accountProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.sesionObject = {};
        this.configProv.getSesionObject().then(function (data) {
            if (data != null) {
                _this.sesionObject = data;
            }
            console.log('Is sesion', _this.sesionObject.sesionType != undefined, _this.sesionObject.sesionType);
            if (_this.sesionObject.sesionType != undefined) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
            }
        }).catch(function (error) { return console.error(error); });
    }
    SelectRegisterPage.prototype.register = function (sesionType) {
        this.sesionObject.tipo_usuario = sesionType;
        this.configProv.setSesionObject(this.sesionObject);
        console.log('Id: ', this.sesionObject.sesionType);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    SelectRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-register',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\select-register\select-register.html"*/'<!--\n\n  Generated template for the SelectRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding class="vertical-align-content">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <b>Select</b>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <p>Select if you hire or work within FilmTrade</p>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 align-self-center>\n\n        <button ion-button round text-capitalize class="btn" (click)="register(2)">Work</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button round text-capitalize class="btn" (click)="register(3)">Hire</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\select-register\select-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */]])
    ], SelectRegisterPage);
    return SelectRegisterPage;
}());

//# sourceMappingURL=select-register.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splash_hire_splash_hire__ = __webpack_require__(79);
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

//providers



//native


var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, fcm, formBuilder, notificationProv, accountProv, configProv, facebook, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fcm = fcm;
        this.formBuilder = formBuilder;
        this.notificationProv = notificationProv;
        this.accountProv = accountProv;
        this.configProv = configProv;
        this.facebook = facebook;
        this.toastCtrl = toastCtrl;
        this.privacyCheck = false;
        this.notificationProv.getToken();
        /* this.tocken= this.notificationProv.toc;
           console.log('Obtained token: 3' + this.tocken);*/
        // this.tocken =this.fcm.getToken().then((token: string);
        this.signupForm = formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(10)
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4)
            ])),
            repetpassword: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required
            ])),
            tipo_usuario: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('')
        });
        this.configProv.getSesionObject().then(function (data) {
            _this.sesionObject = data;
            console.log(_this.sesionObject);
            _this.signupForm.controls.name.setValue(_this.sesionObject.nombre);
            _this.signupForm.controls.email.setValue(_this.sesionObject.email);
            _this.signupForm.controls.password.setValue(_this.sesionObject.password);
            _this.signupForm.controls.tipo_usuario.setValue(_this.sesionObject.tipo_usuario);
        }).catch(function (error) { return console.error(error); });
    }
    /**
     * This is to validate the form and then create an account
     */
    RegisterPage.prototype.next = function () {
        var _this = this;
        this.tocken = this.notificationProv.toc;
        if (this.signupForm.valid) {
            if (this.privacyCheck) {
                var values_1 = this.signupForm.getRawValue();
                console.log('Datos para registro:', values_1, values_1.tipo_usuario, this.notificationProv.toc);
                this.accountProv.registro({ em: values_1.email, na: values_1.name, ps: values_1.password, confps: values_1.password,
                    tu: (values_1.tipo_usuario === 2) ? '2' : '3', to: this.notificationProv.toc }).subscribe(function (data) {
                    console.log('Al registrarse:', data);
                    _this.nombre = data.entra;
                    console.log('Al :', _this.nombre);
                    if (data.entra != "0") {
                        _this.accountProv.login({ em: values_1.email, ps: values_1.password, to: _this.notificationProv.toc }).subscribe(function (data) {
                            console.log(data);
                            _this.configProv.setSesionObject(data.user);
                            _this.navCtrl.setRoot('IdVerificationPage');
                        }, function (error) { return console.error(error); });
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            duration: 2000,
                            message: data.mensaje,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, function (error) { return console.error(error); });
            }
        }
        else {
            this.signupForm.controls.name.markAsTouched();
            this.signupForm.controls.email.markAsTouched();
            this.signupForm.controls.password.markAsTouched();
            this.signupForm.controls.repetpassword.markAsTouched();
        }
    };
    /**
     * This do login with facebook
     */
    RegisterPage.prototype.loginWithFacebook = function () {
        var _this = this;
        console.log('Facebook');
        this.facebook.login(['email', 'public_profile']).then(function (facebookResponse) {
            console.log(facebookResponse);
            _this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender', ['public_profile', 'email']).then(function (profile) {
                console.log(profile);
                console.log('el nombre es ' + profile.name);
                _this.tocken = _this.notificationProv.toc;
                var values = _this.signupForm.getRawValue();
                _this.accountProv.registro({ em: profile.email, na: profile.first_name, ps: profile.id, confps: profile.id,
                    tu: (values.tipo_usuario === 2) ? '2' : '3', to: _this.notificationProv.toc }).subscribe(function (data) {
                    console.log('Al registrarse:', data);
                    if (data.entra != "0") {
                        _this.accountProv.login({ em: profile.email, ps: profile.id, to: _this.notificationProv.toc }).subscribe(function (data) {
                            console.log(data);
                            _this.configProv.setSesionObject(data.user);
                            _this.navCtrl.setRoot('IdVerificationPage');
                        }, function (error) { return console.error(error); });
                    }
                    else {
                        if (data.mensaje === 'El usuario ya esta registrado') {
                            _this.accountProv.login({ em: profile.email, ps: profile.id, to: _this.notificationProv.toc }).subscribe(function (data) {
                                var d = data;
                                console.log('Obtained token home: ' + _this.notificationProv.toc);
                                console.log('Este es la info del user: ', data);
                                if (data.user != null || data.entra == 1) {
                                    _this.configProv.setSesionObject(d.user);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__splash_hire_splash_hire__["a" /* SplashHirePage */]);
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: 'User not registered',
                                        duration: 3000
                                    });
                                    toast.present();
                                }
                            }, function (error) { return console.error(error); });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                duration: 2000,
                                message: data.mensaje,
                                position: 'bottom'
                            });
                            toast.present();
                            console.log('la respuesta es ' + data.mensaje);
                        }
                        /*
                        console.log('la el tipo es '+data.tipo_usuario);
                        */
                    }
                }, function (error) { return console.error(error); });
            }).catch(function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
    };
    RegisterPage.prototype.registroFacebook = function (nombre, correo) {
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding center center-text>\n\n  <ion-list>\n\n    <img src="../../assets/imgs/logo.png" alt="ft" center>\n\n    <form [formGroup]="signupForm">\n\n      <ion-item>\n\n        <ion-label floating>NAME</ion-label>\n\n        <ion-input type="text" formControlName="name"></ion-input>\n\n      </ion-item>\n\n      <span *ngIf="signupForm.controls.name.hasError(\'required\') && signupForm.controls.name.touched" class="info-span-control">This\n\n        is required</span>\n\n      <span *ngIf="signupForm.controls.name.hasError(\'maxlength\') && signupForm.controls.name.touched" class="info-span-control">Max\n\n        length is 10 characters</span>\n\n\n\n      <ion-item>\n\n        <ion-label floating>EMAIL</ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <span *ngIf="signupForm.controls.email.hasError(\'required\') && signupForm.controls.email.touched" class="info-span-control">This\n\n        is required</span>\n\n      <span *ngIf="signupForm.controls.email.hasError(\'email\') && signupForm.controls.email.touched && !signupForm.controls.email.hasError(\'required\')"\n\n        class="info-span-control">Is not an email</span>\n\n\n\n      <ion-item>\n\n        <ion-label floating>PASSWORD</ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <span *ngIf="signupForm.controls.password.hasError(\'required\') && signupForm.controls.password.touched" class="info-span-control">This\n\n        is required</span>\n\n      <span *ngIf="signupForm.controls.password.hasError(\'minlength\') && signupForm.controls.password.touched && !signupForm.controls.password.hasError(\'required\')"\n\n        class="info-span-control">Min length is 4 characters</span>\n\n\n\n      <ion-item>\n\n        <ion-label floating>CONFIRM PASSWORD</ion-label>\n\n        <ion-input type="password" formControlName="repetpassword"></ion-input>\n\n      </ion-item>\n\n      <span *ngIf="signupForm.controls.repetpassword.hasError(\'required\') && signupForm.controls.repetpassword.touched"\n\n        class="info-span-control">This is required</span>\n\n      <span *ngIf="signupForm.controls.repetpassword.value != signupForm.controls.password.value && signupForm.controls.repetpassword.touched && !signupForm.controls.repetpassword.hasError(\'required\')"\n\n        class="info-span-control">The passwords are not equals</span>\n\n    </form>\n\n  </ion-list>\n\n  <button ion-button full clear (click)="next()">ENTER</button>\n\n\n\n  <ion-item align-self-center>\n\n    <ion-label text-wrap>I agree and accept the <a ion-text color="primary">terms and conditions of use</a> and <a ion-text color="primary">privacy politics</a>\n\n    </ion-label>\n\n    <ion-checkbox color="primary" [(ngModel)]="privacyCheck"></ion-checkbox>\n\n  </ion-item>\n\n  <span *ngIf="!privacyCheck" class="info-span-control">You need to accept the privacy politics</span>\n\n\n\n\n\n  <button ion-button icon-end clear full color="dark" (click)="loginWithFacebook()">\n\n    Login with Facebook\n\n    <ion-icon color="primary" name="logo-facebook" text-lowercase></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-ft/about-ft.module": [
		697,
		5
	],
	"../pages/add-project/add-project.module": [
		745,
		42
	],
	"../pages/category-hire/category-hire.module": [
		698,
		14
	],
	"../pages/chat-list/chat-list.module": [
		700,
		3
	],
	"../pages/chat-room/chat-room.module": [
		699,
		41
	],
	"../pages/copyright/copyright.module": [
		701,
		40
	],
	"../pages/dashboard-tabs-work/dashboard-tabs-work.module": [
		702,
		39
	],
	"../pages/dashboard-tabs/dashboard-tabs.module": [
		704,
		38
	],
	"../pages/edit-info-hire/edit-info-hire.module": [
		703,
		54
	],
	"../pages/edit-info/edit-info.module": [
		746,
		53
	],
	"../pages/explore/explore.module": [
		705,
		10
	],
	"../pages/faq/faq.module": [
		706,
		2
	],
	"../pages/favorites/favorites.module": [
		708,
		13
	],
	"../pages/help/help.module": [
		707,
		9
	],
	"../pages/id-verification/id-verification.module": [
		710,
		37
	],
	"../pages/linked-accounts/linked-accounts.module": [
		709,
		1
	],
	"../pages/lists-tabs/lists-tabs.module": [
		711,
		36
	],
	"../pages/menu-home-work/menu-home-work.module": [
		712,
		44
	],
	"../pages/menu-home/menu-home.module": [
		713,
		43
	],
	"../pages/modal-accepted-request/modal-accepted-request.module": [
		714,
		35
	],
	"../pages/modal-add-projects/modal-add-projects.module": [
		715,
		34
	],
	"../pages/modal-bad-qualification/modal-bad-qualification.module": [
		716,
		33
	],
	"../pages/modal-completed-work/modal-completed-work.module": [
		717,
		32
	],
	"../pages/modal-conclude-project/modal-conclude-project.module": [
		718,
		31
	],
	"../pages/modal-detail-request/modal-detail-request.module": [
		747,
		30
	],
	"../pages/modal-extra-hour-work/modal-extra-hour-work.module": [
		719,
		29
	],
	"../pages/modal-extra-hour/modal-extra-hour.module": [
		720,
		28
	],
	"../pages/modal-finish-project/modal-finish-project.module": [
		723,
		27
	],
	"../pages/modal-others/modal-others.module": [
		721,
		26
	],
	"../pages/modal-pay/modal-pay.module": [
		722,
		25
	],
	"../pages/modal-processing-data/modal-processing-data.module": [
		724,
		52
	],
	"../pages/modal-push/modal-push.module": [
		725,
		24
	],
	"../pages/modal-qualify-freelance/modal-qualify-freelance.module": [
		727,
		23
	],
	"../pages/modal-request-send/modal-request-send.module": [
		726,
		22
	],
	"../pages/modal-successful-load/modal-successful-load.module": [
		728,
		21
	],
	"../pages/no-tabs/no-tabs.module": [
		729,
		20
	],
	"../pages/notification/notification.module": [
		730,
		19
	],
	"../pages/notifications-hire/notifications-hire.module": [
		748,
		12
	],
	"../pages/notifications-work/notifications-work.module": [
		751,
		8
	],
	"../pages/payments/payments.module": [
		731,
		51
	],
	"../pages/perfil-work-hire/perfil-work-hire.module": [
		749,
		18
	],
	"../pages/perfil-work/perfil-work.module": [
		750,
		6
	],
	"../pages/portfolio-work/portfolio-work.module": [
		732,
		50
	],
	"../pages/profile-work/profile-work.module": [
		733,
		49
	],
	"../pages/projects-work/projects-work.module": [
		734,
		7
	],
	"../pages/rate-payments/rate-payments.module": [
		735,
		17
	],
	"../pages/register/register.module": [
		736,
		48
	],
	"../pages/select-pakage-work/select-pakage-work.module": [
		737,
		47
	],
	"../pages/select-register/select-register.module": [
		738,
		46
	],
	"../pages/setings/setings.module": [
		739,
		0
	],
	"../pages/splash-hire/splash-hire.module": [
		740,
		45
	],
	"../pages/suport-help/suport-help.module": [
		743,
		4
	],
	"../pages/tabs/tabs.module": [
		741,
		16
	],
	"../pages/terms-conditions/terms-conditions.module": [
		742,
		15
	],
	"../pages/your-projects/your-projects.module": [
		744,
		11
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 269;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountProvider = /** @class */ (function () {
    function AccountProvider(http, configProv) {
        this.http = http;
        this.configProv = configProv;
        this.LOGIN_URL = 'login.php';
        this.REGISTRO_URL = 'registro.php';
        this.VINCULACION_URL = 'vinculacion.php';
        this.SELECTPAQUETE_URL = 'selectPaquete.php';
        this.PERFILWORK_URL = 'perfilWork.php';
        this.TODOPERFIL_URL = 'todoPerfil.php';
        this.AGREGARUSUARIOPERFIL_URL = 'agregarUsuarioProyecto.php';
        this.GALERIA_URL = 'Galeria.php';
        this.PROYECTOUSUARIOS_URL = 'ProyectoUsuarios.php';
        this.AGREGARFAVORITO_URL = 'agregarFavorito.php';
        this.AGREGARPROYECTO_URL = 'agregarProyecto.php';
        this.ANADIRPROYECTO_URL = 'anadirProyecto.php';
        this.CALIFICAR_URL = 'calificar.php';
        this.CUENTASVINCULADAS_URL = 'cuentasVinculadas.php';
        this.DECLINAPROYECTO_URL = 'declinarProyecto.php';
        this.EDITARINFOWORK_URL = 'editarInfoWork.php';
        this.IDVERIFICACION_URL = 'idVerificacion.php';
        this.INFOHIRE_URL = 'infoHire.php';
        this.INFOROL_URL = 'infoRol.php';
        this.LISTAFAVORITOS_URL = 'listaFavoritos.php';
        this.LISTANOTIFICACIONES_URL = 'listaNotificaciones.php';
        this.LISTAPERFILES_URL = 'listaPerfiles.php';
        this.LISTAPERFILESBUSCAR_URL = 'listaPerfilesBuscar.php';
        this.HTTP_HEADERS = null;
        this.HTTP_HEADERS = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    }
    AccountProvider.prototype.login = function (values) {
        return this.http.get(this.configProv.BASE_API + "login.php?em=" + values.em + "&ps=" + values.ps + "&to=" + values.to, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.registro = function (values) {
        return this.http.get(this.configProv.BASE_API + "registro.php?na=" + values.na + "&em=" + values.em + "&ps=" + values.ps + "&confps=" + values.confps + "&tu=" + values.tu + "&to=" + values.to, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.vinculacion = function (values) {
        return this.http.get(this.configProv.BASE_API + "vinculacion.php?&id=" + values.id + "&nu=" + values.nu + "&vm=" + values.vm + "&va=" + values.va + "&cv=" + values.cv + "&lu=" + values.lu + "&tt=" + values.tt, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.selectPaquete = function (values) {
        return this.http.get(this.configProv.BASE_API + "selectPaquete.php?cb=" + values.cb + "&cg=" + values.cg + "&cp=" + values.cp + "&id=" + values.id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.perfilWork = function (values) {
        return this.http.get(this.configProv.BASE_API + "perfilWork.php?id=" + values.id + "&des=null&tag=" + values.tag, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.todoPerfil = function (id) {
        return this.http.get(this.configProv.BASE_API + "todoPerfil.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.agregarUsuarioProyecto = function (values) {
        return this.http.get(this.configProv.BASE_API + "AgregarUsuarioProyecto.php?id_proy=" + values.id_proy + "&id_us=" + values.id_us + "&id_us_co=" + values.id_us_co + "&sta=" + values.sta + "&ti_pa=" + values.ti_pa, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.galeria = function (values) {
        return this.http.get(this.configProv.BASE_API + "Galeria.php?na=" + values.na + "&des=" + values.des + "&lu=" + values.lu + "&id_us=" + values.id_us, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.listaPerfiles = function (id) {
        return this.http.get(this.configProv.BASE_API + "listaPerfiles.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.proyectoUsuarios = function (id) {
        return this.http.get("proyectosUsuarios.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.agregarFavorito = function (values) {
        return this.http.get(this.configProv.BASE_API + "agregarFavorito.php?id=" + values.id + "&idf=" + values.idf, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.agregarProyecto = function (values) {
        return this.http.get(this.configProv.BASE_API + "agregarProyecto.php?na=" + values.na + "&des=" + values.des + "&id_us=" + values.id_us, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.anadirProyecto = function (values) {
        return this.http.get("anadirProyecto.php?id_us=" + values.id_us + "&id_pro=" + values.id_pro + "&us_p=" + values.us_p + "&na=" + values.na + "&des=" + values.des + "&fecI=" + values.fecI + "&fecF=" + values.fecF + "&ti_pa=" + values.ti_pa + "&di=" + values.di + "&ho=" + values.ho, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.calificar = function (values) {
        return this.http.get(this.configProv.BASE_API + "calificar.php?idc=" + values.idc + "&ca=" + values.ca + "&po=" + values.po, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.cuentasVinculadas = function (id) {
        return this.http.get(this.configProv.BASE_API + "cuentasVinculadas.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.declinarProyecto = function (values) {
        return this.http.get(this.configProv.BASE_API + "declinarProyecto.php?id=" + values.id + "&id_us=" + values.id_us + "&id_u_c=" + values.id_u_c, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.editarInfoWork = function (values) {
        return this.http.get(this.configProv.BASE_API + "editarInfoWork.php?id=" + values.id + "&na=" + values.na + "&es=" + values.es + "&mu=" + values.mu + "&fo=" + values.fo + "&oc=" + values.oc, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.idVerificacion = function (values) {
        return this.http.get(this.configProv.BASE_API + "idVerificacion.php?id=" + values.id + "&idV=" + values.idV + "&img=" + values.img, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.infoHire = function (values) {
        return this.http.get("infoHire.php?id=" + values.id + "&id_ver=" + values.id_ver + "&na=" + values.na + "&es=" + values.es + "&mu=" + values.mu + "&com=" + values.com, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.infoRol = function (values) {
        return this.http.get(this.configProv.BASE_API + "infoRol.php?id=" + values.id + "&na=" + values.na + "&es=" + values.es + "&mu=" + values.mu + "&oc=" + values.oc, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.listaFavoritos = function (id) {
        return this.http.get(this.configProv.BASE_API + "listaFavoritos.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.listaNotificaciones = function (id) {
        return this.http.get(this.configProv.BASE_API + "listaNotificaciones.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.listaPerfilesBuscar = function (search) {
        return this.http.get(this.configProv.BASE_API + "listaPerfilesBuscar.php?we=" + search, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.listadoProyectos = function (id) {
        //console.log(this.configProv.BASE_API,'/listadoProyectos.php?id_us=',id);
        return this.http.get(this.configProv.BASE_API + "listadoProyectos.php?id_us=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.agragarUsuarioProyecto = function (values) {
        return this.http.get(this.configProv.BASE_API + "agregarUsuarioProyecto.php?id_pro=" + values.id_pro + "&work=" + values.work + "&hire=" + values.hire + "&fecT=" + values.fecT + "&ti_pa=" + values.ti_pa + "&cos=" + values.cos + "&Ho_Ex=" + values.Ho_Ex + "&hora=" + values.hora, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.notificaciones = function (id) {
        return this.http.get(this.configProv.BASE_API + "Notificaciones.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.notificacionesWork = function (id) {
        return this.http.get(this.configProv.BASE_API + "NotificacionesWork.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.cancelarServicio = function (values) {
        return this.http.get(this.configProv.BASE_API + "CancelarServicio.php?id_pro=" + values.id_pro + "&id_work=" + values.id_work, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.estatusUsuarioProyecto = function (values) {
        return this.http.get(this.configProv.BASE_API + "estatusUsuarioProyecto.php?id=" + values.id + "&id_pro=" + values.id_pro, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.eliminarFavoritoNotificacion = function (values) {
        console.log(this.configProv.BASE_API, 'eliminarFavoritoNotificacion.php?idu=', values.idu, '&idf=', values.idf);
        return this.http.get(this.configProv.BASE_API + "eliminarFavoritoNotificacion.php?idu=" + values.idu + "&idf=" + values.idf, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.trabajoTerminadoDatos = function (values) {
        return this.http.get(this.configProv.BASE_API + "trabajoTerminadoDatos.php?idh=" + values.idh + "&idw=" + values.idw, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.diasHabiles = function (values) {
        console.log(this.configProv.BASE_API, 'diasHabiles.php?id=', values.id, '&di=', values.di);
        return this.http.get(this.configProv.BASE_API + "diasHabiles.php?id=" + values.id + "&di=" + values.di, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.portafolio = function (id) {
        return this.http.get(this.configProv.BASE_API + "portafolio.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.agendadoWork = function (values) {
        return this.http.get(this.configProv.BASE_API + "AgendadoWork.php?id_pro=" + values.id_pro + "&id_hire=" + values.id_hire + "&id_work=" + values.id_work, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.editarInfoHire = function (values) {
        return this.http.get(this.configProv.BASE_API + "editarInfoHire.php?id=" + values.id + "&no=" + values.no + "&es=" + values.es + "&mu=" + values.mu + "&fo=" + values.fo + "&co=" + values.co, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.listadoProyectosWork = function (id) {
        //console.log(this.configProv.BASE_API,'/listadoProyectos.php?id_us=',id);
        return this.http.get(this.configProv.BASE_API + "listadoProyectosWork.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.actualizarDias = function (values) {
        console.log(this.configProv.BASE_API, 'actualizarDias.php?id=', values.id, '&di=', values.dia);
        return this.http.get(this.configProv.BASE_API + "actualizarDias.php?id=" + values.id + "&dia=" + values.dia, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.actualizarPaquetes = function (values) {
        return this.http.get(this.configProv.BASE_API + "actualizarPaquetes.php?id=" + values.id + "&cb=" + values.cb + "&cg=" + values.cg + "&cp=" + values.cp, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.horaExtra = function (values) {
        return this.http.get(this.configProv.BASE_API + "HoraExtra.php?id_pro=" + values.id_pro + "&id_work=" + values.id_work + "&Ho_Ex=" + values.Ho_Ex, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.perfilHire = function (id) {
        return this.http.get(this.configProv.BASE_API + "perfilHire.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.statusHora = function (values) {
        return this.http.get(this.configProv.BASE_API + "statusHora.php?id_pro=" + values.id_pro + "&id_work=" + values.id_work, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.aceptarHora = function (values) {
        return this.http.get(this.configProv.BASE_API + "aceptarHora.php?id_pro=" + values.id_pro + "&id_work=" + values.id_work + "&cost=" + values.cost, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.declinarHora = function (values) {
        return this.http.get(this.configProv.BASE_API + "declinarHora.php?id_pro=" + values.id_pro + "&id_work=" + values.id_work + "&hora=" + values.hora, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.existenDias = function (id) {
        return this.http.get(this.configProv.BASE_API + "existenDias.php?id=" + id, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.infoProyecto = function (values) {
        return this.http.get(this.configProv.BASE_API + "infoProyecto.php?id=" + values.id + "&id_pro=" + values.id_pro, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.finalizarServicio = function (values) {
        return this.http.get(this.configProv.BASE_API + "finalizarServicio.php?id_pro=" + values.id_pro + "&id_work=" + values.id_work, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.eliminarusuario = function (values) {
        console.log(this.configProv.BASE_API, 'EliminarUsuaruio.php?id=', values.id_user);
        return this.http.get(this.configProv.BASE_API + "EliminarUsuaruio.php?id=" + values.id_user, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.eliminarGaleria = function (values) {
        console.log(this.configProv.BASE_API, 'EliminarGaleria.php?id_user=', values.id_user, '&posicion=', values.posicion);
        return this.http.get(this.configProv.BASE_API + "EliminarGaleria.php?id_user=" + values.id_user + "&posicion=" + values.posicion, { headers: this.HTTP_HEADERS });
    };
    AccountProvider.prototype.mensajePush = function (values) {
        console.log(this.configProv.BASE_API, 'pruebaToken.php?to=', values.to);
        return this.http.get(this.configProv.BASE_API + "pruebaToken.php?to=" + values.to, { headers: this.HTTP_HEADERS });
    };
    AccountProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigProvider */]])
    ], AccountProvider);
    return AccountProvider;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_card_io__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splash_hire_splash_hire__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//native

//providers


//pages

var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(navCtrl, navParams, cardIO, configProv, accountProv, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardIO = cardIO;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.toastCtrl = toastCtrl;
        this.PATTERN_MONTH_YEAR = /(\d{2})\/(\d{2})/;
        this.PATTERN_CVV = /(\d{3})/;
        this.cardNumber = "";
        this.month = "";
        this.year = "";
        this.cvv = "";
        this.showComp = false;
        this.sesionObject = {};
        this.edit = true;
        this.regionsList = [
            {
                region: 'Mexico'
            },
            {
                region: 'USA'
            },
            {
                region: 'Italy'
            },
            {
                region: 'China'
            }
        ];
        this.edit = navParams.get('edit');
        if (this.edit === false) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        this.dataEdit = navParams.get('data');
        console.log(this.edit);
        this.configProv.getSesionObject().then(function (data) {
            console.log(data);
            _this.sesionObject = data;
            console.log(_this.sesionObject.tipo_usuario);
        }).catch(function (error) { return console.error(error); });
    }
    PaymentsPage.prototype.desplegarCard = function () {
        this.showComp = !this.showComp;
    };
    /**
     * Init a scan for cards
     */
    PaymentsPage.prototype.scanCard = function () {
        var _this = this;
        this.cardIO.canScan().then(function (canScan) {
            if (canScan) {
                var options = {
                    requireCVV: true
                };
                _this.cardIO.scan(options).then(function (data) {
                    console.log(data);
                    _this.cvv = data.cvv;
                    _this.cardNumber = data.cardNumber;
                    _this.year = data.expiryYear;
                    _this.month = data.expiryMonth;
                }).catch(function (error) { return console.error(error); });
            }
        }).catch(function (error) { return console.error(error); });
    };
    PaymentsPage.prototype.changeRegion = function (event) {
        this.sesionObject.pais = event;
        console.log(event);
    };
    /**
     * Save the data
     */
    PaymentsPage.prototype.enter = function () {
        var _this = this;
        if (this.edit == true) {
            this.accountProv.vinculacion({ cv: this.cvv, id: this.sesionObject.id, lu: (this.sesionObject.pais != null || this.sesionObject.pais != undefined) ? this.sesionObject.pais : 'México', vm: this.month, va: this.year, tt: 'Debito', tar: null, nu: this.cardNumber }).subscribe(function (data) {
                //console.log(data);
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Your changes have been saved successfully',
                    position: 'bottom'
                });
                toast.present();
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__splash_hire_splash_hire__["a" /* SplashHirePage */]);
        }
        else if (this.edit == false) {
            this.accountProv.vinculacion({ cv: this.cvv, id: this.sesionObject.id, lu: (this.sesionObject.pais != null || this.sesionObject.pais != undefined) ? this.sesionObject.pais : 'México', vm: this.month, va: this.year, tt: 'Debito', tar: null, nu: this.cardNumber }).subscribe(function (data) {
                //console.log(data);
                var toast = _this.toastCtrl.create({
                    duration: 2000,
                    message: 'Your changes have been saved successfully',
                    position: 'bottom'
                });
                toast.present();
            });
        }
    };
    /**
     * This is to validate if data is valid
     * @param  value   Valuo to validate
     * @param  pattern RegExp validator
     * @return         True or false
     */
    PaymentsPage.prototype.validatePattern = function (value, pattern) {
        return pattern.test(value);
    };
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payments',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\payments\payments.html"*/'<!--\n\n  Generated template for the PaymentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payments</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-toolbar no-padding>\n\n    <ion-grid *ngIf="edit">\n\n      <ion-row>\n\n        <ion-col col-3 class="colNav">\n\n          <h1>Step 1</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <h3 *ngIf="sesionObject.tipo_usuario == 2 || sesionObject.occupationType == 2" class="ion-title">My Wallet</h3>\n\n    <h6 *ngIf="sesionObject.tipo_usuario == 2 || sesionObject.occupationType == 2">add your bank accounts to recive your payments</h6>\n\n    <h3 *ngIf="sesionObject.tipo_usuario == 3 || sesionObject.occupationType == 3" class="ion-title">Payments</h3>\n\n    <h6 *ngIf="sesionObject.tipo_usuario == 3 || sesionObject.occupationType == 3">add a payment method</h6>\n\n  </ion-toolbar>\n\n  <ion-list padding no-lines>\n\n    <ion-item>\n\n      <h2>Transaction number</h2>\n\n    </ion-item>\n\n    <ion-item (click)="desplegarCard()">\n\n      <ion-thumbnail item-start>\n\n        <img src=" ../../assets/icon/visa.png">\n\n      </ion-thumbnail>\n\n      <h2>\n\n      </h2>\n\n      <button ion-button large clear item-end>\n\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="showComp">\n\n      <ion-thumbnail item-start>\n\n        <img src="../../assets/icon/visa.png">\n\n      </ion-thumbnail>\n\n      <h2>Card Number</h2>\n\n      <button ion-button large clear item-end (click)="scanCard()" >\n\n        <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="showComp">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-item>\n\n                <ion-input type="text" [(ngModel)]="cardNumber" placeholder="Number" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 padding-left>\n\n            <ion-item>\n\n              <ion-input type="text" [(ngModel)]="month" placeholder="MM/ " type="tel"></ion-input>\n\n              <p><b>/</b></p>\n\n              <ion-input type="text" [(ngModel)]="year" placeholder="/YY" type="tel"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-input type="text" [(ngModel)]="cvv" placeholder="CVV" type="tel"></ion-input>\n\n              <span *ngIf="PATTERN_CVV.test(ccv)">Es valido</span>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-select (ionChange)="changeRegion($event)" interface="popover" placeholder="Select one">\n\n                <ion-option *ngFor="let region of regionsList" [value]="region">{{ region.region }}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-card-io></ion-card-io>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button color="dark" ion-button item-right clear (click)="enter()"><b>Ok</b></button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\payments\payments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_card_io__["a" /* CardIO */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], PaymentsPage);
    return PaymentsPage;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProcessingDataPage; });
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


var ModalProcessingDataPage = /** @class */ (function () {
    function ModalProcessingDataPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalProcessingDataPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalProcessingDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-processing-data',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-processing-data\modal-processing-data.html"*/'<!--\n\n  Generated template for the ModalProcessingDataPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content class=" no-scroll" no-padding no-margin>\n\n  <div class="img_h no-scroll">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear color="dark" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n  <div padding text-center>\n\n    <img src="./../../assets/imgs/cirNone.png" class="img">\n\n    <ion-spinner name="dots"></ion-spinner>\n\n    <h1 ion-text>Processing your data ...</h1>\n\n  </div>\n\n  <button ion-button full clear text-center>Continue</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\modal-processing-data\modal-processing-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ModalProcessingDataPage);
    return ModalProcessingDataPage;
}());

//# sourceMappingURL=modal-processing-data.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuportHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_ft_about_ft__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_profiles_list_profiles__ = __webpack_require__(180);
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
 * Generated class for the SuportHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuportHelpPage = /** @class */ (function () {
    function SuportHelpPage(navCtrl, navParams, configProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProv = configProv;
        this.sesionObject = [{}];
        this.mymodel = false;
        this.configProv.getSesionObject().then(function (sesion) { _this.sesionObject = sesion; console.log(_this.sesionObject); }).catch(function (error) { return console.error(error); });
    }
    SuportHelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuportHelpPage');
    };
    SuportHelpPage.prototype.faq = function () {
        this.navCtrl.push('FaqPage');
    };
    SuportHelpPage.prototype.contactF = function () {
        this.navCtrl.push('HelpPage');
    };
    SuportHelpPage.prototype.aboutF = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_ft_about_ft__["a" /* AboutFtPage */]);
    };
    SuportHelpPage.prototype.termsF = function () {
        this.navCtrl.push('TermsConditionsPage');
    };
    SuportHelpPage.prototype.tabs = function () {
        /* this.navCtrl.setRoot('YourProjectsPage'); */
        console.log(this.mymodel);
        if (this.mymodel == 'segment1') {
            this.navCtrl.push('CategoryHirePage');
        }
        if (this.mymodel == 'segment2') {
            this.navCtrl.push('YourProjectsPage');
        }
        if (this.mymodel == 'segment3') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_list_profiles_list_profiles__["a" /* ListProfilesPage */]);
        }
        if (this.mymodel == 'segment4') {
            this.navCtrl.push('FavoritesPage');
        }
    };
    SuportHelpPage.prototype.tabs2 = function () {
        /* this.navCtrl.setRoot('YourProjectsPage'); */
        console.log(this.mymodel);
        if (this.mymodel == 'segment1') {
            this.navCtrl.push('PerfilWorkPage');
        }
        if (this.mymodel == 'segment2') {
            this.navCtrl.push('ProjectsWorkPage');
        }
        if (this.mymodel == 'segment3') {
            this.navCtrl.push('ExplorePage');
        }
        if (this.mymodel == 'segment4') {
            this.navCtrl.push('HelpPage');
        }
    };
    SuportHelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suport-help',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\suport-help\suport-help.html"*/'<!--\n\n  Generated template for the SuportHelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Support and help</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="seccion">\n\n    <h1 no-margin><b>Support and help</b></h1>\n\n    <p no-margin>FAQ\'s</p> \n\n  </div>\n\n\n\n  <div padding class="list-avatar-page">\n\n    <ion-list>\n\n      <ion-item (click)="faq()">\n\n        <ion-label>\n\n          FAQ\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item (click)="contactF()">\n\n        <ion-label>\n\n          Contact FilmTrade\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item (click)="aboutF()">\n\n        <ion-label>\n\n          About Filmtrade\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item (click)="termsF()">\n\n        <ion-label>\n\n          Terms and Conditions\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <p padding text-right ion-text color="usingg">Contact <a ion-text color="primary">FilmTrade</a></p>\n\n</ion-content>\n\n<ion-footer>\n\n  <div *ngIf="sesionObject.tipo_usuario == 3">\n\n    <ion-segment [(ngModel)]="mymodel"> \n\n      <ion-segment-button value="segment1" (click)="tabs()">\n\n        <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="segment2" (click)="tabs()">\n\n        <ion-icon ios="ios-briefcase-outline" md="md-briefcase"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="segment3" (click)="tabs()">\n\n        <ion-icon ios="ios-search-outline" md="md-search"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="segment4" (click)="tabs()">\n\n        <ion-icon ios="ios-star-half-outline" md="md-star-half"></ion-icon>\n\n      </ion-segment-button>\n\n    </ion-segment> \n\n  </div>\n\n  <div *ngIf="sesionObject.tipo_usuario == 2  ">\n\n    <ion-segment [(ngModel)]="mymodel">\n\n      <ion-segment-button value="segment1" (click)="tabs()" (ionSelect)="segmentButtonClicked($event)">\n\n        <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="segment2" (click)="tabs()" (ionSelect)="segmentButtonClicked($event)">\n\n        <ion-icon ios="ios-briefcase-outline" md="md-briefcase"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="segment3" (click)="tabs()">\n\n        <ion-icon ios="ios-search-outline" md="md-search"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="segment4" (click)="tabs()">\n\n        <ion-icon ios="ios-call-outline" md="md-call"></ion-icon>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n</ion-footer> '/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\suport-help\suport-help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SuportHelpPage);
    return SuportHelpPage;
}());

//# sourceMappingURL=suport-help.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(80);
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
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent(navCtrl, navParams, events, menuCtrl, app, configProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.configProv = configProv;
        console.log('Hello HeaderMenuComponent Component');
        this.text = 'Hello World';
    }
    HeaderMenuComponent.prototype.logoutClicked = function () {
        /* console.log ("Logout");*/
        this.configProv.removeSesionObject();
        this.configProv.removeTheme();
        localStorage.clear();
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        /*this.menuCtrl.enable(false);
        //this.navCtrl.parent.setRoot(HomePage);
        this.app.getRootNavs()[0].setRoot(HomePage);
        /* this.app.getRootNav().setRoot(HomePage);
        this.navCtrl.popToRoot(); */
        console.log("Logout");
    };
    HeaderMenuComponent.prototype.perfilWorkPage = function () {
        this.navCtrl.push('PerfilWorkPage');
    };
    HeaderMenuComponent.prototype.notificationsWorkPage = function () {
        this.navCtrl.push('NotificationsWorkPage');
    };
    HeaderMenuComponent.prototype.chatListPage = function () {
        this.navCtrl.push('ChatListPage');
    };
    HeaderMenuComponent.prototype.setingsPage = function () {
        this.navCtrl.push('SetingsPage');
    };
    HeaderMenuComponent.prototype.linkedAccountsPage = function () {
        this.navCtrl.push('LinkedAccountsPage');
    };
    HeaderMenuComponent.prototype.idVerificationPage = function () {
        this.navCtrl.push('IdVerificationPage', { edit: false });
    };
    HeaderMenuComponent.prototype.termsConditionsPage = function () {
        this.navCtrl.push('TermsConditionsPage');
    };
    HeaderMenuComponent.prototype.copyrightPage = function () {
        this.navCtrl.push('CopyrightPage');
    };
    HeaderMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-menu',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\header-menu\header-menu.html"*/'<!-- Generated template for the HeaderMenuComponent component -->\n\n<div>\n\n  <ion-list no-lines>\n\n    <ion-item (click)="perfilWorkPage()">\n\n      <button menuClose ion-item>\n\n        Profile\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="notificationsWorkPage()">\n\n      <button menuClose ion-item>\n\n        Notifications\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="chatListPage()">\n\n      <button menuClose ion-item>\n\n        Chats\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="setingsPage()">\n\n      <button menuClose ion-item>\n\n        Settings\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="linkedAccountsPage()">\n\n      <button menuClose ion-item>\n\n        Linked accounts\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="idVerificationPage()">\n\n      <button menuClose ion-item>\n\n        Verify your ID*\n\n      </button>\n\n    </ion-item>\n\n    <!-- <ion-item (click)="termsConditionsPage()">\n\n      <button menuClose ion-item>\n\n        Terms and conditions\n\n      </button>\n\n    </ion-item> -->\n\n    <ion-item (click)="copyrightPage()">\n\n      <button menuClose ion-item>\n\n        Copyright\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="logoutClicked()">\n\n      <button menuClose ion-item>\n\n        Log out\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\header-menu\header-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());

//# sourceMappingURL=header-menu.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMenuHireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(80);
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
 * Generated class for the HeaderMenuHireComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderMenuHireComponent = /** @class */ (function () {
    function HeaderMenuHireComponent(navCtrl, navParams, events, menuCtrl, app, configProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.configProv = configProv;
        console.log('Hello HeaderMenuComponent Component');
        this.text = 'Hello World';
    }
    HeaderMenuHireComponent.prototype.logoutClicked = function () {
        /* console.log ("Logout");*/
        this.configProv.removeSesionObject();
        this.configProv.removeTheme();
        localStorage.clear();
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        /*this.menuCtrl.enable(false);
        //this.navCtrl.parent.setRoot(HomePage);
        this.app.getRootNavs()[0].setRoot(HomePage);
        /* this.app.getRootNav().setRoot(HomePage);
        this.navCtrl.popToRoot(); */
        console.log("Logout");
    };
    HeaderMenuHireComponent.prototype.notificationsHirePage = function () {
        this.navCtrl.push('NotificationsHirePage');
    };
    HeaderMenuHireComponent.prototype.chatListPage = function () {
        this.navCtrl.push('ChatListPage');
    };
    HeaderMenuHireComponent.prototype.setingsPage = function () {
        this.navCtrl.push('SetingsPage');
    };
    HeaderMenuHireComponent.prototype.linkedAccountsPage = function () {
        this.navCtrl.push('LinkedAccountsPage');
    };
    HeaderMenuHireComponent.prototype.idVerificationPage = function () {
        this.navCtrl.push('IdVerificationPage', { edit: false });
    };
    HeaderMenuHireComponent.prototype.termsConditionsPage = function () {
        this.navCtrl.push('TermsConditionsPage');
    };
    HeaderMenuHireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-menu-hire',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\header-menu-hire\header-menu-hire.html"*/'<!-- Generated template for the HeaderMenuComponent component -->\n\n<div>\n\n  <ion-list no-lines>\n\n    <ion-item (click)="notificationsHirePage()">\n\n      <button menuClose ion-item>\n\n        Notifications\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="chatListPage()">\n\n      <button menuClose ion-item>\n\n        Chats\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="setingsPage()">\n\n      <button menuClose ion-item>\n\n        Settings\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="linkedAccountsPage()">\n\n      <button menuClose ion-item>\n\n        Linked accounts\n\n      </button>\n\n    </ion-item>\n\n    <ion-item (click)="idVerificationPage()">\n\n      <button menuClose ion-item>\n\n        Verify your ID*\n\n      </button>\n\n    </ion-item>\n\n    <!-- <ion-item (click)="termsConditionsPage()">\n\n      <button menuClose ion-item>\n\n        Terms and conditions\n\n      </button>\n\n    </ion-item> -->\n\n    <ion-item (click)="logoutClicked()">\n\n      <button menuClose ion-item>\n\n        Log out\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\header-menu-hire\header-menu-hire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], HeaderMenuHireComponent);
    return HeaderMenuHireComponent;
}());

//# sourceMappingURL=header-menu-hire.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(602);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FIREBASE_ENVIRONMENT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_card_io__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_crop__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_ionic_webview_ngx__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_fcm__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion2_calendar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_image_loader__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_ion_card_io_ion_card_io__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic3_star_rating__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_rating__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_select_register_select_register__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_payments_payments__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_splash_hire_splash_hire__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edit_info_edit_info__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_profile_work_profile_work__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_portfolio_work_portfolio_work__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_select_pakage_work_select_pakage_work__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_list_profiles_list_profiles__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_edit_info_hire_edit_info_hire__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_suport_help_suport_help__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_about_ft_about_ft__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_menu_home_menu_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_menu_home_work_menu_home_work__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_modal_processing_data_modal_processing_data__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ionic_img_viewer__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_http__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_fire__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_fire_database__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_header_menu_header_menu__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_header_menu_hire_header_menu_hire__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_notification_notification__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//native











//Components



//import { Ionic2RatingModule } from 'ionic2-rating';


//Paginas




//import { IdVerificationPage } from './../pages/id-verification/id-verification';












//import { AddProjectPage } from './../pages/add-project/add-project';
//Modales

//Galeria

//providers




//firebase





var FIREBASE_ENVIRONMENT = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDXIcQm5yxd2oR2MbmLCh8Ekjgdt9zPM44',
        authDomain: 'filmtrade-34ab8.firebaseapp.com',
        databaseURL: 'https://filmtrade-34ab8.firebaseio.com',
        projectId: 'filmtrade-34ab8',
        storageBucket: 'filmtrade-34ab8.appspot.com',
        messagingSenderId: '30574087346'
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_select_register_select_register__["a" /* SelectRegisterPage */],
                //IdVerificationPage,
                __WEBPACK_IMPORTED_MODULE_26__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_splash_hire_splash_hire__["a" /* SplashHirePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_edit_info_edit_info__["a" /* EditInfoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_profile_work_profile_work__["a" /* ProfileWorkPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_portfolio_work_portfolio_work__["a" /* PortfolioWorkPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_select_pakage_work_select_pakage_work__["a" /* SelectPakageWorkPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_list_profiles_list_profiles__["a" /* ListProfilesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_edit_info_hire_edit_info_hire__["a" /* EditInfoHirePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_suport_help_suport_help__["a" /* SuportHelpPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_about_ft_about_ft__["a" /* AboutFtPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_modal_processing_data_modal_processing_data__["a" /* ModalProcessingDataPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_menu_home_menu_home__["a" /* MenuHomePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_menu_home_work_menu_home_work__["a" /* MenuHomeWorkPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_ion_card_io_ion_card_io__["a" /* IonCardIoComponent */],
                //FooterTabsComponent,
                __WEBPACK_IMPORTED_MODULE_46__components_header_menu_header_menu__["a" /* HeaderMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_header_menu_hire_header_menu_hire__["a" /* HeaderMenuHireComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_21_ionic_rating__["a" /* IonicRatingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */], {
                    backButtonText: ''
                    /*       iconMode: 'ios',
                          modalEnter: 'modal-slide-in',
                          modalLeave: 'modal-slide-out',
                          tabsPlacement: 'bottom',
                          pageTransition: 'ios-transition' */
                }, {
                    links: [
                        { loadChildren: '../pages/about-ft/about-ft.module#AboutFtPageModule', name: 'AboutFtPage', segment: 'about-ft', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category-hire/category-hire.module#CategoryHirePageModule', name: 'CategoryHirePage', segment: 'category-hire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-room/chat-room.module#ChatRoomPageModule', name: 'ChatRoomPage', segment: 'chat-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-list/chat-list.module#ChatListPageModule', name: 'ChatListPage', segment: 'chat-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/copyright/copyright.module#CopyrightPageModule', name: 'CopyrightPage', segment: 'copyright', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard-tabs-work/dashboard-tabs-work.module#DashboardTabsWorkPageModule', name: 'DashboardTabsWorkPage', segment: 'dashboard-tabs-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-info-hire/edit-info-hire.module#EditInfoHirePageModule', name: 'EditInfoHirePage', segment: 'edit-info-hire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard-tabs/dashboard-tabs.module#DashboardTabsPageModule', name: 'DashboardTabsPage', segment: 'dashboard-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/linked-accounts/linked-accounts.module#LinkedAccountsPageModule', name: 'LinkedAccountsPage', segment: 'linked-accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/id-verification/id-verification.module#IdVerificationPageModule', name: 'IdVerificationPage', segment: 'id-verification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lists-tabs/lists-tabs.module#ListsTabsPageModule', name: 'ListsTabsPage', segment: 'lists-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-home-work/menu-home-work.module#MenuHomeWorkPageModule', name: 'MenuHomeWorkPage', segment: 'menu-home-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-home/menu-home.module#MenuHomePageModule', name: 'MenuHomePage', segment: 'menu-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-accepted-request/modal-accepted-request.module#ModalAcceptedRequestPageModule', name: 'ModalAcceptedRequestPage', segment: 'modal-accepted-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-add-projects/modal-add-projects.module#ModalAddProjectsPageModule', name: 'ModalAddProjectsPage', segment: 'modal-add-projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-bad-qualification/modal-bad-qualification.module#ModalBadQualificationPageModule', name: 'ModalBadQualificationPage', segment: 'modal-bad-qualification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-completed-work/modal-completed-work.module#ModalCompletedWorkPageModule', name: 'ModalCompletedWorkPage', segment: 'modal-completed-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-conclude-project/modal-conclude-project.module#ModalConcludeProjectPageModule', name: 'ModalConcludeProjectPage', segment: 'modal-conclude-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-extra-hour-work/modal-extra-hour-work.module#ModalExtraHourWorkPageModule', name: 'ModalExtraHourWorkPage', segment: 'modal-extra-hour-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-extra-hour/modal-extra-hour.module#ModalExtraHourPageModule', name: 'ModalExtraHourPage', segment: 'modal-extra-hour', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-others/modal-others.module#ModalOthersPageModule', name: 'ModalOthersPage', segment: 'modal-others', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-pay/modal-pay.module#ModalPayPageModule', name: 'ModalPayPage', segment: 'modal-pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-finish-project/modal-finish-project.module#ModalFinishProjectPageModule', name: 'ModalFinishProjectPage', segment: 'modal-finish-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-processing-data/modal-processing-data.module#ModalProcessingDataPageModule', name: 'ModalProcessingDataPage', segment: 'modal-processing-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-push/modal-push.module#ModalPushPageModule', name: 'ModalPushPage', segment: 'modal-push', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-request-send/modal-request-send.module#ModalRequestSendPageModule', name: 'ModalRequestSendPage', segment: 'modal-request-send', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-qualify-freelance/modal-qualify-freelance.module#ModalQualifyFreelancePageModule', name: 'ModalQualifyFreelancePage', segment: 'modal-qualify-freelance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-successful-load/modal-successful-load.module#ModalSuccessfulLoadPageModule', name: 'ModalSuccessfulLoadPage', segment: 'modal-successful-load', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-tabs/no-tabs.module#NoTabsPageModule', name: 'NoTabsPage', segment: 'no-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/portfolio-work/portfolio-work.module#PortfolioWorkPageModule', name: 'PortfolioWorkPage', segment: 'portfolio-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-work/profile-work.module#ProfileWorkPageModule', name: 'ProfileWorkPage', segment: 'profile-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects-work/projects-work.module#ProjectsWorkPageModule', name: 'ProjectsWorkPage', segment: 'projects-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate-payments/rate-payments.module#RatePaymentsPageModule', name: 'RatePaymentsPage', segment: 'rate-payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-pakage-work/select-pakage-work.module#SelectPakageWorkPageModule', name: 'SelectPakageWorkPage', segment: 'select-pakage-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-register/select-register.module#SelectRegisterPageModule', name: 'SelectRegisterPage', segment: 'select-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setings/setings.module#SetingsPageModule', name: 'SetingsPage', segment: 'setings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash-hire/splash-hire.module#SplashHirePageModule', name: 'SplashHirePage', segment: 'splash-hire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-conditions/terms-conditions.module#TermsConditionsPageModule', name: 'TermsConditionsPage', segment: 'terms-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suport-help/suport-help.module#SuportHelpPageModule', name: 'SuportHelpPage', segment: 'suport-help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/your-projects/your-projects.module#YourProjectsPageModule', name: 'YourProjectsPage', segment: 'your-projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-project/add-project.module#AddProjectPageModule', name: 'AddProjectPage', segment: 'add-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-info/edit-info.module#EditInfoPageModule', name: 'EditInfoPage', segment: 'edit-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-detail-request/modal-detail-request.module#ModalDetailRequestPageModule', name: 'ModalDetailRequestPage', segment: 'modal-detail-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications-hire/notifications-hire.module#NotificationsHirePageModule', name: 'NotificationsHirePage', segment: 'notifications-hire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-work-hire/perfil-work-hire.module#PerfilWorkHirePageModule', name: 'PerfilWorkHirePage', segment: 'perfil-work-hire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-work/perfil-work.module#PerfilWorkPageModule', name: 'PerfilWorkPage', segment: 'perfil-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications-work/notifications-work.module#NotificationsWorkPageModule', name: 'NotificationsWorkPage', segment: 'notifications-work', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_39_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ion2_calendar__["CalendarModule"],
                //Ionic2RatingModule,
                __WEBPACK_IMPORTED_MODULE_20_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_18_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_44__angular_fire__["a" /* AngularFireModule */].initializeApp(FIREBASE_ENVIRONMENT.firebase),
                __WEBPACK_IMPORTED_MODULE_45__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_43__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_select_register_select_register__["a" /* SelectRegisterPage */],
                //IdVerificationPage,
                __WEBPACK_IMPORTED_MODULE_26__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_splash_hire_splash_hire__["a" /* SplashHirePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_edit_info_edit_info__["a" /* EditInfoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_profile_work_profile_work__["a" /* ProfileWorkPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_portfolio_work_portfolio_work__["a" /* PortfolioWorkPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_select_pakage_work_select_pakage_work__["a" /* SelectPakageWorkPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_list_profiles_list_profiles__["a" /* ListProfilesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_edit_info_hire_edit_info_hire__["a" /* EditInfoHirePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_suport_help_suport_help__["a" /* SuportHelpPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_about_ft_about_ft__["a" /* AboutFtPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_modal_processing_data_modal_processing_data__["a" /* ModalProcessingDataPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_menu_home_menu_home__["a" /* MenuHomePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_menu_home_work_menu_home_work__["a" /* MenuHomeWorkPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_41__providers_account_account__["a" /* AccountProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_card_io__["a" /* CardIO */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_ionic_webview_ngx__["a" /* WebView */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_45__angular_fire_database__["a" /* AngularFireDatabase */],
                //FileUploadOptions,
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_48__providers_notification_notification__["a" /* NotificationProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 291,
	"./af.js": 291,
	"./ar": 292,
	"./ar-dz": 293,
	"./ar-dz.js": 293,
	"./ar-kw": 294,
	"./ar-kw.js": 294,
	"./ar-ly": 295,
	"./ar-ly.js": 295,
	"./ar-ma": 296,
	"./ar-ma.js": 296,
	"./ar-sa": 297,
	"./ar-sa.js": 297,
	"./ar-tn": 298,
	"./ar-tn.js": 298,
	"./ar.js": 292,
	"./az": 299,
	"./az.js": 299,
	"./be": 300,
	"./be.js": 300,
	"./bg": 301,
	"./bg.js": 301,
	"./bm": 302,
	"./bm.js": 302,
	"./bn": 303,
	"./bn.js": 303,
	"./bo": 304,
	"./bo.js": 304,
	"./br": 305,
	"./br.js": 305,
	"./bs": 306,
	"./bs.js": 306,
	"./ca": 307,
	"./ca.js": 307,
	"./cs": 308,
	"./cs.js": 308,
	"./cv": 309,
	"./cv.js": 309,
	"./cy": 310,
	"./cy.js": 310,
	"./da": 311,
	"./da.js": 311,
	"./de": 312,
	"./de-at": 313,
	"./de-at.js": 313,
	"./de-ch": 314,
	"./de-ch.js": 314,
	"./de.js": 312,
	"./dv": 315,
	"./dv.js": 315,
	"./el": 316,
	"./el.js": 316,
	"./en-au": 317,
	"./en-au.js": 317,
	"./en-ca": 318,
	"./en-ca.js": 318,
	"./en-gb": 319,
	"./en-gb.js": 319,
	"./en-ie": 320,
	"./en-ie.js": 320,
	"./en-il": 321,
	"./en-il.js": 321,
	"./en-nz": 322,
	"./en-nz.js": 322,
	"./eo": 323,
	"./eo.js": 323,
	"./es": 324,
	"./es-do": 325,
	"./es-do.js": 325,
	"./es-us": 326,
	"./es-us.js": 326,
	"./es.js": 324,
	"./et": 327,
	"./et.js": 327,
	"./eu": 328,
	"./eu.js": 328,
	"./fa": 329,
	"./fa.js": 329,
	"./fi": 330,
	"./fi.js": 330,
	"./fo": 331,
	"./fo.js": 331,
	"./fr": 332,
	"./fr-ca": 333,
	"./fr-ca.js": 333,
	"./fr-ch": 334,
	"./fr-ch.js": 334,
	"./fr.js": 332,
	"./fy": 335,
	"./fy.js": 335,
	"./gd": 336,
	"./gd.js": 336,
	"./gl": 337,
	"./gl.js": 337,
	"./gom-latn": 338,
	"./gom-latn.js": 338,
	"./gu": 339,
	"./gu.js": 339,
	"./he": 340,
	"./he.js": 340,
	"./hi": 341,
	"./hi.js": 341,
	"./hr": 342,
	"./hr.js": 342,
	"./hu": 343,
	"./hu.js": 343,
	"./hy-am": 344,
	"./hy-am.js": 344,
	"./id": 345,
	"./id.js": 345,
	"./is": 346,
	"./is.js": 346,
	"./it": 347,
	"./it.js": 347,
	"./ja": 348,
	"./ja.js": 348,
	"./jv": 349,
	"./jv.js": 349,
	"./ka": 350,
	"./ka.js": 350,
	"./kk": 351,
	"./kk.js": 351,
	"./km": 352,
	"./km.js": 352,
	"./kn": 353,
	"./kn.js": 353,
	"./ko": 354,
	"./ko.js": 354,
	"./ky": 355,
	"./ky.js": 355,
	"./lb": 356,
	"./lb.js": 356,
	"./lo": 357,
	"./lo.js": 357,
	"./lt": 358,
	"./lt.js": 358,
	"./lv": 359,
	"./lv.js": 359,
	"./me": 360,
	"./me.js": 360,
	"./mi": 361,
	"./mi.js": 361,
	"./mk": 362,
	"./mk.js": 362,
	"./ml": 363,
	"./ml.js": 363,
	"./mn": 364,
	"./mn.js": 364,
	"./mr": 365,
	"./mr.js": 365,
	"./ms": 366,
	"./ms-my": 367,
	"./ms-my.js": 367,
	"./ms.js": 366,
	"./mt": 368,
	"./mt.js": 368,
	"./my": 369,
	"./my.js": 369,
	"./nb": 370,
	"./nb.js": 370,
	"./ne": 371,
	"./ne.js": 371,
	"./nl": 372,
	"./nl-be": 373,
	"./nl-be.js": 373,
	"./nl.js": 372,
	"./nn": 374,
	"./nn.js": 374,
	"./pa-in": 375,
	"./pa-in.js": 375,
	"./pl": 376,
	"./pl.js": 376,
	"./pt": 377,
	"./pt-br": 378,
	"./pt-br.js": 378,
	"./pt.js": 377,
	"./ro": 379,
	"./ro.js": 379,
	"./ru": 380,
	"./ru.js": 380,
	"./sd": 381,
	"./sd.js": 381,
	"./se": 382,
	"./se.js": 382,
	"./si": 383,
	"./si.js": 383,
	"./sk": 384,
	"./sk.js": 384,
	"./sl": 385,
	"./sl.js": 385,
	"./sq": 386,
	"./sq.js": 386,
	"./sr": 387,
	"./sr-cyrl": 388,
	"./sr-cyrl.js": 388,
	"./sr.js": 387,
	"./ss": 389,
	"./ss.js": 389,
	"./sv": 390,
	"./sv.js": 390,
	"./sw": 391,
	"./sw.js": 391,
	"./ta": 392,
	"./ta.js": 392,
	"./te": 393,
	"./te.js": 393,
	"./tet": 394,
	"./tet.js": 394,
	"./tg": 395,
	"./tg.js": 395,
	"./th": 396,
	"./th.js": 396,
	"./tl-ph": 397,
	"./tl-ph.js": 397,
	"./tlh": 398,
	"./tlh.js": 398,
	"./tr": 399,
	"./tr.js": 399,
	"./tzl": 400,
	"./tzl.js": 400,
	"./tzm": 401,
	"./tzm-latn": 402,
	"./tzm-latn.js": 402,
	"./tzm.js": 401,
	"./ug-cn": 403,
	"./ug-cn.js": 403,
	"./uk": 404,
	"./uk.js": 404,
	"./ur": 405,
	"./ur.js": 405,
	"./uz": 406,
	"./uz-latn": 407,
	"./uz-latn.js": 407,
	"./uz.js": 406,
	"./vi": 408,
	"./vi.js": 408,
	"./x-pseudo": 409,
	"./x-pseudo.js": 409,
	"./yo": 410,
	"./yo.js": 410,
	"./zh-cn": 411,
	"./zh-cn.js": 411,
	"./zh-hk": 412,
	"./zh-hk.js": 412,
	"./zh-tw": 413,
	"./zh-tw.js": 413
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 670;

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonCardIoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the IonCardIoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonCardIoComponent = /** @class */ (function () {
    function IonCardIoComponent() {
        this.number = '';
        this.expired = '';
        this.cvc = '';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('number'),
        __metadata("design:type", String)
    ], IonCardIoComponent.prototype, "number", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expired'),
        __metadata("design:type", String)
    ], IonCardIoComponent.prototype, "expired", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cvc'),
        __metadata("design:type", String)
    ], IonCardIoComponent.prototype, "cvc", void 0);
    IonCardIoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-card-io',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\ion-card-io\ion-card-io.html"*/'<div class="flip-container">\n\n  <ion-card class="front">\n\n    <p>CardIO</p>\n\n  </ion-card>\n\n  <ion-card class="back">\n\n    <p>CardCVC</p>\n\n  </ion-card>\n\n  <div class="">\n\n    <ion-input type="number" [(ngModel)]="number" placeholder="0000 0000 0000 0000"></ion-input>\n\n    <ion-input type="text" [(ngModel)]="expired" placeholder="12/20"></ion-input>\n\n    <ion-input type="text" [(ngModel)]="cvc" placeholder="CVC"></ion-input>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\ion-card-io\ion-card-io.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IonCardIoComponent);
    return IonCardIoComponent;
}());

//# sourceMappingURL=ion-card-io.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//provider



var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, configProv, notificationProv) {
        var _this = this;
        this.configProv = configProv;
        this.notificationProv = notificationProv;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.configProv.removeTheme();
        this.configProv.getTheme().subscribe(function (theme) { return _this.selectedTheme = theme; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();
            splashScreen.hide();
            _this.notificationProv.getNewToken();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\app\app.html"*/'<ion-nav [root]="rootPage" [class]="selectedTheme"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashHirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_info_edit_info__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_home_menu_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_home_work_menu_home_work__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_interfaces_interfaces__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages





var SplashHirePage = /** @class */ (function () {
    function SplashHirePage(navCtrl, navParams, config) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.config.getSesionObject().then(function (sesion) { return _this.sesionObject = sesion; }).catch(function (error) { return console.error(error); });
    }
    SplashHirePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Valor del tipo_user:', _this.sesionObject.tipo_usuario, _this.sesionObject.occupationType);
            if (((_this.sesionObject.tipo_usuario != undefined) ? _this.sesionObject.tipo_usuario : _this.sesionObject.occupationType) == __WEBPACK_IMPORTED_MODULE_6__model_interfaces_interfaces__["b" /* SesionType */].WORK) {
                if (_this.sesionObject.ocupation === "" || _this.sesionObject.ocupation === undefined || _this.sesionObject.ocupation === null) {
                    console.log('Valor de la ocupacion null', _this.sesionObject.ocupation);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__edit_info_edit_info__["a" /* EditInfoPage */]);
                }
                else {
                    console.log('Valor de la ocupacion data', _this.sesionObject.ocupation);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_home_work_menu_home_work__["a" /* MenuHomeWorkPage */]);
                }
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_home_menu_home__["a" /* MenuHomePage */]);
            }
        }, 2000);
    };
    SplashHirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-splash-hire',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\splash-hire\splash-hire.html"*/'<ion-content padding class="vertical-align-content">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <b>Welcome to</b>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-auto align-self-center>\n\n        <img src="../../assets/imgs/logo.png" alt="ft" center>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\splash-hire\splash-hire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */]])
    ], SplashHirePage);
    return SplashHirePage;
}());

//# sourceMappingURL=splash-hire.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_register_select_register__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splash_hire_splash_hire__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(153);
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

//providers



//Pages



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder, notificationProv, accountProv, configProv, menu, toastCtrl, facebook) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.notificationProv = notificationProv;
        this.accountProv = accountProv;
        this.configProv = configProv;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.facebook = facebook;
        this.loginForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.configProv
            .getSesionObject()
            .then(function (sesionObject) {
            if (sesionObject != null && sesionObject.nombre != null) {
                console.log("Datos estorag: ", sesionObject);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__splash_hire_splash_hire__["a" /* SplashHirePage */]);
                _this.menu.enable(true);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    /**
     * Do the login
     * @return Void
     */
    HomePage.prototype.login = function () {
        var _this = this;
        this.notificationProv.getToken();
        if (this.loginForm.valid) {
            var values = this.loginForm.getRawValue();
            this.accountProv
                .login({
                em: values.email,
                ps: values.password,
                to: this.notificationProv.toc
            })
                .subscribe(function (data) {
                var d = data;
                console.log("Obtained token home: " + _this.notificationProv.toc);
                console.log("Este es la info del user: ", data);
                if (data.user != null || data.entra == 1) {
                    _this.configProv.setSesionObject(d.user);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__splash_hire_splash_hire__["a" /* SplashHirePage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "User not registered",
                        duration: 3000
                    });
                    toast.present();
                }
            }, function (error) { return console.error(error); });
        }
        else {
            this.loginForm.controls.email.markAsTouched();
            this.loginForm.controls.password.markAsTouched();
        }
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__select_register_select_register__["a" /* SelectRegisterPage */]);
    };
    /**
     * This do login with facebook
     */
    HomePage.prototype.loginWithFacebook = function () {
        var _this = this;
        console.log("Facebook");
        this.facebook
            .login(["email", "public_profile"])
            .then(function (facebookResponse) {
            console.log(facebookResponse);
            _this.facebook
                .api("/me?fields=id,name,email,first_name,picture,last_name,gender", [
                "public_profile",
                "email"
            ])
                .then(function (profile) {
                console.log(profile);
                console.log("el nombre es " + profile.name);
                _this.tocken = _this.notificationProv.toc;
                var values = _this.loginForm.getRawValue();
                _this.accountProv
                    .registro({
                    em: profile.email,
                    na: profile.first_name,
                    ps: profile.id,
                    confps: profile.id,
                    tu: values.tipo_usuario === 2 ? "2" : "3",
                    to: _this.notificationProv.toc
                })
                    .subscribe(function (data) {
                    console.log("Al registrarse:", data);
                    if (data.entra != "0") {
                        _this.accountProv
                            .login({
                            em: profile.email,
                            ps: profile.id,
                            to: _this.notificationProv.toc
                        })
                            .subscribe(function (data) {
                            console.log(data);
                            _this.configProv.setSesionObject(data.user);
                            _this.navCtrl.setRoot("IdVerificationPage");
                        }, function (error) { return console.error(error); });
                    }
                    else {
                        if (data.mensaje === "El usuario ya esta registrado") {
                            _this.accountProv
                                .login({
                                em: profile.email,
                                ps: profile.id,
                                to: _this.notificationProv.toc
                            })
                                .subscribe(function (data) {
                                var d = data;
                                console.log("Obtained token home: " +
                                    _this.notificationProv.toc);
                                console.log("Este es la info del user: ", data);
                                if (data.user != null || data.entra == 1) {
                                    _this.configProv.setSesionObject(d.user);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__splash_hire_splash_hire__["a" /* SplashHirePage */]);
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: "User not registered",
                                        duration: 3000
                                    });
                                    toast.present();
                                }
                            }, function (error) { return console.error(error); });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                duration: 2000,
                                message: data.mensaje,
                                position: "bottom"
                            });
                            toast.present();
                            console.log("la respuesta es " + data.mensaje);
                        }
                        /*
                      console.log('la el tipo es '+data.tipo_usuario);
                      */
                    }
                }, function (error) { return console.error(error); });
            })
                .catch(function (error) { return console.error(error); });
        })
            .catch(function (error) { return console.error(error); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\home\home.html"*/'<ion-content padding center center-text class="vertical-align-content">\n\n  <ion-list>\n\n    <img src="../../assets/imgs/logo.png" alt="ft" center />\n\n    <form [formGroup]="loginForm">\n\n      <ion-item>\n\n        <ion-label floating>EMAIL</ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <span\n\n        *ngIf="\n\n          loginForm.controls.email.hasError(\'required\') &&\n\n          loginForm.controls.email.touched\n\n        "\n\n        class="info-span-control"\n\n        >This is required</span\n\n      >\n\n      <span\n\n        *ngIf="\n\n          loginForm.controls.email.hasError(\'email\') &&\n\n          loginForm.controls.email.touched &&\n\n          !loginForm.controls.email.hasError(\'required\')\n\n        "\n\n        class="info-span-control"\n\n        >Is not an email</span\n\n      >\n\n      <ion-item>\n\n        <ion-label floating>PASSWORD </ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <span\n\n        *ngIf="\n\n          loginForm.controls.password.hasError(\'required\') &&\n\n          loginForm.controls.password.touched\n\n        "\n\n        class="info-span-control"\n\n        >This is required</span\n\n      >\n\n    </form>\n\n    <button ion-button full clear (click)="login()">ENTER</button>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-5 align-self-center>\n\n        Don\'t have an account?\n\n      </ion-col>\n\n      <ion-col col-3 align-self-center>\n\n        <button ion-button round small (click)="register()" text-lowercase>\n\n          Create one.\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-12 align-self-center>\n\n        <button\n\n          ion-button\n\n          icon-end\n\n          clear\n\n          full\n\n          color="dark"\n\n          (click)="loginWithFacebook()"\n\n        >\n\n          Login with Facebook\n\n          <ion-icon\n\n            color="primary"\n\n            name="logo-facebook"\n\n            text-lowercase\n\n          ></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TokenAssotiation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TokenAssotiation = /** @class */ (function () {
    function TokenAssotiation() {
    }
    return TokenAssotiation;
}());

var NotificationProvider = /** @class */ (function () {
    //Check the doc https://ionicframework.com/docs/v3/native/fcm/
    function NotificationProvider(fcm, localNotification, angularDatabase, config, platform, modalCtrl, alertCtrl) {
        //Check if the device is a cordova like Android or iOS
        var _this = this;
        this.fcm = fcm;
        this.localNotification = localNotification;
        this.angularDatabase = angularDatabase;
        this.config = config;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        var myContext = this;
        if (this.platform.is('cordova') || this.platform.is('android')) {
            //Get the current id
            myContext.config.getSesionObject().then(function (data) {
                if (data != null) {
                    //Get the object on AngularFirebaseDatabase
                    myContext.tokenAssotiationObject = myContext.angularDatabase.object("ionic/notification/" + data.id);
                    // myContext.getNewToken();
                    //Event on Token Refresh
                    myContext.fcm.onTokenRefresh().subscribe(function (token) {
                        _this.tokenAssotiation.token = token;
                        _this.tokenAssotiationObject.update(myContext.tokenAssotiation);
                        console.log('Refresh FCM:', token);
                    });
                    //  myContext.fcm.getToken();
                }
            }).catch(function (error) { return console.error(error); });
            //Subscribe to new notfication
            myContext.fcm.onNotification().subscribe(function (data) {
                return myContext.onNotification(data);
            });
        }
    }
    NotificationProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //Get token
                    return [4 /*yield*/, this.fcm.getToken().then(function (token) {
                            //Assign token
                            ///console.log('Obtained token 1: ' + token);
                            _this.toc = token;
                            console.log('Obtained token 2: ' + _this.toc);
                            /*this.tokenAssotiationObject.update(this.tokenAssotiation);
                            console.log('Obtained token:' + token)*/
                        }).catch(function (error) {
                            return console.error('Token error: ' + error);
                        })];
                    case 1:
                        //Get token
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationProvider.prototype.getNewToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fcm.getToken().then(function (token) {
                            //aquí se debe enviar el token al back-end para tenerlo registrado y de esta forma poder enviar mensajes
                            // a esta  aplicación
                            //o también copiar el token para usarlo con Postman :D
                            _this.toc = token;
                            console.log("The token to use is: ", token);
                        })
                            .catch(function (error) {
                            //ocurrió un error al procesar el token
                            console.error(error);
                        })];
                    case 1:
                        _a.sent();
                        /**
                         * No suscribimos para obtener el nuevo token cuando se realice un refresh y poder seguir procesando las notificaciones
                         * */
                        return [4 /*yield*/, this.fcm.onTokenRefresh().subscribe(function (token) { return console.log("Nuevo token", token); }, function (error) { return console.error(error); })];
                    case 2:
                        /**
                         * No suscribimos para obtener el nuevo token cuando se realice un refresh y poder seguir procesando las notificaciones
                         * */
                        _a.sent();
                        /**
                         * cuando la configuración este lista, vamos a procesar los mensajes
                         * */
                        return [4 /*yield*/, this.fcm.onNotification().subscribe(function (data) {
                                if (data.wasTapped) {
                                    //ocurre cuando nuestra app está en segundo plano y hacemos tap en la notificación que se muestra en el dispositivo
                                    console.log("Received in background", JSON.stringify(data));
                                }
                                else {
                                    //ocurre cuando nuestra aplicación se encuentra en primer plano,
                                    //puedes mostrar una alerta o un modal con los datos del mensaje
                                    var alert_1 = _this.alertCtrl.create({
                                        title: data.title,
                                        message: data.body,
                                        buttons: [
                                            {
                                                text: 'Cancel',
                                                role: 'cancel',
                                                handler: function () {
                                                    console.log('Cancel clicked');
                                                }
                                            },
                                            {
                                                text: 'Open',
                                                handler: function () {
                                                    console.log('Buy clicked');
                                                }
                                            }
                                        ]
                                    });
                                    alert_1.present();
                                    /* if(data != undefined || data != null){
                                     const myModalOptions: ModalOptions = {
                                       enableBackdropDismiss: false,
                                       showBackdrop: false,
                                       cssClass: 'my-modal-inner'
                                     };
                                   
                                     const modal: Modal = this.modalCtrl.create('ModalPushPage', {dataT: data.title, dataB: data.body}, myModalOptions);
                                     modal.present();
                                     setTimeout(() => { modal.dismiss();
                                     }, 4000);
                                   }*/
                                    console.log("Received in foreground", JSON.stringify(data));
                                }
                            }, function (error) {
                                console.error("Error in notification", error);
                            })];
                    case 3:
                        /**
                         * cuando la configuración este lista, vamos a procesar los mensajes
                         * */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationProvider.prototype.onNotification = function (notification) {
        console.log(notification);
        //Requires cordova like Android or iOS
        if (this.platform.is('cordova')) {
            //TODO: defign the notification to schedule on device doc on https://ionicframework.com/docs/v3/native/local-notifications/
            this.localNotification.schedule({});
        }
    };
    //TODO: Connect with the server of Firebase to use the API doc on https://firebase.google.com/docs/cloud-messaging/server
    NotificationProvider.prototype.sendNotification = function (notification) {
        //Makes a httpRequest to server
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.js.map

/***/ })

},[469]);
//# sourceMappingURL=main.js.map