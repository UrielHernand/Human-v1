import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';

import {
  DashboardSharp,
  PeopleAltSharp,
  Summarize,
  CalendarToday,
  Assessment,
  Settings,
  AdminPanelSettings,
  MenuOutlined,
  ArrowBack,
} from '@mui/icons-material';

import "./Sidebar.css";
import { AdminRoutes } from '../../Models/routes';

const sidebarNavItems = [
  {
    display: 'Dashboard',
    icon: <DashboardSharp />,
    to: AdminRoutes.DASHBOARD,
  },
  {
    display: 'Empleados',
    icon: <PeopleAltSharp />,
    to: AdminRoutes.EMPLEADOS,
  },
  {
    display: 'Reportes',
    icon: <Summarize />,
    to: AdminRoutes.REPORTES,
  },
  {
    display: 'Vacaciones',
    icon: <CalendarToday />,
    to: AdminRoutes.VACACIONES,
  },
  {
    display: 'Analisis',
    icon: <Assessment />,
    to: AdminRoutes.ANALISIS,
  },
  {
    display: 'Configuracion',
    icon: <Settings />,
    to: AdminRoutes.CONFIGURACION,
  },
  {
    display: 'Usuarios',
    icon: <AdminPanelSettings />,
    to: AdminRoutes.USUARIOS,
  },
  {
    display: 'Pagos',
    icon: <Assessment />,
    to: AdminRoutes.PAGOS,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [sidebarVisible, setSidebarVisible] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState('');

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div style={{ background: '#02132c' }}>
      <div
       
        className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}
        style={{ background: '#02132c' }}
      >
        <IconButton onClick={toggleSidebar} style={{ borderRadius: '0', color:'white' }}>
          {sidebarVisible ? <ArrowBack />  :  <MenuOutlined /> }
        </IconButton>
        <div className={`sidebar__content`}>
          <div className={`${sidebarVisible ? 'sidebar__logo' : 'hiddenLogo'}`}>
            <h3>Human Gestion</h3>
          </div>
          <List>
            {sidebarNavItems.map((item) => (
              <ListItem
                key={item.to}
                component={Link}
                to={item.to}
                selected={item.to === activeItem}
                className="sidebar__menu__item"
              >
                <ListItemIcon className="sidebar_icons" style={{ color: '#0f4391' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.display} className={`${sidebarVisible ? 'sidebar_item_text' : 'hiddenLogo'}`} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
