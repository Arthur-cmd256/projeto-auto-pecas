import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

export default function Esqueci() {
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
                        Esqueci a senha
                        <hr />
                    </h4>
                </div>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="row">
                            <h5 className="text-center">
                                Recuperação
                            </h5>
                        </div>
                        <div className="row">
                            <form>
                                <label>
                                    E-mail:
                                </label>
                                <input id="des_email" type="email" className="form-control" placeholder="Digite o seu email cadastrado" />
                                <button type="button" className="btn botao-sec mt-3" onClick={() => esqueci(router)}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

async function esqueci(router){

    const email = document.getElementById("des_email").value;

    if(email.length < 6 || email.indexOf("@") <=0 || email.lastIndexOf(".") <= email.indexOf("@")  ){
        alert("informe um email valido!!");
        des_email.focus();
        return false;
    }

    axios.post("https://pwprojetoback-end.herokuapp.com/cliente/recuperar", { des_email : email }).then(() => {
        alert("Enviamos a você um email com um link para concluir a redefinição de sua senha !!!!");
        router.push('/altera');
    }).catch((error) => {
        console.log(error)
        alert("Erro ao enviar email");
    })
}   