'use client';

import * as React from 'react';
import { SocialIcons } from '@/components/social-icons/social-icons';
import { NavLink } from '@/components/nav-link/nav-link';

export type SidebarProps = {
  name: string;
  title: string;
  sections: { label: string; href: `#${string}` }[];
  socials?: Parameters<typeof SocialIcons>[0]['links'];
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Sidebar: React.FC<SidebarProps> = function Sidebar({
  name,
  title,
  sections,
  socials,
  className,
  ...rest
}) {
  return (
    <aside
      className={`sticky top-0 h-screen pt-16 ${className ?? ''}`}
      aria-label="Sidebar"
      {...rest}
    >
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">{name}</h1>
        <h2 className="text-xl leading-7">{title}</h2>
      </div>

      <nav className="mt-16" aria-label="Section navigation">
        <ul className="w-max">
          {sections.map((section) => (
            <li key={section.href}>
              <NavLink href={section.href}>{section.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-16">
        <SocialIcons links={socials} />
      </div>
    </aside>
  );
};

export default Sidebar;
