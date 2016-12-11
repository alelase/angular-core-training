import {Component, Input} from '@angular/core';
import {Item} from "../item";
import {Todolist} from "../todolist";

@Component({
  selector: 'app-list-items',
  template: `    
    <ul class="todo-list">
      <app-list-item *ngFor="let item of items" 
                     [item]="item"
                     (removed)="list.removeItem($event)"
                     >                     
      </app-list-item>      
    </ul>
  `,
})
export class ListItemsComponent  {
  @Input() items: Item[];
  private list: Todolist;

  constructor(list:Todolist) {
    this.list = list;

  }
}
