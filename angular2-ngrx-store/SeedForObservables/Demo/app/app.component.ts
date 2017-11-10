/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import Rx from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './counter';




@Component({
    selector: 'my-app',
    template: `
      	<button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>
    `
    
})
export class AppComponent {
	counter: Observable<number>;

	constructor(private store: Store){
		this.counter = store.select('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}

