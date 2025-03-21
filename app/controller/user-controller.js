const repository = require('../repository/user-repository');

exports.listAll = async (req, res) => {
    const usuarios = await repository.listAll();

    console.log(usuarios);
}

exports.getById = async (req, res) => {
    const usuario = await repository.getById(req.params.id);

    console.log(usuario)
}

exports.save = async (req, res) => {
    await repository.save(req.body);
}

exports.updateById = async (req, res) => {
    await repository.update(req.body, req.params.id);
}

exports.deleteById = async (req, res) => {
    await repository.delete(req.params.id);
}