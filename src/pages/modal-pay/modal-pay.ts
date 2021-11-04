import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-pay',
  templateUrl: 'modal-pay.html',
})
export class ModalPayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPayPage');
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
