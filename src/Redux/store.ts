import { configureStore }  from "@reduxjs/toolkit";
import { userSlice } from "./states/user";

export interface AppStore {

    //Aquí definimos el tipo de dato que tendrá nuestro store 
    //ejemplo 
    //user: User
    // ...
    }

export const store = configureStore({
    reducer: {
        //Aquí definimos los reducers que tendrá nuestro store
        //ejemplo
        user: userSlice.reducer,
    },
});