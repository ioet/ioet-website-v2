const contentfulComponentDict = new Map([
  ["ContentfulHeader", "components/organisms/Header/Header.js"],
  ["ContentfulSectionList", "components/organisms/SectionList/SectionList.js"],
  ["ContentfulFooter", "components/organisms/Footer/Footer.js"],
  ["ContentfulCardHolder", "components/organisms/CardHolder/CardHolder.js"],
  ["ContentfulCheckerboard", "components/organisms/Checkerboard/Checkerboard.js"],
])

const cardComponentDict = new Map([
  ["ContentfulMapCard", "components/molecules/MapCard/MapCard.js"],
  ["ContentfulImageCard", "components/molecules/ImageCard/ImageCard.js"],
])

const gridElementComponentDict = new Map([
  ["ContentfulCheckerboardItemImage", "components/atoms/CheckerboardItem/CheckerboardItemImage.js"],
  ["ContentfulCheckerboardItemText", "components/atoms/CheckerboardItem/CheckerboardItemText.js"],
])

const sectionElementComponentDict = new Map([
  ["ContentfulButtonTextSection", "components/molecules/ButtonTextSection/ButtonTextSection.js"],
  ["ContentfulBannerSection", "components/molecules/BannerSection/BannerSection.js"],
  ["ContentfulImageTextSection", "components/molecules/ImageTextSection/ImageTextSection.js"],
])

export default contentfulComponentDict
export { cardComponentDict, gridElementComponentDict, sectionElementComponentDict }
