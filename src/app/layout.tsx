import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar/sidebar';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ingrid Pruszyńska',
  description: 'Frontend Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b1420] text-slate-200`}
      >
        <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_-10%_-20%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(900px_700px_at_70%_-10%,rgba(59,130,246,0.12),transparent_50%)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid min-h-screen grid-cols-[320px_1fr] gap-8">
              <Sidebar
                name="Ingrid Pruszyńska"
                title="Frontend Engineer"
                sections={[
                  { label: 'About', href: '#about' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Projects', href: '#projects' },
                ]}
                socials={{
                  github: 'https://github.com/yourname',
                  linkedin: 'https://www.linkedin.com/in/yourname/',
                  website: 'https://your.site',
                  instagram: 'https://instagram.com/yourname',
                }}
              />

              <main className="py-16">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
