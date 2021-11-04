import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Events } from 'ionic-angular';
import { EditInfoHirePage } from '../edit-info-hire/edit-info-hire';

//providers
import { ConfigProvider } from '../../providers/config/config';

//interfaces
import { Sesion } from '../../model/interfaces/interfaces';

export interface PageInterface {
  title: string;
  component: string;
  openTab?: any;
}

@IonicPage()
@Component({
  selector: 'page-menu-home',
  templateUrl: 'menu-home.html',
})
export class MenuHomePage {
  public pages: Array<PageInterface>;
  public eventOnTabChange: string = 'TAB_CHANGED';
  public rootPage = 'CategoryHirePage';
  public sesionObject: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, private configProv: ConfigProvider) {
    this.configProv.getSesionObject().then(sesion => this.sesionObject = sesion).catch(error => console.error(error));
    this.pages = [
      { title: 'Notifications', component: 'NotificationsHirePage' },
      { title: 'Chats', component: 'ChatListPage' },
      { title: 'Settings', component: 'SetingsPage' },
      { title: 'Linked accounts', component: 'LinkedAccountsPage' },
      { title: 'Verify your ID*', component: 'IdVerificationPage' },
      //{ title: 'Terms and conditions', component: 'TermsConditionsPage' }
    ];
  }

  openPage(page: PageInterface) {
    this.events.publish(this.eventOnTabChange, page.component);
  }

  editInfo() {
    this.navCtrl.push(EditInfoHirePage)
  }

  public doRefresh(refresher): void {
    this.configProv.getSesionObject().then(sesion => this.sesionObject = sesion).catch(error => console.error(error));
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
