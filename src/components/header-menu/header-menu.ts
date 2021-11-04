import { Component } from '@angular/core';
import { App, Nav, MenuController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ConfigProvider } from './../../providers/config/config';
import { HomePage } from './../../pages/home/home';
/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events,public menuCtrl: MenuController, public app: App, private configProv: ConfigProvider) {
    console.log('Hello HeaderMenuComponent Component');
    this.text = 'Hello World';
  }

  logoutClicked () { 
    /* console.log ("Logout");*/
    this.configProv.removeSesionObject();
    this.configProv.removeTheme();
    localStorage.clear();
    this.menuCtrl.close (); 
    var nav = this.app.getRootNav (); 
    nav.setRoot(HomePage);  

    /*this.menuCtrl.enable(false);
    //this.navCtrl.parent.setRoot(HomePage);
    this.app.getRootNavs()[0].setRoot(HomePage);
    /* this.app.getRootNav().setRoot(HomePage);
    this.navCtrl.popToRoot(); */ 
    console.log("Logout");
  }

  perfilWorkPage(){
    this.navCtrl.push('PerfilWorkPage')
  }

  notificationsWorkPage(){
    this.navCtrl.push('NotificationsWorkPage')
  }

  chatListPage(){
    this.navCtrl.push('ChatListPage')
  }

  setingsPage(){
    this.navCtrl.push('SetingsPage')
  }

  linkedAccountsPage(){
    this.navCtrl.push('LinkedAccountsPage')
  }

  idVerificationPage(){
    this.navCtrl.push('IdVerificationPage', { edit: false })
  }

  termsConditionsPage(){
    this.navCtrl.push('TermsConditionsPage')
  }

  copyrightPage(){
    this.navCtrl.push('CopyrightPage')
  }
}
