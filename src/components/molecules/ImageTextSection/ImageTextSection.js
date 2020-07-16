import React from "react"
import defaultStyles from "./defaultStyles"
import { getColor } from "../../../maps/colorMap"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper, Typography } from "@material-ui/core"
import { overrideStyle } from "../../../functions/stylesParser"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = props =>
  makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(props.styles.root.maringTop),
      marginBottom: theme.spacing(props.styles.root.marginBottom),
      padding: theme.spacing(props.styles.root.padding),
      margin: props.styles.root.margin,
      color: getColor(props.styles.root.color),
      background: getColor(props.styles.root.background),
    },
    img: props.styles.img,
  }))

const ImageTextSection = ({ imgUrl, imgAlt, title, bodyText, optionalStyles }) => {
  const styles = overrideStyle(defaultStyles, optionalStyles)
  const classes = useStyles({ styles })()

  const imageGridItem = (
    <Grid item xs={12} sm={6}>
      <img className={classes.img} alt={imgAlt} src={`https:${imgUrl}`} />
    </Grid>
  )

  const textGriditem = (
    <Grid item container xs={12} sm={6}>
      <Grid item container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4" {...styles.text.h4}>
            {title}
          </Typography>
        </Grid>
        {bodyText ? (
          <Grid item>
            <RichTextWrapper richTextJson={bodyText} optionalStyles={styles.text}></RichTextWrapper>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  )
  return (
    <Paper className={classes.root}>
      <Grid container {...styles.grid}>
        {imageGridItem}
        {textGriditem}
      </Grid>
    </Paper>
  )
}

export default ImageTextSection
