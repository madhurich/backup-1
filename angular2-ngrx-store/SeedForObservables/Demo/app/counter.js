System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function counterReducer(state, action) {
        if (state === void 0) { state = 0; }
        switch (action.type) {
            case INCREMENT:
                return state + 1;
            case DECREMENT:
                return state - 1;
            case RESET:
                return 0;
            default:
                return state;
        }
    }
    exports_1("counterReducer", counterReducer);
    var INCREMENT, DECREMENT, RESET;
    return {
        setters: [],
        execute: function () {
            exports_1("INCREMENT", INCREMENT = 'INCREMENT');
            exports_1("DECREMENT", DECREMENT = 'DECREMENT');
            exports_1("RESET", RESET = 'RESET');
        }
    };
});
//# sourceMappingURL=counter.js.map