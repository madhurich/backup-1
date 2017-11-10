System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConfirmPassword;
    return {
        setters:[],
        execute: function() {
            ConfirmPassword = (function () {
                function ConfirmPassword() {
                }
                ConfirmPassword.matchPasswords = function (group) {
                    var newPassword = group.find('newPassword');
                    var confirmPassword = group.find('confirmPassword');
                    if (newPassword.value && confirmPassword.value) {
                        if (newPassword.value !== confirmPassword.value) {
                            return { matchPasswords: true };
                        }
                        else {
                            return null;
                        }
                    }
                };
                return ConfirmPassword;
            }());
            exports_1("ConfirmPassword", ConfirmPassword);
        }
    }
});
//# sourceMappingURL=confirmPassword.validators.js.map