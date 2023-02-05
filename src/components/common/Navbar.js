import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import logo from "../../images/almabetter_logo.png";
import "../../styling/Navbar.css";

const drawerWidth = "200px";
const navItems = ["Resume Templates", "My Resumes", "About Us"];

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} className="drawerlogo" alt="AlmaBetter-logo" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{ flexGrow: 1, display: { sm: "block" } }}
            >
              <img src={logo} className="mainlogo" alt="AlmaBetter-logo" />
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Button
                key={"Resume Templates"}
                sx={{
                  color: "black",
                  fontSize: "17px",
                  textTransform: "capitalize",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {"Resume Templates"}
              </Button>
              <Button
                key={"My Resumes"}
                sx={{
                  color: "black",
                  fontSize: "17px",
                  textTransform: "capitalize",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {"My Resumes"}
              </Button>
              <Button
                key={"About Us"}
                sx={{
                  color: "black",
                  fontSize: "17px",
                  textTransform: "capitalize",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {"About Us"}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
