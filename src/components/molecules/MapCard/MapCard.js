import React from "react"
import theme from "../../theme"
import defaultStyles from "./defaultStyles"
import { getColor } from "../../../maps/colorMap"
import { ThemeProvider } from "@material-ui/styles"
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
  }))

const MapCard = ({ lat, lng, title, body, optionalStyles }) => {
  const styles = overrideStyle(defaultStyles, optionalStyles)

  const classes = useStyles({ styles })()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          src={`https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}
          component="iframe"
        />
        <CardContent>
          <ThemeProvider theme={theme}>
            <Typography variant="h6" {...styles.text.h6}>
              {title}
            </Typography>
            <Typography variant="body2" component="p" {...styles.text.p}>
              {body}
            </Typography>
          </ThemeProvider>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MapCard
