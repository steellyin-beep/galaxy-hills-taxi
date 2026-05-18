import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
}

export default function AnimatedCard({ children, delay = 0, className = '', hoverScale = 1.02 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 15, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, type: 'spring', stiffness: 100 }}
      whileHover={{ 
        scale: hoverScale, 
        rotateY: 3, 
        rotateX: -3,
        boxShadow: '0 25px 50px -12px rgba(20, 184, 166, 0.25)',
        z: 50
      }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
