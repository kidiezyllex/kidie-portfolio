import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GitPullRequestDraft } from "lucide-react";
import HoverButton from "../ui/hover-button";
import DownloadCard from "./DownloadCard/page";
import { currentJobsData, currentJobsDataVN } from "./data";
import { FaLaptopCode } from "react-icons/fa";
import { useLanguageStore } from "@/store/languageStore";

export const CurrentJob = () => {
    const { isVietnamese } = useLanguageStore();
    const data = [
        {
            title: isVietnamese ? "Dành cho khách hàng, công ty" : "For customers, companies",
            content: (
                <DownloadCard data={isVietnamese ? currentJobsDataVN[0] : currentJobsData[0]} />
            ),
        },
        {
            title: isVietnamese ? "Dành cho học sinh, sinh viên" : "For students",
            content: (
                <DownloadCard data={isVietnamese ? currentJobsDataVN[1] : currentJobsData[1]} />
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
                className='w-full h-full absolute z-0 object-cover opacity-50'
            />
            <div className="w-full flex justify-center mt-10">
                <HoverButton icon={FaLaptopCode} text={"SERVICES"}></HoverButton>
            </div>
            <Timeline data={data} />
        </div>
    );
}
