import '../styles/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'


import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {

  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
