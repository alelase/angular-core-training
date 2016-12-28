import {Component, NgZone} from "@angular/core";
import {Todolist} from "../todolist";

@Component({
  providers: [Todolist],
  selector : 'app-todolist',
  template : `
    <app-list-header [title]="title" ></app-list-header>
    

    <app-item-input (itemClick)="list.addItem($event)"
                    [text]="text"></app-item-input>

    <app-list [items]="list.items"></app-list>
  `,

})
export class TodolistComponent {

  public title: string;
  public text: string;
  public list: Todolist;

  constructor(list: Todolist, ngzone:NgZone) {
    this.title = "MyApp!!!!";


    ngzone.runOutsideAngular( () => {
      setTimeout( () => {
        this.title = 'Ne Title';
      },5000 );
    });

    this.text  = "add item...";
    this.list  = list;
  }
}
