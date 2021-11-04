import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

import { Notification } from '../../model/interfaces/interfaces';

export interface Favorites {
  id?: string;
  foto?: string;
  nombre?: string;
  calificacion?: string;
  ocupation?: string;
  compania?: string;
  estado?: string;
  enable?: any;
}

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public id;
  public listFavorites: Array<Favorites> = [];
  public visible: any;


  /**
   * Contructor of the class
   * @param navCtrl   NavController
   * @param navParams NavParams
   * @param alertCtrl AlertController
   */

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private accountProv: AccountProvider, private toastCtrl: ToastController) {
    this.configProv.getSesionObject().then(sesion => {
      console.log('Este es el id Favorites: ', sesion.id)
      this.id = sesion.id;
      this.configProv.getListFavorites(sesion.id).subscribe(data => {
        this.listFavorites = data['user'];
        console.log('Arreglo favoritos: ', this.listFavorites)
        if (this.listFavorites == null) {
          const toast = this.toastCtrl.create({
            message: 'No favorite users',
            duration: 3000
          });
          toast.present();
        }
        else {
          this.listFavorites.forEach((element, index) => {
            const resultado = this.listFavorites.find(user => user.id === element.id);
            if (resultado != null) {
              this.listFavorites[index].enable = true;
            } else {
              this.listFavorites[index].enable = false;
            }
          });
        }
      })
    }).catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  private addFavoritos(i: number, event: any): void {
    if (this.listFavorites[i].enable == true) {
      console.log('IndexF: ', 'idu:', event.id, 'idf:', this.id)

      this.accountProv.eliminarFavoritoNotificacion({ idu: this.id, idf: event.id }).subscribe(data => {
        let d: any = data;
        console.log('Api agregarFavorito: ', d)
        if (d != null) {
          const toast = this.toastCtrl.create({
            message: 'User removed from your favorites',
            duration: 3000
          });
          toast.present();

          this.configProv.getListFavorites(String(this.id)).subscribe(data => {
            this.listFavorites = data['user'];
            console.log('Arreglo favoritos remove: ', this.listFavorites)
            if (this.listFavorites != null) {
              for (const { item, index } of this.listFavorites.map((item, index) => ({ item, index }))) {
                const resultado = this.listFavorites.find(user => user.id === item.id);
                if (resultado != null) {
                  this.listFavorites[index].enable = true;
                } else {
                  this.listFavorites[index].enable = false;
                }
              }
            }
          }, error => console.error(error));
        }
      }), error => console.error(error);
      this.visible = false;
      this.listFavorites[i].enable = this.visible;


    }
    else {
      this.configProv.getListFavorites(String(this.id)).subscribe(data => {
        this.listFavorites = data['user'];

        if (this.listFavorites != null) {
          const resultado = this.listFavorites.find(user => user.id === event.id);
          if (resultado != null) {
            const toast = this.toastCtrl.create({
              message: 'The user is already in your favorites',
              duration: 3000
            });
            toast.present();
          }
          else {
            this.accountProv.agregarFavorito({ id: this.id, idf: event.id }).subscribe(data => {
              let d: any = data;
              const toast = this.toastCtrl.create({
                message: 'User added to your favorites',
                duration: 3000
              });
              toast.present();
            }, error => console.error(error));
            this.visible = true;
            this.listFavorites[i].enable = this.visible
            this.configProv.getListFavorites(String(this.id)).subscribe(data => {
              this.listFavorites = data['user'];
              console.log('Arreglo favoritos add1: ', this.listFavorites)
              if (this.listFavorites != null) {
                for (const { item, index } of this.listFavorites.map((item, index) => ({ item, index }))) {
                  const resultado = this.listFavorites.find(user => user.id === item.id);
                  if (resultado != null) {
                    this.listFavorites[index].enable = true;
                  } else {
                    this.listFavorites[index].enable = false;
                  }
                }
              }
            }, error => console.error(error));
          }
        }
        else {
          console.log('No hay favoritos')
          this.accountProv.agregarFavorito({ id: this.id, idf: event.id }).subscribe(data => {
            let d: any = data;
            console.log('Api agregarFavorito: ', d)
            const toast = this.toastCtrl.create({
              message: 'User added to your favorites',
              duration: 3000
            });
            toast.present();
          }, error => console.error(error));
          this.visible = true;
          this.listFavorites[i].enable = this.visible
          this.configProv.getListFavorites(String(this.id)).subscribe(data => {
            this.listFavorites = data['user'];
            console.log('Arreglo favoritos add: ', this.listFavorites)
            if (this.listFavorites != null) {
              for (const { item, index } of this.listFavorites.map((item, index) => ({ item, index }))) {
                const resultado = this.listFavorites.find(user => user.id === item.id);
                if (resultado != null) {
                  this.listFavorites[index].enable = true;
                } else {
                  this.listFavorites[index].enable = false;
                }
              }
            }
          }, error => console.error(error));
        }
      }, error => console.error(error));

    }
  }

  doRefresh(refresher) {
    this.configProv.getSesionObject().then(sesion => {
      this.configProv.getListFavorites(sesion.id).subscribe(data => {
        this.listFavorites = data['user'];
        console.log('Arreglo favoritos: ', this.listFavorites)
        if (this.listFavorites == null) {
          const toast = this.toastCtrl.create({
            message: 'No favorite users',
            duration: 3000
          });
          toast.present();
        }
        else {
          this.listFavorites.forEach((element, index) => {
            const resultado = this.listFavorites.find(user => user.id === element.id);
            if (resultado != null) {
              this.listFavorites[index].enable = true;
            } else {
              this.listFavorites[index].enable = false;
            }
          });
        }
      })
    }).catch(error => console.error(error));

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
