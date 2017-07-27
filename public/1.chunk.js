webpackJsonp([1],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompanyModule", function() { return RegisterCompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registercompany_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registercompany_routing__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterCompanyModule = (function () {
    function RegisterCompanyModule() {
    }
    return RegisterCompanyModule;
}());
RegisterCompanyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__registercompany_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__registercompany_component__["a" /* RegisterCompanyComponent */]
        ]
    })
], RegisterCompanyModule);

//# sourceMappingURL=registercompany.module.js.map

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FlashMessagesService = (function () {
    function FlashMessagesService() {
    }
    return FlashMessagesService;
}());
FlashMessagesService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FlashMessagesService.ctorParameters = function () { return []; };
exports.FlashMessagesService = FlashMessagesService;
//# sourceMappingURL=flash-messages.service.js.map

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(636));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FlashMessage = (function () {
    function FlashMessage(text, cssClass) {
        this.id = (FlashMessage.nextId++);
        this.text = 'default text';
        this.cssClass = '';
        this.text = text;
        this.cssClass = cssClass;
    }
    return FlashMessage;
}());
FlashMessage.nextId = 0;
exports.FlashMessage = FlashMessage;
//# sourceMappingURL=flash-message.js.map

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var flash_message_1 = __webpack_require__(634);
var flash_messages_service_1 = __webpack_require__(626);
var FlashMessagesComponent = (function () {
    function FlashMessagesComponent(_flashMessagesService, _cdRef) {
        this._flashMessagesService = _flashMessagesService;
        this._cdRef = _cdRef;
        this._defaults = {
            text: 'default message',
            cssClass: ''
        };
        this.messages = [];
        this.classes = '';
        this._grayOut = false;
        this._flashMessagesService.show = this.show.bind(this);
        this._flashMessagesService.grayOut = this.grayOut.bind(this);
    }
    FlashMessagesComponent.prototype.ngOnInit = function () { };
    FlashMessagesComponent.prototype.show = function (text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var defaults = {
            timeout: 2500,
            cssClass: ''
        };
        for (var attrname in options) {
            defaults[attrname] = options[attrname];
        }
        var message = new flash_message_1.FlashMessage(text, defaults.cssClass);
        this.messages.push(message);
        this._cdRef.detectChanges();
        window.setTimeout(function () {
            _this._remove(message);
            _this._cdRef.detectChanges();
        }, defaults.timeout);
    };
    FlashMessagesComponent.prototype.grayOut = function (value) {
        if (value === void 0) { value = false; }
        this._grayOut = value;
    };
    FlashMessagesComponent.prototype._remove = function (message) {
        this.messages = this.messages.filter(function (msg) { return msg.id !== message.id; });
    };
    return FlashMessagesComponent;
}());
FlashMessagesComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'flash-messages',
                template: "\n      <div id=\"flashMessages\" class=\"flash-messages {{classes}}\">\n          <div id=\"grayOutDiv\" *ngIf='_grayOut && messages.length'></div>\n          <div class=\"alert flash-message {{message.cssClass}}\" *ngFor='let message of messages'>\n              <p>{{message.text}}</p>\n          </div> \n      </div>\n  "
            },] },
];
/** @nocollapse */
FlashMessagesComponent.ctorParameters = function () { return [
    { type: flash_messages_service_1.FlashMessagesService, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.FlashMessagesComponent = FlashMessagesComponent;
//# sourceMappingURL=flash-messages.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = __webpack_require__(637);
exports.FlashMessagesModule = module_1.FlashMessagesModule;
var flash_messages_service_1 = __webpack_require__(626);
exports.FlashMessagesService = flash_messages_service_1.FlashMessagesService;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(7);
var flash_messages_component_1 = __webpack_require__(635);
var flash_messages_service_1 = __webpack_require__(626);
var FlashMessagesModule = (function () {
    function FlashMessagesModule() {
    }
    return FlashMessagesModule;
}());
FlashMessagesModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [flash_messages_component_1.FlashMessagesComponent],
                exports: [flash_messages_component_1.FlashMessagesComponent],
                providers: [flash_messages_service_1.FlashMessagesService]
            },] },
];
/** @nocollapse */
FlashMessagesModule.ctorParameters = function () { return []; };
exports.FlashMessagesModule = FlashMessagesModule;
//# sourceMappingURL=module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_companies_service__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterCompanyComponent = (function () {
    function RegisterCompanyComponent(http, router, companiesService, flashMessage) {
        this.http = http;
        this.router = router;
        this.companiesService = companiesService;
        this.flashMessage = flashMessage;
    }
    RegisterCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        var newCompany = {
            name: this.companyname,
            address: this.companyaddress,
            register: this.registernum
        };
        var newPartner = {
            name: this.partnername
        };
        var newAuditor = {
            name: this.auditorname
        };
        var newManager = {
            name: this.managername
        };
        var body = {
            newCompany: newCompany,
            newPartner: newPartner,
            newAuditor: newAuditor,
            newManager: newManager
        };
        this.companiesService.addCompany(body).subscribe(function (res) {
            console.log(res);
            if (res.error) {
                window.scrollTo(0, 0);
                _this.flashMessage.show(res.error.msg, { cssClass: 'alert-danger', timeout: 4000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 4000 });
            }
        });
    };
    return RegisterCompanyComponent;
}());
RegisterCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'registercompany',
        template: __webpack_require__(664),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_companies_service__["a" /* CompaniesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterCompanyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=registercompany.component.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registercompany_component__ = __webpack_require__(642);


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__registercompany_component__["a" /* RegisterCompanyComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=registercompany.routing.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n\n        <flash-messages></flash-messages>\n\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n  \n  <div class=\"typography-document-samples\"style=\"display: block;\">\n    <div class=\" typography-widget\">\n      <!-- <form *ngIf=\"generate\" (submit)=\"onGenerate() \"> -->\n      <form (submit)=\"onSubmit() \" >\n      <div title=\"Register new company\" baCardClass=\"with-scroll heading-widget\">\n        \n        <div>\n            <h5>Company details</h5>\n        </div> \n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"companyname\" name=\"companyname\" placeholder=\"Company Name\" class=\"form-control\" id=\"companyname\" required>\n        </div>\n         <br>\n\n         <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"companyaddress\" name=\"companyaddress\" placeholder=\"Company Address\" class=\"form-control\" id=\"companyaddress\" required>\n        </div>\n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"number\" [(ngModel)]=\"registernum\" name=\"registernum\" placeholder=\"Company Register No.\" class=\"form-control\" id=\"registernum\" required>\n        </div>\n        \n        <hr>\n\n        <div>\n            <h5>Manager details</h5>\n        </div> \n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"managername\" name=\"managername\" placeholder=\"Manager Name\" class=\"form-control\" id=\"managername\" required>\n        </div>\n\n        <hr>\n\n        <div>\n            <h5>Partner details</h5>\n        </div> \n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"partnername\" name=\"partnername\" placeholder=\"Partner Name\" class=\"form-control\" id=\"partnername\" required>\n        </div>\n\n        <hr>\n\n        <div>\n            <h5>Auditor details</h5>\n        </div> \n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"auditorname\" name=\"auditorname\" placeholder=\"Auditor Name\" class=\"form-control\" id=\"auditorname\" required>\n        </div>\n         <br>\n         \n\n        <div style=\"text-align:center;\">\n          <input type=\"submit\" class=\"btn btn-success btn-raised center\" style=\"position: absolute; bottom:10px; margin: 0 auto;\" value=\"Submit\" [disabled] = \"!companyname || !companyaddress || !registernum || !partnername || !managername || !auditorname\">\n        </div>\n\n      </div>\n      </form>\n      \n    </div>\n  </div>\n\n</div>\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map