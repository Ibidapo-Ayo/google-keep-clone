import { NoteTypes } from '@/types'
import { Archive, Bell, Check, Image, MoreVertical, Palette, Pin, UserPlus } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
type NoteProps = {
    note: NoteTypes,
    index: number,
}
const Notes = ({ note, index }: NoteProps) => {
    const [hoverItem, setHoverItem] = useState<number | null>()
    return (
        <div className='relative px-2 py-1 rounded-[10px] w-56 border border-gray-300  space-y-3 hover:shadow-custom hover:transition flex flex-col justify-between' onMouseEnter={() => setHoverItem(index)} onMouseLeave={() => setHoverItem(null)}>

            <div className='space-y-4'>
              <div>
              <div className={`w-5 h-5 absolute rounded-full bg-black -top-2 -left-2 flex items-center justify-center cursor-pointer ${hoverItem === index ? "block" : "hidden"}`}>
                    <Check className="text-white text-md font-bold w-4 " />
                </div>

                <div className="w-52 grid grid-cols-[1fr,35px] items-center">
                    <h4 className="text-wrap font-medium text-black tracking-tight text-md">{note.title}</h4>
                    <div className="h-7">
                        {hoverItem === index && (
                            <Button className={`${hoverItem === index ? "block" : "hidden"} grid items-center justify-center rounded-full hover:bg-gray-100 w-8 h-8`} variant={"ghost"} size={"icon"}>
                                <Pin className="w-4" />
                            </Button>
                        )}
                    </div>
                </div>

                <div className='space-y-3'>
                    <p className='font-normal text-justify select-none'>
                        {note.isAList ? (
                            <p>Lists</p>
                        ) : (
                            note.text.split("\n").map((text, index) => (
                                text && <p className='text-sm font-normal tracking-tight' key={index}>{text}</p>
                            ))
                        )}
                    </p>
                </div>
              </div>

                <div className='flex flex-row h-7 shrink-0 items-end w-full'>

                    {hoverItem === index && (
                        <div className='flex justify-between w-full items-end'>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-gray-100'>
                                <Bell className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-gray-100'>
                                <UserPlus className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-gray-100'>
                                <Palette className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-gray-100'>
                                <Image className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-gray-100'>
                                <Archive className="w-2" />
                            </Button>
                            <Button variant="ghost" size="icon" className='rounded-full [&_svg]:size-3 w-8 h-8 hover:bg-gray-100'>
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