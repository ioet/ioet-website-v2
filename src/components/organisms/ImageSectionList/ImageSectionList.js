import React from "react"
import ImageSection from "../../molecules/ImageSection/ImageSection"
import { graphql, useStaticQuery } from "gatsby"

const ImageSectionList = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    {
      sections: allContentfulImageSectionList {
        nodes {
          childSections {
            image {
              title
              file {
                url
              }
            }
            bodySimpleText {
              bodySimpleText
            }
            title
            childContentfulImageSectionOptionalStyleJsonNode {
              reversed
            }
          }
          id
          sectionName
        }
      }
    }
  `)
  const imageSectionItems = data.sections.nodes
    .find(node => node.id === contentfulId)
    .childSections.map(section => {
      return {
        imgUrl: section.image.file.url,
        imgAlt: section.image.title,
        title: section.title,
        bodyText: section.bodySimpleText.bodySimpleText,
        reversed:
          section.childContentfulImageSectionOptionalStyleJsonNode.reversed,
      }
    })
  return (
    <>
      {imageSectionItems.map(item => (
        <ImageSection
          imgUrl={item.imgUrl}
          imgAlt={item.imgAlt}
          title={item.title}
          bodyText={item.bodyText}
          reversed={item.reversed}
        />
      ))}
    </>
  )
}

export default ImageSectionList
