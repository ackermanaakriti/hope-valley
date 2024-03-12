import React, { createContext, useContext } from "react";
import MainNavbar from "../Navbar/MainNavbar";
import Footer from "../Footer";

const LayoutContext = createContext();

export const LayoutProvider=({children})=>
{

    return(
        <>
        <LayoutContext.Provider>
          <MainNavbar/>
             {children}
             <Footer/>
           
        </LayoutContext.Provider>
       
        </>
        
    )
}

export const useLayoutContext=()=>useContext(LayoutContext)

