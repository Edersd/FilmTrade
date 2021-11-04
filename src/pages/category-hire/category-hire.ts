import { ConfigProvider } from './../../providers/config/config';
import { ListProfilesPage } from './../list-profiles/list-profiles';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Theme } from '../../model/interfaces/interfaces';

export interface ListItem{
  titulo: string;
  color: string;
  id: number;
  theme: Theme;
}

@IonicPage()
@Component({
  selector: 'page-category-hire',
  templateUrl: 'category-hire.html',
})
export class CategoryHirePage {
  cardCateory:Array<ListItem>=[
    {
      titulo: 'Photographer',
      color: '#fb7e00', 
      id: 1,
      theme: Theme.PHOTOGRAPHER
    },
    {
      titulo: 'Videographer',
      color: '#02a0c9',
      id: 2,
      theme: Theme.VIDEOGRAPHER
    },
    {
      titulo: 'Hair & Makeup',
      color: '#fe0687',
      id: 3,
      theme: Theme.HAIR_MAKEUP
    },
    {
      titulo: 'Talent',
      color: '#16d600',
      id: 4,
      theme: Theme.TALENT
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private config: ConfigProvider) {
  }

  selectCategory(item:ListItem){
    this.config.setTheme(item.theme);
    this.navCtrl.push(ListProfilesPage, { id: item.id, cah: true });
  }

}
