export class UsuarioService{

    exibirTodosOsComentarios(usuario){
        usuario.todosOsComentariosEmPosts.forEach(comentario => {
            console.log("-------------------------------") 
            console.log(usuario.nomeDeUsuario)
            console.log(comentario.conteudo)
        })
        console.log("-------------------------------") 
    }

    exibirSeguidores(usuario){
        const seguidores = usuario.seguidores.map(seguidor => seguidor.nomeDeUsuario).join(', ');
        console.log(`(${seguidores})`);
    }

    exibirSeguindo(usuario){
        const seguindo = usuario.seguindo.map(seguindo => seguindo.nomeDeUsuario).join(', ');
        console.log(`(${seguindo})`);
    }

    exibirPosts(usuario) {   
        usuario.posts.forEach(post => {
        console.log("-------------------------------")  
        console.log(usuario.nomeDeUsuario)
          console.log("> " + post.conteudo);
          console.log("   v Comentarios ")

          post.comentarios.forEach(comentario => {
            console.log("     " +comentario.usuario.nomeDeUsuario)
            console.log("        > " + comentario.conteudo)
          })
        });
        console.log("-------------------------------")  
    }

}