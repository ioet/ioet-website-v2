import React from "react"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  title: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1.2),
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
}))

const NavigationLink = ({ slug, caption }) => {
  const classes = useStyles()
  return (
    <Typography variant="subtitle1" className={classes.title}>
      <Link className={classes.link} to={`/${slug}`}>
        {caption}
      </Link>
    </Typography>
  )
}

export default NavigationLink
