"use client"
import Notes from '@/components/notes/Notes'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import { handleRemovePin } from '@/lib/helper'
import { NoteTypes } from '@/types'
import React, { useContext, useEffect, useState } from 'react'

const ShowResults = ({ params }: {
    params: any
}) => {

    const [result, setResult] = useState<NoteTypes[]>([])
    const { setNotes, notes, searchPrompt, expanded } = useContext(GoogleKeepCloneContext)
    useEffect(() => {
        const r = notes.filter((note) => {
            return note.title.toLowerCase().includes(searchPrompt.toLowerCase()) ||
                note.text.toLowerCase().includes(searchPrompt.toLowerCase()) || note.listValue.some((item) => item.text.toLowerCase().includes(searchPrompt.toLowerCase()))
        })

        setResult(r)
    }, [params])


    return (
        result.length === 0 ? <p className='text-xs font-normal'>No result for this search</p> :
            <div className={`grid  ${expanded ? "grid-cols-4" : "grid-cols-5"} gap-5 items-start`}>
                {result.map((r, index) => {
                    return (
                        <Notes note={r} index={index} handleRemovePin={() => handleRemovePin(r.noteId, setNotes)} key={r.noteId} />)
                })}
            </div>
    )
}

export default ShowResults