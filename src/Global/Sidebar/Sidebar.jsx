import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  IconButton,

} from '@mui/material';

import {
  DashboardSharp,
  PeopleAltSharp,
  Summarize,
  CalendarToday,
  CorporateFare,
  CalendarMonth,
  Settings,
  AccountTree,
  Insights,
  SupervisedUserCircle,
  Menu,
  ChevronLeft,
} from '@mui/icons-material';

import './Sidebar.css'; // Make sure to adjust the path based on your project structure

const sidebarNavItems = [
  {
    display: 'Dashboard',
    icon: <DashboardSharp />,
    to: '/dashboard',
  },
  {
    display: 'Departamentos',
    icon: <CorporateFare />,
    to: '/departamentos',
  },
  {
    display: 'Empleados',
    icon: <PeopleAltSharp />,
    to: '/empleados',
  },
  {
    display: 'Reportes',
    icon: <Summarize />,
    to: '/reportes',
  },
  {
    display: 'Calendario',
    icon: <CalendarMonth />,
    to: '/calendario',
  },
  {
    display: 'Vacaciones y permisos',
    icon: <CalendarToday />,
    to: '/vacaciones',
  },
  {
    display: 'Directorio ',
    icon: <AccountTree />,
    to: '/organigrama',
  },
  {
    display: 'Análisis',
    icon: <Insights />,
    to: '/analisis',
  },
  {
    display: 'Usuarios',
    icon: <SupervisedUserCircle />,
    to: '/usuarios',
  },
  {
    display: 'Configuración',
    icon: <Settings />,
    to: '/configuracion',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <div style={{ display: 'block' }}>
      <Hidden mdUp implementation="css">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          style={{
            marginLeft: open ? 240 : 0,
            transition: 'margin-left 0.3s ease', // Smooth transition on hover
          }}
        >
          {open ? <ChevronLeft /> : <Menu />}
        </IconButton>
      </Hidden>

      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          anchor="left"
          open={open}
          sx={{
            width: open ? 240 : 0, 
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: open ? 240 : 0, 
              boxSizing: 'border-box',
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
              transition: 'width 0.4 part ease 0s color 0.4 part ease 2s shadow 0.4 part ease 1s',
              animation: 'width 0.4 part ease 0s color 0.4 part ease 2s shadow 0.4 part ease 1s',
  
              zIndex: +10,

            },
          }}
        >
          <div className="sidebar__content">
            <div className="sidebar__logo">
              <h3 style={{ color: '#053987' }}>Human Gestion</h3>
            </div>
            <List>
              {sidebarNavItems.map((item) => (
                <ListItem
                  key={item.to}
                  component={Link}
                  to={item.to}
                  selected={item.to === activeItem}
                  className={`sidebar__menu__item ${
                    item.to === activeItem ? 'active' : ''
                  }`}
                >
                  <ListItemIcon className="sidebar_icons" style={{ color: '#0f4391' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.display} className="sidebar_item_text" />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
  
    

};

export default Sidebar;
