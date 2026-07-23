"use client";

import { useEffect, useState, useRef, type ReactNode } from 'react';
import { useInView } from 'framer-motion';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

interface SpecialTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
}

export default function SpecialText({ children, className = '', delay = 0, inView = true }: SpecialTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayText, setDisplayText] = useState('');
  const text = String(children);

  useEffect(() => {
    if (!inView || isInView) {
      const timeout = setTimeout(() => {
        let iterations = 0;
        const maxIterations = text.length * 2 + 10;

        const interval = setInterval(() => {
          setDisplayText(
            text
              .split('')
              .map((char, i) => {
                if (char === ' ') return ' ';
                if (iterations >= maxIterations - i * 2) return text[i];
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              })
              .join('')
          );

          iterations++;
          if (iterations >= maxIterations) {
            clearInterval(interval);
            setDisplayText(text);
          }
        }, 40);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, text, delay, inView]);

  if (!inView) {
    return <span className={`h-auto inline-block ${className}`}>{children}</span>;
  }

  return (
    <span ref={ref} className={`h-auto inline-block ${className}`}>
      {displayText || text}
    </span>
  );
}
