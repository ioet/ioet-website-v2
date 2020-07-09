import React from "react"
import Icons from "../../molecules/Icons/Icons"
import { graphql, useStaticQuery } from "gatsby"
// import NavBar from "../../molecules/NavBar/NavBar"
import { makeStyles } from "@material-ui/core/styles"
import { Box, AppBar, Toolbar, Hidden, Typography } from "@material-ui/core"
import theme from "../../theme";
import { ThemeProvider } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import './Footer.scss';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    bottom: 0,
    height: "20%",
    widht: "100%",
    top: "auto",
    position: "relative",
    paddingTop: theme.spacing(5)
  },
  transformText: {
    textTransform: "uppercase",
  },
  containerSocialIcons: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1)
    },
  },
  copyrightContainer: {
    justifyContent: "center",
    [theme.breakpoints.only('xs')]: {
      paddingTop: theme.spacing(3),
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent: "flex-end",
      paddingTop: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: "flex-end",
      paddingTop: theme.spacing(3),
    },
  },
  copyrightText: {
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(2.5),
    fontWeight: "bold",
    [theme.breakpoints.only('xs')]: {
      paddingRight: theme.spacing(0),
      textAlign: "center"
    },
  }
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
  const colorFooter = "linear-gradient(to right, rgb(255, 63, 86) -5%, rgba(252, 86, 48, 0.5) 88%)"
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

  return (
    <AppBar style={{ background: colorFooter }} className={classes.footer}>
      <Container>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden only="xs">
              <Grid item sm={3} md={3} className="containerImageLink" >
                <ImageLink slug={actionImage} imageUrl={`https://${actionImage.imageUrl}`} />
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
          <ThemeProvider theme={theme}>
            <Typography className={classes.copyrightText} variant="subtitle1">{footer.copyright}</Typography>
          </ThemeProvider>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
