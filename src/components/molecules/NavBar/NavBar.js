import React from "react"
import { Grid } from "@material-ui/core"
import defaultStyles from "./defaultStyles"
import { makeStyles } from "@material-ui/core/styles"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import { overrideStyle } from "../../../functions/stylesParser"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"

const useStyles = props =>
  makeStyles(theme => ({
    img: {
      padding: props.styles.img.padding,
    },
    link: {
      fontWeight: props.styles.img.fontWeight,
    },
  }))

const NavBar = props => {
  const styles = overrideStyle(defaultStyles, props.optionalStyles)
  const classes = useStyles({ styles })()

  return (
    <>
      <div className={classes.img}>
        <ImageLink
          className="componentNavbar"
          slug={props.actionImage.slug}
          imageUrl={`https:${props.actionImage.imageUrl}`}
        />
      </div>
      <Grid container alignItems="center" justify="center" direction="row">
        {props.navigationLinks.map((link, index) => (
          <div className={classes.link} key={`navbar-div-${props.parentName}-${index}-${link.slug}`}>
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
