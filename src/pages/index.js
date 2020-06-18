import React from "react"
import NavigationLink from "../components/atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../components/atoms/LanguageSelector/LanguageSelector"
import ImageLink from "../components/atoms/ImageLink/ImageLink"

export default function Home() {
  return (
    <div>
      <ImageLink slug="Hello" imageUrl="https://cdn.eso.org/images/thumb300y/eso1907a.jpg"/>
      <NavigationLink slug="Hello" caption="What we do"/>
      <LanguageSelector selectorId="Selector-1" options={[{value: 1, text: "en-US"}, {value: 2, text: "es-ES"} ]} name="Language"/>
    </div>
  )
}
