import GithubIcon from './github-icon';
import LinkedinIcon from './linkedin-icon';

type SocialKey = 'github' | 'linkedin';

const SOCIALS: {
  key: SocialKey;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}[] = [
  {
    key: 'github',
    label: 'GitHub',
    Icon: GithubIcon,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    Icon: LinkedinIcon,
  },
];

type SocialIconsProps = {
  links?: Partial<Record<SocialKey, string>>;
  className?: string;
};

const linkCls =
  'inline-flex items-center justify-center size-12 rounded-md text-slate-400 hover:text-white hover:bg-[#0b1420]/40 transition';

export function SocialIcons({ links, className }: SocialIconsProps) {
  if (!links) return null;

  return (
    <div
      className={`mt-14 flex items-center gap-3${className ? ` ${className}` : ''}`}
      aria-label="Social links"
    >
      {SOCIALS.filter(({ key }) => links[key]).map(({ key, label, Icon }) => (
        <a
          key={key}
          href={links[key] as string}
          target="_blank"
          rel="noreferrer"
          className={linkCls}
          aria-label={label}
        >
          <Icon className="size-6" />
        </a>
      ))}
    </div>
  );
}
