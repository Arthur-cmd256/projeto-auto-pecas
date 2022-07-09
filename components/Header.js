import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Header.module.css'


export default function Header() {
    return (

        <header className={styles.header}>
            <div className="row align-items-center py-2">
                <Link href="/">
                    <a className="col-2 col-md-1 offset-md-1 offset-lg-2 p-2 text-center">
                        <h3 className='m-0'><b className={styles.titulo}>CLASSIC</b></h3>
                        <p className={`m-0 ${styles.subtitulo}`}>Auto Peças</p>
                    </a>
                </Link>
                <div className="col-6 text-center">
                    <form className="row">
                        <div className="col-8 offset-md-2 text-center p-0">
                            <input className="form-control" type="text" placeholder="Busca" />
                        </div>
                        <div className=" col-1 text-center">
                            <Link href="/busca">
                                <a>
                                    <button className={`btn ${styles.botao}`} type="button">OK</button>
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 text-center">
                    <div className="row">
                        <div className="col">
                            <Link href="/cesta">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#4E5166" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                                        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="/login">
                                <a >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#4E5166" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}