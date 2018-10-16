import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addRegex } from './conditions'

export interface RegexpValidationRuleParams extends ValidationRuleParams {
    regexp: RegExp
}

export class RegexpValidationRule extends ValidationRule<RegexpValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addRegex(this.value, this.params.regexp)
        })
    }
}
