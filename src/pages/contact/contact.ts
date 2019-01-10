
import { Component } from '@angular/core';


@Component({
  templateUrl: 'contact.html'
})
export class ContactPage {
  items = [
    '茶叶',
    '茶具',
    '瓷器'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
