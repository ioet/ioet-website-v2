import React from "react"
import { Grid } from "@material-ui/core"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"

const NavBar = ({ navigationLinks, actionImage, languageOptions }) => {
  return (
    <React.Fragment>
      <ImageLink
        slug={actionImage.slug}
        imageUrl={`https://${actionImage.imageUrl}`}
      />
      <Grid
        container
        alignItems="flex-start"
        justify="flex-end"
        direction="row"
      >
        {navigationLinks.map((link, index) => (
          <NavigationLink
            key={`${index}-${link.slug}`}
            slug={link.slug}
            caption={link.caption}
            style={{ align: "right" }}
          />
        ))}
        {languageOptions ? (
          <LanguageSelector
            selectorId="Selector-1"
            options={languageOptions}
            name="Language"
          />
        ) : null}
      </Grid>
    </React.Fragment>
  )
}

export default NavBar
