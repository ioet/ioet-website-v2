import "./Header.scss"
import React from "react"
import List from "@material-ui/core/List"
import MenuIcon from "@material-ui/icons/Menu"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../../molecules/NavBar/NavBar"
import IconButton from "@material-ui/core/IconButton"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"
import { Grid, AppBar, Hidden, Toolbar, Drawer } from "@material-ui/core"

const drawerWidth = 700
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Header = props => {
  const data = useStaticQuery(graphql`
    {
      header: allContentfulHeader {
        nodes {
          languageOptions
          navBar {
            navigationLinks {
              caption
              to {
                slug
              }
            }
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
          }
          id
          node_locale
          title
        }
      }
    }
  `)
  const colorHeader = "linear-gradient(to right, rgb(255, 63, 86) -5%, rgba(252, 86, 48, 0.5) 88%)"
  const header = data.header.nodes.find(item => item.id === props.contentfulId)
  const navigationLinks = header.navBar.navigationLinks.map(item => {
    return { caption: item.caption, slug: item.to.slug }
  })
  const languageOptions = header.languageOptions.map(item => {
    return { text: item, value: item }
  })
  const actionImage = {
    imageUrl: header.navBar.mainIcon.mainIcon.file.url,
    slug: header.navBar.mainIcon.to.slug,
  }
  const { window } = props
  const theme = useTheme()
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container = window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <div style={{ background: colorHeader }} className="customDrawer">
      <List>
        {navigationLinks.map((item, index) => (
          <div button="true" key={`drawer-${props.parentSlug}-${item.caption}`}>
            <NavigationLink
              key={`drawer-${header.title}-${index}-${item.slug}`}
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
    <div className="componentHeader">
      <AppBar position="sticky" style={{ background: colorHeader }}>
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
              <ImageLink slug={actionImage.slug} imageUrl={`https://${actionImage.imageUrl}`} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
        </Toolbar>
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
