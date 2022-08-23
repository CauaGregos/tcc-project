const express = require('express')

const rotas = require('./rotas')

async function ativacaoDoServidor(){
    const app = express();
    app.use(express.json());
    
    // Evitar erro do CORS
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.post ('/cadastrarAluno',rotas.cadastrarAluno)
    app.post ('/cadastrarPerfil',rotas.cadastrarPerfil)
    // envia email
    app.post ('/enviarEmail',rotas.enviarEmail)

    // confirma email no banco de dados
    app.get('/confirmarEmail/:email',rotas.confirmarEmail)
    //localiza o user atraves do email e senha 
    app.get('/getAluno/:email/:senha', rotas.getAluno)

    // vai mandar o cliente do email para esse site
    app.get('/encaminharEsqueciSenha/:email', rotas.encaminharEsqueciSenha)
    app.get('/esqueciSenha/:email', rotas.esqueciSenha)

    // vai mudar a senha 
    app.get('/mudarSenha/:email/:senha', rotas.mudarSenha)
   
    // app.put('/attAluno/:id',rotas.atualizarAluno)
    // app.delete('/alunoDel/:id',rotas.excluirAluno)
    // app.get('/alunos',rotas.recupereTodos)
    
    console.log('Servidor ativo')
    app.listen(3000);
}
ativacaoDoServidor();