"use client"

import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import React, { useContext } from 'react'
import Notes from './Notes'

const ShowNotes = () => {
    const { notes, expanded } = useContext(GoogleKeepCloneContext)
    return (
        <div className={`grid  ${expanded ? "grid-cols-4" : "grid-cols-5"} gap-5 items-start`}>
            {notes.map((note, index) => {
                return (
                    <Notes index={index} note={note} key={index} />
                )
            })}
        </div>
    )
}

export default ShowNotes