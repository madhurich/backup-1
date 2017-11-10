System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            url: 'http://lorempixel/100/100/people',
                            id: 0,
                            author: 'Windward',
                            handler: '@windwardstudios',
                            description: 'Looking for a better company reporting or docgen app?',
                            isActive: false,
                            likes: 0
                        },
                        {
                            url: 'http://lorempixel/100/140/people',
                            id: 1,
                            author: 'AngularJS News',
                            handler: '@angularjs_news',
                            description: 'Right Relevance: Influencers, Articles and Conversations',
                            isActive: false,
                            likes: 4
                        },
                        {
                            url: 'http://lorempixel/100/50/people',
                            id: 2,
                            author: 'UX & Bootstrap',
                            handler: '@3rdwave',
                            descritpion: '10 Reasons Why Web Projects Fail',
                            isActive: false,
                            likes: 0
                        },
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map