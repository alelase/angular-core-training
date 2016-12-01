import { Logger } from './logger';
import { Todolist } from './todolist';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemInputComponent,
    ListHeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Todolist, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
