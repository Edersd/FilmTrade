import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Events } from 'ionic-angular';

//pages
import { ListProfilesPage } from '../list-profiles/list-profiles';

/**
 * Generated class for the DashboardTabsWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-tabs-work',
  templateUrl: 'dashboard-tabs-work.html',
})
export class DashboardTabsWorkPage {
  private eventOnTabChange:string = 'TAB_CHANGED';
  public index:number  = 0;
  private tab1: string = 'PerfilWorkPage';
  private tab2:string  = 'ProjectsWorkPage';
  private tab3:string  = 'ExplorePage';
  private tab4: string = 'HelpPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    this.events.subscribe(this.eventOnTabChange, (component:string) => {
      switch (component) {
        case this.tab1:
          console.log(this.tab1);
          this.index = 0;
          break;
        case this.tab2:
          console.log(this.tab2);
          this.index = 1;
          break;
        case this.tab3:
          console.log(this.tab3);
          this.index = 2;
          break;
        case this.tab4:
          console.log(this.tab4);
          this.index = 3;
          break;
        default:
          console.log(component);
          this.navCtrl.push(component);
          break;
      }
    });
  }

}
