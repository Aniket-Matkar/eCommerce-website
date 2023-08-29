import { createContext, useState } from "react";

export const Context = createContext();


const AppContext = ({children})=>{

    const[category,setcategory]=useState();
    const[product, setproduct]=useState();

    return(
        <Context.Provider 
        value={{
            category,
            setcategory,
            product,
            setproduct
        }}>
            {children}
        </Context.Provider>
    );
}

export default AppContext;