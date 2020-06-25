import React from "react"
import { Grid } from "@material-ui/core"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"

const NavBar = ({navigationLinks, actionImage}) => {
  return (
    <React.Fragment>
      <ImageLink slug={actionImage.slug} imageUrl={`https://${actionImage.imageUrl}`} />
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        { navigationLinks.map((link, index) =>
          <NavigationLink key={`${index}-${link.slug}`}slug={link.slug} caption={link.caption} style={{ align: "right"}} />
        )}
      </Grid>
    </React.Fragment>
  )
}

export default NavBar
