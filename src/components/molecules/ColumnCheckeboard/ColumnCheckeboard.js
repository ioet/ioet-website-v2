import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 260,
    minHeight: 400,
  },
  photoStyle: {
    minHeight: 200,
  },
  textStyle: {
    minHeight: 200,
    alignItems: "center",
    justifyContent: "center",
  },
}))

const ColumnCheckeboard = props => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.photoStyle} image={`https://${props.imgUrl}`} title={props.imgTitle} />
        <CardContent className={classes.textStyle}>
          <Typography variant="h6" color="textPrimary">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ColumnCheckeboard
