import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Item {
  name: string;
  image: string;
}

export default function AvatarList({
  size = 'md',
  className,
  data,
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  data: Item[];
}) {
  const sizes: Record<'sm' | 'md' | 'lg', string> = {
    lg: 'm-1 size-10',
    md: 'm-1 size-9',
    sm: 'size-6',
  };

  return (
    <div className={cn('flex ml-4', className)}>
      {data.map((item) => (
        <div
          key={item.name}
          className="z-100 group relative -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
        >
          <div className="relative cursor-none overflow-hidden rounded-full border bg-background">
            <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-300 from-30% via-purple-400 via-50% to-indigo-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
            <div className="z-1 blur-lg" />
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className={cn(
                'size-5 cursor-none rounded-full object-cover',
                sizes[size] ?? sizes.md,
              )}
            />
          </div>
          <div className="z-100 absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded border bg-transparent p-1 px-3 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100">
            <div className="text-xs font-semibold">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
