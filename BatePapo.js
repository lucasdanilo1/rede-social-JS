import { Mensagem } from "./Mensagem.js"

export class BatePapo{
    #usuarios = []
    #mensagens = []

    constructor(usuario){
        this.#usuarios.push(usuario)
    }

    exibirUsuarios(){
        const usuarios = this.#usuarios.map(usuario => usuario.nomeDeUsuario).join(', ');
        console.log(`(${usuarios})`);
    }

    adicionarUsuario(usuario){
        this.#usuarios.push(usuario)
        usuario.batepapos.push(this)
    }

    novaMensagem(conteudo, usuario){
        if(!this.#usuarios.includes(usuario)){
            throw new Error('Usuário não encontrado');
        }
        const mensagem = new Mensagem(conteudo, usuario)
        this.#mensagens.push(mensagem)  
        console.log(usuario.nomeDeUsuario + ": " +conteudo)
    }

    exibirMensagens(){
        this.#mensagens.forEach(mensagem =>{
            mensagem.exibirMensagem()
        })
    }

}