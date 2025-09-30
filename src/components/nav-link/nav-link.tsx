import * as React from 'react';
import { Separator } from '@/components/ui/separator';

export type NavLinkProps = {
  href: `#${string}`;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className, ariaLabel, ...anchorProps }, ref) => {
    return (
      <div className={className}>
        <Separator className="w-24 bg-[#0b1420]/40" />
        <a
          href={href}
          ref={ref}
          aria-label={ariaLabel}
          className="mt-2 block text-xs font-semibold tracking-[0.2em] text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
          {...anchorProps}
        >
          {children}
        </a>
      </div>
    );
  },
);

export default NavLink;
