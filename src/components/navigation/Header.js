import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StoreIcon from "@mui/icons-material/Store";
import ContactsIcon from "@mui/icons-material/Contacts";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navLinks = [
  { text: "Home", href: "/", icon: <HomeIcon /> },
  { text: "About Us", href: "/about", icon: <InfoIcon /> },
  { text: "Shop", href: "/shop", icon: <StoreIcon /> },
  { text: "Contact", href: "/contact", icon: <ContactsIcon /> },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        sx={{
          mb: 4,
          top: 0,
          zIndex: theme.zIndex.drawer + 1,
          transition: "top 0.3s",
        }}
        elevation={3}
      >
        <Toolbar>
          {/* Hamburger for mobile */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo/Brand - now clickable */}
          <Button
            href="/"
            color="inherit"
            sx={{
              flexGrow: 0,
              mr: 2,
              fontWeight: "bold",
              letterSpacing: 1,
              fontSize: "1.25rem",
              textTransform: "none",
            }}
          >
            Ecom
          </Button>

          {/* Desktop Links */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              {navLinks.map((link) => (
                <Button
                  key={link.text}
                  color="inherit"
                  href={link.href}
                  startIcon={link.icon}
                  sx={{ mx: 1 }}
                >
                  {link.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Only push right icons to end on mobile */}
          {isMobile && <Box sx={{ flexGrow: 1 }} />}

          {/* Icons always on right */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" href="/cart">
              <ShoppingCartIcon />
            </IconButton>
            <Button
              color="inherit"
              href="/account"
              startIcon={<AccountCircleIcon />}
              sx={{ ml: 1 }}
            >
              Account
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.text} disablePadding>
                <ListItemButton component="a" href={link.href}>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component="a" href="/cart">
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/account">
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}