import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Search, CheckCircle2, Circle, 
  ChevronDown, ChevronUp, ChevronsUpDown,
  RotateCcw, Eye, EyeOff, Clock, Database,
  Terminal, Sparkles, Check
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
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
  timeComplexity?: string;
  spaceComplexity?: string;
}

const STORAGE_KEY = 'prep_completed_questions_v1';

export default function CodingPracticePage() {
  // Primary Track Filter: All | Core Java | DSA & Coding | SQL Queries
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [practiceMode, setPracticeMode] = useState<boolean>(false);

  // Expanded Accordion Questions
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['cj-arr-1']));
  const [revealedSolutions, setRevealedSolutions] = useState<Set<string>>(new Set());

  // Completed Question IDs in LocalStorage
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedQuestions)));
    } catch {
      // Ignore
    }
  }, [completedQuestions]);

  const toggleCompleted = (id: string) => {
    setCompletedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSolutionReveal = (id: string) => {
    setRevealedSolutions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Reset all completed question progress?')) {
      setCompletedQuestions(new Set());
    }
  };

  // Build the complete Unified List of 128 Questions
  const allQuestions: UnifiedQuestion[] = useMemo(() => {
    const list: UnifiedQuestion[] = [];
    let gNum = 1;

    // 1. Core Java (55 questions)
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
        timeComplexity: p.timeComplexity,
        spaceComplexity: p.spaceComplexity,
      });
    });

    // 3. SQL Queries (43 queries/questions)
    sqlPrepCategories.forEach(cat => {
      cat.questions.forEach(q => {
        list.push({
          id: q.id,
          track: 'SQL Queries',
          topic: cat.name,
          number: q.number,
          globalNumber: gNum++,
          title: q.title,
          difficulty: 'Medium',
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

  // Compute available Sub-Topics based on Selected Track
  const availableTopics = useMemo(() => {
    if (selectedTrack === 'Core Java') {
      return ['All', 'Arrays', 'Strings', 'Collections Framework', 'Exception Handling', 'Multithreading'];
    }
    if (selectedTrack === 'DSA & Coding') {
      return [
        'All', 'Arrays', 'Strings', 'Hashing', 'Two Pointers', 'Sliding Window',
        'Searching & Sorting', 'Linked List', 'Stack & Queue', 'Recursion'
      ];
    }
    if (selectedTrack === 'SQL Queries') {
      return [
        'All', 'SQL Basics', 'Keys & Constraints', 'SQL Joins', 'Subqueries',
        'GROUP BY & Aggregates', 'Common Interview Queries', 'Normalization & Design', 'Indexes & Performance'
      ];
    }
    return ['All'];
  }, [selectedTrack]);

  // Filter Questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      // Track filter
      if (selectedTrack !== 'All' && q.track !== selectedTrack) return false;

      // Topic filter
      if (selectedTopic !== 'All' && q.topic !== selectedTopic) return false;

      // Difficulty filter
      if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;

      // Status filter
      if (selectedStatus === 'Completed' && !completedQuestions.has(q.id)) return false;
      if (selectedStatus === 'Pending' && completedQuestions.has(q.id)) return false;

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
  }, [allQuestions, selectedTrack, selectedTopic, selectedDifficulty, selectedStatus, searchQuery, completedQuestions]);

  const allAreExpanded = filteredQuestions.length > 0 && filteredQuestions.every(q => expandedIds.has(q.id));

  const expandAll = () => {
    setExpandedIds(new Set(filteredQuestions.map(q => q.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const totalCompleted = completedQuestions.size;
  const totalCount = allQuestions.length; // 128
  const completionPercentage = Math.round((totalCompleted / totalCount) * 100);

  return (
    <div className="space-y-6 pb-24 animate-fade-in text-slate-800">
      {/* ======================================================== */}
      {/* 1. TOP HEADER & PROMINENT CLICKABLE BACK BUTTON */}
      {/* ======================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="outline-none"
          >
            <motion.div
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs hover:border-slate-400 transition-colors select-none cursor-pointer"
              title="Return to Concepts Dashboard"
            >
              <ArrowLeft className="w-4 h-4 text-slate-700" />
              <span>Back to Concepts</span>
            </motion.div>
          </Link>
        </div>

        {/* Global Progress and Controls */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
            <span className="text-slate-500 font-medium">Completed:</span>
            <strong className="text-slate-900 font-bold">{totalCompleted} / {totalCount}</strong>
            <span className="font-bold text-slate-700">({completionPercentage}%)</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.93 }}
            onClick={allAreExpanded ? collapseAll : expandAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs transition-colors cursor-pointer select-none"
          >
            {allAreExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                <span>Collapse All</span>
              </>
            ) : (
              <>
                <ChevronsUpDown className="w-3.5 h-3.5 text-slate-500" />
                <span>Expand All</span>
              </>
            )}
          </motion.button>

          {totalCompleted > 0 && (
            <motion.button
              whileTap={{ scale: 0.85, rotate: -180 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={handleResetProgress}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Reset progress"
            >
              <RotateCcw className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. TITLE & PROGRESS OVERVIEW */}
      {/* ======================================================== */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Core Java, DSA & SQL Coding Preparation
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          128 curated interview questions with clean Java code, input/output examples, and MySQL queries. Click any card to expand immediately.
        </p>

        {/* Clean Neutral Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-slate-200 mt-3 overflow-hidden">
          <div
            className="h-full bg-slate-800 transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. PRIMARY TRACK SWITCHER PILLS (CLICKABLE WITH SPRING) */}
      {/* ======================================================== */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto scrollbar-none relative">
        {[
          { id: 'All', label: 'All Questions', count: 128 },
          { id: 'Core Java', label: 'Core Java', count: 55 },
          { id: 'DSA & Coding', label: 'DSA & Coding', count: 30 },
          { id: 'SQL Queries', label: 'SQL Queries', count: 43 },
        ].map(track => {
          const isSelected = selectedTrack === track.id;
          return (
            <motion.button
              key={track.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              onClick={() => {
                setSelectedTrack(track.id);
                setSelectedTopic('All');
              }}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer select-none ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>{track.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                  isSelected ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {track.count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 4. SUB-TOPIC FILTER CHIPS (CLICKABLE) */}
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
                ? allQuestions.filter(q => q.track === selectedTrack).length
                : allQuestions.filter(q => q.track === selectedTrack && q.topic === top).length;

            return (
              <motion.button
                key={top}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                onClick={() => setSelectedTopic(top)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition-colors cursor-pointer select-none ${
                  isSelected
                    ? 'bg-slate-800 text-white border-slate-800 font-semibold shadow-2xs'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                <span>{top}</span>
                <span className="text-[10px] opacity-70">({count})</span>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. SEARCH & DIFFICULTY CONTROLS */}
      {/* ======================================================== */}
      <div className="p-3.5 bg-white rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs">
        {/* Search */}
        <div className="relative flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search questions by title, problem, or topic..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-slate-400 transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Difficulty Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            {['All', 'Easy', 'Medium', 'Hard'].map(diff => (
              <motion.button
                key={diff}
                whileTap={{ scale: 0.94 }}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedDifficulty === diff
                    ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {diff}
              </motion.button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            {['All', 'Completed', 'Pending'].map(status => (
              <motion.button
                key={status}
                whileTap={{ scale: 0.94 }}
                onClick={() => setSelectedStatus(status)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedStatus === status
                    ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status}
              </motion.button>
            ))}
          </div>

          {/* Practice Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setPracticeMode(false)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                !practiceMode ? 'bg-white text-slate-900 font-semibold shadow-2xs' : 'text-slate-600'
              }`}
            >
              Learn
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setPracticeMode(true)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                practiceMode ? 'bg-slate-800 text-white font-semibold shadow-2xs' : 'text-slate-600'
              }`}
            >
              Practice
            </motion.button>
          </div>
        </div>
      </div>

      {/* Showing Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Showing {filteredQuestions.length} of {allQuestions.length} interview questions</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-slate-700 hover:underline font-semibold cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* ======================================================== */}
      {/* 6. CLICKABLE ACCORDION LIST WITH FLUID SPRING ANIMATIONS */}
      {/* ======================================================== */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
            <Terminal className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No matching questions found</h3>
            <p className="text-xs text-slate-400">Try adjusting your search query or filters.</p>
          </div>
        ) : (
          filteredQuestions.map(prob => {
            const isExpanded = expandedIds.has(prob.id);
            const isDone = completedQuestions.has(prob.id);

            return (
              <motion.div
                key={prob.id}
                layout
                transition={{ duration: 0.2 }}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-slate-400 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-2xs'
                }`}
              >
                {/* Accordion Header (Fully Clickable Card) */}
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  onClick={() => toggleExpand(prob.id)}
                  className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Mark Completed Checkbox */}
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                      onClick={e => {
                        e.stopPropagation();
                        toggleCompleted(prob.id);
                      }}
                      className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-800 transition-colors shrink-0 mt-0.5 cursor-pointer"
                      title={isDone ? 'Mark as Incomplete' : 'Mark as Completed'}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-slate-900 fill-slate-100" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                      )}
                    </motion.button>

                    <div className="min-w-0 flex-1">
                      {/* Meta Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          Q{prob.number < 10 ? `0${prob.number}` : prob.number}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {prob.track}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                          {prob.topic}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {prob.difficulty}
                        </span>
                        {isDone && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-900 text-white">
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Question Title */}
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {prob.title}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Button with Rotating Chevron */}
                  <div className="flex items-center gap-2 shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      onClick={e => {
                        e.stopPropagation();
                        toggleExpand(prob.id);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none ${
                        isExpanded
                          ? 'bg-slate-800 text-white hover:bg-slate-900'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isExpanded ? 'Hide Solution' : 'View Solution'}
                    </motion.button>

                    <div className="p-1 text-slate-400">
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          isExpanded ? 'rotate-180 text-slate-800' : 'rotate-0'
                        }`} 
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Accordion Expanded Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-slate-200"
                    >
                      <div className="p-5 sm:p-6 bg-slate-50/70 space-y-5">
                        {/* 1. THEORY INTERVIEW-READY ANSWER */}
                        {prob.answer && (
                          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-2xs">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-slate-500" />
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
                            <div className="p-3 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto">
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                              {prob.input && (
                                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                                  <span className="font-semibold text-slate-500 block mb-1 text-[11px] uppercase tracking-wider">
                                    Sample Input:
                                  </span>
                                  <code className="text-slate-800 font-mono text-xs sm:text-sm font-semibold block break-all">
                                    {prob.input}
                                  </code>
                                </div>
                              )}

                              {(prob.output || prob.expectedOutput) && (
                                <div className="p-3.5 bg-white rounded-xl border border-slate-300 shadow-2xs">
                                  <span className="font-semibold text-slate-700 block mb-1 text-[11px] uppercase tracking-wider">
                                    Expected Output:
                                  </span>
                                  <code className="text-slate-900 font-mono text-xs sm:text-sm font-semibold block break-all whitespace-pre-line">
                                    {prob.output || prob.expectedOutput}
                                  </code>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* 5. CODE / SQL QUERY (PRACTICE MODE SUPPORT) */}
                        {(prob.code || prob.query) && (
                          <div>
                            {practiceMode && !revealedSolutions.has(prob.id) ? (
                              <div className="p-6 bg-white rounded-xl border border-dashed border-slate-300 text-center space-y-2">
                                <EyeOff className="w-6 h-6 text-slate-400 mx-auto" />
                                <h4 className="text-xs font-bold text-slate-700">Practice Mode</h4>
                                <p className="text-xs text-slate-500">Try formulating your logic before viewing the complete code!</p>
                                <motion.button
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.94 }}
                                  onClick={() => toggleSolutionReveal(prob.id)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Reveal Solution</span>
                                </motion.button>
                              </div>
                            ) : (
                              <div>
                                {prob.code && (
                                  <CodeBlock
                                    code={prob.code}
                                    language="java"
                                    title="Complete Runnable Java Code"
                                  />
                                )}
                                {prob.query && (
                                  <CodeBlock
                                    code={prob.query}
                                    language="sql"
                                    title="Tested MySQL Query"
                                  />
                                )}
                                {practiceMode && (
                                  <div className="mt-2 text-right">
                                    <button
                                      onClick={() => toggleSolutionReveal(prob.id)}
                                      className="text-xs text-slate-500 hover:text-slate-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                                    >
                                      <EyeOff className="w-3.5 h-3.5" />
                                      <span>Hide Solution</span>
                                    </button>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* 6. COMPLEXITY BADGES */}
                        {prob.timeComplexity && (
                          <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                              <Clock className="w-3.5 h-3.5 text-slate-500" />
                              <span className="text-slate-500">Time:</span>
                              <strong className="font-mono text-slate-800">{prob.timeComplexity}</strong>
                            </div>
                            {prob.spaceComplexity && (
                              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                                <Database className="w-3.5 h-3.5 text-slate-500" />
                                <span className="text-slate-500">Space:</span>
                                <strong className="font-mono text-slate-800">{prob.spaceComplexity}</strong>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Bottom Item Actions */}
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                          <motion.button
                            whileTap={{ scale: 0.94 }}
                            onClick={() => toggleCompleted(prob.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                              isDone
                                ? 'bg-slate-900 text-white'
                                : 'bg-white hover:bg-slate-100 border border-slate-300 text-slate-700'
                            }`}
                          >
                            {isDone ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Completed</span>
                              </>
                            ) : (
                              <>
                                <Circle className="w-3.5 h-3.5 text-slate-400" />
                                <span>Mark as Completed</span>
                              </>
                            )}
                          </motion.button>

                          <button
                            onClick={() => toggleExpand(prob.id)}
                            className="text-slate-500 hover:text-slate-800 font-medium text-xs cursor-pointer"
                          >
                            Close Panel ↑
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
