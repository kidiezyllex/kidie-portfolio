'use client';
import React from 'react';
import { cn } from '@/lib/utils';
export function BorderGradientRoundedButton({
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
        'relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-full border bg-violet-300 decoration-clone p-px transition duration-500 hover:bg-violet-300',
        containerClassName,
      )}
      {...props}
    >
      <div className={cn('z-10 w-auto rounded-[inherit] p-3', className)}>
        {children}
      </div>
      <div
        className={cn(
          'absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]',
        )}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <div className="z-1 absolute inset-[2px] flex-none rounded-full bg-violet-300" />
    </Tag>
  );
}
