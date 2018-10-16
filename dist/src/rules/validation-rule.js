"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationRule = /** @class */ (function () {
    function ValidationRule(params) {
        this.conditions = new Array();
        this._invalidMessage = 'Invalid field ${fieldName}';
        this.params = params;
        if (params) {
            this.params = params;
            if (this.params.message) {
                this._invalidMessage = this.params.message;
            }
        }
        this.addConditions();
    }
    Object.defineProperty(ValidationRule.prototype, "invalidMessage", {
        get: function () {
            return this._invalidMessage;
        },
        enumerable: true,
        configurable: true
    });
    ValidationRule.prototype.addCondition = function (condition) {
        this.conditions.push(condition);
    };
    ValidationRule.prototype.isValid = function (value) {
        this.value = value;
        var _isValid = true;
        this.conditions.forEach(function (condition) {
            if (!condition()) {
                _isValid = false;
                return;
            }
        });
        return _isValid;
    };
    return ValidationRule;
}());
exports.ValidationRule = ValidationRule;
