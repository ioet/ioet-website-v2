import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
const breakpoints = createBreakpoints({})

let theme = createMuiTheme({
  typography: {
    lineHheight: 1.5,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 900,
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
  overrides: {
    MuiTypography: {
      h1: {
        [breakpoints.down("sm")]: {
          fontSize: "4.1rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "3rem",
        },
      },
      h2: {
        [breakpoints.down("sm")]: {
          fontSize: "2.6rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "2.1rem",
        },
      },
      h3: {
        [breakpoints.down("sm")]: {
          fontSize: "2.1rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "1.7rem",
        },
      },
      h4: {
        [breakpoints.down("sm")]: {
          fontSize: "1.5rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "1.2rem",
        },
      },
      h5: {
        [breakpoints.down("sm")]: {
          fontSize: "1.1rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "0.8rem",
        },
      },
      h6: {
        [breakpoints.down("sm")]: {
          fontSize: "0.9rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "0.7rem",
        },
      },
      p: {
        [breakpoints.down("sm")]: {
          fontSize: "0.9rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "0.7rem",
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#FF5E00",
      main: "#fb5432",
      dark: "#c01704",
    },
    secondary: {
      light: "#d6e0e5",
      main: "#a5aeb3",
      dark: "#767f83",
    },
    info: {
      light: "#797e67",
      main: "#4d523c",
      dark: "#252a16",
    },
    success: {
      light: "#6bedf7",
      main: "#27bac4",
      dark: "#008994",
    },
    gradient: {
      ioetOrange: "linear-gradient(90deg, rgba(243,83,52,1) 0%, rgba(243,64,76,1) 100%)",
      ioetMetro: "linear-gradient(90deg, rgba(243,64,84,1) 0%, rgba(243,86,50,1) 100%)",
    },
    transparent: {
      ioetOrange: "linear-gradient(to right, rgb(255, 63, 86) -5%, rgba(252, 86, 48, 0.5) 88%)",
      ioetRed: "linear-gradient(to right, rgb(255, 57, 72) -5%, rgba(255, 18, 36, 0.5) 88%)",
      ioetMetro: "linear-gradient(to right, rgb(22, 177, 197) -5%, rgba(116, 187, 196, 0.5) 88%)",
      ioetPurple: "linear-gradient(to right, rgb(134, 19, 136) -5%, rgba(231, 179, 232, 0.5) 88%)",
    },
  },
  tonalOffset: 0.2,
})
// To use responsive font sizes, include the following line
theme = responsiveFontSizes(theme)

export default theme
