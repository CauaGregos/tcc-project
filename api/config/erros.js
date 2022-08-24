class Comunicate {
    #code
    #message
    #description

    constructor(code, message, description) {

        this.code = code;
        this.message = message;
        this.description = description;

    }

    //getters

    get code() {
        return this.#code;
    }

    get message() {
        return this.#message;
    }

    get description() {
        return this.#description;
    }

    set code(code) {

        if (code === undefined || typeof code !== 'string' || code.length !== 3) {
            throw ('Missing Code!!')
        }

        this.#code = code;
    }

    set message(message) {

        if (message === undefined || typeof message !== 'string' || message === '') {
            throw ('Missing message')
        }

        this.#message = message;
    }

    set description(description) {

        if (description === undefined || typeof description !== 'string' || this.description === '') {
            throw ('Missing Code')
        }

        this.#description = description;
    }

    get object() {
        return { code: this.#code, message: this.#message, description: this.#description }
    }
}
function newFunctionForComunicate(code, message, description) {
    return new Comunicate(code, message, description);

}
module.exports = { newFunctionForComunicate };