"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { preInputIcons } from '@/constants/icons'


type InputType = "note" | "list" | "image"

const AddNotes = () => {
    const [inputType, setInputType] = useState<InputType>("note")
    const [showEditor, setShowEditor] = useState<boolean>(false)

    return (
        <div className='max-w-xl mx-auto shadow-custom rounded-[5px] h-auto relative'>
            <div className='w-full grid grid-cols-[1fr,auto] gap-4 items-center px-2 rounded-lg'>
                <Input type='text' placeholder='Take a note...' className='note-input rounded-md' />

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
            </div>

        </div>
    )
}

export default AddNotes