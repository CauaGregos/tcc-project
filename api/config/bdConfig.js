module.exports = {
    // host: 'us-cdbr-east-06.cleardb.net',
    // user: 'b17ab4e5b7c12b',
    // password: '0545a23c',
    // database: 'heroku_1e8f08e81112628'
    host: process.env.NODE_MYSQL_SERVIDOR,
    user: process.env.NODE_MYSQL_USUARIO,
    password: process.env.NODE_MYSQL_SENHA,
    database: process.env.NODE_MYSQL_BD
}