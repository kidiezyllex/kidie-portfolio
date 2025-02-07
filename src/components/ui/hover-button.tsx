import React from "react"
import { type LucideIcon } from 'lucide-react'

interface HoverButtonProps {
    icon: LucideIcon
    text: string
}

const HoverButton: React.FC<HoverButtonProps> = ({ icon: Icon, text }) => {
    return (
        <div className="relative left-4 sm:left-0">
            <button className="w-fit h-fit rounded-md border-none transition-all duration-500 ease-in-out text-4xl font-semibold font-[Verdana,Geneva,Tahoma,sans-serif] flex items-center text-violet-300 focus:outline-none group">
                <span className="absolute h-11 w-11 -left-12 flex justify-center items-center transition-all duration-500 group-hover:w-[100%] group-hover:left-0 group-active:scale-[0.85]">
                    <Icon className="h-11 w-11 text-violet-400" />
                </span>
                <span className="group-hover:opacity-0 transition-all duration-500">
                    {text}
                </span>
            </button>
        </div>
    )
}

export default HoverButton
