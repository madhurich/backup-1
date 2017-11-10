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
    var ZippySolComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippySolComponent = (function () {
                function ZippySolComponent() {
                    this.unShow = true;
                }
                ZippySolComponent.prototype.toggle = function () {
                    this.unShow = !this.unShow;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippySolComponent.prototype, "title", void 0);
                ZippySolComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy-sol',
                        template: "\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\" (click)=\"toggle()\">\n\t\t\t\t{{title}}\n\t\t\t\t<span class=\"pull-right glyphicon\" [ngClass]=\"{\n\t\t\t\t\t'glyphicon-chevron-down': unShow,\n\t\t\t\t\t'glyphicon-chevron-up': !unShow\n\t\t\t\t}\"></span>\n\t\t\t</div>\n\t\t\t<div [hidden]=\"unShow\" class=\"panel-body\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\t\t\t\t\t\t\n\t\t</div>\n\t",
                        styles: ["\n\t\tdiv.panel-heading{\n\t\t\tcursor: pointer\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippySolComponent);
                return ZippySolComponent;
            }());
            exports_1("ZippySolComponent", ZippySolComponent);
        }
    }
});
//# sourceMappingURL=zippySol.component.js.map