export function addRegex(value: string, regex: RegExp): boolean {
    return regex.test(value)
}

export function addMaxLength(value: string, reference: number): boolean {
    return value.length < reference
}

export function addMinLength(value: string, reference: number): boolean {
    return value.length > reference
}

export function addIsLarger(value: number, ref: number): boolean {
    return this.value > ref
}

export function addIsSmaller(value: number, ref: number): boolean {
    return value < ref
}