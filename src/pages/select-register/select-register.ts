import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register'

import { Sesion, SesionType } from '../../model/interfaces/interfaces';
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

@IonicPage()
@Component({
  selector: 'page-select-register',
  templateUrl: 'select-register.html',
})
export class SelectRegisterPage {
  private sesionObject:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private accountProv:AccountProvider) {
    this.configProv.getSesionObject().then(data => {
      if (data != null) {
        this.sesionObject = data;
      }
      console.log('Is sesion', this.sesionObject.sesionType != undefined, this.sesionObject.sesionType);
      if (this.sesionObject.sesionType != undefined) {
        this.navCtrl.setRoot(RegisterPage);
      }
    }).catch(error => console.error(error));
  }

  register(sesionType:number){
    this.sesionObject.tipo_usuario = sesionType
    this.configProv.setSesionObject(this.sesionObject);
    console.log('Id: ',this.sesionObject.sesionType);
    this.navCtrl.push(RegisterPage);
  }

}
