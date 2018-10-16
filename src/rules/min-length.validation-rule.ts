import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addMinLength } from './conditions'

export interface MinLengthValidationRuleParams extends ValidationRuleParams {
    minLength: number
}

export class MinLengthValidationRule extends ValidationRule<MinLengthValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addMinLength(this.value, this.params.minLength)
        })
    }

}