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
var PositiveValidationRule = /** @class */ (function (_super) {
    __extends(PositiveValidationRule, _super);
    function PositiveValidationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PositiveValidationRule.prototype.addConditions = function () {
        var _this = this;
        _super.prototype.addCondition.call(this, function () {
            return conditions_1.addIsLarger(_this.value, 0);
        });
    };
    return PositiveValidationRule;
}(validation_rule_1.ValidationRule));
exports.PositiveValidationRule = PositiveValidationRule;
