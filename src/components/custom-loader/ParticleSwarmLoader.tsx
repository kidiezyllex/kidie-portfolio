import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  id: number;
  x: number;
  y: number;
  size: number;
}

const ParticleSwarmLoader = () => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const particleCount = 50;

  useEffect(() => {
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        size: Math.random() * 4 + 2,
      })),
    );
  }, []);

  return (
    <div className="h-80 w-80 overflow-hidden bg-transparent">
      <svg width="100%" height="100%" viewBox="-100 -100 200 200">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="#c4b5fd"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              cx: [particle.x, 0, particle.x],
              cy: [particle.y, 0, particle.y],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ParticleSwarmLoader;
