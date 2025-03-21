const db = require('../db/database');

exports.listAll = async () => {
    const { rows } = await db.query('SELECT * FROM USUARIO');
    
    return rows;
}

exports.getById = async (id) => {
    const { rows } = await db.query('SELECT * FROM USUARIO WHERE ID = $1', [id]);
    
    return rows;
}

exports.save = async (usuario) => {
    const { rows } = await db.query('INSERT INTO USUARIO (EMAIL, LOGIN, IDPESSOA) VALUES ($1, $2, $3)', 
                                        [usuario.email, usuario.login, usuario.idPessoa]);
    
    return rows;
}

exports.update = async (usuario, id) => {
    const { rows } = await db.query('UPDATE USUARIO SET EMAIL = $1 WHERE ID = $2', 
                                        [usuario.email, id]);
    
    return rows;
}

exports.delete = async (id) => {
    const { rows } = await db.query('DELETE FROM USUARIO WHERE ID = $1', [id]);
    
    return rows;
}