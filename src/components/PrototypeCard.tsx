import {
  ExternalLink,
  CircleCheck,
  CircleDashed,
  Wrench,
  Sparkles,
  Code2,
  Terminal,
  Github,
} from 'lucide-react';
import type { Prototype } from '../data/prototypes';

interface PrototypeCardProps {
  prototype: Prototype;
  index: number;
}

const builtWithConfig: Record<string, { icon: typeof Code2; label: string; color: string }> = {
  Bolt: { icon: Sparkles, label: 'Built with Bolt', color: 'text-amber-500' },
  Lovable: { icon: Sparkles, label: 'Built with Lovable', color: 'text-pink-500' },
  Custom: { icon: Code2, label: 'Custom Built', color: 'text-maersk-teal' },
  Python: { icon: Terminal, label: 'Python', color: 'text-green-500' },
};

const categoryColors: Record<string, string> = {
  Dashboard: 'bg-blue-50 text-blue-700 border-blue-200',
  'Web App': 'bg-violet-50 text-violet-700 border-violet-200',
  'AI / ML': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Analytics: 'bg-orange-50 text-orange-700 border-orange-200',
};

export default function PrototypeCard({ prototype, index }: PrototypeCardProps) {
  const isDeployed = prototype.status === 'deployed';
  const builtWith = prototype.builtWith ? builtWithConfig[prototype.builtWith] : null;
  const BuiltWithIcon = builtWith?.icon ?? Wrench;

  return (
    <div
      className="animate-scale-in group relative flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-maersk-navy/5 hover:-translate-y-1 hover:border-maersk-teal/30"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-maersk-teal to-maersk-sky opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6">
        {/* Top row: category + status */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
              categoryColors[prototype.category] ?? 'bg-slate-50 text-slate-600 border-slate-200'
            }`}
          >
            {prototype.category}
          </span>

          {isDeployed ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
              <CircleCheck className="h-3.5 w-3.5" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
              <CircleDashed className="h-3.5 w-3.5" />
              Local Only
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-maersk-navy leading-snug">{prototype.title}</h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{prototype.description}</p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {prototype.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-maersk-mist px-2 py-0.5 text-xs font-medium text-maersk-slate"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: built-with + action */}
        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4">
          {builtWith && (
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${builtWith.color}`}>
              <BuiltWithIcon className="h-3.5 w-3.5" />
              {builtWith.label}
            </span>
          )}

          <div className="flex items-center gap-2">
            {prototype.githubUrl && (
              <a
                href={prototype.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-400"
              >
                <Github className="h-3 w-3" />
                Source
              </a>
            )}

            {isDeployed && prototype.url ? (
              <a
                href={prototype.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-maersk-navy px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-maersk-teal"
              >
                View Live
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3.5 py-2 text-xs font-medium text-slate-400 cursor-not-allowed">
                Not Deployed
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
