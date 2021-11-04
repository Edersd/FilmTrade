import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Events } from 'ionic-angular';

//pages
import { ListProfilesPage } from '../list-profiles/list-profiles';

@IonicPage()
@Component({
  selector: 'page-dashboard-tabs',
  templateUrl: 'dashboard-tabs.html',
})
export class DashboardTabsPage {
  private eventOnTabChange:string = 'TAB_CHANGED';
  public index:number = 0;
  private tab1: string = 'CategoryHirePage';
  private tab2:string = 'YourProjectsPage';
  private tab3:any = ListProfilesPage;
  private tab4: string = 'FavoritesPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    this.events.subscribe('user:logout', () =>{
      this.navCtrl.popToRoot();
    });
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
          this.navCtrl.push(component);
          break;
      }
    });
  }

}
