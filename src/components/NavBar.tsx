import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SocialMediaIcons from "./SocialMediaIcons";
import HackathonLogo from "../assets/images/hack-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

function NavBar() {
  const navItems = [
    "About",
    "Challenge Sets",
    //"Our Team",
    //"News",
    //"Gallery",
    "FAQ",
  ];
  // copy paste file
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const convertToUrlFormat = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const drawer = (
    <Box
      sx={{ textAlign: "center", marginTop: "1.5em" }}
      className="flex flex-col flex-1"
    >
      <div className="flex flex-col flex-1 justify-between">
        <List>
          {navItems.map((item) => (
            <a
              onClick={handleDrawerToggle}
              key={item}
              className="no-underline text-black"
              href={
                "https://seneca-hackathon2024.vercel.app/" +
                convertToUrlFormat(item)
              }
            >
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </a>
          ))}
        </List>
      </div>
      <a
        href="https://seneca-hackathon2024.vercel.app/"
        className="nav-link"
        onClick={handleDrawerToggle}
      >
        <img
          src={HackathonLogo}
          alt="Seneca Hackathon 2024's logo"
          width={190}
          height={45}
          style={{ marginBottom: "3em" }}
        />
      </a>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          top: 0,
          borderBottom: "2px solid red",
          boxShadow: "none",
          paddingBottom: "0.5em",
        }}
      >
        <div className="w-full bg-primary flex justify-end p-0.5">
          <SocialMediaIcons />
        </div>
        <Toolbar>
          <Box className="w-full flex sm:justify-around sm:flex-wrap pt-2">
            <Box>
              <a href="https://www.senecahackathon.com" target="_blank">
                <img
                  src={HackathonLogo}
                  alt="Seneca Hackathon 2024's logo"
                  className="w-4/5"
                />
              </a>
            </Box>
            <Box className="flex justify-center items-center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ marginLeft: "auto" }}
                className="inline sm:hidden"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box className=" hidden sm:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  className=" no-underline"
                  style={{ display: "flex" }}
                  href={
                    "https://seneca-hackathon2024.vercel.app/" +
                    convertToUrlFormat(item)
                  }
                >
                  <Button key={item} sx={{ color: "black", fontWeight: "400" }}>
                    {item}
                  </Button>
                </a>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          className="flex flex-col"
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
      </nav>
    </Box>
  );
}

export default NavBar;
