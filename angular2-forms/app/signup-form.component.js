System.register(['angular2/core', 'angular2/common', './username.validators'], function(exports_1, context_1) {
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
    var core_1, common_1, username_validators_1;
    var SignUp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (username_validators_1_1) {
                username_validators_1 = username_validators_1_1;
            }],
        execute: function() {
            SignUp = (function () {
                function SignUp(fb) {
                    this.form = fb.group({
                        username: ['',
                            common_1.Validators.compose([common_1.Validators.required,
                                username_validators_1.UsernameValidators.cannotContainSpace]),
                            username_validators_1.UsernameValidators.shouldBeUnique],
                        password: ['', common_1.Validators.required]
                    });
                }
                // form = new ControlGroup({
                // 	username: new Control('', Validators.required),
                // 	password: new Control('', Validators.required)
                // });
                SignUp.prototype.onSubmit = function () {
                    console.log(this.form);
                    this.form.find('username').setErrors({
                        invalidLogin: true
                    });
                };
                SignUp.prototype.onInputChange = function (username) {
                    console.log(username);
                };
                SignUp = __decorate([
                    core_1.Component({
                        selector: 'sign-up',
                        templateUrl: 'app/signup-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignUp);
                return SignUp;
            }());
            exports_1("SignUp", SignUp);
        }
    }
});
//# sourceMappingURL=signup-form.component.js.map