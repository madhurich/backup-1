System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1;
    var SwitchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            SwitchComponent = (function () {
                function SwitchComponent() {
                    this.initialVal = false;
                    this.colorVal = true;
                    this.tab = 'about';
                    this.para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an \
	unknown printer took a galley of type and scrambled it to make a type specimen book. \
	It has survived not only five centuries, but also the leap into electronic typesetting, \
	remaining essentially unchanged.";
                    this.obj = {
                        name: 'mad',
                        fav: {
                            food: {
                                dish: 'vada'
                            }
                        }
                    };
                }
                SwitchComponent = __decorate([
                    core_1.Component({
                        selector: 'switch',
                        template: "\n\t\t<ul class=\"nav nav-pills\">\n\t\t\t<li (click)=\"tab = 'home'\" [class.active]='tab == \"home\"'><a href=\"#\">Home</a></li>\n\t\t\t<li (click)=\"tab = 'about'\" [class.active]='tab == \"about\"'><a href=\"#\">about</a></li>\n\n\t\t</ul>\n\t\t<div [ngSwitch]=\"tab\">\n\t\t\t<template [ngSwitchWhen]=\"'home'\">Home contnet</template>\n\t\t\t<template [ngSwitchWhen]=\"'about'\" ngSwitchDefault>About contnet</template>\n\t\t</div>\n\t\t<p>{{para | summary:5:7}}</p>\n\n\t\t<span class=\"glyphicon\" [ngClass]=\"{\n\t\t\t'glyphicon-star' : initialVal,\n\t\t\t'glyphicon-star-empty' : !initialVal\n\t\t}\" (click)='initialVal = !initialVal'></span>\n\n\t\t<h4>ngStyle</h4>\n\t\t<p [ngStyle]=\"{\n\t\t\tcolor: colorVal ? 'blue' : 'red',\n\t\t\t'backgroundColor' : colorVal ? 'deeppink' : 'orange'\n\t\t}\">text text text text text text text text text text text text</p>\n\t\t<p><strong>{{ obj.fav?.food?.dish}}</strong></p>\n\t",
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwitchComponent);
                return SwitchComponent;
            }());
            exports_1("SwitchComponent", SwitchComponent);
        }
    }
});
//# sourceMappingURL=switch.component.js.map