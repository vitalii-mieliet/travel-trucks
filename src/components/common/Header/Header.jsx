import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container, Icon } from "@mui/material";
import { NavLink } from "react-router-dom";

import NavButton from "../NavButton/NavButton";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          LOGO
        </IconButton>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/catalog">Catalog</NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
