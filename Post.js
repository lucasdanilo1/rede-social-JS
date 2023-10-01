export class Post{

    #usuario
    #conteudo
    #curtidas = []
    #comentarios = []

    constructor(conteudo, usuario){
        this.#conteudo = conteudo;
        this.#usuario = usuario
        this.#comentarios = []
        this.#curtidas = []
    }

    get curtidas(){
        return this.#curtidas
    }

    get usuario(){
        return this.#usuario
    }

    get conteudo(){
        return this.#conteudo
    }

    get comentarios(){
        return this.#comentarios
    }

    exibirPost(){
            console.log("-------------------------------")  
            console.log(this.#usuario.nomeDeUsuario)
            console.log("> " + this.#conteudo);

            console.log("   v Comentarios ")
            this.#comentarios.forEach(comentario => {
                console.log("     " +comentario.usuario.nomeDeUsuario)
                console.log("        > " + comentario.conteudo)
              })
    }

    adicionarComentario(comentario){
        this.#comentarios.push(comentario)
    }

    adicionarCurtida(usuario){
        this.#curtidas.push(usuario)
    }

    totalDeComentario(){
        return this.#curtidas.length
    }

    totalDeCurtidas(){
        return this.#curtidas.length
    }






}