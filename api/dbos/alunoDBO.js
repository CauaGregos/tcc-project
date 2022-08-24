class Student {
    #name
    #lastName
    #email
    #age

    constructor(name, lastName, email, age) {
        this.#name = name
        this.#lastName = lastName
        this.#email = email 
        this.#age = age
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

    get age() {
        return this.#age;
    }

    set name(name) {
        if (name === undefined || typeof name !== 'string' || name ==="" )
        throw ('Missing Name')

        this.#name = name;
    }

    set lastName(lastName) {
        if (lastName === undefined || typeof lastName !== 'string' || lastName ==="" )
        throw ('Missing lastName')

        this.#lastName = lastName;
    }

    set email(email) {
        if (email === undefined || typeof email !== 'string' || email ==="" )
        throw ('email inválido')

        this.#email = email;
    }

    set age(age) {
        if (age === undefined || typeof age !== 'number' || age <= 0 )
        throw ('Missing Age')

        this.#age = age;
    }
   
}

function newFunctionStudent(name, lastName, email, age) {
    return new Student(name, lastName, email, age)
}

module.exports = {newFunctionStudent}