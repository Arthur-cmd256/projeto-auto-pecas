import Head from "next/head"

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
                                    <tr>
                                        <td>Produto 1</td>
                                        <td>1x</td>
                                        <td>R$: 99,99</td>
                                    </tr>
                                    <tr>
                                        <td>Produto 2</td>
                                        <td>2x</td>
                                        <td>R$: 144,40</td>

                                    </tr>
                                    <tr>
                                        <td>Produto 3</td>
                                        <td>1x</td>
                                        <td>R$: 87,99</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td>R$: 332,38</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div id="cesta-butoes">
                                <button type="button" className="btn mr-1 botao" title="Limpar os itens da cesta">LIMPAR CESTA</button>
                                <button type="button" className="btn mx-1 botao-sec" title="Finalizar compra" onClick={() => finalizar()}>FINALIZAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function finalizar() {
    alert("Compra finalizada com sucesso !!!!");
}
