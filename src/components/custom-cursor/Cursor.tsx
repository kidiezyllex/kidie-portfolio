'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('a');
    const cursorText = document.querySelector('.cursor-text') as HTMLElement;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement;
      if (link.classList.contains('view')) {
        gsap.to(cursor, { scale: 4 });
        cursorText.style.display = 'block';
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      cursorText.style.display = 'none';
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-5 w-5 items-center justify-center rounded-full bg-violet-300 p-2 mix-blend-difference"
    >
      <span className="hidden cursor-text text-[5px] font-extrabold tracking-[1px]"></span>
    </div>
  );
};

export default Cursor;
