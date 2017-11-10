/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import {ControlGroup, FormBuilder} from 'angular2/common';


@Component({
    selector: 'my-app',
    template: `
      
    `
     /*<form [ngFormModel]='form'>
       		<input type="text" ngControl="search">
       </form>*/
})
export class AppComponent {
	constructor(){
		var userStream = Observable.of({
			userId: 1, username: 'mosh'
		}).delay(2000);

		var tweetsStream = Observable.of([1, 2, 3]).delay(1500);
		}
	}
/*var observable = Observable.interval(1000);
		observable.flatMap(x => {
			console.log("calling server to get latest news");
			 return {Observable}.range (1,5);*/

		//second set (1 - 3)
		/*var startDates = [];
		var startDate = new Date();
		for (var day = -2; day <= 2; day++){
			var date = new Date(
				startDate.getFullYear(),
				startDate.getMonth(),
				startDate.getDate() + day);
			startDates.push(date);
		}

		Observable
			.from(startDates)
			.map(date =>{
			 console.log("Getting the deals " + date)
			 return [1,2,3];
			})
			.subscribe(x => console.log(x));*/
	
	//first set of (1 - 5)
	/*form: ControlGroup;
    constructor(fb: FormBuilder){
    	this.form = fb.group({
    		search: []
    	});

    	var search = this.form.find('search')
    	      .valueChanges
    		  .debounceTime(400)
    		  .map(str => (<string>str).replace(' ', '-'));
    	      search.subscribe(x => console.log(x));*/

    	// console.log(new Observable());
    	/*var keyups = Observable.fromEvent($('#search'), 'keyup')
			.map(e => e.target.value)
			.filter(text => text.length>=3)
			.debounceTime(500)
			.distinctUntilChanged()
			.flatMap(searchTerm => {
				var url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm;
				var promise = $.getJSON(url);
				return Observable.fromPromise(promise);

			});

			var subscriptions = keyups.subscribe(data => console.log(data));
			subscriptions.unsubscribe();*/

		/*var debounced = _.debounce(function(text){
	var url = "https://api.spotify.com/v1/search?type=artist&q="+text;
	$.getJSON(url, function(artists){
		console.log(artists);
	});
}, 400);

    	$('#search').keyup(function(e){
    		var text = e.target.value;
    		if(text.length < 3)
    			return;
    		debounced(text);

    	});*/
   // }
