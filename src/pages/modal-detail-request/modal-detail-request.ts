import { LoadingController, LoadingOptions, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App} from 'ionic-angular';

import { Modal, ModalController, ModalOptions } from 'ionic-angular';
//interfaces
import { CrearProyecto } from '../../model/interfaces/interfaces';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';
import { MenuHomePage } from '../menu-home/menu-home';

export interface DataModal {
  days?: number,
  subtotal?: number,
  total?: number,
  horai?: string,
  horaf?: string,
  paquete?: string,
  extra?: number,
  id_user?:number,
  id_pro?:number
}

@IonicPage()
@Component({
  selector: 'page-modal-detail-request',
  templateUrl: 'modal-detail-request.html',
})
export class ModalDetailRequestPage {
  public costPor: number;
  private startsNumber: number = 0;
  private loadingOpts: LoadingOptions = {
    content: '<div class="img_h">ass </div>',
    cssClass: 'img_h',
    spinner: 'hide',
    duration: 2000
  }
  public projectAdd: CrearProyecto = {};
  public serviceDescription: DataModal = { days: 0 };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private loadingCtrl: LoadingController, public modalCtrl: ModalController, private configProv: ConfigProvider, private accountProv: AccountProvider, private toastCtrl: ToastController, public app: App) {
    this.configProv.getSesionObject().then(sesion => {
      this.serviceDescription.id_user = sesion.id;
    }).catch(error => console.error(error));

    this.configProv.getSesionObjectProject().then(data => {
      this.projectAdd = data;
      this.serviceDescription.days = this.projectAdd.avaibleDates.length;
      this.serviceDescription.subtotal = this.projectAdd.costo;
      this.serviceDescription.id_pro = this.projectAdd.id_proyecto;

      this.costPor = Number (this.projectAdd.costo ) + Number(this.projectAdd.costo) * Number(0.20);

      console.log('Datos del proyecto MDR: ', this.projectAdd, '--', data, '--------', this.serviceDescription)

      if (this.projectAdd.extra == 1) {
        this.serviceDescription.total = (Number(this.projectAdd.costo * this.serviceDescription.days) + (Number(this.projectAdd.costo) * 0.10));
        console.log('Hay hora extra1')
      }
      else {
        this.serviceDescription.total = (this.projectAdd.costo * this.serviceDescription.days);
        console.log('No hay hora extra1')
      }
      console.log('Total:', (this.projectAdd.costo * this.serviceDescription.days), 'Subtotal: ', this.serviceDescription.total)

      let hoursMinutes = this.projectAdd.hora.split(':');
      this.serviceDescription.horai = this.formatAMPM(hoursMinutes);
      this.serviceDescription.horaf = this.formatAMPMF(hoursMinutes);

      switch (this.projectAdd.paquete) {
        case 1:
          this.serviceDescription.paquete = 'Basic'
          break;
        case 2:
          this.serviceDescription.paquete = 'Gold'
          break;
        case 3:
          this.serviceDescription.paquete = 'Premium'
          break;
      }
    }).catch(error => console.error(error));

  }

  formatAMPM(date) {
    var hours = date[0];
    var minutes = date[1];
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  formatAMPMF(date) {
    var hours2 = date[0];
    var minutes = date[1];
    if (this.projectAdd.paquete == 1){
      hours2 = (Number(hours2) + Number(3)) > 24 ? (Number(hours2) + Number(3)) - Number(24) : (Number(hours2) + Number(3));
    }
    if (this.projectAdd.paquete == 2) {
      hours2 = (Number(hours2) + Number(5)) > 24 ? (Number(hours2) + Number(5)) - Number(24) : (Number(hours2) + Number(5));
    }
    if (this.projectAdd.paquete == 3) {
      hours2 = (Number(hours2) + Number(8)) > 24 ? (Number(hours2) + Number(8)) - Number(24) : (Number(hours2) + Number(8));
    }
    if (this.projectAdd.extra === 1){
      hours2 = Number(hours2) + Number(1)
    }
    else{
      console.log('No hay hora extra')
    }
    var ampm = hours2 >= 12 ? 'pm' : 'am';
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12;
    minutes = minutes < 10 ? '' + minutes : minutes;
    var strTime = hours2 + ':' + minutes + ' ' + ampm;
    return strTime;
  }


  public onStartsChange(event: any): void {
    this.startsNumber = event;
  }

  public showProgress(): void {
    let loading = this.loadingCtrl.create(this.loadingOpts);
    loading.present();
  }

  close() {
    this.viewCtrl.dismiss();
  }

  openModal() {
    if (this.projectAdd.extra == 1) {
      this.serviceDescription.extra = 1;
    } else {
      this.serviceDescription.extra = 0;
    }
    console.log('Modal', 'id_pro:', this.projectAdd.id_proyecto, 'work:', this.projectAdd.id, 'hire:', this.projectAdd.id_user, 'fecT:', this.projectAdd.avaibleDates, 'ti_pa:', this.serviceDescription.paquete, 'cos:', this.projectAdd.costo, 'Ho_Ex:', this.serviceDescription.extra, 'hora:', this.projectAdd.hora);
    if ((this.projectAdd.id_proyecto != null && this.projectAdd.id_proyecto != undefined) && (this.projectAdd.id != null && this.projectAdd.id != undefined) && (this.projectAdd.id_user != null && this.projectAdd.id_user != undefined) && (this.projectAdd.avaibleDates != null && this.projectAdd.avaibleDates != undefined) && (this.serviceDescription.paquete != null && this.serviceDescription.paquete != undefined) && (this.projectAdd.costo != null && this.projectAdd.costo != undefined)) {
    console.log('Modal', 'id_pro:', this.projectAdd.id_proyecto, 'work:', this.projectAdd.id, 'hire:', this.projectAdd.id_user, 'fecT:', this.projectAdd.avaibleDates, 'ti_pa:', this.serviceDescription.paquete, 'cos:', this.projectAdd.costo, 'Ho_Ex:', this.serviceDescription.extra, 'hora:', this.serviceDescription.horai);
      this.accountProv.agragarUsuarioProyecto({
        id_pro: (this.projectAdd.id_proyecto == null) ? this.serviceDescription.id_pro : this.projectAdd.id_proyecto, work: this.projectAdd.id, hire: (this.projectAdd.id_user == undefined) ? this.serviceDescription.id_user : this.projectAdd.id_user, fecT: String(this.projectAdd.avaibleDates), ti_pa: this.serviceDescription.paquete, cos: this.costPor, Ho_Ex: this.projectAdd.extra, hora: this.projectAdd.hora }).subscribe(data => {
        let d: any = data;
        console.log('Datos del api regreso: ', d.mensaje)
        /*const toast = this.toastCtrl.create({
          message: "User add to the project",
          duration: 3000
        });
        toast.present();*/
        this.projectAdd = {};
        this.serviceDescription = { days: 0 };
      }, error => console.error(error));

      this.viewCtrl.dismiss();
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false,
        cssClass: 'my-modal-inner'
      };
      const myModalData = {    };
      const modal: Modal = this.modalCtrl.create('ModalRequestSendPage', { data: myModalData }, myModalOptions);
      modal.present();
      setTimeout(() => {
        modal.dismiss();
        const root = this.app.getRootNav();
        this.navCtrl.popToRoot();
        /* const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false,
          showBackdrop: false,
          cssClass: 'my-modal-inner'
        };

        const myModalData = {     };

        const modal2: Modal = this.modalCtrl.create('ModalAcceptedRequestPage', { data: myModalData }, myModalOptions);
        modal2.present(); */
      }, 2000);

      this.navCtrl.setRoot('CategoryHirePage');
    }
    else {
      const toast = this.toastCtrl.create({
        message: "It was not possible to add the user to the project",
        duration: 3000
      });
      toast.present();
    }
  }

}
//  C:\Webpages\Bepineapple\PDF\