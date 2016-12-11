import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-input',
  template: `
    <input class="new-todo"                                                          
           autofocus>
    `,
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent implements OnInit {



  constructor() {
  }

  ngOnInit() {
  }

}
