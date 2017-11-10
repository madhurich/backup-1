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
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.voteCount = 10;
                    this.myVote = 0;
                    this.isActive = false;
                    this.downActive = false;
                    this.change = new core_1.EventEmitter();
                }
                VoterComponent.prototype.upVote = function () {
                    if (this.myVote === 0) {
                        this.myVote = 1;
                        this.voteCount++;
                        this.isActive = true;
                        this.downActive = false;
                        this.change.emit({ newVal: this.voteCount });
                    }
                    else if (this.myVote === 1) {
                        this.voteCount = this.voteCount;
                        this.isActive = true;
                        this.downActive = false;
                        this.change.emit({ newVal: this.voteCount });
                    }
                    else if (this.myVote === -1) {
                        this.voteCount++;
                        this.myVote = 0;
                        this.isActive = false;
                        this.downActive = false;
                        this.change.emit({ newVal: this.voteCount });
                    }
                };
                VoterComponent.prototype.downVote = function () {
                    if (this.myVote === 1) {
                        this.myVote = 0;
                        this.voteCount--;
                        this.isActive = false;
                        this.downActive = false;
                        this.change.emit({ newVal: this.voteCount });
                    }
                    else if (this.myVote === 0) {
                        this.voteCount--;
                        this.myVote = -1;
                        this.downActive = true;
                        this.isActive = false;
                        this.change.emit({ newVal: this.voteCount });
                    }
                    else if (this.myVote === -1) {
                        this.voteCount = this.voteCount;
                        this.downActive = true;
                        this.isActive = false;
                        this.change.emit({ newVal: this.voteCount });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "change", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n\t\t<div>\n\t\t\t<span class=\"glyphicon glyphicon-menu-up\" [class.addActive]=\"isActive\" (click)=\"upVote()\"></span>\n\t\t\t<span>{{voteCount}}</span>\n\t\t\t<span class=\"glyphicon glyphicon-menu-down\" [class.addActive]=\"downActive\" (click)=\"downVote()\"></span>\n\t\t</div>\n\t",
                        styles: ["\n\t\tdiv{\n\t\t\twidth: 20px;\n\t\t}\n\t\t.addActive{\n\t\t\tcolor: orange;\n\t\t}\n\t\t.glyphicon-menu-up, .glyphicon-menu-down{\n\t\t\tcursor: pointer;\n\t\t} \n\t\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map