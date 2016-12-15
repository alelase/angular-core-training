import { FormsModule } from '@angular/forms';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodolistComponent} from "./todolist/todolist.component";
import {ListComponent} from "./list/list.component";
import {ItemInputComponent} from "./item-input/item-input.component";
import {ListHeaderComponent} from "./list-header/list-header.component";
import {ItemComponent} from "./item/item.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports     : [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    TodolistComponent,
    ListComponent,
    ItemInputComponent,
    ListHeaderComponent,
    ItemComponent
  ],
  exports: [TodolistComponent]
})
export class TodolistModule {
}
