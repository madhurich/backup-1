/// <reference path="../typings/tsd.d.ts" />
System.register(["angular2/core", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Rx_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {/// <reference path="../typings/tsd.d.ts" />
            AppComponent = (function () {
                function AppComponent() {
                    var keyups = Rx_1.Observable.fromEvent($('input#search'), 'keyup')
                        .map(function (e) { return e.target.value; })
                        .filter(function (input) { return (input.length >= 3); })
                        .debounceTime(500)
                        .distinctUntilChanged()
                        .flatMap(function (input) {
                        var url = 'https://api.spotify.com/v1/search?type=artist&q=' + input;
                        var promise = $.getJSON(url);
                        return Rx_1.Observable.fromPromise(promise);
                    });
                    console.log(keyups);
                    keyups.subscribe(function (data) { return console.log(data); });
                    console.log(keyups);
                    // var url;
                    // var debounced = _.debounce(function(input){
                    // 	$.getJSON(url, function(data){
                    // 			console.log(data);
                    // 		});
                    // }, 400);
                    // $('input#search').keyup(function(e){
                    // 	var input = e.target.value;
                    // 	url = 'https://api.spotify.com/v1/search?type=artist&q=' + input;
                    // 	if(input.length >= 3){
                    // 		    debounced(input);			
                    // 	}else {
                    // 		return;
                    // 	}
                    // });
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\">\n    "
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map