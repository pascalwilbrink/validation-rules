import { ValidationRule } from '../rules'
import { ValidationConstraint } from './validation-constraint'

export interface IValidator {

    validate(obj: any, validationRuleSets: Array<ValidationRuleSet>): ValidationConstraint[]
}

export interface ValidationRuleSet {
    rules: ValidationRule<any>[]
    fieldName: string
}

export class Validator implements IValidator {

    validate(obj: any, validationRuleSets: ValidationRuleSet[]): ValidationConstraint[] {
        if (!validationRuleSets) {
            throw new Error('No validationRules defined')
        }

        const validationConstraints: ValidationConstraint[] = new Array()

        validationRuleSets.forEach((validationRuleSet) => {
            if (!obj.hasOwnProperty(validationRuleSet.fieldName)) {
                throw new Error(`Given object has no property '${validationRuleSet.fieldName}' for validation rule`)
            }

            validationRuleSet.rules
                .forEach((rule) => {
                    if (!rule.isValid(obj[validationRuleSet.fieldName])) {
                        validationConstraints.push({
                            fieldName: validationRuleSet.fieldName,
                            message: rule.invalidMessage
                                .replace('${fieldName}', validationRuleSet.fieldName)
                                .replace('${value}', obj[validationRuleSet.fieldName]),
                            value: obj[validationRuleSet.fieldName]
                        })
                    }
                })
        })

        return validationConstraints;
    }
}
