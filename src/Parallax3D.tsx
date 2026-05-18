import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface Parallax3DProps {
  children: ReactNode;
  speed?: number;
  rotateSpeed?: number;
  className?: string;
}

export default function Parallax3D({ children, speed = 0.5, rotateSpeed = 0, className = '' }: Parallax3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [rotateSpeed, -rotateSpeed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateX, scale, opacity, perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
