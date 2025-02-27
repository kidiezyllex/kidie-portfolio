import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GitPullRequestDraft } from "lucide-react";
import HoverButton from "../ui/hover-button";
import DownloadCard from "./DownloadCard/page";
import { currentJobsData } from "./data";
import { FaLaptopCode } from "react-icons/fa";

export const CurrentJob = () => {
    const data = [
        {
            title: "14/02/2025 - current",
            content: (
                <DownloadCard data={currentJobsData[0]} />
            ),
        },
        {
            title: "10/02/2025 - current",
            content: (
                <DownloadCard data={currentJobsData[1]} />
            ),
        },
        {
            title: "16/01/2025 - current",
            content: (
                <DownloadCard data={currentJobsData[2]} />
            ),
        },
    ];
    return (
        <div className="section w-full mb-[122px] relative">
            <Image
                src={"/stacked-waves-haikei.svg"}
                alt="blob-background"
                width={800}
                height={800}
                className='w-full h-full absolute z-0 object-cover'
            />
            <div className="w-full flex justify-center mt-10">
                <HoverButton icon={FaLaptopCode} text={"CURRENT JOB"}></HoverButton>
            </div>
            <Timeline data={data} />
        </div>
    );
}
