"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var util_1 = require("./util");
function ipV6(params) {
    return function (target, key) {
        if (!target.hasOwnProperty('__validation_rule_sets__')) {
            target.__validation_rule_sets__ = new Array();
        }
        util_1.getOrAddFieldRuleSet(target, key)
            .rules
            .push(new __1.IpV6ValidationRule(params));
    };
}
exports.ipV6 = ipV6;
