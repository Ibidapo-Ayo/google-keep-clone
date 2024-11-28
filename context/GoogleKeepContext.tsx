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
    notes: NoteTypes[],
    setSearchPrompt: React.Dispatch<React.SetStateAction<string>>,
    searchPrompt: string
}

export const GoogleKeepCloneContext = createContext<createContextProps>({
    expanded: false,
    setExpanded: () => false,
    setNotes: () => [],
    notes: [],
    setSearchPrompt: () => "",
    searchPrompt: ""
});



const GoogleKeepContextProvider = ({ children }: ContextProps) => {
    const [expanded, setExpanded] = useState(false)
    const [notes, setNotes] = useState<NoteTypes[]>([])
    const [searchPrompt, setSearchPrompt] = useState("")

    return (
        <GoogleKeepCloneContext.Provider value={{ expanded, setExpanded, setNotes, notes, searchPrompt, setSearchPrompt }}>
            {children}
        </GoogleKeepCloneContext.Provider>
    )
}

export default GoogleKeepContextProvider