import {Component} from 'angular2/core';

@Component({
	selector: 'courses',
	template: `
	<div *ngIf="courses.length > 0">
		<ul>
			<li *ngFor="#course of courses">{{course}}</li>
		</ul>
	</div>
	<div *ngIf="courses.length == 0">
		<p>Not yet</p>
	</div>

	<h3>Using hidden</h3>
	<div [hidden]="courses.length == 0">
		<ul>
			<li *ngFor="#course of courses">{{course}}</li>
		</ul>
	</div>
	<div [hidden]="courses.length > 0">
		<p>Not yet</p>
	</div>	
	<h4>Leading asteric</h4>
	<ul>
		<template ngFor [ngForOf]='courses' #course #i=index>
			<li>{{course}}</li>
		</template>
	</ul>
	<hr>
	<h4>Use of pipes</h4>
	<ul>
		<li>{{allTypes.name}}</li>
		<li>{{allTypes.amt | currency:'INR':true:'2.3-3'}}</li>
		<li>{{allTypes.people | number:'3.2-3'}}</li>
		<li>{{allTypes.date | date:'MMM yyyy'}}</li>
		<li>{{allTypes.data | json}}</li>
	</ul>
	`
})

export class CoursesComponent{
	courses = ['course1', 'course2', 'course3'];
	allTypes = {
		name: 'mad',
		amt: 5000,
		people: 54.7,
		date: new Date(),
		data: {
			id: 1,
			name: 'xyz',
			people: ['dad', 'mom', 'man']
		}
	}
}