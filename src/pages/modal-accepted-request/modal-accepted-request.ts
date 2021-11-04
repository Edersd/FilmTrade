import { ChatListPage } from '../chat-list/chat-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Message, Chat, Sesion } from '../../model/interfaces/interfaces';
import { ConfigProvider } from './../../providers/config/config';
/**
 * Generated class for the ModalAcceptedRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-accepted-request',
  templateUrl: 'modal-accepted-request.html',
})
export class ModalAcceptedRequestPage {
  perfilUserChat: any = [{}]
  user = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDatabase:AngularFireDatabase, public configProv:ConfigProvider, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    const data = this.navParams.get('data');
    this.user = this.navParams.get('user');
    this.perfilUserChat = data;
    console.log('Data of project', this.perfilUserChat, this.user);
    //TODO: Agregar la notificacion aqui
    configProv.getSesionObject().then(sesion => {
      let newChat: Chat = {
        guest: [
          {
            idGuest: this.perfilUserChat.id_user_contratado,
            name: sesion.nombre + ' - ' + this.perfilUserChat.nom_proyecto
          },
          {
            idGuest: this.perfilUserChat.id,
            name: this.perfilUserChat.nombre + ' - ' + this.perfilUserChat.nom_proyecto
          }
        ],
        messages: [
          {
            idGuest: this.perfilUserChat.id_user_contratado,
            message: `Hola, acabo de aceptar el proyecto: ${this.perfilUserChat.nom_proyecto}`,
            date: Date.now()
          }
        ],
        projectId: this.perfilUserChat.id_proyecto
      };
      newChat.key = angularDatabase.list('ionic/chats').push(newChat).key;
      angularDatabase.list('ionic/chats').update(newChat.key, newChat);
    }).catch(error => console.error(error));
  }

  close() {
    this.viewCtrl.dismiss();
  }

  openChat() {
    this.navCtrl.push('ChatListPage');
  }

}
