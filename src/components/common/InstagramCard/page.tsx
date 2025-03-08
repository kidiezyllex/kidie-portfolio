import Image from 'next/image';
import { Heart, MessageCircle, Send, Bookmark, Ellipsis } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface InstagramCardProps {
    avatarImg: string;
    name: string;
    location: string;
    likeNumbers: number;
    title: string;
    tags: string[];
    imageUrl: string;
}

export function InstagramCard({
    avatarImg,
    name,
    location,
    likeNumbers,
    title,
    tags,
    imageUrl,
}: InstagramCardProps) {
    return (
        <div
            className={cn(
                'relative flex h-fit w-full cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border p-4',
                'border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]',
            )}
        >
            {/* Header */}
            <div className="flex items-center">
                <Avatar className="mr-3 h-10 w-10">
                    <AvatarImage src={avatarImg} alt={name} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-sm font-semibold text-violet-300">{name}</h2>
                    <p className="text-xs text-muted-foreground">{location}</p>
                </div>
                <Ellipsis className="ml-auto h-4 w-4" />
            </div>

            {/* Image */}
            <Image
                src={imageUrl}
                alt="Post image"
                width={500}
                height={500}
                className="my-1 h-auto w-full rounded-sm"
            />

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <Heart className="h-5 w-5 text-red-500" />
                    <MessageCircle className="h-5 w-5" />
                    <Send className="h-5 w-5" />
                </div>
                <Bookmark className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-sm font-semibold">
                {likeNumbers.toLocaleString()} likes
            </p>
            <p className="break-words text-sm">
                <span className="mr-2 font-semibold">{name}</span>
                {title}
            </p>
            <p className="text-sm text-blue-500">
                {tags.map((tag, index) => (
                    <span key={index}>#{tag} </span>
                ))}
            </p>
        </div>
    );
}
