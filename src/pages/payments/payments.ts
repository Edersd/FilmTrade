import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

//native
import { CardIO, CardIOOptions, CardIOResponse } from '@ionic-native/card-io';

//interfaces
import { Sesion, SesionType } from '../../model/interfaces/interfaces';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//pages
import { SplashHirePage } from '../splash-hire/splash-hire';

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
  private PATTERN_MONTH_YEAR: RegExp = /(\d{2})\/(\d{2})/;
  private PATTERN_CVV: RegExp = /(\d{3})/;
  private cardNumber: string = "";
  private month: any = "";
  private year: any = "";
  private cvv: string = "";
  private showComp: boolean = false;
  private sesionObject: any = {};
  public edit: any = true;
  public dataEdit: any;
  private regionsList: Array<any> = [
    {
      region:'Mexico'
    },
    {
      region:'USA'
    },
    {
      region:'Italy'
    },
    {
      region:'China'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardIO: CardIO, private configProv: ConfigProvider, private accountProv: AccountProvider, private toastCtrl: ToastController) {
    this.edit = navParams.get('edit');
    if (this.edit === false) {
      this.edit = false;
    } else {
      this.edit = true;
    }
    this.dataEdit = navParams.get('data');
    console.log(this.edit)

    this.configProv.getSesionObject().then(data => {
      console.log(data);
      this.sesionObject = data;
      console.log(this.sesionObject.tipo_usuario);
    }).catch(error => console.error(error));
  }

  desplegarCard() {
    this.showComp = !this.showComp;
  }

  /**
   * Init a scan for cards
   */
  private scanCard(): void {
    this.cardIO.canScan().then((canScan: boolean) => {
      if (canScan) {
        let options: CardIOOptions = {
          requireCVV: true
        }
        this.cardIO.scan(options).then((data: CardIOResponse) => {
          console.log(data);
          this.cvv = data.cvv;
          this.cardNumber = data.cardNumber;
          this.year = data.expiryYear;
          this.month = data.expiryMonth;
        }).catch(error => console.error(error));
      }
    }).catch(error => console.error(error));
  }

  private changeRegion(event): void {
    this.sesionObject.pais = event;
    console.log(event)
  }

  /**
   * Save the data
   */
  private enter(): void {
    if (this.edit == true) {
      this.accountProv.vinculacion({ cv: this.cvv, id: this.sesionObject.id, lu: (this.sesionObject.pais != null || this.sesionObject.pais != undefined)?this.sesionObject.pais:'México', vm: this.month, va: this.year, tt: 'Debito', tar: null, nu: this.cardNumber }).subscribe(data => {
        //console.log(data);
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Your changes have been saved successfully',
          position: 'bottom'
        });
        toast.present();
      }, //error => console.error()
      );
      this.navCtrl.push(SplashHirePage);
    }
    else if (this.edit == false) {
      this.accountProv.vinculacion({ cv: this.cvv, id: this.sesionObject.id, lu: (this.sesionObject.pais != null || this.sesionObject.pais != undefined)?this.sesionObject.pais:'México', vm: this.month, va: this.year, tt: 'Debito', tar: null, nu: this.cardNumber }).subscribe(data => {
        //console.log(data);
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Your changes have been saved successfully',
          position: 'bottom'
        });
        toast.present();
      }, //error => console.error() 
      );
    }
  }

  /**
   * This is to validate if data is valid
   * @param  value   Valuo to validate
   * @param  pattern RegExp validator
   * @return         True or false
   */
  private validatePattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }

  
}
