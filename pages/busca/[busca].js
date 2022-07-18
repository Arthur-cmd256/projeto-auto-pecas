import Head from "next/head"
import { useRouter } from "next/router"

import CardProduct from '../../components/CardProduct'

import { useState } from 'react'
import { useEffect } from "react";

function Buscar(busca) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://pwprojetoback-end.herokuapp.com/produto/busca/${busca}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [busca])

    if (isLoading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )

    if (data.length == 0) {
        return (
            <>
                <div className="row">
                    <h4>
                        Busca por: {busca}
                        <hr />
                    </h4>
                </div>

                <div className="row text-center">
                    <p>Produto não encontradoa</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="row">
                <h4>
                    Busca por: {busca}
                    <hr />
                </h4>
            </div>

            <div className="row justify-content-center">
                {data.map((produto) => { return (<CardProduct key={produto._id} value={produto} />) })}
            </div>
        </>

    )
}



export default function Busca() {
    const router = useRouter()
    const busca = router.query.busca

    return (
        <>
            <Head>
                <title>Classic</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className="col-md-10 offset-md-1">
                {Buscar(busca)}
            </main>
        </>
    )
}