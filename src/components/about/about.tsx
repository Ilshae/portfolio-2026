import React from 'react';

const paragraphs = [
  'Front-End Developer with hands-on experience building, optimizing, and testing UI applications for network management systems. Proficient in developing scalable, reusable component libraries — including advanced data grids, search interfaces, and shared UI modules leveraged across multiple projects and repositories.',
  'A proven collaborator and team lead, skilled in mentoring engineers, conducting code reviews, and coordinating cross-functional efforts with designers, QA, external development teams, and product owners to deliver high-quality, user-focused features on schedule. Strong track record in debugging, performance tuning, and maintaining clear, maintainable documentation.',
  'Outside of work, I’m passionate about climbing, reading, obstacle course racing, and tabletop games with friends.',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24" aria-label="About Ingrid Pruszyńska">
      <div className="mt-4 space-y-4 text-slate-300 leading-relaxed text-base">
        {paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </section>
  );
}
