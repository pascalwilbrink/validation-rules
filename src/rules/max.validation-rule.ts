import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addIsSmaller } from './conditions'

export interface MaxValidationRuleParams extends ValidationRuleParams {
    reference: number
}

export class MaxValidationRule extends ValidationRule<MaxValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addIsSmaller(this.value, this.params.reference)
        })
    }

}