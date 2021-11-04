import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { MenuHomePage } from '../menu-home/menu-home';
import { Events } from 'ionic-angular';
import { Console } from '@angular/core/src/console';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//interfaces
import { Sesion } from '../../model/interfaces/interfaces';

export interface SendDataModalFin {
  id?: number,
  id_proyecto?: number,
  nombre?: string,
  foto?: string,
  costo?: number,
  total?: number,
  tipo_paquete?: string,
  costopa?: number,
  fecha_status?: string,
  hora?: string,
  hora_extra?: number,
  dias?: string,
  calificacion?: number,
  porque?: string,
  basic?: string,
  gold?: string,
  premium?: string,
  costo_extra?: number,
  hora_extra_new?: number,
  id_hire?: number
}

export interface DataModal {
  days?: number,
  subtotal?: number,
  total?: number,
  horai?: string,
  horaf?: string,
  paquete?: string,
  extra?: number,
  id_user?: number,
  id_pro?: number,
  horafe?: string
}

@IonicPage()
@Component({
  selector: 'page-modal-bad-qualification',
  templateUrl: 'modal-bad-qualification.html',
})
export class ModalBadQualificationPage {
  public dataModalFinish: SendDataModalFin = {};
  public serviceDescription: DataModal = { days: 0 };
  public user:any = "3"

  rate: any = 0;
  rating: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private modalCtrl: ModalController, public events: Events, private configProv: ConfigProvider, private accountProv: AccountProvider, private toastCtrl: ToastController) {
    events.subscribe('star-rating:changed', (starRating) => { this.rating = starRating; this.dataModalFinish.calificacion = starRating; console.log(starRating) });
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalBadQualificationPage');
    const data = this.navParams.get('data');
    const total = this.navParams.get('total');
    this.user = this.navParams.get('user');
    const hora_extra_new = this.navParams.get('hora_extra_new');
    console.log(data, total, hora_extra_new, this.user);
    this.dataModalFinish = data;
    this.dataModalFinish.total = total;
    this.dataModalFinish.hora_extra_new = hora_extra_new;
    this.dataModalFinish.costo_extra = this.navParams.get('costExtra');

    let hoursMinutes = this.dataModalFinish.hora.split(':');
    this.serviceDescription.horai = this.formatAMPM(hoursMinutes);
    this.serviceDescription.horaf = this.formatAMPMF(hoursMinutes);

    let minutesFinish = this.convertTime12to24(this.serviceDescription.horaf).split(':');
    this.serviceDescription.horafe = this.formatAMPMFE(minutesFinish)
  }

  close() {
    this.viewCtrl.dismiss();
  }
  porQue(porue: string){
    this.dataModalFinish.porque = porue;
    console.log('Este es el porque', this.dataModalFinish.porque)
  }

  finProject() {
    console.log('Datos para calificar', this.dataModalFinish.id,this.dataModalFinish.id_hire, this.dataModalFinish.calificacion, this.dataModalFinish.porque)
    if (this.dataModalFinish.calificacion != null || this.dataModalFinish.calificacion != undefined) {
      if (this.dataModalFinish.calificacion <= 2 && this.dataModalFinish.calificacion >= 1) {
        this.accountProv.calificar({ idc: (this.user != 2) ? this.dataModalFinish.id : this.dataModalFinish.id_hire, ca: this.dataModalFinish.calificacion, po: this.dataModalFinish.porque }).subscribe(data => {
          let d: any = data;
          const toast = this.toastCtrl.create({
            message: 'Badly qualified user',
            duration: 3000
          });
          toast.present();
        }, error => console.error(error));
      } else {
        this.accountProv.calificar({ idc: (this.user != 2) ? this.dataModalFinish.id : this.dataModalFinish.id_hire, ca: this.dataModalFinish.calificacion, po: '' }).subscribe(data => {
            let d: any = data;
            const toast = this.toastCtrl.create({
              message: 'Qualified user well',
              duration: 3000
            });
            toast.present();
          }, error => console.error(error));
      }

      this.viewCtrl.dismiss();
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false,
        cssClass: 'my-modal-inner'
      };

      const myModalData = {
        name: 'Abraham',
        occupation: 'Desinger'
      };

      const modal: Modal = this.modalCtrl.create('ModalFinishProjectPage', { data: this.dataModalFinish }, myModalOptions);
      modal.present();
      setTimeout(() => {
        modal.dismiss();
        //this.navCtrl.setRoot(MenuHomePage);
      }, 2000);
    } 
    else {
      const toast = this.toastCtrl.create({
        message: 'The user has no qualification, not qualified',
        duration: 3000
      });
      toast.present();
    }
  }

  other() {
    this.viewCtrl.dismiss();
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false,
      cssClass: 'my-modal-inner'
    };

    const myModalData = {
      name: 'Abraham',
      occupation: 'Desinger'
    };

    const modal: Modal = this.modalCtrl.create('ModalOthersPage', { data: this.dataModalFinish, user: this.user }, myModalOptions);
    modal.present();
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
    if (this.dataModalFinish.tipo_paquete == 'Basic') {
      hours2 = (Number(hours2) + Number(3)) > 24 ? (Number(hours2) + Number(3)) - Number(24) : (Number(hours2) + Number(3));
    }
    if (this.dataModalFinish.tipo_paquete == 'Gold') {
      hours2 = (Number(hours2) + Number(5)) > 24 ? (Number(hours2) + Number(5)) - Number(24) : (Number(hours2) + Number(5));
    }
    if (this.dataModalFinish.tipo_paquete == 'Premium') {
      hours2 = (Number(hours2) + Number(8)) > 24 ? (Number(hours2) + Number(8)) - Number(24) : (Number(hours2) + Number(8));
    }

    /* if (this.dataModalFinish.hora_extra != undefined) {
      hours2 = Number(hours2) + Number(1)
    } */

    var ampm = hours2 >= 12 ? 'pm' : 'am';
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12;
    minutes = minutes < 10 ? '' + minutes : minutes;
    var strTime = hours2 + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'pm') {
      hours = parseInt(hours, 10) + 12;
    }
    return hours + ':' + minutes;
  }

  formatAMPMFE(date) {
    console.log('Datos fin: ', date, date[0], date[1])
    var hours2 = date[0];
    var minutes = date[1];
    if (this.dataModalFinish.hora_extra_new === 1) {
      hours2 = Number(hours2) + Number(1)
    }
    else {
      console.log('No hay hora extra')
    }
    var ampm = hours2 >= 12 ? 'pm' : 'am';
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12;
    minutes = minutes < 10 ? '' + minutes : minutes;
    var strTime = hours2 + ':' + minutes + ' ' + ampm;
    return strTime;
  }

}
