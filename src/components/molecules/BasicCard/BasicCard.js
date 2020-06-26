import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Schedule, Visibility } from "@material-ui/icons"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  leftIcon: {
    marginLeft: "auto",
  },
  iconText: {
    marginLeft: theme.spacing(1),
  },
}))

const BasicCard = ({ imgUrl, imgTitle, title, body, pubDate, views }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://${imgUrl}`}
          title={imgTitle}
        />
        <CardContent>
          <Typography variant="h6" color="textPrimary">
            {title}
          </Typography>
          <Typography variant="body2" component="p" align="justify">
            {body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Schedule />
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.iconText}
          >
            {pubDate}
          </Typography>
          <Visibility className={classes.leftIcon} />
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.iconText}
          >
            {views}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default BasicCard
