webpackJsonp([7],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsWorkPageModule", function() { return ProjectsWorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_work__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectsWorkPageModule = /** @class */ (function () {
    function ProjectsWorkPageModule() {
    }
    ProjectsWorkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__projects_work__["a" /* ProjectsWorkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__projects_work__["a" /* ProjectsWorkPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_tabs_footer_tabs_module__["a" /* FooterTabsComponentModule */]
            ],
        })
    ], ProjectsWorkPageModule);
    return ProjectsWorkPageModule;
}());

//# sourceMappingURL=projects-work.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterTabsComponent; });
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
 * Generated class for the FooterTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterTabsComponent = /** @class */ (function () {
    function FooterTabsComponent(navCtrl, navParams, events, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.menuCtrl = menuCtrl;
        console.log('Hello FooterTabsComponent Component');
    }
    FooterTabsComponent.prototype.segmentButtonClicked = function (ev) {
        console.log('Segment button clicked', ev);
    };
    FooterTabsComponent.prototype.tabs = function () {
        /* this.navCtrl.setRoot('YourProjectsPage'); */
        console.log(this.mymodel);
        if (this.mymodel == 'segment1') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('PerfilWorkPage');
        }
        if (this.mymodel == 'segment2') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('ProjectsWorkPage');
        }
        if (this.mymodel == 'segment3') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('ExplorePage');
        }
        if (this.mymodel == 'segment4') {
            this.menuCtrl.enable(true);
            this.navCtrl.setRoot('HelpPage');
        }
    };
    FooterTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-tabs',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\footer-tabs\footer-tabs.html"*/'<!-- Generated template for the FooterTabsComponent component -->\n<div>\n  <ion-segment [(ngModel)]="mymodel">\n    <ion-segment-button value="segment1" (click)="tabs()" (ionSelect)="segmentButtonClicked($event)">\n      <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment2" (click)="tabs()" (ionSelect)="segmentButtonClicked($event)">\n      <ion-icon ios="ios-briefcase-outline" md="md-briefcase"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment3" (click)="tabs()">\n      <ion-icon ios="ios-search-outline" md="md-search"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="segment4" (click)="tabs()">\n      <ion-icon ios="ios-call-outline" md="md-call"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</div>'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\components\footer-tabs\footer-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], FooterTabsComponent);
    return FooterTabsComponent;
}());

//# sourceMappingURL=footer-tabs.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterTabsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_tabs__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterTabsComponentModule = /** @class */ (function () {
    function FooterTabsComponentModule() {
    }
    FooterTabsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer_tabs__["a" /* FooterTabsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__footer_tabs__["a" /* FooterTabsComponent */]
            ]
        })
    ], FooterTabsComponentModule);
    return FooterTabsComponentModule;
}());

//# sourceMappingURL=footer-tabs.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(35);
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



var ProjectsWorkPage = /** @class */ (function () {
    function ProjectsWorkPage(navCtrl, navParams, modalCtrl, configProv, accountProv, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.configProv = configProv;
        this.accountProv = accountProv;
        this.events = events;
        this.sesionObject = {};
        this.projectsCreated = [{}];
        this.rate = 0;
        this.rating = 4;
        this.visible = false;
        this.visible2 = false;
        this.shownGroup = null;
        this.shownGroupUser = null;
        this.diseases = [
            { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
            { title: "Multiple Sclerosis", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
            { title: "Crohn's & Colitis", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." },
            { title: "Lupus", description: "Systemic lupus erythematosus (lupus) is a chronic, systemic autoimmune disease which can damage any part of the body, including the heart, joints, skin, lungs, blood vessels, liver, kidneys and nervous system." },
            { title: "Rheumatoid Arthritis", description: "Rheumatoid arthritis (RA) is an autoimmune disease in which the body's immune system mistakenly begins to attack its own tissues, primarily the synovium, the membrane that lines the joints." }
        ];
        events.subscribe('star-rating:changed', function (starRating) { console.log(starRating); });
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            console.log('Este es el id: ', sesion.id);
            _this.accountProv.listadoProyectosWork(sesion.id).subscribe(function (data) {
                _this.projectsCreated = data;
                console.log('Datos del api regreso: ', _this.projectsCreated);
            }, function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
    }
    ProjectsWorkPage.prototype.addProject = function () {
        var myModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
        };
        var myModalData = {};
        var modal = this.modalCtrl.create('ModalAddProjectsPage', { data: myModalData }, myModalOptions);
        modal.present();
        //setTimeout(() => modal.dismiss(), 4000);
        modal.onDidDismiss(function (data) { });
        modal.onWillDismiss(function (data) { });
    };
    ProjectsWorkPage.prototype.addNewUser = function () {
        this.navCtrl.push('CategoryHirePage');
    };
    ProjectsWorkPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.accountProv.listadoProyectosWork(sesion.id).subscribe(function (data) {
                _this.projectsCreated = data;
            }, function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ProjectsWorkPage.prototype.desplegarUsuarios = function (i) {
        this.visible = !this.visible;
        console.log('desU:', i, '-----', this.visible);
    };
    ProjectsWorkPage.prototype.desplegarInfo = function (i) {
        this.visible2 = !this.visible2;
        console.log('desI:', i, '-----', this.visible2);
    };
    ProjectsWorkPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    ProjectsWorkPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    ProjectsWorkPage.prototype.toggleGroupUser = function (group) {
        if (this.isGroupShownUser(group)) {
            this.shownGroupUser = null;
        }
        else {
            this.shownGroupUser = group;
        }
    };
    ;
    ProjectsWorkPage.prototype.isGroupShownUser = function (group) {
        return this.shownGroupUser === group;
    };
    ;
    ProjectsWorkPage.prototype.openChat = function () {
        this.navCtrl.push('ChatListPage');
    };
    ProjectsWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-projects-work',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\projects-work\projects-work.html"*/'<!--\n\n  Generated template for the ProjectsWorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Projects</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div class="seccion">\n\n    <h1 no-margin><b>Your projects</b></h1>\n\n    <p no-margin>Check the status and details of your projects</p>\n\n  </div>\n\n  <!-- <button ion-button full (click)="addProject()">Create a new project</button> -->\n\n  <div class="list-avatar-page" *ngIf="projectsCreated.proyectos != null">\n\n    <ion-list *ngFor="let project of projectsCreated.proyectos; let i = index" (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n\n      <ion-item style="margin-top: 10px">\n\n        <ion-label>\n\n          <strong>\n\n            <h2>{{ project.nombre }}</h2>\n\n          </strong>\n\n          <p>CREATED {{ project.Fecha_Creacion}} | {{ project.user.nombre}}</p><br>\n\n        </ion-label>\n\n        <button ion-button large clear item-end style="margin: 0px 0px 0px 0px;" (click)="desplegarUsuarios(i)">\n\n          <ion-icon [name]="(isGroupShown(i)) ? \'arrow-down\' : \'arrow-forward\'"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item *ngIf="isGroupShown(i)">\n\n        <ion-list *ngFor="let user of project.user; let j = index">\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img [src]="user.foto">\n\n            </ion-avatar>\n\n            <h6><b>{{ user.nombre }}</b></h6>\n\n            <p text-uppercase>{{ user.compania }}</p>\n\n            <ion-note item-end>\n\n              <ion-icon color="using" ios="ios-heart-outline" md="md-heart-outline"></ion-icon>\n\n            </ion-note>\n\n            <ion-note item-end>\n\n              <ion-icon name=\'star\'></ion-icon>\n\n            </ion-note>\n\n            <ion-note item-end>{{ user.calificacion }}</ion-note>\n\n          </ion-item>\n\n\n\n          <ion-item style="padding-left: 80px;" text-wrap class="iconos" *ngIf="isGroupShown(i)">\n\n            <ion-grid>\n\n              <ion-row justify-content-start>\n\n                <ion-col col-1>\n\n                  <div>\n\n                    <ion-icon ios="ios-card-outline" md="md-card"></ion-icon><br>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col padding-left>\n\n                  <p ion-text color="dark">{{ user.paquetes }}</p>\n\n                  <ion-row justify-content-between>\n\n                    <ion-col col-4 style="padding: 0px;">\n\n                      <p ion-text color="using" style="font-size: 0.6em;">+ extra hour</p>\n\n                    </ion-col>\n\n                    <ion-col col-4 style="padding: 0px;">\n\n                      <p ion-text color="dark" style="font-size: 0.6em;">Total: ${{user.costo}}</p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row justify-content-start>\n\n                <ion-col col-1>\n\n                  <div>\n\n                    <ion-icon ios="ios-alarm-outline" md="md-alarm"></ion-icon><br>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col padding-left>\n\n                  <h6 ion-text color="{{(user.status_work == \'En proceso\')?\'proceso\':((user.status_work == \'Cancelado\')?\'cancelado\':((user.status_work == \'Finalizado\')?\'finalizado\':\'agendado\'))}}">\n\n                    <div [ngSwitch]="user.status_work">\n\n                      <h6 *ngSwitchCase="\'En proceso\'"> In process</h6>\n\n                      <h6 *ngSwitchCase="\'Agendado\'">Scheduled</h6>\n\n                      <h6 *ngSwitchCase="\'Finalizado\'">Finished</h6>\n\n                      <h6 *ngSwitchCase="\'Cancelado\'">Cancelled</h6>\n\n                    </div>\n\n                  </h6>\n\n                  <ion-row justify-content-between>\n\n                    <ion-col col-4 style="font-size: 0.6em; padding: 0px;">\n\n                      <p><a ion-text color="usingg">{{user.fecha_work}}</a></p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row justify-content-start>\n\n                <ion-col col-1>\n\n                  <div>\n\n                    <ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><br>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col padding-left>\n\n                  <button   (click)="openChat()" style="background: white; color:black; font-size: 15px; outline-style: none;">Open Chat</button>\n\n                  <ion-row justify-content-between>\n\n                    <ion-col col-11 style="font-size: 0.6em; padding: 0px;">\n\n                      <p><a ion-text color="usingg">This chat will be deleted when the project is over</a></p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div text-center>\n\n      <p ion-text color="dark">*La hora extra tiene un cargo extra del 10% del paquete adquirido</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <footer-tabs></footer-tabs>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\projects-work\projects-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], ProjectsWorkPage);
    return ProjectsWorkPage;
}());

//# sourceMappingURL=projects-work.js.map

/***/ })

});
//# sourceMappingURL=7.js.map