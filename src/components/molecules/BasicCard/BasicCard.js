import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}))

const BasicCard = props => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={`https://${props.imgUrl}`} title={props.imgTitle} />
        <CardContent>
          <Typography variant="h6" color="textPrimary">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" align="justify">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BasicCard
