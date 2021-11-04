import { Component } from '@angular/core';
import { IonicPage, Modal, ModalOptions, ModalController,  NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-push',
  templateUrl: 'modal-push.html',
})
export class ModalPushPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    //const data = this.navParams.get('datasend');
    this.title = this.navParams.get('dataT');
    this.body = this.navParams.get('dataB');
    console.log('modal',this.title);
    console.log('modal',this.body);
  }
  public plan=0;

  public title: string;
  public body: string;
  // = 0 ;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPushPage');
    this.title = this.navParams.get('dataT');
  }

  close() {
    this.viewCtrl.dismiss();
  }
  /*
if(plan = 0){
  const myModalOptions: ModalOptions = {
    enableBackdropDismiss: false,
    showBackdrop: false,
    cssClass: 'my-modal-inner'
  };

  const modal: Modal = this.modalCtrl.create('ModalPush', myModalOptions);
  modal.present();
  }
  */
}
