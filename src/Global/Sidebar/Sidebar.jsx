import  { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
 // Importa IconButton de Material UI
} from '@mui/material';

import {
  DashboardSharp,
  PeopleAltSharp,
  Summarize,
  CalendarToday,
  Assessment,
  Settings,
  AdminPanelSettings,
  CorporateFare,
  CalendarMonth,
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
    display :'Departamentos',
    icon:<CorporateFare/>,
    to:AdminRoutes.DEPARTAMENTOS,

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
    display: 'Usuarios',
    icon: <AdminPanelSettings />,
    to: AdminRoutes.USUARIOS,
  },
  {
    display: 'Pagos',
    icon: <Assessment />,
    to: AdminRoutes.PAGOS,
  },
  {
    display:'Calendario',
    icon:<CalendarMonth />,
    to:AdminRoutes.CALENDARIO,
    
  }
  ,
  {
    display: 'Configuracion',
    icon: <Settings />,
    to: AdminRoutes.CONFIGURACION,
  }
];

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');


  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <Hidden smDown implementation="css"  >
    <div className="sidebar">
     
      
  
    
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
                className="sidebar__menu__item"
              >
                <ListItemIcon className="sidebar_icons" style={{ color: '#0f4391' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.display} className="sidebar_item_text" />
              </ListItem>
            ))}
          </List>
        </div>
     


    </div>
    </Hidden>
  );
};

export default Sidebar;
