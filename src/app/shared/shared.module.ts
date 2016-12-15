import { NgModule } from '@angular/core';
import {Logger} from "./logger";
import {StorageService} from "./storage.service";
import { MalamUpPipe } from './malam-up.pipe';


@NgModule({
  providers: [Logger, StorageService],
  declarations: [MalamUpPipe],
  exports: [MalamUpPipe]
})
export class SharedModule { }
