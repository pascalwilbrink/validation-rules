import { User } from './user'
import { Company } from './company'

import { AnnotationValidator } from '../src'

const user: User = new User()

user.firstname = 'John'
user.lastname = 'Doe'
user.emailAddress = 'john.doe@whoami.com'
user.age = 17
user.site = 'http://iamlost.org@'
user.like = 20

const validator = new AnnotationValidator()

const userConstraints = validator.validate(user)

userConstraints.forEach((constraint) => {
    console.log(`${constraint.message}`)
})

const company: Company = new Company()
company.name = 'Super awesome company'
company.numberOfEmployees = 20

const companyConstraints = company.validate()

if (!company.isValid()) {
    companyConstraints.forEach((constraint) => {
        console.log(`${constraint.message}`)
    })
}
