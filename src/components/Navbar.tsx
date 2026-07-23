"use client";

import { Home, FolderGit2, Briefcase, Mail } from 'lucide-react';
import { MenuContainer } from '@/components/ui/fluid-menu';

export default function Navbar() {
  const items = [
    {
      icon: <Home size={18} />,
      label: 'Home',
      onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <FolderGit2 size={18} />,
      label: 'Projects',
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <Briefcase size={18} />,
      label: 'Experience',
      onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <Mail size={18} />,
      label: 'Contact',
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
  ];

  return (
    <nav className="fixed top-4 left-4 z-50">
      <MenuContainer items={items} />
    </nav>
  );
}
