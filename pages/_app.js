import { createTheme, ThemeProvider } from '@mui/material'
import Navbar from '../src/components/navbar'
import '../src/styles/globals.css'
import '../src/styles/css/app.min.css'

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  const theme = createTheme({
    palette: {
      primary: {
        superlight: "#A3A0BB",
        light: "#8C88AA",
        main: "#6e6994",
        dark: "#625D83",
        transp: "504C6B"
      },
      white: {
        main: "#b4b4df"
      },
      secondary: {
        superlight: "#F8F1F9",
        light: "#EAD5EC",
        main: "#ddbbe0",
        dark: "#CE9DD2",
        superdark: "#C78FCC"
      },
      black: {
        superlight: "#4A3F50",
        light: "#352D39",
        main: "#27212a",
        dark: "#201B22",
        superdark: "#0B090B"
      },
      warning: { main: "#D97706" },
      success: { main: "#0D9488", }
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>

  )
}
