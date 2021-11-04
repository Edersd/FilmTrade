import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//interfaces
import { Sesion } from '../../model/interfaces/interfaces';

//Angular Forms
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

export interface NewProject{
  id_user?: number;
  name?: string;
  description?: string;
}

@IonicPage()
@Component({
  selector: 'page-modal-add-projects',
  templateUrl: 'modal-add-projects.html',
})
export class ModalAddProjectsPage {
  private sesionObject: Sesion = {};
  private projectForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private configProv: ConfigProvider, private accountProv: AccountProvider, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.configProv.getSesionObject().then(sesion =>{ 
      this.sesionObject = sesion;
      console.log('Este es el id: ', sesion.id)
      //console.log('Este es todo: ', sesion.id)
      this.projectForm.controls.id_user.setValue(sesion.id);
    }).catch(error => console.error(error));
    this.projectForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      id_user: new FormControl('')
    });
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addNewProject() {
    let values: NewProject = this.projectForm.getRawValue();
    if ((values.name != undefined && values.name != null && values.name != "") && (values.description != undefined && values.description != null && values.description != "")) {
    this.accountProv.agregarProyecto({ na: values.name, des: values.description, id_us: values.id_user }).subscribe(data => {
      let d: any = data;
      /*console.log('Datos del api regreso: ',d.mensaje)
      const toast = this.toastCtrl.create({
        message: d.mensaje,
        duration: 3000
      });
      toast.present();*/
      this.viewCtrl.dismiss();
      
    }, error => console.error(error));
  }
  else{
    const toast = this.toastCtrl.create({
      message: 'You must fill all the fields',
      duration: 3000
    });
    toast.present();
  }
}
}
