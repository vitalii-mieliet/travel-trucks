import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container, Icon } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/icons/Logo.svg";

import NavButton from "../NavButton/NavButton";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img src={logo} alt="Logo" />
        </Box>
        <Box sx={{ display: "flex", gap: 4, margin: "0 auto" }}>
          <NavButton to="/">Home</NavButton>
          <NavButton to="/catalog">Catalog</NavButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
