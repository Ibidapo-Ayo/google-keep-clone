"use client"
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'

const Header = () => {
    const { setExpanded } = useContext(GoogleKeepCloneContext)
    return (
        <div
            className='py-4 px-5 grid grid-cols-[auto,1fr,auto] fixed bg-white w-full'
        >
            <Button variant={"ghost"} size={"icon"} className='rounded-full w-12 h-12 [&_svg]:size-6 hover:bg-gray-100' onClick={()=> setExpanded((prev) => !prev)}>
                <Menu className='text-gray-500' />
            </Button>

        </div>
    )
}

export default Header