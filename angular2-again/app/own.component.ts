import {Component} from 'angular2/core';
import {OwnService} from './own.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
	selector: 'own',
	template: `
		<h1>My own component</h1>
		<input type="text" autoGrow/>
		<p><strong>Name </strong>{{name}}</p>
		<p [textContent]="name"><strong>Name </strong></p>

		<ul>
			<li *ngFor="#hobby of hobbies">{{hobby}}</li>
		</ul>
		<button class="btn btn-primary" [class.active]="isActive">Click</button>
		<p [style.color]="isColor ? 'red' : 'blue'">style binding</p>
		<div (click)="onDivClick()">
		div here
			<button (click)="onClick($event)">Click Here</button>
		</div>
		<br><input type="text" [value]="nameHere" (click)="nameHere = $event.target.value"/>
		{{nameHere}}
		<button (click)="nameHere = ''">clear</button>
		<br/><strong>nameHere</strong>
		<input type="text" [(ngModel)]='nameHere'/>
		<span class="glyphicon glyphicon-heart"></span>
		`,
	providers: [OwnService],
	directives: [AutoGrowDirective]	
})

export class OwnComponent{ 
	isColor = false;
	isActive = true;
	name = "madhuri";
	nameHere = "someName";
	hobbies;
	onDivClick(){
		console.log('div click');
	}
	onClick($event){
		$event.stopPropagation();
		console.log('button click', $event);
	}

	constructor(ownService: OwnService){
		this.hobbies = ownService.getHobbies();
	}
}