import * as React from 'react';

export type NavLinkProps = {
  href: `#${string}`;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  isActive?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className, ariaLabel, isActive, ...anchorProps }, ref) => {
    return (
      <a
        href={href}
        ref={ref}
        aria-label={ariaLabel}
        className="group flex items-center py-3 focus-visible:outline-none"
        {...anchorProps}
      >
        <span
          className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
            isActive
              ? 'w-16 bg-slate-200'
              : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
          } group-focus-visible:w-16 group-focus-visible:bg-slate-200`}
        ></span>
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest ${
            isActive ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'
          } group-focus-visible:text-slate-200`}
        >
          {children}
        </span>
      </a>
    );
  },
);

NavLink.displayName = 'NavLink';

export default NavLink;
