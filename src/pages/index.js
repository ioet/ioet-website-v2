import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { contentfulTypeToComponent } from "../functions/componentParser"

export default function Home() {
  const page = useStaticQuery(graphql`
    {
      index: contentfulPage(slug: { eq: "home" }) {
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
  `)

  return (
    <>
      {page.index.childComponents.map((child, index) => {
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
