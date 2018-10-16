import { ValidationRuleSet } from '..'

export function getOrAddFieldRuleSet(target: any, key: string): ValidationRuleSet {
    if (target.__validation_rule_sets__
        .filter((validationRuleSet: ValidationRuleSet) => {
            validationRuleSet.fieldName === key
        }).length === 0) {
            target.__validation_rule_sets__.push({
                fieldName: key,
                rules: new Array<ValidationRuleSet>()
            })
        }
    
    return target.__validation_rule_sets__.filter((validationRuleSet: ValidationRuleSet) => validationRuleSet.fieldName === key)[0]
}
