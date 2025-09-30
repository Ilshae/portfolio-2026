import React from 'react';

const paragraphs = [
  `Front-end developer with experience implementing and testing UI applications for network management. Skilled in creating reusable libraries such as advanced grids and search components used across multiple repositories.`,
  `Strong background in team leadership, including mentoring, code reviews, and coordinating with testers, designers, external developer teams, and product owners to deliver high-quality features on time. Experienced in issue resolution and maintaining clear technical documentation.`,
  `In my spare time you’ll usually find me climbing, reading, running obstacle course races, or hanging out with friends over tabletop games.`,
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
