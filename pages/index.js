import Head from 'next/head'
import styles from '../styles/Home.module.css'

import CardProduct from '../components/CardProduct'

export default function Home() {
  return (
    <>

      <Head>
        <title>Classic</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className={`col-md-10 offset-md-1 ${styles.main}`}>

        <div className="row">
          <h4>
            Produtos em destaque
            <hr/>
          </h4>
        </div>
        <div className="row justify-content-center">
          <CardProduct/>
        </div>

      </main>

    </>
  )
}
