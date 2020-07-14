import React from "react"
import T from "../../theme"
import { Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = makeStyles(theme => ({
  richTextGrid: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(0.5),
    margin: "auto",
    padding: theme.spacing(2),
  },
}))

const stylesPaperCss = (optionalStyles, imgUrl) => {
  const height = optionalStyles.banner.height ? optionalStyles.banner.height : "auto"
  const color = optionalStyles.background.color ? optionalStyles.background.color : null
  const transparent = optionalStyles.background.transparent ? optionalStyles.background.transparent : false
  const textcolor = optionalStyles.text.color ? optionalStyles.text.color : null
  if (transparent) {
    return {
      background: [T.palette.transparent[color], `url(https://${imgUrl})`],
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: textcolor,
      maxHeight: height,
    }
  } else {
    return {
      background: [T.palette.gradient.ioetOrange, `url(https://${imgUrl})`],
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: textcolor,
      maxHeight: height,
    }
  }
}

const BannerSection = ({ bodyText, imgUrl, optionalStyles }) => {
  const styles = {
    paperContainer: stylesPaperCss(optionalStyles, imgUrl),
  }
  const classes = useStyles()
  return (
    <React.Fragment>
      <Paper style={styles.paperContainer}>
        <Grid container item direction="row" xs={12}>
          {bodyText ? (
            <Grid className={classes.richTextGrid} item>
              <RichTextWrapper richTextJson={bodyText}></RichTextWrapper>
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

export default BannerSection
