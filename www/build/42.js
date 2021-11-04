webpackJsonp([42],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectPageModule", function() { return AddProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_project__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddProjectPageModule = /** @class */ (function () {
    function AddProjectPageModule() {
    }
    AddProjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_project__["a" /* AddProjectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_project__["a" /* AddProjectPage */]),
            ],
        })
    ], AddProjectPageModule);
    return AddProjectPageModule;
}());

//# sourceMappingURL=add-project.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
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

var AddProjectPage = /** @class */ (function () {
    function AddProjectPage(navCtrl, navParams, modalCtrl, configProv, formBuilder, toastCtrl, accountProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.configProv = configProv;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.accountProv = accountProv;
        this.projectAdd = {};
        this.perfilWork = {};
        this.projecExis = [];
        this.event = {
            timeStarts: '12:00'
        };
        this.sesionObject = {};
        this.showNew = false;
        this.fecha = [];
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.id_user = sesion.id;
            _this.projectAdd.id_user = sesion.id;
            _this.configProv.setAddProject(_this.projectAdd);
            _this.loginForm.controls.id_user.setValue(sesion.id);
            _this.configProv.getProjectExis(sesion.id).subscribe(function (data) {
                var projects = data;
                _this.projecExis = projects;
                console.log('Projectos existentes', data);
                var fecha2 = navParams.get('fecha2');
                console.log('Fecha', fecha2);
                _this.fecha = fecha2.string;
                _this.projectAdd.avaibleDates = fecha2;
                _this.loginForm.controls.avaibleDates.setValue(_this.projectAdd.avaibleDates);
                console.log('nueva', _this.fecha);
                console.log('avaibleDates', _this.projectAdd.avaibleDates);
                //console.log('avaibleDates', this.loginForm.controls.avaibleDates);
                //console.log('Fecha3', fecha2);
                var dia1 = navParams.get('dia');
                _this.dia1 = dia1;
                console.log('dia1', dia1);
                var dia2 = navParams.get('diaa');
                _this.dia2 = dia2;
                console.log('dia2', dia2);
                var mes = navParams.get('mes');
                _this.mes = mes;
                console.log('mes', mes);
            });
        }).catch(function (error) { return console.error(error); });
        this.configProv.getSesionObjectProject().then(function (data) {
            _this.projectAdd = data;
            _this.plan = _this.projectAdd.paquete;
            _this.loginForm.controls.id.setValue(_this.projectAdd.id);
            _this.loginForm.controls.paquete.setValue(_this.projectAdd.paquete);
            _this.loginForm.controls.costo.setValue(_this.projectAdd.costo);
            _this.loginForm.controls.nombre.setValue(_this.projectAdd.nombre);
            _this.loginForm.controls.hrspaquete.setValue(_this.projectAdd.hrspaquete);
            _this.loginForm.controls.foto.setValue(_this.projectAdd.foto);
            _this.loginForm.controls.calificacion.setValue(_this.projectAdd.calificacion);
            _this.loginForm.controls.extra.setValue(_this.projectAdd.extra);
            _this.configProv.getAllPerfil(String(_this.projectAdd.id)).subscribe(function (sesion) {
                _this.perfilWork = sesion;
            }, function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
        this.loginForm = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            descripcion: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            id_user: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            paquete: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            costo: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            nombre: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            hrspaquete: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            extra: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            avaibleDates: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            calificacion: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            hora: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            foto: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            id_proyecto: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]
        });
    }
    /* Calendario */
    /*
    private presentActionSheet(): void {
      const daysConfig: DayConfig[] = [];
      let dates: Array<string> = [];
      let datesS: Array<string> = [];
  
      if (this.perfilWork.dias.length != undefined) {
        if (this.perfilWork.dias != undefined && this.perfilWork.dias != null) {
          this.perfilWork.dias.forEach((element, loop) => dates.push(element));
          for (let i = 0; i < dates.length; i++) {
            var currentNumber = dates[i];
            var subCadena = currentNumber.substring(10, 8);
            var yymm = currentNumber.substring(8, 0);
            daysConfig.push({
              date: new Date(yymm + String(Number(subCadena) + 1)),
              disable: true,
              subTitle: 'disable'
            })
          }
        }
      }
  
      console.log(this.projectAdd);
      
      if (this.fecha != undefined && this.fecha != null) {
        this.projectAdd.avaibleDates.forEach((element, loop) => datesS.push(element));
        for (let i = 0; i < datesS.length; i++) {
          var currentNumberS = datesS[i];
          var subCadenaS = currentNumberS.substring(10, 8);
          var yymmS = currentNumberS.substring(8, 0);
          daysConfig.push({
            date: new Date(yymmS + String(Number(subCadenaS) + 1)),
            subTitle: 'Select',
          })
        }
      }
      
  
      let options: CalendarModalOptions = {
        daysConfig,
        title: 'Select the avalaible dates',
        format: 'YYYY-MM-DD',
        pickMode: 'multi',
        closeIcon: true,
        doneIcon: true,
        defaultDates: (this.perfilWork.dias != undefined) ? this.perfilWork.dias : null
      }
      let calendar = this.modalCtrl.create(CalendarModal, {
        options: options
      });
      
      calendar.onDidDismiss((date: Array<any>, type: string) => {
        if (type == 'done') {
          let dates: Array<string> = [];
          date.forEach((element, loop) => dates.push(element.string));
          //console.log('Incial', dates);
  
          if (this.perfilWork.dias.length != undefined) {
            this.perfilWork.dias.forEach((element2, loop) => {
              var index = dates.indexOf(element2);
              if (index > -1) {
                dates.splice(index, 1);
              }
            });
          }
          //console.log('Final', dates);
          this.perfilWork.dias;
          this.projectAdd.avaibleDates = dates;
          this.configProv.setAddProject(this.projectAdd);
          this.loginForm.controls.avaibleDates.setValue(this.projectAdd.avaibleDates);
        }
      });
      calendar.present();
    }*/
    /* Seleccionar hora */
    AddProjectPage.prototype.parseDate = function (hora) {
        this.projectAdd.hora = hora;
        this.configProv.setAddProject(this.projectAdd);
        this.loginForm.controls.hora.setValue(this.projectAdd.hora);
    };
    /* Seleccionar hora extra */
    AddProjectPage.prototype.extraHour = function (extra) {
        if (this.projectAdd.extra == 1) {
            var toast = this.toastCtrl.create({
                message: 'You have already added an extra hour',
                duration: 3000
            });
            toast.present();
            this.projectAdd.extra = 1;
        }
        else {
            this.projectAdd.extra = extra;
            this.configProv.setAddProject(this.projectAdd);
            this.loginForm.controls.extra.setValue(this.projectAdd.extra);
        }
    };
    /* Ir al modal */
    AddProjectPage.prototype.openModal = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.projectAdd = this.loginForm.getRawValue();
            this.configProv.setAddProject(this.projectAdd);
            console.log('Extra cuando se manda:', this.projectAdd.extra);
            if ((this.projectAdd.avaibleDates != undefined && this.projectAdd.avaibleDates != null && this.projectAdd.avaibleDates != Array.of("")) && (this.projectAdd.hora != undefined && this.projectAdd.hora != null && this.projectAdd.hora != "") && (this.projectAdd.name != undefined && this.projectAdd.name != null) && (this.projectAdd.descripcion != undefined && this.projectAdd.descripcion != null)) {
                if (this.projectAdd.id_proyecto == null) {
                    this.accountProv.agregarProyecto({ na: this.projectAdd.name, des: this.projectAdd.descripcion, id_us: this.projectAdd.id_user }).subscribe(function (data) {
                        var d = data;
                        _this.projectAdd.id_proyecto = d.id_proyecto;
                        //this.projectAdd.avaibleDates = this.fecha;
                        _this.configProv.setAddProject(_this.projectAdd);
                        console.log('Project Id: ', d.id_proyecto, '-', _this.projectAdd.id_proyecto, '-', _this.projectAdd);
                        var toast = _this.toastCtrl.create({
                            message: d.mensaje,
                            duration: 3000
                        });
                        //toast.present();
                        if (d.id_proyecto != null) {
                            var myModalOptions = {
                                enableBackdropDismiss: false,
                                showBackdrop: false,
                                cssClass: 'my-modal-inner'
                            };
                            var modal = _this.modalCtrl.create('ModalDetailRequestPage', { data: _this.projectAdd }, myModalOptions);
                            modal.present();
                        }
                    }, function (error) { return console.error(error); });
                }
                if (this.projectAdd.id_proyecto != null) {
                    var myModalOptions = {
                        enableBackdropDismiss: false,
                        showBackdrop: false,
                        cssClass: 'my-modal-inner'
                    };
                    var modal = this.modalCtrl.create('ModalDetailRequestPage', { data: this.projectAdd }, myModalOptions);
                    modal.present();
                }
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Please fill in all the requiere fields',
                    duration: 3000
                });
                toast.present();
            }
        }
    };
    AddProjectPage.prototype.showNewP = function () {
        this.showNew = true;
        this.projecExis = null;
        this.projectAdd.id_proyecto = null;
        this.projectAdd.name = null;
        this.projectAdd.descripcion = null;
    };
    AddProjectPage.prototype.changeProject = function (event) {
        this.projectAdd.id_user = this.id_user;
        this.projectAdd.id_proyecto = event.id;
        this.loginForm.controls.id_proyecto.setValue(event.id);
        this.projectAdd.name = event.nombre;
        this.loginForm.controls.name.setValue(event.nombre);
        this.projectAdd.descripcion = event.descripcion;
        this.loginForm.controls.descripcion.setValue(event.descripcion);
        this.configProv.setAddProject(this.projectAdd);
    };
    AddProjectPage.prototype.termConditios = function () {
        this.navCtrl.push('TermsConditionsPage');
    };
    AddProjectPage.prototype.changePackage = function () {
        this.navCtrl.pop();
        this.configProv.setAddProject(this.projectAdd);
    };
    AddProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-project',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\add-project\add-project.html"*/'<!--\n\n  Generated template for the AddProjectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ perfilWork.ocupation}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background: ghostwhite;">\n\n  <form [formGroup]="loginForm">\n\n    <div>\n\n      <ion-label stacked>Project name</ion-label>\n\n      <ion-card no-padding>\n\n        <ion-card-content no-padding ftext-center>\n\n          <ion-item *ngIf="projecExis == null || showNew == true">\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="projecExis != null">\n\n            <ion-select (ionChange)="changeProject($event)" interface="popover" placeholder="Select one">\n\n              <ion-option *ngFor="let item of projecExis" [value]="item"> {{item.nombre}} </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <p ion-text color="primary" padding-left (click)="showNewP()" *ngIf="projecExis != null"><a>+\n\n              Add new project</a></p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n\n\n    <div padding-top *ngIf="projecExis == null || showNew == true">\n\n      <ion-label color="dark" stacked>Description</ion-label>\n\n      <ion-card style="height: 150px;">\n\n        <ion-card-content no-padding text-center>\n\n          <ion-item>\n\n            <ion-textarea formControlName="descripcion"></ion-textarea>\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <p text-right ion-text color="usingg" style="margin: 4px;">Must*</p>\n\n    </div>\n\n  </form>\n\n\n\n  <div>\n\n    <ion-label padding-top color="dark" stacked>Package</ion-label>\n\n    <ion-card>\n\n      <ion-card-content text-center>\n\n        <ion-grid no-padding>\n\n          <!---->\n\n          <ion-row [ngSwitch]="plan">\n\n            <ion-col margin-top col-12 *ngSwitchCase="1">\n\n              <p ion-text text-uppercase color="using" *ngSwitchCase="1"><b>Basic</b></p>\n\n              <p ion-text text-uppercase color="using" *ngSwitchCase="1"><b>{{ dia1 }} {{ dia2 }} {{ mes }}</b></p>\n\n            </ion-col>\n\n            <ion-col col-auto align-self-center text-center>\n\n                <p><b></b></p>\n\n              </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row [ngSwitch]="plan">\n\n            <ion-col margin-top col-12 *ngSwitchCase="2">\n\n              <p ion-text text-uppercase color="using" *ngSwitchCase="2"><b>Gold</b></p>\n\n              <p ion-text text-uppercase color="using" *ngSwitchCase="2"><b>{{ dia1 }} {{ dia2 }} {{ mes }}</b></p>\n\n            </ion-col>\n\n          </ion-row>\n\n          \n\n          <ion-row [ngSwitch]="plan">\n\n            <ion-col margin-top col-12 *ngSwitchCase="3">\n\n              <p ion-text text-uppercase color="using" *ngSwitchCase="3"><b>Premium</b></p>\n\n              <p ion-text text-uppercase color="using" *ngSwitchCase="3"><b>{{ dia1 }} {{ dia2 }} {{ mes }}</b></p>\n\n              <p ion-text color="usingg" *ngSwitchCase="3"></p>\n\n            </ion-col>\n\n            <!--\n\n            <ion-col col-6 *ngSwitchCase="3">\n\n                <img class="imgStart" src=" ../../assets/icon/icono-manzana.PNG" style="margin-left:35%" >\n\n              <p ion-text color="usingg" *ngSwitchCase="3">8 hr + 1 hr</p>\n\n              <p ion-text color="usingg" *ngSwitchCase="3">lunchtime</p>\n\n            </ion-col>\n\n            <ion-col col-6 *ngSwitchCase="3" (click)="extraHour(1)">\n\n              <ion-icon class="ion-iconAdd" color="usingg" ios="ios-time-outline" md="md-time"></ion-icon>\n\n              <p ion-text color="usingg">You take add</p>\n\n              <p ion-text color="usingg">1 extra hr</p>\n\n            </ion-col>\n\n          -->\n\n          </ion-row>\n\n          \n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <button ion-button full color="light" style="color: orange; " (click)="changePackage()">Change package</button>\n\n    <!--<p text-right ion-text color="using" style="margin: 4px;" (click)="changePackage()" >Change package</p>-->\n\n  </div>\n\n  <!--\n\n  <h5 style="margin-left: 5px">Calendar</h5>\n\n  <button color="dark" (click)="presentActionSheet()" style="background: transparent; font-size: 14px">\n\n    {{this.projectAdd.nombre}} it\'s available in these days, select the days you need the services  IT\'S AVAILABLE IN THESE DAYS, SELECT THE DAYS YOU NEED THE SERVICES \n\n  </button>\n\n  -->\n\n\n\n  <button ion-button full color="light" style="color: #000; ">\n\n    <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts" (ionChange)="parseDate(event.timeStarts)"></ion-datetime>\n\n  </button>\n\n  <p text-center ion-text color="usingg" style="margin: 23px; " (click)="termConditios()" >Terms and conditions</p>\n\n  <button ion-button full clear color="dark" (click)="openModal()"><b>NEXT</b></button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\add-project\add-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */]])
    ], AddProjectPage);
    return AddProjectPage;
}());

//# sourceMappingURL=add-project.js.map

/***/ })

});
//# sourceMappingURL=42.js.map