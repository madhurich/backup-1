import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';

@Component({
	selector: 'authors',
	template: `
		<h3>{{title}}</h3>
		<ul>
			<li *ngFor="#author of names">{{author}}</li>
		</ul>
	`,
	providers: [AuthorsService]

})

export class AuthorsComponent{
	title = 'authors';
	names;
	myFunc(){
		this.names = 'lfj';
	}

	constructor(authorsService: AuthorsService){
		this.names = authorsService.getAuthors();
	}

}