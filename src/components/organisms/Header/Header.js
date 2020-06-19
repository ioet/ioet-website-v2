import React from "react";
import AppBar from '@material-ui/core/AppBar';
import NavBar from "../../molecules/NavBar/NavBar";


const Header = () => {
  return (
    <AppBar position="static" >
      <NavBar />
    </AppBar>
  )
}

export default Header;
