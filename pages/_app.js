import '../src/styles/css/app.min.css'
export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
    const getLayout = Component.getLayout || ((page) => page)


    return getLayout(<Component {...pageProps} />)
}
// const LayoutEmpty = ({ children }) => <>{children}</>