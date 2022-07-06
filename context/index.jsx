import { useState,useContext,createContext } from "react";

export const Context = createContext()

export const ContextProvider = ({children})=>{

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')


    const value = {
        username,
        setUsername,
        password,
        setPassword,
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}