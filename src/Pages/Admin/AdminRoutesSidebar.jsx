
import {  Outlet} from 'react-router-dom';



import { Grid } from '@mui/material';

import  { lazy } from "react";
import AppBar1 from '../../Components/Graphics/AppBar/AppBar';


const Sidebar = lazy(() => import('../../Global/Sidebar/Sidebar'));


const styles = {
  container: {
    flexGrow: 2,
  },
  sidebar: {
    width: '5%', 
    marginLeft: '110px',

  },
  content: {
    flex: '1',
    padding: '20px',
    backgroundColor: ' #f5f5f5',
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
      <Grid item xs={1} sm={1} md={1}  style={styles.sidebar} >
        <Sidebar />
      </Grid>
      <Grid item  sm={12} md={11} style={styles.content}>
        <AppBar1 />
        <Outlet />
      </Grid>
    </Grid>
  );
    

};