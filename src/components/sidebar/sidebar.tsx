import * as React from 'react';
import { NavLink } from '@/components/nav-link/nav-link';
import { SocialIcons } from '@/components/social-icons/social-icons';

type SidebarProps = {
  name: string;
  title: string;
  sections: { label: string; href: `#${string}` }[];
  socials?: Parameters<typeof SocialIcons>[0]['links'];
};

export function Sidebar({ name, title, sections, socials }: SidebarProps) {
  return (
    <aside className="py-16 pr-6 border-r border-white/10">
      <div className="sticky top-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">{name}</h1>
        <p className="mt-1 text-sm text-slate-400">{title}</p>

        <div className="mt-10 space-y-5">
          {sections.map((s) => (
            <NavLink key={s.href} href={s.href}>
              {s.label.toUpperCase()}
            </NavLink>
          ))}
        </div>

        <SocialIcons links={socials} />
      </div>
    </aside>
  );
}
