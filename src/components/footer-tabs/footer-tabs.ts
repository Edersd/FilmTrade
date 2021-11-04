import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Events, MenuController } from 'ionic-angular';
/**
 * Generated class for the FooterTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-tabs',
  templateUrl: 'footer-tabs.html'
})
export class FooterTabsComponent {

  text: string;
  public mymodel:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, public menuCtrl: MenuController) {
    console.log('Hello FooterTabsComponent Component');
  }
  
  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }
  
  tabs() {
    /* this.navCtrl.setRoot('YourProjectsPage'); */
    console.log(this.mymodel)
    if (this.mymodel == 'segment1') {
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot('PerfilWorkPage');
    } 
    if(this.mymodel == 'segment2'){
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot('ProjectsWorkPage');
    }
    if(this.mymodel == 'segment3'){
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot('ExplorePage');
    }
    if(this.mymodel == 'segment4'){
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot('HelpPage');
    }
  }

}
