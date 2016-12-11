import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-input',
  template: `
    <input class="new-todo"           
           type="type"            
           autofocus>
    `,
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent implements OnInit {

  placeholder: string = "my place holder";

  constructor() {

  }

  ngOnInit() {
  }

}
