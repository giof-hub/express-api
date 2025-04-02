const repository = require('../repository/user-repository');
const pessoaRepository = require('../repository/pessoa-repository');
const pessoaValidator = require('../validators/pessoa-validator');
const userValidator = require('../validators/user-validator');

exports.listAll = async (req, res) => {
    const usuarios = await repository.listAll();

    res.status(200).json(usuarios);
}

exports.getById = async (req, res) => {

    const usuario = await repository.getById(req.params.id);

    res.status(200).json(usuario);
}

exports.save = async (req, res) => {

    const pessoa = {
        nome: req.body.nome,
        documento: req.body.documento,
        profissao: req.body.profissao,
        dataNascimento: req.body.dataNascimento
    }

    var retornoPessoaValidacao = pessoaValidator.validatePreInsert(pessoa);

    if (retornoPessoaValidacao.hasError) {
        res.status(400).json({message: retornoPessoaValidacao.messageError})
        return;
    }

    var result = await pessoaRepository.save(pessoa);

    const usuario = {
        email: req.body.email,
        login: req.body.login,
        idPessoa: result.id
    }

    var retornoUsuarioValidacao = userValidator.validatePreInsert(usuario);

    if (retornoUsuarioValidacao.hasError) {
        res.status(400).json({message: retornoPessoaValidacao.messageError});
        return;
    }

    await repository.save(usuario);

    res.status(200).json({message: "Usuário criado com sucesso!"});
}

exports.updateById = async (req, res) => {
    await repository.update(req.body, req.params.id);

    res.status(200).json({message: "Usuário atualizado com sucesso!"});
}

exports.deleteById = async (req, res) => {
    await repository.delete(req.params.id);

    res.status(200).json({message: "Usuário deletado com sucesso"});
}