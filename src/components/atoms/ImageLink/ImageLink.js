import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  image: {
    position: "relative",
    maxHeight: 50,
  },
  focusVisible: {},
}))

const ImageLink = ({ slug, imageUrl }) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={`/${slug}`}>
      <img className={classes.image} src={`${imageUrl}`} alt={`${slug}`} />
    </Link>
  )
}

export default ImageLink
