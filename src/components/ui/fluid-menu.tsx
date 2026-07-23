"use client";

import React, { useState, useRef, useEffect, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';

interface MenuItemProps {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
  delay?: number;
  isOpen: boolean;
}

function MenuItem({ icon, label, onClick, delay = 0, isOpen }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white hover:bg-neutral-800 transition-all duration-300 shadow-lg"
      style={{
        transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.6)',
        opacity: isOpen ? 1 : 0,
        transitionDelay: `${delay}ms`,
        transitionDuration: '300ms',
        transitionProperty: 'transform, opacity',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      {icon}
      {label && (
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-200 px-3 py-1 rounded-md shadow-xl whitespace-nowrap border-l-2 border-l-[#E50914]">
          {label}
        </span>
      )}
    </button>
  );
}

interface MenuContainerProps {
  items: {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
  }[];
}

function MenuContainer({ items }: MenuContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="flex flex-col items-center gap-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-800 text-white shadow-xl hover:border-[#E50914]/50 transition-all duration-300 z-10"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className="flex flex-col items-center gap-3">
        {items.map((item, i) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={() => {
              item.onClick?.();
              setIsOpen(false);
            }}
            delay={(i + 1) * 40}
            isOpen={isOpen}
          />
        ))}
      </div>
    </div>
  );
}

export { MenuContainer, MenuItem };
export type { MenuItemProps, MenuContainerProps };
