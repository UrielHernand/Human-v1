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
import { Link } from 'react-router-dom';
import { AdminRoutes } from '../../../Models/routes';


const pages = [ 
  {
    name: 'Dashboard',
    url: AdminRoutes.DASHBOARD
  },
  {
  name: 'Empleados',
  url:AdminRoutes.EMPLEADOS
}, {
  name: 'Departamentos',
  url: AdminRoutes.DEPARTAMENTOS
},  {
  name: 'Reportes',
  url: AdminRoutes.REPORTES

},
{ 
  name:'Calendario',
  url: AdminRoutes.CALENDARIO
},
{
  name:'Vacaciones',
  url: AdminRoutes.VACACIONES
}

];


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
    <AppBar position="static" style={{backgroundColor:'white', marginTop:'-2%', marginBottom:'1.5%'}}>
      <Container maxWidth="xl" style={{background:'white', color:'#55555c', fontWeight:'bold'}}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 , color:'#053987' , fontWeight:'bold'}}>
            HR
          </Typography>
          {pages.map((page) => (
           <Link to={page.url} style={{textDecoration:'none', color:'#053987'}} key={Math.random()}>
            <Button color="inherit" >
              {page.name}
            </Button>
            </Link>
          ))}
          <Tooltip title="Configuración">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Usuario" src="https://scontent.fpbc1-2.fna.fbcdn.net/v/t39.30808-6/363357995_3588482284752953_3703504409059098083_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S9TMMAJHNnkAX8fy-BJ&_nc_ht=scontent.fpbc1-2.fna&oh=00_AfDyNWyK5RbAm7AT3b5H3PF-3VX4s-gbk2lxo2UjUZL1kw&oe=654C5FAE" />
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
