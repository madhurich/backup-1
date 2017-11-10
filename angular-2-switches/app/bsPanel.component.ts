import {Component} from 'angular2/core';

@Component({
	selector: 'bs-panel',
	template: `
		<div class="panel panel-default">
			<div class="panel-heading">
				<ng-content select=".heading-here"></ng-content>
			</div>
			<div class="panel-body">
				<ng-content select=".body-here"></ng-content>
			</div>
		</div>
	`
})

export class BootstrapPanel{

}