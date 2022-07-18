import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <nav className={`row mw-100 align-items-center py-2 px-5 mx-0 mb-4 ${styles.nav}`}>
                <div className="col text-center">
                    <Link href={`/busca/Alarme`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Alarme</p>
                        </a>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link href={`/busca/Alto Falante`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Alto Falante</p>
                        </a>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link href={`/busca/Bateria`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Bateria</p>
                        </a>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link href={`/busca/Farol`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Farol</p>
                        </a>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link href={`/busca/Freio`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Freio</p>
                        </a>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link href={`/busca/Lâmpada`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Lâmpada</p>
                        </a>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link href={`/busca/Óleo`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Óleo Motor</p>
                        </a>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link href={`/busca/Pneu`}>
                        <a>
                            <p className={`my-1 ${styles.opcoesNav}`}>Pneus</p>
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}