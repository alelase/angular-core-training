import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-list-header',
  template: `<h1>{{ title }}</h1>`
})

export class ListHeaderComponent {

  @Input()
  public title: string;

}
