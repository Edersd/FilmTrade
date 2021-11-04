import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController  } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { ActionSheetController } from 'ionic-angular';

//component
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult, DefaultDate } from 'ion2-calendar';

//interfaces
import { Sesion, TodoPerfil, CrearProyecto } from '../../model/interfaces/interfaces';

//providers
import { ConfigProvider } from '../../providers/config/config';

export interface ServiceDescription {
  name?: string,
  generalTime?: number,
  extendedTime?: number,
  id?: number
}

@IonicPage()
@Component({
  selector: 'page-perfil-work-hire',
  templateUrl: 'perfil-work-hire.html',
})
export class PerfilWorkHirePage {
  private id;
  public myImage:any;
  public plan:any;
  public selected: boolean = false;
  public sesionObject: TodoPerfil = {};
  public projectAdd: CrearProyecto = { id: 0 };
  public serviceDescription: ServiceDescription = { id: 0 }; 
  public datesAPI: Array<any> = [];
  private listProfiles: any = [];
  public aux2: number;
  public dia1: string;
  public dia2: string;
  public mes: string;  
  public mes1: string;  
  public mes2: string; 
  public fecha: Array<any> = [];
  public numFecha: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public imageViewerCtrl: ImageViewerController, public actionCtrl: ActionSheetController, private configProv: ConfigProvider, private modalCtrl: ModalController, private toastCtrl: ToastController) {
    this.id = navParams.get('id');
    this.configProv.getAllPerfil(this.id).subscribe(sesion => { 
      this.sesionObject = sesion;
      let stringFoto = sesion['galeria'];
      if (sesion['galeria'] != null){
        let arrayFoto = stringFoto.split(',');
        this.sesionObject.galeria = arrayFoto;
      }
    }, error => console.error(error));
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
          disable: true,
          subTitle: 'Disabled',
        })    
      }
    }

    let options: CalendarModalOptions = {
      daysConfig,
      title: 'The artist it´s available in these days',
      format: 'YYYY-MM-DD',
      pickMode: 'multi',
      closeIcon: true,
      doneIcon: true,
      //defaultDates: (Array.of(this.sesionObject.dia) != undefined) ? Array.of(this.sesionObject.dia)  : null,
      defaultDates: (this.sesionObject.dias != undefined) ? this.sesionObject.dias : null
    }
    let calendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });
    calendar.onDidDismiss((date: Array<any>, type: string) => {
      console.log('Primer dia', date[this.sesionObject.dias.length].date);
      this.aux2 = date.length;
      //console.log('Arreglo', this.aux2);
      console.log('Ultimo dia', date[this.aux2-1].date);
  
      console.log('Mes', date[this.aux2-1].months);
        if(date[this.aux2-1].months == 1 ){
          this.mes = 'January';
        }
        if(date[this.aux2-1].months == 2 ){
          this.mes = 'February';
        }
        if(date[this.aux2-1].months == 3 ){
          this.mes = 'March';
        }
        if(date[this.aux2-1].months == 4 ){
          this.mes = 'April';
        }
        if(date[this.aux2-1].months == 5 ){
          this.mes = 'May';
        }
        if(date[this.aux2-1].months == 6 ){
          this.mes = 'June';
        }
        if(date[this.aux2-1].months == 7 ){
          this.mes = 'July';
        }
        if(date[this.aux2-1].months == 8 ){
          this.mes = 'August';
        }
        if(date[this.aux2-1].months == 9 ){
          this.mes = 'September';
        }
        if(date[this.aux2-1].months == 10 ){
          this.mes = 'October';
        }
        if(date[this.aux2-1].months == 11 ){
          this.mes = 'November';
        }
        if(date[this.aux2-1].months == 12 ){
          this.mes = 'November';
        }
      this.numFecha = this.sesionObject.dias.length;
      this.mes1 = this.mes;
      this.dia1 = date[this.sesionObject.dias.length].date + " - " ;
      this.dia2 =  date[this.aux2-1].date;
      this.mes2 = this.mes;
      console.log('Fecha completa2', date);
      //date = date.splice(0,this.numFecha);
      //console.log('Fecha completa', date);
      let dates: Array<string> = [];
      date.forEach((date, loop) => dates.push(date.string));
      this.fecha = dates;
      console.log('Fecha', this.fecha);
      console.log('Fecha', this.numFecha);
      console.log('Fecha', dates);
      dates = dates.splice(0,2);
      console.log('date', dates);
      /* if (type == 'done') {
         let dates: Array<string> = [];
        date.forEach((element, loop) => dates.push(element.string));
        console.log(dates);
        this.sesionObject.dias = dates;
        this.configProv.setAllPerfil(this.sesionObject); 
      } */
    });
    calendar.present();
  } 


  private change2(plan: number, costo: number, id:number): void {
    this.plan = plan;
    this.projectAdd.paquete = plan;
    this.projectAdd.costo = costo;
    this.projectAdd.id = id;
    this.configProv.setAddProject(this.projectAdd)
    console.log('id: ', this.projectAdd.id, 'paquete: ', this.projectAdd.paquete,' costo: ',costo)
  }

  /* Seleccionar tipo de paquete */
  private change(type: number, costo: number, id: number, name: string, foto: string): void {
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
          this.serviceDescription.name = 'Gold';
          this.serviceDescription.generalTime = 5;
          this.serviceDescription.extendedTime = 1;
          break;
        case 3:
          this.serviceDescription.id = type;
          this.serviceDescription.name = 'Premium';
          this.serviceDescription.generalTime = 8;
          this.serviceDescription.extendedTime = 1;
          break;
      }
      this.projectAdd.paquete = type;
      this.projectAdd.costo = costo;
      this.projectAdd.id = id;
      this.projectAdd.nombre = name;
      this.projectAdd.foto = foto; 
      this.projectAdd.calificacion = this.sesionObject.calificacion;
      this.projectAdd.hrspaquete = this.serviceDescription.generalTime;
      this.configProv.setAddProject(this.projectAdd)
    }
  }

  /* Agregar hora extra */
  private extraHour(extra: number){
    this.projectAdd.extra = extra;
    this.configProv.setAddProject(this.projectAdd)
    const toast = this.toastCtrl.create({
      message: 'You added an extra hour',
      duration: 3000
    });
    toast.present();
  }

  /* Ir a la siguiente pagina */
  private addProject(){
    if (this.serviceDescription.id == 1 || this.serviceDescription.id == 2 || this.serviceDescription.id == 3) {
      this.navCtrl.push('AddProjectPage',{fecha2 : this.fecha, dia : this.dia1, diaa: this.dia2, mes: this.mes});
    } else {
      const toast = this.toastCtrl.create({
        message: 'Select a package to create the project',
        duration: 3000
      });
      toast.present();
    }
  }
}
