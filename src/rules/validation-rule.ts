export interface ValidationRuleParams {
	message?: string
}

export interface IValidationRule<T extends ValidationRuleParams> {
	params: T;

	isValid(value: any): boolean;
}

export type Condition = () => boolean

export abstract class ValidationRule<T extends ValidationRuleParams> implements IValidationRule<T> {
	protected conditions: Condition[] = new Array<Condition>()

	public value: any;
	public params: T;
	private _invalidMessage = 'Invalid field ${fieldName}';

	constructor(params: T) {
		this.params = params
		if (params) {
			this.params = params;
			if (this.params.message) {
				this._invalidMessage = this.params.message;
			}
		}

		this.addConditions()
	}

	get invalidMessage(): string {
		return this._invalidMessage;
	}

	abstract addConditions()

	addCondition(condition: Condition) {
		this.conditions.push(condition)
	}

	public isValid(value: any): boolean {
		this.value = value;

		let _isValid = true

		this.conditions.forEach((condition) => {
			if (!condition()) {
				_isValid = false
				return
			}
		})

		return _isValid
	}

}
