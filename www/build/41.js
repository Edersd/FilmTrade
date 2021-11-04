webpackJsonp([41],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_room__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatRoomPageModule = /** @class */ (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_room__["a" /* ChatRoomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_room__["a" /* ChatRoomPage */]),
            ],
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());

//# sourceMappingURL=chat-room.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_account_account__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(navCtrl, acoutProv, navParams, angularDatabase, configProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.acoutProv = acoutProv;
        this.navParams = navParams;
        this.angularDatabase = angularDatabase;
        this.configProv = configProv;
        this.sesionObject = {};
        this.theme = '';
        this.chat = this.navParams.get('chat');
        this.configProv.getTheme().subscribe(function (themeNumber) {
            console.log(themeNumber);
            switch (themeNumber) {
                case __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].PHOTOGRAPHER:
                    _this.theme = 'photographer';
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].TALENT:
                    _this.theme = 'talent';
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].HAIR_MAKEUP:
                    _this.theme = 'makeup';
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__model_interfaces_interfaces__["c" /* Theme */].VIDEOGRAPHER:
                    _this.theme = 'videographer';
                    break;
            }
        }, function (error) { return console.error(error); });
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            console.log(sesion);
            console.log(_this.chat.guest[(_this.sesionObject.tipo_usuario === '2') ? 1 : 0].name);
        }).catch(function (error) { return console.error(error); });
        this.messagesList = this.angularDatabase.list("ionic/chats/" + this.chat.key + "/messages");
        this.messages = this.messagesList.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) { return (changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); })); }));
    }
    ChatRoomPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(200);
        }, 300);
        this.messagesList.valueChanges().subscribe(function (data) {
            console.log(data);
            setTimeout(function () {
                _this.content.scrollToBottom(200);
            }, 300);
        });
    };
    ChatRoomPage.prototype.sendMessage = function () {
        var _this = this;
        this.configProv.getSesionObject().then(function (sesion) {
            _this.sesionObject = sesion;
            _this.acoutProv.mensajePush({ to: _this.chat.guest[(_this.sesionObject.tipo_usuario === '2') ? 1 : 0].idGuest }).subscribe(function (data) {
                console.log('usuario', _this.chat.guest[(_this.sesionObject.tipo_usuario === '2') ? 1 : 0].idGuest);
            }, function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
        this.messagesList.push({
            date: Date.now(),
            idGuest: this.sesionObject.id,
            message: this.newMessage
        });
        this.newMessage = '';
        setTimeout(function () {
            _this.content.scrollToBottom(200);
        }, 300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ChatRoomPage.prototype, "content", void 0);
    ChatRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-room',template:/*ion-inline-start:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\chat-room\chat-room.html"*/'<ion-header>\n\n  <ion-navbar [color]="theme">\n\n    <ion-item [color]="theme">\n\n      <ion-avatar item-start>\n\n          <h6 *ngIf="sesionObject.tipo_usuario==2"> <img src="http://d-ies.com/FilmTrade/API/Media/{{ chat.guest[1].idGuest }}/Datos/3.jpg"></h6>\n\n          <h6 *ngIf="sesionObject.tipo_usuario==3"> <img src="http://d-ies.com/FilmTrade/API/Media/{{ chat.guest[0].idGuest }}/Datos/3.jpg"></h6>\n\n      </ion-avatar>\n\n      <h2>{{ (chat != undefined && chat != null)?chat.guest[(this.sesionObject.tipo_usuario === \'2\')?1:0].name:\'\' }}</h2>\n\n    </ion-item>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row *ngFor="let message of messages | async">\n\n      <ion-col *ngIf="message.idGuest == chat.guest[(this.sesionObject.tipo_usuario === \'2\')?1:0].idGuest" col-9 class="message myMessage">\n\n        <div class="userNameChat">{{ chat.guest[(this.sesionObject.tipo_usuario === \'2\')?1:0].name.split(\'-\')[0] }}</div>\n\n        <div>{{ message.message }}</div>\n\n        <div class="time">{{ message.date | date:\'dd/MM hh:MM\' }}</div>\n\n      </ion-col>\n\n      <ion-col *ngIf="message.idGuest == chat.guest[(this.sesionObject.tipo_usuario === \'2\')?0:1].idGuest" offset-3 col-9 class="message otherMessage">\n\n        <div class="userNameChat">{{ chat.guest[(this.sesionObject.tipo_usuario === \'2\')?0:1].name.split(\'-\')[0] }}</div>\n\n        <div>{{ message.message }}</div>\n\n        <div class="time">{{ message.date | date:\'dd/MM hh:MM\' }}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-item>\n\n    <ion-label>Message</ion-label>\n\n    <ion-input type="text" [(ngModel)]="newMessage"></ion-input>\n\n    <button (click)="sendMessage()" [disabled]="(newMessage == undefined || newMessage == null || newMessage == \'\')" item-right ion-button icon-only clear><ion-icon name="md-send"></ion-icon></button>\n\n  </ion-item>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\eders\Documents\Ionic3\FilmTrade\src\pages\chat-room\chat-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */]])
    ], ChatRoomPage);
    return ChatRoomPage;
}());

//# sourceMappingURL=chat-room.js.map

/***/ })

});
//# sourceMappingURL=41.js.map