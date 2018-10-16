import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addMinLength, addMaxLength } from './conditions'

export interface LengthValidationRuleParams extends ValidationRuleParams {
    minLength: number
    maxLength: number
}

export class LengthValidationRule extends ValidationRule<LengthValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addMaxLength(this.value, this.params.maxLength)
        })
        super.addCondition((): boolean => {
            return addMinLength(this.value, this.params.minLength)
        })
    }

}