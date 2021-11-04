import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Events, MenuController } from 'ionic-angular';
import { ListProfilesPage } from '../../pages/list-profiles/list-profiles';
//pages
//import { ListProfilesPage } from '../list-profiles/list-profiles';
/**
 * Generated class for the FooterTabsHireComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-tabs-hire',
  templateUrl: 'footer-tabs-hire.html'
})
export class FooterTabsHireComponent {

  text: string;
  public mymodel:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, public menuCtrl: MenuController) {
    console.log('Hello FooterTabsComponent Component');
  }

  tabs() {
    /* this.navCtrl.setRoot('YourProjectsPage'); */
    console.log(this.mymodel)
    if (this.mymodel == 'segment1') {
      this.menuCtrl.enable(true); 
      this.navCtrl.setRoot('CategoryHirePage');
    } 
    if(this.mymodel == 'segment2'){
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot('YourProjectsPage');
    }
    if(this.mymodel == 'segment3'){
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot(ListProfilesPage);
    }
    if(this.mymodel == 'segment4'){
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot('FavoritesPage');
    }
  }


}
