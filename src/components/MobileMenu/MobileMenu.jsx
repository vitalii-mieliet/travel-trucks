import React from "react";
import NavMenu from "../common/DesktopMenu/DesktopMenu";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";

const MobileMenu = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <NavMenu />
    </Box>
  );
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default MobileMenu;
