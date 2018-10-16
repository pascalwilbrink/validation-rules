import { BaseModel } from '../src/base-model'
import { MinValidationRule, MinLengthValidationRule } from '../src'

export class Company extends BaseModel {

    name: string;

    numberOfEmployees: number

    constructor() {
        super()

        super.addValidationRulesForField('numberOfEmployees', [
            new MinValidationRule({reference: 50, message: 'The company must have at least 50 employees'})
        ])

        super.addValidationRuleForField('name', new MinLengthValidationRule({minLength: 5}))
    }

}