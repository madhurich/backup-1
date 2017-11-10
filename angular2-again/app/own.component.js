System.register(['angular2/core', './own.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, own_service_1, auto_grow_directive_1;
    var OwnComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (own_service_1_1) {
                own_service_1 = own_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            OwnComponent = (function () {
                function OwnComponent(ownService) {
                    this.isColor = false;
                    this.isActive = true;
                    this.name = "madhuri";
                    this.nameHere = "someName";
                    this.hobbies = ownService.getHobbies();
                }
                OwnComponent.prototype.onDivClick = function () {
                    console.log('div click');
                };
                OwnComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('button click', $event);
                };
                OwnComponent = __decorate([
                    core_1.Component({
                        selector: 'own',
                        template: "\n\t\t<h1>My own component</h1>\n\t\t<input type=\"text\" autoGrow/>\n\t\t<p><strong>Name </strong>{{name}}</p>\n\t\t<p [textContent]=\"name\"><strong>Name </strong></p>\n\n\t\t<ul>\n\t\t\t<li *ngFor=\"#hobby of hobbies\">{{hobby}}</li>\n\t\t</ul>\n\t\t<button class=\"btn btn-primary\" [class.active]=\"isActive\">Click</button>\n\t\t<p [style.color]=\"isColor ? 'red' : 'blue'\">style binding</p>\n\t\t<div (click)=\"onDivClick()\">\n\t\tdiv here\n\t\t\t<button (click)=\"onClick($event)\">Click Here</button>\n\t\t</div>\n\t\t<br><input type=\"text\" [value]=\"nameHere\" (click)=\"nameHere = $event.target.value\"/>\n\t\t{{nameHere}}\n\t\t<button (click)=\"nameHere = ''\">clear</button>\n\t\t<br/><strong>nameHere</strong>\n\t\t<input type=\"text\" [(ngModel)]='nameHere'/>\n\t\t<span class=\"glyphicon glyphicon-heart\"></span>\n\t\t",
                        providers: [own_service_1.OwnService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [own_service_1.OwnService])
                ], OwnComponent);
                return OwnComponent;
            }());
            exports_1("OwnComponent", OwnComponent);
        }
    }
});
//# sourceMappingURL=own.component.js.map