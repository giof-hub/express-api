const db = require('../db/database');

exports.listAll = async () => {
    const { rows } = await db.query(`SELECT P.ID,
                P.NOME, 
                P.DOCUMENTO, 
                P.PROFISSAO, 
                P.DATANASCIMENTO,
                U.EMAIL, 
                U.LOGIN
            FROM USUARIO U
            INNER JOIN PESSOA P ON P.ID = U.IDPESSOA`);
    
    return rows;
}

exports.getById = async (id) => {
    const { rows } = await db.query(
        `SELECT P.ID,
                P.NOME, 
                P.DOCUMENTO, 
                P.PROFISSAO, 
                P.DATANASCIMENTO,
                U.EMAIL, 
                U.LOGIN
            FROM USUARIO U
            INNER JOIN PESSOA P ON P.ID = U.IDPESSOA
            WHERE P.ID = $1`
        , [id]);
    
    return rows[0] ?? {};
}

exports.save = async (usuario) => {
    const { rows } = await db.query('INSERT INTO USUARIO (EMAIL, LOGIN, IDPESSOA) VALUES ($1, $2, $3)', 
                                        [usuario.email, usuario.login, usuario.idPessoa]);
    
    return rows;
}

exports.update = async (usuario, id) => {
    const { rows } = await db.query('UPDATE PESSOA SET NOME = $1, DOCUMENTO = $2, PROFISSAO = $3, DATANASCIMENTO = $4 WHERE ID = $5', 
        [usuario.nome, usuario.documento, usuario.profissao, usuario.dataNascimento, id]);
    
    return rows;
}

exports.delete = async (id) => {
    await db.query('DELETE FROM USUARIO WHERE IDPESSOA = $1', [id]);
    await db.query('DELETE FROM PESSOA WHERE ID = $1', [id]);

    return;
}