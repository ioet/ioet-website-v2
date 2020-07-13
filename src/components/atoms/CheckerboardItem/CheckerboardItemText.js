import React from "react"
import { Grid, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import RichTextWrapper from "../RichTextWrapper/RichTextWrapper"

const useStyles = makeStyles(theme => ({
  box: {
    maxHeight: 355,
    minWidth: "50%",
    margin: "auto",
    padding: theme.spacing(1),
  },
}))

const CheckerboardItemText = ({ richTextJson }) => {
  const classes = useStyles()
  return (
    <Grid item xs>
      <Box component="div" whiteSpace="normal" className={classes.box}>
        <RichTextWrapper richTextJson={richTextJson} />
      </Box>
    </Grid>
  )
}

export default CheckerboardItemText
