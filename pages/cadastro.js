import Head from "next/head"
import { useRouter } from "next/router";

import axios from "axios";

export default function Cadastro() {
    const router = useRouter();
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
                                            <input id="nom_cliente" type="text" className="form-control" placeholder="Digite seu nome" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>CPF:</label>
                                            <input id="num_cpf" type="text" className="form-control" placeholder="Digite seu CPF" />
                                        </div>
                                        <div className="col">
                                            <label>Telefone:</label>
                                            <input id="num_telefone" type="text" className="form-control" name="Telefone" placeholder="Digite o seu telefone" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                        <label>E-mail:</label>
                                        <input id="des_email" type="email" className="form-control" name="Email" placeholder="Digite o seu email" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Endereço completo:</label>
                                            <input id="des_endereco" type="text" className="form-control" placeholder="Digite seu logradouro" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Senha:</label>
                                            <input id="des_senha" type="password" className="form-control" placeholder="Crie uma senha" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Confirmação de senha:</label>
                                            <input id="senha1" type="password" className="form-control" placeholder="Confirme sua senha" /><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 col-sm-6 col-lg-4">
                                            <button type="button" className="btn botao-sec" onClick={() => cadastro(router)}>Confirmar</button>
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

async function cadastro(router) {

    const nome = document.getElementById("nom_cliente").value;
    const cpf = document.getElementById("num_cpf").value;
    const telefone = document.getElementById("num_telefone").value;
    const email = document.getElementById("des_email").value;
    const senha = document.getElementById("des_senha").value;
    const senhaConfirmacao = document.getElementById("senha1").value;
    const endereco = document.getElementById("des_endereco").value;

    if (nome.length <= 3) {
        alert("Informe seu nome completo!!!");
        nom_cliente.focus();
        return false;
    }
    if (cpf.length < 11) {
        alert("Informe seu CPF completo!!!");
        num_cpf.focus();
        return false;
    }
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

    axios.post('https://pwprojetoback-end.herokuapp.com/cliente/cadastro', { nom_cliente: nome, num_cpf: cpf, des_email: email, des_senha: senha, des_endereco: endereco, num_telefone: telefone }).then((res) => {
        if (res.data.status == "ok") {
            alert("Cadastro realizado com sucesso!!!");
            router.push('/login');
        } else {
            alert("Erro ao realizar o cadastro!!!");
        }
    }).catch(function (error) {
        console.log(error);
    });
}