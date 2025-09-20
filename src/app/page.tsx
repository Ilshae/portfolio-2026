import About from '@/components/about/about';
import Experience from '@/components/experience/experience';
import { experienceItems } from '@/components/experience/experience-items';

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl space-y-20">
      <About />

      <div id="experience" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-white">Experience</h2>
        {experienceItems.map((item) => (
          <Experience {...item} key={item.id} />
        ))}
      </div>

      <div id="projects" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <p className="mt-4 text-slate-300">Coming soon…</p>
      </div>
    </section>
  );
}
