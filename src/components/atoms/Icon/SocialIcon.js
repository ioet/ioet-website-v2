import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Icon from "@material-ui/core/Icon"

const useStyles = makeStyles(theme => ({
  image: {
    height: 30,
    width: 30,
    padding: 8,
  },
  focusVisible: {},
  icon: {
    margin: theme.spacing(1),
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
}))

const SocialIcon = ({ slug, imageUrl, linkTo }) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={`${linkTo}`}>
      <Icon className={classes.icon} style={{ fontSize: 40 }}>
        <img className={classes.image} src={`${imageUrl}`} alt={`${slug}`} />
      </Icon>
    </Link>
  )
}

export default SocialIcon
