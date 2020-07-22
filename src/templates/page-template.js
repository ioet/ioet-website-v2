import React from "react"
import { graphql } from "gatsby"
import { buildLocalizedSlug } from "../functions/utils"
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

const PageTemplate = ({ data: { pages }, pageContext: { slug } }) => {
  const pageLocaleMap = new Map(
    pages.nodes.map(node => [node.node_locale, buildLocalizedSlug(node.node_locale, node.slug)])
  )
  const page = pages.nodes.find(node => node.slug === slug)
  const childComponents = page.childComponents ? page.childComponents : []

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
    </>
  )
}

export default PageTemplate
