import { MinLengthValidationRule, MinLengthValidationRuleParams } from '..'
import { ValidationRuleSet } from '../validator'

import { getOrAddFieldRuleSet } from './util'

export function minLength(params: MinLengthValidationRuleParams): PropertyDecorator {

    return (target: any, key: string): void => {
        if (!target.hasOwnProperty('__validation_rule_sets__')) {
            target.__validation_rule_sets__ = new Array<ValidationRuleSet>()
        }

        getOrAddFieldRuleSet(target, key)
            .rules
            .push(new MinLengthValidationRule(params))
    }

}
