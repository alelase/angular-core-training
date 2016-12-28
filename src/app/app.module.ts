import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TodolistModule} from "./todolist/todolist.module";
import {LoginModule} from "./login/login.module";
import {ServerModule} from "./server/server.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    TodolistModule,
    LoginModule,
      ServerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
