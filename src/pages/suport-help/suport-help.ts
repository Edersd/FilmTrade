import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutFtPage } from '../about-ft/about-ft';
import { ConfigProvider } from './../../providers/config/config';
import { ListProfilesPage } from '../../pages/list-profiles/list-profiles';
/**
 * Generated class for the SuportHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suport-help',
  templateUrl: 'suport-help.html',
})
export class SuportHelpPage {

  public sesionObject: any = [{}];
  public mymodel: any = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider) {
    this.configProv.getSesionObject().then(sesion => { this.sesionObject = sesion; console.log(this.sesionObject) }).catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuportHelpPage');
  }

  faq(){
    this.navCtrl.push('FaqPage');
  }

  contactF(){
    this.navCtrl.push('HelpPage');
  }

  aboutF(){
    this.navCtrl.push(AboutFtPage);
  }

  termsF(){
    this.navCtrl.push('TermsConditionsPage');
  }

  tabs() {
    /* this.navCtrl.setRoot('YourProjectsPage'); */
    console.log(this.mymodel)
    if (this.mymodel == 'segment1') {
      this.navCtrl.push('CategoryHirePage');
    }
    if (this.mymodel == 'segment2') {
      this.navCtrl.push('YourProjectsPage');
    }
    if (this.mymodel == 'segment3') {
      this.navCtrl.push(ListProfilesPage);
    }
    if (this.mymodel == 'segment4') {
      this.navCtrl.push('FavoritesPage');
    }
  }

  tabs2() {
    /* this.navCtrl.setRoot('YourProjectsPage'); */
    console.log(this.mymodel)
    if (this.mymodel == 'segment1') {
      this.navCtrl.push('PerfilWorkPage');
    }
    if (this.mymodel == 'segment2') {
      this.navCtrl.push('ProjectsWorkPage');
    }
    if (this.mymodel == 'segment3') {
      this.navCtrl.push('ExplorePage');
    }
    if (this.mymodel == 'segment4') {
      this.navCtrl.push('HelpPage');
    }
  }

}
