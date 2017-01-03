import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Item} from "../todolist/item";

@Injectable()
export class ListApiService {

  private tasks: any[];

  constructor(http: Http) {

    const headers = new Headers();
    headers.append('token', '123456');

    const search = new URLSearchParams();
    search.append('q', 'string');

    http.get('https://jsonplaceholder.typicode.com/todos', {headers, search})
        .subscribe(response => this.tasks = <Item[]>response.json())

  }
}
