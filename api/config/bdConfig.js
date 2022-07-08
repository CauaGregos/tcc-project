module.exports = {
    // host: '127.0.0.1',
    // user: 'root',
    // password: '',
    // database: 'enderecoalunos'
    host: process.env.NODE_MYSQL_SERVIDOR,
    user: process.env.NODE_MYSQL_USUARIO,
    password: process.env.NODE_MYSQL_SENHA,
    database: process.env.NODE_MYSQL_BD
}