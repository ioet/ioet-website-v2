import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles"
import T from "../../theme";

const useStyles = makeStyles(theme => ({
  customButton: {
    borderRadius: "2.5rem",
    textTransform: "none",
    background: T.palette.gradient.ioetOrange,
    color: "white",
    minWidth: "8.5rem",
    minHeight: "2.5rem"
  }

}))

const Buttons = ({ buttonText, onClick }) => {
  const classes = useStyles()

  const onPressButton = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <Button variant="contained"  className={classes.customButton}  onClick={onPressButton}>
      {buttonText}
    </Button>
  )
}

export default Buttons
