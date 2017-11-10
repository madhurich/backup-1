import {Component} from 'angular2/core';

@Component({
	selector: 'date-picker',
	template: `
		<p *ngIf="date"><strong>{{date | date:'longDate'}}</strong></p>
		<button (click)='getDate()'>Date picker</button>
	`
})

export class DatePicker{
	date;
	getDate(){
		this.date = new Date();
		
	}
}