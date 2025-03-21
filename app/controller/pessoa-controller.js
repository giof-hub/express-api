const repository = require('../repository/pessoa-repository');

exports.listAll = async (req, res) => {
    const pessoas = await repository.listAll();

    res.status(200).send(pessoas);
}

exports.getById = async (req, res) => {
    const pessoa = await repository.getById(req.params.id);

    res.status(200).send(pessoa);
}

exports.save = async (req, res) => {
    const pessoa = await repository.save(req.body);

    res.status(200).send({
        message: "Salvo com sucesso"
    });
}

exports.updateById = async (req, res) => {
    await repository.update(req.body, req.params.id);

    res.status(200).send({
        message: "Atualizado com sucesso"
    });
}

exports.deleteById = async (req, res) => {
    await repository.delete(req.params.id);

    res.status(200).send({
        message: "Deletado com sucesso"
    });
}