import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {

  public saveItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key:string):any {
    return JSON.parse(localStorage.getItem(key));
  }

  public clear(): void{
    localStorage.clear();
  }

}
