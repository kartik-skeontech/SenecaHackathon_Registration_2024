import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SocialMediaIcons from "./SocialMediaIcons";
import HackathonLogo from "../assets/images/hack-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  Container,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
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
              className="nav-link"
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          top: 0,
          borderBottom: "2px solid red",
          boxShadow: "none",
          paddingBottom: "0.5em",
        }}
      >
        <div className="navBarTop">
          <SocialMediaIcons />
        </div>
        <Toolbar>
          <Box sx={{ display: { sm: "none" } }}>
            <a
              href="https://seneca-hackathon2024.vercel.app/"
              className="nav-link"
            >
              <img
                src={HackathonLogo}
                alt="Seneca Hackathon 2024's logo"
                width={225}
                height={50}
              />
            </a>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginLeft: "auto", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="w-full" sx={{ display: { xs: "none", sm: "block" } }}>
            <Container>
              <Row>
                <Col sm="auto" style={{ margin: "0.5em" }}>
                  <a
                    href="https://seneca-hackathon2024.vercel.app/"
                    className="nav-link"
                  >
                    <img
                      src={HackathonLogo}
                      alt="Seneca Hackathon 2024's logo"
                      width={375}
                      height={70}
                    />
                  </a>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                    whiteSpace: "nowrap",
                  }}
                >
                  {navItems.map((item) => (
                    <a
                      key={item}
                      className="nav-link"
                      style={{ display: "flex" }}
                      href={
                        "https://seneca-hackathon2024.vercel.app/" +
                        convertToUrlFormat(item)
                      }
                    >
                      <Button key={item} sx={{ color: "black" }}>
                        {item}
                      </Button>
                    </a>
                  ))}
                </Col>
              </Row>
            </Container>
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
