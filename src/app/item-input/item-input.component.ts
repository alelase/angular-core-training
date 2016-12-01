import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-item-input',
  template: `
      <input type="text" 
          #itemInput 
          [placeholder]="text" />
          
      <button (click)="itemClick.emit(itemInput.value)" 
            (contextmenu)="showMenu($event)">add</button>
   `  
})

export class ItemInputComponent  {

  @Input() 
  public text: string; 

  @Output()
  public itemClick = new EventEmitter();  
}
