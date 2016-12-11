import {Component, OnInit} from "@angular/core";
import {Item} from "./item";

@Component({
  selector   : 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls  : ['./todolist.component.css']
})

export class TodolistComponent {

  public title: string;
  public items: Item[];

  constructor() {
    this.title = "TOLOZ";
    this.items = [
        new Item('task 1'),
        new Item('task 2'),
    ];
  }

  public addItem(label:string):void {
    this.items.push(new Item(label));
  }

  public removeItem(item:Item):void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}