import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Notification } from '../../model/interfaces/interfaces';

//interfaces
import { Sesion, OccupationType, ListaPerfiles, Theme } from '../../model/interfaces/interfaces';

//pages
import { ProfileWorkPage } from './../profile-work/profile-work';

//providers
import { ConfigProvider } from '../../providers/config/config';

import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-list-profiles',
  templateUrl: 'list-profiles.html',
})


export class ListProfilesPage {
  public isSearchbrOpened = false;
  public listProfiles: Array<ListaPerfiles> = [];
  private foundBooks: Array<ListaPerfiles> = [];
  public id;
  public cah: any = false;
  public sesionObject:any = {};
  public mymodel: any = false;

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider) {
    this.configProv.getSesionObject().then(sesion => { this.sesionObject = sesion; console.log(this.sesionObject) }).catch(error => console.error(error));
    this.id = navParams.get('id');
    this.cah = navParams.get('cah');
    console.log(this.id);
    console.log(this.cah);
    if(this.cah == true){
      this.configProv.getListProfiles(this.id).subscribe(data => {
        let states: any = data;
        this.listProfiles = states;
        this.foundBooks = Array.of(states);
        console.log("list: ",this.listProfiles)
        console.log("found: ",this.foundBooks)

      }, error => console.error(error));
    }
    else{
      console.log('Otro')
      this.configProv.getListProfilesAll().subscribe(data => {
        let states: any = data;
        this.listProfiles = states;
      }, error => console.error(error));
    }
    this.searchControl = new FormControl();
  }

  openProfile(item: ListaPerfiles){
    this.navCtrl.push('PerfilWorkHirePage', { id: item.id });
  }

  ionViewDidLoad() {
    if (this.listProfiles != undefined || this.listProfiles != null) {
      this.setFilteredItems();
      this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
      });
    } else {
      console.log('No hay datos')
    } 
    
  }
  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.listProfiles = this.configProv.filterItems(this.searchTerm);
  }

  tabs() {
    /* this.navCtrl.setRoot('YourProjectsPage'); */
    console.log(this.mymodel)
    if (this.mymodel == 'segment1') {
      this.navCtrl.setRoot('CategoryHirePage');
    }
    if (this.mymodel == 'segment2') {
      this.navCtrl.setRoot('YourProjectsPage');
    }
    if (this.mymodel == 'segment3') {
      this.navCtrl.setRoot(ListProfilesPage);
    }
    if (this.mymodel == 'segment4') {
      this.navCtrl.setRoot('FavoritesPage');
    }
  }
}
