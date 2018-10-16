import { Validator, ValidationRuleSet } from '../src/validator/validator'
import { ValidationRule, ValidationRuleParams } from '../src/rules'
import { ValidationConstraint } from '../src/validator/validation-constraint'

export interface DummyValidationRuleParams extends ValidationRuleParams {
    constant: string
}

export class DummyValidationRule extends ValidationRule<DummyValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return this.value === this.params.constant
        })
    }

}

describe('Validator', () => {

    const validator = new Validator()

    test('It should throw an error when the given object has no fieldname for a validation rule', () => {
        const dummyRule = new DummyValidationRule({
            constant: 'Foo'
        })

        const obj = {
            foo: 'bar'
        }
          
        const validationRuleSets = [
            {
                fieldName: 'foo2',
                rules: [dummyRule]
            }
        ];

        expect(() => validator.validate(obj, validationRuleSets)).toThrowError(`Given object has no property 'foo2' for validation rule`);
    });

    test('It should fail validation', () => {
        const dummyRule = new DummyValidationRule({
            constant: 'Foo',
            message: 'constant ${fieldName} should be equal to \'Foo\''
        });

        const obj = {
            foo: 'bar'
        }

        const validationRuleSets = [
            {
                fieldName: 'foo',
                rules: [dummyRule]
            }
        ];

        const result : ValidationConstraint[] = validator.validate(obj, validationRuleSets);

        expect(result.length).toEqual(1)
        expect(result[0].fieldName).toEqual('foo')
        expect(result[0].value).toEqual('bar')
        expect(result[0].message).toEqual('constant foo should be equal to \'Foo\'')
    });

    test('It should succeed validation', () => {
        const dummyRule = new DummyValidationRule({
            constant: 'Foo'
        });

        const obj = {
            foo: 'Foo'
        }

        const validationRuleSets = [
            {
                fieldName: 'foo',
                rules: [dummyRule]
            }
        ];
        
        expect(validator.validate(obj, validationRuleSets).length).toEqual(0);
    });

});

