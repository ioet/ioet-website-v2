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
          title
          id
          childSections {
            bodyText {
              json
            }
            image {
              file {
                url
              }
              title
            }
            title
            optionalStyles {
              internal {
                content
              }
            }
            id
          }
        }
      }
    }
  `)
  const imageSectionItems = data.sections.nodes
    .find(node => node.id === contentfulId)
    .childSections.map(section => {
      const optionalStyles = section.optionalStyles ? JSON.parse(section.optionalStyles.internal.content) : {}
      return {
        imgUrl: section.image.file.url,
        imgAlt: section.image.title,
        title: section.title,
        bodyText: section.bodyText ? section.bodyText.json : null,
        reversed: optionalStyles.reversed,
        key: section.id,
      }
    })
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {imageSectionItems.map((item, index) => (
        <ImageSection {...item} key={`${index}-${item.key}`} />
      ))}
    </div>
  )
}

export default ImageSectionList
