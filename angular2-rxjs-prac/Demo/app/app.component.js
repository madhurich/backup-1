/// <reference path="../typings/tsd.d.ts" />
System.register(["angular2/core", "angular2/common", "rxjs/add/operator/debounceTime", "rxjs/add/operator/map", "rxjs/Rx"], function (exports_1, context_1) {
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
    var core_1, common_1, Rx_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {/// <reference path="../typings/tsd.d.ts" />
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    /* 	var search = this.form.find('search');
                         console.log(search);
                         search.valueChanges
                             .debounceTime(400)
                             //.map(str => str.replace(' ', '-'))
                             .subscribe((x) => {
                             console.log(x);
                         });*/
                    //observable from array
                    /*var arrObs = Observable.fromArray([1, 4, 6]);
                    arrObs.subscribe((x) => {
                        console.log(x);
                    });*/
                    //2-day window
                    /*var startDates = [];
                    var startDate = new Date();
            
                    for(var day = -2; day <= 2; day++){
                        var date = new Date(
                            startDate.getFullYear(),
                            startDate.getMonth(),
                            startDate.getDate() + day);
                        startDates.push(date);
                    }
            
                    Observable.fromArray(startDates)
                                .map(date => {
                                    console.log('deals for date',date);
                                    return [1, 2, 3];
                                })
                                .subscribe(x => console.log(x));*/
                    //different ways
                    /*var observable = Observable.of([1, 4, 7]);
                    console.log(observable);
                    observable.subscribe(x => console.log(x));*/
                    //creating an observable using interval method
                    /*    	var observable = Observable.interval(2000).take(7);
                            observable
                                .flatMap(x => {
                                    console.log('calling server', x);
                                    return Observable.of([1, 2, 3]);
                                })
                                .subscribe(x => console.log(x));*/
                    //using forkJoin
                    /*    	var userStream = Observable.of({
                                user: 'mad',
                                age: 23
                            }).delay(1000);
                    
                            var tweetsStream = Observable.of([1, 2, 3]).delay(900);
                    
                            Observable.forkJoin(userStream, tweetsStream)
                                        // .map(joined => new Object({
                                        // 	user: joined[0],
                                        // 	tweet: joined[1]
                                        // }))
                                        .subscribe(res => console.log(res),
                                            err => console.log(err));*/
                    /*var observable = Observable.throw(new Error('error occured'));
                    observable.subscribe((x) => {
                        console.log(x);
                    },
                    (err) => console.log(err));*/
                    /*var counter = 0;
                    var ajaxCall = Observable.of('url');
                    ajaxCall.flatMap(() => {
                        if(++counter > 2)
                            return Observable.throw(new Error('error occured'));
                        
                        
                        return Observable.of([1, 2, 3]);
                        
                    });
            
                    ajaxCall
                        .retry(3)
                        .subscribe((x) => console.log(x),
                        err => console.log(err));*/
                    //using catch operator
                    /*var remoteData = Observable.of([4, 5, 6]);
                    remoteData
                            .catch((err) => {
                                var localStream = Observable.of([1, 2, 3]);
                                return localStream;
                            })
                            .subscribe(x => console.log(x));*/
                    var stream = Rx_1.Observable.fromArray([1, 2, 3]).delay(3000);
                    stream
                        .subscribe(function (x) {
                        console.log(x);
                    }, function (err) {
                        console.log(err);
                    });
                    var arrStream = Rx_1.Observable.throw(new Error('some error'));
                    arrStream
                        .catch(function (err) { return Rx_1.Observable.of(err); }) //here we are returning an Observable created from 'err'
                        .subscribe(function (x) { return console.log(x); }, function (err) { return console.log(err); }, function (complete) { return console.log('completed'); });
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n    \t<form [ngFormModel]=\"form\">\n        \t<input \n        \t\tid=\"search\" \n        \t\ttype=\"text\" \n        \t\tclass=\"form-control\"\n        \t\tngControl=\"search\"\n        \t\t#search=\"ngForm\">\n        </form>\n    "
                }),
                __metadata("design:paramtypes", [common_1.FormBuilder])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map