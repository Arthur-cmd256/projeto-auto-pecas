import '../styles/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import { useEffect } from "react";


import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
