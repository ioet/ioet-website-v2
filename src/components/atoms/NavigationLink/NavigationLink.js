import React from "react"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme"
import { ThemeProvider } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(5.6),
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: theme.spacing(1.6),
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    [theme.breakpoints.only("sm")]: {
      fontSize: "13px",
    },
  },
}))

const NavigationLink = ({ slug, caption }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" className={classes.title}>
        <Link className={classes.link} to={`/${slug}`}>
          {caption}
        </Link>
      </Typography>
    </ThemeProvider>
  )
}

export default NavigationLink
