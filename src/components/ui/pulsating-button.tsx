'use client';

import React from 'react';

import { cn } from '@/lib/utils';

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = '#8b5cf6',
  duration = '1.5s',
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        'relative flex items-center justify-center rounded-lg bg-violet-500 px-4 py-1 text-center text-indigo-950',
        className,
      )}
      style={
        {
          '--pulse-color': pulseColor,
          '--duration': duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10 flex flex-row items-center gap-2">
        {children}
      </div>
      <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
    </button>
  );
}
