import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//interfaces
import { Sesion } from '../../model/interfaces/interfaces';
import { CategoryHirePage } from '../category-hire/category-hire';

import { Events } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-your-projects',
  templateUrl: 'your-projects.html',
})
export class YourProjectsPage {

  private sesionObject: Sesion = {};
  public projectsCreated: any = [{}];
  public id_us;
  rate: any = 0;
  rating: number = 4;
  visible = false;
  visible2 = false;
  shownGroup = null;
  shownGroupUser = null;

  diseases = [
    { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
    { title: "Multiple Sclerosis", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
    { title: "Crohn's & Colitis", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." },
    { title: "Lupus", description: "Systemic lupus erythematosus (lupus) is a chronic, systemic autoimmune disease which can damage any part of the body, including the heart, joints, skin, lungs, blood vessels, liver, kidneys and nervous system." },
    { title: "Rheumatoid Arthritis", description: "Rheumatoid arthritis (RA) is an autoimmune disease in which the body's immune system mistakenly begins to attack its own tissues, primarily the synovium, the membrane that lines the joints." }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private configProv: ConfigProvider, private accountProv: AccountProvider, public events: Events) {
    events.subscribe('star-rating:changed', (starRating) => { console.log(starRating) });
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      console.log('Este es el id: ', sesion.id)
      this.accountProv.listadoProyectos(sesion.id).subscribe(data => {
        this.projectsCreated = data;
        console.log('Datos del api regreso: ', this.projectsCreated)
      }, error => console.error(error));
    }).catch(error => console.error(error));
  }

  public addProject(): void {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false,
      cssClass: 'my-modal-inner'
    };

    const myModalData = {};

    const modal: Modal = this.modalCtrl.create('ModalAddProjectsPage', { data: myModalData }, myModalOptions);
    modal.present();

    //setTimeout(() => modal.dismiss(), 4000);
    modal.onDidDismiss((data) => { });

    modal.onWillDismiss((data) => { });
  }

  addNewUser() {
    this.navCtrl.push('CategoryHirePage');
  }

  public doRefresh(refresher): void {
    this.configProv.getSesionObject().then(sesion => {
      this.sesionObject = sesion;
      this.accountProv.listadoProyectos(sesion.id).subscribe(data => {
        this.projectsCreated = data;
      }, error => console.error(error));
    }).catch(error => console.error(error));

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  public desplegarUsuarios(i: number): void {
    this.visible = !this.visible;
    console.log('desU:', i, '-----', this.visible)

  }

  public desplegarInfo(i: number): void {
    this.visible2 = !this.visible2;
    console.log('desI:', i, '-----', this.visible2)

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  toggleGroupUser(group) {
    if (this.isGroupShownUser(group)) {
      this.shownGroupUser = null;
    } else {
      this.shownGroupUser = group;
    }
  };
  isGroupShownUser(group) {
    return this.shownGroupUser === group;
  };

}
