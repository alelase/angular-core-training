import { Item } from './../item';
import { Todolist } from './../todolist';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li>
    <input type="checkbox" 
           [(ngModel)]="item.done">

      {{ item.title | malamUp:'!!':true }}       
      <button (click)="list.removeItem(item)">X</button>
    </li>
  `,
})
export class ItemComponent {
  @Input() item: Item;

  public list: Todolist;

  constructor(list: Todolist) {
    this.list = list
  }

  public getUpperCase(){ 
    return this.item.title.toUpperCase()        
  }

}
