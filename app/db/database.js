const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err)
  process.exit(-1);
});

pool.on('connect', () => {
    var result = pool.query("SELECT NOW()");
    
    result.then(() => {
        console.log('Conectado com sucesso');
    }).catch((error) => {
        console.log("Erro de conexão " + error)
    });
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};