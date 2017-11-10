System.register(['angular2/core', './courses.component', './switch.component', './bsPanel.component', './zippy.component', './zippySol.component', './date.component', './contact-list.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, switch_component_1, bsPanel_component_1, zippy_component_1, zippySol_component_1, date_component_1, contact_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (switch_component_1_1) {
                switch_component_1 = switch_component_1_1;
            },
            function (bsPanel_component_1_1) {
                bsPanel_component_1 = bsPanel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (zippySol_component_1_1) {
                zippySol_component_1 = zippySol_component_1_1;
            },
            function (date_component_1_1) {
                date_component_1 = date_component_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<h1>My First Angular 2 App</h1>\n        <hr>\n         <contact-list></contact-list>\n        <hr>\n        <date-picker></date-picker>\n    \t<hr>\n    \t<zippy>\n            <div class=\"head\">head1</div>\n            <div class=\"body\">body1</div>\n        </zippy>\n        <zippy>\n            <div class=\"head\">head2</div>\n            <div class=\"body\">body2</div>\n        </zippy> \n        <zippy-sol title=\"title 1\">\n            body1 of title1\n        </zippy-sol>       \n    \t<hr>\n        <date-picker></date-picker>\n\t\t<bs-panel>\n\t\t\t<div class=\"heading-here\">heading over here</div>\n\t\t\t<div class=\"body-here\">body over here</div>\n\t\t</bs-panel>\n\t\t<courses></courses>\n\t\t<switch></switch>\n\n    \t",
                        directives: [courses_component_1.CoursesComponent, switch_component_1.SwitchComponent, bsPanel_component_1.BootstrapPanel, zippy_component_1.ZippyComponent,
                            zippySol_component_1.ZippySolComponent, date_component_1.DatePicker, contact_list_component_1.ContactListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map