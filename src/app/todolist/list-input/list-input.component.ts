import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-list-input',
  template: `
    <input class="new-todo"           
           #itemBox           
           (keydown.enter)="onSubmit.emit(itemBox.value)"                                                   
           autofocus>
    `,
})
export class ListInputComponent  {

  @Output()
  public onSubmit: EventEmitter<string>;

  constructor() {
    this.onSubmit = new EventEmitter<string>();
  }

}
