"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { preInputIcons } from '@/constants/icons'
import { Textarea } from './ui/textarea'
import { autoGrow, generateUniqueId } from '@/lib/utils'
import { Pin } from 'lucide-react'
import IconButtons from './notes/iconButtons'
import AddList from './AddList'
import { NoteTypes } from '@/types'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'


type InputType = "note" | "list" | "image" | "brush"



export const TextHighlighter = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="bg-amber-300">{part}</span> : part
    );
};

const AddNotes = () => {
    const [inputType, setInputType] = useState<InputType | string>("note")
    const [showEditor, setShowEditor] = useState<boolean>(false)
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const { setNotes: setAddNotes, notes } = useContext(GoogleKeepCloneContext)

    const noteDefault = {
        noteId: generateUniqueId(21),
        title: "",
        text: "",
        reminder: "",
        collaborator: [],
        bgColor: "",
        images: [],
        archive: false,
        pinned: false,
        isAList: false,
        listValue: [{
            text: "",
            completed: false
        }]
    }

    const [note, setNotes] = useState<NoteTypes>(noteDefault)
    const [active, setActive] = useState<number | undefined>(0)

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            const excludedDiv = document.getElementById("add-tasks")

            if (!excludedDiv || !excludedDiv.contains(event?.target as Node)) {
                setShowEditor(false)
            }
        })

        return () => {
            document.body.removeEventListener('click', (event) => {
                const excludedDiv = document.getElementById("add-tasks")

                if (!excludedDiv || !excludedDiv.contains(event?.target as Node)) {
                    setShowEditor(false)
                }
            });
        };
    }, [])


    useEffect(() => {
        if (showEditor && textAreaRef.current) {
            textAreaRef.current.focus();
        }

        if (!showEditor) {
            if (note.title.trim() || note.text.trim() || note.isAList) {
                saveNotes()
                setNotes(noteDefault)
            }
            setInputType("note")
        }
    }, [showEditor])

    const handleNotesChange = (e: any) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }

    const saveNotes = async () => {
        setAddNotes((prev) => [...prev, note])
    }

    const handleActions = (action: string) => {
        setShowEditor(true)
        setInputType(action)

        if (action === "list") {
            setNotes({ ...note, isAList: true })
        }
    }

    const handleInputClick = () => {
        if (inputType !== "list") {
            setInputType("note")
        }
        setShowEditor(true)
    }

    const handlePinHandle = () => {
        setNotes({ ...note, pinned: !note.pinned })
    }


    return (
        <div className='max-w-xl mx-auto shadow-custom rounded-[5px] h-auto relative' id='add-tasks'>
            <div className='w-full grid grid-cols-[1fr,auto] gap-4 items-center px-2 rounded-lg'>
                <Input type='text' value={note.title} name="title" onChange={handleNotesChange} placeholder={!showEditor ? "Take a note..." : "Title"} className='note-input rounded-md' onClick={handleInputClick} />


                {!showEditor ? (
                    <div className='flex gap-1'>
                        {preInputIcons.map((icon, index) => {
                            const { Icon, action } = icon

                            return (
                                <Button key={index} variant={"ghost"} size={"sm"} className={`rounded-full w-10 h-10 [&_svg]:size-5 [&_svg]:text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed`} disabled={action === "not-allowed"} onClick={() => handleActions(action)}>
                                    <Icon />
                                </Button>
                            )
                        })}
                    </div>

                ) : (
                    <Button onClick={handlePinHandle} variant={"ghost"} size={"icon"} className={`rounded-full w-10 h-10 [&_svg]:size-5 [&_svg]:text-gray-500 hover:bg-gray-100 ${note.pinned && "bg-gray-100"}`}>
                        <Pin />
                    </Button>
                )}
            </div>

            <div className='flex flex-col w-full px-2 space-y-3'>
                {showEditor && (
                    inputType === "note" ? (
                        <Textarea ref={textAreaRef} onChange={handleNotesChange} name='text' value={note.text} className='resize-none w-full note-input' placeholder='Take note' onInput={() => autoGrow(textAreaRef)} />
                    ) : (
                        <>
                            {note.listValue.map((value, index) => (
                                <AddList value={value} key={index} setNotes={setNotes} index={index} note={note} active={active} setActive={setActive} />
                            ))}
                        </>
                    )
                )}

                {showEditor && (
                    <div className='flex items-center justify-between pb-2'>
                        <IconButtons />
                        <Button variant={"ghost"} size={"sm"} className='hover:bg-gray-100 rounded-[5px] font-semibold' onClick={() => {
                            setShowEditor(false)
                        }}>Close</Button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default AddNotes