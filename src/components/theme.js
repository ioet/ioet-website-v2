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
        main: '#FB5432',
        ligth: '#FF5E00',
        dark: '#27BAC4'
      },
      secondary: {
        main: '#000000',
      },
      info: {
        main: '#27BAC4'
      }
    },
    tonalOffset: 0.2,

  });
  // To use responsive font sizes, include the following line
  theme = responsiveFontSizes(theme)

export default theme
