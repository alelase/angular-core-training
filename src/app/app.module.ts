import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TodolistModule} from "./todolist/todolist.module";
import {LoginModule} from "./login/login.module";
import {ServerModule} from "./server/server.module";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    TodolistModule,
    LoginModule,
    ServerModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
