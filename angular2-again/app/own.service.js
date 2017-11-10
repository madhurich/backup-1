System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OwnService;
    return {
        setters:[],
        execute: function() {
            OwnService = (function () {
                function OwnService() {
                }
                OwnService.prototype.getHobbies = function () {
                    return ['singing', 'having fun', 'music'];
                };
                return OwnService;
            }());
            exports_1("OwnService", OwnService);
        }
    }
});
//# sourceMappingURL=own.service.js.map