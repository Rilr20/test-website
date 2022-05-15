import Navbar from '../src/components/navbar'
import '../src/styles/globals.css'
import '../src/styles/css/app.min.css'
import Layout from './template/LayoutOne'

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  const getLayout = Component.getLayout || ((page) => page)


  return getLayout(<Component {...pageProps} />)
}
// const LayoutEmpty = ({ children }) => <>{children}</>