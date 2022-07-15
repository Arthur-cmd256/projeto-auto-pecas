import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
        <>
            <nav className={`row mw-100 align-items-center py-2 px-5 mx-0 mb-4 ${styles.nav}`}>
                <div className="col text-center">
                    <a href="">
                        <p className={`my-1 ${styles.opcoesNav}`}>Alarme e Segurança</p>
                    </a>
                </div>
                <div className="col text-center">
                    <a href="">
                        <p className={`my-1 ${styles.opcoesNav}`}>Autopeças</p>
                    </a>
                </div>
                <div className="col text-center">
                    <a href="">
                        <p className={`my-1 ${styles.opcoesNav}`}>Elétrica</p>
                    </a>
                </div>
                
                <div className="col text-center">
                    <a href="">
                        <p className={`my-1 ${styles.opcoesNav}`}>Farol e Iluminação</p>
                    </a>
                </div>
                <div className="col text-center">
                    <a href="">
                        <p className={`my-1 ${styles.opcoesNav}`}>Pneus</p>
                    </a>
                </div>
                <div className="col text-center">
                    <a href="">
                        <p className={`my-1 ${styles.opcoesNav}`}>Som e Vídeo</p>
                    </a>
                </div>
            </nav>
        </>
    )
}