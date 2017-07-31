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
        this.partners = [];
        this.partners = [];
    }
    RegisterCompanyComponent.prototype.addPartner = function (name, address) {
        var newPartner = { "name": name, "address": address };
        this.partners.push(newPartner);
        this.partneraddress = "";
        this.partnername = "";
        console.log(this.partners);
    };
    RegisterCompanyComponent.prototype.removePartner = function (partner) {
        var index = this.partners.indexOf(partner);
        this.partners.splice(index, 1);
    };
    RegisterCompanyComponent.prototype.saveDraft = function () {
        var _this = this;
        var company = {
            name: this.companyname,
            address: this.companyaddress,
            register: this.registernum,
            type: this.type
        };
        var auditor = {
            name: this.auditorname,
            address: this.auditoraddress
        };
        var manager = {
            name: this.managername,
            address: this.manageraddress
        };
        var partners = this.partners;
        var data = {
            company: company,
            partners: partners,
            auditor: auditor,
            manager: manager
        };
        this.companiesService.saveDraft(data).subscribe(function (res) {
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
    RegisterCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        var newCompany = {
            name: this.companyname,
            address: this.companyaddress,
            register: this.registernum,
            type: this.type
        };
        var newAuditor = {
            name: this.auditorname,
            address: this.auditoraddress
        };
        var newManager = {
            name: this.managername,
            address: this.manageraddress
        };
        var partners = this.partners;
        var data = {
            newCompany: newCompany,
            partners: partners,
            newAuditor: newAuditor,
            newManager: newManager
        };
        this.companiesService.addCompany(data).subscribe(function (res) {
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

module.exports = "\n<html dir=\"rtl\" lang=\"ar\">\n<div class=\"widgets\">\n\n        <flash-messages></flash-messages>\n\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n  \n  <div class=\"typography-document-samples\"style=\"display: block;\">\n    <div class=\" typography-widget\">\n      <!-- <form *ngIf=\"generate\" (submit)=\"onGenerate() \"> -->\n      <form (submit)=\"onSubmit() \" >\n      <div title=\"Register new company\" baCardClass=\"with-scroll heading-widget\">\n        \n        <div>\n            <h5>بيانات الشركة</h5>\n        </div> \n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"companyname\" name=\"companyname\" placeholder=\"الاسم\" class=\"form-control\" id=\"companyname\" required>\n        </div>\n         <br>\n\n         <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"companyaddress\" name=\"companyaddress\" placeholder=\"العنوان\" class=\"form-control\" id=\"companyaddress\" required>\n        </div>\n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"number\" [(ngModel)]=\"registernum\" name=\"registernum\" placeholder=\"رقم السجل\" class=\"form-control\" id=\"registernum\" required>\n        </div>\n        <br>\n\n        <div class=\"form-group\">\n          <label for=\"sel2\" >نوع الشركة</label>\n          <select class=\"form-control\" [(ngModel)]=\"type\" name=\"type\">\n            <option value=limited required>ذات مسئولية محدودة</option>\n            <option value=shareholding required>شركة مساهمة مصرية</option>\n          </select>\n        </div>\n        <hr>\n\n        <div>\n            <h5> بيانات المدير</h5>\n        </div> \n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"managername\" name=\"managername\" placeholder=\"الاسم\" class=\"form-control\" id=\"managername\" required>\n        </div>\n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"manageraddress\" name=\"manageraddress\" placeholder=\"العنوان\" class=\"form-control\" id=\"managername\" required>\n        </div>\n\n        <hr>\n\n        <div>\n            <h5>بيانات الشركاء</h5>\n        <!-- <button type=\"button\" (click)=\"partners.push({})\">+</button> -->\n        </div> \n\n\n        <table>\n            <tr *ngFor=\"let partner of partners; let i = index\" style=\"margin-bottom: 10px;\">\n              <td>{{i+1}}.</td> &nbsp; <td>{{partner.name}}، </td> &nbsp; <td>{{partner.address}} </td> &nbsp; <td><button type=\"button\" (click)=\"removePartner(partner)\" class=\"btn btn-danger btn-xs\">x</button></td>\n            </tr>\n        </table>\n        <br>\n        <div class=\"form-group\">\n        <input #name type=\"text\" [(ngModel)]=\"partnername\" name=\"partnername\" placeholder=\"الاسم\" class=\"form-control\" required/>\n        </div>\n        <br>\n        <div class=\"form-group\">\n        <input #address type=\"text\" [(ngModel)]=\"partneraddress\" name=\"partneraddress\" placeholder=\"العنوان\" class=\"form-control\" required/>\n        </div>\n        <br>\n        <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"addPartner(name.value,address.value)\" [disabled]=\"!partnername || !partneraddress\">إضافة شريك</button>\n        <br>\n        <hr>  \n\n\n        <!-- <div *ngFor=\"let partner of partners; let i=index\">\n\n            <h5>الشريك رقم  {{i+1}}</h5>\n\n        <button type=\"button\" (click)=\"partners.splice(i, 1)\" >x</button>\n          <div class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"partner.name\" name=\"partnername\" placeholder=\"الاسم\" class=\"form-control\" required>\n          </div>\n          <br>\n\n          <div class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"partner.address\" name=\"partneraddress\" placeholder=\"العنوان\" class=\"form-control\" required>\n          </div>\n\n          <hr>\n        </div> -->\n        <br>\n\n        <div>\n            <h5>بيانات المحاسب</h5>\n        </div> \n        <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"auditorname\" name=\"auditorname\" placeholder=\"الاسم\" class=\"form-control\" id=\"auditorname\" required>\n        </div>\n         <br>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"auditoraddress\" name=\"auditoraddress\" placeholder=\"العنوان\" class=\"form-control\" id=\"auditoraddress\" required>\n        </div>\n         <br>\n\n        <div style=\"text-align:center;\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveDraft()\">Save Draft</button>\n          <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\" [disabled] = \"!companyname || !companyaddress || !registernum || partners.length==0 || !managername || !auditorname\">\n        </div>\n\n      </div>\n      </form>\n      \n    </div>\n  </div>\n\n</div>\n</html>\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map