import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalConcludeProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-conclude-project',
  templateUrl: 'modal-conclude-project.html',
})
export class ModalConcludeProjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalConcludeProjectPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
