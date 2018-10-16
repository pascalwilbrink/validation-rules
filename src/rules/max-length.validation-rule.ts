import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addMaxLength } from './conditions'

export interface MaxLengthValidationRuleParams extends ValidationRuleParams {
    maxLength: number
}

export class MaxLengthValidationRule extends ValidationRule<MaxLengthValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addMaxLength(this.value, this.params.maxLength)
        })
    }

}