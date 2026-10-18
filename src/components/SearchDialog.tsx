import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, Code2, Database, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { allTopics } from '../data';
import { coreJavaTopics } from '../data/codingPrep/coreJavaPrep';
import { dsaProblems } from '../data/codingPrep/dsaPrep';
import { sqlPrepCategories } from '../data/codingPrep/sqlPrep';

export interface SearchDialogItem {
  id: string;
  targetPage: 'concepts' | 'coding';
  pageLabel: 'Concepts' | 'Coding Prep';
  type: 'topic' | 'concept' | 'question' | 'coding-java' | 'coding-dsa' | 'sql-query';
  title: string;
  description: string;
  breadcrumb: string;
  conceptId?: string;
}

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

  // Index search items ONLY across the two dedicated pages (Concepts & Coding)
  const results = useMemo<SearchDialogItem[]>(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery || cleanQuery.length < 2) return [];

    const matches: SearchDialogItem[] = [];

    // ========================================================
    // 1. PAGE 1: CONCEPTS (Topics, Subtopics, Concepts, Q&As)
    // ========================================================
    for (const topic of allTopics) {
      // Check topic
      if (
        topic.title.toLowerCase().includes(cleanQuery) ||
        topic.description.toLowerCase().includes(cleanQuery)
      ) {
        matches.push({
          id: topic.id,
          targetPage: 'concepts',
          pageLabel: 'Concepts',
          type: 'topic',
          title: topic.title,
          description: topic.description,
          breadcrumb: `Concepts > ${topic.title}`,
        });
      }

      // Check subtopics & concepts
      for (const subtopic of topic.subtopics) {
        for (const concept of subtopic.concepts) {
          const matchedConcept =
            concept.title.toLowerCase().includes(cleanQuery) ||
            concept.description.toLowerCase().includes(cleanQuery) ||
            concept.definition.toLowerCase().includes(cleanQuery);

          if (matchedConcept) {
            matches.push({
              id: concept.id,
              targetPage: 'concepts',
              pageLabel: 'Concepts',
              type: 'concept',
              conceptId: concept.id,
              title: concept.title,
              description: concept.description || concept.definition.slice(0, 110),
              breadcrumb: `Concepts > ${topic.title} > ${concept.title}`,
            });
          }

          // Check interview theory questions
          for (const q of concept.questions) {
            if (
              q.question.toLowerCase().includes(cleanQuery) ||
              q.answer.toLowerCase().includes(cleanQuery)
            ) {
              matches.push({
                id: q.id,
                targetPage: 'concepts',
                pageLabel: 'Concepts',
                type: 'question',
                conceptId: concept.id,
                title: q.question,
                description: q.answer.slice(0, 110) + '...',
                breadcrumb: `Concepts > ${concept.title} Q&A`,
              });
            }
          }
        }
      }
    }

    // ========================================================
    // 2. PAGE 2: CODING PREP (Core Java 65 Qs, DSA 30 Qs, SQL 40 Qs)
    // ========================================================
    // A. Core Java (65 questions)
    for (const topic of coreJavaTopics) {
      for (const q of topic.questions) {
        if (
          q.title.toLowerCase().includes(cleanQuery) ||
          q.question.toLowerCase().includes(cleanQuery) ||
          (q.code && q.code.toLowerCase().includes(cleanQuery))
        ) {
          matches.push({
            id: q.id,
            targetPage: 'coding',
            pageLabel: 'Coding Prep',
            type: 'coding-java',
            title: q.title,
            description: q.question.slice(0, 110) + '...',
            breadcrumb: `Core Java > ${topic.title}`,
          });
        }
      }
    }

    // B. DSA Problems (30 problems)
    for (const p of dsaProblems) {
      if (
        p.title.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.problemStatement.toLowerCase().includes(cleanQuery) ||
        (p.code && p.code.toLowerCase().includes(cleanQuery))
      ) {
        matches.push({
          id: p.id,
          targetPage: 'coding',
          pageLabel: 'Coding Prep',
          type: 'coding-dsa',
          title: p.title,
          description: p.problemStatement.slice(0, 110) + '...',
          breadcrumb: `DSA Coding > ${p.category}`,
        });
      }
    }

    // C. SQL Queries (40 queries across 4 levels)
    for (const cat of sqlPrepCategories) {
      for (const q of cat.questions) {
        if (
          q.title.toLowerCase().includes(cleanQuery) ||
          q.question.toLowerCase().includes(cleanQuery) ||
          (q.query && q.query.toLowerCase().includes(cleanQuery))
        ) {
          matches.push({
            id: q.id,
            targetPage: 'coding',
            pageLabel: 'Coding Prep',
            type: 'sql-query',
            title: q.title,
            description: q.question.slice(0, 110) + '...',
            breadcrumb: `SQL Queries > ${cat.name}`,
          });
        }
      }
    }

    return matches.slice(0, 35); // Top 35 matches
  }, [query]);

  // STRICT RULE: Only navigate to either "/" (Concepts) or "/coding" (Coding Prep)!
  // Never navigate to any other sub-page.
  const handleSelect = (item: SearchDialogItem) => {
    handleClose();
    if (item.targetPage === 'coding') {
      navigate(`/coding?search=${encodeURIComponent(item.title)}&id=${encodeURIComponent(item.id)}`);
    } else {
      navigate(`/?search=${encodeURIComponent(item.title)}${item.conceptId ? `&concept=${encodeURIComponent(item.conceptId)}` : ''}`);
    }
  };

  const getIcon = (type: SearchDialogItem['type']) => {
    switch (type) {
      case 'topic':
      case 'concept':
        return <BookOpen className="w-4 h-4 text-primary" />;
      case 'question':
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
      case 'coding-java':
      case 'coding-dsa':
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case 'sql-query':
        return <Database className="w-4 h-4 text-emerald-600" />;
    }
  };

  const getPageBadge = (page: SearchDialogItem['targetPage']) => {
    if (page === 'concepts') {
      return 'bg-blue-50 text-primary border-blue-200';
    }
    return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/40 backdrop-blur-xs"
          onClick={handleClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[75vh]"
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
            placeholder="Search across Concepts or Coding Prep..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-slate-800 placeholder-slate-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-slate-100">
          {query.trim().length < 2 ? (
            <div className="p-8 text-center text-slate-400 text-xs sm:text-sm">
              <Sparkles className="w-6 h-6 text-slate-300 mx-auto mb-2" />
              <p className="font-semibold text-slate-600 mb-0.5">Instant Search Across 2 Main Pages</p>
              <p>Type at least 2 characters to search Concepts (Theory & HR) or Coding Prep (Java, DSA & SQL).</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs sm:text-sm">
              No matching results found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={`${item.targetPage}-${item.id}-${idx}`}
                onClick={() => handleSelect(item)}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/60 cursor-pointer transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white transition-colors shrink-0 mt-0.5 border border-slate-200/50">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {/* Page Destination Badge: Concepts or Coding Prep */}
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${getPageBadge(item.targetPage)}`}>
                      {item.pageLabel}
                    </span>
                    <span className="text-xs text-slate-400 truncate">
                      {item.breadcrumb}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-primary transition-all shrink-0 mt-3">
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
          <span>{results.length} result{results.length === 1 ? '' : 's'} (opens directly on {results.length > 0 ? (results[0].targetPage === 'coding' ? 'Coding page' : 'Concepts page') : 'page'})</span>
          <span>Press <kbd className="font-semibold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">Esc</kbd> to exit</span>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
