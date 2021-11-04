import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ActionSheetButton, LoadingController, ToastController } from 'ionic-angular';

//native
import { Camera, CameraOptions, MediaType, DestinationType, PictureSourceType, EncodingType } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

//pages
import { SelectPakageWorkPage } from './../select-pakage-work/select-pakage-work';

//interfaces
import { Sesion } from '../../model/interfaces/interfaces';

//providers
import { ConfigProvider } from '../../providers/config/config';
import { AccountProvider } from '../../providers/account/account';

@IonicPage()
@Component({
  selector: 'page-portfolio-work',
  templateUrl: 'portfolio-work.html',
})
export class PortfolioWorkPage {
  private droping: boolean = false;
  private sesionObject: Sesion;
  private photoList: Array<string> = [];
  public id_user;
  public photoUri;
  public edit = true;
  public posicion;

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProv: ConfigProvider, private camera: Camera, private actionSheetCtrl: ActionSheetController, private file: File, private loadingCtrl: LoadingController, private transfer: FileTransfer, public toastCtrl: ToastController, private acoutProv: AccountProvider) {
    this.edit = navParams.get('edit');
    if (this.edit === false) {
      this.edit = false;
    } else {
      this.edit = true;
    }
    this.configProv.getSesionObject().then(data => {
      this.sesionObject = data;
      this.id_user = data.id;
      this.acoutProv.portafolio(data.id).subscribe(port => {
        let stringFoto = port.galeria;
        if (port.galeria != null) {
          let arrayFoto = stringFoto.split(',');
          this.photoList = arrayFoto;
        }
        else {
          if (this.sesionObject.photos != undefined) {
            this.photoList = this.sesionObject.photos;
          }
        }
      }, error => console.error(error));

      /*  if (this.sesionObject.photos != undefined) {
         this.photoList = this.sesionObject.photos;
       } */
    }).catch(error => console.error(error));
  }

  private addPhoto(): void {

    if (this.photoList.length<10){
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Select the media to upload',
        enableBackdropDismiss: true,
        buttons: [
          {
            text: 'Cancel',
            icon: 'md-close-circle',
            role: 'cancel'
          },
          {
            text: 'Photo',
            icon: 'md-camera',
            handler: () => {
              this.pickMedia(MediaType.PICTURE);
            }
          },
          {
            text: 'Video',
            icon: 'md-videocam',
            handler: () => {
              this.pickMedia(MediaType.VIDEO);
            }
          }
        ]
      });
      actionSheet.present();
    }else{

      let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'Full gallery',
        position: 'bottom'
      });
      toast.present();
    }
    
    
  }

  private pickMedia(type: MediaType): void {
    let cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: DestinationType.FILE_URL,
      sourceType: PictureSourceType.PHOTOLIBRARY,
      mediaType: type,
      allowEdit: true,
      correctOrientation: true,
    };
    this.camera.getPicture(cameraOptions).then(data => {
      /* let loading = this.loadingCtrl.create({
        spinner: 'dots',
        content: 'Encoding picture'
      }); */
      let d: string = data;
      let filename = d.substring(d.lastIndexOf('/') + 1).split('?')[0];
      let path = d.substring(0, d.lastIndexOf('/') + 1);
      console.log('Name', filename);
      console.log('Path', path);
      /* loading.present(); */
      if ((filename != undefined || filename != null) && (path != undefined || path != null)) {
        this.file.readAsDataURL(path, filename).then(picture => {
          /* let toast = this.toastCtrl.create({
            duration: 10000,
            message: 'Es la ' + picture,
            position: 'bottom'
          });
          toast.present(); */
          this.photoList.push(picture);
          this.photoUri = picture;
          this.uploadImage(type);
          //loading.dismiss();
        }).catch(error => {
          console.error(error);
          //loading.dismiss();
          let toast = this.toastCtrl.create({
            duration: 10000,
            message: 'Error inserting data ',
            position: 'bottom'
          });
          toast.present();
        });
      }
      console.log(this.photoList);
    }).catch(error => console.error(error));
  }

  private next(): void {
    this.sesionObject.photos = this.photoList;
    this.configProv.setSesionObject(this.sesionObject);
    if (this.edit = true) {
      this.navCtrl.push(SelectPakageWorkPage, { id_user: this.id_user });
    } else {
      this.navCtrl.pop();
    }
  }

  private dropMedia(i: number): void {
    this.droping = !this.droping;

    this.photoList.splice(i, 1);
    this.posicion = i;
    this.configProv.getSesionObject().then(sesion => {
      this.acoutProv.eliminarGaleria({ id_user: this.id_user, posicion: this.posicion }).subscribe(data => {
        console.log('valor this.posicion', this.posicion);
        console.log('id de usuario', this.id_user);
      }, error => console.error(error));
    }, error => console.error(error));
    
  }

  uploadImage(type: MediaType) {
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
      'id_us': this.id_user,
      'des': 'Descrip' + this.id_user,
      'lu': 'Lugar' + this.id_user
    };
    let img = 'image/jpeg';
    let video = 'video/mp4';
    let fileExtencionType =  (type == 0) ? ".jpg" : ".mp4";

    //option transfer
    let options: FileUploadOptions = {
      fileKey: 'fi',
      fileName: "myImage_" + random + fileExtencionType,
      chunkedMode: false,
      httpMethod: 'post',
      params: params,
      mimeType: (type == 0) ? img : video,
      headers: {}
    }
    //video / mp4

    //file transfer action
    fileTransfer.upload(this.photoUri, 'http://d-ies.com/FilmTrade/API/Galeria.php', options).then((data) => {
      loader.dismiss();

      if (data != null) {
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Your changes have been saved successfully',
          position: 'bottom'
        });
        toast.present();
      } else {
        let toast = this.toastCtrl.create({
          duration: 2000,
          message: 'Error inserting data ',
          position: 'bottom'
        });
        toast.present();
      }

    }, (err) => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        duration: 2000,
        message: 'Error inserting data ',
        position: 'bottom'
      });
      toast.present();
    });
  }

}



