import About from '@/components/about/about';
import Experience from '@/components/experience/experience';
import { experienceItems } from '@/components/experience/experience-items';
import { Project } from '@/components/projects/project';
import { projectItems } from '@/components/projects/project-items';

export default function Page() {
  return (
    <main className="space-y-20 min-h-screen">
      <section id="about" aria-label="About Ingrid Pruszyńska">
        <About />
      </section>

      <section id="experience" aria-label="Experience">
        {experienceItems.length > 0 ? (
          <ul className="group/list mt-8 space-y-8">
            {experienceItems.map((item) => (
              <li key={item.id}>
                <Experience {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <div role="status" className="mt-8 text-slate-300">
            No experience items to show yet.
          </div>
        )}
      </section>

      <section id="projects" aria-label="Projects">
        {projectItems.length > 0 ? (
          <ul className="group/list space-y-8">
            {projectItems.map((item) => (
              <li key={item.id} className="mb-12">
                <Project {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <div role="status" className="mt-8 text-slate-300">
            No projects to show yet.
          </div>
        )}
      </section>
    </main>
  );
}
