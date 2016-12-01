import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ title }}</h1>
  <app-item-input (itemClick)="addItem($event)"></app-item-input>
  <app-list [items]="items"></app-list>        
  `,    
})

export class AppComponent {

  public title: string;  
  public items: string[];
  public text: string;   
  
  constructor(){    
    this.items = [];
    this.title = "Todolist";
    this.text  = "add item...";    
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
