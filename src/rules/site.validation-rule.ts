import { ValidationRule, ValidationRuleParams } from './validation-rule'

import { addRegex } from './conditions'

export class SiteValidationRule extends ValidationRule<ValidationRuleParams> {

    addConditions() {
        super.addCondition(() => {
            return addRegex(this.value, /^^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
        })
    }

}



