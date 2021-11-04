import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, LoadingOptions, ToastController } from 'ionic-angular';

//interfaces
import { Sesion, OccupationType, State, Theme } from '../../model/interfaces/interfaces';

//pages
import { ProfileWorkPage } from './../profile-work/profile-work';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//native
import { Camera, CameraOptions, DestinationType, MediaType, PictureSourceType } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Crop, CropOptions } from '@ionic-native/crop';
import { File, FileReader } from '@ionic-native/file';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { SelectPakageWorkPage } from '../select-pakage-work/select-pakage-work';



export interface Occupation {
  title: string;
  subtitle: string;
  color: string;
  occupationType: OccupationType,
  theme: Theme;
  tags: Array<string>;
}
@IonicPage()
@Component({
  selector: 'page-edit-info',
  templateUrl: 'edit-info.html',
})
export class EditInfoPage {
  private showComp = false;
  private imgAttr = [{
    element: 'class',
    value: 'img'
  }]
  private occupations: Array<Occupation> = [
    {
      title: 'Photographer',
      subtitle: 'Photographer',
      color: '#ff9100',
      occupationType: OccupationType.PHOTOGRAPHER,
      theme: Theme.PHOTOGRAPHER,
      tags: [
        "Fashion",
        "Animals",
        "Food",
        "Children",
        "Product",
        "Nude",
        "Outdoors",
        "Street style",
        "Nature",
        "Sports",
        "Events",
        "Wedding",
        "Documentary"
      ]
    },
    {
      title: 'Videographer',
      subtitle: 'Videographer',
      color: '#2196f3',
      occupationType: OccupationType.VIDEOGRAPHER,
      theme: Theme.VIDEOGRAPHER,
      tags: [
        "Fashion",
        "Animals",
        "Food",
        "Children",
        "Product",
        "Nude",
        "Outdoors",
        "Street style",
        "Nature",
        "Sports",
        "Events",
        "Wedding",
        "Documentary"
      ]
    },
    {
      title: 'Hair and Makeup',
      subtitle: 'Hair',
      color: '#f50057',
      occupationType: OccupationType.HAIR_MAKEUP,
      theme: Theme.HAIR_MAKEUP,
      tags: [
        "Party",
        "Wedding",
        "Casual",
        "High Fashion",
        "Body paint",
        "Children",
        "Commercial"
      ]
    },
    {
      title: 'Talent',
      subtitle: 'Talent',
      color: '#76ff03',
      occupationType: OccupationType.TALENT,
      theme: Theme.TALENT,
      tags: [
        "Music",
        "Singer",
        "Clown",
        "Art",
        "Musician",
        "Performance",
        "Actor",
        "Actress",
        "Magic",
        "Paint"
      ]
    }
  ]

  private occupationsEdit: Array<Occupation> = []
  private state: string;
  private region: string;

  public sesionObject: any = { nombre: '', photoUri: null };
  private statesList: any[] = [];
  private regionsList: string[];
  private filteredRegionsList: any[] = [];
  public imageURI: any;
  public imageFileName: any;
  public edit: boolean = true;
  public id_user: any = "";
  public newPhoto:any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private camera: Camera, private crop: Crop, private loadingCtrl: LoadingController, private file: File, private webView: WebView, private accountProv: AccountProvider, private transfer: FileTransfer, public toastCtrl: ToastController) {
    this.edit = navParams.get('edit');
    if (this.edit === false) {
      this.edit = false;
    } 
    else {
      this.edit = true;
    }

    this.configProv.getSesionObject().then(data => {
      this.sesionObject = data;
      this.id_user = this.sesionObject.id;
      console.log('DATA SESION: ', this.sesionObject, this.sesionObject.id)
      console.log('Los datos', this.sesionObject, this.occupations)
      this.configProv.setSesionObject(this.sesionObject);
      this.sesionObject.photoUri = data['foto'];
      this.sesionObject.state = data['estado'];
      this.sesionObject.region = data['municipio'];
      
      /* if (this.edit == false) {
        this.accountProv.todoPerfil(this.id_user).subscribe(data => {
          console.log('Datos todo perfil:', data)
          this.sesionObject = data;
          if (data.entra != 0) {
          }
        }, error => console.error(error));
      } */

      if (this.sesionObject.ocupation == "Photographer") {
        this.occupationsEdit.push(this.occupations[0]);
        console.log(this.occupationsEdit)
      }
      else if (this.sesionObject.ocupation == "Videographer") {
        this.occupationsEdit.push(this.occupations[1]);
        console.log(this.occupationsEdit)
      }
      else if (this.sesionObject.ocupation == "Hair") {
        this.occupationsEdit.push(this.occupations[2]);
        console.log(this.occupationsEdit)
      }
      else if (this.sesionObject.ocupation == "Talent") {
        this.occupationsEdit.push(this.occupations[3]);
        console.log(this.occupationsEdit)
      }
    }).catch(error => console.error(error));
    this.configProv.getStateList().subscribe(data => {
      let states: any = data;
      this.statesList = states;
    }, error => console.error(error));
  }

  private changeState(event: State): void {
    this.sesionObject.estado = event.descripcion;
    this.regionsList = event.regions;
  }

  private changeRegion(event): void {
    this.sesionObject.municipio = event;
  }

  private changeOcupation(occupation: Occupation): void {
    this.configProv.setTheme(occupation.theme);
    this.sesionObject.ocupation = occupation.subtitle;

    if (this.sesionObject.photoUri != null || this.sesionObject.photoUri != undefined) {
      this.uploadImage(occupation);
    }
    else {
      console.log('Datos sin foto:', this.sesionObject.id, this.id_user, this.sesionObject.nombre, this.sesionObject.estado, this.sesionObject.municipio, (this.sesionObject.photoUri != undefined) ? this.sesionObject.photoUri : '', this.sesionObject.ocupation)
      this.accountProv.editarInfoWork({ id: (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user, na: this.sesionObject.nombre, es: this.sesionObject.estado, mu: this.sesionObject.municipio, fo: null, oc: this.sesionObject.ocupation }).subscribe(edit => {
        console.log('Edit api', edit)
        if (edit.entra === "1") {
          this.navCtrl.push(ProfileWorkPage, { ocupation: occupation });
        }
      }, error => { console.error(error); this.navCtrl.push(ProfileWorkPage, { ocupation: occupation }); });
    }
    this.configProv.setSesionObject(this.sesionObject);
  }

  private changePhoto(si:any): void {
    this.newPhoto = si;
    let cameraOptions: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      correctOrientation: true,
    };
    this.camera.getPicture(cameraOptions).then(data => {
      this.sesionObject.photoUri = `data:image/jpeg;base64,${data}`;
      this.configProv.setSesionObject(this.sesionObject);
      this.imageURI = data;
    }).catch(error => console.error(error));
  }

  public uploadImage(occupation: Occupation) {
    //Show loading
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();

    //create file transfer object
    const fileTransfer: FileTransferObject = this.transfer.create();

    //random int
    var random = Math.floor(Math.random() * 100);

    var params = {
      'id': (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user,
      'na': this.sesionObject.nombre,
      'es': this.sesionObject.estado,
      'mu': this.sesionObject.municipio,
      'oc': this.sesionObject.ocupation
    };

    //option transfer
    let options: FileUploadOptions = {
      fileKey: 'fo',
      fileName: "myImage_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: 'post',
      params: params,
      mimeType: "image/jpeg",
      headers: {}
    }

    //file transfer action
    fileTransfer.upload(this.sesionObject.photoUri, 'http://d-ies.com/FilmTrade/API/editarInfoWork.php', options).then((data) => {
      loader.dismiss();

      if (data != null) {
       /*  let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Data added correctly',
          position: 'bottom'
        });
        toast.present(); */
        this.navCtrl.push(ProfileWorkPage, { ocupation: occupation });
      } else {
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Error inserting data',
          position: 'bottom'
        });
        toast.present();
      }

    }, (err) => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'Error inserting data',
        position: 'bottom'
      });
      toast.present();
    });
  }

  uploadImageEdit() {
    //Show loading
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();

    //create file transfer object
    const fileTransfer: FileTransferObject = this.transfer.create();

    //random int
    var random = Math.floor(Math.random() * 100);

    var params = {
      'id': (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user,
      'na': this.sesionObject.nombre,
      'es': this.sesionObject.estado,
      'mu': this.sesionObject.municipio,
      'oc': this.sesionObject.ocupation
    };

    //option transfer
    let options: FileUploadOptions = {
      fileKey: 'fo',
      fileName: "myImage_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: 'post',
      params: params,
      mimeType: "image/jpeg",
      headers: {}
    }

    //file transfer action
    fileTransfer.upload(this.sesionObject.photoUri, 'http://d-ies.com/FilmTrade/API/editarInfoWork.php', options).then((data) => {
      loader.dismiss();

      if (data != null) {
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Your changes have been saved succesfully',
          position: 'bottom'
        });
        toast.present();
      } else {
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Error editing data',
          position: 'bottom'
        });
        toast.present();
      }

    }, (err) => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'Error editing data',
        position: 'bottom'
      });
      toast.present();
    });
  }

  updateInfo() {
    console.log('Quiere foto: ', this.newPhoto)
    if (this.newPhoto == 1) {
      this.uploadImageEdit();
    }
    else {
      this.accountProv.editarInfoWork({ id: (this.sesionObject.id != undefined) ? this.sesionObject.id : this.id_user, na: this.sesionObject.nombre, es: this.sesionObject.estado, mu: this.sesionObject.municipio, fo: null, oc: this.sesionObject.ocupation }).subscribe(edit => {
        if (edit.entra === "1") {
          let toast = this.toastCtrl.create({
            duration: 2000,
            message: 'Your changes have been saved successfully',
            position: 'bottom'
          });
          toast.present();
          //Actualiza los datos en pantalla
          this.navCtrl.push('PerfilWorkPage');
        }
      }, error => console.error(error));
      let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'Your changes have been saved successfully',
        position: 'bottom'
      });
      toast.present();
      //Actualiza los datos en pantalla
      this.navCtrl.push('PerfilWorkPage');
    }
  }

  private openPackagePage(): void {
    this.navCtrl.push(SelectPakageWorkPage, { edit: false });
  }

}
