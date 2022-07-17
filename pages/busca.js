import Head from "next/head"
import CardProduct from '../components/CardProduct'

export async function getStaticProps() {

    // const url =  window.location.href;
    // const name = url.split('value=')[1];
    
    const data = await fetch(`https://pwprojetoback-end.herokuapp.com/produto/busca/kit`)

    const produtos = await data.json()

    return {
        props: { produtos }
    }
}

export default function Busca({ produtos}) {
    
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
                        Produtos: {}
                        <hr />
                    </h4>
                </div>

                <div className="row justify-content-center">
                    {produtos.map((produto) => (<CardProduct key={produto._id} value={produto} />))}
                </div>

            </main>
        </>
    )
}