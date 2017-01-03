import {Component} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";

@Component({
  selector: 'app-server',
  template: `
    <h1>Server module</h1>
    <pre>{{ tasks | json }}</pre>
  `,
})
export class ServerComponent {

  private tasks: any[];

  constructor(http: Http) {

    const headers = new Headers();
    headers.append('token', '123456');

    const search = new URLSearchParams();
    search.append('q','string');

    http.get('https://jsonplaceholder.typicode.com/todos', { headers, search })
        .subscribe( tasks => this.tasks = tasks.json() )

  }


}
