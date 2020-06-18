import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"

const useStyles = makeStyles(theme => ({
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  }
}))

const ImageLink = ({ slug, imageUrl }) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={`/${slug}`}>
      <ButtonBase
        focusRipple
        className={classes.image}
        style={{
          width: "40%"
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <span className={classes.imageButton}>
        </span>
      </ButtonBase>
    </Link>
  )
}

export default ImageLink