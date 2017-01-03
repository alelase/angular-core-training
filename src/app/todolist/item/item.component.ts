import {Item} from "./../item";
import {Todolist} from "./../todolist";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-item',
  styles  : [`
    .completed { text-decoration: line-through; }
  `],
  template: `
    <li>
    <input type="checkbox" 
           [(ngModel)]="item.done">
      <span marker [ngClass]="{completed: item.done}">{{ item.title | malamUp:'!!':true }}</span>       
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

  public getUpperCase() {
    return this.item.title.toUpperCase()
  }

}
