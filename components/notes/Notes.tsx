import { NoteTypes } from '@/types'
import { Archive, Bell, Check, ImageIcon, MoreVertical, Palette, Pin, UserPlus } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import ShowList from './ShowList'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import { TextHighlighter } from '../AddNotes'
import Image from "next/image"


type NoteProps = {
    note: NoteTypes,
    index: number,
    handleRemovePin: () => void
}
const Notes = ({ note, index, handleRemovePin }: NoteProps) => {
    const [hoverItem, setHoverItem] = useState<number | null>()
    const { searchPrompt } = useContext(GoogleKeepCloneContext)
    return (
        <div className='relative px-2 py-1 rounded-[10px] w-56 border border-gray-300  space-y-3 hover:shadow-custom hover:transition flex flex-col justify-between' onMouseEnter={() => setHoverItem(index)} onMouseLeave={() => setHoverItem(null)} style={{
            backgroundColor: note.color || "#fff"
        }}>

            <div className='space-y-4'>
                <div>
                    <div className={`w-5 h-5 absolute rounded-full bg-black -top-2 -left-2 flex items-center justify-center cursor-pointer ${hoverItem === index ? "block" : "hidden"}`}>
                        <Check className="text-white text-md font-bold w-4 " />
                    </div>

                    <div className="w-52 grid grid-cols-[1fr,35px] items-center">
                        <h4 className="text-wrap font-medium text-black tracking-tight text-md leading-5">{TextHighlighter(note.title, searchPrompt)}</h4>
                        <div className="h-7">
                            {hoverItem === index && (
                                <Button className={`${hoverItem === index ? "block" : "hidden"} grid items-center justify-center rounded-full hover:bg-black hover:bg-opacity-10 w-8 h-8 ${note.pinned && "bg-gray-100"}`} variant={"ghost"} size={"icon"} onClick={handleRemovePin}>
                                    <Pin className="w-4" />
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className=''>
                        {note.isAList ? (
                            note.listValue.map((list, i) => (
                                <ShowList list={list} key={i} index={index} />
                            ))
                        ) : (
                            <div className=''>
                                {note.text.split("\n").map((text, index) => (
                                    TextHighlighter(text, searchPrompt)
                                ))}
                            </div>
                        )}

                    </div>
                </div>

                <div className='flex space-x-3'>
                    {note.collaborator.length !== 0 && (
                        note.collaborator.map((col, index) => {
                            return (
                                <div className='w-5 h-5 rounded-full' key={col.id}>
                                    <Image src={"/profile_pic_2.jpg"} alt='Profile pic' width={1000} height={1000} className='w-full h-full object-cover   rounded-full ring-2 ring-gray-100 ring-offset-2 ring-offset-white' />
                                </div>
                            )
                        })
                    )}
                </div>

                <div className='flex flex-row h-7 shrink-0 items-end w-full'>

                    {hoverItem === index && (
                        <div className='flex justify-between w-full items-end'>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-black hover:bg-opacity-10'>
                                <Bell className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-black hover:bg-opacity-10'>
                                <UserPlus className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-black hover:bg-opacity-10'>
                                <Palette className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-black hover:bg-opacity-10'>
                                <ImageIcon className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-black hover:bg-opacity-10'>
                                <Archive className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-black hover:bg-opacity-10'>
                                <MoreVertical className="w-2" />
                            </Button>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Notes