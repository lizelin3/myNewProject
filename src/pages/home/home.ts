import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems(){
    this.items = [
      '红茶',
      '绿茶',
      '熟茶',
      '生茶',
      '瓷器',
      '茶具'
    ];
  }

  getItems(ev){
    this.initializeItems();

    var val = ev.target.value;

    if(val && val.trim()!= ''){
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

