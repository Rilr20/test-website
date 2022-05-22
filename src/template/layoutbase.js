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
            light: "#E7B1B9",
            main: "#DF99A3",
            dark: "#DD929E",
            superdark: "#D88390",
        },
        white: {
            main: "#ab32cc"
        },
        secondary: {
            superlight: "#FBF5EE",
            light: "#F9EFE3",
            main: "#F4E2CD",
            dark: "#F1D9BC",
            superdark: "#EDCFAB"
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
    }
})

const thunderTheme = createTheme({
    palette: {
        primary: {
            superlight: "#999070",
            light: "#8F8666",
            main: "#7C7458",
            dark: "#777055",
            superdark: "#6B654C",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#E1BA66",
            light: "#DDB255",
            main: "#DDB155",
            dark: "#DAAA44",
            superdark: "#D7A333"
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
    }
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
            superlight: "#5D9893",
            light: "#558B87",
            main: "#4C7D79",
            dark: "#46726E",
            superdark: "#3E6562"
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
    }
})

const greyTheme = createTheme({
    palette: {
        primary: {
            superlight: "#333333",
            light: "#292929",
            main: "#121212",
            dark: "#1F1F1F",
            superdark: "#121212",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#655353",
            light: "#5A4949",
            main: "#4C3E3E",
            dark: "#433737",
            superdark: "#382E2E"
        },
        black: {
            superlight: "#4A3F50",
            light: "#352D39",
            main: "#27212a",
            dark: "#201B22",
            superdark: "#0B090B"
        },
        text: {
            main: "#fff"
        }
    }
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
        text: {
            main: "#000"
        }
    }
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
            superlight: "#93A7F0",
            light: "#8199EE",
            main: "#718CEC",
            dark: "#6F8AEB",
            superdark: "#5D7CE9"
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
    }
})


const whiteTheme = createTheme({
    palette: {
        primary: {
            superlight: "#EFF9FA",
            light: "#B0DFE8",
            main: "#C0E6EC",
            dark: "#D0ECF1",
            superdark: "#DAF0F4",
        },
        white: {
            main: "#fff"
        },
        secondary: {
            superlight: "#ECF4F8",
            light: "#E1EEF4",
            main: "#D2E5EE",
            dark: "#C3DCE9",
            superdark: "#B5D4E3"
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
    }
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
            console.log("default");

            theme = defaultTheme
            break;
    }

    return (
        <ThemeProvider theme={theme}>
            <div>{children}</div>
        </ThemeProvider>
    )
}