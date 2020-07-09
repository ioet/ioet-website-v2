import React from "react"
import { Grid } from "@material-ui/core"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"
import "./NavBar.scss"

const NavBar = props => {
  return (
    <>
      <div className="imageStyle">
        <ImageLink
          className="componentNavbar"
          slug={props.actionImage.slug}
          imageUrl={`https://${props.actionImage.imageUrl}`}
        />
      </div>
      <Grid container alignItems="center" justify="center" direction="row">
        {props.navigationLinks.map((link, index) => (
          <div className="linskStyle" key={`navbar-div-${props.parentName}-${index}-${link.slug}`}>
            <NavigationLink
              key={`navbar-${props.parentName}-${index}-${link.slug}`}
              slug={link.slug}
              caption={link.caption}
              style={{ align: "right" }}
            />
          </div>
        ))}
        {props.languageOptions ? (
          <LanguageSelector
            selectorId="Selector-1"
            options={props.languageOptions}
            name="Language"
            parentLocaleMap={props.parentLocaleMap}
            defaultLocale={props.defaultLocale}
          />
        ) : null}
      </Grid>
    </>
  )
}

export default NavBar
