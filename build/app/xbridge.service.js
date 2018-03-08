System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
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
    function getWindow() {
        return window;
    }
    var core_1, XBridge, XMessage, XResponse, XMessageType, XResultType;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            XBridge = (function () {
                //windowRef : Window ;
                function XBridge() {
                    this.NativeFunction = function (action, data, callback) {
                        var callbackId = window.nativeFuncs2.push(callback) - 1;
                        window.Native(action, JSON.stringify(data) + '!' + callbackId);
                    };
                    //this.windowRef = getWindow();
                }
                XBridge.prototype.Get = function (handler, params) {
                    var _this = this;
                    var request = {
                        HandlerName: handler,
                        ParamsObject: params,
                        paramsJSON: JSON.stringify(params),
                        Type: XMessageType.GET,
                        CallbackFunctionName: ''
                    };
                    var promise = new Promise(function (resolve, reject) {
                        _this.NativeFunction("XRequest", request, function (response) {
                            if (response.Success)
                                resolve(response.ResultObject);
                            else
                                reject(response.Result);
                        });
                    });
                    return promise;
                };
                XBridge.prototype.randId = function () {
                    return Math.random().toString(36).substr(2, 10);
                };
                XBridge = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [])
                ], XBridge);
                return XBridge;
            }());
            exports_1("XBridge", XBridge);
            //Move below to objects file and import
            XMessage = (function () {
                function XMessage() {
                }
                return XMessage;
            }());
            exports_1("XMessage", XMessage);
            XResponse = (function (_super) {
                __extends(XResponse, _super);
                function XResponse() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(XResponse.prototype, "ResultObject", {
                    get: function () {
                        return JSON.parse(this.Result);
                    },
                    set: function (obj) {
                        this.Result = JSON.stringify(obj);
                    },
                    enumerable: true,
                    configurable: true
                });
                return XResponse;
            }(XMessage));
            exports_1("XResponse", XResponse);
            (function (XMessageType) {
                XMessageType[XMessageType["GET"] = 1] = "GET";
                XMessageType[XMessageType["POST"] = 2] = "POST";
                XMessageType[XMessageType["SUBSCRIBE"] = 3] = "SUBSCRIBE";
                XMessageType[XMessageType["ACT"] = 4] = "ACT";
            })(XMessageType || (XMessageType = {}));
            exports_1("XMessageType", XMessageType);
            (function (XResultType) {
                XResultType[XResultType["TEXT"] = 1] = "TEXT";
                XResultType[XResultType["JSON"] = 2] = "JSON";
                XResultType[XResultType["STREAM"] = 3] = "STREAM";
            })(XResultType || (XResultType = {}));
            exports_1("XResultType", XResultType);
        }
    };
});
//# sourceMappingURL=xbridge.service.js.map