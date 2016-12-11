import {Component, Optional, SkipSelf} from "@angular/core";
import {Todolist} from "./todolist";

class Nir {}

@Component({
  selector   : 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls  : ['./todolist.component.css']
})

export class TodolistComponent {

  public title: string;
  public list: Todolist;

  constructor(list: Todolist, @Optional() nir:Nir) {
    this.title = "TOLOZ";
    this.list  = list;
  }
}
