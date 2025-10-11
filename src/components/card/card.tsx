import * as React from 'react';
import Image from 'next/image';
import ExternalLinkIcon from '@/components/external-link-icon/external-link-icon';

export type CardProps = {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  description?: string;
  bullets?: string[];
  technologies: string[];
  image?: {
    src: string;
    alt: string;
  };
  period?: string;
};

export const Card: React.FC<CardProps> = ({
  id,
  title,
  subtitle,
  url,
  description,
  bullets,
  technologies,
  image,
  period,
}) => {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {/* Hover background effect */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      {/* Left column - Period or Image */}
      <div className="z-10 sm:order-1 sm:col-span-2">
        {period && (
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{period}</p>
        )}
        {image && (
          <Image
            alt={image.alt}
            src={image.src}
            width={200}
            height={112}
            className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1"
          />
        )}
      </div>

      {/* Content */}
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <div className="flex items-center">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title}${subtitle ? ` at ${subtitle}` : ''} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span className="inline-flex items-baseline">
                {title}
                {subtitle && ` \u00b7 ${subtitle}`}
                <ExternalLinkIcon />
              </span>
            </a>
          </div>
        </h3>

        {/* Description */}
        {description && <p className="mt-2 text-sm leading-normal">{description}</p>}

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <ul className="mt-2 text-sm leading-normal text-slate-300 list-disc list-inside space-y-1">
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}

        {/* Technology tags */}
        {technologies.length > 0 && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
