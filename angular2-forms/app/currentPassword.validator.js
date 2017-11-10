System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var currentPasswordValidators;
    return {
        setters:[],
        execute: function() {
            currentPasswordValidators = (function () {
                function currentPasswordValidators() {
                }
                currentPasswordValidators.checkOldPassword = function (control) {
                    if (control.value != 1234) {
                        return { checkOldPassword: true };
                    }
                    else {
                        return null;
                    }
                };
                return currentPasswordValidators;
            }());
            exports_1("currentPasswordValidators", currentPasswordValidators);
        }
    }
});
//# sourceMappingURL=currentPassword.validator.js.map