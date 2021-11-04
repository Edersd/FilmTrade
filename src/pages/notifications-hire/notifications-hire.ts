import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Events } from 'ionic-angular';

//Modals
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

//interfaces
import { Sesion } from '../../model/interfaces/interfaces';

//provider
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//pages
import { ListProfilesPage } from '../list-profiles/list-profiles';

//import { Notification } from '../../model/interfaces/interfaces';
export interface Notification {
  id?: number,
  id_proyecto?: number,
  foto?: string,
  nombre?: string,
  estado?: string,
  nom_proyecto?: string,
  compania?: string,
  ocupation?: string,
  calificacion?: number,
  enable?: any,
  status?: string
}


@IonicPage()
@Component({
  selector: 'page-notifications-hire',
  templateUrl: 'notifications-hire.html',
})
export class NotificationsHirePage {
  //-------------------------------------
  private sesionObject: Sesion;
  private usersNotifications: any = [{}];
  public notifications: Array<Notification> = [{}]
  public visible: any;
  buttonIcon: string = "home";
  public listFavorites: Array<any> = [];
  public id_user: number;
  public serviceDescription: any = { days: 0 };
  private _date: Date = new Date();
  private usuarioCorecto: any = [{}];

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private accountProv: AccountProvider, private alertCtrl: AlertController, private toastCtrl: ToastController, public modalCtrl: ModalController, private events: Events) {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
      this.accountProv.notificaciones(sesion.id).subscribe(data => {
        let noti: any = data['user'];
        this.usersNotifications = data['user'];
        this.notifications = noti;
        console.log('Datos del api regreso No: ', this.notifications)

        /* for (let i = 0; i < this.notifications.length; i++) {
          this.notifications[i].enable = false;
        } */
      }, error => console.error(error));

      this.configProv.getListFavorites(sesion.id).subscribe(data => {
        this.listFavorites = data['user'];
        console.log('Arreglo favoritos: ', this.listFavorites)
        if (this.listFavorites == null) {
          if (this.notifications != null) {
            for (let i = 0; i < this.notifications.length; i++) {
              this.notifications[i].enable = false;
            }
          }
        }
        else {
          this.notifications.forEach((element, index) => {
            const resultado = this.listFavorites.find(user => user.id === element.id);
            if (resultado != null) {
              this.notifications[index].enable = true;
            } else {
              this.notifications[index].enable = false;
            }
          });
        }
      })
    }).catch(error => console.error(error));
  }

  /**
   * Delete the notification from list
   * @param i Index of notification to delete
   */
  private delete(i: number, event: any): void {
    let mensajeT: string = "Are you sure you want to remove " + event.nombre + " from your list?";
    let alert = this.alertCtrl.create({
      title: mensajeT,
      buttons: [
        {
          role: 'cancel',
          text: 'Cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.notifications.splice(i, 1);
            console.log('Datos del user: ', event.id_proyecto, event.id)
            this.accountProv.cancelarServicio({ id_pro: event.id_proyecto, id_work: event.id }).subscribe(data => {
              let d: any = data;
              console.log('Datos del api regreso No: ', d)
            }, error => console.error(error));

          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Function to accept projects
   * @param i Index of notificacion
   */
  private accept(i: number): void {
    this.navCtrl.push('ProjectsWorkPage');
  }

  private addFavoritos(i: number, event: any): void {
    if (this.notifications[i].enable == true) {
      console.log('IndexF: ', 'idu:', event.id, 'idf:', this.id_user)

      this.accountProv.eliminarFavoritoNotificacion({ idu: this.id_user, idf: event.id }).subscribe(data => {
        let d: any = data;
        console.log('Api agregarFavorito: ', d)
        if (d != null) {
          const toast = this.toastCtrl.create({
            message: 'User removed from your favorites',
            duration: 3000
          });
          //toast.present();

          this.configProv.getListFavorites(String(this.id_user)).subscribe(data => {
            this.listFavorites = data['user'];
            console.log('Arreglo favoritos remove: ', this.listFavorites)
            if (this.listFavorites != null) {
              for (const { item, index } of this.notifications.map((item, index) => ({ item, index }))) {
                const resultado = this.listFavorites.find(user => user.id === item.id);
                if (resultado != null) {
                  this.notifications[index].enable = true;
                } else {
                  this.notifications[index].enable = false;
                }
              }
            }
          }, error => console.error(error));
        }
      }), error => console.error(error);
      this.visible = false;
      this.notifications[i].enable = this.visible;


    }
    else {
      this.configProv.getListFavorites(String(this.id_user)).subscribe(data => {
        this.listFavorites = data['user'];

        if (this.listFavorites != null) {
          const resultado = this.listFavorites.find(user => user.id === event.id);
          if (resultado != null) {
            const toast = this.toastCtrl.create({
              message: 'The user is already in your favorites',
              duration: 3000
            });
            //toast.present();
          }
          else {
            this.accountProv.agregarFavorito({ id: this.id_user, idf: event.id }).subscribe(data => {
              let d: any = data;
              const toast = this.toastCtrl.create({
                message: 'User added to your favorites',
                duration: 3000
              });
              //toast.present();
            }, error => console.error(error));
            this.visible = true;
            this.notifications[i].enable = this.visible
            this.configProv.getListFavorites(String(this.id_user)).subscribe(data => {
              this.listFavorites = data['user'];
              console.log('Arreglo favoritos add1: ', this.listFavorites)
              if (this.listFavorites != null) {
                for (const { item, index } of this.notifications.map((item, index) => ({ item, index }))) {
                  const resultado = this.listFavorites.find(user => user.id === item.id);
                  if (resultado != null) {
                    this.notifications[index].enable = true;
                  } else {
                    this.notifications[index].enable = false;
                  }
                }
              }
            }, error => console.error(error));
          }
        }
        else {
          console.log('No hay favoritos')
          this.accountProv.agregarFavorito({ id: this.id_user, idf: event.id }).subscribe(data => {
            let d: any = data;
            console.log('Api agregarFavorito: ', d)
            const toast = this.toastCtrl.create({
              message: 'User added to your favorites',
              duration: 3000
            });
            toast.present();
          }, error => console.error(error));
          this.visible = true;
          this.notifications[i].enable = this.visible
          this.configProv.getListFavorites(String(this.id_user)).subscribe(data => {
            this.listFavorites = data['user'];
            console.log('Arreglo favoritos add: ', this.listFavorites)
            if (this.listFavorites != null) {
              for (const { item, index } of this.notifications.map((item, index) => ({ item, index }))) {
                const resultado = this.listFavorites.find(user => user.id === item.id);
                if (resultado != null) {
                  this.notifications[index].enable = true;
                } else {
                  this.notifications[index].enable = false;
                }
              }
            }
          }, error => console.error(error));
        }
      }, error => console.error(error));

    }

  } 

  private viewModal(event: any): void {
    let fechaCorta: string = new Date().toISOString();
    let dia = String(this._date).substr(8, 8);
    let horaDis: any = String(this._date).substr(15, 17);
    console.log('Fecha dis', fechaCorta.substr(0, 7), dia.substr(0, 2))
    console.log('Hora dis', horaDis.substr(1, 5))
    fechaCorta = fechaCorta.substr(0, 7)+'-'+dia.substr(0, 2);

    this.accountProv.estatusUsuarioProyecto({ id: event.id, id_pro: event.id_proyecto }).subscribe(sesion => {
      let d: any = sesion;
      if (d != null || d != undefined) {
        if (d.user['status'] == 'Finalizado') {
          const toast = this.toastCtrl.create({
            message: 'The work is finished',
            duration: 3000
          });
          toast.present();
        }
        else if (d.user['status'] == 'Agendado') {
          console.log(event.id, event.id_proyecto)
          this.accountProv.infoProyecto({ id: event.id, id_pro: event.id_proyecto }).subscribe(data => {
            this.usuarioCorecto = data['datos'];

            console.log(this.usuarioCorecto, this.usuarioCorecto.fecha_trabajo[this.usuarioCorecto.fecha_trabajo.length - 1])
            let hora = horaDis.substr(1, 5);
            let horaif = this.formatAMPM(hora.split(':'));
            let horaiff = this.formatAMPMF(this.usuarioCorecto.hora.split(':'), this.usuarioCorecto.tipo_paquete);

            console.log('Fecha bien', fechaCorta)
            const resultado = this.usuarioCorecto.fecha_trabajo.find(fecha => fecha == fechaCorta.substr(0, 10));
            console.log(resultado)

            if (resultado != undefined) {
              if ((horaif.substr(0, 2) >= horaiff.substr(0, 2)) && (horaif.substr(3, 6) >= horaiff.substr(3, 6)) && (horaif.substr(6, 9) == horaiff.substr(6, 9))) {
                console.log('El trabajo ha terminado')
                const myModalOptions: ModalOptions = {
                  enableBackdropDismiss: false,
                  showBackdrop: false,
                  cssClass: 'my-modal-inner'
                };
                const modal: Modal = this.modalCtrl.create('ModalCompletedWorkPage', { data: event }, myModalOptions);
                modal.present();

                const toast = this.toastCtrl.create({
                  message: 'Finished Status',
                  duration: 3000
                });
                toast.present();
              } 
              else {
                const myModalOptions: ModalOptions = {
                  enableBackdropDismiss: false,
                  showBackdrop: false,
                  cssClass: 'my-modal-inner'
                };
                const modal: Modal = this.modalCtrl.create('ModalAcceptedRequestPage', { data: event }, myModalOptions);
                modal.present();

                const toast = this.toastCtrl.create({
                  message: 'Scheduled Status',
                  duration: 3000
                });
                toast.present();
                console.log('Aun no es la hora de terminación')
              }
            } 
            else {
              const myModalOptions: ModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
              };
              const modal: Modal = this.modalCtrl.create('ModalAcceptedRequestPage', { data: event }, myModalOptions);
              modal.present();

              const toast = this.toastCtrl.create({
                message: 'Scheduled Status',
                duration: 3000
              });
              toast.present();
              console.log('Aun no termina los dias')
            }
          }, error => console.error(error)); 
        }
      }
    }, error => console.error(error));
  }

  public doRefresh(refresher): void {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
      this.accountProv.notificaciones(sesion.id).subscribe(data => {
        let noti: any = data['user'];
        this.usersNotifications = data['user'];
        this.notifications = noti;
        console.log('Datos del api regreso No: ', this.notifications)

        /* for (let i = 0; i < this.notifications.length; i++) {
          this.notifications[i].enable = false;
        } */
      }, error => console.error(error));

      this.configProv.getListFavorites(sesion.id).subscribe(data => {
        this.listFavorites = data['user'];
        console.log('Arreglo favoritos: ', this.listFavorites)
        if (this.listFavorites == null) {
          if (this.notifications != null) {
            for (let i = 0; i < this.notifications.length; i++) {
              this.notifications[i].enable = false;
            }
          }
        }
        else {
          this.notifications.forEach((element, index) => {
            const resultado = this.listFavorites.find(user => user.id === element.id);
            if (resultado != null) {
              this.notifications[index].enable = true;
            } else {
              this.notifications[index].enable = false;
            }
          });
        }
      })
    }).catch(error => console.error(error));
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  //Horas
  formatAMPM(date) {
    console.log('Date entra', date)
    var hours = date[0];
    var minutes = date[1];
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log('Date sale', strTime)
    return strTime;
  }

  formatAMPMF(date:any, paquete:any) {
    var hours2 = date[0];
    var minutes = date[1];
    if (paquete == 'Basic') {
      hours2 = (Number(hours2) + Number(3)) > 24 ? (Number(hours2) + Number(3)) - Number(24) : (Number(hours2) + Number(3));
    }
    if (paquete == 'Gold') {
      hours2 = (Number(hours2) + Number(5)) > 24 ? (Number(hours2) + Number(5)) - Number(24) : (Number(hours2) + Number(5));
    }
    if (paquete == 'Premium') {
      hours2 = (Number(hours2) + Number(8)) > 24 ? (Number(hours2) + Number(8)) - Number(24) : (Number(hours2) + Number(8));
    } 

    /* if (this.dataModalFinish.hora_extra != undefined) {
      hours2 = Number(hours2) + Number(1)
    } */

    var ampm = hours2 >= 12 ? 'pm' : 'am';
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12;
    hours2 = hours2 < 10 ? '0' + hours2 : hours2;
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

}
