const contentfulComponentDict = new Map([
  ["ContentfulHeader", "components/organisms/Header/Header.js"],
  ["ContentfulFooter", "components/organisms/FooterNew/FooterNew.js"],
  ["ContentfulCardHolder", "components/organisms/CardHolder/CardHolder.js"],
  ["ContentfulSectionList", "components/organisms/SectionList/SectionList.js"],
  ["ContentfulCheckerboard", "components/organisms/Checkerboard/Checkerboard.js"],
  // Render the old Footer: https://share.getcloudapp.com/lluYj0Bm
  // ["ContentfulFooter", "components/organisms/Footer/Footer.js"],
])

const cardComponentDict = new Map([
  ["ContentfulMapCard", "components/molecules/MapCard/MapCard.js"],
  ["ContentfulImageCard", "components/molecules/ImageCard/ImageCard.js"],
])

const gridElementComponentDict = new Map([
  ["ContentfulCheckerboardItemText", "components/atoms/CheckerboardItem/CheckerboardItemText.js"],
  ["ContentfulCheckerboardItemImage", "components/atoms/CheckerboardItem/CheckerboardItemImage.js"],
])

const sectionElementComponentDict = new Map([
  ["ContentfulBannerSection", "components/molecules/BannerSection/BannerSection.js"],
  ["ContentfulImageTextSection", "components/molecules/ImageTextSection/ImageTextSection.js"],
  ["ContentfulButtonTextSection", "components/molecules/ButtonTextSection/ButtonTextSection.js"],
])

export default contentfulComponentDict
export { cardComponentDict, gridElementComponentDict, sectionElementComponentDict }
