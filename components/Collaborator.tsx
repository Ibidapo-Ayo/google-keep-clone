import { UserPlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'

const Collaborator = () => {
    return (
        <div className='w-full absolute top-0 left-0 bg-white p-5 h-full rounded-md flex flex-col space-y-5'>
            <div className='flex items-center space-x-2'>
                <div className='w-9 h-9 rounded-full '>
                    <Image src={"/profile_pic_2.jpg"} alt='Profile pic' width={1000} height={1000} className='w-full h-full object-cover   rounded-full ring-2 ring-gray-100 ring-offset-2 ring-offset-white' />
                </div>
                <div className='space-y-0 '>
                    <h3 className='font-semibold text-sm'>Ibidapo ayomide</h3>
                    <p className='text-gray-400 text-xs'>ibidapoayomide754@gmail.com</p>
                </div>
            </div>

            <div className='flex items-center space-x-2'>
                <div className='w-9 h-9 rounded-full flex justify-center items-center ring-2 ring-white'>
                    <UserPlus className='text-gray-500 w-5' />
                </div>
                <div className=''>
                    <Input type='text' className='border-none outline-none shadow-none w-full focus:outline focus:border-none bg-transparent placeholder:text-gray-500 placeholder:text-xs tracking-tight' placeholder='Person or email to share with' />
                </div>
            </div>


            <div className='w-full h-20 bg-gray-500'>

            </div>
        </div>
    )
}

export default Collaborator