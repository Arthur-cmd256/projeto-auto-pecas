import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

import axios from "axios"

export async function getStaticProps(context) {
    const { params } = context

    const data = await fetch(`https://pwprojetoback-end.herokuapp.com/produto/${params.detalheId}`)

    const produto = await data.json()

    return {
        props: { produto }
    }
}

export async function getStaticPaths() {

    const response = await fetch('https://pwprojetoback-end.herokuapp.com/produto')

    const data = await response.json()

    const paths = data.map((produto) => {
        return {
            params: {
                detalheId: `${produto._id}`
            }
        }
    })

    return { paths, fallback: false }
}

export default function Detalhe({ produto }) {
    const router = useRouter()
    const img = produto.img_produto.split("|");
    produto.val_produto = parseFloat(produto.val_produto).toFixed(2)
    const val_desc = parseFloat(produto.val_produto - ((produto.val_produto * 15) / 100)).toFixed(2);
    const val_antigo = parseFloat(parseFloat(produto.val_produto) + parseFloat(((produto.val_produto * 15) / 100))).toFixed(2);
    return (
        <>
            <Head>
                <title>Classic</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className="col-md-8 offset-md-2">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active d-block btn">
                                    <Image src={img[0]} width="400px" height="400px" alt="" />
                                </button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="d-block btn">
                                    <Image src={img[1]} width="400px" height="400px" alt="" />
                                </button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className="d-block btn">
                                    <Image src={img[2]} width="400px" height="400px" alt="" />
                                </button>
                            </div>
                            <div className="col-10">
                                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                                    <div className="carousel-inner text-center">
                                        <div className="carousel-item active">
                                            <Image src={img[0]} width="400px" height="400px" alt="" className="d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <Image src={img[1]} width="400px" height="400px" alt="" className="d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <Image src={img[2]} width="400px" height="400px" alt="" className="d-block w-100" />
                                        </div>
                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="7C90A0" className="bi bi-caret-left" viewBox="0 0 16 16">
                                            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                                        </svg>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="7C90A0" className="bi bi-caret-right" viewBox="0 0 16 16">
                                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        {/* <div className="row">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F79256">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                        </div> */}
                        <div className="row">
                            <p className="m-0">Classifica????o: {produto.cat_produto}</p>
                            <h4>
                                {produto.nom_produto}
                            </h4>
                            <p>C??d. Item: {produto._id}</p>
                        </div>
                        <div className="row d-flex d-flex align-items-center p-1">
                            <div className="col">
                                <p className='m-0'><span className="lineThrough">R$ {val_antigo.replace('.', ",")}</span></p>
                                <h4 className="m-0"><b>R$ {val_desc.replace('.', ",")}</b></h4>
                                <p className="m-0">ou at?? 10x de R$ {(produto.val_produto / 10).toFixed(2).replace('.', ",")} no cart??o</p>

                            </div>
                            <div className="col">
                                <div className="row text-center">
                                    <p className="m-0">Quantidade em estoque: {produto.qtd_produto}</p>
                                    <button className="d-block btn botao-sec mb-1" type="button" onClick={() => comprar(produto._id, router)}>Comprar</button>
                                    <button className="btn botao" type="button" onClick={() => adicionar(produto._id, router)}>Adicionar ao carrinho</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <a href="#" className="link">Ver metodos de pagemento</a>
                            </div>
                        </div>
                        <div className="row border border-dark rounded my-3 mx-1 p-1">
                            <h5>Descri????o</h5>
                            <p>
                                {produto.des_produto}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

async function comprar(produtoId, router) {
    const token = sessionStorage.getItem('token')
    if (token !== null) {

        const cestaId = sessionStorage.getItem('cesta');

        // $.ajax({ url: "https://pwprojetoback-end.herokuapp.com/cesta/"+ cestaId, type: "PUT", data: { produto: produtoId }, beforeSend: function(xhr){xhr.setRequestHeader('Authorization', authorization)}})
        axios.put('https://pwprojetoback-end.herokuapp.com/cesta/' + cestaId, { produto: produtoId }, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })

        alert('Vamos para cesta!');

        router.push('/cesta');

    } else {
        alert('Para comprar, voc?? precisa estar logado');
        router.push('/login');
    }

}

async function adicionar(produtoId, router) {
    const token = sessionStorage.getItem('token')
    if (token !== null) {

        const cestaId = sessionStorage.getItem('cesta');


        // $.ajax({ url: "https://pwprojetoback-end.herokuapp.com/cesta/" + cestaId, type: "PUT", data: { produto: produtoId }, beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', authorization) } })
        axios.put('https://pwprojetoback-end.herokuapp.com/cesta/' + cestaId, { produto: produtoId }, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })

        alert('Produto adicionado a cesta!');
    } else {
        alert('Para adicionar a cesta, voc?? precisa estar logado');
        router.push('/login');
    }

}