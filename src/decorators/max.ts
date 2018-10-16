import { MaxValidationRule, MaxValidationRuleParams, ValidationRuleSet } from '..'

import { getOrAddFieldRuleSet } from './util'

export function max(params: MaxValidationRuleParams): PropertyDecorator {

    return (target: any, key: string): void => {
        if (!target.hasOwnProperty('__validation_rule_sets__')) {
            target.__validation_rule_sets__ = new Array<ValidationRuleSet>()
        }

        getOrAddFieldRuleSet(target, key)
            .rules
            .push(new MaxValidationRule(params))
    }

}
