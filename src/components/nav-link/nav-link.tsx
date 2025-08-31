import * as React from 'react';
import { Separator } from '@/components/ui/separator';

type NavLinkProps = {
  href: `#${string}`;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <div className={className}>
      <Separator className="w-24 bg-white/10" />
      <a
        href={href}
        className="mt-2 block text-xs font-semibold tracking-[0.2em] text-slate-300 hover:text-white"
      >
        {children}
      </a>
    </div>
  );
}
