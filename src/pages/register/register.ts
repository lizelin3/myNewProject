
import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: '注册成功!',
      buttons: ['登陆?']
    });
    alert.present()
  }
}
