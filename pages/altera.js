import axios from "axios";

import Head from "next/head";

import { useRouter } from "next/router";

export default function Altera() {
    const router = useRouter()
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
                        Esqueci a senha
                        <hr />
                    </h4>
                </div>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="row">
                            <h5 className="text-center">
                                Recuperar
                            </h5>
                        </div>
                        <div className="row">
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label>Digite o seu e-mail cadastrado:</label>
                                        <input id="des_email" type="email" className="form-control" name="Email" placeholder="Digite o seu email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label>Digite o token enviado:</label>
                                        <input id="rec_token" type="text" className="form-control" placeholder="Digite o token enviado por e-mail" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Digite a nova senha:</label>
                                        <input id="des_senha" type="password" className="form-control" placeholder="Crie uma senha" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Confirme a nova senha:</label>
                                        <input id="senha1" type="password" className="form-control" placeholder="Confirme sua senha" /><br />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8 col-sm-6 col-lg-4">
                                        <button type="button" className="btn botao-sec" onClick={() => alterar(router)}>Confirmar</button>
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

function alterar(router) {

    const email = document.getElementById("des_email").value;
    const token = document.getElementById("rec_token").value;
    const senha = document.getElementById("des_senha").value;
    const senhaConfirmacao = document.getElementById("senha1").value;

    if (email.length < 6 || email.indexOf("@") <= 0 || email.lastIndexOf(".") <= email.indexOf("@")) {
        alert("informe um email valido!!");
        des_email.focus();
        return false;
    }
    if (senhaConfirmacao.length < 5) {
        alert("Informe uma senha alfanumerica de no minimo 6 caracteres!!!");
        senha1.focus();
        return false;
    }
    if (senha != senhaConfirmacao) {
        alert("Senha e confirmação não são iguais!!");
        des_senha.focus();
        return false;
    }

    // $.post( "https://pwprojetoback-end.herokuapp.com/cliente/resetar", { email : email, token : token, senha : senha } ).then(function(data) {
    //     alert("A senha foi alterada com sucesso!!!!");
    //     window.location.href = "login.html";
    // }).catch(function(error) {
    //     alert("Erro ao alterar a senha!!!!");
    // });

    axios.post("https://pwprojetoback-end.herokuapp.com/cliente/resetar", { email: email, token: token, senha: senha }).then(() => {
        alert("A senha foi alterada com sucesso!!!!");
        router.push('/login');
    }).catch((error) => {
        console.log(error);
        alert("Erro ao alterar a senha!!!!")
    });
}