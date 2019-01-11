import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { RegisterPage } from "../register/register";


@Component({
  selector: 'page-login',
  templateUrl: 'Login.html'
})

export class LoginPage {

  constructor ( public navCtrl: NavController) {

  }

  toTabs()
    {
    this.navCtrl.setRoot(TabsPage);
  }

  toRegister()
  {
    this.navCtrl.setRoot(RegisterPage);
  }

}

