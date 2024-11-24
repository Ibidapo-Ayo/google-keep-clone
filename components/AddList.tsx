import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Plus, Square, X } from 'lucide-react'
import { Button } from './ui/button'
import { NoteTypes } from '@/types'

type listTypes = {
    text: string,
    completed: boolean
}

const AddList = ({ value, setNotes, index, note, active, setActive }: {
    value: listTypes,
    setNotes: Dispatch<SetStateAction<NoteTypes>>,
    index: number,
    note: NoteTypes,
    active: number | undefined,
    setActive: (value:number) => void
}) => {

    const [isTyping, setIsTyping] = useState<boolean>(false)


    // let the first input of the array be active
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        console.log(active);

    }, [active])

    return (
        <div className={`${active === index ? "border-y" : "border-none"}`}>
            <div className={`grid grid-cols-[20px,1fr,20px] gap-2 items-center px-4`} onClick={() => {
                setIsTyping(false)
                setActive(index)
            }} >

                {isTyping ? (
                    <Square className="w-4 text-gray-400 cursor-pointer" />
                ) : (
                    <Plus className='w-3' />
                )}

                <Input ref={inputRef} className='placeholder:text-gray-400 placeholder:tracking-tighter placeholder:text-[14px] h-6 placeholder:font-normal text-[14px] w-full border-none outline-none' placeholder='List items' onInput={() => {
                    setIsTyping(true)

                    if (index === note.listValue.length - 1) {
                        setNotes({
                            ...note, listValue: [...note.listValue, {
                                text: "",
                                completed: false
                            }]
                        })
                    }

                }} />


                {active === index && (
                    <Button variant={"ghost"} className='rounded-full w-8 h-8 [&_svg]:size-3 hover:bg-gray-100' onClick={() => {

                    }}>
                        <X className='w-3' />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default AddList