import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
}))

const MapCard = ({ lat, lng, title, body }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          src={`https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}
          component="iframe"
        />
        <CardContent>
          <Typography variant="h6" color="textPrimary">
            {title}
          </Typography>
          <Typography variant="body2" component="p" align="justify">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MapCard
