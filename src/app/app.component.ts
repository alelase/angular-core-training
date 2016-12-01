import { Todolist } from './todolist';
import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  template: `
    <app-list-header [title]="title" ></app-list-header>

    <app-item-input (itemClick)="list.addItem($event)"
                    [text]="text"></app-item-input>

    <app-list [items]="list.items"></app-list>        
  `,    
})

export class AppComponent {
  public title: string;  
  public text: string;
  public list : Todolist;

  
  constructor(list: Todolist){        
    this.title = "Todolist";
    this.text  = "add item...";
    this.list = list;    
  }

  public showMenu(event:Event){
    event.preventDefault();    
  }  
} 




