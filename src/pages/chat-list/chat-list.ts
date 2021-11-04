import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//interfaces
import { Message, Chat, Sesion } from '../../model/interfaces/interfaces';
import { ConfigProvider } from './../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage implements OnInit {
  private chats:Observable<Chat[]>;
  private chatList:AngularFireList<Chat>;
  public sesionObject: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularDatabase: AngularFireDatabase, private configProv: ConfigProvider) {
  }

  public ngOnInit(): void {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      console.log(sesion)
      this.chatList = this.angularDatabase.list('ionic/chats', ref => ref.orderByChild(`guest/${(sesion.tipo_usuario === '2')?0:1}/idGuest`).equalTo(sesion.id));
      this.chats = this.chatList.snapshotChanges().pipe(
        map(changes => (
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        ))
      );
    }).catch(error => console.error(error));
  }

  private openChat(item:Chat):void {
    console.log(item);
    this.navCtrl.push('ChatRoomPage', { chat: item });
  }

}
