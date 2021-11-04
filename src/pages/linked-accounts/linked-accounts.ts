import { PaymentsPage } from './../payments/payments';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';
/**
 * Generated class for the LinkedAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-linked-accounts',
  templateUrl: 'linked-accounts.html',
})
export class LinkedAccountsPage {
  public sesionObject: any = { nombre: ''};
  public dataCounts: any = { };
  public show: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private accountProv: AccountProvider, public toastCtrl: ToastController) {
    this.configProv.getSesionObject().then(data => { 
      this.sesionObject = data;
      console.log(this.sesionObject)
      this.accountProv.cuentasVinculadas(this.sesionObject.id).subscribe(data => {
        this.dataCounts = data;
        console.log('DATOS CUANTAS API: ', this.dataCounts)

      }, error => console.error(error))
     }).catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinkedAccountsPage');
  }

  public  click(){
    this.show = !this.show;
  }

  public addNew(values:any){
    this.navCtrl.push(PaymentsPage,{data: values, edit: false})
  }

}
