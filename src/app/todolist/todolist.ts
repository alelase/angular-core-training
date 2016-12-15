import { Item } from './item';
import { Logger } from '../shared/logger';
import { Injectable } from '@angular/core';
import {StorageService} from "../shared/storage.service";

@Injectable()
export class Todolist {
    public items: Item[];
    private logger: Logger;
    private storage: StorageService;
    private KEY:string = 'LIST';

    constructor(logger: Logger, storage:StorageService) {
        this.logger = logger;
        this.storage = storage;
        this.items = storage.getItem(this.KEY) || [];
    }

    public addItem(title: string) {
        this.items.push({
            title: title,
            done: false
        });
        this.storage.saveItem(this.KEY, this.items);
    }

    public removeItem(item: Item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.storage.saveItem(this.KEY, this.items);
    }
}
