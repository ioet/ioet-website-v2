import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import ColumnCheckeboard from '../../molecules/ColumnCheckeboard/ColumnCheckeboard';


const useStyles = makeStyles(theme => ({
    root: {
      minWidth: 780,
      minHeight: 400,
    },
}))


const Checkeboard = props => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container xs={12} sm={6}>
      {props.items.map(column => 
        <ColumnCheckeboard
          title={ column.title }
          body={ column.body }
          imgTitle={ column.imgTitle }
          imgUrl={ column.imgUrl }
        />
      )}
    </Grid>
  )
}

export default Checkeboard;
