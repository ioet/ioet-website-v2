import React from "react";
import AppBar from '@material-ui/core/AppBar';
import NavBar from "../../molecules/NavBar/NavBar";


const Header = () => {
  const colorHeader = '#FF5E0A';

  return (
    <AppBar position="static" style={ { background: colorHeader } } >
      <NavBar />
    </AppBar>
  )
}

export default Header;
