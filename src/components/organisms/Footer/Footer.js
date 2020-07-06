import React from "react"
import Icons from "../../molecules/Icons/Icons"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../../molecules/NavBar/NavBar"
import { makeStyles } from "@material-ui/core/styles"
import { Box, AppBar, Toolbar, Hidden, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    bottom: 0,
    height: "20%",
    widht: "100%",
    top: "auto",
    position: "relative",
  },
}))

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      footer: allContentfulFooter {
        nodes {
          id
          copyright
          title
          stylesCss {
            internal {
              content
            }
          }
          navBar {
            mainIcon {
              mainIcon {
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
  `)
  const classes = useStyles()
  const footer = data.footer.nodes.find(item => item.id === props.contentfulId)
  const navigationLinks = footer.navBar.navigationLinks.map(item => {
    return { caption: item.caption, slug: item.to.slug }
  })
  const SocialIcons = footer.socialIcons.map(item => {
    return { slug: item.title, imageUrl: item.image.file.url, linkTo: item.url }
  })
  const actionImage = {
    imageUrl: footer.navBar.mainIcon.mainIcon.file.url,
    slug: footer.navBar.mainIcon.to.slug,
  }
  const stylesObj = footer.stylesCss ? JSON.parse(footer.stylesCss.internal.content) : {}
  const colorFooter = stylesObj.background !== "" ? stylesObj.background : "orange"

  return (
    <AppBar style={{ background: colorFooter }} className={classes.footer}>
      <Toolbar>
        <Hidden only="xs">
          <NavBar
            navigationLinks={navigationLinks}
            actionImage={actionImage}
            parentName={footer.title}
          ></NavBar>
        </Hidden>
        <Icons SocialIcons={SocialIcons}></Icons>
      </Toolbar>
      <Box display="flex" alignSelf="flex-end" m={1} p={1}>
        <Typography variant="h6">{footer.copyright}</Typography>
      </Box>
    </AppBar>
  )
}

export default Footer
