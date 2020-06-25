import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Icons from "../../molecules/Icons/Icons"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../../molecules/NavBar/NavBar"

const useStyles = makeStyles(theme => ({
  footer: {
    bottom: 0,
  },
}))

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      footer: allContentfulFooter {
        edges {
          node {
            id
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
            socialIcons {
              icons {
                title
                image {
                  file {
                    url
                  }
                }
                url
              }
            }
          }
        }
      }
    }
  `)
  const colorFooter = "#FF5E0A"
  const classes = useStyles()
  const footer = data.footer.edges.find(
    item => item.node.id === props.contentfulId
  ).node
  const navigationLinks = footer.navBar.navigationLinks.map(item => {
    return { caption: item.caption, slug: item.to.slug }
  })
  const SocialIcons = footer.socialIcons.icons.map(item => {
    return { slug: item.title, imageUrl: item.image.file.url, linkTo: item.url }
  })
  const actionImage = {
    imageUrl: footer.navBar.mainIcon.image.file.url,
    slug: footer.navBar.mainIcon.to.slug,
  }

  return (
    <AppBar
      position="sticky"
      style={{ background: colorFooter }}
      className={classes.footer}
    >
      <Toolbar>
        <Hidden only="xs">
          <NavBar
            navigationLinks={navigationLinks}
            actionImage={actionImage}
          ></NavBar>
        </Hidden>
        <Icons SocialIcons={SocialIcons}></Icons>
      </Toolbar>
      <Box display="flex" alignSelf="flex-end" m={1} p={1}>
        <h4>© 2020 ioet Inc. All Rights Reserved</h4>
      </Box>
    </AppBar>
  )
}

export default Footer
