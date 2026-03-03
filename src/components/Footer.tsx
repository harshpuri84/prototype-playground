import { Anchor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Anchor className="h-4 w-4 text-maersk-teal" />
            <span>Maersk Innovation &mdash; Prototype Playground</span>
          </div>
          <p className="text-xs text-slate-400">
            Internal use only. Built to inspire and accelerate logistics innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
