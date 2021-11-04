import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from './../../providers/config/config';
/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  public sesionObject: any = [{}];
  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider) {
    this.configProv.getSesionObject().then(sesion => { this.sesionObject = sesion; console.log(this.sesionObject) }).catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}
