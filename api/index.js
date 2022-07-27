const express = require('express')

const rotas = require('./rotas')

// function middleWareGlobal(req,res,next){
//     next();
// }

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
    app.post ('/enviarEmail',rotas.enviarEmail)
    app.get('/confirmarEmail/:email',rotas.confirmarEmail)
    app.put('/attAluno/:id',rotas.atualizarAluno)
    app.delete('/alunoDel/:id',rotas.excluirAluno)
    app.get('/aluno/:id', rotas.getAluno)
    app.get('/alunos',rotas.recupereTodos)
    
    console.log('Servidor ativo')
    app.listen(3000);
}
ativacaoDoServidor();