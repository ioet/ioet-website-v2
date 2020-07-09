const contentfulComponentDict = new Map([
  ["ContentfulHeader", "components/organisms/Header/Header.js"],
  ["ContentfulImageSectionList", "components/organisms/ImageSectionList/ImageSectionList.js"],
  ["ContentfulFooter", "components/organisms/Footer/Footer.js"],
  ["ContentfulCardHolder", "components/organisms/CardHolder/CardHolder.js"],
  ["ContentfulExtendHeader", "components/organisms/ExtendHeader/ExtendHeader.js"],
])

const cardComponentDict = new Map([
  ["ContentfulMapCard", "components/molecules/MapCard/MapCard.js"],
  ["ContentfulImageCard", "components/molecules/BasicCard/BasicCard.js"],
])

export default contentfulComponentDict
export { cardComponentDict }
