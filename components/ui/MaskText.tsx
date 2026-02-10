import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MaskTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MaskText: React.FC<MaskTextProps> = ({ children, className, delay = 0 }) => {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          ease: [0.33, 1, 0.68, 1],
          delay: delay 
        }}
        className={cn("block", className)}
      >
        {children}
      </motion.span>
    </span>
  );
};