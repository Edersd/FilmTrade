import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import { EditInfoPage } from '../edit-info/edit-info';
import { MenuHomePage } from '../menu-home/menu-home';
import { MenuHomeWorkPage } from '../menu-home-work/menu-home-work';

import { ConfigProvider } from '../../providers/config/config';
import { Sesion, SesionType } from '../../model/interfaces/interfaces';

@IonicPage()
@Component({
  selector: 'page-splash-hire',
  templateUrl: 'splash-hire.html',
})
export class SplashHirePage {
  private sesionObject:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private config:ConfigProvider) {
    this.config.getSesionObject().then(sesion => this.sesionObject = sesion).catch(error => console.error(error));
  }

  ionViewDidLoad() {
    setTimeout(() => {
      console.log('Valor del tipo_user:', this.sesionObject.tipo_usuario, this.sesionObject.occupationType)
      if (((this.sesionObject.tipo_usuario != undefined) ? this.sesionObject.tipo_usuario: this.sesionObject.occupationType) == SesionType.WORK) {
        if (this.sesionObject.ocupation === "" || this.sesionObject.ocupation === undefined || this.sesionObject.ocupation === null) {
          console.log('Valor de la ocupacion null', this.sesionObject.ocupation)
          this.navCtrl.setRoot(EditInfoPage);
        }else {
          console.log('Valor de la ocupacion data', this.sesionObject.ocupation)
          this.navCtrl.setRoot(MenuHomeWorkPage);
        }
      } else {
        this.navCtrl.setRoot(MenuHomePage);
      }
    }, 2000)
  }

}
