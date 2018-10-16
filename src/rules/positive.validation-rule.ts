import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addIsLarger } from './conditions'

export class PositiveValidationRule extends ValidationRule<ValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addIsLarger(this.value, 0)
        })
    }

}