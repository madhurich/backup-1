import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';

@Component({
	selector: 'tweet',
	template: `
	<div *ngFor="#tweet of tweets">
		<div class="media">
		  <div class="media-left">
		    <a href="#">
		      <img class="media-object" src="{{tweet.url}}" alt="..."/>
		    </a>
		  </div>
		  <div class="media-body">
		    <h4 class="media-heading">Media heading</h4>
		    <p>{{tweet.description}}</p>
		    <span id={{tweet.id}} class="glyphicon glyphicon-heart" [class.addColor]="isActive" (click)="onLike($event)"></span>{{tweet.likes}}
		  </div>
		</div>
	</div>
	`,
	styles: [`
		.addColor: {
			color: deeppink;
		}
	`],
	providers: [TweetService]
})

export class TweetComponent{
	tweets;
	
	id;
	constructor(tweetService: TweetService){
		this.tweets = tweetService.getTweets();
	}
	onLike($event){
		//this.isActive = true;
		this.id = $event.target.id;
		if(!this.tweets[this.id].isActive){
			this.tweets[this.id].likes++;
			this.tweets[this.id].isActive = true;
		}else{
			this.tweets[this.id].isActive = false;
			this.tweets[this.id].likes--;
		}
		

		console.log($event.target);
	}
}