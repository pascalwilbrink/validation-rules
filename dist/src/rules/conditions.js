"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addRegex(value, regex) {
    return regex.test(value);
}
exports.addRegex = addRegex;
function addMaxLength(value, reference) {
    return value.length < reference;
}
exports.addMaxLength = addMaxLength;
function addMinLength(value, reference) {
    return value.length > reference;
}
exports.addMinLength = addMinLength;
function addIsLarger(value, ref) {
    return this.value > ref;
}
exports.addIsLarger = addIsLarger;
function addIsSmaller(value, ref) {
    return value < ref;
}
exports.addIsSmaller = addIsSmaller;
