import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import ExtendHeaderSection from "../../molecules/ExtendHeaderSection/ExtendHeaderSection"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.1),
    marginBottom: theme.spacing(0.5),
  },
}))
const ExtendHeader = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    {
      extendHeader: allContentfulMessageHeader {
        nodes {
          id
          title
          backgroundImage {
            file {
              url
            }
            title
          }
          bodyText {
            json
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const extendHeader = data.extendHeader.nodes.find(node => node.id === contentfulId)
  const childSection = {
    imgUrl: extendHeader.backgroundImage.file.url,
    bodyText: extendHeader.bodyText ? extendHeader.bodyText.json : null,
    // imgAlt: section.backgroundImage.file.title,
  }

  return (
    <div className={classes.root}>
      <ExtendHeaderSection childSection={childSection} />
    </div>
  )
}
export default ExtendHeader
