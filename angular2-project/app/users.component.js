System.register(['angular2/core', './getusersHere.service', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, getusersHere_service_1, http_1, router_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (getusersHere_service_1_1) {
                getusersHere_service_1 = getusersHere_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_getUsersService) {
                    var _this = this;
                    this._getUsersService = _getUsersService;
                    this.getAllUsers = function () {
                        _this._getUsersService.getUsers()
                            .subscribe(function (x) {
                            console.log(x);
                            _this.users = x;
                        });
                    };
                    this.deleteUser = function (id) {
                        alert(id);
                        _this._getUsersService.deleteUser(id)
                            .subscribe(function (x) {
                            console.log(x);
                            _this.getAllUsers();
                        }, function (err) {
                            console.log('error occured', err);
                        });
                    };
                }
                UsersComponent.prototype.ngOnInit = function () {
                    this.getAllUsers();
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: '/app/users.component.html',
                        providers: [getusersHere_service_1.GetUsersService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [getusersHere_service_1.GetUsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
/*
TWC, prototype react and redux, customized
jan -6 ,now 22, two front end developers, 6 full stack developers
PWC
*/ 
//# sourceMappingURL=users.component.js.map