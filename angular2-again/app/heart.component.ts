import {Component} from 'angular2/core';

@Component({
	selector: 'heart',
	template:`
		<span class="glyphicon glyphicon-heart" [class.heartColor]="addColor" 
		[class.removeColor]="!addColor" (click)="onClick()"></span>{{count}}
	`,
	styles: [`
		.glyphicon-heart:hover{
			cursor: pointer;
		}
		.heartColor{
			color: deeppink;
		}
		.removeColor{
			color: gray;
		}
	`]
})

export class HeartComponent{
	count = 10;
	addColor = false;
	onClick(){
		this.addColor = !this.addColor;
		if(this.addColor){
			this.count++;
		}else{
			this.count--;
		}
	}
}