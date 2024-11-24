import React from 'react'
import { ArchiveIcon, BellPlus, Image, MoreVertical, Palette, Redo2, Undo2, UserPlus } from 'lucide-react'
import { Button } from '../ui/button'

const IconButtons = () => {
    return (
        <div className='flex space-x-2'>
            <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                <BellPlus />
            </Button>
            <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                <UserPlus />
            </Button>
            <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                <Palette />
            </Button>
            <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                <Image />
            </Button>
            <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                <ArchiveIcon />
            </Button>
            <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                <MoreVertical />
            </Button>

            <div className='flex pl-5'>
                <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                    <Undo2 className='' />
                </Button>
                <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed'>
                    <Redo2 />
                </Button>
            </div>
        </div>
    )
}

export default IconButtons