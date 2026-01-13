/**
 * ABOUTME: Root layout component for the Ralph TUI website.
 * Configures fonts, metadata, and theme provider for the entire application.
 */

import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ralph TUI - AI Agent Loop Orchestrator',
  description:
    'An AI agent loop orchestrator that manages autonomous coding agents through intelligent task routing and continuous delivery.',
  keywords: [
    'AI',
    'agent',
    'orchestrator',
    'TUI',
    'terminal',
    'coding',
    'automation',
  ],
  authors: [{ name: 'Ralph TUI Team' }],
  openGraph: {
    title: 'Ralph TUI - AI Agent Loop Orchestrator',
    description:
      'An AI agent loop orchestrator that manages autonomous coding agents.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
