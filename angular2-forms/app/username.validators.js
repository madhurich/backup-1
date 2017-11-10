System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.shouldBeUnique = function (control) {
                    var usernames = ['mad', 'man', 'dad'];
                    var count = 0;
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            for (var i = 0; i < usernames.length; i++) {
                                if (control.value == usernames[i]) {
                                    count++;
                                }
                            }
                            if (count) {
                                resolve({ shouldBeUnique: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 3000);
                    });
                };
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') != -1)
                        return { cannotContainSpace: true };
                    return null;
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=username.validators.js.map