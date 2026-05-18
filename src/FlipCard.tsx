import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = '' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      style={{ perspective: 1000 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        <div style={{ backfaceVisibility: 'hidden' }} className="w-full h-full">
          {front}
        </div>
        <motion.div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className="absolute inset-0 w-full h-full"
        >
          {back}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
