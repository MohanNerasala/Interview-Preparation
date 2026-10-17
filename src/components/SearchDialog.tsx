import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import { allTopics } from '../data';
import { allCodingQuestions } from '../data/codingQuestions';
import type { SearchResult } from '../types';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  // Global key listener for Ctrl+K / Cmd+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) handleClose();
      }
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Index search items
  const results = useMemo<SearchResult[]>(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery || cleanQuery.length < 2) return [];

    const matches: SearchResult[] = [];

    for (const topic of allTopics) {
      // Check topic
      if (
        topic.title.toLowerCase().includes(cleanQuery) ||
        topic.description.toLowerCase().includes(cleanQuery)
      ) {
        matches.push({
          type: 'topic',
          topicId: topic.id,
          title: topic.title,
          description: topic.description,
          breadcrumb: `Topic #${topic.number}`,
        });
      }

      // Check subtopics & concepts
      for (const subtopic of topic.subtopics) {
        if (subtopic.title.toLowerCase().includes(cleanQuery)) {
          matches.push({
            type: 'subtopic',
            topicId: topic.id,
            subtopicId: subtopic.id,
            title: subtopic.title,
            description: subtopic.description,
            breadcrumb: `${topic.title} > ${subtopic.title}`,
          });
        }

        for (const concept of subtopic.concepts) {
          const matchedConcept =
            concept.title.toLowerCase().includes(cleanQuery) ||
            concept.description.toLowerCase().includes(cleanQuery) ||
            concept.definition.toLowerCase().includes(cleanQuery);

          if (matchedConcept) {
            matches.push({
              type: 'concept',
              topicId: topic.id,
              subtopicId: subtopic.id,
              conceptId: concept.id,
              title: concept.title,
              description: concept.description || concept.definition.slice(0, 100),
              breadcrumb: `${topic.title} > ${subtopic.title}`,
            });
          }

          // Check questions
          for (const q of concept.questions) {
            if (
              q.question.toLowerCase().includes(cleanQuery) ||
              q.answer.toLowerCase().includes(cleanQuery)
            ) {
              matches.push({
                type: 'question',
                topicId: topic.id,
                subtopicId: subtopic.id,
                conceptId: concept.id,
                questionId: q.id,
                title: q.question,
                description: q.answer.slice(0, 110) + '...',
                breadcrumb: `${topic.title} > ${concept.title}`,
              });
            }
          }
        }
      }
    }

    // Check 62 Java coding interview questions
    for (const cq of allCodingQuestions) {
      if (
        cq.title.toLowerCase().includes(cleanQuery) ||
        cq.problem.toLowerCase().includes(cleanQuery) ||
        cq.category.toLowerCase().includes(cleanQuery) ||
        `q${cq.number}`.includes(cleanQuery)
      ) {
        matches.push({
          type: 'question',
          topicId: 'coding',
          title: `Q${cq.number < 10 ? '0' + cq.number : cq.number}: ${cq.title}`,
          description: cq.problem.slice(0, 110) + '...',
          breadcrumb: `DSA Coding > ${cq.category}`,
        });
      }
    }

    return matches.slice(0, 30); // Limit top 30
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResult) => {
    handleClose();
    if (item.topicId === 'coding') {
      navigate('/coding');
    } else if (item.type === 'topic') {
      navigate(`/topic/${item.topicId}`);
    } else if (item.conceptId) {
      navigate(`/topic/${item.topicId}/concept/${item.conceptId}${item.questionId ? `?q=${item.questionId}` : ''}`);
    } else {
      navigate(`/topic/${item.topicId}`);
    }
  };

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'topic':
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case 'subtopic':
        return <Layers className="w-4 h-4 text-indigo-500" />;
      case 'concept':
        return <BookOpen className="w-4 h-4 text-emerald-500" />;
      case 'question':
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
    }
  };

  const getBadgeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'topic':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'subtopic':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'concept':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'question':
        return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[75vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search topics, concepts, interview questions, coding..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-slate-800 placeholder-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="text-xs px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-slate-100">
          {query.trim().length < 2 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              Type at least 2 characters to search across all 15 topics, concepts, and questions.
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">
              No matching results found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={`${item.type}-${item.topicId}-${item.conceptId || ''}-${item.questionId || ''}-${idx}`}
                onClick={() => handleSelect(item)}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/60 cursor-pointer transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white transition-colors shrink-0 mt-0.5">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded border ${getBadgeColor(item.type)}`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-400 truncate">
                      {item.breadcrumb}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-3" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
          <span>{results.length} result{results.length === 1 ? '' : 's'}</span>
          <span>Press <kbd className="font-semibold text-slate-500">Esc</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
