import React from "react"
import Grid  from "@material-ui/core/Grid"
import Icon from "../../atoms/Icon/SocialIcon"

const Icons = ({SocialIcons, position}) => {
  return (
    <Grid container justify={position}>
      {SocialIcons.map((data, index) => (
        <Icon key={index} slug={data.slug} imageUrl={data.imageUrl} linkTo={data.linkTo} />
      ))}
    </Grid>
  )
}
export default Icons
