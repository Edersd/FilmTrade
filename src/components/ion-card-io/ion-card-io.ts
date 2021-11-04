import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonCardIoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-card-io',
  templateUrl: 'ion-card-io.html'
})
export class IonCardIoComponent {
  @Input('number') public number:string = '';
  @Input('expired') public expired:string = '';
  @Input('cvc') public cvc:string = '';
  constructor() {

  }

}
