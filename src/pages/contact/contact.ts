import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

import {DetailPage} from "../detail/detail";


@Component({
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor ( public NavCtrl: NavController){

  }

  toImg()
  {
    this.navCtrl.setRoot( DetailPage );
  }
}
