import Head from 'next/head'
import styles from '../styles/Home.module.css'

import CardProduct from '../components/CardProduct'

export async function getStaticProps() {

  const data = await fetch('https://pwprojetoback-end.herokuapp.com/produto')
  const produtos = await data.json()

  return {
    props: { produtos }
  }

}

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}

export default function Home({ produtos }) {
  return (
    <>

      <Head>
        <title>Classic</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className={`col-md-10 offset-md-1 ${styles.main}`}>

        <div className="row mw-100">
          <h4>
            Produtos em destaque
            <hr />
          </h4>
        </div>
        <div className="row justify-content-center">
          {produtos.map((produto) => {
            if (produto.ind_destaque) {
              return (
                <CardProduct key={produto._id} value={produto} />
              )
            }
          })
          }
        </div>

      </main>

    </>
  )
}
