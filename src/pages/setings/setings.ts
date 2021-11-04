import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, Events, NavPush } from 'ionic-angular';
import { SuportHelpPage } from '../suport-help/suport-help';
import { AboutFtPage } from '../about-ft/about-ft';

import { ConfigProvider } from './../../providers/config/config';
import { HomePage } from './../home/home';


//provider
//import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

@IonicPage()
@Component({
  selector: 'page-setings',
  templateUrl: 'setings.html',
})
export class SetingsPage {
  public id_user: number;

  public sesionObject:any=[{}];
  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, public app: App, public menu: MenuController, private events: Events, private accountProv: AccountProvider) {
    this.configProv.getSesionObject().then(sesion => { this.sesionObject = sesion; console.log(this.sesionObject)}).catch(error => console.error(error));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetingsPage');
  }

  supportHelp() {
    this.navCtrl.push(SuportHelpPage);
    console.log('SuppHelp')
  }

  aboutFT() {
    this.navCtrl.push(AboutFtPage);
  }

  ratePayments(){
    this.navCtrl.push('RatePaymentsPage');
  }

  linkAccounts(){
    this.navCtrl.push('LinkedAccountsPage', { edit: false });
  }

  idVerification(){
    this.navCtrl.push('IdVerificationPage', { edit: false });
  }

  public delete(): void {
    this.configProv.getSesionObject().then(sesion => {
      this.id_user = sesion.id;
        this.accountProv.eliminarusuario({ id_user: this.id_user }).subscribe(data => {
        console.log('Id_user: ', this.id_user);
        console.log('Datos del api regreso No: ', data);
      }, error => console.error(error));

    this.configProv.removeSesionObject();
    this.configProv.removeTheme();
    localStorage.clear();
    this.menu.enable(false);
    //this.menu.close();
    //this.events.publish('user:logout');
    //this.app.getRootNavs()[0].setRoot(HomePage);
    //this.app.getRootNavs()[0].setRoot(HomePage);
    //this.navCtrl.setRoot(HomePage);
    this.app.getRootNav().setRoot(HomePage);
    this.navCtrl.popToRoot();
    //root.popToRoot(); 
    //this.navCtrl.parent.setRoot(HomePage);
    /* this.navCtrl.setPages([
      { page: HomePage }
    ]); */
    console.log("Logout");
    //this.authService.logout();
    //this.app.getRootNav().setRoot(HomePage);
    //nav.setRoot(LoginPage);
    }, error => console.error(error));
  }

  public logout(): void {
    this.configProv.removeSesionObject();
    this.configProv.removeTheme();
    localStorage.clear();
    this.menu.enable(false);
    //this.menu.close();
    //this.events.publish('user:logout');
    //this.app.getRootNavs()[0].setRoot(HomePage);
    //this.app.getRootNavs()[0].setRoot(HomePage);
    //this.navCtrl.setRoot(HomePage);
    this.app.getRootNav().setRoot(HomePage);
    this.navCtrl.popToRoot();
    //root.popToRoot(); 
    //this.navCtrl.parent.setRoot(HomePage);
    /* this.navCtrl.setPages([
      { page: HomePage }
    ]); */
    console.log("Logout");
    //this.authService.logout();
    //this.app.getRootNav().setRoot(HomePage);
    //nav.setRoot(LoginPage);
  }
}
