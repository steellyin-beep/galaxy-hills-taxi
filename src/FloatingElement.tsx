import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 3, 
  yOffset = 15,
  className = '' 
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{ 
        y: [-yOffset, yOffset, -yOffset],
        rotateZ: [-1, 1, -1],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: 'easeInOut',
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
