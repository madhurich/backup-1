/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder} from 'angular2/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
    	<form [ngFormModel]="form">
        	<input 
        		id="search" 
        		type="text" 
        		class="form-control"
        		ngControl="search"
        		#search="ngForm">
        </form>
    `
})
export class AppComponent {
	form: ControlGroup;
    constructor(fb: FormBuilder){
    	this.form = fb.group({
    		search: []
    	});

   /* 	var search = this.form.find('search');
    	console.log(search);
    	search.valueChanges
    		.debounceTime(400)
    		//.map(str => str.replace(' ', '-'))
    		.subscribe((x) => {
    		console.log(x);
    	});*/

    	//observable from array
    	/*var arrObs = Observable.fromArray([1, 4, 6]);
    	arrObs.subscribe((x) => {
    		console.log(x);
    	});*/

    	//2-day window
    	/*var startDates = [];
    	var startDate = new Date();

    	for(var day = -2; day <= 2; day++){
    		var date = new Date(
    			startDate.getFullYear(),
    			startDate.getMonth(),
    			startDate.getDate() + day);
    		startDates.push(date);	
    	}	

    	Observable.fromArray(startDates)
    				.map(date => {
    					console.log('deals for date',date);
    					return [1, 2, 3];
    				})
    				.subscribe(x => console.log(x));*/

    	//different ways

    	/*var observable = Observable.of([1, 4, 7]);
    	console.log(observable);
    	observable.subscribe(x => console.log(x));*/

    	//creating an observable using interval method

/*    	var observable = Observable.interval(2000).take(7);
    	observable
    		.flatMap(x => {
    			console.log('calling server', x);
    			return Observable.of([1, 2, 3]);
    		})
    		.subscribe(x => console.log(x));*/	

    	//using forkJoin
    	
/*    	var userStream = Observable.of({
    		user: 'mad',
    		age: 23
    	}).delay(1000);

    	var tweetsStream = Observable.of([1, 2, 3]).delay(900);

    	Observable.forkJoin(userStream, tweetsStream)
    				// .map(joined => new Object({
    				// 	user: joined[0],
    				// 	tweet: joined[1]
    				// }))
    				.subscribe(res => console.log(res),
    					err => console.log(err));*/	

    	/*var observable = Observable.throw(new Error('error occured'));
    	observable.subscribe((x) => {
    		console.log(x);
    	}, 
    	(err) => console.log(err));*/	

    	/*var counter = 0;
    	var ajaxCall = Observable.of('url');
    	ajaxCall.flatMap(() => {
    		if(++counter > 2)
    			return Observable.throw(new Error('error occured'));
    		
    		
    		return Observable.of([1, 2, 3]);
    		
    	});	

    	ajaxCall
    		.retry(3)
    		.subscribe((x) => console.log(x),
    		err => console.log(err));*/

    	//using catch operator
    	
    	/*var remoteData = Observable.of([4, 5, 6]);
    	remoteData
    			.catch((err) => {
    				var localStream = Observable.of([1, 2, 3]);
    				return localStream;
    			})
    			.subscribe(x => console.log(x));*/

    	var stream = Observable.fromArray([1, 2, 3]).delay(3000);
    	stream
    		// .timeout(1000)
    		.subscribe((x) => {
    			console.log(x);
    		}, (err) => {
    			console.log(err);
    		});

    	var arrStream = Observable.throw(new Error('some error'));
    	arrStream
    			.catch((err) => Observable.of(err))//here we are returning an Observable created from 'err'
    			.subscribe(x => console.log(x), 
    				(err) => console.log(err),
    				(complete) => console.log('completed'));			
    }


}