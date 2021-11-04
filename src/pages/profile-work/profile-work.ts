import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import { PortfolioWorkPage } from './../portfolio-work/portfolio-work';

//interfaces
import { Sesion, OccupationType, Tag } from '../../model/interfaces/interfaces';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

@IonicPage()
@Component({
  selector: 'page-profile-work',
  templateUrl: 'profile-work.html',
})
export class ProfileWorkPage {

  private tagList: Array<Tag> = [];
  private occupation:any = { title: '', color: '', occupationType: null };
  private sesionObject: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private accountProv:AccountProvider) {
    this.occupation = this.navParams.get('ocupation');
    this.occupation.tags.forEach((element, loop) => this.tagList.push({ name: element, id: (loop+1) }));
    this.configProv.getSesionObject().then(data => {
      this.sesionObject = data;
    }).catch(error => console.error(error));
    console.log(this.occupation);
  }

  private next():void {
    let selectedTags:Array<string> = [];
    this.tagList.forEach((element, loop) => (element.selected)?selectedTags.push(element.name):null);
    let tags:string = '';
    selectedTags.forEach((element, loop) => tags += (loop == (selectedTags.length - 1))?`${element}`:`${element},`);
    this.accountProv.perfilWork({ id: this.sesionObject.id, tag: tags }).subscribe(
      data => {
        if (data.entra == "1") {
          console.log(data);
          this.sesionObject.tags = tags;
          this.configProv.setSesionObject(this.sesionObject);
          this.navCtrl.push(PortfolioWorkPage);
        }
      },
      error => console.error(error)
    );
  }

  private changeChipSelected(tag:Tag):void {
    if (tag.selected) {
      tag.selected = false;
      tag.color = null;
    }else {
      tag.selected = true;
      tag.color = '#f8f8f8';
    }
  }
}
