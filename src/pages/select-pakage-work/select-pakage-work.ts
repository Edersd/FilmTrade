import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, ModalOptions, LoadingController } from 'ionic-angular';

//model
import { Sesion } from '../../model/interfaces/interfaces';

//providers
import { AccountProvider } from './../../providers/account/account';
import { ConfigProvider } from './../../providers/config/config';

//pages
import { MenuHomePage } from '../menu-home/menu-home';
import { MenuHomeWorkPage } from '../menu-home-work/menu-home-work';

@IonicPage()
@Component({
  selector: 'page-select-pakage-work',
  templateUrl: 'select-pakage-work.html',
})
export class SelectPakageWorkPage {
  public basic: boolean = false;
  public priceBasic: number = 0;
  public gold: boolean = false;
  public priceGold: number = 0;
  public premium: boolean = false;
  public pricePremium: number = 0;

  public sesionObject: Sesion = {};
  public id_user: any = "";
  public edit = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private accountProv: AccountProvider, private configProv: ConfigProvider, private toastCtrl: ToastController, public modalCtrl: ModalController, private loadingCtrl: LoadingController) {
     /* this.priceGold, this.pricePremium*/
     
    this.edit = navParams.get('edit');
    this.id_user = navParams.get('id_user');
    
    if (this.edit === false) {
      this.edit = false;
    } else {
      this.edit = true;
    }
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
     
      
      /* let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'Id del usuario:' + this.id_user,
        position: 'bottom'
      });
      toast.present(); */
    }).catch(error => console.error(error));
  }

  /**
   * [next description]
   */
  private next(): void {
    if (this.basic) {
      this.sesionObject.priceBasic = this.priceBasic
    } else {
      this.sesionObject.priceBasic = 0;
    }
    if (this.gold) {
      this.sesionObject.priceGold = this.priceGold;
    } else {
      this.sesionObject.priceGold = 0;
    }
    if (this.premium) {
      this.sesionObject.pricePremium = this.pricePremium;
    } else {
      this.sesionObject.pricePremium = 0;
    }
    console.log(this.sesionObject);
    this.configProv.setSesionObject(this.sesionObject);
   /*  let toast = this.toastCtrl.create({
      duration: 2000,
      message: 'Id del usuario con datos:' + this.id_user + ' - ' + this.sesionObject,
      position: 'bottom'
    });
    toast.present() */

    if (this.edit == true) {
      /* let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'Id del usuario:' + this.id_user,
        position: 'bottom'
      });
      toast.present() */
      this.configProv.getSesionObject().then(sesion => {
        /* let toast = this.toastCtrl.create({
          duration: 9000,
          message: 'Edit:' + this.edit + ' ' + this.id_user + '-' + sesion.id + this.priceBasic + this.priceGold + this.pricePremium,
          position: 'bottom'
        });
        toast.present(); */
        this.accountProv.selectPaquete({ id: sesion.id, cb: this.priceBasic, cg: this.priceGold, cp: this.pricePremium }).subscribe(data => {
          console.log(this.edit, this.id_user, data)
          if (data != null) {
            if (this.edit == true) {
              let toast = this.toastCtrl.create({
                duration: 6000,
                message: 'Your packages were added successfully ',
                position: 'bottom'
              });
              toast.present();

              const myModalOptions: ModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
              };

              let modal = this.modalCtrl.create('ModalSuccessfulLoadPage', myModalOptions);
              modal.present();
              setTimeout(() => {
                modal.dismiss();
                if (data != null) {
                  this.navCtrl.setRoot(MenuHomeWorkPage);
                } else {
                  let toast = this.toastCtrl.create({
                    duration: 6000,
                    message: 'Your packages were not added',
                    position: 'bottom'
                  });
                  toast.present();
                }
              }, 5000);



            }
          } else {
            let toast = this.toastCtrl.create({
              duration: 2000,
              message: 'Your packages were not added',
              position: 'bottom'
            });
            toast.present();
          }
        }, error => console.error(error));
      }).catch(error => console.error(error));
    }
    else {
      this.accountProv.actualizarPaquetes({ id: this.id_user, cb: this.priceBasic, cg: this.priceGold, cp: this.pricePremium }).subscribe(data => {
        console.log(this.edit, this.id_user, data)
        if (data != null ) {
          let toast = this.toastCtrl.create({
            duration: 2000,
            message: 'Your packages were updated successfully',	
            position: 'bottom'
          });
          toast.present();
          this.navCtrl.pop();
          //Actualiza los datos en pantalla
          this.navCtrl.setRoot('PerfilWorkPage');
        } else {
          let toast = this.toastCtrl.create({
            duration: 2000,
            message: 'Your packages were not updated ',	
            position: 'bottom'
          });
          toast.present();
        }
      }, error => console.error(error));
    }

  }

  termConditions(){
    this.navCtrl.push('TermsConditionsPage');
  }

}
