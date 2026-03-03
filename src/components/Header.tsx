import { Anchor } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-maersk-navy via-maersk-navy-light to-maersk-navy">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-maersk-teal/8 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-maersk-sky/6 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-maersk-teal/3 blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="animate-fade-in">
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Prototype
            <span className="bg-gradient-to-r from-maersk-teal to-maersk-sky bg-clip-text text-transparent">
              {' '}Playground
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-lg text-slate-300/90 leading-relaxed">
            A collection of prototypes, proof-of-concepts, and tools built to explore
            new ideas in freight operations, AI-powered workflows, and data analytics.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            <Stat value="9" label="Prototypes" />
            <Stat value="8" label="Deployed" />
            <Stat value="4" label="AI Powered" />
          </div>
        </div>

        {/* Maersk star accent */}
        <div className="absolute right-8 bottom-8 hidden lg:block">
          <Anchor className="h-32 w-32 text-white/[0.04]" strokeWidth={1} />
        </div>
      </div>
    </header>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-white">{value}</span>
      <span className="text-sm font-medium text-slate-400">{label}</span>
    </div>
  );
}
