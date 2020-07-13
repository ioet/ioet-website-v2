import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
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
      extendedHeader: allContentfulMessageHeader {
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
  const extendedHeader = data.extendedHeader.nodes.find(node => node.id === contentfulId)
  const sectionProps = {
    imgUrl: extendedHeader.backgroundImage.file.url,
    bodyText: extendedHeader.bodyText ? extendedHeader.bodyText.json : null,
  }

  return (
    <div className={classes.root}>
      <ExtendedHeaderSection {...sectionProps} />
    </div>
  )
}
export default ExtendedHeader
