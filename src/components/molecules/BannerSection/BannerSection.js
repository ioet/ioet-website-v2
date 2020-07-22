import React from "react"
import defaultStyles from "./defaultStyles"
import { Grid, Paper } from "@material-ui/core"
import { getColor } from "../../../maps/colorMap"
import { makeStyles } from "@material-ui/core/styles"
import { overrideStyle } from "../../../functions/stylesParser"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = props => {
  const { backgroundImage, color, ...rootProps } = props.styles.root
  return makeStyles(theme => ({
    root: {
      backgroundImage: [getColor(backgroundImage), `url("https:${props.imgUrl}")`],
      color: getColor(color),
      ...rootProps,
    },
    textContainer: {
      margin: props.styles.textContainer.margin,
      padding: theme.spacing(props.styles.textContainer.padding),
      marginTop: theme.spacing(props.styles.textContainer.marginTop),
      marginBottom: theme.spacing(props.styles.textContainer.marginBottom),
      marginRight: theme.spacing(props.styles.textContainer.marginRight),
      marginLeft: theme.spacing(props.styles.textContainer.marginLeft),
    },
  }))
}

const BannerSection = ({ bodyText, imgUrl, optionalStyles }) => {
  const styles = overrideStyle(defaultStyles, optionalStyles)
  console.log(styles)
  const classes = useStyles({ styles, imgUrl })()
  return (
    <>
      <Paper className={classes.root}>
        <Grid container item direction="row" xs={12}>
          {bodyText ? (
            <Grid className={classes.textContainer} item>
              <RichTextWrapper richTextJson={bodyText} optionalStyles={styles.text}></RichTextWrapper>
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </>
  )
}

export default BannerSection
