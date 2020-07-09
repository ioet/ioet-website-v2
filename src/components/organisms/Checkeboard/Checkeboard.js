import React from "react"
import { Grid } from "@material-ui/core"
import CheckerboardRow from "../../molecules/CheckerboardRow/CheckerboardRow"

const Checkeboard = props => {
  const rows = []

  return (
    <Grid container xs={12} sm={6}>
      {rows.map((row, index) => {
        return <CheckerboardRow {...row} key={`row-${index}-${row.id}`} />
      })}
    </Grid>
  )
}

export default Checkeboard
