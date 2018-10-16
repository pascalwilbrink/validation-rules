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
var SiteValidationRule = /** @class */ (function (_super) {
    __extends(SiteValidationRule, _super);
    function SiteValidationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SiteValidationRule.prototype.addConditions = function () {
        var _this = this;
        _super.prototype.addCondition.call(this, function () {
            return conditions_1.addRegex(_this.value, /^^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
        });
    };
    return SiteValidationRule;
}(validation_rule_1.ValidationRule));
exports.SiteValidationRule = SiteValidationRule;
