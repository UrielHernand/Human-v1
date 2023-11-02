import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AdminPanelSettings, ArrowBack, Assessment, CalendarToday,   DashboardSharp, MenuOutlined, PeopleAltSharp, Settings, Summarize } from '@mui/icons-material';

import "./Sidebar.css";
import { AdminRoutes } from '../../Models/routes';

const sidebarNavItems = [

  {
    display: 'Dashboard',
    icon: <DashboardSharp />,
    to: AdminRoutes.DASHBOARD,
    section: 'dashboard'
  },
  {
    display: 'Empleados',
    icon: <PeopleAltSharp />,
    to: AdminRoutes.EMPLEADOS,
    section: 'sucursales'
  },
  {
    display: 'Reportes',
    icon: <Summarize />,
    to: AdminRoutes.REPORTES,
    section: 'reparacion'
  },
  {
    display: 'Vacaciones',
    icon:  <CalendarToday />,
    to: AdminRoutes.VACACIONES,
    section: 'ventas'
  },
  {
    display: 'Analisis ',
    icon: <Assessment />,
    to: AdminRoutes.ANALISIS,
    section: 'inventario'
  },
  {
    display : 'Configuracion',
    icon : <Settings />,
    to : AdminRoutes.CONFIGURACION,
    section : 'configuracion'

  },
  {
    display : 'Usuarios',
    icon : <AdminPanelSettings />,
    to : AdminRoutes.USUARIOS,
    section : 'usuarios'
  },
  {
    display : 'pagos',
    icon : <Assessment />,
    to : AdminRoutes.PAGOS,
    section : 'Pagos'
  }

];

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const curPath = location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex(item => item.to === `/${curPath}`);
    setActiveIndex(activeItem);
  }, [location]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>

   
    <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
    <div className="sidebar__toggle" onClick={toggleSidebar}>
      <span className="material-icons">{sidebarVisible ? <ArrowBack></ArrowBack> : <MenuOutlined></MenuOutlined> }</span>
    </div>

     

      <div className={`sidebar__content`}>
        <div  className={` ${sidebarVisible ? 'sidebar__logo' : 'hiddenLogo'}`}>
          <h3>Human Gestion</h3>
        </div>

        <div ref={sidebarRef} className="sidebar__menu">
          <List>
            {sidebarNavItems.map((item, index) => (
              <ListItem
                key={index}
                component={Link}
                to={item.to}
                className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}
              >
                <ListItemIcon className='sidebar_icons' style={{color:'#0f4391'}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.display} className={` ${sidebarVisible ? 'sidebar_item_text' : 'hiddenLogo'}`} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
