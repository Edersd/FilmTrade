import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Modal, ModalController, ModalOptions, ToastController } from 'ionic-angular';

//interfaces
import { Sesion, TodoPerfil, CrearProyecto } from '../../model/interfaces/interfaces';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//component
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult, DefaultDate } from 'ion2-calendar';

//Angular Forms
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


export interface DataSendCalendar {
  id?: number,
  di?: Array<any>
}

export interface ProjectExis {
  id?: string;
  nombre?: string;
  status?: string;
  descripcion?: string;
  total?: string;
  fecha?: string;
  id_user_paga?: string;
}

export interface NewProject {
  id_user?: number;
  name?: string;
  descripcion?: string;
}

@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {
  public projectAdd: CrearProyecto = {};
  public perfilWork: TodoPerfil = {};
  public projecExis: Array<ProjectExis> = [];
  public loginForm: FormGroup;
  public plan: any;
  public event = {
    timeStarts: '12:00'
  }
  private sesionObject: Sesion = {};
  private projectForm: FormGroup;
  public id_user: any;
  public showNew: any = false;
  public fecha: Array <string> = [];
  public dia1: string;
  public dia2: string;
  public mes: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private configProv: ConfigProvider, private formBuilder: FormBuilder, private toastCtrl: ToastController, private accountProv: AccountProvider) {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.id_user = sesion.id;
      this.projectAdd.id_user = sesion.id;
      this.configProv.setAddProject(this.projectAdd);
      this.loginForm.controls.id_user.setValue(sesion.id);

      this.configProv.getProjectExis(sesion.id).subscribe(data => {
        let projects: any = data;
        this.projecExis = projects;
        console.log('Projectos existentes', data);
        let fecha2 = navParams.get('fecha2');
        console.log('Fecha', fecha2);
        this.fecha = fecha2.string;
        this.projectAdd.avaibleDates = fecha2;

        this.loginForm.controls.avaibleDates.setValue(this.projectAdd.avaibleDates);
        console.log('nueva', this.fecha);
        console.log('avaibleDates', this.projectAdd.avaibleDates);
        //console.log('avaibleDates', this.loginForm.controls.avaibleDates);
        //console.log('Fecha3', fecha2);
        let dia1 = navParams.get('dia');
        this.dia1 = dia1;
        console.log('dia1', dia1);
        let dia2 = navParams.get('diaa');
        this.dia2 = dia2;
        console.log('dia2', dia2);
        let mes = navParams.get('mes');
        this.mes = mes;
        console.log('mes', mes);
      })
    }).catch(error => console.error(error));



    this.configProv.getSesionObjectProject().then(data => {
      this.projectAdd = data;
      this.plan = this.projectAdd.paquete;
      this.loginForm.controls.id.setValue(this.projectAdd.id);
      this.loginForm.controls.paquete.setValue(this.projectAdd.paquete);
      this.loginForm.controls.costo.setValue(this.projectAdd.costo);
      this.loginForm.controls.nombre.setValue(this.projectAdd.nombre);
      this.loginForm.controls.hrspaquete.setValue(this.projectAdd.hrspaquete);
      this.loginForm.controls.foto.setValue(this.projectAdd.foto);
      this.loginForm.controls.calificacion.setValue(this.projectAdd.calificacion);
      this.loginForm.controls.extra.setValue(this.projectAdd.extra);
      this.configProv.getAllPerfil(String(this.projectAdd.id)).subscribe(sesion => {
        this.perfilWork = sesion;
      }, error => console.error(error));
    }).catch(error => console.error(error));

    this.loginForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      id: new FormControl(''),
      id_user: new FormControl(''),
      paquete: new FormControl(''),
      costo: new FormControl(''),
      nombre: new FormControl(''),
      hrspaquete: new FormControl(''),
      extra: new FormControl(''),
      avaibleDates: new FormControl(''),
      calificacion: new FormControl(''),
      hora: new FormControl(''),
      foto: new FormControl(''),
      id_proyecto: new FormControl
    });
  }

  /* Calendario */
  /*
  private presentActionSheet(): void {
    const daysConfig: DayConfig[] = [];
    let dates: Array<string> = [];
    let datesS: Array<string> = [];

    if (this.perfilWork.dias.length != undefined) {
      if (this.perfilWork.dias != undefined && this.perfilWork.dias != null) {
        this.perfilWork.dias.forEach((element, loop) => dates.push(element));
        for (let i = 0; i < dates.length; i++) {
          var currentNumber = dates[i];
          var subCadena = currentNumber.substring(10, 8);
          var yymm = currentNumber.substring(8, 0);
          daysConfig.push({
            date: new Date(yymm + String(Number(subCadena) + 1)),
            disable: true,
            subTitle: 'disable'
          })
        }
      }
    }

    console.log(this.projectAdd);
    
    if (this.fecha != undefined && this.fecha != null) {
      this.projectAdd.avaibleDates.forEach((element, loop) => datesS.push(element));
      for (let i = 0; i < datesS.length; i++) {
        var currentNumberS = datesS[i];
        var subCadenaS = currentNumberS.substring(10, 8);
        var yymmS = currentNumberS.substring(8, 0);
        daysConfig.push({
          date: new Date(yymmS + String(Number(subCadenaS) + 1)),
          subTitle: 'Select',
        })
      }
    }
    

    let options: CalendarModalOptions = {
      daysConfig,
      title: 'Select the avalaible dates',
      format: 'YYYY-MM-DD',
      pickMode: 'multi',
      closeIcon: true,
      doneIcon: true,
      defaultDates: (this.perfilWork.dias != undefined) ? this.perfilWork.dias : null
    }
    let calendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });
    
    calendar.onDidDismiss((date: Array<any>, type: string) => {
      if (type == 'done') {
        let dates: Array<string> = [];
        date.forEach((element, loop) => dates.push(element.string));
        //console.log('Incial', dates);

        if (this.perfilWork.dias.length != undefined) {
          this.perfilWork.dias.forEach((element2, loop) => {
            var index = dates.indexOf(element2);
            if (index > -1) {
              dates.splice(index, 1);
            }
          });
        }
        //console.log('Final', dates);
        this.perfilWork.dias;
        this.projectAdd.avaibleDates = dates;
        this.configProv.setAddProject(this.projectAdd);
        this.loginForm.controls.avaibleDates.setValue(this.projectAdd.avaibleDates);
      }
    });
    calendar.present();
  }*/

  /* Seleccionar hora */
  parseDate(hora: any) {
    this.projectAdd.hora = hora;
    this.configProv.setAddProject(this.projectAdd);
    this.loginForm.controls.hora.setValue(this.projectAdd.hora);
  }

  /* Seleccionar hora extra */
  private extraHour(extra: number) {
    if (this.projectAdd.extra == 1) {
      const toast = this.toastCtrl.create({
        message: 'You have already added an extra hour',
        duration: 3000
      });
      toast.present();
      this.projectAdd.extra = 1;
    } else {
      this.projectAdd.extra = extra;
      this.configProv.setAddProject(this.projectAdd);
      this.loginForm.controls.extra.setValue(this.projectAdd.extra);
    }
  }

  /* Ir al modal */
  openModal() {
    if (this.loginForm.valid) {
      this.projectAdd = this.loginForm.getRawValue();
      this.configProv.setAddProject(this.projectAdd);
      console.log('Extra cuando se manda:', this.projectAdd.extra)
      
      if ((this.projectAdd.avaibleDates != undefined && this.projectAdd.avaibleDates != null && this.projectAdd.avaibleDates != Array.of("")) && (this.projectAdd.hora != undefined && this.projectAdd.hora != null && this.projectAdd.hora != "") && (this.projectAdd.name != undefined && this.projectAdd.name != null) && (this.projectAdd.descripcion != undefined && this.projectAdd.descripcion != null)) {
        if (this.projectAdd.id_proyecto == null) {
          this.accountProv.agregarProyecto({ na: this.projectAdd.name, des: this.projectAdd.descripcion, id_us: this.projectAdd.id_user }).subscribe(data => {
            let d: any = data;
            this.projectAdd.id_proyecto = d.id_proyecto;
            //this.projectAdd.avaibleDates = this.fecha;
            this.configProv.setAddProject(this.projectAdd);
            console.log('Project Id: ', d.id_proyecto, '-', this.projectAdd.id_proyecto, '-', this.projectAdd)
            const toast = this.toastCtrl.create({
              message: d.mensaje,
              duration: 3000
            });
            //toast.present();
            if (d.id_proyecto != null) {
              const myModalOptions: ModalOptions = {
                enableBackdropDismiss: false,
                showBackdrop: false,
                cssClass: 'my-modal-inner'
              };

              const modal: Modal = this.modalCtrl.create('ModalDetailRequestPage', { data: this.projectAdd }, myModalOptions);
              modal.present();
            }
          }, error => console.error(error));
        }
        if (this.projectAdd.id_proyecto != null) {
          const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
          };

          const modal: Modal = this.modalCtrl.create('ModalDetailRequestPage', { data: this.projectAdd }, myModalOptions);
          modal.present();
        }
      }
      else {
        const toast = this.toastCtrl.create({
          message: 'Please fill in all the requiere fields',
          duration: 3000
        });
        toast.present();
      }
    }
  }

  showNewP() {
    this.showNew = true;
    this.projecExis = null;
    this.projectAdd.id_proyecto = null;
    this.projectAdd.name = null;
    this.projectAdd.descripcion = null;
  }

  private changeProject(event): void {
    this.projectAdd.id_user = this.id_user;
    this.projectAdd.id_proyecto = event.id;
    this.loginForm.controls.id_proyecto.setValue(event.id);

    this.projectAdd.name = event.nombre;
    this.loginForm.controls.name.setValue(event.nombre);

    this.projectAdd.descripcion = event.descripcion;
    this.loginForm.controls.descripcion.setValue(event.descripcion);
    this.configProv.setAddProject(this.projectAdd);
  }

  termConditios(){
    this.navCtrl.push('TermsConditionsPage')
  }

  changePackage(){
    this.navCtrl.pop();
    this.configProv.setAddProject(this.projectAdd);
  }




}
