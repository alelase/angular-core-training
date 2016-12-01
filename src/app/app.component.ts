import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  template: `
    <app-list-header [title]="title" ></app-list-header>

    <app-item-input (itemClick)="addItem($event)"
                    [text]="text"></app-item-input>

    <app-list [items]="items"></app-list>        
  `,    
})

export class AppComponent {
  public title: string;  
  public text: string;   
  
  constructor(){        
    this.title = "Todolist";
    this.text  = "add item...";    
  }

  public showMenu(event:Event){
    event.preventDefault();    
  }  
} 
