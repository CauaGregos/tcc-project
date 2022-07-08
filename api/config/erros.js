class Comunicado{
    #codigo
    #mensagem
    #descriçao

    constructor(codigo,mensagem,descriçao){

        this.codigo=codigo;
        this.mensagem=mensagem;
        this.descriçao=descriçao;

    }

    //getters

    get codigo (){
        return this.#codigo;
    }

    get mensagem (){
        return this.#mensagem;
    }

    get descriçao (){
        return this.#descriçao;
    }

    set codigo(codigo){

        if (codigo===undefined|| typeof codigo!== 'string'|| codigo.length!==3) {
            throw ('codigo invalido!!')
        }

        this.#codigo=codigo;
    }

    set mensagem(mensagem){

        if (mensagem===undefined|| typeof mensagem!== 'string'|| mensagem==='') {
            throw ('Mensagem  invalida!!')
        }

        this.#mensagem=mensagem;
    }

    set descriçao(descriçao){

        if (descriçao===undefined|| typeof descriçao!=='string'|| this.descriçao==='') {
            throw ('codigo invalido!!')
        }

        this.#descriçao=descriçao;
    }

    get object(){
        return{codigo:this.#codigo,mensagem:this.#mensagem,descriçao:this.#descriçao}
    }
}
    function novo(codigo,mensagem,descriçao) {
        return new Comunicado(codigo,mensagem,descriçao);
    
    }
module.exports={novo};