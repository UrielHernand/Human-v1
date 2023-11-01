
import {  Outlet} from 'react-router-dom';



import { Grid } from '@mui/material';

import  { lazy } from "react";


const Sidebar = lazy(() => import('../../Global/Sidebar/Sidebar'));




export const AdminRoutesSidebar = () => 
{
  return ( 
    <>
    <Grid container>
      <Grid item xs={3} style={{ flex: '0 0 auto' }}>
        <Sidebar />
      </Grid>
      <Grid item xs style={{ flex: '1', padding: '20px' }}>
       
        <Outlet />
      </Grid>
    </Grid>
  </>
  )
    

};