import { email, minLength, site, between, min } from '../src'

export class User {

    @minLength({
        minLength: 2,
        message: 'Firstname must have at least 2 characters'
    })
    firstname: string

    @minLength({
        minLength: 2,
        message: 'Lastname must have at least 2 characters'
    })
    lastname: string

    @email({
        message: 'Must be an email address'
    })
    emailAddress: string

    @site({
        message: 'Please enter a valid url'
    })
    site: string

    @between({
        minReference: 1,
        maxReference: 10,
        message: `Please express your happiness in a number between 1 and 10`
    })
    like: number

    @min({
        reference: 18,
        message: 'You must be at least 18 years old'
    })
    age: number
    
}