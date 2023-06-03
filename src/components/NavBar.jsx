import * as React from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../assets/imagen/text19469.png"
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const pages = [["Home"], ["En Cartelera", "now_playing"], ["Mejor Valoradas", "top_rated"], ["Play List", "playList"], ["Buscar", "search"]];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ backgroundColor: "rgb(26, 32, 39)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>
             <img src={logo} alt="logo" style={{width: "150px", margin: "10%"}} />
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, marginLeft: "8%", display: { xs: "none", md: "flex"} }}>
            {pages.map((page) => {
              let path = "";
              switch (page[0]) {
                case "Home":
                  path = "/"
                  break;
                case "Play List":
                  path = "/playList"
                  break;
                case "Buscar":
                  path = "/search"
                  break;
                default:
                  path = `/category/${page[1]}`
                  break;
              }
              return (
                <Link to={path} key={page[0]} style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page[0]}
                  </Button>
                </Link>
              )
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
