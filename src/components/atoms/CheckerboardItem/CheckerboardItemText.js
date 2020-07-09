import React from "react"
import { Grid, Box } from "@material-ui/core"
import RichTextWrapper from "../RichTextWrapper/RichTextWrapper"

const CheckerboardItemText = props => {
  return (
    <Grid item xs>
      <Box component="div" whiteSpace="normal">
        <RichTextWrapper richTextJson={props.richTextJson} />
      </Box>
    </Grid>
  )
}

export default CheckerboardItemText
