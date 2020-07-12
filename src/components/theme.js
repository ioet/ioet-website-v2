import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

  let theme = createMuiTheme({
    typography: {
      lineHheight: 1.5,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 900,
      fontFamily: [
        'Barlow',
        'sans-serif',
        ].join(','),
    },

    palette: {
      primary: {
        ligth: '#FF5E00',
        main: '#fb5432',
        dark: '#c01704',
        gradient: "linear-gradient(90deg, rgba(243,83,52,1) 0%, rgba(243,64,76,1) 100%)"
      },
      secondary: {
        ligth: '#d6e0e5',
        main: '#a5aeb3',
        dark: '#767f83'
      },
      info: {
        ligth: '#797e67',
        main: '#4d523c',
        dark: '#252a16'
      },
      success: {
        ligth: '#6bedf7',
        main: '#27bac4',
        dark: '#008994'
      }
    },
    tonalOffset: 0.2,
  });
  // To use responsive font sizes, include the following line
  theme = responsiveFontSizes(theme)

export default theme