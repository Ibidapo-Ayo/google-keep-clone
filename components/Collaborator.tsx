import { Check, UserPlus, X } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { emailRegex, generateUniqueId } from '@/lib/utils'
import { CollaboratorTypes } from '@/types'

const Collaborator = ({ handleActions }: {
    handleActions: (action: "save" | "cancel", value?: CollaboratorTypes[]) => void
}) => {


    const [collaborator, setCollaborator] = useState<CollaboratorTypes[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)



    const handleAddCollaborators = () => {
        if (emailRegex.test(inputValue)) {
            setCollaborator((prev) => [...prev, {
                id: generateUniqueId(12),
                email: inputValue
            }])

            setInputValue("")
        }
    }

    const handleRemoveCollaborators = (id: string) => {
        const filterCollaborator = collaborator.filter((col) => col.id !== id)
        setCollaborator(filterCollaborator)
    }

    return (
        <div className='w-full bg-white rounded-md flex flex-col space-y-5 shadow-custom'>
            <div className='p-5 space-y-5'>
                <h1 className='text-xl tracking-tight font-semibold'>Collaborators</h1>
                <div className='flex items-center space-x-2'>
                    <div className='w-9 h-9 rounded-full '>
                        <Image src={"/profile_pic_2.jpg"} alt='Profile pic' width={1000} height={1000} className='w-full h-full object-cover   rounded-full ring-2 ring-gray-100 ring-offset-2 ring-offset-white' />
                    </div>
                    <div className='space-y-0 '>
                        <h3 className='font-semibold text-sm'>Ibidapo ayomide</h3>
                        <p className='text-gray-400 text-xs'>ibidapoayomide754@gmail.com</p>
                    </div>
                </div>

                {collaborator.length !== 0 && (
                    collaborator.map((col, index) => (
                        <div className='flex w-full items-center space-x-2' key={index}>
                            <div className='w-9 h-9 rounded-full '>
                                <Image src={"/profile_pic_2.jpg"} alt='Profile pic' width={1000} height={1000} className='w-full h-full object-cover   rounded-full ring-2 ring-gray-100 ring-offset-2 ring-offset-white' />
                            </div>
                            <div className='space-y-0 w-full'>
                                <p className='text-black font-semibold text-xs'>{col.email}</p>
                            </div>
                            <Button
                                onClick={() => handleRemoveCollaborators(col.id)}
                                variant={"ghost"} size={"sm"} className='[&_svg]:size-4 w-6 h-6 hover:bg-black hover:bg-opacity-15 rounded-full'>
                                <X className='text-gray-400' />
                            </Button>
                        </div>
                    ))
                )}

                <div className='flex items-center space-x-2 w-full'>
                    <div className='w-9 h-9 rounded-full flex justify-center items-center ring-2 ring-gray-100'>
                        <UserPlus className='text-gray-500 w-5' />
                    </div>
                    <div className='w-full'>
                        <Input type='text' className='border-none outline-none shadow-none w-full focus:outline focus:border-none bg-transparent placeholder:text-gray-500 placeholder:text-xs tracking-tight'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder='Person or email to share with'
                            onInput={() => {
                                setIsTyping(true)
                            }}
                        />
                    </div>

                    {isTyping && inputValue && (
                        <Button
                            onClick={handleAddCollaborators}
                            variant={"ghost"} size={"sm"} className='[&_svg]:size-4 w-6 h-6 hover:bg-black hover:bg-opacity-15 rounded-full'>
                            <Check className='text-gray-400' />
                        </Button>
                    )}
                </div>
            </div>


            <div className='w-full flex justify-end items-center h-16 bg-black bg-opacity-15 px-5 space-x-5'>
                <Button variant={"ghost"} size={"sm"} className='hover:bg-black hover:bg-opacity-15 rounded-sm' onClick={() => handleActions("cancel")}>Cancel</Button>
                <Button variant={"ghost"} size={"sm"} className='hover:bg-black hover:bg-opacity-15 rounded-sm' onClick={() => handleActions("save", collaborator)}>Save</Button>
            </div>
        </div>
    )
}

export default Collaborator