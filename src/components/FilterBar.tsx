import type { Category } from '../data/prototypes';
import { categories } from '../data/prototypes';

interface FilterBarProps {
  active: Category;
  onChange: (category: Category) => void;
  counts: Record<Category, number>;
}

export default function FilterBar({ active, onChange, counts }: FilterBarProps) {
  return (
    <div className="animate-slide-up flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium
              transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? 'bg-maersk-navy text-white shadow-lg shadow-maersk-navy/20'
                  : 'bg-white text-maersk-slate hover:bg-maersk-ice hover:text-maersk-navy border border-slate-200'
              }
            `}
          >
            {cat}
            <span
              className={`
                ml-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold
                ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}
              `}
            >
              {counts[cat]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
