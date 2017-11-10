System.register(['angular2/core', './tweet.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                TweetComponent.prototype.onLike = function ($event) {
                    //this.isActive = true;
                    this.id = $event.target.id;
                    if (!this.tweets[this.id].isActive) {
                        this.tweets[this.id].likes++;
                        this.tweets[this.id].isActive = true;
                    }
                    else {
                        this.tweets[this.id].isActive = false;
                        this.tweets[this.id].likes--;
                    }
                    console.log($event.target);
                };
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n\t<div *ngFor=\"#tweet of tweets\">\n\t\t<div class=\"media\">\n\t\t  <div class=\"media-left\">\n\t\t    <a href=\"#\">\n\t\t      <img class=\"media-object\" src=\"{{tweet.url}}\" alt=\"...\"/>\n\t\t    </a>\n\t\t  </div>\n\t\t  <div class=\"media-body\">\n\t\t    <h4 class=\"media-heading\">Media heading</h4>\n\t\t    <p>{{tweet.description}}</p>\n\t\t    <span id={{tweet.id}} class=\"glyphicon glyphicon-heart\" [class.addColor]=\"isActive\" (click)=\"onLike($event)\"></span>{{tweet.likes}}\n\t\t  </div>\n\t\t</div>\n\t</div>\n\t",
                        styles: ["\n\t\t.addColor: {\n\t\t\tcolor: deeppink;\n\t\t}\n\t"],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map