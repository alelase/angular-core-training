import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodolistComponent} from "./todolist.component";
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListMainComponent } from './list-main/list-main.component';
import { ListFooterComponent } from './list-footer/list-footer.component';
import { ListTitleComponent } from './list-title/list-title.component';
import { ListInputComponent } from './list-input/list-input.component';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListCounterComponent } from './list-counter/list-counter.component';
import { ListActionComponent } from './list-action/list-action.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [TodolistComponent, ListHeaderComponent, ListMainComponent, ListFooterComponent, ListTitleComponent, ListInputComponent, ListToggleComponent, ListItemsComponent, ListItemComponent, ListCounterComponent, ListActionComponent],
  exports     : [TodolistComponent]
})
export class TodolistModule {
}
