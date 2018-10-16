import { Validator, ValidationRuleSet, ValidationRule, getOrAddFieldRuleSet } from '.'
import { ValidationConstraint } from './validator'

export abstract class BaseModel {

    private validationRuleSets: ValidationRuleSet[] = new Array<ValidationRuleSet>()
    private validator: Validator
    
    constructor() {
        this.validator = new Validator()
    }

    addValidationRulesForField(fieldName: string, rules: ValidationRule<any>[]) {
        rules.forEach((rule) => {
            this.addValidationRuleForField(fieldName, rule)
        })
    }

    addValidationRuleForField(fieldName: string, rule: ValidationRule<any>) {
        const filteredRuleSets = this.validationRuleSets.filter((validationRuleSet: ValidationRuleSet) => {
            validationRuleSet.fieldName === fieldName
        })

        if (filteredRuleSets.length === 0) {
            this.validationRuleSets.push({
                fieldName: fieldName,
                rules: new Array()
            })
        }

        this.validationRuleSets.filter((validationRuleSet: ValidationRuleSet) => validationRuleSet.fieldName === fieldName)[0]
            .rules.push(rule)
    }

    validate(): ValidationConstraint[] {
        return this.validator.validate(this, this.validationRuleSets)
    }

    isValid(): boolean {
        return this.validate().length === 0
    }
}  