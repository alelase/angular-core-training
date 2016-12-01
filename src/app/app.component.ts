import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{ title }}</h1>

      <input type="type" [placeholder]="text"/>

      <button (click)="addItem('new item')"
              (contextmenu)="showMenu($event)">add</button>
      <ul>
        <li>list item</li>
      </ul>
      `,    
})

export class AppComponent {

  public title: string;  
  public items: string[];
  public text: string;
  

  constructor(){
    this.items = [];
    this.title = "Todolist app";
    this.text = "add item...";
  }

  public addItem(title:string){
    this.items.push(title);
    console.log(this.items);
  }

  public removeItem(item: string) {
    const index = this.items.indexOf(item); 
    this.items.splice(index, 1);
  }

  public showMenu(event:Event){
    event.preventDefault();    
  }
} 