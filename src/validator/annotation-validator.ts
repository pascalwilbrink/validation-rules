import { Validator, ValidationConstraint } from '.'

export class AnnotationValidator {

    private validator: Validator

    constructor() {
        this.validator = new Validator()
    }

    validate(obj: any): ValidationConstraint[] {
        return this.validator.validate(obj, Object.getPrototypeOf(obj).__validation_rule_sets__)
    }

}