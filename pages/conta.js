import Head from 'next/head';
import { useRouter } from 'next/router'

import { useState } from 'react'
import { useEffect } from "react";

function LimpaDados(limpar){
    const router = useRouter()
    useEffect(() => {
        if (limpar) {
            sessionStorage.clear(); 
            router.push(`/login`);
        }
        
    }, [limpar, router])
}

function BuscaDados() {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")
    const [limpar, setLimpar] = useState(false)

    useEffect(() => {
        setNome(window.sessionStorage.getItem("nome"))
        setCpf(window.sessionStorage.getItem('cpf'))
        setEmail(window.sessionStorage.getItem('email'))
        setEndereco(window.sessionStorage.getItem('endereco'))
        setTelefone(window.sessionStorage.getItem('telefone'))
    }, [])

    return (
        <div className='col'>
            <div className='row'>
                <h4 className=''>Olá, {nome}</h4>
            </div>
            <div className='row'>
                <p className='my-3'>Dados cadastrais</p>
            </div>
            <div className='row'>
                <ul>
                    <li>CPF: {cpf}</li>
                    <li>Email: {email}</li>
                    <li>Telefone: {telefone}</li>
                    <li>Endereco: {endereco}</li>
                </ul>
            </div>
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn botao-sec' onClick={() => setLimpar(true)}>SAIR</button>
                    {LimpaDados(limpar)}
                </div>
            </div>
        </div>
    )
}

export default function Conta() {
    return (
        <>
            <Head>
                <title>Classic</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className={`col-md-10 offset-md-1`}>

                <div className="row mw-100">
                    <h3>
                        Conta
                        <hr />
                    </h3>
                </div>
                <div className="row justify-content-center">
                    {BuscaDados()}
                </div>

            </main>

        </>
    )
}