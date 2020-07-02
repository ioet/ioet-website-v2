import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../../molecules/NavBar/NavBar"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ImageLink from "../../atoms/ImageLink/ImageLink"
import NavigationLink from "../../atoms/NavigationLink/NavigationLink"
import "./Header.scss"
import { Grid } from "@material-ui/core"
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector"

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
        edges {
          node {
            languageSelector {
              options
            }
            stylesCss {
              internal {
                content
              }
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
  const header = data.header.edges.find(
    item => item.node.id === props.contentfulId
  ).node
  const navigationLinks = header.navBar.navigationLinks.map(item => {
    return { caption: item.caption, slug: item.to.slug }
  })
  const languageOptions = header.languageSelector.options.map(item => {
    return { text: item, value: item }
  })
  const actionImage = {
    imageUrl: header.navBar.mainIcon.image.file.url,
    slug: header.navBar.mainIcon.to.slug,
  }
  const colorHeader = JSON.parse(header.stylesCss.internal.content).background
  const { window } = props
  const theme = useTheme()
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <div style={{ background: colorHeader }} className="customDrawer">
      <List>
        {navigationLinks.map((item, index) => (
          <div button key={item.caption}>
            <NavigationLink
              key={`${index}-${item.slug}`}
              slug={item.slug}
              caption={item.caption}
            />
          </div>
        ))}
        {languageOptions ? (
          <LanguageSelector
            selectorId="Selector-1"
            options={languageOptions}
            name="Language"
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
              languageOptions={languageOptions}
              actionImage={actionImage}
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
                slug={actionImage.slug}
                imageUrl={`https://${actionImage.imageUrl}`}
              />
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
