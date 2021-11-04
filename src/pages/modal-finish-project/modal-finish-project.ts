import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';
/**
 * Generated class for the ModalFinishProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-finish-project',
  templateUrl: 'modal-finish-project.html',
})
export class ModalFinishProjectPage {
  public dataUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, private accountProv: AccountProvider, private toastCtrl:ToastController) {
    this.dataUser = navParams.get('data');
    console.log('Datos fin:',this.dataUser)
    this.accountProv.finalizarServicio({id_pro:this.dataUser.id_proyecto,id_work:this.dataUser.id}).subscribe(data => {
      let toast = this.toastCtrl.create({
        duration: 10000,
        message: 'Project finished',
        position: 'bottom'
      });
      toast.present();
    })
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalFinishProjectPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
