import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ArchivesComponent} from './archives.component';
import {ArchiveComponent} from './archive.component';


@RouteConfig([
	{path: '/', name: 'Archives', component: ArchivesComponent, useAsDefault: true},
	{path: '/archives/:year/:day', name: 'Archive', component: ArchiveComponent},
	{path: '/*other', name: 'Other', redirectTo: ['Archives']}
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
	
}