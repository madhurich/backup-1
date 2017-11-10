System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent() {
                    this.courses = ['course1', 'course2', 'course3'];
                    this.allTypes = {
                        name: 'mad',
                        amt: 5000,
                        people: 54.7,
                        date: new Date(),
                        data: {
                            id: 1,
                            name: 'xyz',
                            people: ['dad', 'mom', 'man']
                        }
                    };
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n\t<div *ngIf=\"courses.length > 0\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"#course of courses\">{{course}}</li>\n\t\t</ul>\n\t</div>\n\t<div *ngIf=\"courses.length == 0\">\n\t\t<p>Not yet</p>\n\t</div>\n\n\t<h3>Using hidden</h3>\n\t<div [hidden]=\"courses.length == 0\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"#course of courses\">{{course}}</li>\n\t\t</ul>\n\t</div>\n\t<div [hidden]=\"courses.length > 0\">\n\t\t<p>Not yet</p>\n\t</div>\t\n\t<h4>Leading asteric</h4>\n\t<ul>\n\t\t<template ngFor [ngForOf]='courses' #course #i=index>\n\t\t\t<li>{{course}}</li>\n\t\t</template>\n\t</ul>\n\t<hr>\n\t<h4>Use of pipes</h4>\n\t<ul>\n\t\t<li>{{allTypes.name}}</li>\n\t\t<li>{{allTypes.amt | currency:'INR':true:'2.3-3'}}</li>\n\t\t<li>{{allTypes.people | number:'3.2-3'}}</li>\n\t\t<li>{{allTypes.date | date:'MMM yyyy'}}</li>\n\t\t<li>{{allTypes.data | json}}</li>\n\t</ul>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map