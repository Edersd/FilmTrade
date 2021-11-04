import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Modal, ModalController, ModalOptions, ToastController } from 'ionic-angular';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';
/**
 * Generated class for the ModalExtraHourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface SendDataModalFin {
  id:number,
  id_proyecto:number,
  nombre:string,
  foto: string,
  costo:number,
  total:number,
  tipo_paquete:string,
  costopa:number,
  fecha_status:string,
  hora:string,
  hora_extra:number,
  dias:string,
  calificacion:number,
  porque:string,
  hora_extra_new: number
}

@IonicPage()
@Component({
  selector: 'page-modal-extra-hour',
  templateUrl: 'modal-extra-hour.html',
})
export class ModalExtraHourPage {
  public dataUserModal: any = [{}];
  public sendDataModal: Array<SendDataModalFin> = [];
  public costExtra: number;
  public total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private acoutProv: AccountProvider, private toatCtrl: ToastController) {
    const data = this.navParams.get('data');
    this.dataUserModal = data;
    this.sendDataModal = data;
    console.log(this.dataUserModal)
    if (this.dataUserModal.tipo_paquete === 'Basic') {
      this.costExtra = Number(this.dataUserModal.basic) * Number(0.10);
      this.total = Number(this.dataUserModal.costo) + Number(this.costExtra);
      console.log('Extra1:', this.costExtra, '--- Total: ', this.total)
    }
    if (this.dataUserModal.tipo_paquete === 'Gold') {
      this.costExtra = Number(this.dataUserModal.gold) * Number(0.10);
      this.total = Number(this.dataUserModal.costo) + Number(this.costExtra);
      console.log('Extra2:', this.costExtra, '--- Total: ', this.total)
    }
    if (this.dataUserModal.tipo_paquete === 'Premium') {
      this.costExtra = Number(this.dataUserModal.premium) * Number(0.10);
      this.total = Number(this.dataUserModal.costo) + Number(this.costExtra);
      console.log('Extra3:', this.costExtra, '--- Total: ', this.total)
    }
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalExtraHourPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  pagoHecho() {
    this.acoutProv.horaExtra({ id_pro: this.dataUserModal.id_proyecto, id_work: this.dataUserModal.id, Ho_Ex: 1 }).subscribe(data => {
      
      let toast = this.toatCtrl.create({
        duration: 2000,
        message: 'Extra time requested ' + this.dataUserModal.hora_extra,
        position: 'bottom'
      });
      toast.present();
    }, error => console.error(error));

    this.viewCtrl.dismiss();
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false,
      cssClass: 'my-modal-inner'
    };

    const modal: Modal = this.modalCtrl.create('ModalRequestSendPage', { data: this.dataUserModal, total: this.total, hora_extra_new: 1 }, myModalOptions);
    modal.present();

    setTimeout(() => {
      modal.dismiss();
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false,
        cssClass: 'my-modal-inner'
      };

      const modal2: Modal = this.modalCtrl.create('ModalBadQualificationPage', { data: this.dataUserModal, total: this.total, hora_extra_new: 1, costExtra: this.costExtra }, myModalOptions);
      modal2.present();
    }, 2000);
 
    //setTimeout(() => modal.dismiss(), 4000);
    modal.onDidDismiss((data) => {
    });

    modal.onWillDismiss((data) => {
    });
  }

}
