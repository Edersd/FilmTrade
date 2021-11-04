import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Chat, Message, Sesion, Theme } from '../../model/interfaces/interfaces';
import { AccountProvider } from '../../providers/account/account';

import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  @ViewChild(Content) content:Content;
  private sesionObject: any = {};
  private chat:Chat;
  private messages:Observable<Message[]>;
  private messagesList:AngularFireList<Message>;
  private newMessage:string;
  private theme:string = '';
  constructor(public navCtrl: NavController,private acoutProv: AccountProvider, public navParams: NavParams, private angularDatabase: AngularFireDatabase, private configProv: ConfigProvider) {
    this.chat = this.navParams.get('chat');
    this.configProv.getTheme().subscribe(themeNumber => {
      console.log(themeNumber);
      switch (themeNumber) {
        case Theme.PHOTOGRAPHER:
          this.theme = 'photographer';
          break;
        case Theme.TALENT:
          this.theme = 'talent';
          break;
        case Theme.HAIR_MAKEUP:
          this.theme = 'makeup';
          break;
        case Theme.VIDEOGRAPHER:
          this.theme = 'videographer';
          break;
      }
    }, error => console.error(error));
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      console.log(sesion);
      console.log(this.chat.guest[(this.sesionObject.tipo_usuario === '2')?1:0].name);
    }).catch(error => console.error(error));
    this.messagesList = this.angularDatabase.list(`ionic/chats/${this.chat.key}/messages`);
    this.messages = this.messagesList.snapshotChanges().pipe(
      map(changes => (
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ))
    );
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 300);
    this.messagesList.valueChanges().subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.content.scrollToBottom(200);
      }, 300);
    });
  }

  private sendMessage():void {

    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.acoutProv.mensajePush({ to: this.chat.guest[(this.sesionObject.tipo_usuario === '2')?1:0].idGuest }).subscribe(data => {
        console.log('usuario', this.chat.guest[(this.sesionObject.tipo_usuario === '2')?1:0].idGuest);
      }, error => console.error(error));
      
      
    }).catch(error => console.error(error));

    this.messagesList.push({
      date: Date.now(),
      idGuest: this.sesionObject.id,
      message: this.newMessage
    });
    this.newMessage = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 300);
  }
}
