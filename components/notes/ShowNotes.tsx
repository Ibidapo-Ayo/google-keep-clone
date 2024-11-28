"use client"

import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import React, { useContext } from 'react'
import Notes from './Notes'
import { NoteTypes } from '@/types'
import { handleRemovePin } from '@/lib/helper'

const ShowNotes = () => {
    const { notes, expanded, setNotes } = useContext(GoogleKeepCloneContext)
    const filterPinned = (array: NoteTypes[]) => {
        return array.filter((note) => note.pinned)
    }

    return (
        <div className='space-y-3'>
            <p className="uppercase tracking-wide text-[10px] font-medium text-left">Pinned</p>
            <div className={`grid  ${expanded ? "grid-cols-4" : "grid-cols-5"} gap-5 items-start`}>
                {filterPinned(notes).length < 1 ? "No pinnned" : filterPinned(notes).map((note, index) => {
                    return (
                        <Notes index={index} note={note} key={index} handleRemovePin={() => handleRemovePin(note.noteId, setNotes)} />
                    )
                })}
            </div>

            <p className="uppercase tracking-wide text-[10px] font-medium text-left">Others</p>
            <div className={`grid  ${expanded ? "grid-cols-4" : "grid-cols-5"} gap-5 items-start`}>
                {notes.filter((arr) => arr.pinned !== true).length === 0 ? "No tasks" : notes.filter((arr) => !arr.pinned).map((note, index) => {
                    return (
                        <Notes index={index} note={note} key={index} handleRemovePin={() => handleRemovePin(note.noteId, setNotes)} />
                    )
                })}
            </div>
        </div>
    )
}

export default ShowNotes