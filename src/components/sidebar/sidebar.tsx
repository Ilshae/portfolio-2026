import * as React from 'react';
import { NavLink } from '@/components/nav-link/nav-link';
import { SocialIcons } from '@/components/social-icons/social-icons';

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
      className={`py-16 pr-6 border-r border-[#0b1420]/40 ${className ?? ''}`}
      aria-label="Sidebar"
      {...rest}
    >
      <div className="sticky top-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">{name}</h1>
        <p className="mt-1 text-sm text-slate-400">{title}</p>

        <nav className="mt-10 space-y-5" aria-label="Section navigation">
          {sections.map((section) => (
            <NavLink key={section.href} href={section.href}>
              {section.label.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        <SocialIcons links={socials} />
      </div>
    </aside>
  );
};

export default Sidebar;
