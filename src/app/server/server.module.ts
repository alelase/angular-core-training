import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ServerComponent} from "./server.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports     : [
    CommonModule,
    HttpModule
  ],
  declarations: [ServerComponent],
  exports     : [ServerComponent],
})
export class ServerModule {
}
