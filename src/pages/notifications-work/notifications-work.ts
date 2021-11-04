import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

//import { Notification } from '../../model/interfaces/interfaces';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//Modals
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

//interfaces
import { Message, Chat, Sesion } from '../../model/interfaces/interfaces';

//provider
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';
import { ChatListPage } from '../chat-list/chat-list';


export interface Notification {
  id?: number,
  id_proyecto?: number,
  foto?: string,
  nombre?: string,
  estado?: string,
  nom_proyecto?: string,
  descripcion?: string;
  compania?: string,
  ocupation?: string,
  calificacion?: number,
  enable?: any,
  status?: string,
  id_user_contratado?: number,
  hora_extra: number
}

export interface DataSend {
  id_hire?: number,
  id_work?: number,
  id_proyecto?: number,
  tipo_paquete?: number,
  costo?: number,
  nombre?: string,
  foto?: string,
  hora?: string,
  fecha_trabajo?: string,
  hora_extra?: number,
  hora_extra_new?: number,
  total?: number,
  basic?: number,
  gold?: number,
  premium?: number,
  costo_extra?: number
}

@IonicPage()
@Component({
  selector: 'page-notifications-work',
  templateUrl: 'notifications-work.html',
})
export class NotificationsWorkPage {
  private sesionObject: Sesion;
  public notifications: Array<Notification> = []
  private usersNotifications: any = [{}];
  public visible: any;
  buttonIcon: string = "home";
  public listFavorites: Array<any> = [];
  public id_user: number;
  public dataUserModalAPI: any = [{}];
  public dataSend: DataSend = {};
  /**
   * Contructor of the class
   * @param navCtrl   NavController
   * @param navParams NavParams
   * @param alertCtrl AlertController
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private angularDatabase: AngularFireDatabase, private configProv: ConfigProvider, private accountProv: AccountProvider, private toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
      this.accountProv.notificacionesWork(sesion.id).subscribe(data => {
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
            this.accountProv.declinarProyecto({ id: event.id_proyecto, id_us: event.id, id_u_c: this.id_user }).subscribe(data => {
              let d: any = data;
              console.log('Datos del api regreso No: ', d)
              const toast = this.toastCtrl.create({
                message: 'The project declined ',
                duration: 3000
              });
              toast.present();
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
  private accept(i: number, event: any): void {
    if (this.notifications[i].status == 'En proceso') {
      this.accountProv.agendadoWork({ id_pro: event.id_proyecto, id_hire: event.id, id_work: this.id_user }).subscribe(data => {
        let d: any = data;
        console.log('Datos del api regreso No: ', d)
        /*const toast = this.toastCtrl.create({
          message: 'The project sheduled',
          duration: 3000
        });
        toast.present();

        */

        if (d.mensaje == "Proyecto agendado") {
          const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
          };
          const modal: Modal = this.modalCtrl.create('ModalAcceptedRequestPage', { data: event, user: 3 }, myModalOptions);
          modal.present();
        }
        this.refresh();
      }, error => console.error(error));
    } else {
      const toast = this.toastCtrl.create({
        message: 'The project is already scheduled ',
        duration: 3000
        
      });
      toast.present();
      this.navCtrl.push("ChatListPage");
     
    }

    /*  let newChat: Chat = {
       guest: [
         {
           idGuest: "1",
           name: this.sesionObject.name
         },
         {
           idGuest: "2",
           name: this.notifications[i].nombre
         }
       ],
       messages: []
     }
     this.angularDatabase.list('ionic/chats').push(
       newChat
     ); */
    //this.navCtrl.push('ProjectsWorkPage');
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
          toast.present();

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
            toast.present();
          }
          else {
            this.accountProv.agregarFavorito({ id: this.id_user, idf: event.id }).subscribe(data => {
              let d: any = data;
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
    console.log('Datos del evento', event)
    this.accountProv.trabajoTerminadoDatos({ idh: event.id, idw: event.id_user_contratado }).subscribe(data => {
      this.dataUserModalAPI = data['user'];
      const resultado = this.dataUserModalAPI.find(user => user.id_proyecto === event.id_proyecto);
      console.log('Usuario correcto', resultado)
      if (resultado != null) {
        this.dataUserModalAPI = resultado;
      } else {
        this.dataUserModalAPI = data;
      }


      if (event.status == 'Finalizado') {
        this.dataSend = resultado;
        this.dataSend.nombre = event.nombre;
        this.dataSend.foto = event.foto;
        this.dataSend.id_hire = event.id;
        this.dataSend.id_work = event.id_user_contratado;
        console.log('Finalizado', this.dataUserModalAPI, this.dataSend)

        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false,
          showBackdrop: false,
          cssClass: 'my-modal-inner'
        };
        const modal: Modal = this.modalCtrl.create('ModalCompletedWorkPage', { data_hire: event, data_work: this.dataSend, user: 2 }, myModalOptions);
        modal.present();

        /* const toast = this.toastCtrl.create({
          message: 'Finished Status',
          duration: 3000
        });
        toast.present(); */
        const toast2 = this.toastCtrl.create({
          message: 'No extra hour',
          duration: 3000
        });
        toast2.present();
      }
      else{
        this.accountProv.statusHora({ id_pro: event.id_proyecto, id_work: event.id_user_contratado }).subscribe(data => {
          let d: any = data['datos'];
          if (data['datos'] != null){
            if (d.estatus == 0)  {
              const myModalOptions: ModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
              };
              const modal: Modal = this.modalCtrl.create('ModalExtraHourWorkPage', { data_hire: event, data_work: this.dataUserModalAPI, estatus: data.datos.estatus, user: 2 }, myModalOptions);
              modal.present();

              const toast = this.toastCtrl.create({
                message: 'You have an extra time request',
                duration: 3000
              });
              toast.present();
            }
          }
          else {

          }
        }, error => console.error());
      }
    }, error => console.error(error));



  }

  public doRefresh(refresher): void {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
      this.accountProv.notificacionesWork(sesion.id).subscribe(data => {
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

  public refresh(): void {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
      this.accountProv.notificacionesWork(sesion.id).subscribe(data => {
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
}
