export class Mensagem{

    #conteudo
    #usuario

    constructor(conteudo, usuario){
        this.#conteudo = conteudo;
        this.#usuario = usuario;
    }

    exibirMensagem(){
        console.log(this.#usuario.nomeDeUsuario + ": " + this.#conteudo)
    }

}