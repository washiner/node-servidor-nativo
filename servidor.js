let http = require('http')  // cria uma variavel chamando modulo http nativo do node

http.createServer(function(request, response){
    response.end("Hello World voce esta logado no servidor")
}).listen(3000)   // abre um servidor - ouve o servir com listen - parametro e a porta

console.log("o servidor esta rodando")  // menssagem pra gente visualizar que o servidor ta rodando





// - NOTAS
// - a funcao create server tem uma funcao de callback que recebe dois parametros request e response
// - o response e uma resposta para o usuario na tela
// - o end e para enviar uma menssagem
// - quando utilizar o nodemon nao vamos precisar ficar reiniciando servidor
// - quando utilizar o express sera mais resumido o codigo tb
