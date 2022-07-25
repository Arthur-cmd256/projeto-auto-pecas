import axios from "axios";
import Head from "next/head"
import Link from "next/link";
import { useRouter } from 'next/router'

import { useState } from 'react'
import { useEffect } from "react";

function BuscaCesta() {
    const router = useRouter()
    const [token, setToken] = useState('')
    const [dataCesta, setDataCesta] = useState({})
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [cesta, setCesta] = useState("")

    useEffect(() => {
        setLoading(true);
        setError(false);
        setCesta(window.sessionStorage.getItem('cesta'));
        setToken(window.sessionStorage.getItem('token'));
        if (token != null) {
            axios.get('https://pwprojetoback-end.herokuapp.com/cesta/', {
                headers: {
                    'Authorization': "Bearer " + token
                }
            })
                .then((res) => {
                    setDataCesta(res.data);
                    setError(false);
                    setLoading(false);
                }).catch((error) => { console.log(error); setError(true); setLoading(false); })
        }

    }, [token])

    if (isLoading && token != null) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )

    if (token == null) {
        return (
            <>
                <div className="row my-3">
                    <div className="alert alert-danger text-center" role="alert">
                        <h4 className="text-center">Você precisa estar logado para ver a sua cesta</h4>
                    </div>
                </div>
                <div className="text-center">
                    <Link href='/login'><a className="text-center link2">Ir para a tela de login</a></Link>
                </div>
            </>
        )
    }

    if (!error) {
        if (dataCesta.qtd_itens !== 0) {
            const produtos = dataCesta.produtos
            return (
                <>
                    <div className="row ">
                        <div className="col-10 offset-1 cartao p-3">
                            <div className="row h4 mb-3">
                                <h4>Produtos adicionados a cesta</h4>
                            </div>

                            <div className="row">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>QTD</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {produtos?.map((produto) => {
                                            return (
                                                <tr key={produto._id}>
                                                    <td>{produto.nom_produto}</td>
                                                    <td>1</td>
                                                    <td>{produto.val_produto}</td>
                                                </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Total</td>
                                            <td>{dataCesta.qtd_itens}</td>
                                            <td>R$: {dataCesta.val_total}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div id="cesta-butoes">
                                    <button type="button" className="btn mr-1 botao" title="Limpar os itens da cesta" onClick={() => LimparCesta(token, cesta, router)}>LIMPAR CESTA</button>
                                    <button type="button" className="btn mx-1 botao-sec" title="Finalizar compra" onClick={() => Finalizar(router)}>FINALIZAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="row my-3">
                        <div className="alert alert-info text-center" role="alert">
                            <h4 className="text-center">A sua cesta está vazia</h4>
                        </div>
                    </div>
                </>
            )
        }
    } else {
        return (
            <>
                <div className="row my-3">
                    <div className="alert alert-warning text-center" role="alert">
                        <h4 className="text-center">Lentidão ao carregar, por favor aguarde</h4>
                    </div>
                </div>
            </>
        )
    }

}

export default function Cesta() {
    return (
        <>
            <Head>
                <title>Classic</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className="col-md-10 offset-md-1">

                <div className="row">
                    <h4 id="titulo-menu">
                        Cesta
                        <hr />
                    </h4>
                </div>
                {BuscaCesta()}
            </main>
        </>
    )
}

async function LimparCesta(token, cestaId, router) {
    axios.put('https://pwprojetoback-end.herokuapp.com/cesta/limpa/' + cestaId, {}, {
        headers: {
            'Authorization': "Bearer " + token
        }
    }).then((res) => {
        sessionStorage.setItem("cesta", res.data.cestaId);
        alert("Cesta Limpa !!!!");
        router.push(`/`);
    }).catch((error) => console.log(error))
}

function Finalizar(router) {
    alert("Compra finalizada com sucesso !!!!");
    router.push(`/`);
}
