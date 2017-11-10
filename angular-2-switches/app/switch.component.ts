import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';

@Component({
	selector: 'switch',
	template: `
		<ul class="nav nav-pills">
			<li (click)="tab = 'home'" [class.active]='tab == "home"'><a href="#">Home</a></li>
			<li (click)="tab = 'about'" [class.active]='tab == "about"'><a href="#">about</a></li>

		</ul>
		<div [ngSwitch]="tab">
			<template [ngSwitchWhen]="'home'">Home contnet</template>
			<template [ngSwitchWhen]="'about'" ngSwitchDefault>About contnet</template>
		</div>
		<p>{{para | summary:5:7}}</p>

		<span class="glyphicon" [ngClass]="{
			'glyphicon-star' : initialVal,
			'glyphicon-star-empty' : !initialVal
		}" (click)='initialVal = !initialVal'></span>

		<h4>ngStyle</h4>
		<p [ngStyle]="{
			color: colorVal ? 'blue' : 'red',
			'backgroundColor' : colorVal ? 'deeppink' : 'orange'
		}">text text text text text text text text text text text text</p>
		<p><strong>{{ obj.fav?.food?.dish}}</strong></p>
	`,
	pipes: [SummaryPipe]
})

export class SwitchComponent{
	initialVal = false;
	colorVal = true;
	tab = 'about';
	para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an \
	unknown printer took a galley of type and scrambled it to make a type specimen book. \
	It has survived not only five centuries, but also the leap into electronic typesetting, \
	remaining essentially unchanged.",
	obj = {
		name: 'mad',
		fav: {
			food: {
				dish: 'vada'
			}
		}
	};
}