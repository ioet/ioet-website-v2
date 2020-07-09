import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(2),
  },
}))
const ExtendHeader = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    {
      extendHeader: allContentfulMessageHeader {
        nodes {
          id
          bodyText {
            json
          }
          backgroundImage {
            file {
              url
            }
            title
          }
        }
      }
    }
  `)
  const extendHeader = data.extendHeader.nodes.find(item => item.id === contentfulId)
  const childSection = {
    imgUrl: extendHeader.backgroundImage.file.url,
    imgAlt: extendHeader.backgroundImage.file.title,
    bodyText: extendHeader.bodyText ? extendHeader.bodyText.json : null,
  }
  const styles = {
    paperContainer: {
      backgroundImage: `url(${"https://images.ctfassets.net/bozygz3awzku/4gifnsQKRgVjYVl3OOSmIa/65e59ce4ea64f71219b9a9bae66df715/IOET-05272.jpg"})`,
    },
  }
  const classes = useStyles()
  console.log(data)
  return (
    <div>
      <Paper className={classes.paper} style={styles.paperContainer}>
          <h1>Badge Management System</h1>
      </Paper>
    </div>
  )
}
export default ExtendHeader