import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {About_editPage} from "./about_edit";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  toAboutEdit() {
    this.navCtrl.setRoot(About_editPage);
  }

}
