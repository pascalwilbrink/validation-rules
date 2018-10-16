import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addIsSmaller, addIsLarger } from './conditions'

export interface BetweenValidationRuleParams extends ValidationRuleParams {
    minReference: number
    maxReference: number
}

export class BetweenValidationRule extends ValidationRule<BetweenValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addIsSmaller(this.value, this.params.maxReference)
        })
        super.addCondition((): boolean => {
            return addIsLarger(this.value, this.params.minReference)
        })
    }

}