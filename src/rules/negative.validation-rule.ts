import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addIsSmaller } from './conditions'

export class NegativeValidationRule extends ValidationRule<ValidationRuleParams> {

    addConditions() {
        super.addCondition((): boolean => {
            return addIsSmaller(this.value, 0)
        })
    }

}