import { Eye } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const RoundedSlideButton: React.FC = () => {
  return (
    <Link
      href={
        'https://utfs.io/f/yKG0YxsXgqAJAawiRw48DWcmjMxUrRoTphAVdq3N7waL4kBG'
      }
      target="_blank"
    >
      <button className="relative z-0 flex cursor-none items-center gap-2 overflow-hidden rounded-sm border-[1px] border-violet-300 px-4 py-2 font-semibold text-violet-300 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-violet-300 before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-indigo-950 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95">
        <span>View Resume</span>
        <Eye className="h-5 w-5" />
      </button>
    </Link>
  );
};

export default RoundedSlideButton;