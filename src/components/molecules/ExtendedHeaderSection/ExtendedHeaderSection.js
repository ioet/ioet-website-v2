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

const ExtendedHeaderSection = ({ bodyText, imgUrl }) => {
  const styles = {
    paperContainer: {
      background: [T.palette.transparent.ioetOrange, `url(https://${imgUrl})`],
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: "white",
      height: 550,
    },
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

export default ExtendedHeaderSection
