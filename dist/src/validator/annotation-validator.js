"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var AnnotationValidator = /** @class */ (function () {
    function AnnotationValidator() {
        this.validator = new _1.Validator();
    }
    AnnotationValidator.prototype.validate = function (obj) {
        return this.validator.validate(obj, Object.getPrototypeOf(obj).__validation_rule_sets__);
    };
    return AnnotationValidator;
}());
exports.AnnotationValidator = AnnotationValidator;
