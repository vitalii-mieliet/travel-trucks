import Box from "@mui/material/Box";
import React from "react";

import { Button, Drawer, List, ListItem, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Catalog", to: "/catalog" },
];

export const NavButton = ({ to, children }) => {
  const theme = useTheme();

  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive
          ? theme.palette.button?.hover || theme.palette.primary.main
          : theme.palette.primary.main,
        textDecoration: "none",
        textTransform: "none",
        padding: "8px 16px",
        display: "inline-block",
      })}
    >
      <Box component="span">{children}</Box>
    </NavLink>
  );
};

export const DesktopMenu = () => {
  return (
    <Box
      component={"nav"}
      aria-label="Main navigation"
      sx={{ marginInline: "auto" }}
    >
      <List sx={{ display: "flex", flexDirection: "row" }}>
        {navLinks.map(({ label, to }) => (
          <ListItem key={to}>
            <NavButton to={to}>{label}</NavButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const MobileMenu = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box
      component={"nav"}
      aria-label="Mobile navigation"
      sx={{ width: 250, paddingTop: 4 }}
      onClick={toggleDrawer(false)}
    >
      <List>
        {navLinks.map(({ label, to }) => (
          <ListItem key={to}>
            <NavButton to={to}>{label}</NavButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};
