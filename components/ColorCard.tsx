"use client"
import React, { useContext } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from './ui/button'
import { Check, Palette } from 'lucide-react'
import { colors } from '@/lib/utils'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'


const ColorCard = () => {

    const { setColorValue, colorValue } = useContext(GoogleKeepCloneContext)

    return (
        <HoverCard>
            <HoverCardTrigger>
                <Button variant={"ghost"} size={"sm"} className='rounded-full w-8 h-8 [&_svg]:size-4 [&_svg]:text-gray-700 hover:bg-black hover:bg-opacity-10 disabled:cursor-not-allowed'>
                    <Palette />
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className='bg-white shadow-md w-full flex gap-3' align="start">
            <div className={`rounded-full w-10 h-10 cursor-pointer border-2 flex justify-center items-center ${!colorValue && "border-purple-600"} relative`} style={{
                        backgroundColor: "#fff"
                    }} 
                        onClick={() => setColorValue("")}
                    >

                        <Palette className='w-4' />
                        {!colorValue && (
                            <div className='text-white -top-2 flex justify-center items-center right-0 rounded-full w-4 h-4 bg-purple-500 absolute'>
                                <Check className='w-3 ' />
                            </div>
                        )}
                    </div>
                {colors.map((co, index) => (
                    <div className={`rounded-full w-10 h-10 cursor-pointer border-2 ${co === colorValue && "border-purple-600"} relative`} style={{
                        backgroundColor: co
                    }} key={index}
                        onClick={() => setColorValue(co)}
                    >
                        {co === colorValue && (
                            <div className='text-white -top-2 flex justify-center items-center right-0 rounded-full w-4 h-4 bg-purple-500 absolute'>
                                <Check className='w-3 ' />
                            </div>
                        )}
                    </div>
                ))}
            </HoverCardContent>
        </HoverCard>

    )
}

export default ColorCard