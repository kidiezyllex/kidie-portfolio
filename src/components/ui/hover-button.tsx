import React from "react"

interface HoverButtonProps {
    icon: any
    text: string
}

const HoverButton: React.FC<HoverButtonProps> = ({ icon: Icon, text }) => {
    return (
        <div className="relative left-6 sm:left-0">
            <button className="w-fit h-fit rounded-md border-none transition-all duration-500 ease-in-out text-2xl sm:text-4xl font-semibold font-[Verdana,Geneva,Tahoma,sans-serif] flex items-center text-violet-300 focus:outline-none group">
                <span className="absolute h-12 w-12 -left-14 flex justify-center items-center transition-all duration-500 group-hover:w-[100%] group-hover:left-0 group-active:scale-[0.85]">
                    <Icon className="sm:h-12 sm:w-12 h-7 w-7 text-violet-300 
                        " />
                </span>
                <span className="group-hover:opacity-0 transition-all duration-500">
                    <span className="text-violet-300 relative transition-shadow duration-300">
                        {text}
                    </span>
                </span>
            </button>
        </div>
    )
}

export default HoverButton

