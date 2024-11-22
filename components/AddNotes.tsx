"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { preInputIcons } from '@/constants/icons'
import { Textarea } from './ui/textarea'
import { autoGrow } from '@/lib/utils'
import { Pin, Bell } from 'lucide-react'
import IconButtons from './notes/iconButtons'


type InputType = "note" | "list" | "image"

const AddNotes = () => {
    const [inputType, setInputType] = useState<InputType>("note")
    const [showEditor, setShowEditor] = useState<boolean>(false)
    const textAreaRef = useRef(null)

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

    return (
        <div className='max-w-xl mx-auto shadow-custom rounded-[5px] h-auto relative' id='add-tasks'>
            <div className='w-full grid grid-cols-[1fr,auto] gap-4 items-center px-2 rounded-lg'>
                <Input type='text' placeholder={!showEditor ? "Take a note..." : "Title"} className='note-input rounded-md' onClick={() => {
                    setShowEditor(true)
                }} />
                {!showEditor ? (
                    <div className='flex gap-1'>
                        {preInputIcons.map((icon, index) => {
                            const { Icon, action } = icon

                            return (
                                <Button key={index} variant={"ghost"} size={"sm"} className={`rounded-full w-10 h-10 [&_svg]:size-5 [&_svg]:text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed`} disabled={action === "not-allowed"}>
                                    <Icon />
                                </Button>
                            )
                        })}
                    </div>
                ) : (
                    <Button variant={"ghost"} size={"icon"} className='rounded-full w-10 h-10 [&_svg]:size-5 [&_svg]:text-gray-500 hover:bg-gray-100'>
                        <Pin />
                    </Button>
                )}
            </div>


            {showEditor && (
                <div className='flex flex-col w-full px-2 space-y-3 pb-2'>
                    <Textarea ref={textAreaRef} className='resize-none w-full note-input' placeholder='Take note' onInput={() => autoGrow(textAreaRef)} />

                    <IconButtons />
                </div>
            )}
        </div>
    )
}

export default AddNotes