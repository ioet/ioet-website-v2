import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import ImageSection from "../../molecules/ImageSection/ImageSection"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
}))

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
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {imageSectionItems.map(item => (
        <ImageSection
          imgUrl={item.imgUrl}
          imgAlt={item.imgAlt}
          title={item.title}
          bodyText={item.bodyText}
          reversed={item.reversed}
        />
      ))}
    </div>
  )
}

export default ImageSectionList
