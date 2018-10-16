"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        src_1.minLength({
            minLength: 2,
            message: 'Firstname must have at least 2 characters'
        }),
        __metadata("design:type", String)
    ], User.prototype, "firstname", void 0);
    __decorate([
        src_1.minLength({
            minLength: 2,
            message: 'Lastname must have at least 2 characters'
        }),
        __metadata("design:type", String)
    ], User.prototype, "lastname", void 0);
    __decorate([
        src_1.email({
            message: 'Must be an email address'
        }),
        __metadata("design:type", String)
    ], User.prototype, "emailAddress", void 0);
    __decorate([
        src_1.site({
            message: 'Please enter a valid url'
        }),
        __metadata("design:type", String)
    ], User.prototype, "site", void 0);
    __decorate([
        src_1.between({
            minReference: 1,
            maxReference: 10,
            message: "Please express your happiness in a number between 1 and 10"
        }),
        __metadata("design:type", Number)
    ], User.prototype, "like", void 0);
    __decorate([
        src_1.min({
            reference: 18,
            message: 'You must be at least 18 years old'
        }),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    return User;
}());
exports.User = User;
