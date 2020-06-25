import React from "react"
import Grid  from "@material-ui/core/Grid"
import Icon from "../../atoms/Icon/SocialIcon"

const Icons = ({SocialIcons}) => {
  return (
    <Grid container justify="center">
      {SocialIcons.map((data, index) => (
        <Icon key={index} slug={data.slug} imageUrl={data.imageUrl} linkTo={data.linkTo} />
      ))}
    </Grid>
  )
}
export default Icons
