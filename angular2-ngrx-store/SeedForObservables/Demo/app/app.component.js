/// <reference path="../typings/tsd.d.ts" />
System.register(["angular2/core", "@ngrx/store", "./counter"], function (exports_1, context_1) {
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
    var core_1, store_1, counter_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (counter_1_1) {
                counter_1 = counter_1_1;
            }
        ],
        execute: function () {/// <reference path="../typings/tsd.d.ts" />
            AppComponent = (function () {
                function AppComponent(store) {
                    this.store = store;
                    this.counter = store.select('counter');
                }
                AppComponent.prototype.increment = function () {
                    this.store.dispatch({ type: counter_1.INCREMENT });
                };
                AppComponent.prototype.decrement = function () {
                    this.store.dispatch({ type: counter_1.DECREMENT });
                };
                AppComponent.prototype.reset = function () {
                    this.store.dispatch({ type: counter_1.RESET });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n      \t<button (click)=\"increment()\">Increment</button>\n\t\t<div>Current Count: {{ counter | async }}</div>\n\t\t<button (click)=\"decrement()\">Decrement</button>\n\n\t\t<button (click)=\"reset()\">Reset Counter</button>\n    "
                }),
                __metadata("design:paramtypes", [store_1.Store])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map