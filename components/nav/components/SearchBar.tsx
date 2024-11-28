import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import { usePageClick } from '@/hooks/usePageClick'
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const SearchBar = () => {
    const router = useRouter()
    const [bg, setBg] = useState(true)
    usePageClick(setBg, "search-bar")


    const { searchPrompt, setSearchPrompt } = useContext(GoogleKeepCloneContext)

    useEffect(() => {

        if (!bg) {
            router.push(`/search/?q=${searchPrompt}`)
        }

        if (bg) {
            router.push("/")
        }
    }, [searchPrompt, bg])

    return (
        <div className={`flex flex-grow h-11 md:w-[75%]  rounded-[10px] items-center px-3 cursor-pointer ${bg ? "bg-gray-100" : "bg-white shadow-custom"}`} id='search-bar' onClick={() => {
            setBg(false)
        }}>
            <Search className='text-gray-500 w-4' />
            <Input className="note-input border-none outline-none placeholder:tracking-wide placeholder:text-gray-500" value={searchPrompt} onChange={(e) => setSearchPrompt(e.target.value)} placeholder='Search...' />
            {!bg && (
                <Button variant={"ghost"} size={"sm"} className='rounded-full w-10 h-10 [&_svg]:size-5 hover:bg-gray-100' onClick={()=>{
                    setSearchPrompt("")
                    setBg((prev) => !prev)}}
                    
                    >
                    <X className='w-4' />
                </Button>
            )}
        </div>
    )
}

export default SearchBar