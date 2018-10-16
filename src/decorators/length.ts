import { LengthValidationRule, LengthValidationRuleParams, ValidationRuleSet } from '..'

import { getOrAddFieldRuleSet } from './util'

export function length(params: LengthValidationRuleParams): PropertyDecorator {

    return (target: any, key: string): void => {
        if (!target.hasOwnProperty('__validation_rule_sets__')) {
            target.__validation_rule_sets__ = new Array<ValidationRuleSet>()
        }

        getOrAddFieldRuleSet(target, key)
            .rules
            .push(new LengthValidationRule(params))
    }

}
