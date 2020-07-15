import React from "react"
import T from "../../theme"
import { Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import DefaultStyles from "./DefaultStyles"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = props =>
  makeStyles(theme => ({
    root: {
      backgroundImage: [
        T.palette.transparent[props.styles.root.backgroundImage],
        `url("https:${props.imgUrl}")`,
      ],
      backgroundSize: props.styles.root.backgroundSize,
      backgroundPosition: props.styles.root.backgroundPosition,
      backgroundRepeat: props.styles.root.backgroundRepeat,
      color: props.styles.root.color,
      maxHeight: props.styles.root.maxHeight,
    },
    text: {
      marginTop: theme.spacing(props.styles.text.marginTop),
      marginBottom: theme.spacing(props.styles.text.marginBottom),
      margin: props.styles.text.margin,
      padding: theme.spacing(props.styles.text.padding),
    },
  }))

const BannerSection = ({ bodyText, imgUrl, optionalStyles }) => {
  const styles = Object.entries(optionalStyles).length === 0 ? DefaultStyles({ imgUrl }) : optionalStyles
  const classes = useStyles({ styles, imgUrl })()
  return (
    <>
      <Paper className={classes.root}>
        <Grid container item direction="row" xs={12}>
          {bodyText ? (
            <Grid className={classes.text} item>
              <RichTextWrapper richTextJson={bodyText}></RichTextWrapper>
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </>
  )
}

export default BannerSection
