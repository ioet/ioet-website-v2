import React from "react"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"
import ImageLink from "../../atoms/ImageLink/ImageLink"

const NavBar = () => {
  return (
    <React.Fragment>
      <ImageLink slug="Image" imageUrl="ioet-logo9.png" />
      <nav>
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
