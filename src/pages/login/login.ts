import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  toTabs() {
    this.navCtrl.setRoot(TabsPage);
  }

  toRegister() {
    this.navCtrl.setRoot(RegisterPage);
  }
}