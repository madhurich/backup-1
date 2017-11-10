System.register(['angular2/core', 'angular2/common', './newPassword.validators', './confirmPassword.validators'], function(exports_1, context_1) {
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
    var core_1, common_1, newPassword_validators_1, confirmPassword_validators_1;
    var PasswordForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (newPassword_validators_1_1) {
                newPassword_validators_1 = newPassword_validators_1_1;
            },
            function (confirmPassword_validators_1_1) {
                confirmPassword_validators_1 = confirmPassword_validators_1_1;
            }],
        execute: function() {
            PasswordForm = (function () {
                function PasswordForm(fb) {
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.required],
                        newPassword: ['', common_1.Validators.compose([common_1.Validators.required,
                                newPassword_validators_1.newPasswordValidators.checkNewPasswordLength])],
                        confirmPassword: ['', common_1.Validators.required]
                    }, { validator: confirmPassword_validators_1.ConfirmPassword.matchPasswords });
                }
                PasswordForm.prototype.onSubmit = function () {
                    console.log(this.form.controls.currentPassword.value);
                    if (this.form.controls.currentPassword.value != 1234) {
                        this.form.find('currentPassword').setErrors({
                            checkOldPassword: true
                        });
                    }
                    else {
                        alert('password is successfully changed');
                    }
                };
                PasswordForm = __decorate([
                    core_1.Component({
                        selector: 'password-form',
                        templateUrl: 'app/password-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], PasswordForm);
                return PasswordForm;
            }());
            exports_1("PasswordForm", PasswordForm);
        }
    }
});
//# sourceMappingURL=password-form.component.js.map