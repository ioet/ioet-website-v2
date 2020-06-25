import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "376px",
  },
  text: {
    textAlign: "justify",
  },
}))

const ImageSelection = ({ imgUrl, imgAlt, title, bodyText, reversed }) => {
  const classes = useStyles()

  const imageGridItem = (
    <Grid item xs={12} sm={6}>
      <img className={classes.img} alt={imgAlt} src={`https://${imgUrl}`} />
    </Grid>
  )

  const textGriditem = (
    <Grid item container xs={12} sm={6}>
      <Grid item container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.text}>
            {bodyText}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
  const gridItemList = reversed
    ? [textGriditem, imageGridItem]
    : [imageGridItem, textGriditem]

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        {gridItemList.map(item => item)}
      </Grid>
    </Paper>
  )
}

export default ImageSelection
