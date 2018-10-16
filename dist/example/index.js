"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var company_1 = require("./company");
var src_1 = require("../src");
var user = new user_1.User();
user.firstname = 'John';
user.lastname = 'Doe';
user.emailAddress = 'john.doe@whoami.com';
user.age = 17;
user.site = 'http://iamlost.org@';
user.like = 20;
var validator = new src_1.AnnotationValidator();
var userConstraints = validator.validate(user);
userConstraints.forEach(function (constraint) {
    console.log("" + constraint.message);
});
var company = new company_1.Company();
company.name = 'Super awesome company';
company.numberOfEmployees = 20;
var companyConstraints = company.validate();
if (!company.isValid()) {
    companyConstraints.forEach(function (constraint) {
        console.log("" + constraint.message);
    });
}
