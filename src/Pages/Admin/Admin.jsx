
import {  Navigate, Route } from "react-router-dom";
import { AdminRoutes } from "../../Models/routes";
import { RoutesWithNotFound } from "../../Utils";
import { AdminRoutesSidebar } from "./AdminRoutesSidebar";
import Dashboard from "./Dashboard/Dashboard";
import Departamentos from "./Departamentos/Departamentos";
import Reportes from "./Reportes/Reportes";
import Empleados from "./Empleados/Empleados";

import Calendar from "./Calendario/Calendario";
import Vacaciones from "./Vacaciones/Vacaciones";

export default function Admin() {
  return (
          //my sidebar renderice en todas las rutas de admin
  
      <RoutesWithNotFound>
    
        <Route element={<AdminRoutesSidebar/>}>
            <Route path={AdminRoutes.DASHBOARD} element={<Dashboard></Dashboard> }/>
            <Route path={`${AdminRoutes.ADMIN}/*`} element={<h1>Human Gestion </h1> } ></Route>
            <Route path="*" element={<Navigate to={AdminRoutes.DASHBOARD}/>}/> 
            <Route path={AdminRoutes.EMPLEADOS} element={<Empleados></Empleados>}/>
            {/* <Route path={AdminRoutes.REGISTROEMPLEADOS} element={<RegistroEmpleados></RegistroEmpleados> }/> */}
            <Route path={AdminRoutes.DEPARTAMENTOS} element={<Departamentos></Departamentos> }/>
            <Route path={AdminRoutes.REPORTES} element={<Reportes></Reportes> }/>
             <Route path={AdminRoutes.CALENDARIO} element={<Calendar></Calendar>}/>
              <Route path={AdminRoutes.VACACIONES} element={ <Vacaciones></Vacaciones> }/>
              
        </Route>
        
      </RoutesWithNotFound>
  );
}