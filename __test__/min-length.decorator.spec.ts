import 'reflect-metadata'

import { minLength } from '../src/decorators/min-length'

class Person {

    @minLength({
        minLength: 5,
        message: '${fieldName} must have a minimum of 5 characters'
    })
    firstname: string
   
}

describe('Validator', () => {

    test('It should return false on a short string', () => {
        const person: Person = new Person()
        person.firstname = 'Jane'

        expect(Object.getPrototypeOf(person).__validation_rule_sets__.length).toBe(1)
        expect(Object.getPrototypeOf(person).__validation_rule_sets__[0].fieldName).toBe('firstname')
        expect(Object.getPrototypeOf(person).__validation_rule_sets__[0].rules.length).toBe(1)
        expect(Object.getPrototypeOf(person).__validation_rule_sets__[0].rules[0].params.minLength).toBe(5)
    })

})