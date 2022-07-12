import Head from "next/head"

export default function Cadastro() {
    return (
        <>
            <Head>
                <title>Classic</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className={`col-md-10 offset-md-1`}>
                <div className="row">
                    <h4>
                        Cadastro
                        <hr />
                    </h4>
                </div>
                <div className="row ">
                    <div className="col-10 offset-1 cartao p-3">

                        <div className="row h4 my-3">
                            <h4>Realize o seu cadastro</h4>
                        </div>

                        <div className="row">
                            <form>
                                <div className="col">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Nome completo:</label>
                                            <input id="nome" type="text" className="form-control" placeholder="Digite seu nome"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <label>CPF:</label>
                                            <input id="cpf" type="text" className="form-control" placeholder="Digite seu CPF"/>
                                        </div>
                                        <div className="col-sm-8">
                                            <label>E-mail:</label>
                                            <input id="email" type="email" className="form-control" name="Email" placeholder="Digite o seu email"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Endereço completo:</label>
                                            <input id="logradouro" type="text" className="form-control" placeholder="Digite seu logradouro"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Senha:</label>
                                            <input id="senha1" type="password" className="form-control" placeholder="Crie uma senha"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Confirmação de senha:</label>
                                            <input id="senha2" type="password" className="form-control" placeholder="Confirme sua senha"/><br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 col-sm-6 col-lg-4">
                                            <button type="button" className="btn botao-sec" onClick={() => cadastro()}>Confirmar</button>
                                            <button type="reset" className="btn botao mx-1" value="limpar">Limpar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function cadastro(){
    if(nome.value.length <= 3){
        alert("Informe seu nome completo!!!");
        nome.focus();
        return false;
    }
    if(email.value.length < 6 || email.value.indexOf("@") <=0 || email.value.lastIndexOf(".") <=email.value.indexOf("@")  ){
        alert("informe um email valido!!");
        email.focus();
        return false;
    }
    if(cpf.value.length < 11){
        alert("Informe seu CPF completo!!!");
        nome.focus();
        return false;
    }
    if(senha1.value.length < 5 || isNaN(senha1.value)){
        alert("Informe uma senha alfanumerica de no minimo 6 caracteres!!!");
        senha1.focus();
        return false;
    }
    if(senha1.value!=senha2.value){
        alert("Senha e confirmação não são iguais!!");
        senha2.focus();
        return false;
    }
    alert("tudo certo!!!!");
}   