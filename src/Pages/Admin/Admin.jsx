
import {  Navigate, Route } from "react-router-dom";


import { AdminRoutes } from "../../Models/routes";

import { RoutesWithNotFound } from "../../Utils";
import { AdminRoutesSidebar } from "./AdminRoutesSidebar";


export default function Admin() {
  return (
          //my sidebar renderice en todas las rutas de admin
  
      <RoutesWithNotFound>
      
     
    
        <Route element={<AdminRoutesSidebar/>}>
            <Route path={AdminRoutes.DASHBOARD} element={<h1>Human Gestion</h1> }/>
            <Route path={`${AdminRoutes.ADMIN}/*`} element={<h1>Human Gestion </h1> } ></Route>
            <Route path="*" element={<Navigate to={AdminRoutes.DASHBOARD}/>}/> 
        </Route>
        
      </RoutesWithNotFound>

  
    
  );
}