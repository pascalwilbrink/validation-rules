import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addIsLarger } from './conditions'

export interface MinValidationRuleParams extends ValidationRuleParams {
    reference: number
}

export class MinValidationRule extends ValidationRule<MinValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addIsLarger(this.value, this.params.reference)
        })
    }

}