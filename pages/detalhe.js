import Head from "next/head"
import Image from "next/image"

export default function Detalhe() {
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
                                    <Image src="/images/filtro-oleo-1.png" width="400px" height="400px" alt="" />
                                </button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="d-block btn">
                                    <Image src="/images/filtro-oleo-1.png" width="400px" height="400px" alt="" />
                                </button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className="d-block btn">
                                    <Image src="/images/filtro-oleo-1.png" width="400px" height="400px" alt="" />
                                </button>
                            </div>
                            <div className="col-10">
                                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                                    <div className="carousel-inner text-center">
                                        <div className="carousel-item active">
                                            <Image src="/images/filtro-oleo-1.png" width="400px" height="400px" alt="" className="d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/images/filtro-oleo-1.png" width="400px" height="400px" alt="" className="d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/images/filtro-oleo-1.png" width="400px" height="400px" alt="" className="d-block w-100" />
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
                            <p className="m-0">Classificação: filtro</p>
                            <h4>
                                Filtro Oléo Do Motor 1.0 Corsa Classic 2012 2013 2014
                            </h4>
                            <p>Cód. Item: 123456789</p>
                        </div>
                        <div className="row d-flex d-flex align-items-center p-1">
                            <div className="col">
                                <p className='m-0'><span className="lineThrough">R$ 320,68</span></p>
                                <h5 className="m-0">R$ 271,29</h5>
                                <p className="m-0">ou até 10x de R$ 300,00 sem juros</p>

                            </div>
                            <div className="col">
                                <div className="row text-center">
                                    <p className="m-0">Quantidade em estoque: 1</p>
                                    <button className="d-block btn botao-sec mb-1">Comprar</button>
                                    <button className="btn botao">Adicionar ao carrinho</button>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="row">
                            <a href="#" className="link">Ver metodos de pagemento</a>
                        </div>
                        </div>
                        <div className="row border border-dark rounded my-3 mx-1 p-1">
                            <h5>Descrição</h5>
                            <p>
                                88905845 Filtro de Oleo do Motor (Para Motores GM 1.0 / 1.4 / 1.6 / 1.8/ 2.0 / 2.2 / 2.4)F
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}