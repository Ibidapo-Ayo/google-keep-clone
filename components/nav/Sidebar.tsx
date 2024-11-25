"use client"
import { sideBarItems } from '@/constants/icons'
import { GoogleKeepCloneContext } from '@/context/GoogleKeepContext'
import React, { useContext, useState } from 'react'

const Sidebar = () => {
    const { expanded} = useContext(GoogleKeepCloneContext)

    const [activeTab, setActiveTab] = useState(0)
    const [absoluteExpand, setAbsoluteExpand] = useState(false)

    const handleActiveTab = (index: number) => {
        setActiveTab(index)
    }
    return (
        <div className='top-20 min-h-[88vh] bg-white pr-2 z-20'>
            <ul className={`flex-1 space-y-1 bg-white  ${absoluteExpand && !expanded ?"absolute w-64 shadow-lg h-[88vh]" : ""} ${expanded && "w-64"}`} onMouseEnter={() => {
                setAbsoluteExpand(true)
            }}

                onMouseLeave={() => {
                    setAbsoluteExpand(false)
                }}>
                {sideBarItems.map((items, index) => {
                    const { text, Icon } = items
                    return (
                        <li
                            key={index} className={`sidebar ${activeTab === index ? "bg-amber-100 hover:bg-amber-100" : "hover:bg-gray-100"} ${expanded || absoluteExpand ? "rounded-r-full w-full h-12" : "w-12 h-12 rounded-full text-center flex justify-center items-center"} `} onClick={() => handleActiveTab(index)}>
                            <div className={``}>
                                <Icon className={`${!expanded && absoluteExpand && "ml-1"} w-5`} />
                            </div>
                            <span className={`text ${!expanded && !absoluteExpand ? "hidden": "block"}`}>{text}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar