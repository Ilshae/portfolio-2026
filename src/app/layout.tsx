import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ingrid Pruszyńska',
  description: 'Frontend Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="grid min-h-screen grid-cols-[320px_1fr] bg-background text-foreground">
          <aside className="border-r px-8 py-10">
            <div className="sticky top-0 flex h-[calc(100vh-5rem)] flex-col justify-between">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">Ingrid Pruszyńska</h1>
                <p className="mt-1 text-sm text-muted-foreground">Frontend Engineer</p>

                <nav className="mt-8 space-y-4 text-sm">
                  <a
                    href="#about"
                    className="block font-medium text-muted-foreground hover:text-foreground"
                  >
                    ABOUT
                  </a>
                  <div className="h-px w-24 bg-border" />
                  <a
                    href="#experience"
                    className="block font-medium text-muted-foreground hover:text-foreground"
                  >
                    EXPERIENCE
                  </a>
                  <div className="h-px w-24 bg-border" />
                  <a
                    href="#projects"
                    className="block font-medium text-muted-foreground hover:text-foreground"
                  >
                    PROJECTS
                  </a>
                </nav>
              </div>

              <div className="flex gap-3 text-muted-foreground">
                {/* put social icons/links here */}
              </div>
            </div>
          </aside>

          <main className="px-8 py-10 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
