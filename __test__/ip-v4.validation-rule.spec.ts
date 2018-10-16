import { Validator, ValidationRuleSet } from '../src/validator'
import { IpV4ValidationRule } from '../src/rules'

describe('Validator', () => {

    const validator = new Validator()

    test('It should return false on a string', () => {
        const text = 'short string'

        const rule = new IpV4ValidationRule({})

        expect(rule.isValid(text)).toBeFalsy()
    })

    test('It should return true on valid ip', () => {
        const ip = '127.0.0.1'

        const rule = new IpV4ValidationRule({})


        expect(rule.isValid(ip)).toBeTruthy()
    })

    test('It should return false on invalid ip', () => {
        const ip = '256.0.0.1'

        const rule = new IpV4ValidationRule({})

        expect(rule.isValid(ip)).toBeFalsy()
    })

    test('It should work with the validator', () => {
        const obj = {
            ip: '192.168.1.1'
        };

        const rule = new IpV4ValidationRule({})

        const ruleSet: ValidationRuleSet[] = [
            {
                fieldName: 'ip',
                rules: [rule]
            }
        ]

        expect(validator.validate(obj, ruleSet).length).toBe(0)
    })
    
})