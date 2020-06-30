const contentfulComponentDict = new Map([
  ["ContentfulHeader", "components/organisms/Header/Header.js"],
  [
    "ContentfulImageSectionList",
    "components/organisms/ImageSectionList/ImageSectionList.js",
  ],
  ["ContentfulFooter", "components/organisms/Footer/Footer.js"],
  ["ContentfulCardHolder", "components/organisms/CardHolder/CardHolder.js"],
])

const cardComponentDict = new Map([
  ["ContentfulSourceCard", "components/molecules/MapCard/MapCard.js"],
  ["ContentfulBasicCard", "components/molecules/BasicCard/BasicCard.js"],
])

export default contentfulComponentDict
export { cardComponentDict }
