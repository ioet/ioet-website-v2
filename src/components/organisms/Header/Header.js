import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../../molecules/NavBar/NavBar"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    {
      header: allContentfulHeader {
        edges {
          node {
            languageSelector {
              options
            }
            navBar {
              mainIcon {
                image {
                  file {
                    url
                  }
                }
                to {
                  slug
                }
              }
              navigationLinks {
                caption
                to {
                  slug
                }
              }
            }
            id
          }
        }
      }
    }
  `)
  const colorHeader = "#FF5E0A"
  const header = data.header.edges.find(item => item.node.id === props.contentfulId).node
  const navigationLinks = header.navBar.navigationLinks.map(item => {
    return { caption: item.caption, slug: item.to.slug }
  })
  const languageOptions = header.languageSelector.options.map(
    item => {
      return { text: item, value: item }
    }
  )
  const actionImage = {imageUrl: header.navBar.mainIcon.image.file.url, slug: header.navBar.mainIcon.to.slug}

  return (
    <AppBar position="sticky" style={{ background: colorHeader }}>
      <Toolbar>
        <NavBar
          navigationLinks={navigationLinks}
          languageOptions={languageOptions}
          actionImage={actionImage}
        ></NavBar>
      </Toolbar>
    </AppBar>
  )
}

export default Header
