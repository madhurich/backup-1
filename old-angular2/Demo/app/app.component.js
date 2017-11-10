/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Observable', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/filter', 'rxjs/add/operator/map', 'rxjs/add/observable/from', 'rxjs/add/observable/interval', 'rxjs/add/operator/mergeMap', 'rxjs/add/observable/of'], function(exports_1, context_1) {
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
    var core_1, Observable_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    var userStream = Observable_1.Observable.of({
                        userId: 1, username: 'mosh'
                    }).delay(2000);
                    var tweetsStream = Observable_1.Observable.of([1, 2, 3]).delay(1500);
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*var observable = Observable.interval(1000);
        observable.flatMap(x => {
            console.log("calling server to get latest news");
             return {Observable}.range (1,5);*/
//second set (1 - 3)
/*var startDates = [];
var startDate = new Date();
for (var day = -2; day <= 2; day++){
    var date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day);
    startDates.push(date);
}

Observable
    .from(startDates)
    .map(date =>{
     console.log("Getting the deals " + date)
     return [1,2,3];
    })
    .subscribe(x => console.log(x));*/
//first set of (1 - 5)
/*form: ControlGroup;
constructor(fb: FormBuilder){
    this.form = fb.group({
        search: []
    });

    var search = this.form.find('search')
          .valueChanges
          .debounceTime(400)
          .map(str => (<string>str).replace(' ', '-'));
          search.subscribe(x => console.log(x));*/
// console.log(new Observable());
/*var keyups = Observable.fromEvent($('#search'), 'keyup')
    .map(e => e.target.value)
    .filter(text => text.length>=3)
    .debounceTime(500)
    .distinctUntilChanged()
    .flatMap(searchTerm => {
        var url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm;
        var promise = $.getJSON(url);
        return Observable.fromPromise(promise);

    });

    var subscriptions = keyups.subscribe(data => console.log(data));
    subscriptions.unsubscribe();*/
/*var debounced = _.debounce(function(text){
var url = "https://api.spotify.com/v1/search?type=artist&q="+text;
$.getJSON(url, function(artists){
console.log(artists);
});
}, 400);

$('#search').keyup(function(e){
    var text = e.target.value;
    if(text.length < 3)
        return;
    debounced(text);

});*/
// }
//# sourceMappingURL=app.component.js.map