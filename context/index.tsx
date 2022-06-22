import { useState, createContext, useContext } from "react";


const  AppState = createContext<boolean>(true);

export const ContextProvider = ({children}: any) =>{

    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<boolean>(true);

     return (
        <AppState.Provider value ={loading} >
         {children}
        </AppState.Provider>
     );
}

export const ContextState = () => useContext(AppState);