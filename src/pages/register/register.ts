import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FCM, NotificationData } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';

//Pages
import { IdVerificationPage } from '../id-verification/id-verification';

//Angular Forms
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

//providers
import { AccountProvider } from '../../providers/account/account';
import { ConfigProvider } from '../../providers/config/config';
import { NotificationProvider } from '../../providers/notification/notification';

//interfaces
import { Sesion, SesionType } from '../../model/interfaces/interfaces';

//native
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { SplashHirePage } from '../splash-hire/splash-hire';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  privacyCheck:boolean = false;

  private signupForm: FormGroup;
  private sesionObject:any;
  private tocken: string;
  private nombre: any;
  private correo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private fcm: FCM, private formBuilder: FormBuilder,private notificationProv:NotificationProvider, private accountProv: AccountProvider, private configProv: ConfigProvider, private facebook: Facebook, private toastCtrl:ToastController) {
    this.notificationProv.getToken();
 /* this.tocken= this.notificationProv.toc;
    console.log('Obtained token: 3' + this.tocken);*/
   // this.tocken =this.fcm.getToken().then((token: string);
    this.signupForm = formBuilder.group({
      
      name: new FormControl('', Validators.compose([
        Validators.required, Validators.maxLength(10)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required, Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(4)
      ])),
      repetpassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tipo_usuario: new FormControl('')
    });
    this.configProv.getSesionObject().then(data => {
      this.sesionObject = data;
      console.log(this.sesionObject);
      this.signupForm.controls.name.setValue(this.sesionObject.nombre);
      this.signupForm.controls.email.setValue(this.sesionObject.email);
      this.signupForm.controls.password.setValue(this.sesionObject.password);
      this.signupForm.controls.tipo_usuario.setValue(this.sesionObject.tipo_usuario);
    }).catch(error => console.error(error));
  }

  /**
   * This is to validate the form and then create an account
   */
  private next():void {
    this.tocken= this.notificationProv.toc;
    if (this.signupForm.valid) {
      if (this.privacyCheck) {
        let values:any = this.signupForm.getRawValue();
        console.log('Datos para registro:', values, values.tipo_usuario,this.notificationProv.toc);
        this.accountProv.registro({ em: values.email, na: values.name, ps: values.password, confps: values.password, 
          tu:(values.tipo_usuario === 2)?'2':'3', to: this.notificationProv.toc }).subscribe(
          data => {
            console.log('Al registrarse:',data);
            this.nombre=data.entra;
            console.log('Al :',this.nombre);

            if (data.entra != "0") {
              this.accountProv.login({ em: values.email, ps: values.password,to: this.notificationProv.toc }).subscribe(
                data => {
                  console.log(data);
                  this.configProv.setSesionObject(data.user);
                  this.navCtrl.setRoot('IdVerificationPage');
                },
                error => console.error(error)
              );
            }else {
              let toast = this.toastCtrl.create({
                duration: 2000,
                message: data.mensaje,
                position: 'bottom'
              });
              toast.present();
            }
          },
          error => console.error(error)
        );
      }
    }else {
      this.signupForm.controls.name.markAsTouched();
      this.signupForm.controls.email.markAsTouched();
      this.signupForm.controls.password.markAsTouched();
      this.signupForm.controls.repetpassword.markAsTouched();
    }
  }

  /**
   * This do login with facebook
   */
  private loginWithFacebook():void {
    console.log('Facebook');
    this.facebook.login(['email', 'public_profile']).then((facebookResponse: FacebookLoginResponse) => {
      console.log(facebookResponse);
      this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender',['public_profile','email']).then(profile => {
        console.log(profile);
       
        console.log('el nombre es '+ profile.name);

        this.tocken= this.notificationProv.toc;
        let values:any = this.signupForm.getRawValue();
         
      
            this.accountProv.registro({ em:  profile.email, na:  profile.first_name, ps: profile.id, confps: profile.id, 
              tu:(values.tipo_usuario === 2)?'2':'3', to: this.notificationProv.toc }).subscribe(
              data => {
                console.log('Al registrarse:',data);
                if (data.entra != "0") {
                  this.accountProv.login({ em: profile.email, ps: profile.id,to: this.notificationProv.toc }).subscribe(
                    data => {
                      console.log(data);
                      this.configProv.setSesionObject(data.user);
                      this.navCtrl.setRoot('IdVerificationPage');
                    },
                    error => console.error(error)
                  );
                }else {

                  if (data.mensaje === 'El usuario ya esta registrado'){
                    this.accountProv.login({ em: profile.email, ps: profile.id,to: this.notificationProv.toc }).subscribe(data => {
                      let d: any = data;
                      console.log('Obtained token home: ' + this.notificationProv.toc);
                      console.log('Este es la info del user: ', data)
                      if (data.user != null || data.entra == 1){
                        this.configProv.setSesionObject(d.user);
                        this.navCtrl.setRoot(SplashHirePage);
                      }
                      else{
                        const toast = this.toastCtrl.create({
                          message: 'User not registered',
                          duration: 3000
                        });
                        toast.present();
                      }
                    }, error => console.error(error));
                                  

                  }else{
                    let toast = this.toastCtrl.create({
                      duration: 2000,
                      message: data.mensaje,
                      position: 'bottom'
                    });
                    toast.present();
                    console.log('la respuesta es '+data.mensaje);

                  }
                  /*
                  console.log('la el tipo es '+data.tipo_usuario);
                  */
                }
              },
              error => console.error(error)
            );
         
  
   
   
      }).catch(error => console.error(error));
    }).catch(error => console.error(error));
  }

  private registroFacebook(nombre,correo):void {
    
    
  }

}
