import { navigate } from "gatsby"
import React, { useState } from "react"
import defaultStyles from "./defaultStyles"
import { getColor } from "../../../maps/colorMap"
import { makeStyles } from "@material-ui/core/styles"
import { buildLocalizedSlug } from "../../../functions/utils"
import { overrideStyle } from "../../../functions/stylesParser"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"
import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@material-ui/core"

const useStyles = props =>
  makeStyles(_theme => ({
    root: {
      background: getColor(props.styles.root.background),
      color: getColor(props.styles.root.color),
      maxWidth: props.styles.root.maxWidth,
      maxHeight: props.styles.root.maxHeight,
      width: props.styles.root.width,
      height: props.styles.root.height,
    },
    img: props.styles.img,
    active: {
      background: getColor(props.styles.active.background),
      color: getColor(props.styles.active.color),
    },
    actionArea: {
      flexGrow: 1,
    },
  }))

const ImageCard = props => {
  const styles = overrideStyle(defaultStyles, props.optionalStyles)

  const classes = useStyles({ styles })()
  const [hover, sethover] = useState(false)

  const handleClick = _e => {
    if (props.navigationReference) {
      navigate(`/${buildLocalizedSlug(props.locale, props.navigationReference.slug)}/`)
    }
  }

  const actionArea = content => (
    <CardActionArea
      onMouseOver={() => sethover(true)}
      onMouseOut={() => sethover(false)}
      onFocus={() => void 0}
      onBlur={() => void 0}
      onClick={handleClick}
      className={classes.actionArea}
    >
      {content}
    </CardActionArea>
  )

  const cardContent = (
    <>
      <CardMedia className={classes.img} image={`https:${props.imgUrl}`} title={props.imgTitle} />
      <CardContent className={hover ? classes.active : ""}>
        <Typography variant="h6" {...styles.text.h6}>
          {props.title}
        </Typography>
        <RichTextWrapper richTextJson={props.body.json} optionalStyles={styles.text} />
      </CardContent>
    </>
  )

  return (
    <Card className={classes.root}>{props.navigationReference ? actionArea(cardContent) : cardContent}</Card>
  )
}

export default ImageCard
