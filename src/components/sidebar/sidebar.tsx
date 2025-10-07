'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
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
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.href || '');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.href.replace('#', ''),
        element: document.getElementById(section.href.replace('#', '')),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection.id}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <aside
      className={`sticky top-0 h-screen pt-16 flex flex-col ${className ?? ''}`}
      aria-label="Sidebar"
      {...rest}
    >
      <div>
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">{name}</h1>
          <h2 className="text-xl leading-7">{title}</h2>
        </div>

        <nav className="mt-16" aria-label="Section navigation">
          <ul className="w-max">
            {sections.map((section) => (
              <li key={section.href}>
                <NavLink href={section.href} isActive={activeSection === section.href}>
                  {section.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto pb-16">
        <SocialIcons links={socials} />
      </div>
    </aside>
  );
};

export default Sidebar;
