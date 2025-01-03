const mysql = require('mysql2');

// Configurações de conexão com o banco de dados
const pool = mysql.createPool({
    host: 'mysql-container',
    user: 'admin', 
    password: 'admin',   
    database: 'projetoredes'
});

const promisePool = pool.promise();
module.exports = promisePool;