import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  image: {
    margin: theme.spacing(1),
    maxHeight: 30,
    padding: 8,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  focusVisible: {},
}))

const SocialIcon = ({ slug, imageUrl, linkTo }) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={`${linkTo}`}>
      <img className={classes.image} src={`${imageUrl}`} alt={`${slug}`} />
    </Link>
  )
}

export default SocialIcon
