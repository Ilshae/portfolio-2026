import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar/sidebar';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ingrid Pruszyńska – Frontend Engineer',
  description:
    'Portfolio of Ingrid Pruszyńska, a frontend engineer passionate about building beautiful, performant web experiences. Specializing in React, Next.js, and creative UI/UX solutions. Explore projects, experience, and more.',
  keywords: [
    'Ingrid Pruszyńska',
    'Frontend Engineer',
    'React',
    'Next.js',
    'UI/UX',
    'Web Development',
    'Portfolio',
    'Creative Technologist',
  ],
  authors: [{ name: 'Ingrid Pruszyńska', url: 'https://www.linkedin.com/in/pruszynska/' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b1420] text-slate-200`}
    >
      <body>
        <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_-10%_-20%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(900px_700px_at_70%_-10%,rgba(59,130,246,0.12),transparent_50%)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid min-h-screen grid-cols-[320px_1fr] gap-8">
              <nav role="navigation" aria-label="Sidebar">
                <Sidebar
                  name="Ingrid Pruszyńska"
                  title="Frontend Engineer"
                  sections={[
                    { label: 'About', href: '#about' },
                    { label: 'Experience', href: '#experience' },
                    { label: 'Projects', href: '#projects' },
                  ]}
                  socials={{
                    github: 'https://github.com/ilshae',
                    linkedin: 'https://www.linkedin.com/in/pruszynska/',
                  }}
                />
              </nav>
              <main className="py-16">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
