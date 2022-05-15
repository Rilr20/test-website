import { createTheme, ThemeProvider } from '@mui/material'


export default function LayoutBase({ children }) {
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
                main: "#EBDEE9"
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
    console.log(children)
    console.log(children.type.PageTitle)

    return (
        <ThemeProvider theme={theme}>
            <div>{children}</div>
        </ThemeProvider>
    )
}