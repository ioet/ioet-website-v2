import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { buildLocalizedSlug } from "../../../functions/utils"
import { sectionElementComponentDict } from "../../../maps/componentMap"
import { contentfulTypeToComponent } from "../../../functions/componentParser"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.01),
    marginBottom: theme.spacing(0.5),
  },
}))

const SectionList = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    {
      sections: allContentfulSectionList {
        nodes {
          title
          id
          childSections {
            ... on Node {
              id
              internal {
                type
              }
              ... on ContentfulBannerSection {
                node_locale
                bodyText {
                  json
                }
                backgroundImage {
                  file {
                    url
                  }
                }
                styles {
                  internal {
                    content
                  }
                }
              }
              ... on ContentfulButtonTextSection {
                node_locale
                title
                bodyText {
                  json
                }
                button {
                  caption
                  to {
                    slug
                  }
                }
                styles {
                  internal {
                    content
                  }
                }
              }
              ... on ContentfulImageTextSection {
                node_locale
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
                styles {
                  internal {
                    content
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const SectionItems = data.sections.nodes
    .find(node => node.id === contentfulId)
    .childSections.map(section => {
      const optionalStyles = section.styles ? JSON.parse(section.styles.internal.content) : {}
      const image = section.image ? section.image : section.backgroundImage ? section.backgroundImage : null
      return {
        imgUrl: image ? image.file.url : null,
        imgAlt: image ? image.title : null,
        title: section.title,
        bodyText: section.bodyText ? section.bodyText.json : null,
        optionalStyles: optionalStyles,
        id: section.id,
        type: section.internal.type,
        button: section.button
          ? {
              caption: section.button.caption,
              slug: buildLocalizedSlug(section.node_locale, section.button.to.slug),
            }
          : null,
      }
    })
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {SectionItems.map((item, index) => {
        const Section = contentfulTypeToComponent(item.type, sectionElementComponentDict)
        return <Section {...item} key={`${index}-${item.id}-${item.type}`} />
      })}
    </div>
  )
}

export default SectionList
