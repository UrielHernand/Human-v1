import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const pages = ['Dashboard', 'Empleados', 'Evaluación', 'Reportes'];

function AppBar1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);



  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
            
          
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Human Gestion
          </Typography>
          {pages.map((page) => (
            <Button
              key={page}
              color="inherit"
              onClick={handleCloseNavMenu}
            >
              {page}
            </Button>
          ))}
          <Tooltip title="Configuración">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Usuario" src="/static/images/avatar.jpg" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
      <Menu
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            {page}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>Perfil</MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>Cuenta</MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>Cerrar Sesión</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default AppBar1;
