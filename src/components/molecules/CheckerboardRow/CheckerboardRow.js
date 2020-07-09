import React from "react"
import { Grid } from "@material-ui/core"
import { gridElementComponentDict } from "../../../maps/componentMap"
import { contentfulTypeToComponent } from "../../../functions/componentParser"

const CheckerboardRow = props => {
  const rowElements = props.rowElements ? props.rowElements : []
  return (
    <Grid container item direction="row" justify="space-between" alignItems="center" spacing={1}>
      {rowElements.map((element, index) => {
        const GridElement = contentfulTypeToComponent(element.type, gridElementComponentDict)
        return GridElement ? <GridElement {...element} key={`grid-${index}-${element.id}`} /> : null
      })}
    </Grid>
  )
}

export default CheckerboardRow
