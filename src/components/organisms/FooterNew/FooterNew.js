import React from "react"
import "./NewFooter.scss"
import T from "../../theme"
import Grid from "@material-ui/core/Grid"
import defaultStyles from "./defaultStyles"
import Icons from "../../molecules/Icons/Icons"
import { graphql, useStaticQuery } from "gatsby"
import { getColor } from "../../../maps/colorMap"
import { ThemeProvider } from "@material-ui/styles"
import { makeStyles } from "@material-ui/core/styles"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import { buildLocalizedSlug } from "../../../functions/utils"
import { overrideStyle } from "../../../functions/stylesParser"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import { Box, AppBar, Toolbar, Hidden, Typography, Container } from "@material-ui/core"

const useStyles = props =>
  makeStyles(theme => ({
    root: {
      flexGrow: 1,
      bottom: 0,
      height: props.styles.root.height,
      width: props.styles.root.width,
      top: "auto",
      position: props.styles.root.position,
      background: getColor(props.styles.root.background),
    },
    transformText: {
      textTransform: "uppercase",
    },
    containerSocialIcons: {
      marginTop: theme.spacing(1),
      [theme.breakpoints.only("xs")]: {
        width: "100%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(6),
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
      },
    },
    copyrightContainer: {
      [theme.breakpoints.only("xs")]: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      [theme.breakpoints.only("sm")]: {
        paddingTop: theme.spacing(2),
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(3),
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
    copyrightText: {
      paddingBottom: theme.spacing(2.5),
      fontWeight: "bold",
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
      },
      [theme.breakpoints.only("md")]: {
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
          title
          copyright
          node_locale
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

  const navBar = footer.navBar ? footer.navBar : { navigationLinks: [], mainIcon: null }
  const links = navBar.navigationLinks ? navBar.navigationLinks : []
  const navigationLinks = links.map(item => {
    return { caption: item.caption, slug: buildLocalizedSlug(footer.node_locale, item.to.slug) }
  })
  const icons = footer.socialIcons ? footer.socialIcons : []
  const SocialIcons = icons.map(item => {
    return { slug: item.title, imageUrl: item.icon.file.url, linkTo: item.url }
  })
  const actionImage = {
    imageUrl: navBar.mainIcon ? navBar.mainIcon.icon.file.url : null,
    slug: navBar.mainIcon ? buildLocalizedSlug(footer.node_locale, navBar.mainIcon.to.slug) : null,
  }

  return (
    <AppBar className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            <Hidden only="xs">
              <Grid item sm={3} md={1} className="containerImageLink">
                <ImageLink slug={actionImage.slug} imageUrl={`https:${actionImage.imageUrl}`} />
              </Grid>

              <Grid item xs={12} sm={9} md={8} className={classes.transformText}>
                <Box display="flex" className={classes.containerLinks} justifyContent="flex-end">
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

            <Grid item className={classes.containerSocialIcons} >
              <div className="containerSocialIcons">
                <Icons justifyContent="center" SocialIcons={SocialIcons}/>
              </div>
            </Grid>

            <Grid item className={classes.copyrightContainer}>
              <ThemeProvider theme={T}>
                <Typography className={classes.copyrightText} variant="subtitle1">
                    {footer.copyright}
                </Typography>
              </ThemeProvider>
            </Grid>

          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer
