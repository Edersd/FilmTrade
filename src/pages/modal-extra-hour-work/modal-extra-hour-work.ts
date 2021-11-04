import { ViewController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//provider
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';
//Modals
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

export interface DataSend{
  id_hire?:number,
  id_work?:number,
  id_proyecto?:number,
  tipo_paquete?:number,
  costo?:number,
  nombre?:string,
  foto?:string,
  hora?:string,
  fecha_trabajo?:string,
  hora_extra?: number,
  hora_extra_new?: number,
  total?: number,
  basic?:number,
  gold?: number,
  premium?:number,
  costo_extra?:number
}

@IonicPage()
@Component({
  selector: 'page-modal-extra-hour-work',
  templateUrl: 'modal-extra-hour-work.html',
})
export class ModalExtraHourWorkPage {
  public dataModalHire: any = [{}];
  public dataModalWork: any = [{}];
  public dataSend: DataSend = {};
  public user = "";
  public estatus = "";
  public costExtra: number;
  public total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private accountProv: AccountProvider, private toastCtrl: ToastController, public modalCtrl: ModalController ) {
    this.dataModalHire = this.navParams.get('data_hire');
    this.dataModalWork = this.navParams.get('data_work');
    this.user = this.navParams.get('user');
    this.estatus = this.navParams.get('estatus');
    console.log(this.dataModalHire, this.dataModalWork, this.user, this.estatus);

    if (this.dataModalWork.tipo_paquete === 'Basic') {
      this.costExtra = Number(this.dataModalWork.basic) * Number(0.10);
      this.total = Number(this.dataModalWork.costo) + Number(this.costExtra);
      console.log('Extra1:', this.costExtra, '--- Total: ', this.total)
    }
    if (this.dataModalWork.tipo_paquete === 'Gold') {
      this.costExtra = Number(this.dataModalWork.gold) * Number(0.10);
      this.total = Number(this.dataModalWork.costo) + Number(this.costExtra);
      console.log('Extra2:', this.costExtra, '--- Total: ', this.total)
    }
    if (this.dataModalWork.tipo_paquete === 'Premium') {
      this.costExtra = Number(this.dataModalWork.premium) * Number(0.10);
      this.total = Number(this.dataModalWork.costo) + Number(this.costExtra);
      console.log('Extra3:', this.costExtra, '--- Total: ', this.total)
    }
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalExtraHourWorkPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  public acceptHour(): void {
    this.accountProv.aceptarHora({ id_pro: this.dataModalHire.id_proyecto, id_work: this.dataModalHire.id_user_contratado, cost: this.total}).subscribe(data => {
      const toast = this.toastCtrl.create({
        message: 'Hour acepted',
        duration: 3000
      });
      toast.present();
      this.viewCtrl.dismiss();
    }, error => console.error(error));
  }

  public declineHour(): void {
    let noExtra: number = this.dataModalHire.hora_extra - 1;
    console.log('No quiere',noExtra)
    this.accountProv.declinarHora({ id_pro: this.dataModalHire.id_proyecto, id_work: this.dataModalHire.id_user_contratado, hora: noExtra }).subscribe(data => {
      const toast = this.toastCtrl.create({
        message: 'Hour declined',
        duration: 3000
      });
      toast.present();
      this.viewCtrl.dismiss();
    }, error => console.error(error));
    
    this.dataSend = this.dataModalWork;
    this.dataSend.nombre = this.dataModalHire.nombre;
    this.dataSend.foto = this.dataModalHire.foto;
    this.dataSend.id_hire = this.dataModalHire.id;
    this.dataSend.id_work = this.dataModalHire.id_user_contratado;

    const toast = this.toastCtrl.create({
      message: 'Extra time declined',
      duration: 3000
    });
    toast.present();
    this.viewCtrl.dismiss();
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false,
      cssClass: 'my-modal-inner'
    };
    const modal: Modal = this.modalCtrl.create('ModalCompletedWorkPage', { data_hire: this.dataModalHire, data_work: this.dataSend, user: 2 }, myModalOptions);
    modal.present();
  }

}
