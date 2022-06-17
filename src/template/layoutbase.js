import { createTheme, ThemeProvider } from '@mui/material'
// change black to neutral black Okayge
const defaultTheme = createTheme({
    palette: {
        primary: {
            superlight: "#A3A0BB",
            light: "#8C88AA",
            main: "#6e6994",
            dark: "#625D83",
            superdark: "#504C6B"
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
        text: {
            main: "#000"
        }
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

const sunTheme = createTheme({
    palette: {
        primary: {
            superlight: "#EBC1C7",
            light: "#DF99A3",
            main: "#D88390",
            dark: "#CE6474",
            superdark: "#c64b5e",
        },
        white: {
            main: "#ab32cc"
        },
        secondary: {
            superlight: "#F4E2CD",
            light: "#EDCEAB",
            main: "#E5BB8A",
            dark: "#DEA768",
            superdark: "#D79447"
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: "#000"
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

const thunderTheme = createTheme({
    palette: {
        primary: {
            superlight: "#EFDAA9",
            light: "#E9CB86",
            main: "#E3BD64",
            dark: "#DCAE41",
            superdark: "#CF9C26",
        },
        white: {
            main: "#fff"
        }, 
        secondary: {
            superlight: "#EEDAFB",
            light: "#DEB6F6",
            main: "#CD91F2",
            dark: "#BC6DEE",
            superdark: "#AC48EA"
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: "#000"
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

const cloudsTheme = createTheme({
    palette: {
        primary: {
            superlight: "#EEFBF9",
            light: "#D5F5F1",
            main: "#CDF3EE",
            dark: "#BDEFE9",
            superdark: "#ACECE3",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#A6C9C6",
            light: "#8DB9B6",
            main: "#74AAA5",
            dark: "#5D9893",
            superdark: "#4C7D79"
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: "#000"
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

const greyTheme = createTheme({
    palette: {
        primary: {
            superlight: "#666666",
            light: "#525252",
            main: "#3D3D3D",
            dark: "#292929",
            superdark: "#121212",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#7B6565",
            light: "#655353",
            main: "#4C3E3E",
            dark: "#382E2E",
            superdark: "#221C1C",
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: "#fff"
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

const transparentTheme = createTheme({
    palette: {
        primary: {
            superlight: "#E0E0FF80",
            light: "#D6D6FF80",
            main: "#C2C2FF80",
            dark: "#ADADFF80",
            superdark: "#9999FF80",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#E0FFFB80",
            light: "#D6FFFA80",
            main: "#C2FFF780",
            dark: "#C2FFF780",
            superdark: "#99FFF180"
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: "#000"
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

const blueTheme = createTheme({
    palette: {
        primary: {
            superlight: "#3350C1",
            light: "#2F49B1",
            main: "#2B44A3",
            dark: "#273C91",
            superdark: "#223581",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#496E97",
            light: "#3C5A7C",
            main: "#2E4660",
            dark: "#213245",
            superdark: "#141E29"
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: "#fff"
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

const whiteTheme = createTheme({
    palette: {
        primary: {
            superlight: "#E0F3F6",
            light: "#C0E6EC",
            main: "#A1DAE3",
            dark: "#81CED9", 
            superdark: "#62C1D0",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#E1EEF4",
            light: "#C4DDE9",
            main: "#A6CCDD",
            dark: "#89BBD2",
            superdark: "#6BAAC7"
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: "#000"
    },
    typography: { fontFamily: "Mohave", color: "#292524" },
})

export default function LayoutBase({ children }) {
    let theme;
    const themeName = children.props.children.props.data
    switch (themeName) {
        case "sunny":
        case "clear":
            // console.log("sunny");
            theme = sunTheme
            break;
        case "thunder":
            theme = thunderTheme
            break;
        case "cloudy":
            theme = cloudsTheme
            break;
        case "overcast":
            theme = greyTheme
            break;
        case "fog":
        case "mist":
            theme = transparentTheme
            break;
        case "drizzle":
        case "rain":
            theme = blueTheme
            break;
        case "pellets":
        case "snow":
        case "sleet":
        case "blizzard":
            theme = whiteTheme
            break;
        default:
            theme = defaultTheme
            break;
    }

    return (
        <ThemeProvider theme={theme}>
            <div>{children}</div>
        </ThemeProvider>
    )
}