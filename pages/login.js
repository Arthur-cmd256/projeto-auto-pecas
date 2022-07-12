import Head from "next/head";
import Link from "next/link";

export default function Login() {
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
                        Login
                        <hr />
                    </h4>
                </div>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="row">
                            <h5 className="text-center">
                                Entrar
                            </h5>
                        </div>
                        <div className="row">
                            <form>
                                <label>
                                    E-mail
                                </label>
                                <input id="email" type="email" className="form-control" placeholder="Digite o seu email" />
                                <label>Senha</label>
                                <input id="senha" type="password" className="form-control" placeholder="Digite sua senha" />
                                <p>Esqueci minha senha, <Link href="/esqueci"><a className="link">clique aqui</a></Link></p>
                                <button type="button" className="btn botao-sec" onClick={() => login()}>Entrar</button>
                            </form>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <h5>
                                    Ainda não tem cadastro?
                                </h5>
                                <Link href="/cadastro">
                                    <button type="button" className="btn botao">Clique aqui para se cadastrar</button>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function login(){

    if(email.value.length<6 || email.value.indexOf("@") <=0 || email.value.lastIndexOf(".") <=email.value.indexOf("@")  ){
        alert("Informe um e-mail válido!!");
        email.focus();
        return false;
    }

    if(document.getElementById("senha").value.length === 0){
    alert('Por favor, preencha sua senha');
    document.getElementById("senha").focus();
    return false
    }
    
    alert("tudo certo!!!!");
}  