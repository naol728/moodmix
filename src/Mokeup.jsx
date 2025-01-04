import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DialogIcon from "@mui/icons-material/ChatBubbleOutline";
import HomeIcon from "@mui/icons-material/Home";

const Mokeup = () => {
  const ResponsiveAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    return (
      <AppBar position="static">
        <Toolbar>
          {/* App Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>

          {/* Links for larger screens */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Button color="inherit" startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button color="inherit" startIcon={<DialogIcon />}>
              Dialog
            </Button>
            <Button color="inherit" startIcon={<FavoriteIcon />}>
              Favorite
            </Button>
            <Button color="inherit" startIcon={<SearchIcon />}>
              Search
            </Button>
          </Box>

          {/* Hamburger Menu for smaller screens */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuItem onClick={handleMenuClose}>
                <HomeIcon sx={{ mr: 1 }} />
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <DialogIcon sx={{ mr: 1 }} />
                Dialog
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <FavoriteIcon sx={{ mr: 1 }} />
                Favorite
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <SearchIcon sx={{ mr: 1 }} />
                Search
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
};
export default Mokeup;
