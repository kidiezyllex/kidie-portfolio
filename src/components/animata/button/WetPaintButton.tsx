import { Download } from 'lucide-react';
import React from 'react';

const WetPaintButton: React.FC = () => {
  return (
    <button className="group relative flex w-fit cursor-none items-center gap-2 rounded-sm bg-violet-500 px-4 py-2.5 font-semibold text-violet-200 transition-colors first-letter:flex hover:bg-violet-600">
      Download Resume
      <Download className="h-5 w-5" />
      {/** Droplets */}
      {[
        { left: '10%', height: 24, scaleY: 0.75, translateY: 50, opacity: 0 },
        {
          left: '30%',
          height: 20,
          scaleY: 0.765,
          translateY: -7.74,
          opacity: 0.995,
        },
        { left: '57%', height: 10, scaleY: 0.75, translateY: 50, opacity: 0 },
        {
          left: '85%',
          height: 16,
          scaleY: 0.85,
          translateY: 32.06,
          opacity: 0.31,
        },
      ].map(({ left, height, scaleY, translateY, opacity }, index) => (
        <div
          key={index}
          className="absolute top-[99%] origin-top"
          style={{
            left,
            transform: `scaleY(${scaleY}) translateZ(0)`,
          }}
        >
          <div
            className="w-2 rounded-b-full bg-violet-500 transition-colors group-hover:bg-violet-600"
            style={{ height: `${height}px` }}
          />
          {/** Side curves */}
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-full top-0"
          >
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                className="fill-violet-500 transition-colors group-hover:fill-violet-600"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="6" height="6" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-full top-0 rotate-90"
          >
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                className="fill-violet-500 transition-colors group-hover:fill-violet-600"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="6" height="6" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/** Small dot */}
          <div
            className="absolute top-full h-2 w-2 rounded-full bg-violet-500 transition-colors group-hover:bg-violet-600"
            style={{
              opacity,
              transform: `translateY(${translateY}px) translateZ(0)`,
            }}
          />
        </div>
      ))}
    </button>
  );
};

export default WetPaintButton;
