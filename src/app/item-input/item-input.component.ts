import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent  {

  @Output()
  public itemClick = new EventEmitter();

}
