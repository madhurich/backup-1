import {Component, Input} from 'angular2/core';

@Component({
	selector: 'contact',
	template: `
		<div>
			{{contact}}
		</div>
	`
	
})

export class ContactComponent{
	@Input() contact = null;
}

