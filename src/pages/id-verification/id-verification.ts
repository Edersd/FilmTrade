import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, AlertController, ModalController, ModalOptions, ToastController, LoadingController } from 'ionic-angular';
import { PaymentsPage } from './../payments/payments';

import { ModalProcessingDataPage } from './../modal-processing-data/modal-processing-data';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { AccountProvider } from './../../providers/account/account';
import { ConfigProvider } from './../../providers/config/config';

//Angular Forms
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-id-verification',
  templateUrl: 'id-verification.html',
})
export class IdVerificationPage {
  public picture: string = null;
  private pattern: RegExp = /^(\d{2})\/(d{2})$/;
  private cameraOptions: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  public id;
  public idVerifyForm: FormGroup;
  public edit: any = true;

  private sesionObject: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController, private camera: Camera, private accountProv: AccountProvider, private configProv: ConfigProvider, private toastCtrl: ToastController, private transfer: FileTransfer, private loadingCtrl: LoadingController, private formBuilder: FormBuilder) {
    this.edit = navParams.get('edit');
    if (this.edit === false) {
      this.edit = false;
    } else {
      this.edit = true;
    }
    console.log(this.edit)
    this.configProv.getSesionObject().then(data => this.sesionObject = data).catch(error => console.error(error));
    this.idVerifyForm = formBuilder.group({
      idVerify: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  private takePicture(): void {
    this.camera.getPicture(this.cameraOptions).then(data => {
      this.picture = `data:image/jpeg;base64,${data}`;
      console.log(this.picture);
    }).catch(error => console.error(error));
  }

  private openPayment() {
    if (this.idVerifyForm.valid) {
      let values: any = this.idVerifyForm.getRawValue();
      if ((this.picture != null && this.picture != undefined) && (values.idVerify != null)) {
        if (this.edit != true) {
          
        } else {
          this.uploadImage();
        }
      } else {
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'You must send all the data to continue',
          position: 'bottom'
        });
        toast.present();
      }
    }
    else {
      let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'You must send all the data to continue',
        position: 'bottom'
      });
      toast.present();
    }
    /* this.accountProv.idVerificacion({ id: this.sesionObject.id, idV: this.id, img: this.picture }).subscribe(data => {
      console.log(data);
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false,
        cssClass: 'my-modal-inner'
      };
      let modal = this.modalCtrl.create(ModalProcessingDataPage, myModalOptions);
      modal.present();
      setTimeout(() => {
        modal.dismiss();
        if (data.entra !== 0) {
          this.navCtrl.push(PaymentsPage, { id: this.id });
        } else {
          let toast = this.toastCtrl.create({
            duration: 2000,
            message: data.mensaje,
            position: 'bottom'
          });
          toast.present();
        }
        this.navCtrl.push(PaymentsPage, { id: this.id });
      }, 2000);
    },
      error => console.error(error)
    ); */
  }

  uploadImage() {
    //Show loading
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();

    //create file transfer object
    const fileTransfer: FileTransferObject = this.transfer.create();

    //random int
    var random = Math.floor(Math.random() * 100);

    let values: any = this.idVerifyForm.getRawValue();
    var params = {
      "id": this.sesionObject.id,
      'idV': values.idVerify
    };

    //option transfer
    let options: FileUploadOptions = {
      fileKey: 'img',
      fileName: "myImage_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: 'post',
      params: params,
      mimeType: "image/jpeg",
      headers: {}
    }

    //file transfer action
    fileTransfer.upload(this.picture, 'http://d-ies.com/FilmTrade/API/idVerificacion.php', options).then((data) => {
        loader.dismiss();

        /* let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Your changes have been saved successfully ',
          position: 'bottom'
        });
        toast.present(); */
        if(this.edit == false){
          let toast = this.toastCtrl.create({
            duration: 2000,
            message: 'Data added correctly, can be returned',
            position: 'bottom'
          });
          toast.present();
        }
        else{
          let dataass: any = data;
          const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false,
            showBackdrop: false,
            cssClass: 'my-modal-inner'
          };
  
          let modal = this.modalCtrl.create(ModalProcessingDataPage, myModalOptions);
          modal.present();
          setTimeout(() => {
            modal.dismiss();
            if (data != null) {
              if (this.edit != true) {
                this.navCtrl.pop();
              } else {
                this.navCtrl.push(PaymentsPage, { id: this.id });
              }
            } else {
              let toast = this.toastCtrl.create({
                duration: 2000,
                message: 'Error inserting data',
                position: 'bottom'
              });
              toast.present();
            }
          }, 2000);
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

  tabsFoto() {
    this.navCtrl.push('NoTabsPage');
  }

}
