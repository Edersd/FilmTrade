import { Component } from "@angular/core";
import { NavController, MenuController, ToastController } from "ionic-angular";
import { FCM, NotificationData } from "@ionic-native/fcm";
import { LocalNotifications } from "@ionic-native/local-notifications";

//Angular Forms
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";

//interfaces
import { Sesion } from "../../model/interfaces/interfaces";

//providers
import { AccountProvider } from "../../providers/account/account";
import { ConfigProvider } from "../../providers/config/config";
import { NotificationProvider } from "../../providers/notification/notification";
//Pages
import { SelectRegisterPage } from "../select-register/select-register";
import { SplashHirePage } from "../splash-hire/splash-hire";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  /**
   * Form to login
   */
  private loginForm: FormGroup;
  private sesionObject: any;
  private tocken: string;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private notificationProv: NotificationProvider,
    private accountProv: AccountProvider,
    private configProv: ConfigProvider,
    public menu: MenuController,
    private toastCtrl: ToastController,
    private facebook: Facebook
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl("", Validators.required)
    });
  }

  ionViewDidLoad() {
    this.configProv
      .getSesionObject()
      .then(sesionObject => {
        if (sesionObject != null && sesionObject.nombre != null) {
          console.log("Datos estorag: ", sesionObject);
          this.navCtrl.setRoot(SplashHirePage);
          this.menu.enable(true);
        }
      })
      .catch(error => console.log(error));
  }

  /**
   * Do the login
   * @return Void
   */
  login() {
    this.notificationProv.getToken();
    if (this.loginForm.valid) {
      let values: any = this.loginForm.getRawValue();
      this.accountProv
        .login({
          em: values.email,
          ps: values.password,
          to: this.notificationProv.toc
        })
        .subscribe(
          data => {
            let d: any = data;
            console.log("Obtained token home: " + this.notificationProv.toc);
            console.log("Este es la info del user: ", data);
            if (data.user != null || data.entra == 1) {
              this.configProv.setSesionObject(d.user);
              this.navCtrl.setRoot(SplashHirePage);
            } else {
              const toast = this.toastCtrl.create({
                message: "User not registered",
                duration: 3000
              });
              toast.present();
            }
          },
          error => console.error(error)
        );
    } else {
      this.loginForm.controls.email.markAsTouched();
      this.loginForm.controls.password.markAsTouched();
    }
  }

  register() {
    this.navCtrl.push(SelectRegisterPage);
  }

  /**
   * This do login with facebook
   */
  private loginWithFacebook(): void {
    console.log("Facebook");
    this.facebook
      .login(["email", "public_profile"])
      .then((facebookResponse: FacebookLoginResponse) => {
        console.log(facebookResponse);
        this.facebook
          .api("/me?fields=id,name,email,first_name,picture,last_name,gender", [
            "public_profile",
            "email"
          ])
          .then(profile => {
            console.log(profile);

            console.log("el nombre es " + profile.name);

            this.tocken = this.notificationProv.toc;
            let values: any = this.loginForm.getRawValue();

            this.accountProv
              .registro({
                em: profile.email,
                na: profile.first_name,
                ps: profile.id,
                confps: profile.id,
                tu: values.tipo_usuario === 2 ? "2" : "3",
                to: this.notificationProv.toc
              })
              .subscribe(
                data => {
                  console.log("Al registrarse:", data);
                  if (data.entra != "0") {
                    this.accountProv
                      .login({
                        em: profile.email,
                        ps: profile.id,
                        to: this.notificationProv.toc
                      })
                      .subscribe(
                        data => {
                          console.log(data);
                          this.configProv.setSesionObject(data.user);
                          this.navCtrl.setRoot("IdVerificationPage");
                        },
                        error => console.error(error)
                      );
                  } else {
                    if (data.mensaje === "El usuario ya esta registrado") {
                      this.accountProv
                        .login({
                          em: profile.email,
                          ps: profile.id,
                          to: this.notificationProv.toc
                        })
                        .subscribe(
                          data => {
                            let d: any = data;
                            console.log(
                              "Obtained token home: " +
                                this.notificationProv.toc
                            );
                            console.log("Este es la info del user: ", data);
                            if (data.user != null || data.entra == 1) {
                              this.configProv.setSesionObject(d.user);
                              this.navCtrl.setRoot(SplashHirePage);
                            } else {
                              const toast = this.toastCtrl.create({
                                message: "User not registered",
                                duration: 3000
                              });
                              toast.present();
                            }
                          },
                          error => console.error(error)
                        );
                    } else {
                      let toast = this.toastCtrl.create({
                        duration: 2000,
                        message: data.mensaje,
                        position: "bottom"
                      });
                      toast.present();
                      console.log("la respuesta es " + data.mensaje);
                    }
                    /*
                  console.log('la el tipo es '+data.tipo_usuario);
                  */
                  }
                },
                error => console.error(error)
              );
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }
}
