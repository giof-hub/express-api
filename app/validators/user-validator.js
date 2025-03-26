exports.validatePreInsert = (pessoa) => {
    let messageError = "";
    let hasError = false;

    if (pessoa.email == null || pessoa.email == '') {
        messageError = "E-mail de usuário inválido"
        hasError = true;
    } else if (pessoa.login == null || pessoa.login == '') {
        messageError = "Login de usuário inválido"
        hasError = true;
    } else if (pessoa.idPessoa == null || pessoa.idPessoa == '') {
        messageError = "Identificador de pessoa do usuário inválido"
        hasError = true;
    }

    return { hasError, messageError }
}