import React from "react"
import { graphql } from "gatsby"
import { contentfulTypeToComponent } from "../functions/componentParser"

export const query = graphql`
  query($slug: String) {
    page: contentfulPage(slug: { eq: $slug }) {
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
`

const PageTemplate = ({ data: { page } }) => {
  return (
    <>
      <h1>{page.title}</h1>
      {page.childComponents.map((child, index) => {
        const CustomComponent = contentfulTypeToComponent(child.internal.type)
        return CustomComponent ? (
          <CustomComponent
            contentfulId={child.id}
            key={index}
          ></CustomComponent>
        ) : (
          <></>
        )
      })}


    </>
  )
}

export default PageTemplate
