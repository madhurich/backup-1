import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';

@Component({
	selector: 'contact-list',
	template: `
		<ul>
			<li *ngFor="#name of contactList" (click)="onSelect(name)">{{name}}</li>
		</ul>
		<contact [contact]="selectedName"></contact>

	`,
	directives: [ContactComponent]
})

export class ContactListComponent{
	public contactList = ['sushma', 'dad', 'mom'];
	selectedName;
	onSelect(name){
		this.selectedName = name;
	}
}