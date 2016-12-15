
import {AbstractControl} from "@angular/forms";

export class MalamValidaors {

  static noSpace(control: AbstractControl) {
    if(control.value.indexOf(' ') != -1) {
      return {
        isSpace: true
      }
    }
    return null;
  }

  static noNir(control: AbstractControl) {
    if(control.value.indexOf('nir') != -1) {
      return {
        isNir: true
      }
    }
    return null;
  }

}