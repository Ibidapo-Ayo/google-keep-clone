import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import { listValueTypes } from '@/types'
import { Square, SquareCheck } from 'lucide-react'
import React, { useContext } from 'react'

const ShowList = ({ list, index }: { list: listValueTypes, index: number }) => {
    const { notes, setNotes } = useContext(GoogleKeepCloneContext)

    const handleCheckList = () => {
        const filteredList = notes.filter((note, i) => i === index)
        
        filteredList[0].listValue[0].completed = !list.completed;

        
    }
    return (
        <div className='flex items-center space-x-2'>
            <Square className='w-4 cursor-pointer' onClick={handleCheckList} />
            <p className='font-normal text-justify select-none text-sm'>{list.text}</p>
        </div>
    )
}

export default ShowList