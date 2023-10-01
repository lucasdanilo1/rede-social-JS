export class Comentario{

    #usuario
    #post
    #conteudo

    constructor(usuario, post, conteudo){
        this.#usuario = usuario;
        this.#post = post;
        this.#conteudo = conteudo;
    }

    get usuario(){
        return this.#usuario
    }

    get post(){
        return this.#post
    }

    get conteudo(){
        return this.#conteudo
    }


}