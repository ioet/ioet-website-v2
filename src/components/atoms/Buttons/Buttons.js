import React from "react"
import T from "../../theme"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(_theme => ({
  customButton: {
    borderRadius: "2.5rem",
    textTransform: "none",
    background: T.palette.gradient.ioetOrange,
    color: "white",
    minWidth: "8.5rem",
    minHeight: "2.5rem",
  },
}))

const Buttons = ({ buttonText, onClick }) => {
  const classes = useStyles()

  const onPressButton = e => {
    if (onClick) onClick(e)
  }

  return (
    <Button variant="contained" className={classes.customButton} onClick={onPressButton}>
      {buttonText}
    </Button>
  )
}

export default Buttons
