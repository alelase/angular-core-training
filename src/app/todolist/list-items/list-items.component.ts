import {Component, Input} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-list-items',
  template: `    
    <ul class="todo-list">
      <app-list-item *ngFor="let item of items" 
                     [item]="item"></app-list-item>      
    </ul>
  `,
})
export class ListItemsComponent  {
  @Input() items: Item[];
}
