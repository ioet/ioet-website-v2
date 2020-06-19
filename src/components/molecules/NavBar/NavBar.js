import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import ImageLink from '../../atoms/ImageLink/ImageLink';
import { Grid } from '@material-ui/core';
import NavigationLink from "../../atoms/NavigationLink/NavigationLink";
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector";


const NavBar = () => {
  const navigationData = [
    {slug: "What we do", caption: "What we do"},
    {slug: "Our Talent", caption: "Our Talent"},
    {slug: "Contact Us", caption: "Contact Us"},
  ];

  return (
    <Toolbar>
      <ImageLink slug="Image" imageUrl="https://images.ctfassets.net/bozygz3awzku/ylV3yo9Ruh411GawGTD2m/7ef1b7e910602d94fb74da0da6155178/ioet-logo9.png" />
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        { navigationData.map(link =>
          <NavigationLink slug={link.slug} caption={link.caption} style={{ align: "right"}} />
        )}
        <LanguageSelector
          selectorId="Selector-1"
          options={[
            { value: 1, text: "en-US" },
            { value: 2, text: "es-ES" },
          ]}
          name="Language"
        />
      </Grid>
    </Toolbar>
  )
}

export default NavBar
