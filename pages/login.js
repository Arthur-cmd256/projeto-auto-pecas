import axios from "axios";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'

import { useState } from 'react'
import { useEffect } from "react";


function Logar() {
    const router = useRouter()

    const [enviar, setEnviar] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false)



    // des_email: email, des_senha: senha
    useEffect(() => {
        if (enviar) {
            setLoading(true)
            axios.post('https://pwprojetoback-end.herokuapp.com/cliente/login', {
                des_email: email,
                des_senha: senha
            }).then((res) => {
                window.sessionStorage.setItem("token", res.data.token);
                window.sessionStorage.setItem("id", res.data.cliente._id);
                window.sessionStorage.setItem("nome", res.data.cliente.nom_cliente);
                window.sessionStorage.setItem("cpf", res.data.cliente.num_cpf);
                window.sessionStorage.setItem("email", res.data.cliente.des_email);
                window.sessionStorage.setItem("endereco", res.data.cliente.des_endereco);
                window.sessionStorage.setItem("telefone", res.data.cliente.num_telefone);
                window.sessionStorage.setItem("cesta", res.data.cliente.cesta);

                router.push(`/conta`);
                setEnviar(false);
                setLoading(false);
            }).catch((erro) => {
                console.log(erro);
                setEnviar(false);
                setError(true);
                setLoading(false);
            })
        }
    }, [email, enviar, router, senha]);

    if (isLoading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )

    if (error && !isLoading) {
        return (
            <>
                <div className="row my-3">
                    <div className="alert alert-danger" role="alert">
                        <p className="text-center m-0">Usuario ou senha incorretos</p>
                    </div>
                </div>
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
                        <input id="des_email" type="email" className="form-control" placeholder="Digite o seu email" onKeyUp={(e) => setEmail(e.target.value)} />
                        <label>Senha</label>
                        <input id="des_senha" type="password" className="form-control" placeholder="Digite sua senha" onKeyUp={(e) => setSenha(e.target.value)} />
                        <p>Esqueci minha senha, <Link href="/esqueci"><a className="link">clique aqui</a></Link></p>
                        <button type="button" className="btn botao-sec" onClick={() => { setEnviar(true) }}>Entrar</button>
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
            </>
        )

    } else if (!error) {
        return (
            <>
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
                        <input id="des_email" type="email" className="form-control" placeholder="Digite o seu email" onKeyUp={(e) => setEmail(e.target.value)} />
                        <label>Senha</label>
                        <input id="des_senha" type="password" className="form-control" placeholder="Digite sua senha" onKeyUp={(e) => setSenha(e.target.value)} />
                        <p>Esqueci minha senha, <Link href="/esqueci"><a className="link">clique aqui</a></Link></p>
                        <button type="button" className="btn botao-sec" onClick={() => { setEnviar(true) }}>Entrar</button>
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
            </>
        )
    }
}


export default function Login() {
    const router = useRouter()
    const [token, setToken] = useState();
    
    useEffect(() => {
        setToken(window.sessionStorage.getItem("token"));
    }, [])
    

    if(token) {
        router.push(`/conta`);
    }

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
                        {Logar()}
                    </div>
                </div>
            </main>
        </>
    )
}