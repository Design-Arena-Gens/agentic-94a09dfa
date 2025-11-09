import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Einstein?Rosen Bridge Concept ? Black ? White Hole',
  description: 'A speculative visualization and write-up of a black hole to white hole connection via an Einstein?Rosen bridge (wormhole).',
  metadataBase: new URL('https://agentic-94a09dfa.vercel.app'),
  themeColor: '#070b14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header container">
          <div className="brand">
            <span className="dot" aria-hidden />
            <span className="title">Einstein?Rosen Bridge Concept</span>
          </div>
          <nav className="nav" aria-label="Primary">
            <a href="#overview">Overview</a>
            <a href="#mechanism">Mechanism</a>
            <a href="#math">Notation</a>
            <a href="#viz">Visualization</a>
            <a href="#notes">Notes</a>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="footer container">
          <span>Built with Next.js ? Conceptual, non-peer-reviewed content</span>
        </footer>
      </body>
    </html>
  );
}
