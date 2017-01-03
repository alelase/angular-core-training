import {LoginComponent} from "./login/login.component";
import {TodolistComponent} from "./todolist/todolist/todolist.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list',  component: TodolistComponent},
];