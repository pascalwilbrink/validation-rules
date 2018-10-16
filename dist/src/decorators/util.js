"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOrAddFieldRuleSet(target, key) {
    if (target.__validation_rule_sets__
        .filter(function (validationRuleSet) {
        validationRuleSet.fieldName === key;
    }).length === 0) {
        target.__validation_rule_sets__.push({
            fieldName: key,
            rules: new Array()
        });
    }
    return target.__validation_rule_sets__.filter(function (validationRuleSet) { return validationRuleSet.fieldName === key; })[0];
}
exports.getOrAddFieldRuleSet = getOrAddFieldRuleSet;
