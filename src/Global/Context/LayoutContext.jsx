import React, { createContext, useContext } from "react";
import MainNavbar from "../Navbar/MainNavbar";

const LayoutContext = createContext();

export const LayoutProvider=({children})=>
{

    return(
        <>
        <LayoutContext.Provider>
          <MainNavbar/>
             {children}
           
        </LayoutContext.Provider>
       
        </>
        
    )
}

export const useLayoutContext=()=>useContext(LayoutContext)

