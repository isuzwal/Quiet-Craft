import type { Metadata } from 'next';

import '@/style/globals.css';

import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils';
import { fontVariables } from '@/lib/fontVaiables';
import { Screen } from '@/components/ui/section-view';
import NavBara from '@/components/ui/navbara.view';

export const metadata: Metadata = {
  title: 'Quiet Craft - Collection  of Componments',
  description:
    'A modern UI collection web app  built with Next.js, featuring customizable themes, beautiful typography, and a growing UI component library.',
  authors: [{ name: 'Uzwal', url: 'https://github.com/isuzwal' }],
  keywords: [
    'Next.js',
    'UI',
    'React',
    'Theme',
    'Geist',
    'Practice',
    'UI Library',
    'Component Library',
    'Design System',
    'TailwindCSS',
    'Accessibility',
    'Dark Mode',
  ],
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased  bg-background', fontVariables)}>
        <ThemeProvider defaultTheme="light" enableSystem attribute="class">
          <NavBara />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
