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
var validation_rule_1 = require("./validation-rule");
var conditions_1 = require("./conditions");
var MinLengthValidationRule = /** @class */ (function (_super) {
    __extends(MinLengthValidationRule, _super);
    function MinLengthValidationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinLengthValidationRule.prototype.addConditions = function () {
        var _this = this;
        _super.prototype.addCondition.call(this, function () {
            return conditions_1.addMinLength(_this.value, _this.params.minLength);
        });
    };
    return MinLengthValidationRule;
}(validation_rule_1.ValidationRule));
exports.MinLengthValidationRule = MinLengthValidationRule;
