import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Search, ChevronDown, 
  ArrowUpDown, Terminal, Sparkles, Code2, Check
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import TerminalBox from '../components/TerminalBox';
import { 
  coreJavaTopics,
  dsaProblems,
  sqlPrepCategories
} from '../data/codingPrep';

export interface UnifiedQuestion {
  id: string;
  track: 'Core Java' | 'DSA & Coding' | 'SQL Queries';
  topic: string;
  number: number;
  globalNumber: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isCoding: boolean;
  question?: string;
  problemStatement?: string;
  answer?: string;
  input?: string;
  output?: string;
  code?: string;
  sampleTable?: string;
  query?: string;
  expectedOutput?: string;
}

type SortOption = 'default' | 'easy-to-hard' | 'hard-to-easy';

const difficultyBadgeStyle = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Medium':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'Hard':
      return 'bg-purple-50 text-purple-700 border-purple-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

interface QuestionCardProps {
  prob: UnifiedQuestion;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

// Optimized & Memoized Question Card for 60fps zero-lag rendering
const QuestionCard = React.memo(function QuestionCard({
  prob,
  isExpanded,
  onToggle,
}: QuestionCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border transition-colors duration-150 overflow-hidden ${
        isExpanded
          ? 'border-primary/40 shadow-xs'
          : 'border-slate-200 hover:border-slate-300 hover:shadow-2xs'
      }`}
    >
      {/* Accordion Header (Clickable) */}
      <div
        onClick={() => onToggle(prob.id)}
        className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Blue Icon Chevron Box */}
          <div className="p-1.5 rounded-lg bg-blue-50 text-primary shrink-0 mt-0.5">
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ease-out ${
                isExpanded ? 'rotate-180 text-primary' : 'rotate-0'
              }`} 
            />
          </div>

          <div className="min-w-0 flex-1">
            {/* Meta Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                Q{prob.number < 10 ? `0${prob.number}` : prob.number}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-primary border border-blue-200">
                {prob.track}
              </span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                {prob.topic}
              </span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${difficultyBadgeStyle(prob.difficulty)}`}>
                {prob.difficulty}
              </span>
            </div>

            {/* Question Title */}
            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
              {prob.title}
            </h3>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            onToggle(prob.id);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer select-none shrink-0 ${
            isExpanded
              ? 'bg-slate-800 text-white hover:bg-slate-900'
              : 'bg-primary text-white hover:bg-primary-dark shadow-xs'
          }`}
        >
          {isExpanded ? 'Hide Solution' : 'View Solution'}
        </button>
      </div>

      {/* Accordion Expanded Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate-100"
          >
            <div className="p-5 sm:p-6 bg-slate-50/50 space-y-5">
              {/* 1. THEORY INTERVIEW-READY ANSWER */}
              {prob.answer && (
                <div className="p-4 bg-white rounded-xl border border-blue-200/80 space-y-1.5 shadow-2xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>Spoken Interview Answer</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                    {prob.answer}
                  </p>
                </div>
              )}

              {/* 2. PROBLEM STATEMENT (FOR CODING / DSA) */}
              {prob.problemStatement && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {prob.problemStatement}
                  </p>
                </div>
              )}

              {/* 3. SAMPLE TABLE (FOR SQL) */}
              {prob.sampleTable && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Sample Table Data
                  </h4>
                  <div className="p-3 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto shadow-2xs">
                    <pre>{prob.sampleTable}</pre>
                  </div>
                </div>
              )}

              {/* 4. SAMPLE INPUT & EXPECTED OUTPUT */}
              {(prob.input || prob.output || prob.expectedOutput) && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Input & Expected Output
                  </h4>
                  <div className="space-y-3">
                    {prob.input && (
                      <TerminalBox
                        title="Sample Input"
                        badge="Input"
                        content={prob.input}
                      />
                    )}

                    {(prob.output || prob.expectedOutput) && (
                      <TerminalBox
                        title="Expected Output"
                        badge="Output"
                        content={prob.output || prob.expectedOutput}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* 5. CODE / SQL QUERY (ALWAYS VISIBLE DIRECTLY) */}
              {prob.code && (
                <CodeBlock
                  code={prob.code}
                  language="java"
                  title="Java Solution"
                />
              )}

              {prob.query && (
                <CodeBlock
                  code={prob.query}
                  language="sql"
                  title="SQL Query"
                />
              )}

              {/* Close Panel Button */}
              <div className="text-right pt-1">
                <button
                  type="button"
                  onClick={() => onToggle(prob.id)}
                  className="text-primary hover:text-primary-dark font-medium text-xs cursor-pointer"
                >
                  Close Panel ↑
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default function CodingPracticePage() {
  const [searchParams] = useSearchParams();

  // Track Filter: All | Core Java | DSA & Coding | SQL Queries
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target as Node)) {
        setIsSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortLabels: Record<SortOption, string> = {
    'default': 'Default Order',
    'easy-to-hard': 'Easy to Hard',
    'hard-to-easy': 'Hard to Easy',
  };

  // Expanded Accordion Questions
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['cj-arr-1']));

  // Synchronize URL parameters from search bar (?search= / ?id=)
  useEffect(() => {
    const q = searchParams.get('search') || searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
    const qId = searchParams.get('id');
    if (qId) {
      setExpandedIds(prev => new Set([...prev, qId]));
    }
  }, [searchParams]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  // Build the complete Unified List of 135 Questions
  const allQuestions: UnifiedQuestion[] = useMemo(() => {
    const list: UnifiedQuestion[] = [];
    let gNum = 1;

    // 1. Core Java (65 questions)
    coreJavaTopics.forEach(topic => {
      topic.questions.forEach(q => {
        list.push({
          id: q.id,
          track: 'Core Java',
          topic: topic.title,
          number: q.number,
          globalNumber: gNum++,
          title: q.title,
          difficulty: q.difficulty,
          isCoding: q.isCoding,
          question: q.question,
          problemStatement: q.problemStatement,
          answer: q.answer,
          input: q.input,
          output: q.output,
          code: q.code,
        });
      });
    });

    // 2. DSA & Coding (30 problems)
    dsaProblems.forEach(p => {
      list.push({
        id: p.id,
        track: 'DSA & Coding',
        topic: p.category,
        number: p.number,
        globalNumber: gNum++,
        title: p.title,
        difficulty: p.difficulty,
        isCoding: true,
        problemStatement: p.problemStatement,
        input: p.input,
        output: p.output,
        code: p.code,
      });
    });

    // 3. SQL Queries (40 queries across 4 levels)
    sqlPrepCategories.forEach(cat => {
      cat.questions.forEach(q => {
        list.push({
          id: q.id,
          track: 'SQL Queries',
          topic: cat.name,
          number: q.number,
          globalNumber: gNum++,
          title: q.title,
          difficulty: q.difficulty || 'Medium',
          isCoding: q.isQuery,
          question: q.question,
          answer: q.answer,
          sampleTable: q.sampleTable,
          query: q.query,
          expectedOutput: q.expectedOutput,
        });
      });
    });

    return list;
  }, []);

  // Pre-calculated track counts for instant lookups
  const trackCounts = useMemo(() => ({
    'All': allQuestions.length,
    'Core Java': allQuestions.filter(q => q.track === 'Core Java').length,
    'DSA & Coding': allQuestions.filter(q => q.track === 'DSA & Coding').length,
    'SQL Queries': allQuestions.filter(q => q.track === 'SQL Queries').length,
  }), [allQuestions]);

  const tracks = useMemo(() => [
    { id: 'All', label: 'All Questions', count: trackCounts['All'] },
    { id: 'Core Java', label: 'Core Java', count: trackCounts['Core Java'] },
    { id: 'DSA & Coding', label: 'DSA & Coding', count: trackCounts['DSA & Coding'] },
    { id: 'SQL Queries', label: 'SQL Queries', count: trackCounts['SQL Queries'] },
  ], [trackCounts]);

  // Compute available Sub-Topics dynamically based on Selected Track
  // When 'All' is selected, include all topics so the filter row is always present without layout shift
  const availableTopics = useMemo(() => {
    if (selectedTrack === 'All') {
      const topics = Array.from(new Set(allQuestions.map(q => q.topic)));
      return ['All', ...topics];
    }
    const topics = Array.from(
      new Set(allQuestions.filter(q => q.track === selectedTrack).map(q => q.topic))
    );
    return ['All', ...topics];
  }, [selectedTrack, allQuestions]);

  // Filter & Sort Questions
  const filteredQuestions = useMemo(() => {
    let result = allQuestions.filter(q => {
      // Track filter
      if (selectedTrack !== 'All' && q.track !== selectedTrack) return false;

      // Topic filter
      if (selectedTopic !== 'All' && q.topic !== selectedTopic) return false;

      // Difficulty filter
      if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesTrack = q.track.toLowerCase().includes(query);
        const matchesNum = `q${q.number}`.includes(query) || q.number.toString() === query;
        const matchesStatement = q.problemStatement?.toLowerCase().includes(query) || false;
        const matchesAnswer = q.answer?.toLowerCase().includes(query) || false;
        if (!matchesTitle && !matchesTopic && !matchesTrack && !matchesNum && !matchesStatement && !matchesAnswer) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    const diffWeights: Record<string, number> = { Easy: 1, Medium: 2, Hard: 3 };
    if (sortBy === 'easy-to-hard') {
      result.sort((a, b) => (diffWeights[a.difficulty] || 2) - (diffWeights[b.difficulty] || 2));
    } else if (sortBy === 'hard-to-easy') {
      result.sort((a, b) => (diffWeights[b.difficulty] || 2) - (diffWeights[a.difficulty] || 2));
    } else {
      result.sort((a, b) => a.globalNumber - b.globalNumber);
    }

    return result;
  }, [allQuestions, selectedTrack, selectedTopic, selectedDifficulty, searchQuery, sortBy]);

  return (
    <div className="space-y-6 pb-24 animate-fade-in text-slate-800">
      {/* ======================================================== */}
      {/* 1. TOP HEADER & PROMINENT BACK BUTTON (WHITE & BLUE) */}
      {/* ======================================================== */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/90">
        <Link
          to="/"
          className="outline-none inline-flex"
        >
          <motion.div
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-primary text-xs sm:text-sm font-semibold shadow-2xs hover:border-blue-300 transition-all select-none cursor-pointer group"
            title="Return to Concepts Dashboard"
          >
            <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            <span>Back to Concepts</span>
          </motion.div>
        </Link>
      </div>

      {/* ======================================================== */}
      {/* 2. TITLE SECTION WITH BLUE ACCENT ICON */}
      {/* ======================================================== */}
      <div className="flex items-center gap-3.5">
        <div className="p-2.5 rounded-2xl bg-blue-50 text-primary border border-blue-100 shadow-2xs shrink-0">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Core Java, DSA & SQL Coding Preparation
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {allQuestions.length} curated interview questions with clean Java code, input/output examples, and MySQL queries.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. PRIMARY TRACK SWITCHER PILLS (SMOOTH, INSTANT, ZERO BLINK) */}
      {/* ======================================================== */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 overflow-x-auto scrollbar-none relative">
        {tracks.map(track => {
          const isSelected = selectedTrack === track.id;
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => {
                setSelectedTrack(track.id);
                setSelectedTopic('All');
              }}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm whitespace-nowrap transition-all duration-150 active:scale-[0.98] cursor-pointer select-none border ${
                isSelected
                  ? 'bg-white text-primary shadow-xs border-blue-200/90 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 border-transparent font-medium'
              }`}
            >
              <span>{track.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors duration-150 ${
                  isSelected ? 'bg-blue-100 text-primary' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {track.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 4. SUB-TOPIC FILTER CHIPS (STABLE, SMOOTH & RESPONSIVE) */}
      {/* ======================================================== */}
      {availableTopics.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
            Topics:
          </span>
          {availableTopics.map(top => {
            const isSelected = selectedTopic === top;
            const count =
              top === 'All'
                ? (selectedTrack === 'All'
                    ? allQuestions.length
                    : allQuestions.filter(q => q.track === selectedTrack).length)
                : (selectedTrack === 'All'
                    ? allQuestions.filter(q => q.topic === top).length
                    : allQuestions.filter(q => q.track === selectedTrack && q.topic === top).length);

            return (
              <button
                key={top}
                type="button"
                onClick={() => setSelectedTopic(top)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs whitespace-nowrap border transition-all duration-150 active:scale-95 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-primary text-white border-primary shadow-2xs font-bold'
                    : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-primary border-slate-200 font-medium'
                }`}
              >
                <span>{top}</span>
                <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. SEARCH & SORT CONTROLS (EASY TO HARD SORTING) */}
      {/* ======================================================== */}
      <div className="p-3.5 bg-white rounded-2xl border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search questions by title, problem, or topic..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Difficulty Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200/60">
            {['All', 'Easy', 'Medium', 'Hard'].map(diff => (
              <button
                key={diff}
                type="button"
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-150 active:scale-95 cursor-pointer border ${
                  selectedDifficulty === diff
                    ? 'bg-white text-primary font-bold shadow-2xs border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 border-transparent font-medium'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          {/* Custom Modern CSS Sort Dropdown */}
          <div className="relative" ref={sortDropdownRef}>
            <button
              type="button"
              onClick={() => setIsSortDropdownOpen(prev => !prev)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-150 active:scale-95 cursor-pointer select-none ${
                isSortDropdownOpen
                  ? 'bg-white text-primary border-primary shadow-xs ring-2 ring-primary/10'
                  : 'bg-slate-100 hover:bg-white text-slate-700 hover:text-slate-900 border-slate-200/80 shadow-2xs'
              }`}
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{sortLabels[sortBy]}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
                  isSortDropdownOpen ? 'rotate-180 text-primary' : ''
                }`}
              />
            </button>

            {/* Custom Animated Popup Menu */}
            <AnimatePresence>
              {isSortDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-1.5 z-40 w-44 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-1.5 shadow-xl shadow-slate-900/10 space-y-0.5"
                >
                  {(['default', 'easy-to-hard', 'hard-to-easy'] as SortOption[]).map(opt => {
                    const isSelected = sortBy === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSortBy(opt);
                          setIsSortDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer select-none text-left ${
                          isSelected
                            ? 'bg-blue-50 text-primary font-bold shadow-2xs'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                        }`}
                      >
                        <span>{sortLabels[opt]}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Showing Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Showing {filteredQuestions.length} of {allQuestions.length} interview questions</span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-primary hover:underline font-semibold cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* ======================================================== */}
      {/* 6. CLEAN ACCORDION LIST (INSTANT 60FPS, MEMOIZED, NO FLICKER) */}
      {/* ======================================================== */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
            <Terminal className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No matching questions found</h3>
            <p className="text-xs text-slate-400">Try adjusting your search query or filters.</p>
          </div>
        ) : (
          filteredQuestions.map(prob => (
            <QuestionCard
              key={prob.id}
              prob={prob}
              isExpanded={expandedIds.has(prob.id)}
              onToggle={toggleExpand}
            />
          ))
        )}
      </div>
    </div>
  );
}
