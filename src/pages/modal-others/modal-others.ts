import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { MenuHomePage } from '../menu-home/menu-home';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//interfaces
import { Sesion } from '../../model/interfaces/interfaces';
//Angular Forms
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the ModalOthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface SendDataModalFin {
  id?: number,
  calificacion?: number,
  porque?: string,
  id_hire?: number
}

@IonicPage()
@Component({
  selector: 'page-modal-others',
  templateUrl: 'modal-others.html',
})
export class ModalOthersPage {
  private sesionObject: Sesion = {};
  public dataModalFinish: SendDataModalFin = {};
  public projectForm: FormGroup;
  public id_user;
  public user:any = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private modalCtrl: ModalController, private configProv: ConfigProvider, private accountProv: AccountProvider, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
      console.log('Este es el id: ', sesion.id)
    }).catch(error => console.error(error));

    this.projectForm = this.formBuilder.group({
      porque: new FormControl('', Validators.required),
      id: new FormControl(''),
      calificacion: new FormControl('')
    });
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalOthersPage');
    const data = this.navParams.get('data');
    this.user = this.navParams.get('user');
    this.dataModalFinish = data;
    this.projectForm.controls.id.setValue(this.dataModalFinish.id);
    this.projectForm.controls.calificacion.setValue(this.dataModalFinish.calificacion);
  }

  close(){
    this.viewCtrl.dismiss();
  }

  finProject() {
    if (this.projectForm.valid) {
      let values: SendDataModalFin = this.projectForm.getRawValue();
      console.log('Datos para calificar', this.dataModalFinish.id, this.dataModalFinish.calificacion, values.porque)
      if ((this.dataModalFinish.id != null || this.dataModalFinish.id != undefined) && (values.porque != undefined || values.porque != null)) {
        this.accountProv.calificar({ idc: (this.user != 2) ? this.dataModalFinish.id : this.dataModalFinish.id_hire, ca: this.dataModalFinish.calificacion, po: values.porque }).subscribe(data => {
          let d: any = data;
          const toast = this.toastCtrl.create({
            message: 'Qualified user',
            duration: 3000
          });
          toast.present();
        }, error => console.error(error));

        this.viewCtrl.dismiss();
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false,
          showBackdrop: false,
          cssClass: 'my-modal-inner'
        };

        const myModalData = {};

        const modal: Modal = this.modalCtrl.create('ModalFinishProjectPage', { data: myModalData }, myModalOptions);
        modal.present();
        setTimeout(() => {
          modal.dismiss();
          //this.navCtrl.setRoot(MenuHomePage);
        }, 2000);
      }
      else {
        const toast = this.toastCtrl.create({
          message: 'Unqualified user',
          duration: 3000
        });
        toast.present();

      }
    }
  }

}
