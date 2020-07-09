import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: 355,
    margin: "auto",
    display: "block",
  },
}))

const CheckerboardItemImage = ({imageUrl, title}) => {
  const classes = useStyles()
  return (
    <Grid item xs>
      <img className={classes.image} src={`${imageUrl}`} alt={`${title}`}></img>
    </Grid>
  )
}

export default CheckerboardItemImage
