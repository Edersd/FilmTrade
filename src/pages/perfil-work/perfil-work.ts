import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { ActionSheetController } from 'ionic-angular';

//component
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult, DefaultDate } from 'ion2-calendar';

//interfaces
import { Sesion, OccupationType, ThemeColor, TodoPerfil, Theme } from '../../model/interfaces/interfaces';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//page
import { PortfolioWorkPage } from '../portfolio-work/portfolio-work';
import { SelectPakageWorkPage } from '../select-pakage-work/select-pakage-work';

export interface ServiceDescription {
  name?: string,
  generalTime?: number,
  extendedTime?: number,
  id?: number
}

@IonicPage()
@Component({
  selector: 'page-perfil-work',
  templateUrl: 'perfil-work.html',
})
export class PerfilWorkPage {
  private images = ['1.png', '2.png', '3.png', '4.png'];
  public sesionObject: TodoPerfil = {};
  private selected: boolean = false;
  public serviceDescription: ServiceDescription = { id: 0 };
  public id;

  constructor(public navCtrl: NavController, public navParams: NavParams, public imageViewerCtrl: ImageViewerController, public actionCtrl: ActionSheetController, private configProv: ConfigProvider, private modalCtrl: ModalController, private acoutProv: AccountProvider, private toatCtrl: ToastController) {
    this.configProv.getSesionObject().then(sesion => {
      this.id = sesion.id
      this.configProv.getAllPerfil(sesion.id).subscribe(sesion => {
        this.sesionObject.occupationType = sesion['tipo_usuario'];
        console.log('DATOS WORK PERFIL:', sesion)
        this.sesionObject = sesion;
        if (this.sesionObject.ocupation == "Photographer") {
          this.sesionObject.theme = Theme.PHOTOGRAPHER;
          this.sesionObject.occupationType = OccupationType.PHOTOGRAPHER;
          this.configProv.setTheme(Theme.PHOTOGRAPHER);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }
        else if (this.sesionObject.ocupation == "Videographer") {
          this.sesionObject.theme = Theme.VIDEOGRAPHER;
          this.sesionObject.occupationType = OccupationType.VIDEOGRAPHER;
          this.configProv.setTheme(Theme.VIDEOGRAPHER);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }
        else if (this.sesionObject.ocupation == "Hair") {
          this.sesionObject.theme = Theme.HAIR_MAKEUP;
          this.sesionObject.occupationType = OccupationType.HAIR_MAKEUP;
          this.configProv.setTheme(Theme.HAIR_MAKEUP);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }
        else if (this.sesionObject.ocupation == "Talent") {
          this.sesionObject.theme = Theme.TALENT;
          this.sesionObject.occupationType = OccupationType.TALENT;
          this.configProv.setTheme(Theme.TALENT);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }


        let stringFoto = sesion['galeria'];
        if (sesion['galeria'] != null) {
          let arrayFoto = stringFoto.split(',');
          this.sesionObject.galeria = arrayFoto;
        }
      }, error => console.error(error));
    }).catch(error => console.error(error));
  }

  ionViewWillEnter() {

  }

  /**
   * [presentImage description]
   * @param myImage [description]
   */
  private presentImage(myImage: any): void {
    const imageViewer = this.imageViewerCtrl.create(myImage);
    imageViewer.present();
    //setTimeout(() => imageViewer.dismiss(), 3000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }

  /* CalendarModal */
  private presentActionSheet(): void {
    const daysConfig: DayConfig[] = [];
    let dates: Array<string> = [];
    console.log('Dias inicio', this.sesionObject.dias, this.sesionObject.dias.length)

    if (this.sesionObject.dias.length != undefined) {
      this.sesionObject.dias.forEach((element, loop) => dates.push(element));
      for (let i = 0; i < dates.length; i++) {
        var currentNumber = dates[i];
        var subCadena = currentNumber.substring(10, 8);
        var yymm = currentNumber.substring(8, 0);
        daysConfig.push({
          date: new Date(yymm + String(Number(subCadena) + 1)),
          disable: false,
          subTitle: 'Disable',
        })
      }
    }

    let options: CalendarModalOptions = {
      daysConfig,
      title: 'Available days',
      format: 'YYYY-MM-DD',
      pickMode: 'multi',
      closeIcon: true,
      doneIcon: true,
      defaultDates: (this.sesionObject.dias != undefined) ? this.sesionObject.dias : null
    }
    let calendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });
    calendar.onDidDismiss((date: Array<any>, type: string) => {
      if (type == 'done') {
        let dates: Array<string> = [];
        date.forEach((element, loop) => dates.push(element.string));
        this.sesionObject.dias = dates;
        this.sesionObject.occupationType = 2;
        this.configProv.setAllPerfil(this.sesionObject);
        console.log(dates, '-', String(this.sesionObject.dias));
        this.acoutProv.existenDias(this.id).subscribe(datae => {
          if (datae.mensaje === 'Si tiene dias insertados') {
            this.acoutProv.actualizarDias({ id: this.id, dia: String(this.sesionObject.dias) }).subscribe(dias => {
              let toast = this.toatCtrl.create({
                duration: 2000,
                message: 'Updated days',
                position: 'bottom'
              });
              toast.present();
            }, error => console.error(error));
          }
          else {
            this.acoutProv.diasHabiles({ id: this.id, di: String(this.sesionObject.dias) }).subscribe(dias => {
              let toast = this.toatCtrl.create({
                duration: 2000,
                message: 'Days added',
                position: 'bottom'
              });
              toast.present();
            }, error => console.error(error));
          }
        }, error => console.error(error));
      }
    });
    calendar.present();
  }

  /**
   * [change description]
   * @param type [description]
   */
  private change(type: number): void {
    if (type === this.serviceDescription.id) {
      this.selected = false;
      this.serviceDescription.id = 0;
    } else {
      this.selected = true;
      switch (type) {
        case 1:
          this.serviceDescription.id = type;
          this.serviceDescription.name = 'Basic';
          this.serviceDescription.generalTime = 3;
          this.serviceDescription.extendedTime = 1;
          break;
        case 2:
          this.serviceDescription.id = type;
          this.serviceDescription.name = 'Gold'
          this.serviceDescription.generalTime = 5;
          this.serviceDescription.extendedTime = 1;
          break;
        case 3:
          this.serviceDescription.id = type;
          this.serviceDescription.name = 'Premium'
          this.serviceDescription.generalTime = 8;
          this.serviceDescription.extendedTime = 1;
          break;
      }
    }
  }

  private openPortfolioPage(): void {
    this.navCtrl.push(PortfolioWorkPage, { edit: false });
  }

  private openPackagePage(): void {
    this.navCtrl.push(SelectPakageWorkPage, { edit: false });
  }

  public doRefresh(refresher): void {
    this.configProv.getSesionObject().then(sesion => {
      this.id = sesion.id
      this.configProv.getAllPerfil(sesion.id).subscribe(sesion => {
        console.log('DATOS WORK PERFIL:', sesion)
        this.sesionObject = sesion;
        if (this.sesionObject.ocupation == "Photographer") {
          this.sesionObject.theme = Theme.PHOTOGRAPHER;
          this.sesionObject.occupationType = OccupationType.PHOTOGRAPHER;
          this.configProv.setTheme(Theme.PHOTOGRAPHER);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }
        else if (this.sesionObject.ocupation == "Videographer") {
          this.sesionObject.theme = Theme.VIDEOGRAPHER;
          this.sesionObject.occupationType = OccupationType.VIDEOGRAPHER;
          this.configProv.setTheme(Theme.VIDEOGRAPHER);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }
        else if (this.sesionObject.ocupation == "Hair") {
          this.sesionObject.theme = Theme.HAIR_MAKEUP;
          this.sesionObject.occupationType = OccupationType.HAIR_MAKEUP;
          this.configProv.setTheme(Theme.HAIR_MAKEUP);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }
        else if (this.sesionObject.ocupation == "Talent") {
          this.sesionObject.theme = Theme.TALENT;
          this.sesionObject.occupationType = OccupationType.TALENT;
          this.configProv.setTheme(Theme.TALENT);
          console.log(this.sesionObject.theme, this.sesionObject.occupationType)
        }


        let stringFoto = sesion['galeria'];
        if (sesion['galeria'] != null) {
          let arrayFoto = stringFoto.split(',');
          this.sesionObject.galeria = arrayFoto;
        }
      }, error => console.error(error));
    }).catch(error => console.error(error));


    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  public isVideo(url: string) {

    return url.includes('.mp4');

  }

}
