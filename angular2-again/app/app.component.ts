import {Component} from 'angular2/core';
import {OwnComponent} from './own.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {HeartComponent} from './heart.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1><own></own><authors></authors>
    <star [isActive]="post.isActive" (mad)="onChange($event)"></star>
	<heart></heart>
	<voter (change)="onChangeVote($event)"></voter>
    <tweet></tweet>
    `,
    directives: [OwnComponent, AuthorsComponent, StarComponent, HeartComponent, VoterComponent, TweetComponent]
})
export class AppComponent { 
	post = {
		isActive: true
	}
	onChange($event){
		console.log($event, 'event here');
	}
	onChangeVote($event){
		console.log($event);
	}
}