import {Component, Input} from 'angular2/core';

@Component({
	selector: 'zippy',
	template: `
		<div class="panel panel-default">
			<div class="panel-heading" (click)="toggle()">
				<ng-content select=".head"></ng-content>
				<span class="pull-right glyphicon" [ngClass]="{
					'glyphicon-chevron-down': unShow,
					'glyphicon-chevron-up': !unShow
				}"></span>
			</div>
			<div [hidden]="unShow" class="panel-body">
				<ng-content select=".body"></ng-content>
			</div>						
		</div>
	`,
	styles: [`
		div.panel-heading{
			cursor: pointer
		}
	`]
})

export class ZippyComponent{
	unShow = true;
	@Input() title : string;
	toggle(){
		this.unShow = !this.unShow;
	}
}