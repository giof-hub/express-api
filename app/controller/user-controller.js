const repository = require('../repository/user-repository');

exports.listAll = async (req, res) => {
    const usuarios = await repository.listAll();

    console.log(usuarios);
}

exports.getById = async (req, res) => {
    
}

exports.save = async (req, res) => {
    
}

exports.updateById = async (req, res) => {
    
}

exports.deleteById = async (req, res) => {
    
}