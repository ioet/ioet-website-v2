import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import Hidden from "@material-ui/core/Hidden"
import NavBar from "../../molecules/NavBar/NavBar"
import Icons from "../../molecules/Icons/Icons"

const Footer = () => {
  const colorHeader = "#FF5E0A"
  return (
    <AppBar position="static" style={{ background: colorHeader }}>
      <Toolbar>
        <Hidden only="xs">
          <NavBar />
        </Hidden>
        <Icons />
      </Toolbar>
    </AppBar>
  )
}

export default Footer
