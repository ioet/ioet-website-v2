import "./Footer.scss"
import React from "react"
import T from "../../theme"
import Grid from "@material-ui/core/Grid"
import defaultStyles from "./defaultStyles"
import Icons from "../../molecules/Icons/Icons"
import { graphql, useStaticQuery } from "gatsby"
import { getColor } from "../../../maps/colorMap"
import { ThemeProvider } from "@material-ui/styles"
import { makeStyles } from "@material-ui/core/styles"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import { overrideStyle } from "../../../functions/stylesParser"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import { Box, AppBar, Toolbar, Hidden, Typography, Container } from "@material-ui/core"

const useStyles = props =>
  makeStyles(theme => ({
    footer: {
      bottom: 0,
      height: props.styles.root.height,
      width: props.styles.root.width,
      top: "auto",
      position: "relative",
      paddingTop: theme.spacing(5),
      background: getColor(props.styles.root.background),
    },
    transformText: {
      textTransform: "uppercase",
    },
    containerSocialIcons: {
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
      },
    },
    copyrightContainer: {
      justifyContent: "center",
      [theme.breakpoints.only("xs")]: {
        paddingTop: theme.spacing(3),
      },
      [theme.breakpoints.only("sm")]: {
        justifyContent: "flex-end",
        paddingTop: theme.spacing(2),
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-end",
        paddingTop: theme.spacing(3),
      },
    },
    copyrightText: {
      paddingRight: theme.spacing(5),
      paddingBottom: theme.spacing(2.5),
      fontWeight: "bold",
      [theme.breakpoints.only("xs")]: {
        paddingRight: theme.spacing(0),
        textAlign: "center",
      },
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
          navBar {
            mainIcon {
              icon {
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
            icon {
              file {
                url
              }
            }
            url
          }
          styles {
            internal {
              content
            }
          }
        }
      }
    }
  `)

  const footer = data.footer.nodes.find(item => item.id === props.contentfulId)
  const optionalStyles = JSON.parse(footer.styles.internal.content)
  const styles = overrideStyle(defaultStyles, optionalStyles)
  const classes = useStyles({ styles })()
  const navBar = footer.navBar ? footer.navBar : {}
  const linkArray = navBar.navigationLinks ? navBar.navigationLinks : []
  const navigationLinks = linkArray.map(item => {
    return { caption: item.caption, slug: item.to.slug }
  })
  const SocialIcons = footer.socialIcons.map(item => {
    return { slug: item.title, imageUrl: item.icon.file.url, linkTo: item.url }
  })
  const actionImage = {
    imageUrl: navBar.mainIcon.icon.file.url,
    slug: navBar.mainIcon.to.slug,
  }

  return (
    <AppBar className={classes.footer}>
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden only="xs">
              <Grid item sm={3} md={3} className="containerImageLink">
                <ImageLink slug={actionImage} imageUrl={`https:${actionImage.imageUrl}`} />
              </Grid>

              <Grid item xs={12} sm={9} md={6} className={classes.transformText}>
                <Box display="flex" className={classes.containerLinks} justifyContent="space-between">
                  {navigationLinks.map((item, index) => (
                    <div className="linskStyle">
                      <NavigationLink
                        key={`footer-drawer-${item.title}-${index}-${item.slug}`}
                        slug={item.slug}
                        caption={item.caption}
                      />
                    </div>
                  ))}
                </Box>
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={12} md={3} className={classes.containerSocialIcons}>
              <div className="containerSocialIcons">
                <Icons SocialIcons={SocialIcons}></Icons>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
        <Box className={classes.copyrightContainer} display="flex">
          <ThemeProvider theme={T}>
            <Typography className={classes.copyrightText} variant="subtitle1">
              {footer.copyright}
            </Typography>
          </ThemeProvider>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
