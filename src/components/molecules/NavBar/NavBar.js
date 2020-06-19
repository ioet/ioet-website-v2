import React from "react"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"

const NavBar = () => {
  return (
    <React.Fragment>
      <ImageLink slug="Image" imageUrl="https://images.ctfassets.net/bozygz3awzku/ylV3yo9Ruh411GawGTD2m/7ef1b7e910602d94fb74da0da6155178/ioet-logo9.png" />
      <nav>
        {/* <ul>
          <ImageLink
            slug="Image"
            imageUrl="https://images.ctfassets.net/bozygz3awzku/ylV3yo9Ruh411GawGTD2m/7ef1b7e910602d94fb74da0da6155178/ioet-logo9.png"
          />
        </ul> */}
        <ul>
          <NavigationLink slug="What we do" caption="What we do" />
          <NavigationLink slug="Our Talent" caption="Our Talent" />
          <NavigationLink slug="Contact Us" caption="Contact Us" />
          <LanguageSelector
            selectorId="Selector-1"
            options={[
              { value: 1, text: "en-US" },
              { value: 2, text: "es-ES" },
            ]}
            name="Language"
          />
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
