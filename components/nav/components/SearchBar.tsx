import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { usePageClick } from '@/hooks/usePageClick'
import { Search, X } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = () => {
    const [bg, setBg] = useState(true)
    usePageClick(setBg, "search-bar")
    return (
        <div className={`flex flex-grow h-11 md:w-[75%] shadow-custom rounded-[10px] items-center px-3 cursor-pointer ${bg ? "bg-gray-200" : "bg-white"}`} id='search-bar' onClick={() => setBg(false)}>
            <Search className='text-gray-500 w-4' />
            <Input className="note-input placeholder:tracking-wide placeholder:text-gray-500" placeholder='Search...' />
            {!bg && (
                <Button variant={"ghost"} size={"sm"} className='rounded-full w-10 h-10 [&_svg]:size-5 hover:bg-gray-100'>
                    <X className='w-4' />
                </Button>
            )}
        </div>
    )
}

export default SearchBar