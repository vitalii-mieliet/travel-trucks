import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import { Container, Icon, IconButton, useMediaQuery } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/icons/Logo.svg";
import { DesktopMenu, MobileMenu } from "./HeaderMenus";
import { mediaTo } from "@/theme/media";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const isMobile = useMediaQuery(mediaTo("md"));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
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
        {isMobile ? (
          <IconButton
            edge="end"
            onClick={toggleDrawer(true)}
            aria-label="open menu"
            sx={{ marginLeft: "auto", ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <DesktopMenu />
        )}

        <MobileMenu open={open} toggleDrawer={toggleDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
