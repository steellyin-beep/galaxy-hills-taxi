import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export default function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, rotateX: 15, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          scale: 1,
          transition: { type: 'spring', stiffness: 100, damping: 12 }
        }
      }}
      style={{ perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
