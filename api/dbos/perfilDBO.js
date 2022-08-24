class Student {
    #name
    #lastName
    #email
    #password

    constructor(name, lastName, email, password) {
        this.#name = name
        this.#lastName = lastName
        this.#email = email
        this.#password = password
    }

    get name() {
        return this.#name;
    }

    get lastName() {
        return this.#lastName
    }

    get email() {
        return this.#email
    }

    get password() {
        return this.#password;
    }

    set name(name) {
        if (name === undefined || typeof name !== 'string' || name === "")
            throw ('Missing Name')

        this.#name = name;
    }

    set lastName(lastName) {
        if (lastName === undefined || typeof lastName !== 'string' || lastName === "")
            throw ('Missing lastName')

        this.#lastName = lastName;
    }

    set email(email) {
        if (email === undefined || typeof email !== 'string' || email === "")
            throw ('email inválido')

        this.#email = email;
    }

    set password(password) {
        if (password === undefined || typeof password !== 'number' || password <= 0)
            throw ('Missing Password')

        this.#password = password;
    }

}

function newFunctionProfile(name, lastName, email, password) {
    return new Student(name, lastName, email, password)
}

module.exports = { newFunctionProfile }