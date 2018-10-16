"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_model_1 = require("../src/base-model");
var src_1 = require("../src");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        var _this = _super.call(this) || this;
        _super.prototype.addValidationRulesForField.call(_this, 'numberOfEmployees', [
            new src_1.MinValidationRule({ reference: 50, message: 'The company must have at least 50 employees' })
        ]);
        _super.prototype.addValidationRuleForField.call(_this, 'name', new src_1.MinLengthValidationRule({ minLength: 5 }));
        return _this;
    }
    return Company;
}(base_model_1.BaseModel));
exports.Company = Company;
