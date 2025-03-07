import type React from "react"
import { Avatar, AvatarImage } from "../../ui/avatar"

export default function DownloadCard({ data }: { data: any }) {
    return (
        <div className="w-full bg-gradient-to-br from-[#0c1633] to-[#2d2f45] flex flex-col gap-5 p-6 rounded-xl border border-[#2a2d36] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center gap-3">
                <Avatar className="sm:h-16 sm:w-16 h-14 w-14 border-2 border-violet-400/30 select-none bg-[#111529] shadow-md">
                    <AvatarImage src={data?.img} alt={data?.companyName || "company-logo"} className="border-none select-none object-cover" draggable={false} />
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-violet-200 text-lg sm:text-2xl font-bold leading-tight tracking-wide">{data?.companyName}</span>
                    <span className="text-violet-400 text-base sm:text-xl font-bold mt-0.5 tracking-wide">{data?.role}</span>
                </div>
            </div>
            <ul className="list-disc flex flex-col gap-2 pl-5 marker:text-violet-400">
                {data?.responsible.map((item: string, index: number) =>
                    <li key={index} className="text-[#b0b3c4] text-sm sm:text-base font-medium leading-relaxed">{item}</li>
                )}
            </ul>
        </div>
    )
}


