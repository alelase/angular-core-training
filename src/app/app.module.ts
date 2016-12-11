import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodolistModule} from "./todolist/todolist.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule],
  bootstrap   : [AppComponent]
})

export class AppModule {
  
}