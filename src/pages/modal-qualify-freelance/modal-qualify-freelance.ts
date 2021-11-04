import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Events } from 'ionic-angular';

/**
 * Generated class for the ModalQualifyFreelancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-qualify-freelance',
  templateUrl: 'modal-qualify-freelance.html',
})
export class ModalQualifyFreelancePage {
  rate: any = 0;
  rating: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public events: Events) {
    events.subscribe('star-rating:changed', (starRating) => { console.log(starRating) });
  }

  onModelChange(event) {
    this.rate = event;
    console.log(event);
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalQualifyFreelancePage');
    const data = this.navParams.get('data');
    console.log(data);
  }

  close() {
    this.viewCtrl.dismiss();
  }

  public getTemperatureLabel(forTemperature: number) {
    const errorResult = "Error"
    let result: string;

    if (isNaN(forTemperature)) {
      result = errorResult;
    }
    else {
      const options: string[] = ["Cold", "Warm", "Hot"];
      result = forTemperature < 40 ? options[0] :
        forTemperature < 85 ? options[1] :
          options[3];
    }
    return result;

  }

  public setRating(val){
    let ratingArr = [{
      value: 1,
      icon: 'ion-ios-star-outline'
    }, {
      value: 2,
      icon: 'ion-ios-star-outline'
    }, {
      value: 3,
      icon: 'ion-ios-star-outline'
    }, {
      value: 4,
      icon: 'ion-ios-star-outline'
    }, {
      value: 5,
      icon: 'ion-ios-star-outline'
    }]
    var rtgs = ratingArr;
    for (let i = 0; i < rtgs.length; i++) {
      if (i<val) {
        rtgs[i].icon = 'ion-ios-star';
      } else {
        rtgs[i].icon = 'ion-ios-star-outline';
      }
    };
  }
  
}
