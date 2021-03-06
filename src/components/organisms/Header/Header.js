import "./Header.scss"
import React from "react"
import List from "@material-ui/core/List"
import defaultStyles from "./defaultStyles"
import MenuIcon from "@material-ui/icons/Menu"
import { graphql, useStaticQuery } from "gatsby"
import { getColor } from "../../../maps/colorMap"
import NavBar from "../../molecules/NavBar/NavBar"
import IconButton from "@material-ui/core/IconButton"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import { buildLocalizedSlug } from "../../../functions/utils"
import { overrideStyle } from "../../../functions/stylesParser"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"
import { Grid, AppBar, Hidden, Toolbar, Drawer, Container } from "@material-ui/core"

const drawerWidth = 700
const useStyles = props =>
  makeStyles(theme => ({
    root: {
      background: getColor(props.styles.root.background),
      position: props.styles.root.position,
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }))

const Header = props => {
  const data = useStaticQuery(graphql`
    {
      header: allContentfulHeader {
        nodes {
          languageOptions {
            name
            locale
          }
          navBar {
            navigationLinks {
              caption
              to {
                slug
              }
            }
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
          }
          id
          node_locale
          title
          styles {
            internal {
              content
            }
          }
        }
      }
    }
  `)

  const header = data.header.nodes.find(item => item.id === props.contentfulId)
  const headerTitle = header.title ? header.title : ""
  const navBar = header.navBar ? header.navBar : { navigationLinks: [], mainIcon: null }
  const navigationLinks = navBar.navigationLinks.map(item => {
    return { caption: item.caption, slug: buildLocalizedSlug(header.node_locale, item.to.slug) }
  })
  const languageOptions = header.languageOptions.map(item => {
    return { text: item.name, value: item.locale }
  })
  const actionImage = {
    imageUrl: navBar.mainIcon ? navBar.mainIcon.icon.file.url : null,
    slug: navBar.mainIcon ? buildLocalizedSlug(header.node_locale, navBar.mainIcon.to.slug) : null,
  }
  const optionalStyles = JSON.parse(header.styles.internal.content)
  const styles = overrideStyle(defaultStyles, optionalStyles)
  const classes = useStyles({ styles })()

  const { window } = props
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container = window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <div className={`customDrawer ${classes.root}`}>
      <List className="inlineItems">
        {navigationLinks.map((item, index) => (
          <div button="true" key={`drawer-${props.parentSlug}-${item.caption}`}>
            <NavigationLink
              key={`drawer-${headerTitle}-${index}-${item.slug}`}
              slug={item.slug}
              caption={item.caption}
            />
          </div>
        ))}
        {languageOptions ? (
          <LanguageSelector
            parentLocaleMap={props.parentLocaleMap}
            defaultLocale={header.node_locale}
            selectorId={`${props.parentSlug}-selector-drawer`}
            options={languageOptions}
            name="Language Options"
          ></LanguageSelector>
        ) : null}
      </List>
    </div>
  )

  return (
    <div className="componentHeader ">
      <AppBar className={classes.root}>
        <Container maxWidth="xl">
          <Toolbar>
            <Hidden xsDown>
              <NavBar
                navigationLinks={navigationLinks}
                parentLocaleMap={props.parentLocaleMap}
                defaultLocale={header.node_locale}
                languageOptions={languageOptions}
                actionImage={actionImage}
                parentName={props.parentSlug}
              ></NavBar>
            </Hidden>
            <Hidden smUp>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                direction="row"
                className="containerXs"
              >
                <ImageLink
                  className="xsLinks"
                  slug={actionImage.slug}
                  imageUrl={`https:${actionImage.imageUrl}`}
                />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon className="iconMenu" />
                </IconButton>
              </Grid>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "left" : "top"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default Header
