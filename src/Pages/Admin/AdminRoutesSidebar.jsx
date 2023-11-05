
import {  Outlet} from 'react-router-dom';



import { Grid } from '@mui/material';

import  { lazy } from "react";
import AppBar1 from '../../Components/Graphics/AppBar/AppBar';


const Sidebar = lazy(() => import('../../Global/Sidebar/Sidebar'));


const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
  },
  sidebar: {
    width: '5%', 
    marginLeft: '10px',
  },
  content: {
    flex: '1',
    padding: '20px',
  },
};


const largeScreenStyles = {
  sidebar: {
    width: '11%', 
  },
};


export const AdminRoutesSidebar = () => 
{
  if (window.innerWidth > 1200) {
    Object.assign(styles.sidebar, largeScreenStyles.sidebar);
  }

  return (
    <Grid container style={styles.container}>
      <Grid item style={styles.sidebar}>
        <Sidebar />
      </Grid>
      <Grid item style={styles.content}>
        <AppBar1 />
        <Outlet />
      </Grid>
    </Grid>
  );
    

};