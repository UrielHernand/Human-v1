import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import RoutesWithNotFound from "./Utils/RoutesWithNotFound";
import AdminGuard from "./guards/adminGuard";
import { AdminRoutes } from "./Models/routes";
import Admin from "./Pages/Admin/Admin";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<h1> Cargando..</h1>}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route element={<AdminGuard Validation={true} />}>
            
              <Route path={`${AdminRoutes.ADMIN}/*`}   element={<Admin />}></Route>
              
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
