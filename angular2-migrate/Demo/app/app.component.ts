/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';

@Component({
    selector: 'my-app',
    template: `
        <header></header>
    `,
    directives: [HeaderComponent]
})
export class AppComponent {
    constructor(){
    }
}