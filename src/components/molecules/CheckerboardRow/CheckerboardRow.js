import React from "react"
import { Grid, Container } from "@material-ui/core"
import { gridElementComponentDict } from "../../../maps/componentMap"
import { contentfulTypeToComponent } from "../../../functions/componentParser"
import { makeStyles } from "@material-ui/core/styles"
import "./CheckerboardRow.scss"

const useStyles = makeStyles(theme => ({
  gridDirection: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    gridDirection: {
      flexDirection: "column",
    },
  },
}))

const CheckerboardRow = ({ rowElements }) => {
  const classes = useStyles()
  const elements = rowElements ? rowElements : []
  return (
    <Container maxWidth="lg" className="containerCheckerboard">
      <Grid
        container
        item
        className={classes.gridDirection}
        justify="space-between"
        alignItems="center"
        spacing={1}
      >
        {elements.map((element, index) => {
          const GridElement = contentfulTypeToComponent(element.type, gridElementComponentDict)
          return GridElement ? <GridElement {...element} key={`grid-${index}-${element.id}`} /> : null
        })}
      </Grid>
    </Container>
  )
}

export default CheckerboardRow
