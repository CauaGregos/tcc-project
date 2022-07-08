class Aluno {
    #nome
    #idade
    #cep
    #id

    constructor(id,nome, idade, cep) {
        this.#id = id
        this.#nome = nome
        this.#idade = idade
        this.#cep = cep
        
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get cep() {
        return this.#cep;
    }

    get id() {
        return this.#id;
    }

    set nome(nome) {
        if (nome === undefined || typeof nome !== 'string' || nome ==="" )
        throw ('Nome inválidp')

        this.#nome = nome;
    }

    set idade(idade) {
        if (idade === undefined || typeof idade !== 'number' || idade <= 0 )
        throw ('Nome inválidp')

        this.#idade = idade;
    }

    set cep(cep) {
        if (cep === undefined || typeof cep !== 'number' || cep <= 0 )
        throw ('Nome inválidp')

        this.#cep = cep;
    }

    set id(id) {
        if (id === undefined || typeof id !== 'number' || id <= 0 )
        throw ('id inválido')

        this.#id = id;
    }
}

function novo(id,nome, idade, cep) {
    return new Aluno(id,nome, idade, cep)
}

module.exports = {novo}