import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists-tabs',
  templateUrl: 'lists-tabs.html',
})
export class ListsTabsPage {
  tab1 = 'NotificationsWorkPage';
  tab2 = 'DashboardTabsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsTabsPage');
  }

}
