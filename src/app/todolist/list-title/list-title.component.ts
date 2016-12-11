import {Component, Input} from "@angular/core";

@Component({
  selector : 'app-list-title',
  template : '<h1>{{ text }}</h1>',
  styleUrls: ['./list-title.component.css']
})
export class ListTitleComponent {

  @Input()
  private text: string;

}
