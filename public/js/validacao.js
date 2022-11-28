function cadastrar(){

    const nomeConst = input_nome.value;
    const emailConst = input_email.value;
    const senhaConst = input_senha.value;
    const confirmacao_senhaConst = input_confirmacao_senha.value;

    if(nomeConst == "" || emailConst == "" || senhaConst == "" || confirmacao_senhaConst == ""){
        alert("Erro ao cadastrar, exitem campos em branco!")
    }else if(confirmacao_senhaConst != senhaConst){
        alert("Erro, diferença entre senha e confirmação de senha")
    }else{
        
    }
}