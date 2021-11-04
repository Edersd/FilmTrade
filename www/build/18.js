webpackJsonp([18],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilWorkHirePageModule", function() { return PerfilWorkHirePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_work_hire__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilWorkHirePageModule = /** @class */ (function () {
    function PerfilWorkHirePageModule() {
    }
    PerfilWorkHirePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil_work_hire__["a" /* PerfilWorkHirePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil_work_hire__["a" /* PerfilWorkHirePage */]),
            ],
        })
    ], PerfilWorkHirePageModule);
    return PerfilWorkHirePageModule;
}());

//# sourceMappingURL=perfil-work-hire.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilWorkHirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//component

//providers

var PerfilWorkHirePage = /** @class */ (function () {
    function PerfilWorkHirePage(navCtrl, navParams, imageViewerCtrl, actionCtrl, configProv, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this.actionCtrl = actionCtrl;
        this.configProv = configProv;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.selected = false;
        this.sesionObject = {};
        this.projectAdd = { id: 0 };
        this.serviceDescription = { id: 0 };
        this.datesAPI = [];
        this.listProfiles = [];
        this.fecha = [];
        this.id = navParams.get('id');
        this.configProv.getAllPerfil(this.id).subscribe(function (sesion) {
            _this.sesionObject = sesion;
            var stringFoto = sesion['galeria'];
            if (sesion['galeria'] != null) {
                var arrayFoto = stringFoto.split(',');
                _this.sesionObject.galeria = arrayFoto;
            }
        }, function (error) { return console.error(error); });
    }
    /**
     * [presentImage description]
     * @param myImage [description]
     */
    PerfilWorkHirePage.prototype.presentImage = function (myImage) {
        var imageViewer = this.imageViewerCtrl.create(myImage);
        imageViewer.present();
        //setTimeout(() => imageViewer.dismiss(), 3000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    /* CalendarModal */
    PerfilWorkHirePage.prototype.presentActionSheet = function () {
        var _this = this;
        var daysConfig = [];
        var dates = [];
        console.log('Dias inicio', this.sesionObject.dias, this.sesionObject.dias.length);
        if (this.sesionObject.dias.length != undefined) {
            this.sesionObject.dias.forEach(function (element, loop) { return dates.push(element); });
            for (var i = 0; i < dates.length; i++) {
                var currentNumber = dates[i];
                var subCadena = currentNumber.substring(10, 8);
                var yymm = currentNumber.substring(8, 0);
                daysConfig.push({
                    date: new Date(yymm + String(Number(subCadena) + 1)),
                    disable: true,
                    subTitle: 'Disabled',
                });
            }
        }
        var options = {
            daysConfig: daysConfig,
            title: 'The artist it´s available in these days',
            format: 'YYYY-MM-DD',
            pickMode: 'multi',
            closeIcon: true,
            doneIcon: true,
            //defaultDates: (Array.of(this.sesionObject.dia) != undefined) ? Array.of(this.sesionObject.dia)  : null,
            defaultDates: (this.sesionObject.dias != undefined) ? this.sesionObject.dias : null
        };
        var calendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModal"], {
            options: options
        });
        calendar.onDidDismiss(function (date, type) {
            console.log('Primer dia', date[_this.sesionObject.dias.length].date);
            _this.aux2 = date.length;
            //console.log('Arreglo', this.aux2);
            console.log('Ultimo dia', date[_this.aux2 - 1].date);
            console.log('Mes', date[_this.aux2 - 1].months);
            if (date[_this.aux2 - 1].months == 1) {
                _this.mes = 'January';
            }
            if (date[_this.aux2 - 1].months == 2) {
                _this.mes = 'February';
            }
            if (date[_this.aux2 - 1].months == 3) {
                _this.mes = 'March';
            }
            if (date[_this.aux2 - 1].months == 4) {
                _this.mes = 'April';
            }
            if (date[_this.aux2 - 1].months == 5) {
                _this.mes = 'May';
            }
            if (date[_this.aux2 - 1].months == 6) {
                _this.mes = 'June';
            }
            if (date[_this.aux2 - 1].months == 7) {
                _this.mes = 'July';
            }
            if (date[_this.aux2 - 1].months == 8) {
                _this.mes = 'August';
            }
            if (date[_this.aux2 - 1].months == 9) {
                _this.mes = 'September';
            }
            if (date[_this.aux2 - 1].months == 10) {
                _this.mes = 'October';
            }
            if (date[_this.aux2 - 1].months == 11) {
                _this.mes = 'November';
            }
            if (date[_this.aux2 - 1].months == 12) {
                _this.mes = 'November';
            }
            _this.numFecha = _this.sesionObject.dias.length;
            _this.mes1 = _this.mes;
            _this.dia1 = date[_this.sesionObject.dias.length].date + " - ";
            _this.dia2 = date[_this.aux2 - 1].date;
            _this.mes2 = _this.mes;
            console.log('Fecha completa2', date);
            //date = date.splice(0,this.numFecha);
            //console.log('Fecha completa', date);
            var dates = [];
            date.forEach(function (date, loop) { return dates.push(date.string); });
            _this.fecha = dates;
            console.log('Fecha', _this.fecha);
            console.log('Fecha', _this.numFecha);
            console.log('Fecha', dates);
            dates = dates.splice(0, 2);
            console.log('date', dates);
            /* if (type == 'done') {
               let dates: Array<string> = [];
              date.forEach((element, loop) => dates.push(element.string));
              console.log(dates);
              this.sesionObject.dias = dates;
              this.configProv.setAllPerfil(this.sesionObject);
            } */
        });
        calendar.present();
    };
    PerfilWorkHirePage.prototype.change2 = function (plan, costo, id) {
        this.plan = plan;
        this.projectAdd.paquete = plan;
        this.projectAdd.costo = costo;
        this.projectAdd.id = id;
        this.configProv.setAddProject(this.projectAdd);
        console.log('id: ', this.projectAdd.id, 'paquete: ', this.projectAdd.paquete, ' costo: ', costo);
    };
    /* Seleccionar tipo de paquete */
    PerfilWorkHirePage.prototype.change = function (type, costo, id, name, foto) {
        if (type === this.serviceDescription.id) {
            this.selected = false;
            this.serviceDescription.id = 0;
        }
        else {
            this.selected = true;
            switch (type) {
                case 1:
                    this.serviceDescription.id = type;
                    this.serviceDescription.name = 'Basic';
                    this.serviceDescription.generalTime = 3;
                    this.serviceDescription.extendedTime = 1;
                    break;
                case 2:
                    this.serviceDescription.id = type;
                    this.serviceDescription.name = 'Gold';
                    this.serviceDescription.generalTime = 5;
                    this.serviceDescription.extendedTime = 1;
                    break;
                case 3:
                    this.serviceDescription.id = type;
                    this.serviceDescription.name = 'Premium';
                    this.serviceDescription.generalTime = 8;
                    this.serviceDescription.extendedTime = 1;
                    break;
            }
            this.projectAdd.paquete = type;
            this.projectAdd.costo = costo;
            this.projectAdd.id = id;
            this.projectAdd.nombre = name;
            this.projectAdd.foto = foto;
            this.projectAdd.calificacion = this.sesionObject.calificacion;
            this.projectAdd.hrspaquete = this.serviceDescription.generalTime;
            this.configProv.setAddProject(this.projectAdd);
        }
    };
    /* Agregar hora extra */
    PerfilWorkHirePage.prototype.extraHour = function (extra) {
        this.projectAdd.extra = extra;
        this.configProv.setAddProject(this.projectAdd);
        var toast = this.toastCtrl.create({
            message: 'You added an extra hour',
            duration: 3000
        });
        toast.present();
    };
    /* Ir a la siguiente pagina */
    PerfilWorkHirePage.prototype.addProject = function () {
        if (this.serviceDescription.id == 1 || this.serviceDescription.id == 2 || this.serviceDescription.id == 3) {
            this.navCtrl.push('AddProjectPage', { fecha2: this.fecha, dia: this.dia1, diaa: this.dia2, mes: this.mes });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Select a package to create the project',
                duration: 3000
            });
            toast.present();
        }
    };
    PerfilWorkHirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil-work-hire',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\perfil-work-hire\perfil-work-hire.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ sesionObject.nombre }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="seccionPerfil">\n\n  </div>\n\n  <img class="img" [src]="(sesionObject.foto != null && sesionObject.foto != undefined)?sesionObject.foto:\'../../assets/imgs/logo.png\'" />\n\n  <ion-grid>\n\n    <h4 text-center>{{ sesionObject.nombre }}</h4>\n\n    <b text-center>\n\n      <div [ngSwitch]="sesionObject.ocupation">\n\n        <h1 *ngSwitchCase="\'Photographer\'">{{sesionObject.ocupation}}</h1>\n\n        <h1 *ngSwitchCase="\'Videographer\'">Videographer</h1>\n\n        <h1 *ngSwitchCase="\'Hair\'">Hair & Makeup</h1>\n\n        <h1 *ngSwitchCase="\'Talent\'">Talent</h1>\n\n      </div>\n\n\n\n    </b>\n\n    <ion-row align-items-center justify-content-center>\n\n      <ion-col col-auto align-self-center text-center>\n\n        <p *ngIf="sesionObject.terminados != null"><b>{{ sesionObject.terminados }} jobs</b></p>\n\n        <p *ngIf="sesionObject.terminados == null"><b>0 jobs</b></p>\n\n        <p text-uppercase>Completed</p>\n\n      </ion-col>\n\n      <ion-col col-auto offset-1>\n\n        <ion-avatar item-start>\n\n          <img class="imgStart" src=" ../../assets/icon/favorito.png">\n\n        </ion-avatar>\n\n      </ion-col>\n\n      <ion-col col-auto>\n\n        <h5><b>{{ sesionObject.calificacion }}</b></h5>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid padding style="background: ghostwhite;">\n\n    <ion-card>\n\n      <ion-card-header no-padding no-margin>\n\n        <ion-row no-padding no-margin>\n\n          <ion-col align-self-center text-center>\n\n            Available days\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-col col-auto align-self-center text-center>\n\n            <p><b>{{ dia1 }} {{ dia2 }} {{ mes }}</b></p>\n\n        </ion-col>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content text-center>\n\n        <button ion-button color="{{(sesionObject.ocupation == \'Photographer\')?\'photographer\':((sesionObject.ocupation == \'Videographer\')?\'videographer\':((sesionObject.ocupation == \'Hair\')?\'makeup\':\'transparent\'))}}"\n\n          large text-center text-wrap padding (click)="presentActionSheet()" style="text-transform: none;">Check {{ sesionObject.nombre }}\n\n          available days</button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header no-padding no-margin>\n\n        <ion-row no-padding no-margin>\n\n          <ion-col align-self-center text-center>\n\n            Galery\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n    <ion-card-content *ngIf="(sesionObject.galeria != null && sesionObject.galeria != undefined)">\n\n        <ion-slides class="image-slider" loop="true" slidesPerView="2">\n\n          <ion-slide *ngFor="let img of sesionObject.galeria; let i = index">\n\n\n\n            <div *ngIf=" !img.includes(\'.mp4\') ;else showVideo">\n\n                <img [src]="img" class="thumb-img" #myImage (click)="presentImage(myImage)">\n\n              </div>\n\n  \n\n              <ng-template #showVideo>\n\n                <div class="thumb-img">\n\n                    <video controls="true" width=\'100%\' height=\'100%\' [src]="img" type=\'video/mp4\'></video>\n\n                </div>\n\n              </ng-template>\n\n\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header no-padding no-margin (click)="change(0)">\n\n        <ion-row no-padding no-margin>\n\n          <ion-col align-self-center text-center>\n\n            Packages\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content text-center>\n\n        <ion-grid no-padding>\n\n          <ion-row justify-content-center align-items-center>\n\n            <ion-col *ngIf="sesionObject.basic != 0" col-4 (click)="change(1, sesionObject.basic, sesionObject.id, sesionObject.nombre, sesionObject.foto)">\n\n              <p ion-text color="using"><b>${{ sesionObject.basic }}</b></p>\n\n              <p ion-text color="usingg">Basic</p>\n\n              <p ion-text color="dark">3 hrs</p>\n\n            </ion-col>\n\n            <ion-col *ngIf="sesionObject.gold != 0" col-4 (click)="change(2, sesionObject.gold, sesionObject.id, sesionObject.nombre, sesionObject.foto)">\n\n              <p ion-text color="using"><b>${{ sesionObject.gold }}</b></p>\n\n              <p ion-text color="usingg">Gold</p>\n\n              <p ion-text color="dark">5 hrs</p>\n\n            </ion-col>\n\n            <ion-col *ngIf="sesionObject.premium != 0" col-4 (click)="change(3, sesionObject.premium, sesionObject.id, sesionObject.nombre, sesionObject.foto)">\n\n              <p ion-text color="using"><b>${{ sesionObject.premium }}</b></p>\n\n              <p ion-text color="usingg">Premium</p>\n\n              <p ion-text color="dark">8 hrs</p>\n\n            </ion-col>\n\n          </ion-row>\n\n          <div *ngIf="selected">\n\n            <ion-row>\n\n              <ion-col margin-top col-12>\n\n                <p ion-text text-uppercase color="using"><b>{{ serviceDescription.name }}</b></p>\n\n                 <!--<p ion-text color="usingg">Include:</p>-->\n\n              </ion-col>\n\n              <!--  \n\n              <ion-col col-6>\n\n                  <img class="imgStart" src=" ../../assets/icon/icono-manzana.PNG" style="margin-left:35%" >\n\n                <p ion-text color="usingg">{{ serviceDescription.generalTime }} hr + {{\n\n                  serviceDescription.extendedTime}} hr</p>\n\n                <p ion-text color="usingg">lunchtime</p>\n\n              </ion-col>\n\n              <ion-col col-6 (click)="extraHour(1)">\n\n                <ion-icon class="ion-iconAdd" color="usingg" ios="ios-time-outline" md="md-time"></ion-icon>\n\n                <p ion-text color="usingg">You take add</p>\n\n                <p ion-text color="usingg">{{ serviceDescription.extendedTime }} extra hr</p>\n\n              </ion-col>\n\n              -->\n\n            </ion-row>\n\n          </div>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <button ion-button full color="light" style="color: orange" (click)="addProject()">Add to project</button>\n\n  </ion-grid>\n\n\n\n  <!--   <ion-fab right bottom>\n\n    <button ion-fab color="primary">\n\n      <ion-icon name="mail"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab>\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="logo-twitter"></ion-icon>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="logo-vimeo"></ion-icon>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="logo-googleplus"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\perfil-work-hire\perfil-work-hire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], PerfilWorkHirePage);
    return PerfilWorkHirePage;
}());

//# sourceMappingURL=perfil-work-hire.js.map

/***/ })

});
//# sourceMappingURL=18.js.map