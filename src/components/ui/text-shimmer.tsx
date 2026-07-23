"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  duration?: number;
}

export default function TextShimmer({
  children,
  as: Tag = 'p',
  className,
  duration = 2,
}: TextShimmerProps) {
  return (
    <motion.div
      initial={{ backgroundPosition: '200% 0' }}
      animate={{ backgroundPosition: '-200% 0' }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      className={cn(
        'inline-block bg-clip-text text-transparent',
        'bg-[length:200%_100%]',
        'bg-gradient-to-r from-[var(--base-color,#a1a1aa)] via-[var(--base-gradient-color,#ffffff)] to-[var(--base-color,#a1a1aa)]',
        className
      )}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}
