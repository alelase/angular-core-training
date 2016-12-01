import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{ title }}</h1>

      <input type="type"             
             #itemInput                      
             [placeholder]="text"/>

      <button (click)="addItem(itemInput.value)"
              (contextmenu)="showMenu($event)">add</button>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
      `,    
})

export class AppComponent {

  public title: string;  
  public items: string[];
  public text: string;   
  
  constructor(){    
    this.items = [];
    this.title = "Todolist";
    this.text = "add item...";    
  }

  public addItem(item: string){
    this.items.push(item);
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