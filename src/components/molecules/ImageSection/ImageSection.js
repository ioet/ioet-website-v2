import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper, Typography } from "@material-ui/core"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(0.5),
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
        {bodyText ? (
          <Grid item>
            <RichTextWrapper richTextJson={bodyText}></RichTextWrapper>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  )

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} direction={reversed ? "row-reverse" : "row"} alignItems="center">
        {imageGridItem}
        {textGriditem}
      </Grid>
    </Paper>
  )
}

export default ImageSelection
