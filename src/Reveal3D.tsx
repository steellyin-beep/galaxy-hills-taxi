import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Reveal3DProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export default function Reveal3D({ children, delay = 0, direction = 'up', className = '' }: Reveal3DProps) {
  const directions = {
    left: { x: -100, y: 0, rotateY: 25 },
    right: { x: 100, y: 0, rotateY: -25 },
    up: { x: 0, y: 80, rotateX: 20 },
    down: { x: 0, y: -80, rotateX: -20 },
  };

  const initial = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, type: 'spring', stiffness: 80, damping: 15 }}
      style={{ perspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
