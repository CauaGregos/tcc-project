const bd = require('../config/bd');

async function cadastrarAluno(aluno) {
    const conexao = await bd.getConexao();
    if (conexao == null) return null;

    try {
        const sql = "insert into alunos (id,Nome,Idade,CEP) values(?,?,?,?)";
        const dados = [aluno.id,aluno.nome,aluno.idade,aluno.cep];
        console.log(dados)
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

async function getAluno(id) {
    const conexao = await bd.getConexao();
   
    if (conexao == null) return null;
    try {
        const sql = "SELECT * FROM alunos WHERE id = ?"
        const dados = [id];
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
module.exports = { cadastrarAluno, atualizarAluno, excluirAluno,getAluno,recupereTodos}