import { NgModule } from '@angular/core';
import {Logger} from "./logger";
import {StorageService} from "./storage.service";
import { MalamUpPipe } from './malam-up.pipe';
import { MarkerDirective } from './marker.directive';


@NgModule({
  providers: [Logger, StorageService],
  declarations: [MalamUpPipe, MarkerDirective],
  exports: [MalamUpPipe, MarkerDirective]
})
export class SharedModule { }
