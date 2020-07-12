import React from "react"
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

const ExtendHeaderSection = ({ childSection }) => {
  const styles = {
    paperContainer: {
      background: [
        "linear-gradient(to right, rgb(255, 63, 86) -5%, rgba(252, 86, 48, 0.5) 88%)",
        `url(https://${childSection.imgUrl})`,
      ],
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
          {childSection.bodyText ? (
            <Grid className={classes.richTextGrid} item>
              <RichTextWrapper richTextJson={childSection.bodyText}></RichTextWrapper>
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

export default ExtendHeaderSection
