export class Item {
  public label: string;
  public done: boolean;

  constructor(label: string) {
    this.label = label;
    this.done  = false;
  }
}
