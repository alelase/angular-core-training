import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item} from "../item";

@Component({
  selector   : 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls  : ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item: Item;
  @Output() removed: EventEmitter<Item> = new EventEmitter();
}
