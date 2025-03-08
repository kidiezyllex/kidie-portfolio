"use client";
import React from 'react';
import { cn } from '@/lib/utils';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

export function BorderGradientIcon({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
  } & React.HTMLAttributes<HTMLElement>
>) {
  return (
    <Tag
      className={cn(
        'relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-md border decoration-clone p-px transition duration-500 hover:bg-black/10 bg-white/20',
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-full bg-transparent text-white',
          className,
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'absolute inset-0 z-0 flex-none overflow-hidden rounded-full',
        )}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      <div className="z-1 absolute inset-[2px] flex-none rounded-full bg-transparent" />
    </Tag>
  );
}
