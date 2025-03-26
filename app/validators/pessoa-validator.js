exports.validatePreInsert = (pessoa) => {
    let messageError = "";
    let hasError = false;

    if (pessoa.nome == null || pessoa.nome == '') {
        messageError = "Nome de usuário inválido"
        hasError = true;
    } else if (pessoa.documento == null || pessoa.documento == '') {
        messageError = "Documento de usuário inválido"
        hasError = true;
    } else if (pessoa.profissao == null || pessoa.profissao == '') {
        messageError = "Profissão de usuário inválido"
        hasError = true;
    } else if (pessoa.dataNascimento == null || pessoa.dataNascimento == '') {
        messageError = "Data de Nascimento de usuário inválido"
        hasError = true;
    }

    return { hasError, messageError }
}