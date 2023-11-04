
import {  Outlet} from 'react-router-dom';



import { Grid } from '@mui/material';

import  { lazy } from "react";
import AppBar1 from '../../Components/Graphics/AppBar/AppBar';


const Sidebar = lazy(() => import('../../Global/Sidebar/Sidebar'));




export const AdminRoutesSidebar = () => 
{
  return ( 
    <>


  
  
<Grid container style={{ width: '90%', margin: '0 auto', }}>
  <Grid item xs={3} style={{ width: '62px', flex: '0 0 auto', }}>
    <Sidebar style={{ width: '190px', flex: '0 0 auto' }} />
  </Grid>
  <Grid item xs style={{ flex: '1', padding: '20px', overflow: 'auto' ,}}>
    <AppBar1 />
    <Outlet />
  </Grid>
</Grid>

  



  </>
  )
    

};