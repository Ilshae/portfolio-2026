import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl space-y-20">
      {/* ABOUT */}
      <div id="about" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-white">About</h2>
        <div className="mt-4 space-y-4 text-slate-300 leading-relaxed">
          <p>
            I build accessible, performant interfaces with React & Next.js. My sweet spot is where
            design meets engineering—shipping DX-friendly, pixel-perfect UI.
          </p>
          <p>
            Currently focused on component systems, accessibility, and quality. I like clean API
            surfaces, strong typing, and thoughtful animations.
          </p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div id="experience" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-white">Experience</h2>

        {/* role 1 */}
        <div className="mt-6 grid grid-cols-[160px_1fr] gap-6">
          <div className="text-xs tracking-widest text-slate-400">2024 — PRESENT</div>
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">
                Senior Frontend Engineer · <span className="text-slate-300">Acme Inc</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-slate-300">
              Build and maintain core UI components across the product. Lead accessibility,
              performance budgets, and design-system adoption.
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white/10 text-slate-200 border-white/10">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-slate-200 border-white/10">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-slate-200 border-white/10">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-slate-200 border-white/10">
                  Storybook
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* role 2 */}
        <div className="mt-6 grid grid-cols-[160px_1fr] gap-6">
          <div className="text-xs tracking-widest text-slate-400">2019 — 2024</div>
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">
                Lead Engineer · <span className="text-slate-300">Upstatement</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-slate-300">
              Shipped high-quality sites, systems, and apps. Mentored engineers and improved
              internal tooling and processes.
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white/10 text-slate-200 border-white/10">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-slate-200 border-white/10">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-slate-200 border-white/10">
                  HTML & SCSS
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <p className="mt-4 text-slate-300">Coming soon…</p>
      </div>
    </section>
  );
}
