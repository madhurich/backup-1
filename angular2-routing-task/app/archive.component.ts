import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'archive',
	template: `
		<h1>Archives</h1>
			<h3>{{year + '/' + day}}</h3>
	`
})

export class ArchiveComponent implements OnInit{
	year;
	day;
	constructor(private _routeParams: RouteParams){
		
	}

	ngOnInit(){
		this.year = this._routeParams.get('year');
		this.day = this._routeParams.get('day');
	}


}