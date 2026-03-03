import { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import PrototypeCard from './components/PrototypeCard';
import Footer from './components/Footer';
import { prototypes, categories } from './data/prototypes';
import type { Category } from './data/prototypes';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const counts = useMemo(() => {
    const result: Record<Category, number> = {} as Record<Category, number>;
    for (const cat of categories) {
      result[cat] = cat === 'All' ? prototypes.length : prototypes.filter((p) => p.category === cat).length;
    }
    return result;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? prototypes
        : prototypes.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-12">
        {/* Filter bar */}
        <div className="mb-10">
          <FilterBar active={activeCategory} onChange={setActiveCategory} counts={counts} />
        </div>

        {/* Prototype grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((proto, i) => (
            <PrototypeCard key={proto.id} prototype={proto} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-slate-400">No prototypes in this category.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
