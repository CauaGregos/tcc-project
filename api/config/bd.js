async function getConexao (){
    if (global.conexao && global.conexao.state !== 'disconnected')
       return global.conexao;

const mysql = require("mysql2/promise");
const bdConfig = require("./bdConfig");
try {
    const conexao = await mysql.createConnection (bdConfig);
    global.conexao = conexao;
    return conexao;
} catch (error) {
    return null;
}


}

module.exports = {getConexao}