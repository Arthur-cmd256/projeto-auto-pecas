import Head from "next/head"
import CardProduct from "../components/CardProduct"

export default function Busca() {
    return (
        <>
            <Head>
                <title>Classic</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className="col-md-10 offset-md-1">

                <div className="row">
                    <h4>
                        Produtos: Filtro de oleo
                        <hr/>
                    </h4>
                </div>

                <div className="row justify-content-center">
                    {/* <CardProduct/> */}
                </div>

            </main>
        </>
    )
}