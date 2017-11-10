import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'voter',
	template: `
		<div>
			<span class="glyphicon glyphicon-menu-up" [class.addActive]="isActive" (click)="upVote()"></span>
			<span>{{voteCount}}</span>
			<span class="glyphicon glyphicon-menu-down" [class.addActive]="downActive" (click)="downVote()"></span>
		</div>
	`,
	styles: [`
		div{
			width: 20px;
		}
		.addActive{
			color: orange;
		}
		.glyphicon-menu-up, .glyphicon-menu-down{
			cursor: pointer;
		} 
	
	`]
})
export class VoterComponent {
	@Input() voteCount = 10;
	@Input() myVote = 0;
	isActive = false;
	downActive = false;
	@Output() change = new EventEmitter();
	upVote(){
		if(this.myVote === 0){
			this.myVote = 1;
			this.voteCount++;
			this.isActive = true;
			this.downActive = false;
			this.change.emit({newVal : this.voteCount});
		}else if(this.myVote === 1){
			this.voteCount = this.voteCount;
			this.isActive = true;
			this.downActive = false;
			this.change.emit({newVal : this.voteCount});
		}else if(this.myVote === -1){
			this.voteCount++;
			this.myVote = 0;
			this.isActive = false;
			this.downActive = false;
			this.change.emit({newVal : this.voteCount});
		}
	}

	downVote(){
		if(this.myVote === 1){
			this.myVote = 0;
			this.voteCount--;
			this.isActive = false;
			this.downActive = false;
			this.change.emit({newVal : this.voteCount});
		}else if(this.myVote === 0){
			this.voteCount--;
			this.myVote = -1;
			this.downActive = true;
			this.isActive = false;
			this.change.emit({newVal : this.voteCount});
		}else if(this.myVote === -1){
			this.voteCount = this.voteCount;
			this.downActive = true;
			this.isActive = false;
			this.change.emit({newVal : this.voteCount});
		}
	}
}