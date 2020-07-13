import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import ExtendedHeaderSection from "../../molecules/ExtendedHeaderSection/ExtendedHeaderSection"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.01),
    marginBottom: theme.spacing(0.5),
  },
}))
const ExtendedHeader = ({ contentfulId }) => {
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
  }

  return (
    <div className={classes.root}>
      <ExtendedHeaderSection childSection={childSection} />
    </div>
  )
}
export default ExtendedHeader
