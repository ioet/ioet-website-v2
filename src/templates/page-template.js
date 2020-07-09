import React from "react"
import { graphql } from "gatsby"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { contentfulTypeToComponent } from "../functions/componentParser"

export const query = graphql`
  query($contentfulId: String) {
    pages: allContentfulPage(filter: { contentful_id: { eq: $contentfulId } }) {
      nodes {
        slug
        node_locale
        childComponents {
          ... on Node {
            id
            internal {
              type
            }
          }
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: 355,
    margin: "auto",
    display: "block",
  },
}))

const PageTemplate = ({ data: { pages }, pageContext: { slug } }) => {
  const pageLocaleMap = new Map(pages.nodes.map(node => [node.node_locale, node.slug]))
  const page = pages.nodes.find(node => node.slug === slug)
  const childComponents = page.childComponents ? page.childComponents : []
  const classes = useStyles()
  return (
    <>
      {childComponents.map((child, index) => {
        const CustomComponent = contentfulTypeToComponent(child.internal.type)
        return CustomComponent ? (
          <CustomComponent
            contentfulId={child.id}
            key={`${index}-${page.slug}-${child.id}`}
            parentLocaleMap={pageLocaleMap}
            parentSlug={page.slug}
          ></CustomComponent>
        ) : null
      })}
      <Grid container direction="row" justify="space-between" alignItems="center" spacing={1}>
        <Grid item xs>
          <img className={classes.image} src="image1.png" alt="img1"></img>
        </Grid>
        <Grid item xs ={3}>
          <Typography variant="h6" color="textPrimary">
            Cillum minim pariatur excepteur sint sint dolor.
          </Typography>
          <Typography variant="body2" component="p">
            Laboris proident nulla id cillum culpa dolore consequat mollit proident sint. Fugiat adipisicing
            fugiat fugiat consectetur qui mollit sunt commodo magna minim. Irure aliqua proident fugiat aute
            incididunt pariatur duis velit consequat mollit deserunt proident velit. Occaecat esse et eiusmod
            amet veniam.
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="h6" color="textPrimary">
            Cillum minim pariatur excepteur sint sint dolor.
          </Typography>
          <Typography variant="body2" component="p">
            Laboris proident nulla id cillum culpa dolore consequat mollit proident sint. Fugiat adipisicing
            fugiat fugiat consectetur qui mollit sunt commodo magna minim. Irure aliqua proident fugiat aute
            incididunt pariatur duis velit consequat mollit deserunt proident velit. Occaecat esse et eiusmod
            amet veniam.
          </Typography>
        </Grid>
        <Grid item xs>
          <img className={classes.image} src="image2.png" alt="img2"></img>
        </Grid>
      </Grid>
    </>
  )
}

export default PageTemplate
