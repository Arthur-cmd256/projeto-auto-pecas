import Image from "next/image"
import Link from "next/link"

import styles from '../styles/CardProduct.module.css'

export default function CardProduct({ value }) {
    const img = value.img_produto.split("|")[0];
    value.val_produto = parseFloat(value.val_produto).toFixed(2)
    const val_desc = parseFloat(value.val_produto - ((value.val_produto * 15) / 100)).toFixed(2);
    return (
        <div className={`col-7 col-sm-5 col-sm-4 col-md-3 col-xxl-2 mx-4 mb-5 border p-0 ${styles.cartao}`}>
            <div className="row">
                <div className="col">
                    <div id={styles.cartaoTopo} className="row m-0 py-2">
                        <p className='m-0'>15% de Desconto no PIX</p>
                    </div>
                </div>
            </div>
            <div className="row py-1">
                <div className="col ">
                    <Link href={`/detalhe/${value._id}`}>
                        <a className="row justify-content-center py-2">
                            <Image id="imagem-produto" src={img} width={230} height={230} alt="" />
                        </a>
                    </Link>
                    <div className="row px-1">
                        <h5 className={`m-0`}>{value.nom_produto}</h5>
                    </div>
                    <div className="row px-2 d-flex">
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F79256" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F79256" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F79256" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F79256" className="bi bi-star-half" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                            </svg>
                        </div>
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F79256" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="row mt-3 px-2">
                        <p className='m-0'>De <span className={styles.lineThrough}>R$ {value.val_produto.replace('.', ",")}</span></p>
                    </div>
                    <div className="row mt-1 mb-0 h4 px-2">
                        <h5 className="m-0">Por R$ {val_desc.replace('.', ",")}</h5>
                    </div>
                    <div className="row mt-0 mb-2 p-0 px-2">
                        <p className="m-0">no Pix ou 1x no cart??o</p>
                    </div>
                </div>
            </div>
        </div>

    )

}