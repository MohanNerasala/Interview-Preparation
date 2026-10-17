import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { allTopics, getTotalConcepts, getTotalQuestions } from '../data';
import TopicIcon from '../components/TopicIcon';
import Breadcrumbs from '../components/Breadcrumbs';

export default function TopicsListPage() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allTopics;
    return allTopics.filter(
      t =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.subtopics.some(st => st.title.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="space-y-6 animate-fade-in">
      <Breadcrumbs items={[{ label: 'All Topics' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Full Stack Syllabus</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse through all {allTopics.length} core interview preparation modules
          </p>
        </div>

        {/* Search within topics */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Filter modules..."
            className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(topic => {
          const conceptsCount = getTotalConcepts(topic);
          const questionsCount = getTotalQuestions(topic);

          return (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="glass-panel p-5 hover:border-primary/40 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <TopicIcon name={topic.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-primary">
                        MODULE {topic.number}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                  {topic.description}
                </p>

                {/* Subtopic badges preview */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {topic.subtopics.slice(0, 4).map(st => (
                    <span
                      key={st.id}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                    >
                      {st.title}
                    </span>
                  ))}
                  {topic.subtopics.length > 4 && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-400">
                      +{topic.subtopics.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  {conceptsCount} concepts • {questionsCount} Q&As
                </span>
                <span className="font-semibold text-primary inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
