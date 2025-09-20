import { ExperienceItem } from '@/components/experience/experience-items';
import ExternalLinkIcon from '@/components/experience/external-link-icon';

export default function Experience({
  id,
  role,
  company,
  period,
  bullets,
  tech,
  link,
}: ExperienceItem) {
  return (
    <article id={id} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 py-6">
      <div className="text-sm font-medium tracking-wide text-slate-400 uppercase">{period}</div>

      <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5 hover:border-slate-700 transition-colors">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-white leading-tight">
            <span className="whitespace-normal">{role}</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline mx-2 text-slate-500">·</span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded outline-none text-slate-200 hover:text-sky-300 focus-visible:ring-2 focus-visible:ring-sky-400/60"
              aria-label={`${company} (opens in a new tab)`}
              title={company}
            >
              <span className="underline-offset-4 group-hover:underline break-words">
                {company}
              </span>
              <ExternalLinkIcon />
            </a>
          </h3>
        </header>

        <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-1.5">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {tech ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-emerald-900/50 bg-emerald-800/20 px-3 py-1 text-xs font-medium text-emerald-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
