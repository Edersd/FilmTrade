import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

//interfaces
import { Sesion, State } from '../../model/interfaces/interfaces';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

//native
import { Camera, CameraOptions, DestinationType, MediaType, PictureSourceType } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Crop, CropOptions } from '@ionic-native/crop';
import { File, FileReader } from '@ionic-native/file';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@IonicPage()
@Component({
  selector: 'page-edit-info-hire',
  templateUrl: 'edit-info-hire.html',
})
export class EditInfoHirePage {
  private showComp = false;
  private imgAttr = [{
    element: 'class',
    value: 'img'
  }]

  private state: string;
  private region: string;
  public company: string;
  public editID: boolean = false;

  public sesionObject: any = { nombre: '', photoUri: null, compania: null };
  private statesList: any[] = [];
  private regionsList: string[];
  public newPhoto: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private camera: Camera, private crop: Crop, private loadingCtrl: LoadingController, private file: File, private webView: WebView, private accountProv: AccountProvider, private transfer: FileTransfer, public toastCtrl: ToastController) {
    this.configProv.getSesionObject().then(data => {
      this.sesionObject = data;
      console.log('Datos Edit:', data)
      this.accountProv.perfilHire(this.sesionObject.id).subscribe(data => {
        this.sesionObject = data;
        console.log('Datos Edit:', data)
        this.sesionObject.photoUri = data['foto'];
        this.sesionObject.state = data['estado'];
        this.sesionObject.region = data['municipio'];
        this.sesionObject.compania = data['compania'];
      }, error => console.error(error));
    }).catch(error => console.error(error));
    this.configProv.getStateList().subscribe(data => {
      let states: any = data;
      this.statesList = states;
    }, error => console.error(error));
  }

  private changeState(event: State): void {
    this.sesionObject.state = event.descripcion;
    this.regionsList = event.regions;
  }

  private changeRegion(event): void {
    console.log('Regin', event)
    this.sesionObject.region = event;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditInfoHirePage');
  }

  itemOcupation() {
    this.showComp = !this.showComp;
  }

  private changePhoto(si: any): void {
    this.newPhoto = si;
    let cameraOptions: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetHeight: 300,
      targetWidth: 300,
      correctOrientation: true
    };
    this.camera.getPicture(cameraOptions).then(data => {
      this.sesionObject.photoUri = `data:image/jpeg;base64,${data}`;
      this.configProv.setSesionObject(this.sesionObject);
    }).catch(error => console.error(error));
  }

  updateInfo() {
    console.log('Quiere foto', this.newPhoto, this.sesionObject.compania,this.company)
    console.log('Datos a enviar', this.sesionObject.id, this.sesionObject.nombre, this.sesionObject.state, this.sesionObject.region, this.sesionObject.photoUri, this.sesionObject.compania)
    if (this.newPhoto == 1) {
      this.uploadImageEdit();
    }
    else {
      this.accountProv.editarInfoHire({ id: this.sesionObject.id, no: this.sesionObject.nombre, es: this.sesionObject.state, mu: this.sesionObject.region, fo: null, co: this.sesionObject.compania  }).subscribe(edit => {
        if (edit.entra === "1") {
          let toast = this.toastCtrl.create({
            duration: 2000,
            message: 'Your changes have been saved succesfully',
            position: 'bottom'
          });
          toast.present();
          this.cargarDatos();
        }
      }, error => {
        console.error(error)
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Your changes have been saved succesfully',
          position: 'bottom'
        });
        toast.present();
        this.cargarDatos();
      });
    }
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
    var company = (this.sesionObject.compania != null) ? this.sesionObject.compania : this.company;

    var params = {
      'id': this.sesionObject.id,
      'no': this.sesionObject.nombre,
      'es': (this.sesionObject.state != null) ? this.sesionObject.state : this.sesionObject.estado,
      'mu': (this.sesionObject.region != null) ? this.sesionObject.region : this.sesionObject.municipio,
      'co': this.sesionObject.compania
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
    fileTransfer.upload(this.sesionObject.photoUri, 'http://d-ies.com/FilmTrade/API/editarInfoHire.php', options).then((data) => {
      loader.dismiss();

      if (data != null) {
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Your changes have been saved succesfully',
          position: 'bottom'
        });
        toast.present();
        this.cargarDatos();
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
        message: 'Fail, error when editing the data',
        position: 'bottom'
      });
      toast.present();
    });
  }



  public cargarDatos(): void {
    this.accountProv.perfilHire(this.sesionObject.id).subscribe(data => {
      this.sesionObject = data;
      console.log('Datos Edit:', data)
      this.sesionObject.photoUri = data['foto'];
      this.sesionObject.state = data['estado'];
      this.sesionObject.region = data['municipio'];
      this.sesionObject.compania = data['compania'];
    }, error => console.error(error));
    this.configProv.setSesionObject(this.sesionObject);
  }

  public doRefresh(refresher): void {
    this.cargarDatos();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
