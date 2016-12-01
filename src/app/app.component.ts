import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Todolist</h1>
      <input type="text" />
      <button>add</button>
      <ul>
        <li>list item</li>
      </ul>
      `,    
})

export class AppComponent {
  
  public items: string[];

  constructor(){
    this.items = [];
  }

  public addItem(title:string){
    this.items.push(title);
  }

  public removeItem(item: string) {
    const index = this.items.indexOf(item); 
    this.items.splice(index, 1);
  }
} 