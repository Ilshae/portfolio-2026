import { Github, Linkedin, Globe, Instagram } from 'lucide-react';

type SocialIconsProps = {
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
    instagram?: string;
  };
};

const linkCls =
  'inline-flex items-center justify-center size-8 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition';

export function SocialIcons({ links }: SocialIconsProps) {
  if (!links) return null;

  return (
    <div className="mt-14 flex items-center gap-3">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className={linkCls}
          aria-label="GitHub"
        >
          <Github className="size-4" />
        </a>
      )}
      {links.linkedin && (
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className={linkCls}
          aria-label="LinkedIn"
        >
          <Linkedin className="size-4" />
        </a>
      )}
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noreferrer"
          className={linkCls}
          aria-label="Website"
        >
          <Globe className="size-4" />
        </a>
      )}
      {links.instagram && (
        <a
          href={links.instagram}
          target="_blank"
          rel="noreferrer"
          className={linkCls}
          aria-label="Instagram"
        >
          <Instagram className="size-4" />
        </a>
      )}
    </div>
  );
}
