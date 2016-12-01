import { Logger } from './logger';
import { Injectable } from '@angular/core';

@Injectable()
export class Todolist {

    public items: string[];
    private logger: Logger;

    constructor(logger: Logger) {
        this.items = [];
        this.logger = logger;
    }

    public addItem(item: string) {
        this.items.push(item);
        this.logger.log(`${new Date()}: ${item} added `)
    }

    public removeItem(item: string) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

}
