import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

    public log(value: any): void {
        console.log(value);
    }
}
