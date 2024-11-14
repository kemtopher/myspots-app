import React, { useEffect, useRef, useState } from 'react';
import {
  AppBar,
  Avatar,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Collapse,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { SearchField } from '../search-field/search-field'
import { classes } from './navigation-bar-styles';
import { Search } from '@mui/icons-material';
import { TransitionGroup } from 'react-transition-group';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [searchViz, setSearchViz] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);
  const searchBar = useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchViz = () => {
    setSearchViz(prev => !prev)
  }

  const handleHeaderHeight = (element) => {
    if (!element) return;
    setHeaderHeight(element.offsetHeight);
  }

  return (
    <AppBar position="static" sx={classes.header} ref={searchBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
            <Box sx={{ display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'flex' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{display: 'flex', flexBasis: '25%', alignContent: 'center'}}>
              <AdbIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LIST.IT
              </Typography>
            </Box>

            <Box sx={{display: {xs: 'none', md: 'flex'}, flexGrow: 1, justifyContent: 'center', flexBasis: '50%', padding: '0 50px'}}>
              <SearchField />
            </Box>

            <Box sx={{display: 'flex', alignContent: 'center', flexBasis: '25%'}}>
              <Box sx={{ display: { xs: 'none', md: 'flex'}, paddingRight: '50px'}}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
                <Tooltip title="Open Search">
                  <IconButton onClick={handleSearchViz} sx={{display: {xs: 'block', md: 'none'}, fontSize: 'large', color:'#ffffff'}}>
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="User Menu">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Account Menu" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={console.log('clicked')}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
        </Toolbar>
        <Collapse 
          in={searchViz}
          onEntered={() => handleHeaderHeight(searchBar.current)}
          onExited={() => handleHeaderHeight(searchBar.current)}
        >
          <Toolbar sx={{display: {xs: 'flex', md: 'none' }, alignContent: 'center', justifyContent: 'center'}}>
            <Box sx={{flexGrow: 1, padding: '12px 0'}}>
              <SearchField />    
            </Box>
          </Toolbar>
        </Collapse>
      </Container>
    </AppBar>
  );
}
