import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addRegex } from './conditions'

export class EmailValidationRule extends ValidationRule<ValidationRuleParams> {

    addConditions() {
        super.addCondition(() => {
            return addRegex(this.value, /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        })
    }

}



