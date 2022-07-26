class Aluno {
    #nome
    #sobrenome
    #email
    #senha

    constructor(nome, sobrenome,email, senha) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#senha = senha
        this.#email = email 
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email() {
        return this.#email
    }

    get senha() {
        return this.#senha;
    }

    set nome(nome) {
        if (nome === undefined || typeof nome !== 'string' || nome ==="" )
        throw ('Nome inválido')

        this.#nome = nome;
    }

    set sobrenome(sobrenome) {
        if (sobrenome === undefined || typeof sobrenome !== 'string' || sobrenome ==="" )
        throw ('sobrenome inválido')

        this.#sobrenome = sobrenome;
    }

    set email(email) {
        if (email === undefined || typeof email !== 'string' || email ==="" )
        throw ('email inválido')

        this.#email = email;
    }

    set senha(senha) {
        if (senha === undefined || typeof senha !== 'number' || senha <= 0 )
        throw ('Nome inválidp')

        this.#senha = senha;
    }
   
}

function novo(nome, sobrenome,email, senha) {
    return new Aluno(nome, sobrenome,email, senha)
}

module.exports = {novo}