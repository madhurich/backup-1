System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var newPasswordValidators;
    return {
        setters:[],
        execute: function() {
            newPasswordValidators = (function () {
                function newPasswordValidators() {
                }
                newPasswordValidators.checkNewPasswordLength = function (control) {
                    if (control.value.length <= 3) {
                        return { checkNewPasswordLength: 4 };
                    }
                    else {
                        return null;
                    }
                };
                return newPasswordValidators;
            }());
            exports_1("newPasswordValidators", newPasswordValidators);
        }
    }
});
//# sourceMappingURL=newPassword.validators.js.map