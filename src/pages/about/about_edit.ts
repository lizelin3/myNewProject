import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'about_edit.html'
})
export class About_editPage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(About_editPage, characterNum);
    modal.present();
  }
}


