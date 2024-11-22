"use client"
import React, { createContext, useState } from "react";
type ContextProps = {
    children: React.ReactNode
}

type createContextProps = {
    expanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export const GoogleKeepCloneContext = createContext<createContextProps>({
    expanded: false,
    setExpanded: () => false
});



const GoogleKeepContextProvider = ({ children }: ContextProps) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <GoogleKeepCloneContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </GoogleKeepCloneContext.Provider>
    )
}

export default GoogleKeepContextProvider