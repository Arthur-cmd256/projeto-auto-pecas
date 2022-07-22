import { useState } from 'react'
import { useEffect } from "react";

function BuscaDados() {
    const [nome, setNome] = useState("")

    useEffect(() => {
        setNome(window.sessionStorage.getItem("nome"))
    }, [])

    return (
        <>
            <h3 className='text-center'>Olá, {nome}</h3>
        </>
    )
}


export default function Conta(){
    return (
        <>
            <h1 className="text-center">Conta</h1>
            {BuscaDados()}
        </>
    )
}