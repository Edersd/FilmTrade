import { Injectable } from '@angular/core';
import { FCM, NotificationData } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { ConfigProvider } from './../config/config';
import { Platform } from 'ionic-angular';
import { ModalPushPage } from './../../pages/modal-push/modal-push';
import { AlertController } from 'ionic-angular';

import { IonicPage, Modal, ModalOptions, ModalController,  NavController, NavParams, ViewController } from 'ionic-angular';


export class TokenAssotiation {
  token: string;
}

@Injectable()
export class NotificationProvider {
  private tokenAssotiation: TokenAssotiation;
  private tokenAssotiationObject: AngularFireObject<TokenAssotiation>;
  public toc: string;

  //Check the doc https://ionicframework.com/docs/v3/native/fcm/
  constructor(
    
    private fcm: FCM,
    private localNotification: LocalNotifications,
    private angularDatabase: AngularFireDatabase,
    private config: ConfigProvider,
    private platform: Platform,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,

  ) {
    //Check if the device is a cordova like Android or iOS

    let myContext = this;

    if (this.platform.is('cordova') || this.platform.is('android')) {
      //Get the current id
      myContext.config.getSesionObject().then(data => {
        if (data != null) {
          //Get the object on AngularFirebaseDatabase
          myContext.tokenAssotiationObject = myContext.angularDatabase.object<TokenAssotiation>(`ionic/notification/${data.id}`);

          // myContext.getNewToken();

          //Event on Token Refresh
          myContext.fcm.onTokenRefresh().subscribe(token => {
            this.tokenAssotiation.token = token;
            this.tokenAssotiationObject.update(myContext.tokenAssotiation);
            console.log('Refresh FCM:', token);
          });


        //  myContext.fcm.getToken();


        }
      }).catch(error => console.error(error));
      //Subscribe to new notfication
      myContext.fcm.onNotification().subscribe(data =>
        myContext.onNotification(data)
      );
    }
  }

  async getToken() {
    //Get token
    await this.fcm.getToken().then((token: string) => {
      //Assign token
      ///console.log('Obtained token 1: ' + token);
      this.toc = token;
      console.log('Obtained token 2: ' + this.toc);
      /*this.tokenAssotiationObject.update(this.tokenAssotiation);
      console.log('Obtained token:' + token)*/
    }).catch(error => 
      console.error('Token error: ' + error)
      );
  }


  async getNewToken() {
    await this.fcm.getToken().then((token: string) => {
      //aquí se debe enviar el token al back-end para tenerlo registrado y de esta forma poder enviar mensajes
      // a esta  aplicación
      //o también copiar el token para usarlo con Postman :D
      this.toc = token;
      console.log("The token to use is: ", token);
    })
      .catch(error => {
        //ocurrió un error al procesar el token
        console.error(error);
      });

    /**
     * No suscribimos para obtener el nuevo token cuando se realice un refresh y poder seguir procesando las notificaciones
     * */
    await this.fcm.onTokenRefresh().subscribe(
      (token: string) => console.log("Nuevo token", token),
      error => console.error(error)
    );

    /**
     * cuando la configuración este lista, vamos a procesar los mensajes
     * */
    await this.fcm.onNotification().subscribe(
      (data: NotificationData) => {
        if (data.wasTapped) {
          //ocurre cuando nuestra app está en segundo plano y hacemos tap en la notificación que se muestra en el dispositivo
          console.log("Received in background", JSON.stringify(data))
        } else {
          //ocurre cuando nuestra aplicación se encuentra en primer plano,
          //puedes mostrar una alerta o un modal con los datos del mensaje
          
            let alert = this.alertCtrl.create({
              title: data.title,
              message: data.body,
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Open',
                  handler: () => {

                    console.log('Buy clicked');
                  }
                }
              ]
            });
            alert.present();
          
         /* if(data != undefined || data != null){
          const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
          };
        
          const modal: Modal = this.modalCtrl.create('ModalPushPage', {dataT: data.title, dataB: data.body}, myModalOptions);
          modal.present();
          setTimeout(() => { modal.dismiss();
          }, 4000);
        }*/
          console.log("Received in foreground", JSON.stringify(data))
        }
      }, error => {
        console.error("Error in notification", error)
      }
    );
  }

  public onNotification(notification: NotificationData): void {
    console.log(notification);
    //Requires cordova like Android or iOS
    if (this.platform.is('cordova')) {
      //TODO: defign the notification to schedule on device doc on https://ionicframework.com/docs/v3/native/local-notifications/
      this.localNotification.schedule({

      });
    }
  }

  //TODO: Connect with the server of Firebase to use the API doc on https://firebase.google.com/docs/cloud-messaging/server
  public sendNotification(notification: any): void {
    //Makes a httpRequest to server
  }
}
