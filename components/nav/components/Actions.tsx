import { Button } from '@/components/ui/button'
import { Grid, Grid2X2, RotateCcw, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Actions = () => {
    return (
        <div className='w-60 flex justify-end space-x-3 items-center'>
            <div className='w-full flex items-center'>
                <Button variant="ghost" className='rounded-full w-10 h-10 [&_svg]:size-4 hover:bg-gray-100' size={"sm"}>
                    <RotateCcw className="text-lg" />
                </Button>
                <Button variant="ghost" className='md:flex hidden rounded-full w-10 h-10 [&_svg]:size-4 hover:bg-gray-100' size={"sm"}>
                    <Grid2X2 className="text-lg" />
                </Button>
                <Button variant="ghost" className='rounded-full w-10 h-10 [&_svg]:size-4 hover:bg-gray-100'>
                    <Settings className="text-lg" />
                </Button>
            </div>
            <div className='flex space-x-2 items-center'>
                <Button variant="ghost" className='rounded-full w-10 h-10 [&_svg]:size-4 hover:bg-gray-100'>
                    <Grid2X2 className="text-lg" />
                </Button>

                <div className='h-10 md:h-8 w-10 md:w-8 rounded-full cursor-pointer'>
                    <Image  alt="logo" width={1000} height={1000} src="/globe.svg" className='w-full h-full rounded-full' />
                </div>

            </div>
        </div>
    )
}

export default Actions