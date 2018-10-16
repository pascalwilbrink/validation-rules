"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.validate = function (obj, validationRuleSets) {
        if (!validationRuleSets) {
            throw new Error('No validationRules defined');
        }
        var validationConstraints = new Array();
        validationRuleSets.forEach(function (validationRuleSet) {
            if (!obj.hasOwnProperty(validationRuleSet.fieldName)) {
                throw new Error("Given object has no property '" + validationRuleSet.fieldName + "' for validation rule");
            }
            validationRuleSet.rules
                .forEach(function (rule) {
                if (!rule.isValid(obj[validationRuleSet.fieldName])) {
                    validationConstraints.push({
                        fieldName: validationRuleSet.fieldName,
                        message: rule.invalidMessage
                            .replace('${fieldName}', validationRuleSet.fieldName)
                            .replace('${value}', obj[validationRuleSet.fieldName]),
                        value: obj[validationRuleSet.fieldName]
                    });
                }
            });
        });
        return validationConstraints;
    };
    return Validator;
}());
exports.Validator = Validator;
