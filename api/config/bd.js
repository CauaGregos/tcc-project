async function getConnection (){
    if (global.connection && global.connection.state !== 'disconnected')
       return global.connection;

const mysql = require("mysql2/promise");
const bdConfig = require("./bdConfig");
try {
    const connection = await mysql.createConnection (bdConfig);
    global.connection = connection;
    return connection;
} catch (error) {
    return null;
}


}

module.exports = {getConnection}