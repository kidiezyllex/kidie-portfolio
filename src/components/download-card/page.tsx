import type React from "react"
import { Avatar, AvatarImage } from "../ui/avatar"

export default function DownloadCard({ data }: { data: any }) {
    return (
        <div className="w-full bg-gradient-to-tr from-[#071029] to-[#3a3c54] flex flex-col gap-4 p-5 rounded-[20px] border border-[#25272E]">
            <div className="flex items-center gap-2">
                <Avatar className="sm:h-14 sm:w-14 h-12 w-12 border-gray-500 select-none bg-[#111529]">
                    <AvatarImage src={data?.img} alt="bit-group" className="border-none select-none" draggable={false} />
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-violet-300 text-xl sm:text-2xl font-bold leading-[26px]">{data?.companyName}</span>
                    <span className="text-blue-500 text-xl sm:text-2xl font-bold ">{data?.role}</span>
                </div>
            </div>
            <ul className="list-disc flex flex-col gap-1 pl-5">
                {data?.responsible.map((item: string, index: number) =>
                    <li key={index} className="text-[#9799a7] text-sm sm:text-base font-semibold ">{item}</li>
                )}
            </ul>
        </div>
    )
}


