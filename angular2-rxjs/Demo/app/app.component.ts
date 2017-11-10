/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor(){

    	var keyups = Observable.fromEvent($('input#search'), 'keyup')
    							.map(e => e.target.value)
    							.filter((input) => (input.length >= 3))
    							.debounceTime(500)
    							.distinctUntilChanged()
    							.flatMap((input) => {
    								var url = 'https://api.spotify.com/v1/search?type=artist&q=' + input;
    								var promise = $.getJSON(url);
    								return Observable.fromPromise(promise);
    							});
    	console.log(keyups);
    	keyups.subscribe(data => console.log(data));
    	console.log(keyups);
    	// var url;
    	// var debounced = _.debounce(function(input){
    	// 	$.getJSON(url, function(data){
	    // 			console.log(data);
	    // 		});
    	// }, 400);

    	// $('input#search').keyup(function(e){
    	// 	var input = e.target.value;
    	// 	url = 'https://api.spotify.com/v1/search?type=artist&q=' + input;

    	// 	if(input.length >= 3){
	    // 		    debounced(input);			
    	// 	}else {
    	// 		return;
    	// 	}

    	// });

    }
}