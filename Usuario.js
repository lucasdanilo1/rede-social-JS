import { Post } from "./Post.js";
import { Comentario } from "./Comentario.js";

export class Usuario{

    #nomeDeUsuario
    #seguidores = []
    #seguindo = []
    #posts = []
    #todosOsComentariosEmPosts = []
    #batepapos = []

        constructor(nomeDeUsuario){
            this.#nomeDeUsuario = nomeDeUsuario;
        }

        get nomeDeUsuario(){
            return this.#nomeDeUsuario
        }

        get seguidores(){
            return this.#seguidores
        }

        get seguindo(){
            return this.#seguindo
        }

        get posts(){
            return this.#posts
        }

        get todosOsComentariosEmPosts(){
            return this.#todosOsComentariosEmPosts
        }

        get batepapos(){
            return this.#batepapos
        }

        quantidadeDePosts(){
            const total = this.#posts.length + this.#todosOsComentariosEmPosts.length;
            return total
        }

        
        seguir(usuario){
            this.#seguindo.push(usuario)
            this.#seguidores.push(this)
        }    
    
        novoPost(conteudo){
            const post = new Post(conteudo, this)
            this.#posts.push(post)
        }
    
        comentarEmUmPost(post, conteudo){
            const comentario = new Comentario(this, post, conteudo)
            post.adicionarComentario(comentario)
            this.#todosOsComentariosEmPosts.push(comentario)
        }
    
        curtirUmPost(post){
            post.adicionarCurtida(this)
        }
    
        removerPost(numeroDoPost){
            if (numeroDoPost >= 0 && numeroDoPost < this.#posts.length) {
                this.#posts.splice(numeroDoPost, 1);
            } else {
                console.log("O post não existe");
            }
        }


}