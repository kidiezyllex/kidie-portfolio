import type React from "react"
import { cn } from "@/lib/utils"

interface BrowserComponentProps {
    children?: React.ReactNode
    className?: string
    domain: string // Added domain prop
}

export const BrowserComponent: React.FC<BrowserComponentProps> = ({
    className,
    children,
    domain, // Added domain prop
}) => (
    <div
        className={cn(
            "relative text-sm text-neutral-400 border border-neutral-800 rounded-lg w-full h-[400px] shadow-none shadow-gray-200 dots-neutral-800 dots-gray-300 bg-neutral-950",
            className,
        )}
    >
        <div
            className={"border-b border-inherit flex items-center justify-between w-full py-2 px-4 bg-inherit rounded-t-lg"}
        >
            <div className={"flex gap-2"}>
                <div className={"w-3 h-3 rounded-full bg-[#FD6156]"} />
                <div className={"w-3 h-3 rounded-full bg-[#FEBD2F]"} />
                <div className={"w-3 h-3 rounded-full bg-[#29C741]"} />
            </div>
            <div className={"border border-inherit rounded-md flex gap-2 px-1.5 py-1 font-sans w-fit min-w-1/3"}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    className={"stroke-neutral-700 w-4 max-w-5"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className={"text-sm flex items-center justify-center"}>{domain}</span>
            </div>
            <div />
        </div>
        <div className={"w-full h-full absolute top-0 left-0 pt-12"}>{children}</div>
    </div>
)

