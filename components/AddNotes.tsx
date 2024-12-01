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
import { CollaboratorTypes, NoteTypes } from '@/types'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import Collaborator from './Collaborator'
import Image from 'next/image'


type InputType = "note" | "list" | "image" | "brush" | "collaborators"



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
    const { setNotes: setAddNotes, notes, colorValue, setColorValue } = useContext(GoogleKeepCloneContext)

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
        }],
        color: "",
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

        if (!showEditor && inputType !== "collaborators") {
            if (note.title.trim() || note.text.trim() || note.isAList) {
                saveNotes()
                setNotes(noteDefault)
            }
            setInputType("note")
            setColorValue("")
        }
    }, [showEditor])

    const handleNotesChange = (e: any) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }

    const saveNotes = async () => {
        setAddNotes((prev) => [...prev, {
            ...note,
            color: colorValue
        }])
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

    const handleCollaborator = () => {
        setInputType("collaborators")
    }

    const handleCollaboratorActions = (action: "save" | "cancel", value?: CollaboratorTypes[]) => {
        if (action === "cancel") {
            setInputType("note")
            setNotes(noteDefault)
            return
        }

        if (action === "save" && value?.length !== 0) {
            setNotes({ ...note, collaborator: value! })
            setShowEditor(true)
            setInputType("note")
            return
        }
    }

    return (
        <div className='max-w-xl mx-auto'>
            {inputType !== "collaborators" && (
                <div className={`shadow-custom rounded-[5px] h-full transition-colors duration-1000 ease-in-out`} style={{
                    backgroundColor: colorValue || "#fff"
                }} id='add-tasks'>
                    <div className='w-full grid grid-cols-[1fr,auto] gap-4 items-center px-2 rounded-lg'>
                        <Input type='text' value={note.title} name="title" onChange={handleNotesChange} placeholder={!showEditor ? "Take a note..." : "Title"} className='note-input rounded-md shadow-none' onClick={handleInputClick} />


                        {!showEditor ? (
                            <div className='flex gap-1'>
                                {preInputIcons.map((icon, index) => {
                                    const { Icon, action } = icon

                                    return (
                                        <Button key={index} variant={"ghost"} size={"sm"} className={`rounded-full w-10 h-10 [&_svg]:size-5 [&_svg]:text-gray-500 hover:bg-black hover:bg-opacity-10 disabled:cursor-not-allowed`} disabled={action === "not-allowed"} onClick={() => handleActions(action)}>
                                            <Icon />
                                        </Button>
                                    )
                                })}
                            </div>

                        ) : (
                            <Button onClick={handlePinHandle} variant={"ghost"} size={"icon"} className={`rounded-full w-10 h-10 [&_svg]:size-5 [&_svg]:text-gray-500 hover:bg-black hover:bg-opacity-10 ${note.pinned && "bg-gray-100"}`}>
                                <Pin />
                            </Button>
                        )}
                    </div>

                    <div className='flex flex-col w-full px-2 space-y-3'>
                        {showEditor && (
                            inputType === "note" ? (
                                <div className='space-y-2'>
                                    <Textarea ref={textAreaRef} onChange={handleNotesChange} name='text' value={note.text} className='resize-none shadow-none w-full note-input' placeholder='Take note' onInput={() => autoGrow(textAreaRef)} />

                                    <div className='flex space-x-3'>
                                        {note.collaborator.length !== 0 && (
                                            note.collaborator.map((col, index) => {
                                                return (
                                                    <div className='w-7 h-7 rounded-full' key={col.id}>
                                                        <Image src={"/profile_pic_2.jpg"} alt='Profile pic' width={1000} height={1000} className='w-full h-full object-cover   rounded-full ring-2 ring-gray-100 ring-offset-2 ring-offset-white' />
                                                    </div>
                                                )
                                            })
                                        )}
                                    </div>
                                </div>
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
                                <IconButtons handleCollaborator={handleCollaborator} />
                                <Button variant={"ghost"} size={"sm"} className='hover:bg-black hover:bg-opacity-10 rounded-[5px] font-semibold' onClick={() => {
                                    setShowEditor(false)
                                    setNotes(noteDefault)
                                }}>Close</Button>
                            </div>
                        )}
                    </div>


                </div>
            )}

            {inputType === "collaborators" && (
                <Collaborator handleActions={handleCollaboratorActions} />
            )}
        </div>
    )
}

export default AddNotes