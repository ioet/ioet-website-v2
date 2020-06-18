import React from "react"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  title: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
}))

const NavigationLink = ({ slug, caption }) => {
  const classes = useStyles()
  return (
    <Typography variant="h6" className={classes.title}>
      <Link className={classes.link} to={`/${slug}`}>
        {caption}
      </Link>
    </Typography>
  )
}

export default NavigationLink
