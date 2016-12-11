import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-list-items',
  template: `    
    <ul class="todo-list">
      <app-list-item></app-list-item>
    </ul>
  `,
})
export class ListItemsComponent  {
  @Input() items: Item[];
}
