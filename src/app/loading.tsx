'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  const spinTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 1,
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="relative h-10 w-10">
        <motion.span
          className="block h-10 w-10 rounded-full border-8 border-gray-300"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
        <motion.span
          className="absolute left-0 top-0 block h-10 w-10 rounded-full border-t-8 border-blue-500"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      </div>
    </div>
  );
}
