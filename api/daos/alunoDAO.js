const bd = require('../config/bd');

async function cadastrarAluno(aluno) {
    const conexao = await bd.getConexao();
    if (conexao == null) return null;

    console.log(aluno.nome,aluno.sobrenome,aluno.email,aluno.idade)

    try {
        const sql = "insert into alunos (email, nome,sobrenome, idade) values(?,?,?,?)";
        const dados = [aluno.email,aluno.nome,aluno.sobrenome,aluno.idade];
        await conexao.query(sql, dados);
        return true;
    }
    catch (excecao) { return false; }
}

async function cadastrarPerfil(perfil) {
    const conexao = await bd.getConexao();
    if (conexao == null) return null;

    try {
        const sql = "insert into perfilaluno (nome, sobrenome,email, senha) values(?,?,?,?)";
        const dados = [perfil.nome,perfil.sobrenome,perfil.email,perfil.senha];
        await conexao.query(sql, dados);
        return true;
    }
    catch (excecao) { return false; }
}

async function confirmarEmail(email) {
    const conexao = await bd.getConexao();
    if (conexao == null) return null;

    try {
        const sql = "UPDATE perfilaluno SET confirmado = 1 WHERE email = ?";
        const dados = [email];
        await conexao.query(sql, dados);
        return true;
    }
    catch (excecao) { return false; }
}


async function atualizarAluno(aluno) {
    const conexao = await bd.getConexao();
    if (conexao == null) return null;
    try {
        const sql = 'UPDATE alunos SET Nome = ?, Idade = ?, CEP = ? WHERE id = ?';
        const dados = [aluno.nome,aluno.idade,aluno.cep,aluno.id];
        await conexao.query(sql, dados);
        return true;
    }
    catch (excecao) { return false; }
}


async function excluirAluno(id) {
    const conexao = await bd.getConexao();
    if (conexao == null) return null;
    try {
        const sql = 'DELETE FROM alunos WHERE id = ?';
        const dados = [id];
        await conexao.query(sql, dados);
        return true;
    }
    catch (excecao) {
        return false;
    }
}

async function getAluno(email,senha) {
    const conexao = await bd.getConexao();
   
    if (conexao == null) return null;
    try {
        const sql = "SELECT * FROM perfilaluno WHERE email = ? AND senha = ?"
        const dados = [email,senha];
        const [linhas] = await conexao.execute(sql, dados);
        return linhas;
    }
    catch (excecao) {
        return false;
    }
}

async function recupereTodos() {
    const conexao = await bd.getConexao();
    if (conexao == null) return null;
    try {
        const sql = 'SELECT * FROM alunos';
        const [linhas] = await conexao.query(sql);
        return linhas;
    }
    catch (excecao) { return false; }
}
module.exports = { cadastrarAluno, atualizarAluno, excluirAluno,getAluno,recupereTodos,cadastrarPerfil,confirmarEmail}