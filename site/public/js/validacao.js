function cadastrar(){

    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmacao_senha.value;
    var serieVar = serie_preferida.value;

    if(nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == ""){
        alert("Erro ao cadastrar, exitem campos em branco!")
    }else if(confirmacaoSenhaVar != senhaVar){
        alert("Erro, diferença entre senha e confirmação de senha")
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            serieServer: serieVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            setTimeout(() => {
                window.location = "login.html"; 
            }, "2000")
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}