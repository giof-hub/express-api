const db = require('../db/database');

exports.listAll = async () => {
    const { rows } = await db.query('SELECT * FROM USUARIO');
    
    return rows;
}