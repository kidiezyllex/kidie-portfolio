import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GitPullRequestDraft } from "lucide-react";
import HoverButton from "../ui/hover-button";
import DownloadCard from "../download-card/page";
const currentJobs = [
    {
        companyName: "BIT GROUP",
        role: "Front-End Intern",
        responsible: ["Currently doing 3-month Front-End internship at BIT Group Company."],
        img: "/bit-group.jpg"
    },
    {
        companyName: "Online Sports Site & MMO site",
        role: "Front-End Freelancer (Nextjs)",
        responsible: ["Build the online sports website interface according to the original page.", "Set-up UI/UX libraries, build common components and handle responsive interface errors.", "Handle Api Client and CMS Api.", "Participate in producing the missing Api for Back-End."],
        img: "/freelancer.svg"
    }
]
export function CurrentJob() {
    const data = [
        {
            title: "10/02/2025 - current",
            content: (
                <DownloadCard data={currentJobs[0]} />
            ),
        },
        {
            title: "16/01/2025 - current",
            content: (
                <DownloadCard data={currentJobs[1]} />
            ),
        },
    ];
    return (
        <div className="w-full lg:-mt-40 mb-40 relative">
            <Image
                src={"/stacked-waves-haikei.svg"}
                alt="blob-background"
                width={800}
                height={800}
                className='w-full h-full absolute z-0 object-cover'
            />
            <div className="w-full flex justify-center mt-16">
                <HoverButton icon={GitPullRequestDraft} text={"CURRENT JOB"}></HoverButton>
            </div>
            <Timeline data={data} />
        </div>
    );
}
