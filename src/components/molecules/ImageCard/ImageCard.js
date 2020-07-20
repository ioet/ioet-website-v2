import React from "react"
import defaultStyles from "./defaultStyles"
import { getColor } from "../../../maps/colorMap"
import { makeStyles } from "@material-ui/core/styles"
import { overrideStyle } from "../../../functions/stylesParser"
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@material-ui/core"

const useStyles = props =>
  makeStyles(_theme => ({
    root: {
      background: getColor(props.styles.root.background),
      color: getColor(props.styles.root.color),
      maxWidth: props.styles.root.maxWidth,
    },
    img: props.styles.img,
  }))

const ImageCard = props => {
  const styles = overrideStyle(defaultStyles, props.optionalStyles)

  const classes = useStyles({ styles })()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.img} image={`https://${props.imgUrl}`} title={props.imgTitle} />
        <CardContent>
          <Typography variant="h6" {...styles.text.h6}>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" {...styles.text.p}>
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ImageCard
