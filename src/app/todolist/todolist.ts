import {Item} from "./item";
import {Logger} from "./logger";
import {Injectable} from "@angular/core";

@Injectable()
export class Todolist {

  public items: Item[];
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
    this.items  = [];
  }

  public addItem(label: string): void {
    this.items.push({
      label,
      done: false
    });
    this.logger.log('item added');
  }

  public removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.logger.log('item removed');
  }
}
