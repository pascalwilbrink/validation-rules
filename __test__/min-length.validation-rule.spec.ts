import { Validator, ValidationRuleSet } from '../src/validator'
import { MinLengthValidationRule } from '../src/rules'

describe('Validator', () => {

    const validator = new Validator()

    test('It should return false on a short string', () => {
        const text = 'short string'

        const rule = new MinLengthValidationRule({
            minLength: 20
        });

        expect(rule.isValid(text)).toBeFalsy()
    })

    test('It should return true on a long string', () => {
        const text = 'long string'

        const rule = new MinLengthValidationRule({
            minLength: 2
        });

        expect(rule.isValid(text)).toBeTruthy()
    })

    test('It should work with the validator', () => {
        const obj = {
            foo: 'long string'
        };

        const rule = new MinLengthValidationRule({
            minLength: 2
        })

        const ruleSet: ValidationRuleSet[] = [
            {
                fieldName: 'foo',
                rules: [rule]
            }
        ]

        expect(validator.validate(obj, ruleSet).length).toBe(0)
    })
    
})