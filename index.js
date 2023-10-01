import { BatePapo } from "./BatePapo.js";
import { Usuario } from "./Usuario.js";
import { UsuarioService } from "./UsuarioService.js";

const usuario1 = new Usuario("lucasdan");
const usuario2 = new Usuario("davidluiz");
const usuario3 = new Usuario("carlasilva");
const usuario4 = new Usuario("roberto123");
const usuario5 = new Usuario("ana.maria");

 const service = new UsuarioService();


//logica de seguir
usuario2.seguir(usuario1)
usuario3.seguir(usuario1)
usuario4.seguir(usuario1)
usuario5.seguir(usuario1)
usuario1.seguir(usuario2)
usuario1.seguir(usuario3)
usuario1.seguir(usuario4)
//////////////////

//logica de exibição do usuario
console.log("\n/////////////////////////////////////////////////")
console.log("Usuario: " + usuario1.nomeDeUsuario)

console.log("Seguidores: ")
service.exibirSeguidores(usuario1)

console.log("Seguindo: ")
service.exibirSeguindo(usuario1)

console.log("Posts: " + usuario1.quantidadeDePosts())
console.log("/////////////////////////////////////////////////")
////////////////////

console.log("\n")

//logica de postagem
usuario1.novoPost("babyshark é ruim de mais")
usuario1.novoPost("Faz o L")
usuario1.novoPost("tá calor ein")

usuario2.comentarEmUmPost(usuario1.posts[0], "lógico que não mano babyshark é mo bom")

usuario3.curtirUmPost(usuario1.posts[0])
usuario3.comentarEmUmPost(usuario1.posts[0], "falou e disse")

usuario4.curtirUmPost(usuario1.posts[2])
usuario4.comentarEmUmPost(usuario1.posts[2], "aqui na bahia ta frio, 40 grau")

usuario2.novoPost("tuêzin do 08cincôo")
usuario2.novoPost("vodka com agua de coco")

usuario1.curtirUmPost(usuario2.posts[0])
usuario1.comentarEmUmPost(usuario2.posts[0], "quero ver subir onde eu subii...")
usuario1.comentarEmUmPost(usuario2.posts[1], "essa do mc daleste é massa")
/////////////////////

console.log("[\n")

//logica de exibição de postagem
console.log("Postagens feitas: ")
service.exibirPosts(usuario1)

console.log("\n")

console.log("Comentarios feitos: ")
service.exibirTodosOsComentarios(usuario1)

console.log("\n]")
///////////////////////

//logica de bate papo
const batepapo = new BatePapo(usuario1);

batepapo.adicionarUsuario(usuario2)

batepapo.novaMensagem("oi tudo bem", usuario1)

batepapo.novaMensagem("oi blzz", usuario2)

batepapo.exibirMensagens()

batepapo.exibirUsuarios()










