import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalRequestSendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-request-send',
  templateUrl: 'modal-request-send.html',
})
export class ModalRequestSendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalRequestSendPage');
    const data = this.navParams.get('data');
    const total = this.navParams.get('total');
    const hora_extra_new = this.navParams.get('hora_extra_new');
    console.log(data, total, hora_extra_new);
  }

  close() {
    const data = {
      name: 'Joes',
      occupation: 'Documentation'
    };
    this.viewCtrl.dismiss(data);

  }

}
