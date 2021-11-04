import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from './../../providers/config/config';
/**
 * Generated class for the AboutFtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-ft',
  templateUrl: 'about-ft.html',
})
export class AboutFtPage {

  public sesionObject: any = [{}];
  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider) {
    this.configProv.getSesionObject().then(sesion => { this.sesionObject = sesion; console.log(this.sesionObject) }).catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutFtPage');
  }

}
