import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { MenuHomePage } from '../menu-home/menu-home';
//interfaces
import { Sesion } from '../../model/interfaces/interfaces';

//provider
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';
/**
 * Generated class for the ModalCompletedWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-completed-work',
  templateUrl: 'modal-completed-work.html',
})
export class ModalCompletedWorkPage {
  public dataUserModal: any = [{}];
  public dataUserModalAPI: any = [{}];
  private sesionObject: Sesion;
  public user: any = "3";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private accountProv: AccountProvider, private configProv: ConfigProvider) {
    this.user = this.navParams.get('user');
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      if (this.user == 2) {
        const datah = this.navParams.get('data_hire');
        const dataw = this.navParams.get('data_work');
        this.dataUserModal = dataw;
        console.log(this.dataUserModal, this.user);
      }
      else {
        const data = this.navParams.get('data');
        this.dataUserModal = data;
        console.log(this.dataUserModal, this.user);

        this.accountProv.trabajoTerminadoDatos({ idh: sesion.id, idw: data.id }).subscribe(data => {
          this.dataUserModalAPI = data['user'];
          const resultado = this.dataUserModalAPI.find(user => user.id_proyecto === this.dataUserModal.id_proyecto);
          console.log('Usuario correcto', resultado)
          if (resultado != null) {
            this.dataUserModal = resultado;
          } else {
            this.dataUserModal = data;
          }
        }, error => console.error(error));
      }
    }).catch(error => console.error(error));
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalCompletedWorkPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  addExtra() {
    this.viewCtrl.dismiss();
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false,
      cssClass: 'my-modal-inner'
    };

    const modal: Modal = this.modalCtrl.create('ModalExtraHourPage', { data: this.dataUserModal }, myModalOptions);
    modal.present();

    modal.onDidDismiss((data) => { });

    modal.onWillDismiss((data) => { });
  }

  finishPtoject() {
    this.viewCtrl.dismiss();
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false,
      cssClass: 'my-modal-inner'
    };
    const modal: Modal = this.modalCtrl.create('ModalRequestSendPage', { data: this.dataUserModal, total: this.dataUserModal.costo }, myModalOptions);
    modal.present();

    setTimeout(() => {
      modal.dismiss();
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false,
        cssClass: 'my-modal-inner'
      };

      const modal2: Modal = this.modalCtrl.create('ModalBadQualificationPage', { data: this.dataUserModal, total: this.dataUserModal.costo, user: this.user }, myModalOptions);
      modal2.present();
    }, 2000);
  }

}
