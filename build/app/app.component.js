System.register(["@angular/core", "./xbridge.service"], function (exports_1, context_1) {
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
    var core_1, xbridge_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (xbridge_service_1_1) {
                xbridge_service_1 = xbridge_service_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(xbridge) {
                    this.xbridge = xbridge;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getLoungers();
                };
                AppComponent.prototype.getLoungers = function () {
                    this.xbridge.Get("Loungers")
                        .then(function (result) {
                        this.loungers = result;
                    }, function (reason) {
                        alert(reason);
                    })
                        .catch(function (reason) {
                        alert(reason);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        providers: [
                            xbridge_service_1.XBridge
                        ],
                        selector: 'my-app',
                        template: "<h1>One step for dave. A leap for mandem.</h1> \n        <p> Test cache busting again and again. sanity check </p> \n        <ul>\n            <li *ngFor=\"let lounger of loungers\"> \n            {{lounger.FirstName}} ( lounger.UserName )\n            </li>\n        </ul>\n    "
                    }),
                    __metadata("design:paramtypes", [xbridge_service_1.XBridge])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map