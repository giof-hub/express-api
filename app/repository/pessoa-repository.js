const db = require('../db/database');

exports.listAll = async () => {
    const { rows } = await db.query('SELECT * FROM PESSOA');
    
    return rows;
}

exports.getById = async (id) => {
    const { rows } = await db.query('SELECT * FROM PESSOA WHERE ID = $1', [id]);

    return rows[0] ?? {};
}

exports.save = async (pessoa) => {
    const { rows }  = await db.query('INSERT INTO PESSOA (NOME, DOCUMENTO, PROFISSAO, DATANASCIMENTO) VALUES ($1, $2, $3, $4) RETURNING ID', 
                                        [pessoa.nome, pessoa.documento, pessoa.profissao, pessoa.dataNascimento]);

    return rows[0];
}

exports.update = async (pessoa, id) => {
    const { rows } = await db.query('UPDATE PESSOA SET NOME = $1, DOCUMENTO = $2, PROFISSAO = $3, DATANASCIMENTO = $4 WHERE ID = $5', 
                                        [pessoa.nome, pessoa.documento, pessoa.profissao, pessoa.dataNascimento, id]);
    
    return rows;
}

exports.delete = async (id) => {
    const { rows } = await db.query('DELETE FROM PESSOA WHERE ID = $1', [id]);
    
    return rows;
}