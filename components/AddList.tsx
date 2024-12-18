import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
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
    setActive: (value: number) => void
}) => {

    const [isTyping, setIsTyping] = useState<boolean>(false)


   
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleRemoveListItems = () => {
        if( index === note.listValue.length -1){
            if(index > 0){
                setActive(index - 1)
            }
            inputRef.current?.focus()
        }else if(index < note.listValue.length -1){
            setActive(index + 1 )
            inputRef.current?.focus()
        }
        if (note.listValue.length !== 1) {
            setNotes({ ...note, listValue: note.listValue.filter((_, i) => index !== i) })
        } else {
           setNotes({...note, listValue: [{...note.listValue[0], text: ""}, ...note.listValue.slice(1)]})
        }
    }

    return (
        <div className={`${active === index ? "border-y" : "border-none"}`}>
            <div className={`grid grid-cols-[20px,1fr,20px] gap-2 items-center px-4`} onClick={() => {
                if (note.listValue[index].text !== "") {
                    setIsTyping(false)
                }
                setActive(index)
            }} >

                {isTyping ? (
                    <Square className="w-4 text-gray-400 cursor-pointer" />
                ) : (
                    <Plus className='w-3' />
                )}

                <Input ref={inputRef} value={value.text} name={`List-${index}`} className='placeholder:text-gray-400 shadow-none placeholder:tracking-tighter placeholder:text-[14px] h-6 placeholder:font-normal text-[14px] w-full border-none outline-none' placeholder='List items'
                onChange={(e) => {
                  setNotes((prev: NoteTypes) => {
                    const updated = {...prev}
                    updated.listValue[index].text = e.target.value
                    return updated
                  })
                }}
                onInput={() => {
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
                    <Button variant={"ghost"} className='rounded-full w-8 h-8 [&_svg]:size-3 hover:bg-black hover:bg-opacity-10' onClick={handleRemoveListItems}>
                        <X className='w-3' />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default AddList