import { NgModule } from '@angular/core';
import {Logger} from "./logger";
import {StorageService} from "./storage.service";


@NgModule({
  providers: [Logger, StorageService]
})
export class SharedModule { }
