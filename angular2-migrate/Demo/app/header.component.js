System.register(["angular2/core", "./get-products.service", "angular2/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, get_products_service_1, http_1, HeaderComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (get_products_service_1_1) {
                get_products_service_1 = get_products_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            HeaderComponent = (function () {
                function HeaderComponent(getProducts) {
                    this.getProducts = getProducts;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    this.getProducts.getList()
                        .subscribe(function (x) { return console.log(x); });
                };
                return HeaderComponent;
            }());
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'header',
                    template: "\n\t\t<header class=\"hero\">\n\t\thello\n      \t<div class=\"hero-div\">\n      \t\t<div class=\"hero-img\"><img src=\"\"></div>\n      \t\t<div class=\"hero-body\">\n      \t\t\t<div class=\"hero-title\"></div>\n      \t\t\t<ul>\n      \t\t\t\t<li></li>\n      \t\t\t</ul>\n      \t\t</div>\n      \t\t<div class=\"hero-right\">\n      \t\t\t<div class=\"hero-price\"></div>\n      \t\t\t<button class=\"hero-add-to-cart\">ADD TO CART</button>\n      \t\t</div>\n      \t</div>\n      </header>\n\n\t",
                    providers: [get_products_service_1.GetProducts, http_1.HTTP_PROVIDERS]
                }),
                __metadata("design:paramtypes", [get_products_service_1.GetProducts])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    };
});
//# sourceMappingURL=header.component.js.map