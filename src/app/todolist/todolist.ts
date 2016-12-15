import { Logger } from '../logger';
import { Injectable } from '@angular/core';

@Injectable()
export class Todolist {

    public items: string[];


    constructor() {
        this.items = [];
    }

    public addItem(item: string) {
        this.items.push(item);
    }

    public removeItem(item: string) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}
