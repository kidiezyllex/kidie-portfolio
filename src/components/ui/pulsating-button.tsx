"use client";

import React from 'react';

import { cn } from '@/lib/utils';

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function PulsatingButton({
  className,
  children,
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        'relative flex items-center justify-center rounded-lg bg-violet-500 px-4 py-1 text-center text-indigo-950 text-xs',
        className,
      )}
      {...props}
    >
      <div className="relative z-10 flex flex-row items-center gap-2 text-xs">
        {children}
      </div>
      <div className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-inherit shadow-[0_0_0_4px_#C4B5FD] opacity-10" />
    </button>
  );
}
