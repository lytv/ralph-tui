/**
 * ABOUTME: Home page component for the Ralph TUI website.
 * Displays placeholder content that will be replaced with the landing page.
 */

import { Terminal, Zap, GitBranch, Bot } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-3">
            <Terminal className="h-12 w-12 text-accent-primary" />
            <h1 className="text-5xl font-bold tracking-tight">
              Ralph <span className="text-accent-primary">TUI</span>
            </h1>
          </div>

          <p className="mb-8 max-w-2xl text-xl text-fg-secondary">
            An AI agent loop orchestrator that manages autonomous coding agents
            through intelligent task routing and continuous delivery.
          </p>

          <div className="flex gap-4">
            <a
              href="#get-started"
              className="rounded-lg bg-accent-primary px-6 py-3 font-semibold text-bg-primary transition-colors hover:bg-accent-primary/90"
            >
              Get Started
            </a>
            <a
              href="https://github.com/yourorg/ralph-tui"
              className="rounded-lg border border-border px-6 py-3 font-semibold transition-colors hover:bg-bg-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Bot className="h-8 w-8" />}
              title="AI Agent Orchestration"
              description="Manage multiple AI agents working in parallel on your codebase with intelligent task distribution."
            />
            <FeatureCard
              icon={<GitBranch className="h-8 w-8" />}
              title="Git Integration"
              description="Seamless integration with Git for tracking changes, creating branches, and managing pull requests."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Real-time Progress"
              description="Watch your tasks progress in real-time with a beautiful terminal user interface."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-fg-muted">
          <p>Ralph TUI - AI Agent Loop Orchestrator</p>
        </div>
      </footer>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-tertiary p-6 transition-colors hover:border-accent-primary">
      <div className="mb-4 text-accent-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-fg-secondary">{description}</p>
    </div>
  );
}
