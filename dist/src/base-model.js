"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this.validationRuleSets = new Array();
        this.validator = new _1.Validator();
    }
    BaseModel.prototype.addValidationRulesForField = function (fieldName, rules) {
        var _this = this;
        rules.forEach(function (rule) {
            _this.addValidationRuleForField(fieldName, rule);
        });
    };
    BaseModel.prototype.addValidationRuleForField = function (fieldName, rule) {
        var filteredRuleSets = this.validationRuleSets.filter(function (validationRuleSet) {
            validationRuleSet.fieldName === fieldName;
        });
        if (filteredRuleSets.length === 0) {
            this.validationRuleSets.push({
                fieldName: fieldName,
                rules: new Array()
            });
        }
        this.validationRuleSets.filter(function (validationRuleSet) { return validationRuleSet.fieldName === fieldName; })[0]
            .rules.push(rule);
    };
    BaseModel.prototype.validate = function () {
        return this.validator.validate(this, this.validationRuleSets);
    };
    BaseModel.prototype.isValid = function () {
        return this.validate().length === 0;
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
