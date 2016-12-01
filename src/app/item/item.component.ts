import { Todolist } from './../todolist';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li>
      {{ item }}
      <button (click)="list.removeItem(item)">X</button>
    </li>
  `,
})
export class ItemComponent {
  @Input() item: string;

  public list: Todolist;

  constructor(list: Todolist) {
    this.list = list
  }

}
