import Head from "next/head";
import Link from "next/link";

export default function Esqueci() {
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
                                <input id="email" type="email" className="form-control" placeholder="Digite o seu email cadastrado" />
                                <button type="button" className="btn botao-sec mt-3" onClick={() => esqueci()}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function esqueci(){

    if(email.value.length<6 || email.value.indexOf("@") <=0 || email.value.lastIndexOf(".") <=email.value.indexOf("@")  ){
        alert("Informe um email valido !!");
        email.focus();
        return false;
    }

    alert("Enviamos a você um email com um link para concluir a redefinição de sua senha!!");
} 