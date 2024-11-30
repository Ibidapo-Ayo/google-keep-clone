"use client"
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import SearchBar from './components/SearchBar'
import Actions from './components/Actions'
import Image from 'next/image'

const Header = () => {
    const { setExpanded } = useContext(GoogleKeepCloneContext)
    return (
        <div
            className='py-2 px-5 grid grid-cols-[auto,1fr,auto] fixed bg-white w-full'
        >
            <div className='flex w-80'>
                <Button variant={"ghost"} size={"icon"} className='rounded-full w-12 h-12 [&_svg]:size-6 hover:bg-black hover:bg-opacity-10' onClick={() => setExpanded((prev) => !prev)}>
                    <Menu className='text-gray-500' />
                </Button>

                <div className='flex items-center'>
                    <Image width={1000} height={1000} src='/logo/keep_logo.png' className='w-[30px] md:w-[60px]' alt='google_keep_logo' />
                    <h4 className='text-secondary-text font-normal tracking-tight text- md:text-2xl'>Keep</h4>
                </div>
            </div>

            <SearchBar />

            <Actions />
        </div>
    )
}

export default Header