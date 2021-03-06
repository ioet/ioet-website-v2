import React from "react"
import defaultStyles from "./defaultStyles"
import { Grid, Paper } from "@material-ui/core"
import { getColor } from "../../../maps/colorMap"
import { makeStyles } from "@material-ui/core/styles"
import { overrideStyle } from "../../../functions/stylesParser"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = props =>
  makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(props.styles.root.maringTop),
      marginBottom: theme.spacing(props.styles.root.marginBottom),
      padding: theme.spacing(props.styles.root.padding),
      maxWidth: props.styles.root.maxWidth,
      maxHeight: props.styles.root.maxHeight,
      width: props.styles.root.width,
      height: props.styles.root.height,
      margin: props.styles.root.margin,
      color: getColor(props.styles.root.color),
      background: getColor(props.styles.root.background),
    },
    img: props.styles.img,
    textContainer: {
      margin: props.styles.textContainer.margin,
      padding: theme.spacing(props.styles.textContainer.padding),
      marginTop: theme.spacing(props.styles.textContainer.marginTop),
      marginBottom: theme.spacing(props.styles.textContainer.marginBottom),
      marginRight: theme.spacing(props.styles.textContainer.marginRight),
      marginLeft: theme.spacing(props.styles.textContainer.marginLeft),
      display: props.styles.textContainer.display,
    },
    imageContainer: {
      display: props.styles.imageContainer.display,
      justifyContent: props.styles.imageContainer.justifyContent,
      padding: props.styles.imageContainer.padding,
    },
  }))

const ImageTextSection = ({ imgUrl, imgAlt, bodyText, optionalStyles }) => {
  const styles = overrideStyle(defaultStyles, optionalStyles)
  const classes = useStyles({ styles })()
  const isShadow = styles.img.boxShadow

  const imageGridItem = (
    <Grid item xs={12} sm={5} className={classes.imageContainer}>
      <img
        className={classes.img}
        style={{ boxShadow: isShadow === "true" ? "14px 6px 38px 0px darkgrey" : "" }}
        alt={imgAlt}
        src={`https:${imgUrl}`}
      />
    </Grid>
  )

  const textGriditem = (
    <Grid item xs={12} sm={6} className={classes.textContainer}>
      {bodyText ? <RichTextWrapper richTextJson={bodyText} optionalStyles={styles.text} /> : null}
    </Grid>
  )
  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container {...styles.grid}>
        {imageGridItem}
        {textGriditem}
      </Grid>
    </Paper>
  )
}

export default ImageTextSection
