const bd = require('../config/bd');

async function signStudent(student) {
    const connection = await bd.getConnection();
    if (connection == null) return null;

    try {
        const sql = "insert into alunos (email, nome,sobrenome, idade) values(?,?,?,?)";
        const data = [student.email, student.nome, student.sobrenome, student.idade];
        await connection.query(sql, data);
        return true;
    }
    catch (exception) { return false; }
}

async function createProfile(profile) {
    const connection = await bd.getConnection();
    if (connection == null) return null;

    try {
        const sql = "insert into perfilaluno (nome, sobrenome,email, senha) values(?,?,?,?)";
        const data = [profile.nome, profile.sobrenome, profile.email, profile.senha];
        await connection.query(sql, data);
        return true;
    }
    catch (exception) { return false; }
}

async function confirmEmail(email) {
    const connection = await bd.getConnection();
    if (connection == null) return null;

    try {
        const sql = "UPDATE perfilaluno SET confirmado = 1 WHERE email = ?";
        const data = [email];
        await connection.query(sql, data);
        return true;
    }
    catch (exception) { return false; }
}

async function consultConfirmedEmail(email) {
    const connection = await bd.getConnection();
    if (connection == null) return null;
    try {
        const sql = "SELECT confirmado from perfilaluno WHERE email = ?";
        const data = [email];
        const [rows] = await connection.query(sql, data);
        return rows;
    }
    catch (exception) { return false; }
}

async function updateStudent(student) {
    const connection = await bd.getConnection();
    if (connection == null) return null;
    try {
        const sql = 'UPDATE alunos SET Nome = ?, Idade = ?, CEP = ? WHERE id = ?';
        const data = [student.nome, student.idade, student.cep, student.id];
        await connection.query(sql, data);
        return true;
    }
    catch (exception) { return false; }
}

async function updatePassword(email,password){
    const conexao = await bd.getConnection();
    if(conexao == null) return null;
    try{
        const sql = "UPDATE perfilaluno SET senha = ? WHERE email = ?";
        const data = [password,email];
        const [rows] = await conexao.query(sql, data);
        return rows; 
    }
    catch (excecao) {return false;}
}

async function deleteStudent(id) {
    const connection = await bd.getConnection();
    if (connection == null) return null;
    try {
        const sql = 'DELETE FROM alunos WHERE id = ?';
        const data = [id];
        await connection.query(sql, data);
        return true;
    }
    catch (exception) {
        return false;
    }
}

async function getStudent(email, password) {
    const connection = await bd.getConnection();

    if (connection == null) return null;
    try {
        const sql = "SELECT * FROM perfilaluno WHERE email = ? AND senha = ?"
        const data = [email, password];
        const [rows] = await connection.execute(sql, data);
        return rows;
    }
    catch (exception) {
        return false;
    }
}

async function getExistStudent(email) {
    const conexao = await bd.getConnection();
   
    if (conexao == null) return null;
    try {
        const sql = "SELECT * FROM perfilaluno WHERE email = ?"
        const data = [email];
        const [rows] = await conexao.execute(sql, data);
        return rows;
    }
    catch (excecao) {
        return false;
    }
}


async function findAllDatas() {
    const connection = await bd.getConnection();
    if (connection == null) return null;
    try {
        const sql = 'SELECT * FROM alunos';
        const [rows] = await connection.query(sql);
        return rows;
    }
    catch (exception) { return false; }
}
module.exports = { signStudent,updatePassword,getExistStudent,updateStudent, deleteStudent, getStudent, findAllDatas, createProfile, confirmEmail, consultConfirmedEmail }