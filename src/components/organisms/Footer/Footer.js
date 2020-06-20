import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import NavBar from "../../molecules/NavBar/NavBar"
import Icons from "../../molecules/Icons/Icons"

const Footer = () => {
  const colorHeader = "#FF5E0A"

  return (
    <AppBar position="static" style={{ background: colorHeader }}>
      <Toolbar>
        <NavBar />
        <Icons />
      </Toolbar>
    </AppBar>
  )
}

export default Footer
