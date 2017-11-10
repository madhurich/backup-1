import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'archives',
	template: `
		<h1>Home Page</h1>
			<ul *ngFor="#archive of archives">
                <li><a [routerLink]="['Archive', {year: archive.split('/')[0], day: archive.split('/')[1]}]">{{archive}}</a></li>
            </ul>
	`,
	directives: [ROUTER_DIRECTIVES]
})

export class ArchivesComponent{
	archives = ['2017/1', '2017/2', '2017/3'];
}