import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import RoutesWithNotFound from "./Utils/RoutesWithNotFound";
import AdminGuard from "./guards/adminGuard";
import { AdminRoutes } from "./Models/routes";
import Admin from "./Pages/Admin/Admin";
import { Suspense } from "react";
import Procces from "./Global/Proccesing/Procces";
import { Provider } from "react-redux";
import { store } from "./Redux/store";



function App() {
  return (
    <>
      <Suspense fallback={<Procces></Procces>}>
      

       <Provider store={store}>
        <BrowserRouter>
          <RoutesWithNotFound>

            <Route element={<AdminGuard Validation={true} />}>
            
              <Route path={`${AdminRoutes.ADMIN}/*`}   element={<Admin />}></Route>
               <Route path={`${AdminRoutes.HUMANGESTION}/*`}   element={<Admin />}></Route>
              
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
