"use client"
import { NoteTypes } from "@/types";
import React, { createContext, useState } from "react";
type ContextProps = {
    children: React.ReactNode
}

type createContextProps = {
    expanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    setNotes: React.Dispatch<React.SetStateAction<NoteTypes[]>>,
    notes: NoteTypes[]
}

export const GoogleKeepCloneContext = createContext<createContextProps>({
    expanded: false,
    setExpanded: () => false,
    setNotes: () => [],
    notes: []
});



const GoogleKeepContextProvider = ({ children }: ContextProps) => {
    const [expanded, setExpanded] = useState(false)
    const [notes, setNotes] = useState<NoteTypes[]>([])

    return (
        <GoogleKeepCloneContext.Provider value={{ expanded, setExpanded, setNotes, notes }}>
            {children}
        </GoogleKeepCloneContext.Provider>
    )
}

export default GoogleKeepContextProvider