import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
  },
  focusVisible: {},
}))

const ImageLink = ({ slug, imageUrl }) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={`/${slug}`}>
      {/* <ButtonBase
        focusRipple
        className={classes.image}
        style={{
          width: "5%",
        }}
      > */}
      <img className={classes.image} src={`${imageUrl}`} alt={`${slug}`} />
      {/* </ButtonBase> */}
    </Link>
  )
}

export default ImageLink
